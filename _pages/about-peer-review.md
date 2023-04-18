---
layout: splash
permalink: /about-peer-review/
title: "About the pyOpenSci Open Peer Review Process"
header:
  overlay_image: images/header.jpg
  overlay_filter: 0.6
intro:
  - excerpt: "Our open peer review process supports scientists getting credit for the work invested in open Python tools. It also supports standardization of packaging and improved package visibility."
toc: false
classes: wide
---

{% include feature_row id="intro" type="center" %}

<!--TODO: this into a template -->

<div class="feature__wrapper">
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

  <div class="feature__item">
    <div class="archive__item cards">
      <div class="archive__item-body">
          <h2 class="archive__item-title">Want to Review a Python Package for Us?</h2>
          <div class="archive__item-excerpt">
            <p>We could use your help! Fill our our reviewer form. We will
            contact you if we have a package that we need reviewers for.
            It's OK if you've never reviewed a package before! We'll walk you
            through it. </p>
          </div>
          <p><a href="https://forms.gle/GHfxvmS47nQFDcBM6" class="btn btn--inverse"><i class="fas fa-angle-right"></i>
            Signup Now (Google Form) </a></p>
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
</div>

## Our editorial board

We value our volunteer editors. Learn more about what editors do and how we select
them here.

{% assign editors = site.data.contributors | where: 'editorial-board', true  %}

<div class="entries-grid">
{% for aperson in editors %}
{% unless aperson.board %}
    {% include people-grid.html  %}
 {% endunless %}
{% endfor %}
</div>

<br style="clear:both">

<div class="wide__p_text" markdown="1">
## Why Peer Review for Python Scientific Software?
Peer review of Python scientific software addresses several challenges in the
open source community:

1. **Citations Support Credit & Acknowledgement:** Peer review provides credit and acknowledgement for the hard work invested in creating and supporting core tools that support open science workflows.
2. **Standard Packaging & Documentation:** Currently there are numerous ways to create a Python package. Peer review enforces standards thus promoting standardization of Python packaging across the scientific Python ecosystem.
3. **Removed Redundancy:** Peer review addresses the issue of multiple tools on pyPi that perform similar tasks but have varying levels of documentation, support and maintenance. One maintained package that is broadly useful and maintained will help scientists select tools that they can rely on.
4. **Long Term Maintenance:** Package maintainers often use their free time to work on Python tools. Once a package is reviewed by pyOpenSci we will keep in touch with the maintainer to ensure continued maintenance of the tool. If a maintainer needs to step down, we will try to find someone new to take over, or sunset the tool as needed.
5. **Community:** At the core of peer review is community around the tools that scientists need to process their data.

### Who can submit a package?

pyOpenSci packages are community developed, submitted and reviewed. Anyone is
welcome to submit a package to pyOpenSci to be reviewed. Once the package is reviewed,
and accepted, pyOpenSci will promote it as a peer-reviewed tool for science!

### How do I decide whether to submit to you or the Journal of Open Source Software (JOSS)

You don't have to chose between pyOpenSci and JOSS. We have a collaboration with
JOSS where you can submit your package to us for review. If your package is accepted
and if it is in scope for JOSS, it will then be fast tracked through their
review process; they will only review your paper.md file. Consider this a
win-win!

</div>

<!--
<div class="notice" markdown="1">
## What's the difference between pyOpenSci and JOSS?

> You don't have to chose between pyOpenSci and JOSS; You can submit your package to both.

pyOpenSci and [the Journal of Open Source Software (JOSS)](https://joss.theoj.org/)
are complementary, partner organizations; and you don't have to chose one or the
other! After a package to pyOpenSci has been reviewed and accepted by pyOpenSci
you can chose to also register it with JOSS. JOSS has [more limited scope](https://joss.readthedocs.io/en/latest/review_criteria.html)  of the
for packages that it will review. For instance while pyOpenSci will review and
accept API wrappers, JOSS won't.

If your package is accepted by pyOpenSci and in scope for JOSS, JOSS will fast
track your package through their process given it was already reviewed by us.
Once accepted by JOSS, you now have both a pyOpenSci acceptance and one by JOSS.
Joss will then give you a cross-ref supported DOI for citation.

### Why Two Review Processes JOSS and pyOpenSci?

the pyOpenSci review process is different from that of JOSS in a few ways:
* pyOpenSci is specific to the Python community and thus will enforce community specific python specific standards.
* pyOpenSci places heavy emphasis on documentation and usability in our reviews and associated standardization of both.
* pyOpenSci builds community around and visibility for it's tools.
* pyOpenSci supports long term tool maintenance.


JOSS reviews are [more limited in scope](https://joss.readthedocs.io/en/latest/review_criteria.html) compared to pyOpenSci and the
[submission criteria](https://joss.readthedocs.io/en/latest/review_criteria.html)
are, in places, less stringent than those of pyOpenSci.
</div>



-->

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
