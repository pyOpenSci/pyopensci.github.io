/**
 * In-page table of contents from h2/h3 headings.
 * Used by docs layout and blog posts with toc: true.
 *
 * Markup: a [data-toc-root] wrapper containing [data-toc-content] and .toc-items
 */
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('[data-toc-root]').forEach(function(root) {
    const contentEl = root.querySelector('[data-toc-content]');
    const tocContainer = root.querySelector('.toc-items');
    const scrollToTopBtn = root.querySelector('.docs-scroll-btn');

    if (!contentEl || !tocContainer) return;

    function generateInlineToc() {
      const headings = contentEl.querySelectorAll('h2, h3');
      if (headings.length === 0) return;

      let currentH2Item = null;
      let currentH3List = null;

      headings.forEach(function(heading, index) {
        if (!heading.id) {
          heading.id = 'heading-' + index;
        }

        const link = document.createElement('a');
        link.href = '#' + heading.id;
        link.textContent = heading.textContent;
        link.className = 'toc-link';

        const listItem = document.createElement('li');
        listItem.className = 'toc-item';
        listItem.appendChild(link);

        if (heading.tagName === 'H2') {
          tocContainer.appendChild(listItem);
          currentH2Item = listItem;
          currentH3List = null;
        } else if (heading.tagName === 'H3' && currentH2Item) {
          if (!currentH3List) {
            currentH3List = document.createElement('ul');
            currentH3List.className = 'toc-sublist';
            currentH2Item.appendChild(currentH3List);
          }
          listItem.className = 'toc-item toc-item--sub';
          currentH3List.appendChild(listItem);
        }

        link.addEventListener('click', function(e) {
          e.preventDefault();
          const target = document.getElementById(heading.id);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            history.pushState(null, null, '#' + heading.id);
            updateActiveLink(link);
          }
        });
      });
    }

    function updateActiveLink(activeLink) {
      const links = tocContainer.querySelectorAll('.toc-link');

      if (activeLink) {
        links.forEach(function(link) { link.classList.remove('toc-link--active'); });
        activeLink.classList.add('toc-link--active');
        return;
      }

      const headings = contentEl.querySelectorAll('h2, h3');
      let currentHeading = null;

      headings.forEach(function(heading) {
        if (heading.getBoundingClientRect().top <= 100) {
          currentHeading = heading;
        }
      });

      links.forEach(function(link) {
        link.classList.remove('toc-link--active');
        if (currentHeading && link.getAttribute('href') === '#' + currentHeading.id) {
          link.classList.add('toc-link--active');
        }
      });
    }

    function toggleScrollButton() {
      if (!scrollToTopBtn) return;
      if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('docs-scroll-btn--visible');
      } else {
        scrollToTopBtn.classList.remove('docs-scroll-btn--visible');
      }
    }

    if (scrollToTopBtn) {
      scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    generateInlineToc();
    updateActiveLink();

    let scrollTimeout;
    window.addEventListener('scroll', function() {
      if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
      }
      scrollTimeout = window.requestAnimationFrame(function() {
        updateActiveLink();
        toggleScrollButton();
      });
    });
  });

  if (window.location.hash) {
    setTimeout(function() {
      const target = document.querySelector(window.location.hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }
});
