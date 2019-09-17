---
layout: single
permalink: /python-packages/
title: "pyOpenSci Accepted Packages and Under Review Packages"
classes: wide
header:
    overlay_image: images/header.jpg
    overlay_filter: 0.6
---


## PyOpenSci Accepted Packages
The package below have already been through our review process and are accepted
as pyOpenSci packages!

### Here is what a list would look like:
<div>
{% for apackage in site.packages %}
    <h2><a href="{{ apackage.github-link }}" target="_blank"> {{ apackage.package-name }}  {{ apackage.maintainer }}</a></h2>
  <p>{{ apackage.description | markdownify }}</p>
{% endfor %}
</div>

*********

### AND here is what a grid could look like. this could look better as our list grows!!

<div class="entries-grid">

{% for apackage in site.packages %}
  <h2>{{ apackage.package-name }} - {{ apackage.maintainer }}</h2>
  <p>{{ staff_member.content | markdownify }}</p>

  <div class="grid__item">
    <article class="archive__item" itemscope="" itemtype="https://schema.org/CreativeWork">

        <!-- do we really want images? it looks nicer that is for sure
        i was thinking it would be nicer to have a grid that expands over time rather than a list but am option to options-->
        <!--<div class="archive__item-teaser">
          <img src="/minimal-mistakes/assets/images/unsplash-gallery-image-1-th.jpg" alt="">
        </div>-->

      <h2 class="archive__item-title" itemprop="headline">
          <a href="{{ apackage.github-link }}" rel="permalink"> {{ apackage.package-name }}
  </a>
      </h2>

      <p class="archive__item-excerpt" itemprop="description">Maintainer: {{ apackage.package-name }} {{ apackage.description }}Baz Boom design system including logo mark, website design, and branding applications.
  </p>
    </article>
  </div>

{% endfor %}

</div>


<br clear="both">
## PyOpenSci Packages In Review
