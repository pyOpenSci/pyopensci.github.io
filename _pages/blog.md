---
layout: archive
permalink: /blog/
title: "pyOpenSci Blog"
author_profile: true
---

## pyOpenSci Blog

{% comment %}
{% include base_path %}
{% include group-by-array collection=site.posts field="categories" %}

{% for category in group_names %}
  {% assign posts = group_items[forloop.index0] %}
  <h2 id="{{ category | slugify }}" class="archive__subtitle">{{ category }}</h2>
  {% for post in posts %}
    {% include archive-single.html %}
  {% endfor %}
{% endfor %}
{% endcomment %}

{% include base_path %}

{% for post in site.posts %}
  {% include archive-single.html %}
{% endfor %}
