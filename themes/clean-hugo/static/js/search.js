/**
 * Site search overlay — open/close, focus, and Escape handling.
 * Algolia loads via window.pyosSearchInit (algolia-search.js).
 */
(function() {
  'use strict';

  function initSearchUI() {
    const toggle = document.querySelector('.search__toggle');
    const searchPanel = document.getElementById('site-search');
    const pageContent = document.querySelector('.page-content');
    const closeButtons = document.querySelectorAll('[data-search-close]');
    const navMenu = document.querySelector('#site-nav-menu');
    const navToggle = document.querySelector('.site-nav__toggle');

    if (!toggle || !searchPanel) {
      return;
    }

    function isOpen() {
      return searchPanel.classList.contains('is--visible');
    }

    function closeMobileNav() {
      if (navMenu) {
        navMenu.classList.remove('site-nav__menu--open');
      }
      if (navToggle) {
        navToggle.setAttribute('aria-expanded', 'false');
      }
    }

    function focusSearchInput() {
      const input = searchPanel.querySelector('.ais-SearchBox-input')
        || searchPanel.querySelector('input[type="search"]')
        || searchPanel.querySelector('input');
      if (input) {
        input.focus();
      }
    }

    function openSearch() {
      closeMobileNav();
      searchPanel.classList.add('is--visible');
      searchPanel.removeAttribute('hidden');
      searchPanel.removeAttribute('aria-hidden');
      searchPanel.setAttribute('aria-modal', 'true');
      toggle.setAttribute('aria-expanded', 'true');
      if (pageContent) {
        pageContent.setAttribute('aria-hidden', 'true');
        pageContent.setAttribute('inert', '');
      }
      document.body.classList.add('search-is-open');

      if (typeof window.pyosSearchInit === 'function') {
        window.pyosSearchInit();
      }

      /* Fallback if Algolia is slow; pyos:search-ready handles the normal path. */
      window.setTimeout(focusSearchInput, 500);
    }

    function closeSearch() {
      toggle.setAttribute('aria-expanded', 'false');
      toggle.focus();

      searchPanel.classList.remove('is--visible');
      searchPanel.setAttribute('hidden', '');
      searchPanel.setAttribute('aria-hidden', 'true');
      searchPanel.removeAttribute('aria-modal');
      if (pageContent) {
        pageContent.removeAttribute('aria-hidden');
        pageContent.removeAttribute('inert');
      }
      document.body.classList.remove('search-is-open');
    }

    toggle.addEventListener('click', function() {
      if (isOpen()) {
        closeSearch();
      } else {
        openSearch();
      }
    });

    closeButtons.forEach(function(button) {
      button.addEventListener('click', closeSearch);
    });

    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape' && isOpen()) {
        closeSearch();
      }
    });

    document.addEventListener('pyos:search-ready', focusSearchInput);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSearchUI);
  } else {
    initSearchUI();
  }
})();
