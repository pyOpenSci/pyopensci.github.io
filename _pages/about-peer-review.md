---
layout: splash
permalink: /about-peer-review/
title: "pyOpenSci Reviews Scientific Python Software"
header:
  overlay_image: images/header.png
  overlay_filter: 0.8
intro:
  - excerpt: "Our open peer review process facilitates scientists getting credit and recognition for the work they've invested in developing scientific Python tools. The peer review process also supports scientists in finding vetted and maintained software, which drives their open science workflows."
benefits_scientists:
  - image_path: images/trusted-scientific-python-tools.png
    alt: "A pencil sketch of a round table with people sitting around it from different backgrounds working on laptops and also writing together."
    excerpt: "Through our partnerships with domain specific communities our catalog of trusted tools for scientists across domains continues to grow."
    title: "Scientists need trusted and vetted tools to support their open science workflows."
    url: /partners.html
    btn_label: Learn more about scientific Python community partnerships
    btn_class: btn--primary
benefits_maintainers:
  - image_path: images/pyopensci-supports-maintainers.png
    alt: "A pencil sketch of a round table with people sitting around it from different backgrounds working on laptops and also writing together."
    excerpt: "The pyOpenSci peer review process multiplies shared knowledge, making it easier for Pythonistas of all levels to accomplish challenging tasks, such as navigating the Python packaging ecosystem, with relative ease. And our diverse community supports scientific package maintainers in their efforts to develop and build robust software."
    title: "pyOS software peer review benefits open source maintainers"
    url: https://www.pyopensci.org/software-peer-review/about/benefits.html
    btn_label: Learn more about the benefits of peer review
    btn_class: btn--primary
peer_review:
  - image_path: images/pyopensci-people-at-computer.jpg
    alt: "A pencil sketch of a round table with people sitting around it from different backgrounds working on laptops and also writing together."
    excerpt: "Software peer review, similar to the review of scientific papers, is a process where scientists vet software code, documentation and infrastructure. pyOpenSci leads an [open peer review process](https://www.pyopensci.org/software-peer-review/our-process/how-review-works.html) run by a community of dedicated volunteers. Reviews are supportive and fully transparent with the shared goal of improving the quality, usability and maintainability of the software that is driving open science.

    * Diverse teams lead each review, enhancing the overall feedback quality."
    title: "About peer review of scientific Python software"
    url: https://www.pyopensci.org/software-peer-review/our-process/review-timeline.html
    btn_label: Learn more about the peer review timeline and roles
    btn_class: btn--primary
  - image_path: images/pyopensci-joss-partnership.png
    alt: "A pencil sketch of a round table with people sitting around it from different backgrounds working on laptops and also writing together."
    excerpt: "Our partnership with JOSS means that you don't have to choose between pyOpenSci and JOSS. Simply submit your package to pyOS for review. If your package is accepted and in scope for JOSS, it will be fast-tracked through JOSS' review process. "
    title: "Get published with JOSS through a pyOpenSci review"
    url: https://www.pyopensci.org/software-peer-review/partners/joss.html
    btn_label: Learn more about our JOSS partnership
    btn_class: btn--primary
get-involved:
  - image_path:
    title: "Become a pyOpenSci reviewer"
    alt:
    excerpt: "We could use your help! Fill out our reviewer form. We will contact you if we have a package that we need reviewers for. It's OK if you've never reviewed a package before! We'll walk you through it."
    url: https://forms.gle/GHfxvmS47nQFDcBM6
    btn_label: "> Sign-up Now (Google Form)"
    btn_class: btn--inverse
  - image_path:
    title: "See Our Review Process in Action"
    alt:
    excerpt: "Our software review process is run using GitHub issues. This means that anyone can check in on any part of any review and read all of the conversation. Check it out."
    url: https://github.com/pyOpenSci/software-submission
    btn_label: "> See Open Reviews"
    btn_class: btn--inverse
  - image_path:
    title: "Ready to Submit a Package for Review?"
    alt:
    excerpt: "To submit a package to us, you need to [open an issue in our peer review GitHub repository](https://github.com/pyOpenSci/software-submission/issues/new/choose). Learn about the steps to submit a package for open peer review in our guidebook."
    url: https://www.pyopensci.org/software-peer-review/how-to/author-guide.html
    btn_label: "> View our Author Guide"
    btn_class: btn--inverse
toc: false
classes: flowing
---


{% include feature_row id="intro" type="center" %}


<div class="pyos-section purple">
<div class="content" markdown="1">

{% include feature_row id="peer_review" type="left" %}

</div>
</div>

{% include div_purple_bottom.html  %}


<div class="pyos-section" markdown="1">
<div class="content" markdown="1">

{% include feature_row id="benefits_scientists" type="right" %}
{% include feature_row id="benefits_maintainers" type="right" %}


</div>
</div>

<!-- {% include div_purple_top.html  %} -->

<div class="pyos-section purple">
<div class="content" markdown="1">

## Get involved with peer review

{% include feature_row_pyos id="get-involved" %}


</div>
</div>

{% include div_purple_bottom.html  %}
{: .clearall }

<div class="content noimage" markdown="1">

## Meet our editorial board

The pyOpenSci software peer review process is led by a volunteer team of
editors from the scientific Python community. Editors do the following things:

* They find reviewers from diverse backgrounds who have a mixture of scientific domain and Python experience.
* They oversee the entire review process for a package ensuring it runs in a timely and efficient manner
* They support the submitting authors and reviewers in answering questions related to the review
* They determine whether that package should be accepted into the pyOpenSci ecosystem once the review has wrapped up.

Learn more about the
editor role at pyOpenSci [in our peer review guide.](https://www.pyopensci.org/software-peer-review/how-to/editors-guide.html)

{% assign editors = site.data.contributors | where: 'editorial_board', true  %}
{% assign editors = editors | sort: 'sort'  %}

<div class="grid">
{% for aperson in editors %}
    {% include people-grid.html  %}
{% endfor %}


</div>

<br clear="both">

## Emeritus & Guest Editors

We are deeply grateful for those served on our editorial board previously!

{% assign emeritus = site.data.contributors | where: 'emeritus_editor', true  %}

<div class="grid">
{% for aperson in emeritus %}
    {% include people-grid.html  %}
{% endfor %}
</div>

<br clear="both">
</div>


<div class="content">
<div class="feature__wrapper">
<h2> Recently Accepted scientific Python Packages</h2>

{% assign packages_sorted = site.data.packages | sort_natural: 'date_accepted' | reverse %}

<div class="grid">
  {% for apackage in packages_sorted limit:4 %}
    {% include package-grid.html %}
  {% endfor %}
</div>

<br clear="both">

<a href="/python-packages/" class="btn btn--info">View All Accepted Packages <i class="fa fa-4 fa-arrow-circle-right" aria-hidden="true"></i></a>

</div>

</div>
