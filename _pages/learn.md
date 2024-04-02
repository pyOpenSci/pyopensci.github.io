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
  - excerpt: "pyOpenSci creates resources to help you navigate the Python packaging ecosystem with ease. Our materials are community developed and go through extensive technical and pedagogical review."
development:
   - image_path: images/pyopensci-learn-community-created.png
     alt: "alt here "
     title: "Community Developed Python Tutorials for Scientists"
     excerpt: "Our tutorials are created through a multi-stage community review process.

     * Tutorials are developed by the pyOpenSci team or community members.

     * Tutorials are reviewed by tool maintainers to ensure ideas and concepts are accurate.

     * Before publication, tutorials then go through several rounds of community review for accuracy, usability and accessibility."
whats_next:
  - image_path: images/pyopensci-learn-github-collaboration.png
    alt: "A pencil sketch of a round table with people sitting around it from different backgrounds working on laptops and also writing together."
    excerpt: "Through the Better software for science fellowship we will be developing lessons focused on teaching core Github collaboration skills needed for both contributing to open source software and for working in an open science team environment. "
    title: "What's next: Collaborative GitHub for Scientists"
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
