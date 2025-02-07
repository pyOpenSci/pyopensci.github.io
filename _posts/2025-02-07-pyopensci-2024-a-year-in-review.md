---
layout: single
title: "2024: A Transformative Year for pyOpenSci"
excerpt: "2024 was a transformative year for pyOpenSci—but our mission has never been more important. In a time when access, equity, and sustainability in open science face challenges, we doubled down on our commitment to breaking down barriers. Through training, mentorship, and peer review, we expanded our community, created free educational resources, and empowered scientists worldwide. Here’s what we built together—and why it matters now more than ever."
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

In 2024, pyOpenSci’s vibrant community led efforts to make open source science more accessible, inclusive, and equitable for all. We empowered the broader community to create, contribute to, and discover better software through beginner-friendly [training events](https://www.pyopensci.org/events/index.html), [collaborative tutorials](https://www.pyopensci.org/learn.html#start-learning-beginner-friendly-python-packaging-tutorials), and [software peer review](https://www.pyopensci.org/about-peer-review/index.html).

<figure>
<picture>
  <source srcset="{{ '/images/pyopensci-general/pyopensci-by-the-numbers-2024.webp' | relative_url }}" type="image/webp">
  <img src= "{{ '/images/pyopensci-general/pyopensci-by-the-numbers-2024.png' | relative_url }}" alt="Infographic summarizing pyOpenSci’s achievements in 2024 with the title ‘pyOpenSci 2024: A year of community & growth.’ The ‘Training & Sprints’ section shows 7 events and 180 attendees. The ‘Peer Review’ section highlights 39 accepted packages and approximately 100 editors and reviewers. The ‘Community’ section emphasizes 1,436 issues and pull requests submitted, 278 contributors, and 23 new co-developed lessons." />
</picture>
</figure>

Looking back, I’m inspired and humbled by what we’ve achieved together:

- <i class="fa-solid fa-users"></i> We co-created a [Python package template](https://github.com/pyOpenSci/pyos-package-template) aligned with our [beginner-friendly Python packaging tutorials](https://www.pyopensci.org/python-package-guide/tutorials/intro.html) that we co-developed.
- <i class="fa-solid fa-graduation-cap"></i> We launched a new **Training Initiative** to empower open source newcomers and [explore what sustainability means](https://www.pyopensci.org/blog/pyopensci-funding-sustainability.html) for pyOpenSci.
- <i class="fa-solid fa-magnifying-glass"></i> We expanded our [**Software Peer Review Program**](https://www.pyopensci.org/about-peer-review/index.html), increasing its global impact.
- <i class="fa-solid fa-rocket"></i> And our contributor community grew


As I reflect on an incredible year, I want to take a moment to celebrate these milestones and set the stage for an ambitious 2025. Here’s a look back at what we accomplished together in 2024 and where we're heading next.

<!--
https://github.com/pyOpenSci/software-submission/issues?q=is%3Aissue+is%3Aopen+created%3A%3E%3D2024-01-01+
55 new software submissions for our peer review process supported by a strong editorial team and reviewers

674 community issues and prs
762 staff
-->

## <i class="fa-solid fa-users" style="color: #81c0aa;"></i> Co-creation of beginner-friendly content: Python packaging made easy(ier)

A defining strength of the pyOpenSci community is its commitment to co-creating accessible technical lessons for Pythonistas at all skill levels. These lessons, in turn, support our beginner-friendly tutorials and training events (more below). In 2024, this commitment shone through in creating our tutorial, [**"How to Create a Python Package"**](https://www.pyopensci.org/python-package-guide/tutorials/intro.html). This tutorial provides an opinionated way to create a Python package--a key step in making Python packaging more approachable and accessible for all.

Our packaging tutorial is the product of a vibrant collaboration between developers, scientists, and beginners. Packaging tool maintainers and packaging experts worked alongside those newer to packaging to co-develop, review, and refine content that is accurate, thorough, and welcoming to newcomers.


<figure>
<picture>
  <source srcset="{{ '/images/python-packaging/packaging-101-outline.webp' | relative_url }}" type="image/webp">
  <img src= "{{ '/images/python-packaging/packaging-101-outline.png' | relative_url }}" alt="Diagram showing the lessons in our packaging tutorial. There are 6 total - what is a Python package, make code pip installable, publish your package to PyPI, add a README and LICENSE file, add metadata for PyPI and finally publish to conda forge." style="width: 70%; max-width: 100%;"/>
</picture>
</figure>

### Collaborative learning in action: building together, learning together

Our co-development process brought contributors of all experience levels together to create a resource that:

- **Blend expertise:** Developers and scientists shared insights, while beginners shaped the content with fresh perspectives.
- **Demystifies packaging:** Clear, precise explanations, reviewed by experts and tested by newcomers, break down complex steps for new users.
- **Describes core concepts visually:** Custom graphics and step-by-step guides make technical concepts easier for visual learners to grasp.

We're building both knowledge and community by publishing these lessons as free, open-access resources. This collaborative effort exemplifies the unique power of pyOpenSci to bridge expertise, foster learning, and strengthen the open source ecosystem.

### Simplifying Python packaging: Our easy-to-use Python package template

To further simplify the process of creating a new Python package, the community also came together to develop an easy-to-use [Python packaging template](https://github.com/pyOpenSci/pyos-package-template). The template allows you to create a skeleton Python package that follows our beginner-friendly Python package tutorial with just a few commands.

Many learners used this template successfully during our Fall Festival (more below!) and we look forward to refining it further in the upcoming months.

Give it a test-drive and let us know what you think!


##  <i class="fa-solid fa-graduation-cap" style="color: #81c0aa;"></i> pyOpenSci's training new training initiative: empowering our global community

In 2024, we launched the pyOpenSci [training initiative](https://www.pyopensci.org/blog/pyos-education-announcement.html) to lower barriers and make scientific software education more accessible to all.

To further our commitment to equity, we awarded 25+ scholarships to support participation from a diverse group of students, researchers, and contributors.

### Event Highlights: Fall Festival

Our first-ever [Fall Festival](#) featured inspiring keynote speakers like Rowan Cockett, who introduced participants to [MyST Markdown](https://mystmd.org/), Melissa Mendoça who discussed her personal pathway into open source from academia, and Eric Ma, who overviewed the importance of [reproducibility in science](/human-dimension-clean-documented-data-science-code.html).

On the event's last day, George Stagg, developer of Quarto Live, and James Balamuta kicked off the day with an overview of how Quarto Live makes interactive publishing of dynamic scientific outputs easier, connecting scientific workflows with shared outputs.

<figure>
<picture>
  <source srcset="{{ '/images/events/fall-festival-blog-keynote-speakers.webp' | relative_url }}" type="image/webp">
  <img src="{{ '/images/events/fall-festival-blog-keynote-speakers.png' | relative_url }}" alt="Graphic showing the keynote speakers for the pyOpenSci Fall Festival. The title reads: pyOpenSci Fall Festival Keynote Speakers. The featured speakers are Melissa Mendoça, James Balamuta, Eric Ma, George Stagg, and Rowan Cockett, each displayed in a circular frame against a purple background with connecting nodes as a design element." />
</picture>
</figure>

The dynamic spatial chat platform fostered real-time collaboration and made learning interactive, personalized, and fun!

{% include pyos-blockquote.html quote="I love the engagement…how people were attended to individually despite being in a group setting. I enjoyed that learning could happen in a personal and group setting." author="Workshop Participant" event="Fall Festival 2024" class="highlight purple" %}

#### Volunteer contributors who made it possible

The Fall Festival wouldn’t have been possible without the dedication of our incredible volunteers, who handled everything from workshop support to tech troubleshooting. Their efforts ensured a welcoming, smooth experience for participants.

<figure>
<picture>
  <source srcset="{{ '/images/events/fall-festival-thank-you.webp' | relative_url }}" type="image/webp">
  <img src="{{ '/images/events/fall-festival-thank-you.png' | relative_url }}" alt="Graphic showing a ‘Thank You’ message to pyOpenSci Fall Festival community supporters. The text reads ‘Thank You, pyOpenSci Community Supporters!’ with the Fall Festival logo. Circular photos of community members include Rich Iannone, Steven Sylvester, Jonny Saunders, Tracy Teal, Carol Willing, Felipe Moreno, Tetsuo Koyama, Isabel Zimmerman, and Jeremiah Paige, displayed against a purple background with connecting nodes as a design element. The pyOpenSci URL (pyopensci.org) is displayed in the lower left." />
</picture>
</figure>


#### Open education lessons from the Fall Festival
Participants didn’t just learn—they contributed! Thanks to the collaborative energy, the event produced several lessons that are now freely available to the community:

- [Writing Clean Code](https://www.pyopensci.org/lessons/clean-modular-code/intro-clean-code.html#intro-clean-code)
- [Optimizing Code for Better Workflows](https://www.pyopensci.org/lessons/code-workflow-logic/intro.html)
- [Running Code Efficiently](https://www.pyopensci.org/lessons/running-code/intro.html)
- [Publishing and Sharing Code](https://www.pyopensci.org/lessons/publish-share-code/intro.html)

These lessons reinforce key technical skills and showcase the power of community-driven learning and co-creation.

### Event highlight: Intro to Python packaging workshops

As a part of our training initiative, we also ran two beginner-friendly packaging workshops where dozens of participants successfully created their first Python packages by following our [beginner-friendly packaging tutorials](https://www.pyopensci.org/python-package-guide/tutorials/intro.html).

What did you enjoy most about the workshop?

{% include pyos-blockquote.html quote="The content and the crew! The team was so kind, patient, and approachable. I appreciate the amount of support and reassurance given during this tutorial. The content of the tutorial was also spot on. Everything we covered felt relevant and useful, and gave me the confidence to feel capable of creating my own packages." author="Workshop Participant" event="SciPy 2024 Create your first Python package training" class="highlight purple" %}

The success of our training materials underscores the demand for inclusive, high-quality open science resources; they also demonstrate the power of community collaboration.

## <i class="fa-solid fa-magnifying-glass-chart" style="color: #81c0aa;"></i>  Expanding our software peer review program in 2024

The pyOpenSci software peer review program empowers scientists to build and improve the tools they rely on to process and analyze data. In 2024, we expanded our ecosystem of reviewed scientific Python packages to **39**, thanks to the dedication of our editorial and review teams.

We also tried out a new editor in chief rotation system to avoid too much time burden on any specific editor. Below are our fearless EiC's for 2024.

<figure>
<picture>
  <source srcset="{{ '/images/peer-review/pyos-eic-rotation-2024.webp' | relative_url }}" type="image/webp">
  <img src="{{ '/images/peer-review/pyos-eic-rotation-2024.png' | relative_url }}" alt="Graphic titled ‘Editor in Chief 2024 Software Peer Review,’ highlighting the four Editors-in-Chief for 2024 with photos and descriptions.
	•	Szymon Molinski (Fall 2024): Image of Szymon holding a dog by the ocean. Passion: Open source development, breakdancing, and hiking with his pug.
	•	Chiara Marmo (Summer 2024): Illustrated portrait of Chiara. Fun fact: She enjoys reading theater pieces, playing all roles herself, and takes pride in accomplishing unexpected things.
	•	Alex Batisse (Spring 2024): Black-and-white photo of Alex. Passion: Understanding and visualizing information, from stats to dataviz, and making it intelligible for others.
	•	Isabel Zimmerman (Winter 2024): Photo of Isabel smiling outdoors in a wide-brimmed hat. Passion: Machine learning operations and improving the processes that support creating, sharing, and maintaining models." />
</picture>
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
  <source srcset="{{ '/images/peer-review/pyos-partnerships-peer-review.webp' | relative_url }}" type="image/webp">
  <img src="{{ '/images/peer-review/pyos-partnerships-peer-review.png' | relative_url }}" alt="Graphic illustrating the pyOpenSci partnerships and review flow:
	1.	pyOpenSci Accepted: The process starts with a package being accepted by pyOpenSci, represented by the pyOpenSci logo and a checkmark.
	2.	JOSS Published: Accepted packages can be published in the Journal of Open Source Software (JOSS), indicated by the JOSS logo and a checkmark.
	3.	Community Affiliated: Packages can also become affiliated with community-specific organizations, represented by a box labeled ‘Community Affiliated’ with a checkmark.

The flowchart shows arrows connecting these stages, visually demonstrating the possible outcomes after pyOpenSci acceptance." />
</picture>
</figure>

### Navigating ethical challenges in generative AI

In 2024, we began to address the emerging challenge of reviewing packages that rely on proprietary generative AI models. We discussed important ethical questions about transparency vs. innovation in scientific software. Should we review packages that depend upon proprietary (closed box) models that are rapidly evolving?

More work is needed, and we are committed to handling these complexities as we always do--collaboratively and with great care.

## <i class="fa-solid fa-rocket" style="color: #81c0aa;"></i> A thriving, diverse contributor community: how contributions to pyOpenSci have skyrocketed

In 2024, pyOpenSci welcomed 278 contributors from diverse backgrounds, many making their first-ever open source contributions. By prioritizing mentorship, accessibility, and community-led learning, we helped first-time contributors gain the confidence and skills to shape the future of open source science.

This was also the first year where volunteer contributions outnumbered staff contributions—a testament to the power of community.

Wow!

<figure>
<picture>
  <source srcset="{{ '/images/pyopensci-general/pyopensci-github-prs-issues.webp' | relative_url }}" type="image/webp">
  <img src="{{ '/images/pyopensci-general/pyopensci-github-prs-issues.png' | relative_url }}" alt="Bar chart titled ‘Staff vs. Volunteer Contributor by Quarter,’ showing the count of contributions by quarter from Q4 2018 to Q1 2025. The chart uses stacked bars, with green representing volunteer contributions and purple representing staff contributions. The chart shows a significant growth in contributions starting around 2023, with volunteer contributions surpassing staff contributions in recent quarters." />
</picture>
  <figcaption>Plot that shows an increase in contributions to pyOpenSci open education content.</figcaption>

</figure>

### Empowering first-time contributors

A key driver of contributor and community growth was our [**beginner-friendly sprints**](https://www.pyopensci.org/blog/pyopensci-pyconus-2024-sprints.html). Sprint events exemplified the power of community support combined with mentorship & just a bit of training (mostly around git and GitHub). These sprints welcomed over **50 participants** and resulted in **86 issues and pull requests**—many from first-time contributors.

- **PyCon US, SciPy, and PyCascades Sprints:** Hosted across three major conferences, these events focused on hands-on mentorship, guiding participants through impactful contributions.

{% include pyos-blockquote.html quote="Amazing! Leah was so helpful as it was my first time doing anything like that. I had used GitHub for personal projects but never with other people so she was so good at teaching." author="Workshop Participant" event="pyOpenSci sprint 2024" class="highlight purple" %}

Our sprints strengthened our contributor community and sparked new initiatives, like translating our packaging guide into Spanish and Japanese.

## Funding and sustainability

In 2024, we reached an important milestone in pyOpenSci’s journey. Our initial funding from the Sloan Foundation, which gave us our start as a fledgling project, ended in December. The Sloan Open Source Program’s generous support took us a long way—it helped me grow pyOpenSci from a part-time passion project into a thriving community dedicated to lowering barriers to open source scientific software.

We are deeply grateful for Sloan’s belief in our vision and commitment to open science. Last fall, we also received support from the Chan Zuckerberg Initiative (CZI), which will empower us as we move forward. This combined funding has enabled us to launch our training initiative, expand our peer review program, and co-develop beginner-friendly lessons and tutorials.

## Building the future: new initiatives and funding efforts

As we look to the future, our current focus includes:
- **Exploring funding models for pyOpenSci**
- **Growing our peer review partners and program**
- **Connecting with University OSPOS (Open Source Program Offices)**
- **A focus on empowering the community to contribute to open source**
- **Educational Videos that support our online content**

## Strong together: Why inclusion in open science matters now more than ever

At a time when access, equity, and sustainability in open science face challenges, we believe in building a space where everyone—regardless of background—can contribute, learn, and thrive. Diversity strengthens open source, and we are committed to ensuring that our community remains welcoming, supportive, and accessible.

## Sustaining our impact

As we head into 2025, sustainability remains a top priority. We’re committed to growing pyOpenSci in ways that support our contributors, empower learners, and strengthen open source science. We’re actively seeking new partnerships and funding opportunities to ensure our work continues to thrive.

To our funders, contributors, and community members—thank you. Your support makes our work possible and helps us build a future where scientific software is open, accessible, and collaborative.

As we reflect on where we’ve been and where we’re going, it’s important to acknowledge the teams that continue to guide our vision and growth.
Our leadership teams—including the [Executive Council](https://www.pyopensci.org/our-community/index.html#executive-council-leadership--staff), [Advisory Council](https://www.pyopensci.org/our-community/index.html#pyopensci-advisory-council) and
[Peer Review Editorial Board](https://www.pyopensci.org/about-peer-review/index.html#meet-our-editorial-board) have been instrumental in carving the path forward for pyOpenSci.

We look forward to building the future of open science, one contribution at a time—and we invite you to join us on this journey.

<div class="notice" markdown="1">
## Get involved with pyOpenSci

If you'd like to get involved with pyOpenSci, check out our [volunteer page](/volunteer.html).

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
