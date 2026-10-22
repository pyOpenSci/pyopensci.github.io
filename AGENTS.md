# pyOpenSci website (pyopensci.github.io)

This is the Hugo site for [pyopensci.org](https://www.pyopensci.org). It uses the clean-hugo theme which lives: in the repo at `themes/clean-hugo/`. Source lives at the repo root (`content/`, `data/`, `static/`, `hugo.toml`).
in-repo at `themes/clean-hugo/`. Source lives at the repo root
(`content/`, `data/`, `static/`, `hugo.toml`).

Keep answers short. Do not run `hugo`, `hugo server`, or any other site build or
preview — tell the user which command to run.

## Agent rules

* Never commit changes to the public site unless asked. Use conventional commits when asked.
* This file is shared. Do not add home-directory paths, local scratch
  folders, or other machine-specific notes here.
* Ask before rewriting copy, restructuring HTML/templates, adding CSS
  variables, or changing heading semantics.
* Fix typos, spacing, and punctuation silently.
* Reuse existing CSS, partials, and shortcodes before creating new ones.
* Always use CSS variables / SCSS tokens — never hardcode colors, px
  values, or font names.
* Sentence case for h2 and below. H1/hero may use title case.
* Spell **pyOpenSci** with lowercase py, uppercase O and S — even at
  the start of a sentence.
* Cross-link the packaging guide, peer review guide, handbook, and
  lessons when it helps. Define jargon or link to a definition.

Copy and design details: `CLAUDE.md`. CSS architecture: `DEVELOPMENT.md`.

## Architecture

```
content/*.md  +  data/*.yml  +  themes/clean-hugo/  →  hugo  →  public/
                 ↑
        pyosmeta CI (packages.yml, contributors.yml)
```

* Config / nav: `hugo.toml` (`theme = 'clean-hugo'`)
* Pages: Markdown in `content/` with front matter (`layout:`, `hero:`,
  shortcodes)
* Theme: layouts, partials, shortcodes, SCSS, JS in `themes/clean-hugo/`
* Images: `static/images/` → `/images/...`
* Redirects: `static/_redirects` (Netlify) plus Hugo aliases
* Node: PostCSS / autoprefixer only (`package.json`). Node 24 (`.nvmrc`).
* Hugo Extended **0.139.4** (matches Netlify and CI)

Production: The site deploys via GitHub Pages (`deploy-gh-pages.yml`) and Netlify previews
(`netlify.toml`). Live site: `https://www.pyopensci.org/`.

## Directory map

| Path | Role |
|------|------|
| `content/` | Pages. Landing pages at root; blog in `content/blog/`; events in `content/events/` |
| `data/` | YAML: `packages.yml`, `contributors.yml`, `blog_topics.yml`, `packaging.yml`, `tutorials.yml`, editorial lists |
| `themes/clean-hugo/` | Theme: `layouts/`, `assets/css/`, `static/js`, fonts |
| `themes/clean-hugo/assets/css/` | SCSS source. Entry: `main.scss`. Tokens: `_variables.scss` |
| `themes/clean-hugo/layouts/shortcodes/` | Shortcodes used in Markdown |
| `themes/clean-hugo/layouts/partials/` | Shared HTML (hero, cards, nav, footer, packages, people) |
| `static/` | Site images, favicons, `_redirects`, `CNAME` |
| `hugo.toml` | Site config, menu, brand colors, Algolia, fonts |
| `scripts/` | Tracked helpers only (`date-updated.sh`, `htmlproofer.rb`) |

There is no root `layouts/` or `assets/`. All templates and SCSS live
in the theme.

## Layouts

Hugo picks a template from `layout:` in front matter, or from the
content section (`blog/`, `events/`). All extend `baseof.html`.

| You are building… | Use |
|-------------------|-----|
| Marketing / program landing (shortcodes, cards, swooshes) | `layout: splash` |
| Long Markdown prose in a narrow column | `layout: single` |
| Blog post | File in `content/blog/` with `type: blog` |
| Event | File in `content/events/` with `event:` front matter |
| Community directory | `layout: people-list` (`data/contributors.yml`) |
| Package catalog | `layout: packages-list` (`data/packages.yml`) |
| Multi-page book with sidebar | `layout: docs` (ready; no live `content/documentation/` yet) |

`splash` is full-width shortcode/HTML pages. `single` is a readable
prose column. Blog posts use `layouts/blog/single.html`, not `single`.

Layout map and front matter: `CONTRIBUTING.md`.

## Data files

* `data/contributors.yml` — source of truth for people names/roles.
  Edit here for community-page name updates.
* `data/packages.yml` — **do not edit by hand.** Weekly CI
  (`update-contribs-reviews.yml`) runs `pyosmeta` and opens a PR.
  Hand edits can be overwritten.
* `data/blog_topics.yml` — blog topic labels (`community`, `learn`,
  `software`, `updates`).

## CSS and components

Two CSS locations (do not confuse them):

* `themes/clean-hugo/assets/css/` — authored SCSS, compiled by Hugo Pipes
  (`toCSS` → PostCSS → minify → fingerprint)
* `themes/clean-hugo/static/css/syntax.css` — Chroma highlighting only

Brand colors live in `hugo.toml` `[params.theme.colors]` and become CSS
custom properties. Names say what the color does (`brand`, `action`,
`pageBg`, `text`), not the hue. Spacing, breakpoints, fonts, radii:
`_variables.scss`.

Reuse: cards, card grids, hero, callouts/admonitions, buttons (primary
green filled, secondary outline, tertiary text+arrow), section headings,
badges. Card grids: 1-col mobile → 2-col tablet → 3-col desktop.

Theme shortcodes and blog front matter:
[clean-hugo theme features](https://www.pyopensci.org/blog/clean-hugo-blog-theme-features.html)
(`content/blog/2019-01-01-clean-hugo-blog-theme-features.md`). Ask before
updating that post; add a section when a new theme feature ships.

## Local commands (user runs these)

```bash
nvm use            # Node 24
npm ci             # once / when package-lock changes
hugo server --disableFastRender
hugo --gc --minify # production build → public/
```

`--disableFastRender` is required when editing layouts or CSS.

Do not commit `public/`, `resources/`, or `.hugo_build.lock`.

New blog post: `hugo new content blog/your-post-slug.md`

## CI and deploy

| Workflow | Role |
|----------|------|
| `build-site.yml` | PR/main: Hugo build + lychee + htmlproofer |
| `deploy-gh-pages.yml` | Push to `main` → GitHub Pages |
| `update-contribs-reviews.yml` | Weekly: refresh `packages.yml` + `contributors.yml` |
| `linkcheck.yml` | Scheduled link check |
| `netlify.toml` | Deploy previews (`npm ci && hugo --gc --minify`) |

Failed data-update jobs notify Slack `#pyos-maintainers-infrastructure`.

## Sibling sites (not this repo)

Linked from nav; separate repos / SSGs, served under pyopensci.org:

* Packaging guide — Sphinx — `/python-package-guide/`
* Peer review guide — Sphinx — `/software-peer-review/`
* Handbook — `/handbook/`
* Metrics — Quarto — `/metrics/`

Prefer linking to these rather than duplicating their content.

## Agent habits

1. Read the target page, its layout, and related partials/shortcodes
   before editing.
2. Check `_variables.scss` and `hugo.toml` colors before adding styles.
3. Note which pages a shared partial or shortcode affects.
4. Ask the user to preview with `hugo server --disableFastRender`.
5. Keep commits scoped; only commit when asked.

## Related docs

* `README.md` — setup, images/WebP, contributor data notes
* `CONTRIBUTING.md` — layouts, blog/events, docs book
* `DEVELOPMENT.md` — SCSS pipeline, Netlify, CI checks
* `CLAUDE.md` — copy, typography, color, a11y, what to ask first
* `content/blog/2019-01-01-clean-hugo-blog-theme-features.md` — shortcode reference
