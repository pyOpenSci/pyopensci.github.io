---
layout: single
permalink: /python-packages/
title: "pyOpenSci Accepted Packages and Under Review Packages"
classes:
header:
    overlay_image: images/header.jpg
    overlay_filter: 0.6
---


## PyOpenSci Accepted Packages
The package below have already been through our review process and are accepted
as pyOpenSci packages.

<div>
{% for apackage in site.packages %}
    <h2><a href="{{ apackage.github-link }}" target="_blank"> {{ apackage.package-name }} </a></h2>
     <p>MAINTAINER: {{ apackage.maintainer }}</p>
  <p>{{ apackage.description | markdownify }}</p>
{% endfor %}
</div>

<br clear="both">
## PyOpenSci Packages In Review

Check out our <a href="https://github.com/pyOpenSci/software-review/issues" target="_blank">Packages Current Under review in the issues portion of our software-review github repo to see our current community submissions.</a> Anyone is welcome to submit a package to pyopensci.
