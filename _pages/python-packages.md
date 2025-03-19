---
layout: splash
permalink: /python-packages.html
title: "pyOpenSci Open Peer Review & Accepted Packages"
classes:
header:
    overlay_image: images/headers/pyopensci-software.png
intro:
    - excerpt: "The Python packages below have
    been accepted into the pyOpenSci ecosystem through our [open software peer review process](/about-peer-review/)."
toc: false
classes: wide
redirect_from:
  - /python-packages/
---

{% include feature_row id="intro" type="center" %}

{% assign packages_sorted = site.data.packages | sort_natural: 'date_accepted' | reverse %}
{% assign total_packages = packages_sorted | size %}

## Explore our accepted open source Python packages

To date, {{ total_packages }} packages have been accepted by pyOpenSci through our [open peer review process](https://www.pyopensci.org/about-peer-review/index.html). You can [check out the packages that are currently under review in our GitHub submission repository.](https://github.com/pyOpenSci/software-submission/issues)

[Click here to learn more about the process for submitting a package to pyOpenSci.](https://www.pyopensci.org/software-peer-review/how-to/author-guide.html){: .btn  .btn--success }

### Community Partners

To view packages affiliated with our partner communities that are a part of ourpeer review partnership program, click on a community link below. [Learn more about our community partnerships here.](/partners.html)

<a href="/communities/astropy.html"><button class="button community">Astropy</button></a>

### Accepted pyOpenSci packages

<p><input type="text" id="quicksearch" placeholder="Search" /></p>

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

<!-- Active Packages -->
<div class="grid-isotope">
{% for apackage in packages_sorted %}
  {% if apackage.active == true %}
    {% include package-grid.html %}
  {% endif %}
{% endfor %}
</div>

#### Archived Packages

Archived packages are packages that have successfully completed [pyOpenSci's software peer review process](https://www.pyopensci.org/about-peer-review/index.html) but are no longer maintained. [Check out our software maintenance policy for how we determine when a package becomes archived.](https://www.pyopensci.org/software-peer-review/our-process/policies.html#package-maintenance-and-maintainer-responsiveness)

<!-- Archived Packages -->
<div class="grid-isotope">
{% for apackage in packages_sorted %}
  {% if apackage.active == false %}
    {% include package-grid.html %}
  {% endif %}
{% endfor %}
</div>

<hr style="clear:both;">
<br clear="both">
