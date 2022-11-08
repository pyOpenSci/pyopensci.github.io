---
layout: splash
permalink: /our-community.html
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

TODO add this role to the governance 
-->

## External advisory committee
{: .clearall }

{% assign advisory_sorted = site.data.advisory | sort: 'sort' %}

<div class="entries-grid">
{% for aperson in advisory_sorted %}
 <div class="grid__item">
   <article class="archive__item" itemscope="" itemtype="https://schema.org/CreativeWork">
       {% if aperson.github_image_id %}
         <div class="archive__item-teaser tall">
           <img src="https://avatars1.githubusercontent.com/u/{{ aperson.github_image_id }}?s=400&v=4" alt="">
         </div>
       {% endif %}
     <h4 class="archive__item-title" itemprop="headline">
         <a href="https://www.github.com/{{ aperson.github_username }}" rel="permalink"> {{ aperson.name }}
        </a>
     </h4>
     <p class="page__meta">
     {% if aperson.title %}
      <span>{{ aperson.title }}</span>
     {% endif %}
     </p>
     <p class="contrib_org" itemprop="organization"> {{ aperson.organization }} </p>
   </article>
 </div>
{% endfor %}
</div>

## PyOpenSci working advisory committee 
{: .clearall }

pyOpenSci advisory committee members are volunteer experts in the scientific Python open 
source space who provide high-level guidance on the development of the organization. 

{% assign advisory_working = site.data.contributors | "advisory" == true | sort: 'sort' %}

<div class="entries-grid">
{% for aperson in advisory_working %}
  {% if aperson.advisory %}
 <div class="grid__item">
   <article class="archive__item" itemscope="" itemtype="https://schema.org/CreativeWork">
       {% if aperson.github_image_id %}
         <div class="archive__item-teaser tall">
           <img src="https://avatars1.githubusercontent.com/u/{{ aperson.github_image_id }}?s=400&v=4" alt="">
         </div>
       {% endif %}
     <h4 class="archive__item-title" itemprop="headline">
         <a href="https://www.github.com/{{ aperson.github_username }}" rel="permalink"> {{ aperson.name }}
        </a>
     </h4>
     <p class="page__meta">
     {% if aperson.title %}
      <span>{{ aperson.title }}</span>
     {% endif %}
     </p>
     <!-- Contribution types -->
     <p class="page__meta">
     <span class="page__meta-readtime">
      {% for atype in aperson.contributor_type %}
      {{ atype }} {% if forloop.last == false %}* {% endif %}
      {% endfor %}
    </span>
    </p>
     <p class="contrib_org" itemprop="organization"> {{ aperson.organization }} </p>
   </article>
 </div>
 {% endif %}
{% endfor %}
</div>


## PyOpenSci Team & Contributors
{: .clearall }

{% assign ppl_sorted = site.data.contributors | sort: 'sort' | reverse %}

<div class="entries-grid">
{% for aperson in ppl_sorted %}
 <div class="grid__item">
   <article class="archive__item" itemscope="" itemtype="https://schema.org/CreativeWork">
       {% if aperson.github_image_id %}
         <div class="archive__item-teaser tall">
           <img src="https://avatars1.githubusercontent.com/u/{{ aperson.github_image_id }}?s=400&v=4" alt="">
         </div>
       {% endif %}
     <h4 class="archive__item-title" itemprop="headline">
         <a href="https://www.github.com/{{ aperson.github_username }}" rel="permalink"> {{ aperson.name }}
        </a>
     </h4>
     <p class="page__meta">
     {% if aperson.title %}
      <span>{{ aperson.title }}</span>
     {% endif %}
     </p>
     <!-- Contribution types -->
     <p class="page__meta">
     <span class="page__meta-readtime">
      {% for atype in aperson.contributor_type %}
      {{ atype }} {% if forloop.last == false %}* {% endif %}
      {% endfor %}
    </span>
    </p>
     <p class="contrib_org" itemprop="organization"> {{ aperson.organization }} </p>
   </article>
 </div>
{% endfor %}
</div>




