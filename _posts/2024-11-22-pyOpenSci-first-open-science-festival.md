---
layout: single
title: "Building Momentum for the Future: Reflections on Our First Open Science Festival Week"
excerpt: "More Here"
author: "Leah Wasser"
permalink: /blog/pyopensci-reflections-fall-festival-2024.html
header:
  overlay_image: images/headers/pyopensci-inessa.png
  overlay_filter: rgba(20, 13, 36, 0.3)
categories:
  - blog-post
  - community
classes: wide
toc: true
comments: true
last_modified: 2024-11-22
---

## Our inaugural fall festival was a great success!

Three years ago, I envisioned an online event where our community could come together to celebrate open source and  open science, share knowledge, and learn new skills. Last month, that vision became reality with pyOpenSci’s first-ever [Fall Festival, held from October 28 to November 1](/events/pyopensci-2024-fall-festival.html). The event brought together 64 participants from over 15 countries—a global mix of researchers, developers, educators, and Python enthusiasts.


<figure>
    <a href="/images/events/fall-festival-2024-stats.svg">
    <img src="/images/events/fall-festival-2024-stats.svg" style="max-width:90%" alt="">
    </a>
    <figcaption>Graphic the shows stats 64 participants, 15+ countries
    </figcaption>
</figure>

**TODO: fix and post Eric's blog so I can cross-post here.**

The week was packed with inspiring keynotes, hands-on workshops, and informal office hours, where participants connected and reflected on their learning. It was an incredible celebration of the amazing work happening across our community!

We kicked the event off on Monday, October 28, with a morning of KeyNote talks headlined by **Eric Ma, Melissa Mendonça, and Rowan Cockett**. The Monday talks aligned perfectly with the training events held Tuesday through Friday. The talks set the stage for a truly engaging week of learning together.

## What Made This Event Special
- Share the vibe of the event, emphasizing what stood out (e.g., collaboration, energy).
- Include 1-2 quotes from participants or speakers that capture the atmosphere.

## Keynote talks


<figure class="align-center">
<picture>
  <source srcset="/images/blog/2024/eric-ma-blog-post-header.webp" type="image/webp">
  <img src="/images/blog/2024/eric-ma-blog-post-header.jpg" alt="speakers graphic." />
</picture>
</figure>

### Eric Ma

<figure class="align-center">
<picture>
  <source srcset="/images/blog/2024/eric-ma-blog-post-header.webp" type="image/webp">
  <img src="/images/blog/2024/eric-ma-blog-post-header.jpg" alt="An illustration of a diverse group of people collaboratively analyzing and discussing code displayed on a large transparent screen, surrounded by books, plants, and abstract symbols, set against a vibrant gradient background." />
</picture>
</figure>

[Eric's talk](human-dimension-clean-documented-data-science-code.html) emphasized the importance of readability, user-friendly installation, and thorough documentation in data science projects. He shared personal experiences and best practices to highlight how these elements enhance collaboration and the overall impact of scientific work.

The "Roast Your Repo" exercise was my favorite part of this talk. Eric invited attendees to critique a repository from his thesis. We discussed the repo's shortcomings, which were highlighted by a lack of documentation, testing, and modularity. Often when we are talking about making code and workflows reusable, small non-technical things like fleshed-out README files that describe the repo contents and file names make a huge difference in reusing the work.

### Melissa Mendonça
Melissa Mendonça shared her personal journey into open source. I really appreciated the discussion of her transition from academia to a career focused on open source scientific software. It can be hard and brave to leave academia- a difficult experience I've recently endured in my career. Melissa emphasized the importance of the scientific Python ecosystem, showcasing how foundational libraries like NumPy and SciPy form the basis for a vast and interconnected network of specialized domain-specific projects.

Melissa also discussed the challenges and benefits of working within a volunteer-driven community, emphasizing the need for clear governance, transparent decision-making, and a thoughtful approach to engaging with software users. Topics that pyOpenSci cares a lot about. Melissa outlined her interpretation of open science, emphasizing transparency, reproducibility, accessibility, and the need for independent investigation of research results.

### Rowan Cockett
Rowan Cockett challenged us to rethink how we publish scientific work and reimagine what scientific publications can look like. He showcased [Myst Markdown](https://mystmd.org/) and his work building [CurveNote](https://curvenote.com/).

Rowan also emphasized the massive potential to seamlessly integrate software, data, and dynamic, data-driven stories into a single, accessible platform and the inefficiencies of traditional publishing, including the need to reformat work for different platforms, lengthy peer review processes, and the disconnect between software, data, and narrative. I appreciated his focus on shifting toward a collaborative, automated, and iterative approach to publishing which really draws inspiration from continuous software development principles of open-source software.

We really do have an opportunity to make scientific communication more dynamic, reproducible, and impactful—fostering real collaboration and faster progress in research.

## What we taught

After the talks on day 1, participants enjoyed 4 days ot learning a suite of skill s



### Write better, cleaner scientific code

How to [write better, cleaner code](https://www.pyopensci.org/lessons/clean-modular-code/intro-clean-code.html#intro-clean-code) which includes making your code more [DRY](https://www.pyopensci.org/lessons/clean-modular-code/python-dry-modular-code.html), [expressive](https://www.pyopensci.org/lessons/clean-modular-code/python-write-expressive-code.html) and following [established  Python style guidelines](https://www.pyopensci.org/lessons/clean-modular-code/python-pep-8.html) such as Pep 8. We introduced [strategies to writing better code](https://www.pyopensci.org/lessons/clean-modular-code/clean-code-present.html). And finally, we talked about using strategies such as [functions](https://www.pyopensci.org/lessons/code-workflow-logic/intro.html) and [tests and checks](https://www.pyopensci.org/lessons/code-workflow-logic/python-function-checks.html) with in functions to make your code more robust

### Create your first Python package

Day two was about [Python Packaging](https://www.pyopensci.org/python-package-guide/tutorials/intro.html#what-is-a-python-package): Guidance on creating and distributing Python packages, including best practices for packaging and sharing code. We taught learners how to make the code that they write reusable and [installable in Python environments](https://www.pyopensci.org/python-package-guide/tutorials/installable-code.html) using [Hatch](https://www.pyopensci.org/python-package-guide/tutorials/get-to-know-hatch.html). We also covered how to add [metadata to your package using a pyproject.toml file which is the modern standard for Python packaging](https://www.pyopensci.org/python-package-guide/tutorials/pyproject-toml.html), and a [license](https://www.pyopensci.org/python-package-guide/tutorials/add-license-coc.html).

### Share your code

[Reasons to share your code](https://www.pyopensci.org/lessons/publish-share-code/share-code.html)

[Adding a doi using Zenodo.](https://www.pyopensci.org/lessons/publish-share-code/cite-code.html)

[Publishing your code both via a journal like JOSS](https://www.pyopensci.org/lessons/publish-share-code/publish-code.html) and through the pyOpenSci peer review partnership with JOSS. and also making it ["published" and accessible using PyPI](https://www.pyopensci.org/lessons/publish-share-code/publish-code.html#pypi) and conda-forge.

- Summarize the primary focus areas or skills covered during the event.
- Highlight relevance to open science challenges or community needs.
Tip: you can publish a package to PyPI using Hatch as well. Check out the tutorial

## What we learned
- Discuss 1-2 lessons learned from organizing or hosting the event.
- Frame these as goals for improvement or ideas for future events.


## Resources and Takeaways

Most of the resources used to teach are published on our [pyOpenSci lessons website](https://www.pyopensci.org/lessons).  packaging guide...

Our packaging guide is also being activiesly translated to Spanish and Japanese.

## 6. Looking Ahead (Future Vision)

- Connect the event to pyOpenSci’s broader mission.
- Share teasers for upcoming events or initiatives.

## Conclusion (Call-to-Action)
- Thank the community for their participation and support.
- Encourage readers to join future events, subscribe for updates, or share their ideas.
- Pose a question to engage readers (e.g., “What topics would you like to see in our next training?”).
