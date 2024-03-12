---
layout: splash
title: "Astropy"
excerpt: "An ecosystem of interoperable astronomy packages"
header:
  overlay_color: "rgb(255, 80, 0)"
  overlay_filter: 0.6
  overlay_image: images/partners/astropy-banner.png
  image_alt: "Digital elevation model"
permalink: partners/astropy.html
intro:
    - excerpt: "Astropy is a pyOpenSci community peer review partner. [Learn more about our peer review partnership program](/partners.html)."
classes: wide
community: astropy
---

{%
    assign pkgs = site.data.packages
    | where_exp: "item", "item.communities contains page.community"
%}

{% include feature_row id="intro" type="center" %}

## pyOpenSci peer review partner: {{ page.community | capitalize }}

## About Astropy

[Astropy](https://www.astropy.org/) is a community effort to develop a common
core package for Astronomy in Python. Astropy also fosters an ecosystem of
interoperable astronomy packages. As with all scientific Python packages,
please remember to acknowledge and cite the use of any {{ page.community }}
packages that you use!

***ATTN:*** It would be nice to add a bit more about astropy here

<p><input type="text" id="quicksearch" placeholder="Search {{ page.community }} packages" /></p>

<div id="filters" class="button-group">
  <button class="button is-checked" data-filter="*">Show All</button>
</div>

<div class="grid-isotope">
{% for apackage in pkgs %}
  {% include package-grid.html community=page.community %}
{% endfor %}
</div>

<!-- ## TODO's

Do we want to somehow connect with the metrics
[scientific python is collecting via devstats](https://devstats.scientific-python.org/_generated/astropy.html)? -->
