---
layout: splash
title: "Welcome to pyOpenSci"
author_profile: false
published: true
site-map: true
permalink: /
header:
    overlay_image: images/header.jpg
    overlay_filter: 0.6
    actions:
        - label: "Submit a Package"
          url: "https://github.com/pyOpenSci/software-review/issues"
        - label: "Read our Handbook"
          url: "/contributing-guide/intro)"
mission:
  - excerpt: 'We build diverse community that supports free and open Python tools for processing scientific data. We also build technical skills needed to contribute to open source and that support open science. Join our global community.'
programs:
  - image_path: images/brooke-cagle-group-unsplash.png
    image_caption: "Brooke Cagle, Unsplash"
    alt: "placeholder image 1"
    title: "Diverse Community"
    excerpt: "We are building a diverse and supportive community with skills that support open source and open science. Join us ... <why do they want to join??>"
  - image_path: images/desola-lanre-ologun-unsplash.png
    image_caption: "Desola Lanre Ologun, Unsplash"
    alt: "placeholder image 2"
    title: "Open Peer Review"
    excerpt: "Our open peer review process of Python tools supports standardized software quality and usability. It also provides needed credit and visibility to tool maintainers. Finally it removes redundancy of packages with similar functionaly across the scientific Python ecosystem."
    #url: "#test-link"
    #btn_label: "Read More (link to where?)"
    #btn_class: "btn--primary"
  - image_path: images/brooke-cagle-unsplash.png
    title: "Skills for Open Source and Open Science"
    image_caption: "Brooke Cagle, Unsplash"
    excerpt: "We provide mentorship to support those who are new to peer review and training in the skills needed to contribute 
    to open source. These same skills will jump start your open science skills and .. career trajectory...."
---

{% include feature_row id="mission" type="center" %}
{% include feature_row id="programs"%}

<Something here to break things up***>


<div class="notice--info" markdown="1">
## Recent Community Updates

<div class="feature__wrapper">
   {% for post in site.categories['highlight'] limit:3 %}
   <div class="feature__item">
      <div class="archive__item">
         <div class="archive__item-body">
            <h2 class="archive__item-title"><a href="{{ site.baseurl }}{{ post.url}}" rel="permalink">{{ post.title }}</a></h2>
            <div class="archive__item-excerpt">
               <p>{{ post.excerpt | markdownify }}</p>
            </div>
         </div>
      </div>
   </div>
   {% endfor %}
</div>
Change color of button and make it bigger with <<- or some sort of icon>>
<p><a href="/python-packages/" class="btn btn--info btn--large">View All Posts <i class="fa fa-4 fa-arrow-circle-right" aria-hidden="true"></i></a></p>

</div>


<!-- packages reviewed -->
<br clear="both">

## Recently Accepted Python Packages

TODO: add highlight flag on tools we want here and implement in 
the code below. i'm thinking pandera, moving pandas... pygmt
maybe we can add a "just accepted" icon too??

<div class="grid__wrapper">
   {% for apackage in site.data.packages limit:4 %}
   <div class="grid__item">
      <article class="archive__item" itemscope="" itemtype="https://schema.org/CreativeWork">
         <h2 class="archive__item-title no_toc" itemprop="headline">
            <a href="{{ apackage.link }}" rel="permalink">{{ apackage.package-name }}</a>
         </h2>
         <!-- This section is throwing off the next - not sure why-->
         <p class="page__meta">
            <span class="page__meta-readtime"><i class="far fa-clock" aria-hidden="true"></i>
            <!-- Commas in between authors -->
            {% for aMaintainer in apackage.maintainer %}  
            {{ aMaintainer }}{% if forloop.last == false %}, {% endif %}
            {% endfor %}
            </span>
         </p>
         <p class="archive__item-excerpt" itemprop="description">{{ apackage.description | markdownify }}</p>
      </article>
   </div>
   {% endfor %}
   <a href="/python-packages/" class="btn btn--info">View All Accepted Packages</a>

</div>
