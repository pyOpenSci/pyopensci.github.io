---
layout: splash
permalink: /learn.html
title: "Python Tutorials & Learning Resources for Scientists"
classes: flowing
header:
  overlay_image: images/headers/pyopensci-learn-header.png
  overlay_filter: 0.3
scientists:
  - image_path: images/landing-pages/peer-review-people.png
    alt: "A pencil sketch of a round table with people sitting around it from different backgrounds working on laptops and also writing together."
    excerpt: "Our catalog of vetted open source tools makes it easier for scientists to find the trusted tools that they need to develop their open science workflows."
    title: "Find the open science tools that you need for your research"
    url: https://www.pyopensci.org/python-packages.html
    btn_label: View our growing list of accepted scientific Python packages
    btn_class: btn--primary
development:
   - image_path: images/learn-graphics/community-created.png
     alt: "An image showing a bunch of hands holding up a sign that says Community Developed. the background is dark purple with a few green decorative items."
     title: "Our process: Community-developed Python tutorials"
     excerpt: "Our tutorials are created through a multi-stage community review process.

     * Tutorials are developed by the pyOpenSci team or community members.

     * Tutorials are reviewed by tool maintainers to ensure ideas and concepts are accurate.

     * Before publication, tutorials then go through several rounds of community review for accuracy, usability and accessibility."
whats_next:
  - image_path: images/learn-graphics/github-collaboration.png
    alt: "A graphic with a light yellow background that says essential collaboration skills for scientists - using GitHub. On the right there is a man and a woman sitting at a tall table with laptops working."
    title: "Lessons: Collaborative GitHub for Scientists"
    excerpt: |
      Support for this track comes in part from the [Better Scientific Software Fellowship](https://bssw.io/pages/bssw-fellowship-program). These lessons live in the [pyOpenSci lessons book](https://www.pyopensci.org/lessons/) and teach **GitHub collaboration** for open source and team science.

      Read [social etiquette in open source](https://www.pyopensci.org/lessons/contribute-open-source/social-open-source.html), then work through the contribute path:

      1. [Your contributing path](https://www.pyopensci.org/lessons/contribute-open-source/your-first-contribution.html)
      2. [Get to know the repo](https://www.pyopensci.org/lessons/contribute-open-source/get-to-know-repo.html)
      3. [Find an issue](https://www.pyopensci.org/lessons/contribute-open-source/identify-issue.html)
      4. [Fork a GitHub repository](https://www.pyopensci.org/lessons/contribute-open-source/fork-repo.html)
      5. [Edit and commit files](https://www.pyopensci.org/lessons/contribute-open-source/edit-commit-files.html)
      6. [Submit a pull request](https://www.pyopensci.org/lessons/contribute-open-source/pull-request.html)

      **Work locally:** [Clone a GitHub repository](https://www.pyopensci.org/lessons/contribute-open-source/clone-repo.html)

      **Background:** [What is Git/GitHub?](https://www.pyopensci.org/lessons/contribute-open-source/what-is-git-github.html), [GitHub Codespaces](https://www.pyopensci.org/lessons/contribute-open-source/github-codespaces.html), [Ways to contribute](https://www.pyopensci.org/lessons/contribute-open-source/ways-to-contribute.html)
    url: https://www.pyopensci.org/lessons/contribute-open-source/index.html
    btn_label: Open the collaboration lessons
    btn_class: btn--primary btn--large
toc: false
---

<div class="pyos-section learn-hero" markdown="1">

## A tools and resources hub for Python packaging and collaborative open science

pyOpenSci is committed to supporting scientists as they leverage open source to
solve the world’s most complex challenges. From beginners who hope to build an
installable Python package, contributors ready to master core GitHub
collaboration skills to experts looking to streamline packaging maintenance
workflows, our educational hub is a trusted resource for gaining the skills
needed to scale your project.


Are you interested in cohort learning options? Visit our [university research communities and labs accelerator programs](/learn-universities-labs.html) page to learn more.
{: .notice .notice--measure .notice--success}

</div>

{% include pyos-flow-feature.html id="development" type="left" purple=true %}

{% include div_purple_bottom.html  %}

<div class="pyos-section learn-packaging-tutorials" markdown="1">

## Start learning: beginner-friendly Python packaging tutorials

Beginner-friendly Python packaging tutorials guide you through creating a Python package, following modern best practices. It's best to follow the tutorials in order, but you can always pick a specific topic if you wish to jump around.

<div class="tutorial__container">
{% for atutorial in site.tutorials %}
  {% include tutorial-grid.html  %}
{% endfor %}
</div>

</div>

{% include div_purple_top.html  %}

{% include pyos-flow-feature.html id="whats_next" type="left" purple=true %}

{% include div_purple_bottom.html  %}

<div class="pyos-section learn-events" markdown="1">

## Expert-Led Training & Community Events

pyOpenSci runs comprehensive training events that equip scientists with the critical skills needed to make their research software more open, reliable, and collaborative.

When you attend our events, you experience the value of learning directly from leaders in the open-source space. Over the years, we have fostered a welcoming, supportive and diverse community where you can collaborate alongside cross-disciplinary peers facing similar challenges. From expert-led workshops to our highly collaborative sprint events, the connections you make and the skills you build here will transform your workflow.

<figure class="align-center">
  <picture>
  <source srcset="/images/people/bof-scipy-2025.webp" type="image/webp">
  <img src="/images/people/bof-scipy-2025.png" alt="An image of people sitting in a conference room and smiling.">
  </picture>
</figure>

[Explore upcoming events](/events.html){: .btn .btn--success}
</div>

{% include pyos-flow-feature.html id="scientists" type="center" %}
