/**
 * Algolia InstantSearch integration for pyOpenSci.
 * Config is read from data-* attributes on #site-search (set in search-overlay.html).
 * Loaded on demand when the search overlay opens (see search.js).
 */
(function() {
  'use strict';

  const CDN = {
    css: 'https://cdn.jsdelivr.net/npm/instantsearch.css@8/themes/algolia-min.css',
    algoliasearch:
      'https://cdn.jsdelivr.net/npm/algoliasearch@4/dist/algoliasearch-lite.umd.js',
    instantsearch:
      'https://cdn.jsdelivr.net/npm/instantsearch.js@4/dist/instantsearch.production.min.js',
  };

  /* URL path fragments → result category labels (first match wins). */
  const TAG_RULES = [
    {
      paths: ['python-package-guide/tutorials/', '/lessons/'],
      label: 'Tutorial',
    },
    {
      paths: ['/python-package-guide/', '/packaging-guide/'],
      label: 'Packaging Guide',
    },
    { paths: ['/software-peer-review/'], label: 'Peer Review Guide' },
    { paths: ['/handbook/'], label: 'Handbook' },
    { paths: ['/metrics/'], label: 'Metrics' },
    { paths: ['/events/', '/event/'], label: 'Event' },
    { paths: ['/blog/', '/posts/'], label: 'Blog' },
    { paths: ['/docs/', '/guide/'], label: 'Docs' },
  ];

  let initialized = false;

  function loadCSS(href) {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = href;
    document.head.appendChild(link);
  }

  function loadScript(src) {
    return new Promise(function(resolve, reject) {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }

  function readConfig() {
    const panel = document.getElementById('site-search');
    if (!panel) {
      return null;
    }

    return {
      appId: panel.dataset.algoliaAppId || '',
      apiKey: panel.dataset.algoliaApiKey || '',
      indexName: panel.dataset.algoliaIndexName || '',
      baseUrl: panel.dataset.baseUrl || '',
      placeholder: panel.dataset.placeholder || 'Search the site...',
      noResults: panel.dataset.noResults || 'No results',
      poweredBy: panel.dataset.poweredBy !== 'false',
      errorMessage:
        panel.dataset.errorMessage
        || 'Search is temporarily unavailable. Please try again.',
    };
  }

  function getHighlight(hit, path) {
    const parts = path.split('.');
    let ref = hit._highlightResult || {};
    for (const part of parts) {
      if (!ref) {
        return null;
      }
      ref = ref[part];
    }
    return ref && ref.value ? ref.value : null;
  }

  function resolveTitle(hit) {
    return (
      getHighlight(hit, 'title')
      || getHighlight(hit, 'hierarchy.lvl1')
      || getHighlight(hit, 'hierarchy.lvl0')
      || hit.title
      || (hit.hierarchy && (hit.hierarchy.lvl1 || hit.hierarchy.lvl0))
      || hit.url
    );
  }

  function resolveSnippet(hit) {
    return (
      getHighlight(hit, 'content')
      || getHighlight(hit, 'hierarchy.lvl2')
      || getHighlight(hit, 'hierarchy.lvl1')
      || ''
    );
  }

  function normalizeUrl(url, baseUrl) {
    if (!url) {
      return '#';
    }
    if (/^https?:\/\//i.test(url)) {
      return url;
    }
    return baseUrl + url;
  }

  function deriveTag(url) {
    if (!url) {
      return 'Page';
    }
    const lower = url.toLowerCase();
    for (const rule of TAG_RULES) {
      if (rule.paths.some(function(path) { return lower.includes(path); })) {
        return rule.label;
      }
    }
    return 'Website';
  }

  function renderHit(hit, baseUrl) {
    const title = resolveTitle(hit);
    const snippet = resolveSnippet(hit);
    const url = normalizeUrl(hit.url, baseUrl);
    const tag = deriveTag(hit.url || '');

    let html = '<div class="search-result-row" role="listitem">';
    html += '<div class="search-result-meta">';
    html += '<span class="search-result-tag">' + tag + '</span>';
    html += '</div>';
    html += '<a class="search-result-title" href="' + url + '">' + title + '</a>';
    if (snippet) {
      html += '<div class="search-result-snippet">' + snippet + '</div>';
    }
    html += '</div>';
    return html;
  }

  function clearLoadingState() {
    const loading = document.querySelector('.search-loading');
    if (loading) {
      loading.remove();
    }
  }

  function showError(message) {
    const loading = document.querySelector('.search-loading');
    if (loading) {
      loading.textContent = message;
    }
  }

  function focusSearchInput() {
    const input = document.querySelector('.ais-SearchBox-input');
    if (input) {
      input.focus();
    }
  }

  function buildSearch(config) {
    if (!config.appId || !config.apiKey || !config.indexName) {
      console.warn('[Algolia] Missing config (appId/apiKey/indexName).');
      return;
    }

    const searchClient = algoliasearch(config.appId, config.apiKey);
    const search = instantsearch({
      indexName: config.indexName,
      searchClient: searchClient,
    });

    search.addWidgets([
      instantsearch.widgets.searchBox({
        container: '.search-searchbar',
        placeholder: config.placeholder,
        showReset: true,
        showSubmit: true,
        showLoadingIndicator: false,
        poweredBy: config.poweredBy,
      }),
      instantsearch.widgets.hits({
        container: '.search-hits',
        templates: {
          item: function(hit) {
            return renderHit(hit, config.baseUrl);
          },
          empty: config.noResults,
        },
      }),
    ]);

    if (!search.started) {
      search.start();
    }

    clearLoadingState();
    focusSearchInput();
    document.dispatchEvent(new CustomEvent('pyos:search-ready'));
  }

  function initOnDemand() {
    if (initialized) {
      return;
    }
    initialized = true;

    const config = readConfig();
    if (!config) {
      return;
    }

    Promise.resolve()
      .then(function() { return loadCSS(CDN.css); })
      .then(function() { return loadScript(CDN.algoliasearch); })
      .then(function() { return loadScript(CDN.instantsearch); })
      .then(function() { buildSearch(config); })
      .catch(function(err) {
        console.error('[Algolia] Failed to load search assets', err);
        showError(config.errorMessage);
      });
  }

  window.pyosSearchInit = initOnDemand;
})();
