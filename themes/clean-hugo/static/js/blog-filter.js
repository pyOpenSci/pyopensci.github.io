/**
 * Blog category filter — scoped to [data-blog-filter-root]
 */
(function() {
  'use strict';

  const HIDDEN_ITEM = 'blog-filter-hidden';
  const HIDDEN_SECTION = 'blog-filter-section-hidden';

  function sectionHasVisibleItems(section, category) {
    if (!section) {
      return false;
    }

    return Array.from(section.querySelectorAll('.blog-filter-item')).some((item) => {
      const itemCategory = item.getAttribute('data-category') || '';
      return category === 'all' || itemCategory === category;
    });
  }

  function announceFilterChange(category) {
    let liveRegion = document.getElementById('blog-filter-announcement');
    if (!liveRegion) {
      liveRegion = document.createElement('div');
      liveRegion.id = 'blog-filter-announcement';
      liveRegion.setAttribute('role', 'status');
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.className = 'sr-only';
      document.body.appendChild(liveRegion);
    }

    const visibleCount = document.querySelectorAll(
      '.blog-filter-item:not(.' + HIDDEN_ITEM + ')'
    ).length;
    const label = category === 'all' ? 'all categories' : category.replace(/-/g, ' ');
    liveRegion.textContent = 'Filtered to ' + label + '. Showing ' + visibleCount +
      ' post' + (visibleCount !== 1 ? 's' : '') + '.';
  }

  function applyFilter(root, category) {
    const buttons = root.querySelectorAll('.filter-btn[data-category]');
    const items = root.querySelectorAll('.blog-filter-item');
    const featuredSection = root.querySelector('.blog-grid__featured');
    const gridSection = root.querySelector('.blog-grid__posts');
    const archivesSection = root.querySelector('.blog-archives');

    items.forEach((item) => {
      const itemCategory = item.getAttribute('data-category') || '';
      const show = category === 'all' || itemCategory === category;
      item.classList.toggle(HIDDEN_ITEM, !show);
    });

    [featuredSection, gridSection, archivesSection].forEach((section) => {
      if (!section) {
        return;
      }
      section.classList.toggle(HIDDEN_SECTION, !sectionHasVisibleItems(section, category));
    });

    announceFilterChange(category);
  }

  function initBlogFilter() {
    document.querySelectorAll('[data-blog-filter-root]').forEach((root) => {
      const buttons = root.querySelectorAll('.filter-btn[data-category]');
      const items = root.querySelectorAll('.blog-filter-item');

      if (buttons.length === 0 || items.length === 0) {
        return;
      }

      root.addEventListener('click', (event) => {
        const button = event.target.closest('.filter-btn[data-category]');
        if (!button || !root.contains(button)) {
          return;
        }

        event.preventDefault();
        const category = button.getAttribute('data-category');

        buttons.forEach((btn) => {
          btn.setAttribute('aria-pressed', btn === button ? 'true' : 'false');
        });

        applyFilter(root, category);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBlogFilter);
  } else {
    initBlogFilter();
  }
})();
