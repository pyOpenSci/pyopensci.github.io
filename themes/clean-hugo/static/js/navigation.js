/**
 * Navigation JavaScript
 * Handles mobile menu toggle and dropdown menu interactions
 */

(function() {
  'use strict';

  const toggle = document.querySelector('.site-nav__toggle');
  const menu = document.querySelector('#site-nav-menu');

  if (!toggle || !menu) {
    return; // Navigation elements not found
  }

  // Toggle main menu
  toggle.addEventListener('click', function() {
    const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', !isExpanded);
    menu.classList.toggle('site-nav__menu--open');
  });

  // Handle dropdown menus
  const dropdowns = menu.querySelectorAll('.site-nav__dropdown');
  dropdowns.forEach(function(dropdown) {
    const dropdownToggle = dropdown.querySelector('.site-nav__link--dropdown');
    const dropdownMenu = dropdown.querySelector('.site-nav__dropdown-menu');

    if (dropdownToggle && dropdownMenu) {
      dropdownToggle.addEventListener('click', function(e) {
        // On mobile, toggle dropdown
        if (window.innerWidth < 768) {
          e.preventDefault();
          const isOpen = dropdownMenu.classList.contains('site-nav__dropdown-menu--open');
          // Toggle menu visibility
          dropdownMenu.classList.toggle('site-nav__dropdown-menu--open');
          // Toggle aria-expanded and update it based on new state
          const newState = !isOpen;
          dropdownToggle.setAttribute('aria-expanded', newState.toString());
        }
        // On desktop, let hover handle it
      });
    }
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
    if (!toggle.contains(event.target) && !menu.contains(event.target)) {
      toggle.setAttribute('aria-expanded', 'false');
      menu.classList.remove('site-nav__menu--open');
    }
  });

  // Close menu when clicking on a non-dropdown link (mobile)
  const menuLinks = menu.querySelectorAll('.site-nav__link:not(.site-nav__link--dropdown), .site-nav__dropdown-link');
  menuLinks.forEach(function(link) {
    link.addEventListener('click', function() {
      if (window.innerWidth < 768) {
        toggle.setAttribute('aria-expanded', 'false');
        menu.classList.remove('site-nav__menu--open');
      }
    });
  });
})();

