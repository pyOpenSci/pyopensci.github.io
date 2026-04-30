/**
 * Blog Category Filter Functionality
 * Handles filtering blog posts by category
 */
(function() {
  'use strict';

  function initBlogFilter() {
    const filterButtons = document.querySelectorAll('.blog-grid__filter-btn');
    const allPosts = document.querySelectorAll('[data-category]');
    const featuredSection = document.querySelector('.blog-grid__featured');
    const gridSection = document.querySelector('.blog-grid__posts');

    // Early return if no filters or posts
    if (filterButtons.length === 0 || allPosts.length === 0) {
      return;
    }

    filterButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        const category = this.getAttribute('data-category');

        // Update active button - all buttons always stay visible
        filterButtons.forEach(btn => {
          btn.classList.remove('active');
          btn.setAttribute('aria-pressed', 'false');
        });
        this.classList.add('active');
        this.setAttribute('aria-pressed', 'true');

        // Filter posts
        allPosts.forEach(post => {
          const postCategory = post.getAttribute('data-category') || '';

          if (category === 'all' || postCategory === category) {
            post.style.display = '';
          } else {
            post.style.display = 'none';
          }
        });

        // Show/hide sections if they have no visible posts
        if (featuredSection) {
          const featuredPosts = featuredSection.querySelectorAll('[data-category]');
          const hasVisibleFeatured = Array.from(featuredPosts).some(post => {
            const postCategory = post.getAttribute('data-category') || '';
            return (category === 'all' || postCategory === category) && post.style.display !== 'none';
          });
          featuredSection.style.display = hasVisibleFeatured ? '' : 'none';
        }

        if (gridSection) {
          const gridPosts = gridSection.querySelectorAll('[data-category]');
          const hasVisibleGrid = Array.from(gridPosts).some(post => {
            const postCategory = post.getAttribute('data-category') || '';
            return (category === 'all' || postCategory === category) && post.style.display !== 'none';
          });
          gridSection.style.display = hasVisibleGrid ? '' : 'none';
        }

        // Announce filter change to screen readers
        const categoryName = category === 'all' ? 'all categories' : category;
        announceFilterChange(categoryName);
      });
    });
  }

  /**
   * Announce filter change to screen readers
   */
  function announceFilterChange(category) {
    // Create or get live region
    let liveRegion = document.getElementById('blog-filter-announcement');
    if (!liveRegion) {
      liveRegion = document.createElement('div');
      liveRegion.id = 'blog-filter-announcement';
      liveRegion.setAttribute('role', 'status');
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.className = 'sr-only';
      liveRegion.style.cssText = 'position: absolute; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border-width: 0;';
      document.body.appendChild(liveRegion);
    }

    const visibleCount = document.querySelectorAll('[data-category]:not([style*="display: none"])').length;
    liveRegion.textContent = `Filtered to ${category}. Showing ${visibleCount} post${visibleCount !== 1 ? 's' : ''}.`;
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBlogFilter);
  } else {
    initBlogFilter();
  }
})();
