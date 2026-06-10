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
      if (typeof peopleData === 'string') {
        try {
          peopleData = JSON.parse(peopleData);
        } catch (e) {
          peopleData = [];
        }
      }
      this.people = Array.isArray(peopleData) ? peopleData : [];
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

      // Newest contributors first (matches legacy /our-community/ order)
      filtered = filtered.sort((a, b) => {
        const dateA = a.date_added ? new Date(a.date_added) : new Date(0);
        const dateB = b.date_added ? new Date(b.date_added) : new Date(0);
        return dateB - dateA;
      });

      return filtered;
    }
  }));
});
