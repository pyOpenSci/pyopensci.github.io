---
layout: splash
classes: flowing
permalink: /python-packaging-science.html
title: "Python packaging resources for scientists"
excerpt: "We make the scientific Python package ecosystem easier to navigate through peer review and packaging resources."
header:
  overlay_image: images/header.jpg
  overlay_filter: 0.8
intro:
  - excerpt: "There are many tools and approaches that can be used to create a Python package. We build resources that help you both understand the tool ecosystem and also learn how to create a Python package using modern best practices."
peer-review:
  - image_path: images/pyopensci-people-at-computer.jpg
    alt: "A pencil sketch of a round table with people from different backgrounds sitting around it, working on laptops and also writing together."
    excerpt: "We run an open peer review process for scientific Python software. Peer review helps maintainers improve the quality, usability and long-term maintainability of scientific software."
    title: Raising the bar for scientific Python software"
    url: https://www.pyopensci.org/about-peer-review/index.html
    btn_label: Learn more and get involved with peer review today.
    btn_class: btn--primary
packaging-easier:
   - image_path: images/pyopensci-working-together.png
     alt: "A black and grey sketch of a group of people sitting at a desk in front of a monitor smiling."
     title: "Get Involved: Help us improve our scientific Python packaging resources"
     excerpt: "
     We need your help! Our packaging content is community-created and reviewed through an open review process on GitHub. The more feedback that we get, the more useful our resources are to the community. Get involved by:

     * Opening an issue about problems that you find in our guidebook

     * Submitting a pull request that fixes a typo or mistake in the guide.

     * Get credit for your contribution


     All contributions are recognized both on our website and in the guidebook's citation.
     "
     url: https://github.com/pyOpenSci/python-package-guide/pulls
     btn_label: See what we're working on now
     btn_class: btn--primary
community-created:
   - image_path: images/pyopensci-people-working-together.png
     alt: "A group of people working on a tetris like set of building blocks, trying to stack the blocks together. "
     title: "Community created Python Packaging Guide"
     excerpt: "
     Our packaging guide is a living document that will help you navigate the Python packaging ecosystem and also learn about modern Python packaging best practices.

    * Created & curated by the community

    * Reviewed by beginner to expert level Pythonistas

    * Accurate, modern & beginner-friendly


     All contributions are recognized both on our website and in the guidebook's citation.
     "
toc: false
---

{% include feature_row id="intro" type="center" %}

<div class="pyos-section purple">
<div class="content" markdown="1">

{% include feature_row id="community-created" type="right" %}

### Scientific Python packaging guidebook sections

<div class="tutorial__container">
{% for atutorial in site.packaging %}
  {% include tutorial-grid.html  %}
{% endfor %}
</div>

<div class="clearfix"></div>

</div>
</div>

{% include div_purple_bottom.html  %}

<div class="pyos-section">
<div class="content" markdown="1">

## Python packaging 101

Beginner-friendly Python packaging tutorials that will take you through
the full process of creating a Python package following modern best
practices.

<div class="tutorial__container">
{% for atutorial in site.tutorials %}
  {% include tutorial-grid.html  %}
{% endfor %}
</div>

<div class="clearfix"></div>



</div>
</div>

{% include div_purple_top.html  %}

<div class="pyos-section purple" markdown="1">
<div class="content" markdown="1">
{% include feature_row id="packaging-easier" type="left" %}

</div>
</div>


{% include div_purple_bottom.html  %}
