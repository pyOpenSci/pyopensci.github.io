---
layout: splash
permalink: /python-packages.html
title: "pyOpenSci Open Peer Review & Accepted Packages"
classes:
header:
    overlay_image: images/header.jpg
    overlay_filter: 0.6
intro:
    - excerpt: "Below you will find a list of scientific Python packages that have 
    been accepted into the pyOpenSci ecosystem through the open peer review process."
toc: false
classes: wide
redirect_from: 
  - /python-packages/
---

{% include feature_row id="intro" type="center" %}

## Our accepted Python open source packages

The packages below have already been through our open peer review process and 
are accepted as pyOpenSci packages.

<div class="grid">
{% for apackage in site.data.packages %}
  {% include package-grid.html  %}
{% endfor %}
</div>

<br clear="both">
