# Development

If you want to modify the theme or develop your site locally, you'll need to
work with the CSS. This theme uses Vanilla CSS, which is a utility-first CSS
framework that makes it easy to build custom designs.

## Get started with development

### For theme development (exampleSite)

First install the Node.js dependencies in the exampleSite directory. This gives you access to the build
tools needed to process the CSS:

```bash
cd exampleSite
npm install
```

Once dependencies are installed, you can run the development server. This
starts Hugo with hot-reloading, so any changes you make to content or
templates will automatically refresh in your browser:

```bash
npm run dev
```

Or from the theme root:

```bash
npm run serve
```

**Note:** The exampleSite requires `postcss.config.js` to be present in the exampleSite directory for CSS processing to work correctly. These files are included in the exampleSite.

When you're ready to create the final version of your site, build it for
production. This generates optimized, minified CSS and creates your static
site in the `public/` directory:

```bash
npm run build
```

## CSS structure

The theme's CSS is organized into modular SCSS files that are compiled
together. Each component (navigation, hero, cards, gallery, etc.) has its own
file, making it easy to find and modify styles. If you want to customize
beyond what's available in the config file, you can edit these SCSS files
directly.

The main SCSS file is `assets/css/main.scss`, which imports all component
files:

- `_navigation.scss` - Site navigation styles
- `_hero.scss` - Hero section styles
- `_content.scss` - Content and article styles
- `_blog.scss` - Blog post styles
- `_cards.scss` - Card component styles
- `_feature-section.scss` - Feature section styles
- `_intro-section.scss` - Intro section styles
- `_footer.scss` - Footer styles
- `_gallery.scss` - Gallery styles
- `_gallery_blog.scss` - Blog listing gallery styles
- `_shortcodes.scss` - Shortcode component styles
- `_admonition.scss` - Admonition shortcode styles
- `_figure.scss` - Figure/image styles
- `_filter.scss` - Filter button styles
- `_learn-more.scss` - Learn more section styles

All colors use CSS variables defined in `main.scss`, which are overridden by
values from `hugo.toml` at build time. This makes it easy to customize colors
without editing CSS files directly.

