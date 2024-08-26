---
layout: single
title: "pyOS Website Theme Docs"
excerpt: "pyOpenSci minimal mistakes theme documentation."
author: "Leah Wasser"
permalink: docs/pyos-website/
header:
    overlay_filter: 0.6
    overlay_color: "#333"
last_modified: 2024-08-23
toc: true
categories:
  - docs
  - blog-post
---


## Text alignment

Align text blocks with the following classes.

Left aligned text `.text-left`
{: .text-left}

```markdown
Left aligned text
{: .text-left}
```

---

Center aligned text. `.text-center`
{: .text-center}

```markdown
Center aligned text.
{: .text-center}
```

---

Right aligned text. `.text-right`
{: .text-right}

```markdown
Right aligned text.
{: .text-right}
```

---

**Justified text.** `.text-justify` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vel eleifend odio, eu elementum purus. In hac habitasse platea dictumst. Fusce sed sapien eleifend, sollicitudin neque non, faucibus est. Proin tempus nisi eu arcu facilisis, eget venenatis eros consequat.
{: .text-justify}

```markdown
Justified text.
{: .text-justify}
```

---

No wrap text. `.text-nowrap`
{: .text-nowrap}

```markdown
No wrap text.
{: .text-nowrap}
```

## Image alignment

Position images with the following classes.


### Figure -- align center

<figure class="align-center">
  <img src="/images/pyopensci-general/pyopensci-timeline2019-2024.png" alt="A timeline showing the growth of pyOpenSci from 2019 to 2024." style="width: 50%;">
  <figcaption>Growth of pyOpenSci from 2019 to 2024. Growth of pyOpenSci from 2019 to 2024. Growth of pyOpenSci from 2019 to 2024. Growth of pyOpenSci from 2019 to 2024. </figcaption>
</figure>

The image above happens to be **centered**.

```html
<figure class="align-center">
  <img src="/images/pyopensci-general/pyopensci-timeline2019-2024.png" alt="A timeline showing the growth of pyOpenSci from 2019 to 2024.">
  <figcaption>Growth of pyOpenSci from 2019 to 2024</figcaption>
</figure>
```


### Figure -- align left

<figure class="align-left">
  <img src="/images/pyopensci-general/pyopensci-timeline2019-2024.png" alt="A timeline showing the growth of pyOpenSci from 2019 to 2024." style="width: 50%;">
  <figcaption>Growth of pyOpenSci from 2019 to 2024 Growth of pyOpenSci from 2019 to 2024 Growth of pyOpenSci from 2019 to 2024 Growth of pyOpenSci from 2019 to 2024</figcaption>
</figure>


The rest of this paragraph is filler for the sake of seeing the text wrap around the 150×150 image, which is **left aligned**. There should be plenty of room above, below, and to the right of the image. Just look at him there --- Hey guy! Way to rock that left side. I don't care what the right aligned image says, you look great. Don't let anyone else tell you differently.

```html
<figure class="align-left">
  <img src="/images/pyopensci-general/pyopensci-timeline2019-2024.png" alt="A timeline showing the growth of pyOpenSci from 2019 to 2024.">
  <figcaption>Growth of pyOpenSci from 2019 to 2024</figcaption>
</figure>
```

You can also adjust the width inline:

```html
<figure class="align-left">
  <img src="/images/pyopensci-general/pyopensci-timeline2019-2024.png" alt="A timeline showing the growth of pyOpenSci from 2019 to 2024." style="width: 50%;">
  <figcaption>Growth of pyOpenSci from 2019 to 2024</figcaption>
</figure>
```

### Figure -- align right

And now we're going to shift things to the **right align**. Again, there should be plenty of room above, below, and to the left of the image. Just look at him there --- Hey guy! Way to rock that right side. I don't care what the left aligned image says, you look great. Don't let anyone else tell you differently.

<figure class="align-right">
  <img src="/images/pyopensci-general/pyopensci-timeline2019-2024.png" alt="A timeline showing the growth of pyOpenSci from 2019 to 2024." style="width: 50%;">
  <figcaption>Growth of pyOpenSci from 2019 to 2024 Growth of pyOpenSci from 2019 to 2024 Growth of pyOpenSci from 2019 to 2024 Growth of pyOpenSci from 2019 to 2024</figcaption>
</figure>

The html looks like this:


```html
<figure class="align-right">
  <img src="/images/pyopensci-general/pyopensci-timeline2019-2024.png" alt="A timeline showing the growth of pyOpenSci from 2019 to 2024.">
  <figcaption>Growth of pyOpenSci from 2019 to 2024 Growth of pyOpenSci from 2019 to 2024 Growth of pyOpenSci from 2019 to 2024 Growth of pyOpenSci from 2019 to 2024</figcaption>
</figure>
```

### Figure -- full extending outside of the current area

The image below should extend outside of the parent container on right.


<figure class="full">
  <img src="/images/pyopensci-general/pyopensci-timeline2019-2024.png" alt="A timeline showing the growth of pyOpenSci from 2019 to 2024.">
  <figcaption>Growth of pyOpenSci from 2019 to 2024 Growth of pyOpenSci from 2019 to 2024 Growth of pyOpenSci from 2019 to 2024 Growth of pyOpenSci from 2019 to 2024</figcaption>
</figure>




```html
<figure class="full">
  <img src="/images/pyopensci-general/pyopensci-timeline2019-2024.png" alt="A timeline showing the growth of pyOpenSci from 2019 to 2024.">
  <figcaption>Growth of pyOpenSci from 2019 to 2024 Growth of pyOpenSci from 2019 to 2024 Growth of pyOpenSci from 2019 to 2024 Growth of pyOpenSci from 2019 to 2024</figcaption>
</figure>
```

## Blockquote styles

### Regular blockquote

```markdown
> This entire effort underscores the power of community when guided in
> the right direction, showcasing how collective effort can drive
> meaningful progress.
{: .highlight-quote }
```

> This entire effort underscores the power of community when guided in
> the right direction, showcasing how collective effort can drive
> meaningful progress.


### Fancy blockquote

```markdown
> This entire effort underscores the power of community when guided in
> the right direction, showcasing how collective effort can drive
> meaningful progress.
{: .highlight-quote }
```

> This entire effort underscores the power of community when guided in
> the right direction, showcasing how collective effort can drive
> meaningful progress.
{: .highlight-quote }

## Buttons

Make any link standout more when applying the `.btn .btn--primary` classes.

```html
<a href="#" class="btn btn--primary">Link Text</a>
```

| Button Type   | Example | Class | Kramdown |
| ------        | ------- | ----- | ------- |
| Default       | [Text](#link){: .btn} | `.btn` | `[Text](#link){: .btn}` |
| Primary       | [Text](#link){: .btn .btn--primary} | `.btn .btn--primary` | `[Text](#link){: .btn .btn--primary}` |
| Success       | [Text](#link){: .btn .btn--success} | `.btn .btn--success` | `[Text](#link){: .btn .btn--success}` |
| Warning       | [Text](#link){: .btn .btn--warning} | `.btn .btn--warning` | `[Text](#link){: .btn .btn--warning}` |
| Danger        | [Text](#link){: .btn .btn--danger} | `.btn .btn--danger` | `[Text](#link){: .btn .btn--danger}` |
| Info          | [Text](#link){: .btn .btn--info} | `.btn .btn--info` | `[Text](#link){: .btn .btn--info}` |
| Inverse       | [Text](#link){: .btn .btn--inverse} | `.btn .btn--inverse` | `[Text](#link){: .btn .btn--inverse}` |
| Light Outline | [Text](#link){: .btn .btn--light-outline} | `.btn .btn--light-outline` | `[Text](#link){: .btn .btn--light-outline}` |

| Button Size | Example | Class | Kramdown |
| ----------- | ------- | ----- | -------- |
| X-Large     | [X-Large Button](#){: .btn .btn--primary .btn--x-large} | `.btn .btn--primary .btn--x-large` | `[Text](#link){: .btn .btn--primary .btn--x-large}` |
| Large       | [Large Button](#){: .btn .btn--primary .btn--large} | `.btn .btn--primary .btn--large` | `[Text](#link){: .btn .btn--primary .btn--large}` |
| Default     | [Default Button](#){: .btn .btn--primary} | `.btn .btn--primary` | `[Text](#link){: .btn .btn--primary }` |
| Small       | [Small Button](#){: .btn .btn--primary .btn--small} | `.btn .btn--primary .btn--small` | `[Text](#link){: .btn .btn--primary .btn--small}` |

## Notices

Call attention to a block of text.

| Notice Type | Class              |
| ----------- | -----              |
| Default     | `.notice`          |
| Primary     | `.notice--primary` |
| Info        | `.notice--info`    |
| Warning     | `.notice--warning` |
| Success     | `.notice--success` |
| Danger      | `.notice--danger`  |

**Watch out!** This paragraph of text has been [emphasized](#) with the `{: .notice}` class. The purpose of this test paragraph is to check how different styles are applied across various sections of text. You can [highlight](#) certain words or phrases, adjust the [font size](#), or change the [text color](#) to see how the styling adapts. Additionally, experimenting with [different classes](#) and observing the effects on alignment, spacing, and other typographic elements will help ensure that your CSS is applied consistently and effectively across your site.
{: .notice}

**Watch out!** This paragraph of text has been [emphasized](#) with the `{: .notice--primary}` class.
{: .notice--primary}

**Watch out!** This paragraph of text has been [emphasized](#) with the `{: .notice--info}` class.
{: .notice--info}

**Watch out!** This paragraph of text has been [emphasized](#) with the `{: .notice--warning}` class.
{: .notice--warning}

**Watch out!** This paragraph of text has been [emphasized](#) with the `{: .notice--success}` class.
{: .notice--success}

**Watch out!** This paragraph of text has been [emphasized](#) with the `{: .notice--danger}` class.
{: .notice--danger}

<div class="notice" markdown="1">
You can also add the `.notice` class to a `<div>` element like this:

```html
<div class="notice">
You can also add the .notice class to a <div> element.

* Bullet point 1
* Bullet point 2
</div>
```

</div>

To add a heading element to a notice  block but ignore in the TOC, use `no_toc` as a class like this:

```html
<div class="notice--info">
  <h4 class="no_toc">Notice Headline:</h4>
   here is some html text.
</div>
```

Which will render like this

<div class="notice--info">
  <h4 class="no_toc">Notice Headline that won't appear in toc</h4>
  {{ notice-text | markdownify }}.
  You can add more text here too
</div>




Using the Kramdown Markdown renderer with Jekyll allows you to add [block](http://kramdown.gettalong.org/quickref.html#block-attributes) and [inline attributes](http://kramdown.gettalong.org/quickref.html#inline-attributes). This is nice if you want to add custom styling to text and image, and still write in Markdown.

**Jekyll 3:** Kramdown is the default for `jekyll new` sites and those hosted on GitHub Pages. Not using Kramdown? That's OK. The following classes are still available when used with standard HTML.
{: .notice--warning}
