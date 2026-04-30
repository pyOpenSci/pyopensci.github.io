/**
 * People Filter - AlpineJS component
 * Must load WITHOUT 'defer' to register before Alpine initializes
 */

document.addEventListener('alpine:init', () => {
  Alpine.data('peopleFilter', () => ({
    people: [],
    searchQuery: '',
    activeFilter: '*',

    initPeople(peopleData) {
      this.people = peopleData || [];
    },

    get filteredPeople() {
      return this.filterPeople();
    },

    filterPeople() {
      let filtered = this.people;

      if (this.activeFilter !== '*') {
        filtered = filtered.filter(person => {
          return person.contributor_type && person.contributor_type.some(type =>
            type === this.activeFilter || type === this.activeFilter.replace(/-/g, '_')
          );
        });
      }

      if (this.searchQuery.trim() !== '') {
        const query = this.searchQuery.toLowerCase();
        filtered = filtered.filter(person => {
          const nameMatch = person.name?.toLowerCase().includes(query);
          const orgMatch = person.organization?.toLowerCase().includes(query);
          const titleMatch = person.title?.some(t => t.toLowerCase().includes(query));
          const githubMatch = person.github_username?.toLowerCase().includes(query);
          return nameMatch || orgMatch || titleMatch || githubMatch;
        });
      }

      // Sort by sort field (default to 9 if not present)
      filtered = filtered.sort((a, b) => {
        const sortA = a.sort !== undefined ? Number(a.sort) : 9;
        const sortB = b.sort !== undefined ? Number(b.sort) : 9;
        return sortA - sortB;
      });

      return filtered;
    }
  }));
});

