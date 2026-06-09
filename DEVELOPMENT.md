# Hugo site development notes

Temporary reference for the pyOpenSci Hugo migration. Focus: how CSS is
organized and built. See also `README.md` for install and serve commands.

## Quick start

From the repository root:

```bash
npm ci
hugo server --disableFastRender
```

Hugo Extended is required (SCSS + PostCSS). The first run needs `npm ci` so
PostCSS can run during the asset pipeline.

Do **not** commit build output: `public/`, `resources/`, and `.hugo_build.lock`
are gitignored.

## Two CSS locations (do not confuse them)

Hugo treats `assets/` and `static/` differently.

| Location | Role | Committed? | Built on deploy? |
|----------|------|------------|------------------|
| `themes/clean-hugo/assets/css/` | Main site SCSS source | Yes (source) | Yes → compiled CSS |
| `themes/clean-hugo/static/css/syntax.css` | Code-block highlighting only | Yes (as-is) | No — copied to site |

There is no `static/scss/` folder. All authored styles live under
`assets/css/` as SCSS partials.

### `assets/css/` — main styling (SCSS)

* Entry file: `themes/clean-hugo/assets/css/main.scss`
* Partials: `_footer.scss`, `_blog.scss`, `_events.scss`, etc.
* Hugo compiles this at **build time** (local `hugo server` or Netlify).
* Output goes to `public/css/main.min.<hash>.css` — never commit that file.

### `static/css/syntax.css` — code highlighting only

* One pre-generated file for Chroma/monokai highlighting in fenced code blocks.
* Served as `/css/syntax.css` with no processing.
* Originally generated with:
  `hugo gen chromastyles --style=monokai`
* Not related to layout, footer, blog cards, or brand colors.

## Build pipeline (what happens on `hugo server` / Netlify)

Defined in `themes/clean-hugo/layouts/_default/baseof.html`:

1. **Inline brand colors** — CSS custom properties from `hugo.toml`
   `[params.theme.colors]` (injected in a `<style>` block in `<head>`).
2. **Main stylesheet** — Hugo Pipes pipeline:

   ```go
   {{ $styles := resources.Get "css/main.scss" | toCSS | postCSS | minify | fingerprint }}
   ```

   Steps: SCSS → CSS → PostCSS (autoprefixer) → minify → fingerprinted URL.

3. **Syntax CSS** — plain link to `/css/syntax.css` from theme `static/`.

Root `package.json` and `postcss.config.js` exist **for step 2 only**. They are
not used by Jekyll.

## SCSS file map

`main.scss` imports partials in this order (simplified):

| Partial | Purpose |
|---------|---------|
| `_variables.scss` | Breakpoints, spacing, shadows, typography tokens |
| `_mixins.scss` | Shared SCSS mixins |
| `_buttons.scss` | Button tiers |
| `_utilities.scss` | Skip links, a11y helpers |
| *(base rules in main.scss)* | Box-sizing, body, headings |
| `_navigation.scss` | Header, nav, mobile menu |
| `_content.scss` | Prose / page content |
| `_blog.scss` | Single post layout |
| `_blog-listing.scss` | Blog index, cards, filters |
| `_events.scss` | Events listing and detail |
| `_footer.scss` | Site footer |
| `_hero.scss` | Hero sections |
| `_cards.scss` | Card grids |
| `_shortcodes.scss` | Shortcode markup (admonitions, cards, etc.) |
| `_admonition.scss` | Callout blocks |
| `_code.scss` | Inline code styling (not syntax colors) |
| `_figure.scss` | Figures and captions |
| Other partials | Gallery, packages, people, docs, swoosh, filters, … |

When adding styles, prefer the partial that matches the component. Extend
existing partials before adding new files.

## Colors and typography

**Brand colors** — set in `hugo.toml` under `[params.theme.colors]`. These
become CSS variables (e.g. `--color-primary`) at build time. Prefer changing
colors there for site-wide brand updates.

**SCSS variables** — in `_variables.scss` (`$spacing-md`, `$breakpoint-lg`,
etc.). Use for layout, spacing, and component structure inside the theme.

**Fonts** — loaded via `@font-face` in `main.scss` from
`themes/clean-hugo/static/fonts/`. Font family names are configured in
`hugo.toml` `[params.theme.fonts]`.

## Site `static/` vs theme `static/`

Two different `static/` trees:

| Path | Contents |
|------|----------|
| `static/` (repo root) | Site images (`static/images/`), favicons, `CNAME` → published as `/images/...`, `/favicon.ico`, etc. |
| `themes/clean-hugo/static/` | Theme assets: fonts, JS, `css/syntax.css` → bundled with theme |

Do not move site images into the theme unless they are truly theme-only.

## Local workflow for CSS changes

1. Edit SCSS under `themes/clean-hugo/assets/css/`.
2. Save — `hugo server --disableFastRender` rebuilds automatically.
3. If PostCSS errors mention `npx` or `postcss-cli`, run `npm ci` at repo root.
4. Commit **SCSS changes only** — not `public/` or `resources/`.

To regenerate syntax highlighting after changing `hugo.toml`
`[markup.highlight]` style:

```bash
hugo gen chromastyles --style=monokai > themes/clean-hugo/static/css/syntax.css
```

Then commit the updated `syntax.css`.

## Netlify

`netlify.toml` runs `npm ci && hugo --gc --minify`. CSS is built on Netlify the
same way as locally. No separate CSS build step or committed compiled bundle is
required for the main stylesheet.
