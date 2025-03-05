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


The week was packed with inspiring keynotes, hands-on workshops, and informal office hours, where participants connected and reflected on their learning. It was an incredible celebration of the amazing work happening across our community!

We kicked the event off on Monday, October 28, with a morning of KeyNote talks headlined by **Eric Ma, Melissa Mendonça, and Rowan Cockett**. The Monday talks aligned perfectly with the training events held Tuesday through Friday. The talks set the stage for a truly engaging week of learning together.

## Quotes to add

What did you enjoy most:

> I love the engagement…how people were attended to individually despite being in a group setting. I enjoyed that learning could happen in a personal and group setting.
{: .highlight-quote }


> Getting to know about pyOpenSci as an organization and resource. Also, practical, professional tools that I can use right away.
{: .highlight-quote .magenta }



> [I enjoyed....] Leah's teaching style, the platform, and the tutorials. I felt very ease learning together with the pyOpenSci community.
{: .highlight-quote .magenta }

What topics were most valuable


This quote really made my week. My motivation for building pyOpenSci is about community and making open source and data science more accessible to learners from all kinds of backgrounds.

> Thank you so much Leah for your amazing teaching! You are so kind, patient and nice with the students, you make this community inclusive and safe for new learners.
{: .highlight-quote .magenta }

## Acknowledging our amazing team

<figure class="align-center">
    <a href="/images/events/fall-festival-thank-you.png">
    <img src="/images/events/fall-festival-thank-you.png" alt="Fall Festival Team">
    </a>
    <figcaption>Our incredible team of instructors, helpers, and keynote speakers. Thank you for making the 2024 Fall Festival a success!</figcaption>
</figure>

I want to extend our heartfelt gratitude to all the instructors, helpers, and keynote speakers who contributed their time and expertise to make this event truly special. Your dedication, energy, and enthusiasm ensured an engaging and impactful experience for everyone involved!

A special shout-out to Carol Willing, Jeremiah Paige, and Jonny Saunders, who supported multiple workshops and co-developed and reviewed many of the lessons now published online. We’re so lucky to have such an incredible community. 🫶

## What Made This Event Special
- Share the vibe of the event, emphasizing what stood out (e.g., collaboration, energy).
- Include 1-2 quotes from participants or speakers that capture the atmosphere.

## Keynote talks

<figure class="align-center">
    <a href="/images/events/fall-festival-blog-keynote-speakers.png">
    <img src="/images/events/fall-festival-blog-keynote-speakers.png" alt="">
    </a>
</figure>


### Eric Ma: The human side of clean code

[Eric's talk](human-dimension-clean-documented-data-science-code.html) highlighted how simple practices like clear documentation, readable code, and user-friendly installation can amplify the impact of data science projects.

A standout moment? The "Roast Your Repo" exercise! Eric invited attendees to critique a repository from his thesis, showcasing the power of small improvements—like adding a fleshed-out README or modularizing code—to make research reusable and collaborative. It was a fun, hands-on way to explore how the human touch transforms code quality. And let's be honest, we all likely have one of those code bases or repos from our early degrees! I sure do (and it's not even on GitHub!).

### Melissa Mendonça: From academia to open source

Melissa shared her inspiring journey from academia to a career rooted in open-source software development. She reflected on the bravery it takes to step into the unknown—something I deeply resonate with—and celebrated the power of the scientific Python ecosystem. She explained that libraries like NumPy and SciPy are the building blocks that enable countless domain-specific projects.

Melissa also explored the challenges of working in volunteer-driven communities, stressing the importance of clear governance and transparent engagement with users. Her emphasis on open science principles—transparency, reproducibility, and accessibility—left a lasting impression.

### Rowan Cockett: Rethinking scientific publishing

Rowan challenged us to imagine a world where scientific publications are as dynamic as the research they describe. He introduced [Myst Markdown](https://mystmd.org/) tools that integrate code, data, and narrative seamlessly. He also talked about the company that he co-founded, [CurveNote](https://curvenote.com/), which is poised to revolutionize how scientific papers are published. Goodbye static papers, hello interactive papers that tell stories while allowing readers to interact with graphics and data directly.

Yes, data!

His vision of collaborative, automated, and iterative publishing—drawing from open-source software principles—was truly inspiring. By shifting away from traditional, static publishing methods, Rowan reminded us that we have the tools to make science more accessible, reproducible, and impactful. Talk about a game-changer!
## What We Taught

<figure class="align-center">
    <a href="/images/events/people-table-working.svg">
    <img src="/images/events/people-table-working.svg" alt="">
    </a>
</figure>

Over four action-packed days, participants engaged in interactive workshops designed to build skills and confidence in writing, sharing, and publishing scientific code. Using SpatialChat, we created a dynamic and collaborative environment that fostered real-time learning and group discussions—something you just can’t replicate in traditional video call platforms.

The curriculum followed a clear narrative:
**Write better code → Package it → Share it → Tell an interactive data story.**

Each day introduced new tools and practices to help participants transform their workflows and make their science more accessible, reusable, and impactful. Here’s how we approached it:

### Day 1: Write Better, Cleaner Scientific Code

We started by diving into [writing better, cleaner code](https://www.pyopensci.org/lessons/clean-modular-code/intro-clean-code.html#intro-clean-code). Participants explored how to make their code:
- [DRY (Don’t Repeat Yourself)](https://www.pyopensci.org/lessons/clean-modular-code/python-dry-modular-code.html) and modular,
- [Expressive](https://www.pyopensci.org/lessons/clean-modular-code/python-write-expressive-code.html) and easy to understand,
- [Consistent with Python style guidelines](https://www.pyopensci.org/lessons/clean-modular-code/python-pep-8.html) like PEP 8.

We introduced strategies to improve robustness, such as creating [functions](https://www.pyopensci.org/lessons/code-workflow-logic/intro.html) and using [tests and checks](https://www.pyopensci.org/lessons/code-workflow-logic/python-function-checks.html) to validate outputs.

### Day 2: Create Your First Python Package

On Day 2, participants learned how to turn their code into reusable, installable Python packages. I've taught Python packaging with Hatch now several times over the past year and everyone consistently loves having an all-in-one tool! They also pick it up quickly, which means the tool is accessible and usable - a win-win! This was one person's response to their favorite day:

The packaging part. I thought Hatch was really useful and I liked the fact that it can do a couple of things as one tool.
{: .highlight-quote }


The packaging day covered:
- [An overview of Python packaging for beginners](https://www.pyopensci.org/python-package-guide/tutorials/intro.html#what-is-a-python-package),
- Making code [installable in Python environments](https://www.pyopensci.org/python-package-guide/tutorials/installable-code.html) with tools like [Hatch](https://www.pyopensci.org/python-package-guide/tutorials/get-to-know-hatch.html),
- Adding package metadata using a [pyproject.toml file](https://www.pyopensci.org/python-package-guide/tutorials/pyproject-toml.html),
- Including a [license](https://www.pyopensci.org/python-package-guide/tutorials/add-license-coc.html) to define how others can use and share your Python package.

### Day 4: share your Python code (with everyone!)

On Day 4, we empowered participants to share their work more broadly. Many learners enjoyed this day which was cool for me because it was entirely new content I had never taught before but thought was so important to any scientist building software and writing code. Below we asked them what day was their favorite. The theme of this response was common in the feedback:

>  Definitely day 4 -> making package installable via PyPI by using hatch (one often writes code, but never gets to this stage)
{: .highlight-quote .magenta }

 Key share your code topics included:
- [Why sharing code matters](https://www.pyopensci.org/lessons/publish-share-code/share-code.html),
- [Adding a DOI to code using Zenodo](https://www.pyopensci.org/lessons/publish-share-code/cite-code.html),
- Publishing through [JOSS](https://joss.theoj.org/) or the [pyOpenSci peer review process](https://www.pyopensci.org/about-peer-review/index.html),
- Publishing code on [PyPI](https://www.pyopensci.org/lessons/publish-share-code/publish-code.html#pypi) using Hatch.
- NOTE: we also have a [publish to conda-forge lesson](https://www.pyopensci.org/python-package-guide/package-structure-code/publish-python-package-pypi-conda.html).

<figure class="align-center">
    <a href="/images/events/people-table-working-2.svg">
    <img src="/images/events/people-table-working-2.svg" alt="">
    </a>
</figure>

### Day 5: Interactive data storytelling with Quarto & GreatTables

We wrapped up with an introduction to [Quarto](https://quarto.org/), a powerful tool for creating dynamic, interactive scientific narratives. Participants explored how to integrate code, data, and findings into a cohesive story—transforming static publications into living, engaging documents.

We also showcased [Quarto Live](https://quarto.org/docs/live/), which lets users dynamically interact with code in the browser. For educators, this opens exciting opportunities to create lessons where students can learn directly in a live coding environment. How cool is that?

Fun fact: GreatTables is currently [under review by pyOpenSci](https://github.com/pyOpenSci/software-submission/issues/202) with the plan to be fast tracked through the Journal of Open Source Software (JOSS) after the pyOpenSci review through [our JOSS partnership](https://www.pyopensci.org/software-peer-review/partners/joss.html).


## Reflections on the 2024 pyOpenSci Fall Festival

The 2024 Fall Festival was an incredible learning experience for pyOpenSci! One of the standout successes was our last-minute switch to using Spatial Chat as our virtual platform. Participants loved how easy and intuitive it was to use, and it quickly became a seamless way to foster interaction and collaboration.

> I liked the use of software like spatialchat, where you could break out into groups to work on things. This makes everything a lot more casual and fosters networking.
{: .highlight-quote }

We were thrilled to offer 16 scholarships for this event, making the festival accessible to a diverse group of attendees. While not all scholarship recipients could attend or verbally participate—likely due to work or other responsibilities—their presence enriched the event in many ways. This highlighted the need for a thoughtful addition of "quiet" tables or spaces for future events, ensuring all participants can engage at their comfort level.

Another valuable insight we gained is that late October can be a busy time for students due to classes and other daytime commitments. This feedback will guide us to explore timing options for future events, potentially outside of traditional school sessions, to better accommodate all participants.

By reflecting on these lessons, we’re excited to continue improving our events to maximize engagement and accessibility for all community members. We look forward to building on this success for future festivals!

## <i class="fa-solid fa-rocket"></i> What's next for pyOpenSci

Most of the resources used to teach are published on our [pyOpenSci lessons website](https://www.pyopensci.org/lessons). We’re actively working on updates to incorporate additional content still housed in Google Docs, ensuring it’s accessible to all.

Looking ahead, we’re excited to connect these events more deeply with pyOpenSci’s broader mission of supporting the open-source software that scientist need to make their work open.

We are looking forward to next spring and summer, when we'll be at PyCon 2025 and SciPy 2025, holding sprints giving talks, and connecting with you (I hope!) along the way!

Key an eye out on our blog and events page for upcoming events, new initiatives, and even more opportunities to engage with the vibrant pyOpenSci community. <i class="fa-solid fa-hand-sparkles"></i>


## <i class="fa-solid fa-hands"></i> Wrap up
Thank you to everyone who participated, supported, and helped make the 2024 Fall Festival a success! Your enthusiasm and feedback inspire us to continue creating events that bring value and inclusivity to the open science community.

We’d love to hear from you—what topics or skills would you like to see covered in our next training? Share your ideas, and help us shape the future of pyOpenSci events!


<div class="notice" markdown="1">

## Support open science: Get involved with pyOpenSci

* Volunteer to be an editor in our peer review process
* Submit a scientific Python package to pyOpenSci for peer review
* Donate to pyOpenSci to support scholarships for future training events and the development of new learning content.
* check out our [volunteer page](/volunteer.html) for other ways to get involved.

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
