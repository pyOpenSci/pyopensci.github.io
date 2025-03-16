---
layout: splash
title: "Welcome to pyOpenSci"
excerpt: "We make it easier for scientists to create, find, maintain and contribute to reusable code and software."
author_profile: false
published: true
site-map: true
permalink: /
header:
  overlay_image: /images/people/header-mentored-sprints-smaller.png
  overlay_filter: 0.7
  actions:
    - label: "Submit a Package"
      url: "https://github.com/pyOpenSci/software-review/issues"
    - label: "Read our Peer Review Guide"
      url: "https://www.pyopensci.org/software-peer-review/"
mission:
  - excerpt: "pyOpenSci broadens participation in scientific open source by breaking down social and technical barriers. Join our global community."
peer-review:
  - image_path: images/software-peer-review.png
    alt: "Light purple image that says software Peer Review. On the image is a woman at a laptop with a pyOpenSci logo on it and a cup of coffee next to her. There is a very light flower in the bottom right hand corner. "
    title: "Python Software Peer Review"
    excerpt: "We offer peer review of Python software to increase the quality, usability and long term maintenance of the open source tools that drive open science. [JOSS accepts our review as theirs](https://www.pyopensci.org/software-peer-review/partners/joss.html) so you can get the benefits of pyOpenSci and JOSS through one review."
    url: https://www.pyopensci.org/software-peer-review/about/benefits.html
    btn_label: "> Learn more about the benefits of peer review."
    btn_class: btn--inverse
  - image_path: images/community-partnerships.png
    alt: "Light purple image with a bunch from different backgrounds of stick figure people in a slightly darker color. The text on the image at the top says Community Partnerships"
    title: "Community Partnerships"
    excerpt: "We partner with domain-specific scientific Python communities such as [Pangeo](https://www.pyopensci.org/software-peer-review/partners/pangeo.html) who want to review affiliated packages. Through this collaboration, we develop community-specific standards that are used in our reviews to evaluate whether a package meets affiliation requirements. This removes the need for communities to develop their own peer review process."
    url: https://www.pyopensci.org/partners.html
    btn_label: "> Learn About Community Partners"
    btn_class: btn--inverse
  - image_path: images/homepage-graphics/simple-python-packaging-header.png
    title: "We Break Down Python Packaging Painpoints"
    alt: Light purple image that says python packaging guide and below it says simplifying python packaging. The background is a grey laptop with a hand looking down at the laptop the above.
    excerpt: "

      Check out our beginner-friendly:

      [Python Package Tutorials](https://www.pyopensci.org/python-package-guide/tutorials/intro.html)<br>

      [Python packaging ecosystem overview](https://www.pyopensci.org/python-package-guide) <br><br>

      All of our resources are co-developed with the broader Python community and reviewed by beginner to expert Pythonistas to ensure the material is accessible for all.
      "
    # url: https://www.pyopensci.org/python-package-guide/
    # btn_label: "> Read our packaging guide"
    # btn_class: btn--inverse
---

{% include feature_row id="mission" type="center" %}

## Peer review of Python software to support open science

{% include feature_row_pyos id="peer-review"%}

## Building Diverse Community Around Python Scientific Software

<div class="feature__wrapper" markdown="1">
   <div class="feature__item--left">
      <div class="archive__item">
         <div class="archive__item-teaser">
            <img src="/images/people/pyopensci-sprint-pycon-2023.png" alt="Image showing 3 people working at 2 computers during a spring at pyCon USA 2023.">
         </div>
         <div class="archive__item-body">
            <h2 class="archive__item-title">Peer review mentorship program</h2>
            <div class="archive__item-excerpt">
               <p>
               We are building diverse community around the scientific packages that drive open science. We recruit and support editors and reviewers from different backgrounds and gender-identities in each review that we perform.
               </p>
               <p>
              Are you new to peer review?
              We offer a <a href="https://www.pyopensci.org/software-peer-review/how-to/reviewer-guide.html#a-guide-for-new-reviewers">mentorship program </a> for anyone interested in participating in peer review but who might like a bit of support.
              </p>
            </div>
         </div>
      </div>

   </div>
</div>

{% assign new_ppl = site.data.contributors | reverse %}

## New pyOpenSci contributors

<div class="entries-grid">
{% for aperson in new_ppl limit:4 %}
    {% include people-grid.html  %}
{% endfor %}
</div>

<br clear="both">

<!-- pull blog posts not events -->
{% assign blog_posts = site.posts |  where_exp: "item", "item.categories contains 'blog-post'" %}

<div class="notice notice-highlight" markdown="1">

## Recent blog posts & updates

{% assign packages_sorted = site.data.packages | sort_natural: 'date_accepted' | reverse %}

{% assign color_counter = 0 %}
{% assign color_max = 4 %} <!-- Max number of colors -->


<div class="blog__grid">
  {% for post in blog_posts limit:3 %}
    {% unless post.header.overlay_image %}
        {% assign color_counter = color_counter | plus: 1 %}
        {% if color_counter == color_max %}
          {% assign color_counter = 0 %}
        {% endif %}
      {% endunless %}
    {% include archive-cards.html color_counter=color_counter %}
  {% endfor %}

</div>
<a href="/blog/" class="btn btn--info btn--large">View more <i class="fa fa-4 fa-arrow-circle-right" aria-hidden="true"></i></a>

</div>


## Recently Accepted Python Packages

{% assign packages_sorted = site.data.packages | sort_natural: 'date_accepted' | reverse %}

<div class="grid">
  {% for apackage in packages_sorted limit:4 %}
    {% include package-grid.html %}
  {% endfor %}
</div>

<br clear="both">

<a href="/python-packages/" class="btn btn--info">View All Accepted Packages <i class="fa fa-4 fa-arrow-circle-right" aria-hidden="true"></i></a>
