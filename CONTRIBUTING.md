# Contributing to pyOpenSci

## Organization

If you are interested in contributing to pyOpenSci, please read about
how we work in [**pyOpenSci's organization-wide contributing guide**](https://www.pyopensci.org/handbook/CONTRIBUTING.html).

## Updating blog posts

We have a bash script, `scripts/date-updated.sh`, that walks blog posts and sets
the `last_modified:` date in front matter from your local git history. It only
updates posts that already include a `last_modified:` key.

Hugo blog posts live in `content/blog/`.

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

The site is built with **[Hugo](https://gohugo.io)**. Source lives at the repo
root (`content/`, `data/`, `themes/clean-hugo/`).

If you want to contribute pages, blog posts, theme layouts, SCSS, or shortcodes,
start here:

1. Read [README.md](./README.md) for prerequisites and local setup (`npm ci`,
   `hugo server --disableFastRender`).
2. Read [DEVELOPMENT.md](./DEVELOPMENT.md) for CSS architecture and the Hugo
   asset pipeline.

Please test changes locally before opening a pull request.

#### Site layouts

Hugo picks a page template in one of two ways:

1. **`layout:` in front matter** — for standalone pages in `content/` (landing pages,
   guides, special listings). Maps to `themes/clean-hugo/layouts/_default/<layout>.html`.
2. **Content section + `type:`** — for pages inside a folder such as `content/blog/` or
   `content/events/`. Maps to `layouts/<section>/list.html` (section index) or
   `layouts/<section>/single.html` (each page in the section).

All layouts extend `layouts/_default/baseof.html` (site chrome: nav, footer, CSS).

##### Layout map

| Layout | Template | How it is selected | Purpose | Live pages |
|--------|----------|-------------------|---------|------------|
| **splash** | `_default/splash.html` | `layout: splash` | Full-width marketing/landing pages: hero, optional home “What’s next” band, then shortcodes (swoosh sections, cards, feature rows) without a narrow prose column | `/` (home), `/about-peer-review/`, `/python-packaging-science/`, `/learn/`, `/learn-universities-labs/`, `/partners/`, `/resources/`, `/volunteer/`, `/ways-to-give/` |
| **single** | `_default/single.html` | `layout: single` | Hero + **narrow prose column** (`content-main`, ~65ch) for long-form Markdown pages | `/how-to-submit-a-package-to-pyopensci/` |
| **people-list** | `_default/people-list.html` | `layout: people-list` | Community directory with filters and role-based grids (data from `data/contributors.yml`) | `/our-community/` |
| **packages-list** | `_default/packages-list.html` | `layout: packages-list` | Package catalog with metrics bar, filters, and Alpine.js grid (data from `data/packages.yml`) | `/python-packages/` |
| **docs** | `_default/docs.html` | `layout: docs` | Multi-page **documentation book**: sidebar nav, mobile toggle, in-page TOC | *(not in use yet — see below)* |
| **blog list** | `blog/list.html` | `type: blog` on `content/blog/_index.md` | Blog index: featured post, sidebar, topic filters, archives | `/blog/` |
| **blog single** | `blog/single.html` | `type: blog` on each post in `content/blog/` | Individual blog post: image/gradient header, date, topic, prose, tags | All posts under `/blog/…` (65 posts) |
| **events list** | `events/list.html` | Section `content/events/_index.md` | Events landing: hero, upcoming cards, past archives | `/events/` |
| **events single** | `events/single.html` | Pages in `content/events/` | Event detail: date/location header, prose body | Each file under `/events/…` |

##### Which layout should I use?

| You are building… | Use |
|-------------------|-----|
| A marketing or program landing page with shortcodes, swooshes, and card grids | `layout: splash` |
| A long guide page that is mostly Markdown prose in a readable column | `layout: single` |
| A new blog post | Add a file to `content/blog/` with `type: blog` (uses `blog/single.html` automatically) |
| A new event | Add a file to `content/events/` with `event:` front matter (uses `events/single.html` automatically) |
| A multi-page contributor or internal guide with sidebar navigation | `layout: docs` in a `content/documentation/` section |
| A data-driven listing (packages, people) | `packages-list` or `people-list` |

##### `splash` vs `single` (common confusion)

These are **different** layouts for **different page shapes**:

- **`splash`** — default for landing pages. Body lives in `.splash-page__content` at full
  theme width so card grids, metrics bars, and swoosh sections can span the layout. Content
  is almost always shortcodes and HTML blocks, not a wall of prose.
- **`single`** — one standalone prose page. Body lives in `.content-main` with a comfortable
  line length for reading. Includes an optional publish date (only when `date:` is set in
  front matter). **Not** used for blog posts — those use `blog/single.html`, which has its
  own post header, topic badge, and tag footer.

##### Blog and events (section layouts)

Blog and event pages do **not** set `layout:` in front matter. Hugo uses the folder name:

```
content/blog/my-post.md     →  layouts/blog/single.html
content/blog/_index.md      →  layouts/blog/list.html
content/events/my-event.md  →  layouts/events/single.html
content/events/_index.md    →  layouts/events/list.html
```

Blog posts should include at minimum:

```yaml
---
title: "Post title"
date: 2026-06-17
type: blog
excerpt: "Short summary for cards and SEO."
blog_topic: community   # community | learn | software | updates
---
```

Event pages use nested `event:` params (`start_date`, `location`, etc.) — copy an existing
file in `content/events/` as a template.

#### Documentation book layout (`layout: docs`)

The theme includes a **docs layout** for multi-page guides with a sidebar, mobile
toggle, and in-page table of contents. Use it when you want a small “book” of
Hugo pages on the main site (for example, contributor docs or an internal
guide), separate from splash landing pages, `single` prose pages, and blog posts.

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
