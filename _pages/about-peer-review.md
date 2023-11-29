---
layout: splash
permalink: /about-peer-review/
title: "pyOpenSci Reviews Scientific Python Software"
header:
  overlay_image: images/header.jpg
  overlay_filter: 0.6
intro:
  - excerpt: "Our open peer review process supports scientists getting credit and recognition for the work invested in developing scientific Python tools. It also supports scientists finding vetted and maintained software to drive their open science workflows."
scientists:
  - image_path: images/pyopensci-people-at-computer.jpg
    alt: "A pencil sketch of a round table with people sitting around it from different backgrounds working on laptops and also writing together."
    excerpt: "More here"
    title: "Scientists need vetted, maintained open source tools"
benefits_scientists:
  - image_path: images/pyopensci-people-at-computer.jpg
    alt: "A pencil sketch of a round table with people sitting around it from different backgrounds working on laptops and also writing together."
    excerpt: "Scientists need trusted and vetted tools that they can easily use to support their open science workflows. Over time and through our [partnerships with domain specific communities](partners.html) our catalog of tools that scientists can trust will grow. "
    title: "Benefits of software peer review for scientists"
benefits_maintainers:
  - image_path: images/pyopensci-people-at-computer.jpg
    alt: "A pencil sketch of a round table with people sitting around it from different backgrounds working on laptops and also writing together."
    excerpt: "Peer review provides a form of academic credit that is nor currently available to scientists developing software. Further, navigating the Python packaging ecosystem can be challenging, even for seasoned Pythonistas. Our diverse community supports scientific package maintainers in their efforts to develop and build robust software."
    title: "Benefits of review & a supportive community for maintainers"
peer_review:
  - image_path: images/pyopensci-people-at-computer.jpg
    alt: "A pencil sketch of a round table with people sitting around it from different backgrounds working on laptops and also writing together."
    excerpt: "Software peer review, similar to review of scientific papers is a process where scientists vet software code, documentation and infrastructure. pyOpenSci leads an [open peer review process](https://www.pyopensci.org/software-peer-review/our-process/how-review-works.html) run by a community of dedicated volunteers. Reviews are supportive and fully transparent with the shared goal of improving the quality, usability and maintainability of the software that is driving open science.

    * Our [partnership with the Journal of Open Source software](https://www.pyopensci.org/software-peer-review/partners/joss.html) further allows scientists to get academic credit for their work through a cross-ref enabled DOI.

    * Reviews are lead by diverse teams of people from different backgrounds to enhance the their quality."
    title: "About peer review of scientific Python software"
joss:
  - image_path: images/pyopensci-people-at-computer.jpg
    alt: "A pencil sketch of a round table with people sitting around it from different backgrounds working on laptops and also writing together."
    excerpt: "You don't have to chose between pyOpenSci and JOSS. We have a collaboration with
JOSS where you can submit your package to us for review. If your package is accepted
and if it is in scope for JOSS, it will then be fast tracked through their
review process; they will only review your paper.md file. Consider this a
win-win!
More here - maybe a pyos<> joss logo?? "
    title: "maybe a pyos<> joss logo??Get published with JOSS through a pyOpenSci review"
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


<!--TODO: Make this section a template -->

<div class="content">
<h2>Get involved with peer review</h2>
<div class="feature__wrapper">
  <div class="feature__item">
    <div class="archive__item cards">
      <div class="archive__item-body">
          <h2 class="archive__item-title">Become a pyOpenSci reviewer</h2>
          <div class="archive__item-excerpt">
            <p>We could use your help! Fill our our reviewer form. We will
            contact you if we have a package that we need reviewers for.
            It's OK if you've never reviewed a package before! We'll walk you
            through it. </p>
          </div>
          <p><a href="https://forms.gle/GHfxvmS47nQFDcBM6" class="btn btn--inverse"><i class="fas fa-angle-right"></i>
            Sign-up Now (Google Form) </a></p>
      </div>
    </div>
  </div>

  <div class="feature__item">
    <div class="archive__item cards">
      <div class="archive__item-body">
          <h2 class="archive__item-title">See Our Review Process in Action</h2>
          <div class="archive__item-excerpt">
            <p>Our reviewers happen in GitHub issues. This means that anyone can
            check in on any part of any review and read all of the conversation.
            Check it out.</p>
          </div>
          <p><a href="https://github.com/pyOpenSci/software-review/issues" class="btn btn--inverse"><i class="fas fa-angle-right"></i> See Open Reviews </a></p>
      </div>
    </div>
  </div>

  <div class="feature__item ">
    <div class="archive__item cards">
      <div class="archive__item-body">
          <h2 class="archive__item-title">Ready to Submit a Package for Review?</h2>
          <div class="archive__item-excerpt">
            <p>You're in the right place! Learn about the steps to submit a package
            for open peer review in our guidebook. </p>
          </div>
          <p><a href="https://www.pyopensci.org/software-peer-review/how-to/author-guide.html" class="btn btn--inverse"><i class="fas fa-angle-right"></i> View our Author Guide </a></p>
      </div>
    </div>
  </div>
</div>
</div>
<!-- END template TODO -->

<!-- {% include feature_row id="joss" type="right" %} -->


</div>
</div>

{% include div_purple_bottom.html  %}
{: .clearall }

<div class="content" markdown="1">

## Our editorial board

The peer review process is lead by a volunteer team of expert editors who
find reviewers and ensure the review process is run efficiency from beginning
to end. Learn more about the
editor role at pyOpenSci [in our peer review guide, here.](https://www.pyopensci.org/software-peer-review/how-to/editors-guide.html)

{% assign editors = site.data.contributors | where: 'editorial_board', true  %}
{% assign editors = editors | sort: 'sort'  %}

<div class="grid clean">
{% for aperson in editors %}
{% unless aperson.board %}
    {% include people-grid.html  %}
 {% endunless %}
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
