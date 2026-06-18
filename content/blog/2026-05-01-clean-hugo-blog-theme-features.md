---
title: 'clean-hugo theme: blog formatting and shortcode reference'
date: 2019-01-01
type: blog
url: "/blog/clean-hugo-blog-theme-features.html"
excerpt: A living reference for every shortcode and formatting option available in
  the clean-hugo theme — figures, admonitions, admonition quotes, blockquotes,
  pull quotes, feature quotes,
  buttons, YouTube embeds,
  and more.
author: pyopensci
toc: true
blog_topic: community
intro_section:
  text: >-
    Intro sections render a short lead paragraph from page front matter — used
    below heroes on landing pages.
cards:
  - text_only: true
    title: "Large text card"
  - modifier: "card--white"
    icon: "fa-solid fa-mobile-screen"
    title: "White card with icon"
    excerpt: "Icon, title, and body text on a white background."
  - title: "Teal highlight card"
    icon: "fa-solid fa-code"
    excerpt: "Default styling uses the primary-light background."
training_feature:
  eyebrow: "Demo"
  badge: "Reference"
  title: "Training feature strip"
  excerpt: "Side-by-side image and CTA — used on the home page."
  button_label: "Browse events"
  button_url: "/events/"
  image:
    src: "images/landing-pages/scipy-sprint-2026.png"
    alt: "Hands on keyboard at a laptop during a sprint."
current_project:
  eyebrow: "Demo"
  title: "Current project band"
  excerpt: "Full-width quote block used on the home page."
  quote: "Good research software is built for the people who use it."
  cite: "Demo attribution"
---
This post is a living reference for the clean-hugo theme. Every shortcode
and content-formatting option available in the theme is demonstrated here
with a working example and the code that produces it. Use this post to
test that a theme change has not broken existing content, and as a
copy-paste resource when writing new blog posts.

## Figures

The `figure` shortcode renders images with optional captions and
automatic WebP support. It generates a `<picture>` element with a WebP
`<source>` and a fallback `<img>`. If a `.webp` file exists alongside the
source image, modern browsers use it automatically.

**Usage:**

```
{{</* figure
  src="images/pyopensci-general/pyopensci-timeline2019-2024.png"
  alt="Descriptive alt text."
  caption="Optional caption with **Markdown** support."
  link="images/pyopensci-general/pyopensci-timeline2019-2024.png"
*/>}}
```

**Rendered:**

{{< figure
  src="images/pyopensci-general/pyopensci-timeline2019-2024.png"
  alt="A timeline showing the growth of pyOpenSci from 2019 to 2024."
  caption="Growth of pyOpenSci from 2019 to 2024. The `link` param makes the image click-to-enlarge."
  link="images/pyopensci-general/pyopensci-timeline2019-2024.png"
>}}

Parameters:

| Param | Required | Description |
|---|---|---|
| `src` | yes | Image path (static or page bundle) |
| `alt` | yes | Alt text — always required for accessibility |
| `caption` | no | Caption text, supports Markdown |
| `link` | no | URL the image links to (defaults to `src`) |


## Admonitions

The `admonition` shortcode creates highlighted callout boxes. Five types
are available. An optional `title` param adds a heading inside the box.

**Usage:**

```
{{</* admonition type="info" title="Optional title" */>}}
Content with **Markdown** support.
{{</* /admonition */>}}
```

**All five types rendered:**

**Rendered:**

{{< admonition type="note" title="Note (default)" >}}
Use `type="note"` for general supplementary information. This is the
default type if you omit the `type` param.
{{< /admonition >}}

{{< admonition type="info" title="Info" >}}
Use `type="info"` for helpful context or background detail that readers
may want but don't strictly need.
{{< /admonition >}}

{{< admonition type="warning" title="Warning" >}}
Use `type="warning"` to flag something that could cause problems if
overlooked — a deprecation, a known issue, a prerequisite.
{{< /admonition >}}

{{< admonition type="danger" title="Danger" >}}
Use `type="danger"` for destructive or irreversible actions, or for
critical requirements that must be met before proceeding.
{{< /admonition >}}

{{< admonition type="success" title="Success" >}}
Use `type="success"` to confirm a completed step, highlight a positive
outcome, or call attention to a best practice.
{{< /admonition >}}

**Without a title:**

{{< admonition type="info" >}}
Omit the `title` param and the header row is hidden entirely.
{{< /admonition >}}


## Admonition quotes

The `admonition-quote` shortcode renders a quotation inside an
admonition-style callout box. It uses the same `type` variants as
`admonition`, with a single opening quote mark at the top (no closing
quote). Optional `title`, `author`, and `event` params are supported.

Same quote text in each example so you can compare styles.

**Note:**

```
{{</* admonition-quote type="note" title="Note quote" author="Anonymous" event="AGU 2019 Townhall" */>}}
Good research software is built for the people who use it.
{{</* /admonition-quote */>}}
```

**Rendered:**

{{< admonition-quote type="note" title="Note quote" author="Anonymous" event="AGU 2019 Townhall" >}}
Good research software is built for the people who use it.
{{< /admonition-quote >}}

**Info:**

```
{{</* admonition-quote type="info" */>}}
Good research software is built for the people who use it.
{{</* /admonition-quote */>}}
```

**Rendered:**

{{< admonition-quote type="info" >}}
Good research software is built for the people who use it.
{{< /admonition-quote >}}

**Warning:**

```
{{</* admonition-quote type="warning" title="A community reminder" */>}}
Good research software is built for the people who use it.
{{</* /admonition-quote */>}}
```

**Rendered:**

{{< admonition-quote type="warning" title="A community reminder" >}}
Good research software is built for the people who use it.
{{< /admonition-quote >}}

**Success:**

```
{{</* admonition-quote type="success" author="pyOpenSci community member" */>}}
Good research software is built for the people who use it.
{{</* /admonition-quote */>}}
```

**Rendered:**

{{< admonition-quote type="success" author="pyOpenSci community member" >}}
Good research software is built for the people who use it.
{{< /admonition-quote >}}

**Danger:**

```
{{</* admonition-quote type="danger" */>}}
Good research software is built for the people who use it.
{{</* /admonition-quote */>}}
```

**Rendered:**

{{< admonition-quote type="danger" >}}
Good research software is built for the people who use it.
{{< /admonition-quote >}}

Parameters:

| Param | Default | Description |
|---|---|---|
| `type` | `note` | Admonition variant: `note`, `info`, `warning`, `danger`, `success` |
| `title` | — | Optional heading above the quote |
| `author` | — | Attribution name (optional) |
| `event` | — | Event or source (optional) |


## Blockquotes

Plain Markdown blockquotes are for **inline citations** in the flow of a
post — a left border, light background, and Lora italic body text. No
shortcode is required.

Use a **pull quote** when you want the same quote typography with a
decorative opening mark and no sidebar box. Use a **feature quote** for
compact sidebar-style quotes (home page project block, two-column layouts).
Use an **admonition quote** when the quote should sit inside a colored
callout box.

**Single paragraph:**

```markdown
> Good research software is built for the people who use it.
```

> Good research software is built for the people who use it.

**With attribution (written in Markdown):**

```markdown
> Good research software is built for the people who use it.
>
> — **pyOpenSci community member**, *Peer review guide*
```

> Good research software is built for the people who use it.
>
> — **pyOpenSci community member**, *Peer review guide*

**Multi-line quote:**

```markdown
> Good research software is built for the people who use it.
>
> Quotes can span multiple paragraphs when you need more room.
```

> Good research software is built for the people who use it.
>
> Quotes can span multiple paragraphs when you need more room.

**Nested in a list** (blockquote inside list item):

```markdown
* Before you submit, read the packaging guide.
* Remember the goal of review:

  > Good research software is built for the people who use it.

* Then open your submission issue on GitHub.
```

* Before you submit, read the packaging guide.
* Remember the goal of review:

  > Good research software is built for the people who use it.

* Then open your submission issue on GitHub.


## Pull quotes

The `pullquote` shortcode uses the same Lora quote text as blockquotes,
with a decorative opening mark above and no left border or background.
Three accent colors are available for the mark. Optional `author` and
`event` params add attribution.

Same quote text in each example so you can compare colors.

**Teal (default):**

```
{{</* pullquote color="teal" author="Anonymous" event="AGU 2019 Townhall" */>}}
Good research software is built for the people who use it.
{{</* /pullquote */>}}
```

**Rendered:**

{{< pullquote color="teal" author="Anonymous" event="AGU 2019 Townhall" >}}
Good research software is built for the people who use it.
{{< /pullquote >}}

**Magenta:**

```
{{</* pullquote color="magenta" */>}}
Good research software is built for the people who use it.
{{</* /pullquote */>}}
```

**Rendered:**

{{< pullquote color="magenta" >}}
Good research software is built for the people who use it.
{{< /pullquote >}}

**Purple:**

```
{{</* pullquote color="purple" author="pyOpenSci community member" */>}}
Good research software is built for the people who use it.
{{</* /pullquote */>}}
```

**Rendered:**

{{< pullquote color="purple" author="pyOpenSci community member" >}}
Good research software is built for the people who use it.
{{< /pullquote >}}

Parameters:

| Param | Default | Description |
|---|---|---|
| `color` | `teal` | Color variant: `teal`, `magenta`, or `purple` |
| `author` | — | Attribution name (optional) |
| `event` | — | Event or source (optional, requires `author`) |


## Feature quotes

The `feature-quote` shortcode renders a compact quote with a Font Awesome
opening mark and **Nunito Sans** italic text at 1.3rem — no left border or gray
background. This is the same style used in the home page **Current project**
block. Three accent colors match the pull quote palette.

**Purple (default):**

```
{{</* feature-quote cite="Eliot Robson" */>}}
Gen AI solutions remind us that the centerpiece of open-source software is
building a community around solving a specific problem.
{{</* /feature-quote */>}}
```

**Rendered:**

{{< feature-quote cite="Eliot Robson" >}}
Gen AI solutions remind us that the centerpiece of open-source software is
building a community around solving a specific problem.
{{< /feature-quote >}}

**Teal:**

```
{{</* feature-quote color="teal" cite="Anonymous" */>}}
Good research software is built for the people who use it.
{{</* /feature-quote */>}}
```

**Rendered:**

{{< feature-quote color="teal" cite="Anonymous" >}}
Good research software is built for the people who use it.
{{< /feature-quote >}}

**Magenta:**

```
{{</* feature-quote color="magenta" */>}}
Good research software is built for the people who use it.
{{</* /feature-quote */>}}
```

**Rendered:**

{{< feature-quote color="magenta" >}}
Good research software is built for the people who use it.
{{< /feature-quote >}}

Parameters:

| Param | Default | Description |
|---|---|---|
| `color` | `purple` | Accent for the mark and quote text: `purple`, `teal`, or `magenta` |
| `cite` | — | Attribution name (optional) |
| `author` | — | Alias for `cite` |


## Buttons

The `button` shortcode renders a styled CTA link. Variants use pyOpenSci
brand colors. Default and large (`size="lg"`) sizes are supported.

**Dark purple:**

```
{{</* button href="/blog/" variant="dark-purple" */>}}
Dark purple
{{</* /button */>}}
```

**Rendered:**

{{< button href="/blog/" variant="dark-purple" >}}Dark purple{{< /button >}}

**White:**

```
{{</* button href="/blog/" variant="white" */>}}
White
{{</* /button */>}}
```

**Rendered:**

{{< button href="/blog/" variant="white" >}}White{{< /button >}}

**Green:**

```
{{</* button href="/blog/" variant="green" */>}}
Green
{{</* /button */>}}
```

**Rendered:**

{{< button href="/blog/" variant="green" >}}Green{{< /button >}}

**Light purple:**

```
{{</* button href="/blog/" variant="light-purple" */>}}
Light purple
{{</* /button */>}}
```

**Rendered:**

{{< button href="/blog/" variant="light-purple" >}}Light purple{{< /button >}}

**Outline:**

```
{{</* button href="/blog/" variant="outline" */>}}
Outline
{{</* /button */>}}
```

**Rendered:**

{{< button href="/blog/" variant="outline" >}}Outline{{< /button >}}

**Large:**

```
{{</* button href="/blog/" variant="dark-purple" size="lg" */>}}
Large button
{{</* /button */>}}
```

**Rendered:**

{{< button href="/blog/" variant="dark-purple" size="lg" >}}Large button{{< /button >}}

**With icon (right):**

```
{{</* button href="/blog/" variant="dark-purple" icon="arrow-right" iconPosition="right" */>}}
Continue reading
{{</* /button */>}}
```

**Rendered:**

{{< button href="/blog/" variant="dark-purple" icon="arrow-right" iconPosition="right" >}}Continue reading{{< /button >}}

**With icon (left):**

```
{{</* button href="https://github.com/pyOpenSci" variant="outline" icon="github" target="_blank" */>}}
View on GitHub
{{</* /button */>}}
```

**Rendered:**

{{< button href="https://github.com/pyOpenSci" variant="outline" icon="github" target="_blank" >}}View on GitHub{{< /button >}}

Parameters:

| Param | Default | Description |
|---|---|---|
| `href` | `#` | Link URL |
| `variant` | `dark-purple` | `dark-purple`, `white`, `green`, `light-purple`, `outline` |
| `size` | — | `lg` (optional) |
| `icon` | — | Font Awesome icon name (without `fa-`) |
| `iconPosition` | `left` | `left` or `right` |
| `target` | — | `_blank` for external links |


## YouTube

The `youtube` shortcode embeds a YouTube video in a responsive 16:9
container. Pass the video ID from the URL (the part after `v=`).

**Usage:**

```
{{</* youtube id="n9IZGT4DxDs" */>}}
```

**Rendered:**

{{< youtube id="n9IZGT4DxDs" >}}


## Blog list

The `blog-list` shortcode pulls the most recent blog posts and renders
them as listing cards. Use it on any page to surface recent content.

**Usage:**

```
{{</* blog-list title="Recent posts" limit=3 */>}}
```

**Rendered:**

{{< blog-list title="Recent posts" limit=3 >}}

Parameters:

| Param | Default | Description |
|---|---|---|
| `title` | `Recent Thoughts` | Section heading |
| `limit` | `3` | Number of posts to display |


## Impact card grid

The `impact-cards` shortcode renders a responsive card grid from the page
`cards:` front matter. Card types include image highlights, white icon
cards, and large `text_only` headline cards. Set `cards_layout: wide` in
front matter for a three-column desktop grid.

**Usage (front matter + shortcode):**

```yaml
cards:
  - text_only: true
    title: "Large text card"
  - modifier: "card--white"
    icon: "fa-solid fa-mobile-screen"
    title: "White card with icon"
    excerpt: "Icon, title, and body text."
  - title: "Teal highlight card"
    icon: "fa-solid fa-code"
    excerpt: "Default modifier uses primary-light background."
```

```
{{</* impact-cards */>}}
```

**Rendered** (uses the demo `cards:` on this page):

{{< impact-cards >}}


## Feature row

Side-by-side image and text with an optional button. Use on landing pages
inside swoosh sections.

**Usage:**

```
{{</* feature-row layout="left"
    title="Feature row title"
    image="/images/landing-pages/scipy-sprint-working.png"
    alt="Descriptive alt text."
    buttonUrl="/about-peer-review/"
    buttonLabel="Learn more" */>}}
Markdown body copy with **formatting** support.
{{</* /feature-row */>}}
```

**Rendered:**

{{< feature-row layout="left"
    title="Feature row example"
    image="/images/landing-pages/scipy-sprint-working.png"
    alt="Person working at a laptop during a pyOpenSci sprint."
    buttonUrl="/about-peer-review/"
    buttonLabel="About peer review" >}}
Markdown body copy with **formatting** support. Layout can be `left`,
`right`, or `center`.
{{< /feature-row >}}


## Swoosh section

Full-width band with optional curved dividers. When nesting other shortcodes
inside, use Hugo's HTML shortcode form (angle brackets), not the markdown
shortcode form (percent signs).

**Usage:**

```
{{</* swoosh_section background="purple" swoosh="bottom" */>}}
{{</* section-heading title="Inside a swoosh" */>}}
{{</* /swoosh_section */>}}
```

**Rendered:**

{{< swoosh_section background="purple" swoosh="bottom" >}}
{{< section-heading title="Inside a swoosh section" subtitle="Purple background • optional top or bottom curve" >}}
{{< /swoosh_section >}}


## Intro section

Renders `intro_section.text` from page front matter — typically placed
below a hero on splash pages.

**Usage:**

```yaml
intro_section:
  text: "Lead paragraph shown in the intro band."
```

```
{{</* intro-section */>}}
```

**Rendered:**

{{< intro-section >}}


## Connect with pyOpenSci

Admonition-style callout with community links and social follow list.

**Usage:**

```
{{</* connect-with-pyos */>}}
```

**Rendered:**

{{< connect-with-pyos >}}


## Recent contributors

Grid of the most recently added people from `data/contributors.yml`.

**Usage:**

```
{{</* recent-contributors limit="2" */>}}
```

**Rendered:**

{{< recent-contributors limit="2" >}}


## Recent packages

Grid of recently accepted packages from `data/packages.yml`.

**Usage:**

```
{{</* recent-packages limit="2" */>}}
```

**Rendered:**

{{< recent-packages limit="2" >}}


## Upcoming events

Event cards from `content/events/` (upcoming dates only).

**Usage:**

```
{{</* upcoming-events limit="2" */>}}
```

**Rendered:**

{{< upcoming-events limit="2" >}}


## Training feature

Home-page training strip — reads `training_feature` from page front matter.

**Usage:**

```yaml
training_feature:
  eyebrow: "Training"
  badge: "New cohort"
  title: "Course title"
  excerpt: "Short description."
  button_label: "Learn more"
  button_url: "/events/"
  image:
    src: "images/landing-pages/scipy-sprint-2026.png"
    alt: "Alt text."
```

```
{{</* training-feature */>}}
```

**Rendered:**

{{< training-feature >}}


## Current project

Full-width quote band used on the home page — reads `current_project` from
front matter.

**Usage:**

```yaml
current_project:
  eyebrow: "Current project"
  title: "Headline"
  excerpt: "Supporting text."
  quote: "Quote text."
  cite: "Attribution"
  button_label: "Get involved"
  button_url: "/events/"
```

```
{{</* current-project */>}}
```

**Rendered:**

{{< current-project >}}


## Editorial board

People grids for editorial board and emeritus editors from
`data/contributors.yml`. Used on program landing pages.

**Usage:**

```
{{</* editorial-board */>}}
```

**Rendered:**

{{< editorial-board >}}


## Landing-page shortcodes (reference only)

These shortcodes are used on specific splash pages and require matching
front matter or site data. They are listed here for completeness; see
[CONTRIBUTING.md](https://github.com/pyOpenSci/pyopensci.github.io/blob/main/CONTRIBUTING.md)
for layout details.

| Shortcode | Typical page | Notes |
|---|---|---|
| `home-programs-full` | Home | Wraps `impact-cards` with section heading |
| `partnership-cards` | Partners | Reads `partnership_cards` from front matter |
| `partnership_table` | Ways to give | Styled sponsorship tier comparison table |
| `university-testimonials` | Learn — universities | Testimonial carousel |
| `university-benefits-list` | Learn — universities | Benefits list partial |
| `packaging-guide-grid` | Python packaging resources | Static guide links grid |
| `tutorial-grid` | Python packaging resources | Tutorial cards grid |


## Section heading

The `section-heading` shortcode renders a large centred heading with an
optional subtitle. Useful at the top of long posts to establish visual
hierarchy.

**Usage:**

```
{{</* section-heading
  title="Section title"
  subtitle="Optional subtitle • With separators"
*/>}}
```

**Rendered:**

{{< section-heading
  title="Section heading example"
  subtitle="Optional subtitle text • Can use • separators"
>}}


## Metrics bar

The `metrics-bar` shortcode renders a row of key statistics with large
numbers. Use it to highlight impact data.

**Usage:**

```
{{</* metrics-bar
  stat1="**128** blog posts"
  stat2="**500+** community members"
  stat3="**100+** reviewed packages"
  stat4="**WCAG AA** accessible"
*/>}}
```

**Rendered:**

{{< metrics-bar
  stat1="**128** blog posts migrated"
  stat2="**500+** community members"
  stat3="**100+** reviewed packages"
  stat4="**WCAG AA** accessible"
>}}


## Cards

Three card shortcodes are available for structured content blocks.

### Two-card row

**Usage:**

```
{{</* two-card-row */>}}
{{</* card title="Card one" icon="fa-solid fa-star" */>}}
Content for the first card with **Markdown** support.
{{</* /card */>}}
{{</* card title="Card two" icon="fa-solid fa-bolt" */>}}
Content for the second card.
{{</* /card */>}}
{{</* /two-card-row */>}}
```

**Rendered:**

{{< two-card-row >}}
{{< card title="Peer review" icon="fa-solid fa-magnifying-glass" >}}
pyOpenSci runs an open, community-driven peer review process for
scientific Python packages. Packages that pass review are listed in
our ecosystem.
{{< /card >}}
{{< card title="Packaging guidance" icon="fa-solid fa-box-open" >}}
Our Python Packaging Guide covers everything from creating your first
package to publishing on PyPI — with tutorials written for scientists.
{{< /card >}}
{{< /two-card-row >}}

### Single card wide

**Usage:**

```
{{</* single-card-wide title="Wide card" icon="fa-solid fa-users" */>}}
Full-width card content here.
{{</* /single-card-wide */>}}
```

**Rendered:**

{{< single-card-wide title="Join the pyOpenSci community" icon="fa-solid fa-users" >}}
pyOpenSci is a diverse, welcoming community of scientists, developers,
and open source enthusiasts. Whether you want to submit a package for
review, volunteer as a reviewer, or contribute to our guides —
**there is a place for you here**.
{{< /single-card-wide >}}


## Standard Markdown elements

These are not shortcodes — they are standard Markdown rendered by Hugo.
Include them here so a full blog post render covers all common content
types.

### Code blocks

Inline: `python3 -m pip install pyopensci`

Fenced block with syntax highlighting:

```python
import pyopensci

# Submit a package for review
package = pyopensci.Package(
    name="mypackage",
    version="1.0.0",
    github_url="https://github.com/example/mypackage",
)
package.submit()
```

```bash
hugo serve --buildDrafts --disableFastRender
```

### Blockquotes

See [Blockquotes](#blockquotes) above for full examples. Quick render check:

```markdown
> Good research software is built for the people who use it.
```

> Good research software is built for the people who use it.

### Tables

Default Markdown tables render with basic styling. For sponsorship tier
tables (and similar comparison layouts), use the `partnership_table` shortcode
so the table matches the live site: light purple header row, horizontal row
dividers, and bold purple tier names in the first column.

```markdown
{{</* partnership_table */>}}
| Tier | Example focus | Example visibility & benefits |
| --- | --- | --- |
| **Ecosystem catalyst** | Companies ready to lead in supporting open source research software | Premier placement across channels; tailored activations such as mentored sprints and dedicated office hours |
| **Momentum driver** | Teams growing their scientific Python footprint | Sustained visibility on the website and in mailings; alignment with webinars and community programs |
| **Foundation builder** | Organizations beginning to invest in open science education | Recognition alongside training materials; support for scholarships and learner access |
{{</* /partnership_table */>}}
```

**Rendered:**

{{< partnership_table >}}
| Tier | Example focus | Example visibility & benefits |
| --- | --- | --- |
| **Ecosystem catalyst** | Companies ready to lead in supporting open source research software | Premier placement across channels; tailored activations such as mentored sprints and dedicated office hours |
| **Momentum driver** | Teams growing their scientific Python footprint | Sustained visibility on the website and in mailings; alignment with webinars and community programs |
| **Foundation builder** | Organizations beginning to invest in open science education | Recognition alongside training materials; support for scholarships and learner access |
{{< /partnership_table >}}

Plain table (no wrapper):

| Column A | Column B | Column C |
|---|---|---|
| Value 1 | Value 2 | Value 3 |
| Value 4 | Value 5 | Value 6 |

### Lists

Unordered:

* First item
* Second item
  * Nested item
  * Another nested item
* Third item

Ordered:

1. Step one
2. Step two
3. Step three
