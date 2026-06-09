/**
 * Package Filter - AlpineJS component
 * Handles filtering and searching of cards that contain package data
 *
 * IMPORTANT: This script must load WITHOUT 'defer' attribute so it executes
 * immediately and registers the 'alpine:init' listener before Alpine.js initializes.
 */

document.addEventListener('alpine:init', () => {
  Alpine.data('packageFilter', () => ({
    packages: [],
    searchQuery: '',
    activeFilter: '*',

    initPackages(packageData) {
      if (typeof packageData === 'string') {
        try {
          packageData = JSON.parse(packageData);
        } catch (e) {
          packageData = [];
        }
      }
      this.packages = Array.isArray(packageData) ? packageData : [];
    },

    get activePackages() {
      return this.filterPackages(true);
    },

    get archivedPackages() {
      // Archived packages are never filtered - always show all
      return this.packages.filter(pkg => pkg.active === false);
    },

    categoryMatches(pkg, filter) {
      const cats = pkg.categories || [];
      if (filter === 'data-munging') {
        return cats.some(cat =>
          cat === 'data-munging' ||
          cat.includes('data-processing-munging')
        );
      }
      if (filter === 'data-visualization') {
        return cats.some(cat => cat.includes('data-visualization'));
      }
      return cats.some(cat =>
        cat.includes(filter) ||
        cat === filter.replace(/-/g, '_')
      );
    },

    filterPackages(activeOnly) {
      let filtered = this.packages;
      filtered = filtered.filter(pkg => pkg.active === activeOnly);

      if (this.activeFilter !== '*') {
        filtered = filtered.filter(pkg => this.categoryMatches(pkg, this.activeFilter));
      }

      if (this.searchQuery.trim() !== '') {
        const query = this.searchQuery.toLowerCase();
        filtered = filtered.filter(pkg => {
          const nameMatch = pkg.package_name?.toLowerCase().includes(query);
          const descMatch = pkg.package_description?.toLowerCase().includes(query);
          const maintainerMatch = pkg.all_current_maintainers?.some(m =>
            m.name?.toLowerCase().includes(query) ||
            m.github_username?.toLowerCase().includes(query)
          );
          return nameMatch || descMatch || maintainerMatch;
        });
      }

      return filtered;
    }
  }));
});
