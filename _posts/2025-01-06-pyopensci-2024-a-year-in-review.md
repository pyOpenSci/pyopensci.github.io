---
layout: single
title: "2024: A Transformative Year for pyOpenSci"
excerpt: "2024 was a transformative year for pyOpenSci—we broke down barriers to open source participation with training events, collaborative tutorials, and peer review. Thanks to our incredible community, we’ve doubled our contributors, expanded our ecosystem, and created free educational resources for scientists worldwide. Learn more about our 2024 adventures and what's next for 2025."
author: "Leah Wasser"
permalink: /blog/2024-pyopensci-retrospective.html
header:
  overlay_color: "#666"
  overlay_filter: 0.6
categories:
  - blog-post
  - community
toc: true
classes: wide
comments: true
last_modified: 2025-01-06
---

## Introduction

In 2024, pyOpenSci’s vibrant community led efforts to break down barriers to participation in open source scientific software. We empowered scientists to create, contribute to, and discover better software through beginner-friendly training events, collaborative tutorials, and peer review.


<figure>
<picture>
  <source srcset="/images/pyopensci-general/pyopensci-by-the-numbers-2024.png" type="image/webp">
  <img src="/images/pyopensci-general/pyopensci-by-the-numbers-2024.png" alt="." />
</picture>
</figure>

Looking back, I’m inspired and humbled by what we’ve achieved together:

- We launched a new **Training Initiative** to empower open source newcomers and [explore what sustainability means](https://www.pyopensci.org/blog/pyopensci-funding-sustainability.html) for pyOpenSci.
- We expanded our [**Software Peer Review Program**](https://www.pyopensci.org/about-peer-review/index.html), increasing its global impact.
- We co-created a [packaging template](https://github.com/pyOpenSci/pyos-package-template) aligned with our [beginner-friendly Python packaging tutorials](https://www.pyopensci.org/python-package-guide/tutorials/intro.html) that we co-developed.

As I reflect on an incredible year, I want to take a moment to celebrate these milestones and set the stage for an ambitious 2025. Here’s a look back at what we accomplished together in 2024 and where we're heading next.

<!-- **TODO: count all sprints, all training events (airtable), all other events (airtable) and then count all package reviews for 2024**

https://github.com/pyOpenSci/software-submission/issues?q=is%3Aissue+is%3Aopen+created%3A%3E%3D2024-01-01+
55 new software submissions for our peer review process supported by a strong editorial team and reviewrs

674 community issues and prs
762 staff

-->

## Beginner-friendly content development: harnessing diverse expertise

A defining strength of the pyOpenSci community is its commitment to creating accessible technical lessons for Pythonistas at all skill levels. In 2024, this commitment shone through in creating our tutorial, [**"How to Create a Python Package"**](https://www.pyopensci.org/python-package-guide/tutorials/intro.html). This tutorial provides an opinionated single way to create a Python package—a key step in making Python packaging more approachable and empowering for all.

Our packaging tutorial is the product of a vibrant collaboration between developers, scientists, and beginners. Packaging tool maintainers and packaging experts worked alongside those newer to packaging to co-develop, review, and refine content that is accurate, thorough, and welcoming to newcomers.

### **Collaborative learning in action: building together, learning together**

Our co-development process brought contributors of all experience levels together to create a resource that:

- **Blends expertise:** Developers and scientists shared insights while beginners shaped the content with fresh perspectives.
- **Demystifies packaging:** Clear, precise explanations, reviewed by experts and tested by newcomers, break down complex steps for new users.
- **Describes core concepts visually:** Custom graphics and step-by-step guides make technical concepts easier for visual learners to grasp.

We're building both knowledge and community by publishing these lessons as free, open-access resources. This collaborative effort exemplifies the unique power of pyOpenSci to bridge expertise, foster learning, and strengthen the open source ecosystem.

## Training events: empowering our global community

In 2024, we launched the pyOpenSci [training initiative](https://www.pyopensci.org/blog/pyos-education-announcement.html) to lower barriers to open science for Pythonistas worldwide. Supported by the community, our events reached **180 participants** from over **18 countries**, both online and in person.

### Event Highlights: Fall Festival

Our first-ever [Fall Festival](#) featured inspiring keynote speakers like Rowan Cockett, who introduced participants to [MyST Markdown](https://mystmd.org/), Melissa Mendoça who discussed her personal pathway into open source from academia, and Eric Ma, who overviewed the importance of [reproducibility in science](/human-dimension-clean-documented-data-science-code.html).

<figure>
<picture>
  <source srcset="/images/events/fall-festival-blog-keynote-speakers.png" type="image/webp">
  <img src="/images/events/fall-festival-blog-keynote-speakers.png" alt="." />
</picture>
  <figcaption>Keynote speakers from the 2024 pyOpenSci Fall Festival. Videos from the event will be published on YouTube in early 2025.</figcaption>

</figure>

The dynamic spatial chat platform fostered real-time collaboration and made learning interactive, personalized, and fun!

{% include pyos-blockquote.html quote="I love the engagement…how people were attended to individually despite being in a group setting. I enjoyed that learning could happen in a personal and group setting." author="Workshop Participant" event="Fall Festival 2024" class="highlight purple" %}

#### Volunteers who made it possible

The Fall Festival wouldn’t have been possible without the dedication of our incredible volunteers, who handled everything from workshop support to tech troubleshooting. Their efforts ensured a welcoming, smooth experience for participants.

<figure>
<picture>
  <source srcset="/images/events/fall-festival-thank-you.png" type="image/webp">
  <img src="/images/events/fall-festival-thank-you.png" alt="." />
</picture>
  <figcaption>Volunteers who made the Fall Festival the wonderful event that it was.</figcaption>
</figure>


#### Open education lessons from the Fall Festival
Participants didn’t just learn—they contributed! Thanks to the collaborative energy, the event produced several lessons that are now freely available to the community:

- [Writing Clean Code](https://www.pyopensci.org/lessons/clean-modular-code/intro-clean-code.html#intro-clean-code)
- [Optimizing Code for Better Workflows](https://www.pyopensci.org/lessons/code-workflow-logic/intro.html)
- [Running Code Efficiently](https://www.pyopensci.org/lessons/running-code/intro.html)
- [Publishing and Sharing Code](https://www.pyopensci.org/lessons/publish-share-code/intro.html)

These lessons reinforce key technical skills and showcase the power of community-driven learning and co-creation.

### Event highlight: Intro to Python packaging workshops

We also ran two beginner-friendly packaging workshops where dozens of participants successfully created their first Python packages by following our [beginner-friendly packaging tutorials](https://www.pyopensci.org/python-package-guide/tutorials/intro.html).

What did you enjoy most about the workshop:

{% include pyos-blockquote.html quote="The content and the crew! The team was so kind, patient, and approachable. I appreciate the amount of support and reassurance given during this tutorial. The content of the tutorial was also spot on. Everything we covered felt relevant and useful, and gave me the confidence to feel capable of creating my own packages." author="Workshop Participant" event="SciPy 2024 Create your first Python package training" class="highlight purple" %}

The success of our training materials underscores the demand for inclusive, high-quality open science resources; they also demonstrate the power of community collaboration.


## A thriving contributor community: how contributions to pyOpenSci have skyrocketed <i class="fa-solid fa-rocket" style="color: #290a3e;"></i>

In 2024, the pyOpenSci contributor community doubled to **278 people** from around the world! Through beginner-friendly sprints and mentorship, we supported new contributors and celebrated their successes making their first contributions to open source.

This was also the first year where volunteer contributions outnumbered staff contributions—a testament to the power of community.

Wow!


<figure>
<picture>
  <source srcset="/images/pyopensci-general/pyopensci-github-prs-issues.png" type="image/webp">
  <img src="/images/pyopensci-general/pyopensci-github-prs-issues.png" alt="." />
</picture>
  <figcaption>A snapshot of community vs. staff contributions to pyOpenSci's open source education resources.</figcaption>

</figure>

### Empowering first-time contributors

A key driver of contributor and community growth was our [**beginner-friendly sprints**](https://www.pyopensci.org/blog/pyopensci-pyconus-2024-sprints.html). Sprint events exemplified the power of community support combined with mentorship & just a bit of training (mostly around git and GitHub). These sprints welcomed over **50 participants** and resulted in **86 issues and pull requests**—many from first-time contributors.

- **PyCon US, SciPy, and PyCascades Sprints:** Hosted across three major conferences, these events focused on hands-on mentorship, guiding participants through impactful contributions.

{% include pyos-blockquote.html quote="Amazing! Leah was so helpful as it was my first time doing anything like that. I had used GitHub for personal projects but never with other people so she was so good at teaching." author="Workshop Participant" event="pyOpenSci sprint 2024" class="highlight purple" %}

Our sprints strengthened our contributor community and sparked new initiatives, like translating our packaging guide into Spanish and Japanese.

## Python software review highlights

The pyOpenSci software peer review program empowers scientists to build and improve the tools they rely on to process and analyze data. In 2024, we expanded our ecosystem of reviewed scientific Python packages to **39**, thanks to the dedication of our editorial and review teams.

We also tried out a new editor in chief rotation system to avoid too much time burden on any specific editor. Below are our fearless EiC's for 2024.

<figure>
<picture>
  <source srcset="/images/peer-review/pyos-eic-rotation-2024.png" type="image/webp">
  <img src="/images/peer-review/pyos-eic-rotation-2024.png" alt="." />
</picture>
  <figcaption>A snapshot of community vs. staff contributions to pyOpenSci's open source education resources.</figcaption>

</figure>

Our editorial team grew to **18 members**, with a rotating Editor-in-Chief position, and was supported by **81 volunteer reviewers** who contributed their time to ensure that [every reviewed package in our ecosystem](https://www.pyopensci.org/python-packages.html) meets the highest standards for quality and usability.


In 2024, we received over **28 new submissions**.

### Peer review success in 2024

- **Publishing impact through partnerships:**
  **21 packages** of our accepted packages were published in [JOSS through our peer review partnership](https://www.pyopensci.org/software-peer-review/partners/joss.html).

- **Strengthening ecosystems through domain-specific affiliation: Astropy:**
  Our domain-specific community partnership program accepted three packages for [Astropy affiliation](https://www.pyopensci.org/software-peer-review/partners/astropy.html). Our partnership with Astropy and JOSS demonstrates how communities with some overlapping goals can truly work together effectively.

<figure>
<picture>
  <source srcset="/images/peer-review/pyos-partnerships-peer-review.png" type="image/webp">
  <img src="/images/peer-review/pyos-partnerships-peer-review.png" alt="." />
</picture>
  <figcaption>A snapshot of community vs. staff contributions to pyOpenSci's open source education resources.</figcaption>

</figure>


### Navigating ethical challenges in generative AI

In 2024, we began to address the emerging challenge of reviewing packages that rely on proprietary generative AI models. We discussed important ethical questions about transparency vs. innovation in scientific software. Should we review packages that depend upon proprietary (closed box) models that are rapidly evolving?

More work is needed, and we are committed to handling these complexities as we always do--collaboratively and with great care.

## Funding and sustainability

In 2024, we reached an important milestone in pyOpenSci’s journey. Our initial funding from the Sloan Foundation, which gave us our start as a fledgling project, ended in December. The Sloan Open Source Program’s generous support took us a long way—it helped me grow pyOpenSci from a part-time passion project into a thriving community dedicated to lowering barriers to open source scientific software.

We are deeply grateful for Sloan’s belief in our vision and commitment to open science. Last fall, we also received support from the Chan Zuckerberg Initiative (CZI), which will empower us as we move forward. This combined funding has enabled us to launch our training initiative, expand our peer review program, and co-develop beginner-friendly lessons and tutorials.


## Building the future: new initiatives and funding efforts

As we look to the future, our current focus includes:

- **GitHub Collaboration Lessons:** We’re developing lessons to teach contributors GitHub workflows. These lessons are well underway and set to be released in Spring 2025.
- **Educational Videos:** We’re working on a series of educational videos to complement our text-based tutorials. We recognize that people learn differently, and video content provides an accessible way for contributors to engage with technical topics.

## Sustaining our impact

As we head into 2025, sustainability remains a top priority. We’re committed to growing pyOpenSci in ways that support our contributors, empower learners, and strengthen open source science. We’re actively seeking new partnerships and funding opportunities to ensure our work continues to thrive.

To our funders, contributors, and community members—thank you. Your support makes our work possible and helps us build a future where scientific software is open, accessible, and collaborative.

Stay engaged, and let’s continue building the future of open science, one contribution at a time.


<div class="notice" markdown="1">
## Get involved with pyOpenSci

* if you'd like to get involved with pyOpenSci, check out our [volunteer page](/volunteer.html).

You can also:

* Keep an eye on our [events page](/events.html) for upcoming training events.

Follow us on social platforms:

* [<i class="fa-brands fa-discourse"></i> Discourse](https://pyopensci.discourse.group/)
* [<i class="fa-brands fa-mastodon"></i> Mastodon](https://fosstodon.org/@pyopensci)
* [<i class="fa-solid fa-cloud"></i> Bluesky](https://bsky.app/profile/pyopensci.bsky.social)
* [<i class="fa-brands fa-linkedin"></i> LinkedIn](https://www.linkedin.com/company/pyopensci)
* [<i class="fa-brands fa-github"></i> GitHub](https://github.com/pyOpenSci)

If you are on LinkedIn, check out and [subscribe to our newsletter, too](https://www.linkedin.com/newsletters/7179551305344933888/?displayConfirmation=true).

</div>
