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

## Executive councile & leadership
{: .clearall }

{% assign advisory_sorted = site.data.contributors | where:"board",true | sort: 'sort' %}

<div class="entries-grid">
{% for aperson in advisory_sorted %}
  {% include people-grid.html  %}
{% endfor %}
</div>

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


## PyOpenSci community contributors
{: .clearall }

{% assign ppl_sorted = site.data.contributors | reverse %}

<div class="entries-grid">
{% for aperson in ppl_sorted %}
  {% unless aperson.board %}
  {% unless aperson.advisory %}
  {% unless aperson.editorial-board %}
    {% include people-grid.html  %}
  {% endunless %}
  {% endunless %}
  {% endunless %}
{% endfor %}
</div>




