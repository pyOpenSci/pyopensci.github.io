---
layout: splash
permalink: /learn.html
title: "Python Tutorials & Learning Resources for Scientists"
classes: flowing
header:
  overlay_image: images/headers/pyopensci-learn-header.png
  overlay_filter: 0.3
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
     alt: "An image showing a bunch of hands holding up a sign that says Community Developed. the background is dark purple with a few green decorative items."
     title: "Our development process: Community-developed Python tutorials for scientists"
     excerpt: "Our tutorials are created through a multi-stage community review process.

     * Tutorials are developed by the pyOpenSci team or community members.

     * Tutorials are reviewed by tool maintainers to ensure ideas and concepts are accurate.

     * Before publication, tutorials then go through several rounds of community review for accuracy, usability and accessibility."
whats_next:
  - image_path: images/pyopensci-learn-github-collaboration.png
    alt: "A graphic with a light yellow background that says essential collaboration skills for scientists - using GitHub. On the right there is a man and a woman sitting at a tall table with laptops working."
    excerpt: "Through the [Better Software for Science Fellowship](https://bssw.io/pages/bssw-fellowship-program) we will be developing lessons focused on teaching core GitHub collaboration skills needed for both contributing to open source software and for working in an open science team environment.


    **Stay up to date with course development and announcements in [our Discourse community](https://pyopensci.discourse.group/), as well as on [Fosstodon](https://fosstodon.org/@pyOpenSci) and [LinkedIn](https://www.linkedin.com/company/pyopensci/)**"
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
<!-- Feature wrapper has a clear both -->
<div class="feature__wrapper padded" markdown="1">

## Start learning: Beginner-friendly Python packaging tutorials

Beginner-friendly Python packaging tutorials guide you through creating a Python package, following modern best practices. It's best to follow the tutorials in order, but you can always pick a specific topic if you wish to jump around.

<div class="tutorial__container">
{% for atutorial in site.tutorials %}
  {% include tutorial-grid.html  %}
{% endfor %}
</div>


</div>
</div>
</div>

{% include div_purple_top.html  %}

<div class="pyos-section purple">
<div class="content" markdown="1">

{% include feature_row id="whats_next" type="left" %}
</div>
</div>

{% include div_purple_bottom.html  %}
