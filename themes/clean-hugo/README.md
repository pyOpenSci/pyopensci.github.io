# Clean Hugo Theme

A clean, modern Hugo theme built with Hugo + vanilla SCSS that gives you a
responsive, mobile-first website that's easy to customize. Whether you're
building a personal blog, portfolio, or gallery site, this theme provides a
solid foundation that looks great out of the box while letting you personalize
every detail.

The theme includes: a fully functional blog with
pagination, an optional gallery system for showcasing your collections, and a
modern user interface with smooth transitions. Best of all, every color can be
customized through a simple configuration file, and you can use Google Fonts or
stick with system fonts for faster loading.

## Get started

Before you can use this theme, you need to add it to your Hugo site.
The easiest way is to add it as a git submodule, which keeps everything
organized and makes it easy to update the theme later.

If you're using git submodules (recommended):

```bash
git submodule add https://github.com/lwasser/clean-hugo themes/clean-hugo
```

If you prefer to clone it directly into your themes folder:

```bash
git clone https://github.com/lwasser/clean-hugo themes/clean-hugo
```

Once the theme is in place, you'll need to tell Hugo to use it by updating
your hugo.toml configuration file.

## Configuration

The theme is controlled through your `hugo.toml` configuration file. This is
where you enable features, customize colors, set up fonts, and configure all
the details that make your site unique. The configuration is organized into
sections, making it easy to find what you're looking for.

The most important thing is telling Hugo to use this theme. You do that by
setting the `theme` parameter at the top level of your config file. Then you
can configure various theme options under `[params.theme]`.

Here's a complete example that shows all the main configuration options:

```toml
theme = 'clean-hugo'

[params.theme]
  enableGallery = true
  enableFontAwesome = true
  
  [params.theme.fonts]
    heading = "Sora"
    body = "Inter"
  
  [params.theme.colors]
    primary = "#71B3B5"
    primaryDark = "#2E6060"
    primaryLight = "#D6E3E3"
    secondary = "#EDB88B"
    accent = "#42213D"
    accentLight = "#AC87A0"
    neutral = "#395E66"
    heroBg = "#2E6060"
    blogHighlight = "#111827"
    link = "#2E6060"
    linkOnDark = "#2DD4BF"
    linkHover = "#1F4345"
    featureCard = "#EBC1D3"
```

### Theme features

The theme has a couple of optional features you can turn on or off. When
`enableGallery` is set to `true`, you'll be able to create gallery pages and
showcase collections with filtering. Set `enableFontAwesome` to `true` if you
want to use Font Awesome icons throughout your site. Both default to `true` if
you don't specify them.

### Customize fonts

If you want your site to have a distinctive look, you can choose custom fonts
from Google Fonts. The theme uses two font families: one for headings and one
for body text. This separation helps create visual hierarchy and makes your
content more readable.

Under `[params.theme.fonts]`, you can specify `heading` for all your h1-h6
elements and `body` for paragraph text and other content. The default heading
font is "Sora" and the default body font is "Inter". 

If you don't like these fonts, you will need to change the fonts both in 
the CSS file and the hugo.toml configuration file. The fonts are vendored 
with the theme as woff2 variable files. Variable means that multiple versions 
of the fonts (weights and styles) are included.

### Customize colors

You can customize the entire color palette of the site in the hugo.toml 
configuration file under `[params.theme.colors]`. All colors are specified
using standard hex codes (like `#71B3B5`), and you can find these codes using
any color picker tool.

#### Color variables

Here's what each color controls:

**Brand colors:**

- `primary` - Your main brand color, used for interactive elements and
  accents
- `primaryDark` - A darker version used for hero sections, footer
  backgrounds, and accessible link colors on light backgrounds
- `primaryLight` - A lighter tint perfect for card backgrounds and subtle
  highlights
- `secondary` - A warm accent color, useful for feature card backgrounds and
  highlights
- `accent` - Additional accent color for specific elements
- `accentLight` - Lighter accent variant
- `neutral` - Gray tone for text and subtle elements

**Gray scale colors (optional):**

The theme includes a full gray scale that you can customize. These are used for text, borders, backgrounds, and subtle UI elements:

- `white` - Pure white (#FFFFFF)
- `gray50` - Lightest gray, used for page backgrounds (#F9FAFB)
- `gray200` - Light gray for borders and dividers (#E5E7EB)
- `gray300` - Medium-light gray for subtle borders (#D1D5DB)
- `gray400` - Medium gray for disabled text (#9CA3AF)
- `gray500` - Medium gray for secondary text (#6B7280)
- `gray600` - Medium-dark gray for meta text and dates (#4B5563)
- `gray700` - Dark gray for body text on light backgrounds (#374151)
- `gray800` - Very dark gray for headings (#1F2937)
- `gray900` - Darkest gray, used for primary text (#111827)

**Specific use colors:**

- `heroBg` - Default hero background color (falls back to primaryDark)
- `blogHighlight` - Background color for the blog highlight section
- `link` - Default hyperlink color on light backgrounds (should meet WCAG AA
  contrast requirements)
- `linkOnDark` - Link color for use on dark backgrounds (lighter variant for
  better visibility)
- `linkHover` - Link hover state color (darker variant for better contrast)
- `featureCard` - Default background color for feature section cards

**Hero color overrides:**

- Global: set `[params.theme.colors].heroBg` in `hugo.toml` to retheme all hero sections.
- Per page: set `hero.color` in front matter. You can pass a theme token name (`primary`, `primary-dark`, `accent`, `neutral`, `heroBg`) or any valid CSS color (e.g., `#123456`, `rgb(...)`). If omitted, heroes use `heroBg`.

#### Color accessibility

All colors in this theme are designed to meet **WCAG AA accessibility
standards** for color contrast. This ensures your website is readable and
usable by people with visual impairments, including color blindness.

**Why accessibility matters:**

- **WCAG AA requires** a contrast ratio of at least 4.5:1 for normal text and
  3:1 for large text (18pt+) and UI components
- **Link colors** are carefully chosen to provide sufficient contrast against
  their background colors
- **The theme uses contextual colors** - different link colors for light
  backgrounds (`link`) vs dark backgrounds (`linkOnDark`)

**How colors were selected:**

The default color palette uses the darker `primaryDark` (#2E6060) as the
default link color because:

- It provides ~6.2:1 contrast ratio against white backgrounds (exceeds WCAG AA
  requirement)
- It maintains the teal/cyan theme while being accessible
- The lighter `linkOnDark` (#2DD4BF) is used on dark backgrounds where it
  provides sufficient contrast
- Hover states use an even darker variant for better focus visibility

**Update colors while maintaining accessibility:**

When you customize colors in your `hugo.toml` file, keep these guidelines in
mind:

1. **Link colors on light backgrounds** - Use a color with at least 4.5:1
   contrast against white (#FFFFFF) or your light background colors. Darker
   colors generally work better.

2. **Link colors on dark backgrounds** - Use a lighter color that contrasts
   well against dark backgrounds like `blogHighlight` (#111827). Test contrast
   ratios using tools like the [WebAIM Contrast
   Checker](https://webaim.org/resources/contrastchecker/).

3. **Text colors** - Ensure body text has at least 4.5:1 contrast against
   background colors. The theme uses dark grays (#111827, #374151) for text on
   light backgrounds and white/light colors on dark backgrounds.

4. **Test contrast** - Always test your color combinations using a contrast
   checker before you deploy. The theme's default colors are pre-tested, but
   if you change them, verify accessibility.

5. **Color blind considerations** - Don't rely solely on color to convey
   information. The theme uses icons, text, and other visual cues in addition
   to color differences.

**Example color configuration:**

```toml
[params.theme.colors]
  # Brand colors (defaults) — can be overridden in site hugo.toml
  primary = "#2E6060"
  primaryDark = "#142929"
  primaryLight = "#D6E3E3"
  secondary = "#F1E0A6"
  accent = "#42213D"
  accentLight = "#E4B8C6"
  neutral = "#395E66"

  # Base/Text colors
  white = "#FFFFFF"

  # Gray scale (for theme customization)
  gray50 = "#F9FAFB"
  gray200 = "#E5E7EB"
  gray600 = "#4B5563"
  gray700 = "#374151"
  gray900 = "#111827" # Used for dark background for blog highlights

  # Semantic colors
  link = "#2E6060"
  linkOnDark = "#2DD4BF"
  linkHover = "#1F4345"
  featureCard = "#EBC1D3"

  # Section backgrounds (kept as references for semantic clarity)
  "heroBg" = "#2E6060"

  # Admonition colors
  "admonition-info" = "#53354F"      # deep purple
  "admonition-success" = "#71B3B5"   # brighter teal
  "admonition-warning" = "#E4B8C6"   # Soft blossom
  "admonition-danger" = "#F1E0A6"    # yellow custard
  "admonition-note" = "#CAE4E4"      # soft teal

```

If you need help to choose accessible colors, consider using tools like:

- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Coolors Contrast Checker](https://coolors.co/contrast-checker)
- [Accessible Colors](https://accessible-colors.com/)

### Social media links

Want to connect your website visitors to your social media profiles? You can
add links to all your accounts in the footer. Simply add a `[params.social]`
section to your config file with URLs for any platforms you use.

```toml
[params.social]
  github = "https://github.com/username"
  linkedin = "https://linkedin.com/in/username"
  mastodon = "https://fosstodon.org/@username"
  bluesky = "https://bsky.app/profile/username"
  orcid = "https://orcid.org/0000-0000-0000-0000"
  rss = "/index.xml"
  email = "mailto:email@example.com"
```

Only include the platforms you actually use - any missing ones simply won't
appear in the footer. The theme supports GitHub, LinkedIn, Mastodon, Bluesky,
ORCID, RSS feeds, and email links.

### Analytics

IMPORTANT: this hasn't been setup // tested yet!!! 

If you want to track how many people visit your site, you can add analytics
support. The theme supports both Google Analytics and Plausible Analytics (a
privacy-friendly alternative). Just add an `[params.analytics]` section to
your config:

```toml
[params.analytics]
  google = "G-XXXXXXXXXX"  # Your Google Analytics tracking ID
  plausible = "yourdomain.com"  # Your Plausible domain
```

You can use one or both - just include the ones you want. The tracking code
will be automatically added to all pages of your site.

## Create content, write blog posts

Hugo uses a concept called "content types" - different kinds of pages that get
displayed differently. This theme supports blog posts and gallery items (if
you've enabled the gallery feature). Each type of content has its own folder
and follows specific patterns.

### Write blog posts

Blog posts are the most common type of content. The theme includes a blog 
archetype to help you create new posts quickly with all the necessary frontmatter 
fields. Frontmatter is the metadata that appears at the top of a Markdown file.

#### Using the blog archetype

The easiest way to create a new blog post is using Hugo's archetype system. 
This automatically generates a template with all the required fields:

```bash
hugo new blog/2025/my-new-post.md
```

This creates a new blog post file with the following structure:

```markdown
---
title: "My New Post"
date: 2025-01-15
excerpt: ""
image: /images/headers/
photo_credit_author: ""
photo_credit_description: ""
category: ""
show_author: false
tags: []
---

Your post content goes here...
```

#### Blog post front matter fields

Here's what each field does:

- **`title`** - The post title (appears as the page heading and in listings)
- **`date`** - Publication date in `YYYY-MM-DD` format (controls sorting - most recent first)
- **`excerpt`** - Short summary displayed in blog listings (optional, will use post summary if not provided)
- **`image`** - Path to featured image (displayed in listings and as header on single post page)
- **`photo_credit_author`** - Photo credit author name (optional)
- **`photo_credit_description`** - Photo credit description (optional)
- **`category`** - Single category for organizing posts (used for filtering on blog listing page)
- **`show_author`** - Set to `true` to display author name in listings (defaults to `false`)
- **`tags`** - Array of tags for additional organization (displayed at bottom of single post)

#### Featured posts

The blog listing page automatically features the **most recent post** as the large featured card on the left. The next posts (configurable, default 2) appear in the sidebar on the right. All remaining posts appear in a grid below.

**Note:** Currently, the featured post is always the most recent post by date. There's no manual "featured" flag - the layout automatically highlights your latest content.

#### Blog listing page configuration

You can customize the blog listing page behavior in your `hugo.toml`:

```toml
[params]
  blog_title = "Welcome to My Blog"  # Title shown at top of blog listing page

  [params.blog]
    sidebar_count = 2      # Number of posts shown in sidebar (right column)
    excerpt_length = 200   # Character length for excerpts in featured card
```

#### Blog listing page features

The blog listing page includes:

- **Featured section** - Large card for the most recent post + smaller sidebar cards
- **Category filtering** - Filter buttons to show posts by category
- **Responsive grid** - All remaining posts displayed in a responsive grid
- **Image zoom effects** - Gentle hover zoom on card images
- **Pagination** - Automatic pagination for large numbers of posts

#### Example blog post

Here's a complete example of a blog post:

```markdown
---
title: "Get Started with Hugo"
date: 2025-01-15
excerpt: "Learn how to build a fast, modern website with Hugo static site generator."
image: /images/headers/hugo-tutorial.jpg
photo_credit_author: "John Doe"
photo_credit_description: "Hugo logo on laptop screen"
category: "Tutorials"
show_author: false
tags:
  - hugo
  - web-development
  - static-sites
---

## Introduction

Hugo is a fast and flexible static site generator...

[Rest of your content in Markdown]
```

After the front matter, you write your actual post content using standard Markdown. You can use headings, lists, links, images, code blocks, and all the usual Markdown features.

### Create gallery items

If you've enabled the gallery feature, you can create gallery pages that
showcase collections of items - perfect for portfolios, photo galleries, or
any kind of categorized collection. Gallery items work similarly to blog posts
but have some extra front matter fields for organizing your collection.

Create gallery items in the `content/gallery/` directory with this structure:

```markdown
---
title: "Item Name"
groups: ["category1", "category2"]
hero:
  title: "Item Title"
  subtitle: "Description"
  image: "image.jpg"
---

Additional details about this item...
```

The `groups` field lets you categorize items so visitors can filter by
category. The `hero` section controls what appears at the top of the gallery
item page - you can set a custom title, subtitle, and image. If you don't
provide hero fields, it will use the main `title` and look for images in the
page's resources.

You can use Hugo's built-in archetypes to quickly create new gallery items
with all the right front matter already completed. Just run:

```bash
hugo new gallery/item-name/index.md
```

This creates a new gallery item with a template you can complete, saving you
from entering all the front matter structure manually.

## Use data files

Sometimes you have content that you want to reuse in multiple places or that's
more structured than a regular page. That's where Hugo's data files come in
handy. They let you store content in YAML, TOML, or JSON files and reference
it from anywhere in your site.

### Feature section

The feature section is a flexible component that displays structured content
in a card format. You can define the content directly in your page's front
matter, making it easy to customize for each page while maintaining consistent
styling.

To use the feature section, add a `feature_section` parameter to your page's
front matter:

```yaml
feature_section:
  title: "What I've Built"
  subtitle: "Your subtitle text here"
  sections:
    - title: "Section Title"
      lead: "Optional lead paragraph"
      items:
        - bold: "Bold Text:"
          text: " Rest of the text"
        - text: "Plain text item"
        - text: "Linked Item"
          url: "https://example.com"
      subsections:
        - title: "Subsection Title"
          content: "Subsection content"
```

The structure is straightforward: you have a title and subtitle at the top,
then sections that contain items. Items can be plain text, have bold prefixes,
or be links with URLs. You can also nest subsections within sections for more
complex layouts.

Once you have your front matter set up, you can display the feature section
anywhere using the shortcode:

```markdown
{{< feature-section >}}
```

You can also include it in layout templates using:

```hugo
{{ partial "feature-section.html" . }}
```

The component automatically handles all the formatting - plain text items,
items with bold prefixes, items with URLs (which become clickable links), and
subsections within sections.

## Page layouts

Hugo uses layouts to control how different types of pages are displayed. This
theme comes with several pre-built layouts that handle the most common use
cases. You don't need to understand how they work to use them - just know that
different content types automatically use the right layout.

The `splash` layout is designed for homepages. It includes a hero section at
the top, and renders your page content (which can include cards, feature
sections, and other shortcodes), followed by a section showing recent blog
posts. It's perfect for creating an engaging landing page.

Blog posts use the `blog/single` layout, which provides a clean reading
experience with proper typography and spacing. The `blog/list` layout shows
all your blog posts in an organized, paginated list with a featured section
highlighting your most recent post, category filtering, and a responsive grid
layout.

If you're using the gallery feature, `gallery/single` displays individual
gallery items with their images and descriptions, while `gallery/list` shows
all items with filtering capabilities.

You can specify which layout to use by setting the `layout` parameter in your
content's front matter, though Hugo is usually smart enough to pick the right
one automatically based on where your content is located.

## Shortcodes

Shortcodes are Hugo's way of letting you add special content types directly in
your Markdown. Instead of writing HTML, you use simple shortcode syntax and
Hugo handles the rest. The theme includes several useful shortcodes that make
content creation easier.

### Add images with captions

When you want to include an image with a caption, use the figure shortcode. It
handles all the proper HTML structure and even includes responsive image
features:

```markdown
{{< figure src="/images/image.jpg" alt="Description" caption="Caption text" >}}
```

Just provide the image path, an alt description for accessibility, and an
optional caption. The theme takes care of styling it nicely and making sure it
looks good on all screen sizes.

### Embed YouTube videos

Instead of copying and pasting embed code from YouTube, you can use the
youtube shortcode. Just grab the video ID from the YouTube URL and use it like
this:

```markdown
{{< youtube id="VIDEO_ID" >}}
```

The shortcode automatically creates a responsive embed that works on all
devices. The video ID is the string of characters that appears in the YouTube
URL after `v=`. For example, if your YouTube URL is
`https://www.youtube.com/watch?v=dQw4w9WgXcQ`, the video ID is
`dQw4w9WgXcQ`.

### Display feature sections

If you've set up a feature section in your page's front matter (described
above), you can display it anywhere in your content using:

```markdown
{{< feature-section >}}
```

This is especially useful if you want to include your achievements or
accomplishments section in a blog post or on a dedicated about page. Each page
can have its own customized feature section content.

### Display recent blog posts

You can display a list of recent blog posts on any page using the `blog-list` shortcode:

```markdown
{{< blog-list title="Recent Thoughts" limit=3 >}}
```

**Parameters:**
- `title` - Title for the blog section (default: "Recent Thoughts")
- `limit` - Number of posts to display (default: 3)

This shortcode shows the specified number of most recent blog posts with their categories, dates, and excerpts. It's perfect for adding a blog preview to your homepage or other pages.

### Add buttons

The theme includes a unified button component system that provides consistent, accessible buttons throughout your site. You can use buttons in any markdown content with the `button` shortcode:

```markdown
{{< button href="/get-started/" variant="primary" >}}Get Started{{< /button >}}
{{< button href="/learn-more/" variant="secondary" size="lg" >}}Learn More{{< /button >}}
{{< button href="/download/" variant="accent" icon="download" >}}Download{{< /button >}}
```

**Parameters:**
- `href` (required) - URL the button links to
- `variant` - Button color: `primary` (default), `secondary`, `accent`, `neutral`
- `size` - Button size: `sm`, `lg`, `full` (omit for default size)
- `icon` - Font Awesome icon name (without `fa-` prefix)
- `iconPosition` - Icon position: `left` (default) or `right`
- `target` - Use `_blank` for external links
- `class` - Additional CSS classes (optional)

**Button variants:**
- **Primary** - Main call-to-action (teal background)
- **Secondary** - Alternative action (outlined style)
- **Accent** - Special emphasis (accent color)
- **Neutral** - Subtle action (gray background)

**Example button group:**

```markdown
<div class="btn-group btn-group--center">
  {{< button href="/start/" variant="primary" >}}Get Started{{< /button >}}
  {{< button href="/learn/" variant="secondary" >}}Learn More{{< /button >}}
</div>
```

For a complete guide with visual examples of all button variants, sizes, and usage patterns, see the [Button Components Guide](/blog/button-components-guide/) blog post.

## License

This theme is licensed under the BSD 3-Clause License, which means you're
free to use it, modify it, and distribute it, even for commercial purposes.
The only requirements are that you include the original license notice and
don't use the author's name to promote your modified version. See the
[LICENSE](LICENSE) file for the complete terms.
