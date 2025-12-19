---
layout: splash
permalink: /our-community/
title: "The pyOpenSci Team & Contributors"
excerpt: "pyOpenSci is a diverse community of people interested in building a community of practice around scientific software written in Python."
classes:
header:
  overlay_image: images/headers/pyopensci-learn-header.png
  overlay_filter: 0.6
redirect_from:
  - /contributors.html
---

## Our pyOpenSci Community

pyOpenSci has one core paid staff member who leads the organization. We are supported
by an expert team of volunteer advisory members who help steer the direction of the organization.

## Executive council, leadership & staff

{: .clearall }

{% assign advisory_sorted = site.data.contributors | where:"board",true | sort: 'sort' %}

<div class="grid executive-council-grid">
{% for aperson in advisory_sorted %}
  {% include people-grid.html %}
{% endfor %}
</div>

{: .clearall }


## pyOpenSci advisory council

{: .clearall }

pyOpenSci advisory council members are volunteer experts in the scientific
Python open source space who provide high-level guidance on the development of
the organization.

{% assign advisory_unsorted = site.data.contributors | where:"advisory",true %}
{% assign advisory_with_sort = advisory_unsorted | where_exp:"item","item.sort != nil" | sort: 'sort' %}
{% assign advisory_without_sort = advisory_unsorted | where_exp:"item","item.sort == nil" %}
{% assign advisory_working = advisory_with_sort | concat: advisory_without_sort %}

<div class="grid advisory-council-grid">
{% for aperson in advisory_working %}
  {% include people-grid.html %}
{% endfor %}
</div>

{: .clearall }

## Emeritus advisory and executive  council

{: .clearall }

We are grateful for the time that these community members spent on our
leadership councils.

{% assign emeritus_advisory = site.data.contributors | where:"emeritus_advisory", true %}

<div class="grid emeritus-council-grid">
{% for aperson in emeritus_advisory %}
  {{ aperson.person_name }}
    {% include people-grid.html %}
{% endfor %}
</div>

{: .clearall }



## pyOpenSci editorial board

{: .clearall }
{: .clearall }

{% assign editorial = site.data.contributors | where:"editorial_board", true | sort: 'sort' %}

<div class="grid advisory-council-grid">
{% for aperson in editorial %}
  {% include people-grid.html %}
{% endfor %}
</div>

{: .clearall }
{: .clearall }

## pyOpenSci community contributors

{: .clearall }
{: .clearall }

{% assign ppl_sorted = site.data.contributors | reverse %}
{% assign total_people = ppl_sorted | size %}

pyOpenSci has a diverse and vibrant community of pythonistas! To date,
**{{ total_people }}** wonderful people have contributed to pyOpenSci.

<p><input type="text" id="quicksearch" placeholder="Search" /></p>

<div id="filters" class="button-group">
  <button class="button is-checked" data-filter="*">Show All</button>
  <button class="button" data-filter=".leadership">Leadership</button>
  <button class="button" data-filter=".editor">Editorial Team</button>
  <button class="button" data-filter=".reviewer">Reviewers</button>
  <button class="button" data-filter=".maintainer">Maintainers</button>
  <button class="button" data-filter=".peer-review-guide">Peer Review Guide</button>
  <button class="button" data-filter=".package-guide">Packaging Guide</button>
  <button class="button" data-filter=".metrics-contrib">Metrics</button>
  <button class="button" data-filter=".web-contrib">Website</button>

</div>

<div class="grid-isotope">
 <div class="grid-sizer"></div>
{% for aperson in ppl_sorted %}
  {% include people-grid.html isotope=true %}
{% endfor %}
</div>
