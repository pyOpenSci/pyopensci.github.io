---
layout: splash
permalink: /python-packages.html
title: "pyOpenSci Open Peer Review & Accepted Packages"
classes:
header:
    overlay_image: images/header.jpg
    overlay_filter: 0.6
intro:
    - excerpt: "The scientific Python packages below have
    been accepted into the pyOpenSci ecosystem through our [open peer review process](/about-peer-review/)."
toc: false
classes: wide
redirect_from:
  - /python-packages/
---

{% include feature_row id="intro" type="center" %}

## Explore our accepted scientific Python open source packages

<p><input type="text" id="quicksearch" placeholder="Search" /></p>

<div id="filters" class="button-group">
  <button class="button is-checked" data-filter="*">show all</button>
  <button class="button" data-filter=".data-munging">data munging</button>
  <button class="button" data-filter=".data-extraction">data extraction</button>
  <button class="button" data-filter=".data-retrieval">data retrieval</button>
  <button class="button" data-filter=".data-visualization">data-visualization</button>
  <button class="button" data-filter=".education">education</button>

<button class="button" data-filter=".geospatial">geospatial</button>
<button class="button" data-filter=".reproducibility">reproducibility</button>

  <!-- <button class="button" data-filter=":not(.transition)">not transition</button>
  <button class="button" data-filter=".metal:not(.transition)">metal but not transition</button> -->
</div>

<div class="grid-isotope">
{% for apackage in site.data.packages %}
  {% include package-grid.html %}
{% endfor %}
</div>

<hr style="clear:both;">
<br clear="both">
