---
layout: splash
permalink: /learn.html
title: "Python Tutorials & Learning Resources for Scientists"
classes: flowing
header:
  overlay_image: images/header.png
  overlay_filter: 0.6
scientists:
  - image_path: images/pyopensci-people-at-computer.jpg
    alt: "A pencil sketch of a round table with people sitting around it from different backgrounds working on laptops and also writing together."
    excerpt: "Our catalog of vetted open source tools makes it easier for scientists to find the trusted tools that they need to develop their open science workflows."
    title: "Help scientists find the open science tools that they need"
    url: https://www.pyopensci.org/python-packages.html
    btn_label: View our growing list of accepted scientific Python packages
    btn_class: btn--primary
overview:
  - excerpt: "pyOpenSci creates resources to help you navigate the Python packaging ecosystem with ease. All of our materials are community developed and go through extensive review."
development:
   - image_path: images/people-building-blocks.jpg
     alt: "alt here "
     title: "Need image - how we create our tutorials"
     excerpt: "More about our review process"
     url: https://www.pyopensci.org/python-package-guide/tutorials/
     btn_label: View our Python packaging guide
     btn_class: btn--primary
whats_next:
  - image_path: images/pyopensci-people-at-computer.jpg
    alt: "A pencil sketch of a round table with people sitting around it from different backgrounds working on laptops and also writing together."
    excerpt: "More here"
    title: "What's next: Collaborative GitHub for Scientists"
    url: https://www.pyopensci.org/python-packages.html
    btn_label: View our growing list of accepted scientific Python packages
    btn_class: btn--primary
toc: false
---

{% include feature_row id="overview" type="center" %}

<div class="pyos-section purple">
<div class="content" markdown="1">

{% include feature_row id="development" type="left" %}

</div>
</div>

{% include div_purple_bottom.html  %}

<div class="pyos-section">
<div class="content" markdown="1">

## Beginner friendly Python packaging tutorials

Beginner-friendly Python packaging tutorials that will take you through
the full process of creating a Python package, following modern best
practices.

<div class="tutorial__container">
{% for atutorial in site.tutorials %}
  {% include tutorial-grid.html  %}
{% endfor %}
</div>

<div class="clearfix"></div>

</div>
</div>

{% include div_purple_top.html  %}

<div class="pyos-section purple">
<div class="content" markdown="1">

{% include feature_row id="whats_next" type="left" %}
</div>
</div>

{% include div_purple_bottom.html  %}
