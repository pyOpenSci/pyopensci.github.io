---
layout: single
title: "Astropy"
excerpt: "An ecosystem of interoperable astronomy packages"
header:
  overlay_color: "rgb(255, 80, 0)"
  overlay_filter: 0.6
  overlay_image: images/partners/astropy-banner.png
  image_alt: "Digital elevation model"
permalink: partners/astropy.html
classes: wide
community: astropy
---

{%
    assign pkgs = site.data.packages
    | where_exp: "item", "item.communities contains page.community"
%}

## Welcome to {{ page.community }}

The Astropy Project is a community effort to develop a common core package for Astronomy in Python and foster an ecosystem of interoperable astronomy packages.

The Astropy community is committed to supporting diversity and inclusion.

Please remember to acknowledge and cite the use of Astropy!

[![astropy](http://img.shields.io/badge/powered%20by-AstroPy-orange.svg?style=flat)](http://www.astropy.org/)

<p><input type="text" id="quicksearch" placeholder="Search" /></p>

<div id="filters" class="button-group">
  <button class="button is-checked" data-filter="*">show all</button>
  <button class="button" data-filter=".data-munging">pony factor</button>
  <button class="button" data-filter=".data-extraction">last commit date</button>
  <button class="button" data-filter=".data-retrieval">stars</button>
  <button class="button" data-filter=".data-visualization">something else</button>
</div>

<div class="grid">
{% for apackage in pkgs %}
  {% include package-grid-partners.html %}
{% endfor %}
</div>

## TODO's

- We might want to implement filters for some of the metrics we look for
  when considering package health that would be flags (ie a repo that hasn't been updated in a while). This will make it easier for people to identify packages that we may want to reach out to.
- We will want to identify the specific metrics that we want to house on the cards.
  - last commit
  - number of contributors
  - metrics maybe that [scientific python is collecting via devstats](https://devstats.scientific-python.org/_generated/astropy.html)?

## TODO - add a sort by

- last commit date
- pony factor
- other things??
