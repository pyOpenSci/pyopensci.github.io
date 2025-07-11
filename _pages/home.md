---
layout: splash
title: "Welcome to pyOpenSci"
excerpt: "We make it easier for scientists to create, find, maintain, and contribute to reusable code and software."
author_profile: false
published: true
site-map: true
permalink: /
header:
  overlay_image: /images/headers/pyopensci-sprints.png
  overlay_filter: 0.7
  actions:
    - label: "Submit a Package For Review"
      url: "https://www.pyopensci.org/how-to-submit-a-package-to-pyopensci.html"
    - label: "Learn to Create a Python Package"
      url: "https://www.pyopensci.org/python-package-guide/tutorials/create-python-package.html"
mission:
  - excerpt: "pyOpenSci broadens participation in scientific open source by breaking down social and technical barriers. Join our global community."
peer-review:
  - image_path: images/landing-pages/software-peer-review.png
    alt: "Light purple image that says software Peer Review. On the image is a woman at a laptop with a pyOpenSci logo on it and a cup of coffee next to her. There is a very light flower in the bottom right hand corner. "
    title: "We Run Software Peer Review"
    excerpt: "We review Python packages and software with the goal of helping scientists build better, discoverable and usable software. <br><br>

    Your package can also be published in JOSS through our review process. <br>

    <i class='fa-solid fa-check-double'></i> Submit a package today for review today. <br>
    <i class='fa-solid fa-check-double'></i> Apply to become a reviewer. <br>
    "
  - image_path: images/landing-pages/community-partnerships.png
    alt: "Light purple image with a bunch from different backgrounds of stick figure people in a slightly darker color. The text on the image at the top says Community Partnerships"
    title: "We Build Community Partnerships"
    excerpt: "
      We [partner with open source communities](https://www.pyopensci.org/partners.html) to share resources and processes such as Peer review. <br><br>

      Learn more about our partnerships with: <br>

      <i class='fa-solid fa-handshake'></i> [JOSS](https://www.pyopensci.org/software-peer-review/partners/joss.html) <br>
      <i class='fa-solid fa-handshake'></i> [Astropy](https://www.pyopensci.org/software-peer-review/partners/astropy.html) <br>
      "
  - image_path: images/landing-pages/simple-python-packaging-header.png
    title: "We Break Down Python Packaging Painpoints"
    alt: Light purple image that says python packaging guide and below it says simplifying python packaging. The background is a grey laptop with a hand looking down at the laptop the above.
    excerpt: "

      Check out our beginner-friendly: <br>

      <i class='fa-solid fa-book-open'></i> [Python Package Tutorials](https://www.pyopensci.org/python-package-guide/tutorials/intro.html) <br>

      <i class='fa-solid fa-book-open'></i> [Python package guide](https://www.pyopensci.org/python-package-guide) <br><br>

      All of our resources are co-developed with the broader Python community and reviewed by beginner to expert Pythonistas to ensure the material is accessible for all.
      "
---

{% include feature_row id="mission" type="center" %}

## Peer review of Python software to support open science

{% include feature_row_pyos id="peer-review"%}

## Broadening participation in scientific open source

<div class="feature__wrapper" markdown="1">
   <div class="feature__item--left">
      <div class="archive__item">
         <div class="archive__item-teaser">
            <img src="/images/people/pyopensci-sprint-pycon-2023.png" alt="Image showing 3 people working at 2 computers during a spring at pyCon USA 2023.">
         </div>
         <div class="archive__item-body">
            <h3 class="archive__item-title">You don't need to be an expert to get involved </h3>
            <div class="archive__item-excerpt">
               <p>
               Are you new to software peer review but you want to get involved? We've got you!

               We offer support and mentorship to new reviewers completing their first review.

               All reviewers don't need to be python package experts. We welcome reviewers that focus on software accessibility and usability.
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

<div class="notice" markdown="1">

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
  {% for apackage in packages_sorted limit:3 %}
    {% include package-grid.html %}
  {% endfor %}
</div>

<br clear="both">

<a href="/python-packages/" class="btn btn--info">View All Accepted Packages <i class="fa fa-4 fa-arrow-circle-right" aria-hidden="true"></i></a>
