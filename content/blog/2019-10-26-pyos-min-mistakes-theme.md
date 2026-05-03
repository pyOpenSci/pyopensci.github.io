---
title: "pyOS Website Theme Docs"
date: 2019-10-26
type: blog
url: /docs/pyos-website/
excerpt: "pyOpenSci minimal mistakes theme documentation."
author: "pyopensci"
category: Community
toc: true
lastmod: 2025-03-24
---

## Text alignment

Align text blocks with the following classes.

Left aligned text `.text-left`


```markdown
Left aligned text

```

---

Center aligned text. `.text-center`


```markdown
Center aligned text.

```

---

Right aligned text. `.text-right`


```markdown
Right aligned text.

```

---

**Justified text.** Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel eleifend odio, eu elementum purus. In hac habitasse platea dictumst. Fusce sed sapien eleifend, sollicitudin neque non, faucibus est. Proin tempus nisi eu arcu facilisis, eget venenatis eros consequat.


```markdown
**Justified text.** Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel eleifend odio, eu elementum purus. In hac habitasse platea dictumst. Fusce sed sapien eleifend, sollicitudin neque non, faucibus est. Proin tempus nisi eu arcu facilisis, eget venenatis eros consequat.

```

---

## Figures and figure alignment

Position images with the following classes.

### A regular figure with no alignment specified

<figure>
  <picture>
  <source srcset="/images/pyopensci-general/pyopensci-timeline2019-2024.webp" type="image/webp">
  <img src="/images/pyopensci-general/pyopensci-timeline2019-2024.png" alt="A timeline showing the growth of pyOpenSci from 2019 to 2024." style="width: 80%;">
  <figcaption>Growth of pyOpenSci from 2019 to 2024. Growth of pyOpenSci from 2019 to 2024. Growth of pyOpenSci from 2019 to 2024. Growth of pyOpenSci from 2019 to 2024. </figcaption>
  </picture>
</figure>

The code for the figure above is below:

```html
<figure>
  <picture>
  <source srcset="/images/pyopensci-general/pyopensci-timeline2019-2024.webp" type="image/webp">
  <img src="/images/pyopensci-general/pyopensci-timeline2019-2024.png" alt="A timeline showing the growth of pyOpenSci from 2019 to 2024.">
  <figcaption>Growth of pyOpenSci from 2019 to 2024</figcaption>
  </picture>
</figure>
```

### Figure -- align center

<figure class="align-center">
  <picture>
  <source srcset="/images/pyopensci-general/pyopensci-timeline2019-2024.webp" type="image/webp">
  <img src="/images/pyopensci-general/pyopensci-timeline2019-2024.png" alt="A timeline showing the growth of pyOpenSci from 2019 to 2024." style="width: 50%;">
  <figcaption>Growth of pyOpenSci from 2019 to 2024. Growth of pyOpenSci from 2019 to 2024. Growth of pyOpenSci from 2019 to 2024. Growth of pyOpenSci from 2019 to 2024. </figcaption>
  </picture>
</figure>

The image above is **centered** using `align-center`.

```html
<figure class="align-center">
  <picture>
  <source srcset="/images/pyopensci-general/pyopensci-timeline2019-2024.webp" type="image/webp">
  <img src="/images/pyopensci-general/pyopensci-timeline2019-2024.png" alt="A timeline showing the growth of pyOpenSci from 2019 to 2024.">
  <figcaption>Growth of pyOpenSci from 2019 to 2024</figcaption>
  </picture>
</figure>
```

### Figure -- align left

<figure class="align-left">
  <picture>
  <source srcset="/images/pyopensci-general/pyopensci-timeline2019-2024.webp" type="image/webp">
  <img src="/images/pyopensci-general/pyopensci-timeline2019-2024.png" alt="A timeline showing the growth of pyOpenSci from 2019 to 2024." style="width: 50%;">
  <figcaption>Growth of pyOpenSci from 2019 to 2024 Growth of pyOpenSci from 2019 to 2024 Growth of pyOpenSci from 2019 to 2024 Growth of pyOpenSci from 2019 to 2024</figcaption>
  </picture>
</figure>


The rest of this paragraph is filler for the sake of seeing the text wrap around the 150×150 image, which is **left aligned**. There should be plenty of room above, below, and to the right of the image. Just look at him there --- Hey guy! Way to rock that left side. I don't care what the right aligned image says, you look great. Don't let anyone else tell you differently.

```html
<figure class="align-left">
  <picture>
  <source srcset="/images/pyopensci-general/pyopensci-timeline2019-2024.webp" type="image/webp">
  <img src="/images/pyopensci-general/pyopensci-timeline2019-2024.png" alt="A timeline showing the growth of pyOpenSci from 2019 to 2024.">
  <figcaption>Growth of pyOpenSci from 2019 to 2024</figcaption>
  </picture>
</figure>
```

You can also adjust the width inline:

```html
<figure class="align-left">
  <picture>
  <source srcset="/images/pyopensci-general/pyopensci-timeline2019-2024.webp" type="image/webp">
  <img src="/images/pyopensci-general/pyopensci-timeline2019-2024.png" alt="A timeline showing the growth of pyOpenSci from 2019 to 2024." style="width: 50%;">
  <figcaption>Growth of pyOpenSci from 2019 to 2024</figcaption>
  </picture>
</figure>
```

### Figure -- align right

Below is a right aligned image

<figure class="align-right">
  <picture>
  <source srcset="/images/pyopensci-general/pyopensci-timeline2019-2024.webp" type="image/webp">
  <img src="/images/pyopensci-general/pyopensci-timeline2019-2024.png" alt="A timeline showing the growth of pyOpenSci from 2019 to 2024." style="width: 50%;">
  <figcaption>Growth of pyOpenSci from 2019 to 2024 Growth of pyOpenSci from 2019 to 2024 Growth of pyOpenSci from 2019 to 2024 Growth of pyOpenSci from 2019 to 2024</figcaption>
  </picture>
</figure>

And now we're going to shift things to the **right align**. Again, there should be plenty of room above, below, and to the left of the image. Just look at him there --- Hey guy! Way to rock that right side. I don't care what the left aligned image says, you look great. Don't let anyone else tell you differently.

The html looks like this:


```html
<figure class="align-right">
  <picture>
  <source srcset="/images/pyopensci-general/pyopensci-timeline2019-2024.webp" type="image/webp">
  <img src="/images/pyopensci-general/pyopensci-timeline2019-2024.png" alt="A timeline showing the growth of pyOpenSci from 2019 to 2024.">
  <figcaption>Growth of pyOpenSci from 2019 to 2024 Growth of pyOpenSci from 2019 to 2024 Growth of pyOpenSci from 2019 to 2024 Growth of pyOpenSci from 2019 to 2024</figcaption>
  </picture>
</figure>
```

### Figure -- full extending outside of the current area

The image below should extend outside of the parent container on right.


<figure class="full">
  <picture>
  <source srcset="/images/pyopensci-general/pyopensci-timeline2019-2024.webp" type="image/webp">
  <img src="/images/pyopensci-general/pyopensci-timeline2019-2024.png" alt="A timeline showing the growth of pyOpenSci from 2019 to 2024.">
  <figcaption>Growth of pyOpenSci from 2019 to 2024 Growth of pyOpenSci from 2019 to 2024 Growth of pyOpenSci from 2019 to 2024 Growth of pyOpenSci from 2019 to 2024</figcaption>
  </picture>
</figure>


```html
<figure class="full">
  <picture>
  <source srcset="/images/pyopensci-general/pyopensci-timeline2019-2024.webp" type="image/webp">
  <img src="/images/pyopensci-general/pyopensci-timeline2019-2024.png" alt="A timeline showing the growth of pyOpenSci from 2019 to 2024.">
  <figcaption>Growth of pyOpenSci from 2019 to 2024 Growth of pyOpenSci from 2019 to 2024 Growth of pyOpenSci from 2019 to 2024 Growth of pyOpenSci from 2019 to 2024</figcaption>
  </picture>
</figure>
```

## Blockquote styles

### Regular blockquote

```markdown
> This entire effort underscores the power of community when guided in
> the right direction, showcasing how collective effort can drive
> meaningful progress.

```

> This entire effort underscores the power of community when guided in
> the right direction, showcasing how collective effort can drive
> meaningful progress.


### Fancy blockquote

```markdown
> This entire effort underscores the power of community when guided in
> the right direction, showcasing how collective effort can drive
> meaningful progress.

```

> This entire effort underscores the power of community when guided in
> the right direction, showcasing how collective effort can drive
> meaningful progress.



### Fancy blockquote magenta & purple variants

```markdown
> This entire effort underscores the power of community when guided in
> the right direction, showcasing how collective effort can drive
> meaningful progress.

```

> This entire effort underscores the power of community when guided in
> the right direction, showcasing how collective effort can drive
> meaningful progress.



```markdown
> This entire effort underscores the power of community when guided in
> the right direction, showcasing how collective effort can drive
> meaningful progress.

```

> This entire effort underscores the power of community when guided in
> the right direction, showcasing how collective effort can drive
> meaningful progress.



### Quotes using include files

You can also create blockquotes using include files.
Below is a green and magenta version of the same quote

````html
{% raw %}
{% include pyos-blockquote.html quote="[*I want to... *] Streamline the development of good quality, socially responsible, and easily shareable software." author="Anonymous" event="AGU 2019 Townhall" class="highlight magenta" %}
{% endraw %}
````

{% include pyos-blockquote.html quote="[*I want to... *] Streamline the development of good quality, socially responsible, and easily shareable software." author="Anonymous" event="AGU 2019 Townhall" class="highlight magenta" %}

```markdown
{% raw %}
{% include pyos-blockquote.html quote="[*I want to... *] Streamline the development of good quality, socially responsible, and easily shareable software." author="Anonymous" event="AGU 2019 Townhall" class="highlight purple" %}
{% endraw %}
```

{% include pyos-blockquote.html quote="[*I want to... *] Streamline the development of good quality, socially responsible, and easily shareable software." author="Anonymous" event="AGU 2019 Townhall" class="highlight purple" %}

The default color for the quotes is the pyos teal green.

```
{% raw %}
{% include pyos-blockquote.html quote="[*I want to... *] Streamline the development of good quality, socially responsible, and easily shareable software." author="Anonymous" event="AGU 2019 Townhall" class="highlight" %}
{% endraw %}
```

{% include pyos-blockquote.html quote="[*I want to... *] Streamline the development of good quality, socially responsible, and easily shareable software." author="Anonymous" event="AGU 2019 Townhall" class="highlight" %}

### Quotes in notice blocks

```
{{< admonition type="note" >}}
{% raw %}
{% include pyos-blockquote.html quote="[*I want to... *] Streamline the development of good quality, socially responsible, and easily shareable software." author="Anonymous" event="AGU 2019 Townhall" class="highlight" %}
{% endraw %}
{{< /admonition >}}
```

{{< admonition type="note" >}}
{% include pyos-blockquote.html quote="[*I want to... *] Streamline the development of good quality, socially responsible, and easily shareable software." author="Anonymous" event="AGU 2019 Townhall" class="highlight" %}
{{< /admonition >}}

## Buttons

Make any link standout more when applying the `.btn .btn--primary` classes.

```html
<a href="#" class="btn btn--primary">Link Text</a>
```

| Button Type   | Example | Class | Kramdown |
| ------        | ------- | ----- | ------- |
| Default       | [Text](#link) | `.btn` | `[Text](#link)` |
| Primary       | [Text](#link) | `.btn .btn--primary` | `[Text](#link)` |
| Success       | [Text](#link) | `.btn .btn--success` | `[Text](#link)` |
| Warning       | [Text](#link) | `.btn .btn--warning` | `[Text](#link)` |
| Danger        | [Text](#link) | `.btn .btn--danger` | `[Text](#link)` |
| Info          | [Text](#link) | `.btn .btn--info` | `[Text](#link)` |
| Inverse       | [Text](#link) | `.btn .btn--inverse` | `[Text](#link)` |
| Light Outline | [Text](#link) | `.btn .btn--light-outline` | `[Text](#link)` |

| Button Size | Example | Class | Kramdown |
| ----------- | ------- | ----- | -------- |
| X-Large     | [X-Large Button](#) | `.btn .btn--primary .btn--x-large` | `[Text](#link)` |
| Large       | [Large Button](#) | `.btn .btn--primary .btn--large` | `[Text](#link)` |
| Default     | [Default Button](#) | `.btn .btn--primary` | `[Text](#link)` |
| Small       | [Small Button](#) | `.btn .btn--primary .btn--small` | `[Text](#link)` |

## Call out boxes (notices)

You can create a basic notice or call out box for a pargraph by adding `` to the line immediately below the paragraph.


```markdown
**Technical and social skills go hand in hand.** Open source communities are most productive when contributors and maintainers recognize this balance between the technical and social skills associated with contributing.

```
Which looks like this rendered:

**Technical and social skills go hand in hand.** Open source communities are most productive when contributors and maintainers recognize this balance between the technical and social skills associated with contributing.


There are multiple classes that you can use to modify the background color of the call out block.

| Notice Type | Class              |
| ----------- | -----              |
| Default     | `.notice`          |
| Primary     | `.notice--primary` |
| Info        | `.notice--info`    |
| Warning     | `.notice--warning` |
| Success     | `.notice--success` |
| Danger      | `.notice--danger`  |
| Measure     | `.notice--measure` |

### Readable width (`.notice--measure`)

Use **`.notice--measure`** together with **`.notice`** (and optionally a color class such as `.notice--info`) on pages whose front matter includes **`classes: flowing`**. It caps the notice to a readable line length and centers it in the column—useful on full-bleed hubs such as [Learn](/learn.html), where a plain `.notice` would otherwise stretch edge to edge.

```markdown
Short callout text matches the hero column width.

```

Color variant example:

```markdown
**Heads up:** details for people skimming the page.

```

The measure rules are defined under `.flowing` in the site CSS, so they do not apply on a normal single-column post unless you add `flowing` to that page’s `classes` list.

**Watch out!** This paragraph of text has been emphasized with the `` class.


**Watch out!** This paragraph of text has been emphasized with  the `` class.


**Watch out!** This paragraph of text has been emphasized with the `` class.


**Watch out!** This paragraph of text has been emphasized with the `` class.


**Watch out!** This paragraph of text has been emphasized with the `` class.


{{< admonition type="note" >}}
You can also add the `.notice` class to a `<div>` element. Notice below that `markdown="1"` allows you to use markdwon within the html div.

```html
<div class="notice" markdown="1">
You can also add the .notice class to a <div> element.

* Bullet point 1
* Bullet point 2
{{< /admonition >}}
```

</div>

To add a heading element to a notice  block but ignore in the TOC, use `no_toc` as a class like this:

```html
{{< admonition type="info" >}}
<h4 class="no_toc">Notice Headline:</h4>
   here is some html text.
{{< /admonition >}}
```

Which will render like this

{{< admonition type="info" >}}
<h4 class="no_toc">Notice Headline that won't appear in toc</h4>
  {{ notice-text | markdownify }}.
  You can add more text here too
{{< /admonition >}}


{{< admonition type="info" title="Notice Headline" >}}
Here is some html text.

Here is a list
* item 1
* item 2
* item 3

Testing a div with a h4 header

````html
<div class="notice--info" markdown="1">
#### Notice Headline


This is how you generate a div using markdown
{{< /admonition >}}
````
</div>



Using the Kramdown Markdown renderer with Jekyll allows you to add [block](http://kramdown.gettalong.org/quickref.html#block-attributes) and [inline attributes](http://kramdown.gettalong.org/quickref.html#inline-attributes). This is nice if you want to add custom styling to text and image, and still write in Markdown.

**Jekyll 3:** Kramdown is the default for `jekyll new` sites and those hosted on GitHub Pages. Not using Kramdown? That's OK. The following classes are still available when used with standard HTML.



## YouTube

You can use embeds to add a youtube video to a page. You can copy the id from the video url and add it to the include line below. The jekyll will do the rest for you!

```
{% raw %}
{% include video id="n9IZGT4DxDs" provider="youtube" %}
{% endraw %}
```

{% include video id="n9IZGT4DxDs" provider="youtube" %}
