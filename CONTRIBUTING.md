# Contributing to pyOpenSci

## Organization

If you are interested in contributing to pyOpenSci, please read about
how we work in [**pyOpenSci's organization-wide contributing guide**](https://www.pyopensci.org/handbook/CONTRIBUTING.html).

## Updating blog posts

We have a bash script, `scripts/date-updated.sh`, that walks blog posts and sets
the `last_modified:` date in front matter from your local git history. It only
updates posts that already include a `last_modified:` key.

Hugo blog posts live in `content/blog/`. The script still scans `_posts/`
(Jekyll layout) — update the script path after cutover, or edit front matter
manually until then.

From the repository root:

```bash
chmod +x scripts/date-updated.sh
./scripts/date-updated.sh
```

In the future we will add this step to our CI build.

## Contributing to other pyOpenSci GitHub Repositories

If you are interested in contributing to a specific repository, please review
the `README.md` and `CONTRIBUTING.md` files in the repository. If you have any
questions, please open an issue in the repository or contact us via Slack.

### pyOpenSci Website

This repository, [`pyOpenSci/pyopensci.github.io`](https://github.com/pyOpenSci/pyopensci.github.io),
contains the source code for the [pyOpenSci.org](https://www.pyopensci.org) website.

The site is migrating from Jekyll to **[Hugo](https://gohugo.io)**. Hugo source
lives at the repo root (`content/`, `data/`, `themes/clean-hugo/`). The legacy
Jekyll site remains in `jekyll/` until production cutover.

If you want to contribute pages, blog posts, theme layouts, SCSS, or shortcodes,
start here:

1. Read [README.md](./README.md) for prerequisites and local setup (`npm ci`,
   `hugo server --disableFastRender`).
2. Read [DEVELOPMENT.md](./DEVELOPMENT.md) for CSS architecture and the Hugo
   asset pipeline.

Please test changes locally before opening a pull request.

#### Documentation book layout (`layout: docs`)

The theme includes a **docs layout** for multi-page guides with a sidebar, mobile
toggle, and in-page table of contents. Use it when you want a small “book” of
Hugo pages on the main site (for example, contributor docs or an internal
guide), separate from splash landing pages and blog posts.

**Layout files** (in `themes/clean-hugo/`):

| Path | Role |
|------|------|
| `layouts/_default/docs.html` | Docs page shell (header, sidebar, content column) |
| `layouts/partials/docs-sidebar.html` | Auto-built sidebar from `content/documentation/` |
| `layouts/partials/docs-toc.html` | On-page heading TOC for the active page |
| `layouts/partials/docs-menu-recursive.html` | Nested sidebar items |
| `assets/css/_docs.scss` | Docs layout styles |
| `static/js/docs-nav.js`, `docs-sidebar.js` | Sidebar toggle and scroll behavior |

**How to add a documentation section**

1. Create a content section at `content/documentation/`:

   ```
   content/documentation/
   ├── _index.md          # Section home (sidebar “Documentation” link)
   ├── getting-started.md
   └── shortcodes/
       └── _index.md      # Nested subsection (optional)
   ```

2. Set `layout: docs` on every page in the section (including `_index.md`):

   ```yaml
   ---
   title: Getting started
   layout: docs
   weight: 10
   excerpt: Optional intro paragraph below the header.
   header:
     title: Getting started   # optional; defaults to page title
     color: primaryDark       # theme token or hex, e.g. "#33205C"
   ---
   ```

3. Order sidebar entries with `weight` in front matter (lower numbers first).
   Nested pages become expandable subsections in the sidebar.

4. Write body content as normal Markdown. Headings `h2`–`h4` appear in the
   inline TOC on the active page (populated by `docs-nav.js`).

5. Preview locally: `hugo server --disableFastRender` and open
   `/documentation/` (or the path matching your section slug).

The sidebar partial looks up `Site.GetPage "/documentation"` — if you use a
different section slug, update `docs-sidebar.html` to match.

There is no live documentation section in `content/` yet; the layout is ready
when we add one. For theme-level CSS details, see [DEVELOPMENT.md](./DEVELOPMENT.md).

### Python Package Guide

The Python Package Guide listed on our website is a guide for scientific authors
who are interested in creating a Python package. The guide is built using the
pyData Sphinx theme for Sphinx, which is a static site generator. If you are
interested in contributing to the Python Package Guide, please see the
[`README.md`](https://github.com/pyOpenSci/python-package-guide/blob/main/README.md)
in the `pyOpenSci/python-package-guide` repo.

### Peer Review Guide

The Peer Review Guide is a guide for authors who are interested in submitting a
package to pyOpenSci for peer review. The guide is built using the pyData Sphinx
theme for Sphinx, which is a static site generator. If you are interested in
contributing to the Peer Review Guide, please see the
[`README.md`](https://github.com/pyOpenSci/software-peer-review/blob/main/README.md)
in the `pyOpenSci/software-peer-review` repo.
