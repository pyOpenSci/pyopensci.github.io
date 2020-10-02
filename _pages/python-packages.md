---
layout: single
permalink: /python-packages/
title: "pyOpenSci Accepted Packages and Under Review Packages"
classes:
header:
    overlay_image: images/header.jpg
    overlay_filter: 0.6
---

## About pyOpenSci Packages
pyOpenSci packages are community developed, submitted and reviewed. Anyone is
welcome to submit a package to pyOpenSci to be reviewed. Once the package is reviewed,
and accepted, pyOpenSci will promote it as a peer-reviewed tool for science!

<a href="https://www.pyopensci.org/contributing-guide/open-source-software-peer-review/aims-and-scope.html" target="_blank">Learn More About the Review And Submission Process in our online guidebook. </a>

## PyOpenSci Accepted Packages
The package below have already been through our review process and are accepted
as pyOpenSci packages.

<div>
{% for apackage in site.data.packages %}
    <h2><a href="{{ apackage.link }}" target="_blank"> {{ apackage.package-name }} </a></h2>
     <p class="contrib_org">MAINTAINER: {{ apackage.maintainer }}</p>
  <p>{{ apackage.description | markdownify }}</p>
{% endfor %}
</div>

<br clear="both">
## PyOpenSci Packages In Review

Check out our <a href="https://github.com/pyOpenSci/software-review/issues" target="_blank">Packages Current Under review in the issues portion of our software-review github repo to see our current community submissions.</a> Anyone is welcome to submit a package to pyopensci.
