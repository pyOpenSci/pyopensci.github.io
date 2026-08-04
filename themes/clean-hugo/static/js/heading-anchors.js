/**
 * Heading anchor links.
 * Each H2-H4 gets a "copy link" icon (added by the
 * render-heading.html hook). Clicking it copies the section's
 * full URL to the clipboard and shows a brief "Link copied"
 * tooltip. The icon is still a real `href="#id"` link, so it
 * keeps working (jump + right-click "copy link") with JS off.
 */
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('[data-heading-anchor]').forEach(function (anchor) {
    anchor.addEventListener('click', function (event) {
      event.preventDefault();

      const hash = anchor.getAttribute('href');
      const url = window.location.origin + window.location.pathname + hash;

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).catch(function () {});
      }

      history.pushState(null, '', hash);

      anchor.classList.add('heading-anchor--copied');
      clearTimeout(anchor._copyTimeout);
      anchor._copyTimeout = setTimeout(function () {
        anchor.classList.remove('heading-anchor--copied');
      }, 1500);
    });
  });
});
