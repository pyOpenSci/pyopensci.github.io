---
layout: single
permalink: /contributors/
title: "pyOpenSci Contributors"
classes:
header:
    overlay_image: images/header.jpg
    overlay_filter: 0.6
---

## Who Is Involved with PyOpenSci?

{{ site.data.contributors | size }} people have contributed to pyOpenSci as
of today!


## PyOpenSci Contributors

<div class="entries-grid">
{% for aperson in site.data.contributors %}
 <div class="grid__item">
   <article class="archive__item" itemscope="" itemtype="https://schema.org/CreativeWork">
       <!-- do we really want images? it looks nicer that is for sure
       i was thinking it would be nicer to have a grid that expands over time rather than a list but am option to options-->
       {% if aperson.github_image_id %}
         <div class="archive__item-teaser">
           <img src="https://avatars1.githubusercontent.com/u/{{ aperson.github_image_id }}?s=200&v=4" alt="">
         </div>
       {% endif %}
     <h4 class="archive__item-title" itemprop="headline">
         <a href="https://www.github.com/{{ aperson.github_username }}" rel="permalink"> {{ aperson.name }}
 </a>
     </h4>
     <p class="contrib_org" itemprop="organization"> {{ aperson.organization }} </p>
     <!--<p class="archive__item-excerpt" itemprop="description"> {{ aperson.bio }} </p>-->

   </article>
 </div>
{% endfor %}
</div>
