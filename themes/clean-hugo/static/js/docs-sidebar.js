/**
 * Documentation Sidebar Mobile Toggle
 * Handles slide-out drawer functionality on mobile devices (<768px)
 *
 * Features:
 * - Toggle sidebar visibility with button
 * - Semi-transparent overlay behind sidebar
 * - Close on overlay click or ESC key
 * - Desktop sidebar remains always visible (separate from mobile drawer)
 */

document.addEventListener('DOMContentLoaded', function() {
  const docsSidebar = document.querySelector('.docs-sidebar');
  const docsToggle = document.querySelector('.docs-toggle');
  const overlay = document.querySelector('.overlay');

  if (!docsSidebar || !docsToggle || !overlay) return;

  /**
   * Toggle sidebar and overlay visibility
   */
  function toggleSidebar() {
    docsSidebar.classList.toggle('open');
    overlay.classList.toggle('open');
  }

  /**
   * Close sidebar and overlay
   */
  function closeSidebar() {
    docsSidebar.classList.remove('open');
    overlay.classList.remove('open');
  }

  /**
   * Handle toggle button click
   */
  docsToggle.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleSidebar();
  });

  /**
   * Close sidebar when clicking overlay
   */
  overlay.addEventListener('click', function(e) {
    e.stopPropagation();
    closeSidebar();
  });

  /**
   * Close sidebar when clicking links in the sidebar
   */
  const sidebarLinks = docsSidebar.querySelectorAll('a');
  sidebarLinks.forEach(link => {
    link.addEventListener('click', function() {
      closeSidebar();
    });
  });

  /**
   * Close sidebar on ESC key press
   */
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      closeSidebar();
    }
  });

  /**
   * Close sidebar when clicking on main content
   */
  const docsContent = document.querySelector('.docs-content');
  if (docsContent) {
    docsContent.addEventListener('click', function() {
      if (overlay.classList.contains('open')) {
        closeSidebar();
      }
    });
  }
});
