---
title: "clean-hugo theme: blog formatting and shortcode reference"
date: 2019-01-01
type: blog
url: /blog/clean-hugo-blog-theme-features.html
excerpt: "A living reference for every shortcode and formatting option available in the clean-hugo theme — figures, admonitions, pull quotes, buttons, YouTube embeds, and more."
author: "pyopensci"
category: Community
toc: true
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


## Pull quotes

The `pullquote` shortcode renders a large decorative quotation with
optional author and event attribution. Three color variants are available.

**Usage:**

```
{{</* pullquote color="teal" author="Author Name" event="Event Name" */>}}
Quote text goes here.
{{</* /pullquote */>}}
```

**Teal (default):**

{{< pullquote color="teal" author="Anonymous" event="AGU 2019 Townhall" >}}
I want to streamline the development of good quality, socially
responsible, and easily shareable software.
{{< /pullquote >}}

**Magenta:**

{{< pullquote color="magenta" >}}
This entire effort underscores the power of community when guided in
the right direction, showcasing how collective effort can drive
meaningful progress.
{{< /pullquote >}}

**Purple:**

{{< pullquote color="purple" author="pyOpenSci community member" >}}
Open science is not just about sharing data — it is about building
the tools and community that make sharing possible.
{{< /pullquote >}}

Parameters:

| Param | Default | Description |
|---|---|---|
| `color` | `teal` | Color variant: `teal`, `magenta`, or `purple` |
| `author` | — | Attribution name (optional) |
| `event` | — | Event or source (optional, requires `author`) |


## Buttons

The `button` shortcode renders a styled CTA link. It supports four
variants, two sizes, and optional Font Awesome icons.

**Usage:**

```
{{</* button href="/blog/" variant="primary" icon="arrow-right" iconPosition="right" */>}}
Read the blog
{{</* /button */>}}
```

**Variants:**

{{< button href="/blog/" variant="primary" >}}Primary{{< /button >}}

{{< button href="/blog/" variant="secondary" >}}Secondary{{< /button >}}

{{< button href="/blog/" variant="accent" >}}Accent{{< /button >}}

{{< button href="/blog/" variant="neutral" >}}Neutral{{< /button >}}

**With icon (right):**

{{< button href="/blog/" variant="primary" icon="arrow-right" iconPosition="right" >}}Continue reading{{< /button >}}

**With icon (left):**

{{< button href="https://github.com/pyOpenSci" variant="secondary" icon="github" target="_blank" >}}View on GitHub{{< /button >}}

Parameters:

| Param | Default | Description |
|---|---|---|
| `href` | `#` | Link URL |
| `variant` | `primary` | `primary`, `secondary`, `accent`, `neutral` |
| `size` | — | `sm`, `lg`, `full` |
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

Parameters:

| Param | Default | Description |
|---|---|---|
| `title` | `Recent Thoughts` | Section heading |
| `limit` | `3` | Number of posts to display |


## Masonry gallery

The `masonry` shortcode creates a responsive photo grid with
click-to-enlarge lightbox (GLightbox). Write images as standard Markdown
inside the shortcode.

**Usage:**

```
{{</* masonry */>}}
![Alt text for photo one](images/path/photo1.jpg)
![Alt text for photo two](images/path/photo2.jpg)
![Alt text for photo three](images/path/photo3.jpg)
{{</* /masonry */>}}
```

Images tile responsively and open full-size in a lightbox when clicked.
All images in a gallery share navigation arrows in the lightbox view.


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

```
{{</* single-card-wide title="Wide card" icon="fa-solid fa-users" */>}}
Full-width card content here.
{{</* /single-card-wide */>}}
```

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

### Blockquote (plain)

> Open source is infrastructure. Infrastructure needs funding,
> maintenance, and community stewardship to survive.

### Tables

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
