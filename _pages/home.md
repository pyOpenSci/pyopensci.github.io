---
layout: splash
title: "Welcome to pyOpenSci"
author_profile: false
published: true
site-map: true
permalink: /
header:
  overlay_image: /images/people/header-mentored-sprints-smaller.png
  overlay_filter: 0.6
  actions:
    - label: "Submit a Package"
      url: "https://github.com/pyOpenSci/software-review/issues"
    - label: "Read our Peer Review Guide"
      url: "https://www.pyopensci.org/software-peer-review/"
mission:
  - excerpt: "We build diverse community that supports free and open Python tools for processing scientific data. We also build technical skills needed to contribute to open source and that support open science. Join our global community."
peer-review:
  - image_path: images/software-peer-review.png
    alt: "Light purple image that says software Peer Review. On the image is a woman at a laptop with a pyOpenSci logo on it and a cup of coffee next to her. There is a very light flower in the bottom right hand corner. "
    title: "Python Package Peer Review"
    excerpt: "We offer peer review of Python software to increase the quality, usability and long term maintenance of the open source tools that drive open science. [JOSS accepts our review as theirs](https://www.pyopensci.org/software-peer-review/partners/joss.html) so you can get the benefits of pyOpenSci and JOSS through one review."
    url: https://www.pyopensci.org/software-peer-review/about/benefits.html
    btn_label: "> Learn more about the benefits of peer review."
    btn_class: btn--inverse
  - image_path: images/community-partnerships.png
    alt: "Light purple image with a bunch from different backgrounds of stick figure people in a slightly darker color. The text on the image at the top says Community Partnerships"
    title: "Community Partnerships"
    excerpt: "We partner with domain-specific scientific Python communities such as [Pangeo](https://www.pyopensci.org/software-peer-review/partners/pangeo.html) who want to review affiliated packages. Through this collaboration we develop develop community-specific standards that are used in our reviews, to evaluate whether a package meets affiliation requirements. This removes the need to communities to develop their own peer review process."
    url: https://www.pyopensci.org/software-peer-review/partners/scientific-communities.html
    btn_label: "> Learn More About Our Community Partners"
    btn_class: btn--inverse
  - image_path: images/python-packaging-guide.png
    title: "Simplifying Packaging"
    alt: Light purple image that says python packaging guide and below it says simplifying python packaging. The background is a grey laptop with a hand looking down at the laptop the above.
    excerpt: "We are creating a beginner-friendly, **community-driven Python packaging guide**. Our guide is reviewed by members of the Python Packaging Authority, maintainers of core packaging tools and members of the scientific Python community. It recommends best practices for you to follow when creating a Python package."
    url: https://www.pyopensci.org/python-package-guide/
    btn_label: "> Check out our Python packaging guide"
    btn_class: btn--inverse
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
            <h2 class="archive__item-title">Peer Review Mentorship Program</h2>
            <div class="archive__item-excerpt">
               <p>We are building diverse community around the scientific packages that drive open science. We recruit and support editors and reviewers from different backgrounds and gender-identities in each review that we perform.
            </p>
              Are you new to peer review? We got you!
              We offer a <a href="https://www.pyopensci.org/software-peer-review/how-to/reviewer-guide.html#a-guide-for-new-reviewers">mentorship program </a> for anyone interested in participating in peer review but who might like a bit of support.

            </div>
         </div>
      </div>

   </div>
</div>

{% assign new_ppl = site.data.contributors | reverse %}

## Latest contributors

<div class="entries-grid">
{% for aperson in new_ppl limit:3 %}
    {% include people-grid.html  %}
{% endfor %}
</div>

<br clear="both">

<div class="notice-highlight" markdown="1">
## Recent Blog Posts & Updates

<div class="grid col-3">
  {% for post in site.categories['highlight'] limit:3 %}

  <div class="cards">
  <h3 ><a href="{{ site.baseurl }}{{ post.url}}" rel="permalink">{{ post.title }}</a></h3>

    <div>
        <p>{{ post.excerpt | markdownify }}</p>
    </div>

</div>
{% endfor %}

</div>
<p><a href="/blog/" class="btn btn--info btn--large">View All Posts <i class="fa fa-4 fa-arrow-circle-right" aria-hidden="true"></i></a></p>
</div>

<!-- packages reviewed -->

## Recently Accepted Python Packages

<div class="grid">
    {% for apackage in site.data.packages %}
    {% if apackage.highlight %}
{% include package-grid.html  %}
    {% endif %}
    {% endfor %}
</div>

<br clear="both">

<a href="/python-packages/" class="btn btn--info">View All Accepted Packages <i class="fa fa-4 fa-arrow-circle-right" aria-hidden="true"></i></a>
