---
layout: splash
title: "Astropy"
excerpt: "An ecosystem of interoperable astronomy packages."
header:
  overlay_color: "rgb(255, 80, 0)"
  overlay_filter: 0.6
  overlay_image: images/communities/astropy-banner.png
  image_alt: "Digital elevation model"
permalink: communities/astropy.html
intro:
    - excerpt: "Astropy is a pyOpenSci community peer review partner. [Learn more about our peer review partnership program](https://www.pyopensci.org/partners.html)."
classes: wide
community: astropy
---

{%
    assign pkgs = site.data.packages
    | where_exp: "item", "item.partners contains page.community" | sort_natural: 'date_accepted' | reverse
%}

{% assign total_packages = pkgs | size %}

{% include feature_row id="intro" type="center" %}

## pyOpenSci peer review partner: {{ page.community | capitalize }}

## About Astropy

[Astropy](https://www.astropy.org/) is a community effort to develop a common
core package for Astronomy in Python. Astropy also fosters an ecosystem of
interoperable astronomy packages. Please remember to acknowledge and cite the use of any {{ page.community }}
packages that you use.

Astropy currently has {{ total_packages }} packages that have been accepted by pyOpenSci and also become affiliated Astropy packages through our [partnership](https://www.pyopensci.org/partners.html).


<p><input type="text" id="quicksearch" placeholder="Search {{ page.community }} packages" /></p>


<div id="filters" class="button-group">
  <button class="button is-checked" data-filter="*">show all</button>
  <button class="button" data-filter=".data-munging, .data-processing-munging">data munging</button>
  <button class="button" data-filter=".data-extraction">data extraction</button>
  <button class="button" data-filter=".data-retrieval">data retrieval</button>
  <button class="button" data-filter=".data-visualization">data-visualization</button>
  <button class="button" data-filter=".education">education</button>

<button class="button" data-filter=".geospatial">geospatial</button>
<button class="button" data-filter=".reproducibility">reproducibility</button>
</div>



<div class="grid-isotope">
{% for apackage in pkgs %}
  {% include package-grid.html community=page.community %}
{% endfor %}
</div>

<!-- ## TODO's

Do we want to somehow connect with the metrics
[scientific python is collecting via devstats](https://devstats.scientific-python.org/_generated/astropy.html)? -->
