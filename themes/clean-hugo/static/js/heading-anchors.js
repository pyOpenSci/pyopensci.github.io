/**
 * Heading anchor links.
 * The icon is added in partials/heading.html (Markdown and
 * section headings). Clicking it copies the section URL and
 * shows a brief "Link copied" tooltip. The icon is a real
 * href="#id" link, so the jump still works with JavaScript off.
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
