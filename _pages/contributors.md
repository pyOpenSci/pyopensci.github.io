---
layout: splash
permalink: /our-community/
title: "The pyOpenSci Team & Contributors"
excerpt: "pyOpenSci is a diverse community of people interested in building a community of practice around scientific software written in Python."
classes:
header:
  overlay_image: images/header.jpg
  overlay_filter: 0.6
redirect_from:
  - /contributors.html
---

## Our pyOpenSci Community

<!--
{{ site.data.contributors | size }} people have contributed to pyOpenSci as
of today!
TODO add this advisory committee role to the governance
-->

pyOpenSci has one core paid staff member who leads the organization. We are supported
by an expert team of volunteer advisory members who help steer the direction of the organization.

## Executive council & leadership

{: .clearall }

{% assign advisory_sorted = site.data.contributors | where:"board",true | sort: 'sort' %}

<div class="entries-grid">
{% for aperson in advisory_sorted %}
  {% include people-grid.html  %}
{% endfor %}
</div>

{: .clearall }

## PyOpenSci advisory council

{: .clearall }

pyOpenSci advisory council members are volunteer experts in the scientific
Python open source space who provide high-level guidance on the development of
the organization.

{% assign advisory_working = site.data.contributors | where:"advisory",true | sort: 'sort' %}

<div class="entries-grid">
{% for aperson in advisory_working %}
  {% if aperson.advisory %}
    {% include people-grid.html  %}
 {% endif %}
{% endfor %}
</div>

{: .clearall }

<!--
## PyOpenSci DEIA council

{: .clearall }

pyOpenSci is beginning to create its DEIA council. This council consists of leaders and community members who have experience in and who are passionate about making pyOpenSci community an inclusive community.

{% assign advisory_working = site.data.contributors | where:"deia_advisory",true | sort: 'sort' %}

<div class="entries-grid">
{% for aperson in advisory_working %}
  {% if aperson.deia_advisory %}
    {% include people-grid.html  %}
 {% endif %}
{% endfor %}
</div>

{: .clearall } -->

{: .clearall }

## PyOpenSci community contributors

{: .clearall }
{: .clearall }

{% assign ppl_sorted = site.data.contributors | reverse %}

<!--
<div class="entries-grid">
{% for aperson in ppl_sorted %}
  {% unless aperson.board %}
  {% unless aperson.advisory %}
    {% include people-grid.html  %}
  {% endunless %}
  {% endunless %}
{% endfor %}
</div> -->

<p><input type="text" id="quicksearch" placeholder="Search" /></p>

<div id="filters" class="button-group">
  <button class="button is-checked" data-filter="*">Show All</button>
  <button class="button" data-filter=".leadership">Leadership/Advisory</button>
  <button class="button" data-filter=".editor">Editorial Team</button>
  <button class="button" data-filter=".peer-review">Peer Review</button>
  <button class="button" data-filter=".peer-review-guide">Peer Review Guide</button>
  <button class="button" data-filter=".package-guide">Packaging Guide</button>
  <button class="button" data-filter=".metrics-contrib">Metrics</button>
  <button class="button" data-filter=".web-contrib">Website</button>

  <!-- <button class="button" data-filter=":not(.transition)">not transition</button>
  <button class="button" data-filter=".metal:not(.transition)">metal but not transition</button> -->
</div>

<div class="grid-isotope">
{% for aperson in ppl_sorted %}
  {% include people-grid.html %}
{% endfor %}
</div>
