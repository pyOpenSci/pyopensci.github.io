---
layout: single
title: "Ship It Cohort One: What We Built, What We Learned, and What's Next"
excerpt: "pyOpenSci recently wrapped up the first cohort of Ship It: Python Packaging in the Generative AI Era — a 10-day async course that took 55 university researchers from zero to a published Python package. Here's what we built, what participants said, and what's coming next."
author: "Leah Wasser"
permalink: /blog/ship-it-cohort-one.html
header:
  overlay_image: images/headers/pyopensci-floral.png
categories:
  - blog-post
  - training
  - community
toc: true
classes: wide
comments: true
last_modified: 2026-05-04
---

Python packaging can be overwhelming — standards and tools evolve quickly, and the terminology is technical. To address these challenges, pyOpenSci recently launched **Ship It: Python Packaging in the Generative AI Era**. This 10-day asynchronous course connects university researchers and learners with open source experts, guiding them through the process of transforming code into a published, tested, and documented package — while weaving in a framework for using generative AI thoughtfully. The curriculum is informed by our community-driven resources, including the [pyOpenSci Python packaging guide](https://www.pyopensci.org/python-package-guide/) and our beginner-friendly [packaging tutorials](https://www.pyopensci.org/python-package-guide/tutorials/create-python-package.html).

## What is Ship It?

Ship It is a 10-day, fully online, asynchronous cohort course that takes you from zero to a published Python package — with tests, documentation, and automated workflows built on the [pyOpenSci packaging template](https://github.com/pyOpenSci/pyos-package-template).

The course was designed as an accessible entry point for researchers, academics, research software engineers, and anyone who wants to package and share their work using modern best practices. Participants learn how to use packaging tools like [Hatch](https://hatch.pypa.io/) for environment management and task running, [uv](https://docs.astral.sh/uv/) for fast dependency resolution, and [pytest](https://pytest.org/) for testing — all inside GitHub Codespaces, so nobody gets stuck on local setup.

Each weekday, a new module drops, made up of videos and text lessons. Each week, participants complete interactive "milestones" in which they share their own package or day's work and then test a classmate's. This project-based learning approach mirrors the spirit of open source collaboration. Engagement was also encouraged by a gamified points system, where participants earned points working toward a final LinkedIn badge and completion certificate. For many, the community aspect of the course was an unexpected — but carefully designed — highlight.

In response to "what was your favorite part of the course", one participant said:

{% include pyos-blockquote.html quote="Probably the community part. Don't misunderstand me, the lectures are great, clear and well structured. Easy to follow. But interacting with the community, testing each other's code, has been sincerely great." class="highlight" %}

## Learning from the people who build the tools

Sprinkled throughout the course were interviews with open source leaders like Carol Willing (Jupyter, CPython) and Melissa Mendonça (NumPy, Napari), so learners got more than technical skills — they received insights from the people building the tools they use every day.

The async format was a deliberate choice. pyOpenSci has run synchronous training events for years, but fixed timing limits who can attend, leaves little room for digestion, and tends to keep engagement within single institutions. An async cohort format gives participants flexibility to learn at their own pace while still building real connections across universities.

We also wove a thread of responsible AI throughout the course. We've been thinking deeply about this topic for a few years, and we wanted to offer a clear framework for using AI tools in ways that grow your skills and sustain — rather than drain — the open source ecosystem.

## Ship It by the numbers

This first cohort was generously sponsored by Open Source at Stanford University and supported by the [CURIOSS OSPO network](https://curioss.org/), making it free for all 55 participants.

- **55** registered participants from universities across the US
- **27** videos across 10 modules
- **6** gamified milestones — 14 participants completed all of them
- **~30** participants created and published a Python package — for many, their first ever
- Sponsored by [Stanford University](https://opensource.stanford.edu/) and supported by the CURIOSS OSPO network

It was incredible to see that ~30 people published a Python package, many for the very first time. But the numbers only tell part of the story.

## What participants experienced

Ship It was designed to be hands-on from day one — and that showed in the outcomes. One participant, a structural biologist,was able to clean up a package they had been working on and share it at her departmental retreat. She shared her story with us:

{% include pyos-blockquote.html quote="This week I presented my Python package 'PDBCleanV2' at the Structural Biology Departmental Retreat. It was well received by attendees and, overall, a great experience. I wanted to thank you because pyOpenSci was a great influence in getting my package in shape." author="Fatima Pardo, Structural Biologist" class="highlight" %}

That's the goal. Real code, real learning, real impact.

### The community made it real

The milestone structure pushed participants to engage with each other's work — and that turned out to be one of the most talked-about parts of the course.

{% include pyos-blockquote.html quote="I finally caught up on the content of the workshop, and I have been loving it. Some concepts used to seem very intimidating, but I liked how they were explained clearly. I have also been enjoying the community aspect, checking other people's packages and getting comments on mine." class="highlight" %}

### Structure and clarity mattered

Participants consistently called out the clear, step-by-step progression as a highlight. Going from "what even is a `pyproject.toml`" on Day 2 to "I just published my package to TestPyPi on Day 3 allowed for big early wins that helped people stay oriented and keep moving.

{% include pyos-blockquote.html quote="My favorite part of the course has been the step-by-step guidance and the hands-on experience of building a package. I also really liked the videos where the mentor shares the challenges they faced — it made the process feel more real and relatable. Testing classmates' packages was another highlight, as it helped me learn from others and see different approaches." class="highlight" %}

{% include pyos-blockquote.html quote="Loved how interactive the workshop was, and how responsive the instructors were. The content was great, and the videos made it so easy to understand the concepts. And having the text below helped me when I wanted to review." class="highlight" %}

### Hands-on from day one

Learners also commented on how the course broke down  technical packaging terms and content into easy to digest lessons.
Imposter syndrome is real and pyOpenSci works hard to break down
those barriers for everyone.

{% include pyos-blockquote.html quote="I am very motivated. The workshop made me less afraid of certain aspects of creating the package; the explanations have been very clear and to the point. I am planning to implement what we learned on my own package, and I feel confident that I can do it." class="highlight" %}

### Honest takes on GenerativeAI

Several participants specifically called out the AI content — not just the technical pieces, but the perspective. The responsible AI framing resonated, as did the expert interviews.

In response to a question about the Generative AI content, one participant had this to say about the associated Generative AI milestone activities:

{% include pyos-blockquote.html quote="[the genAi module] It was an interesting session. I got more than I expected, in particular from the milestone. Seeing how other people interacted with AI and what we learned from it. I think it is important to have these discussions." class="highlight" %}

GenerativeAI has such a profound impact on all aspects of writing code right now. We encouraged participants to experiment with using GenAI tools to write tests and implement "defensive code strategies" in their package modules and then reflect and share the outcomes of this effort with each other.

### The course design flexibility made it accessible

{% include pyos-blockquote.html quote="I attended a conference during this course (full day for two days) and was still able to complete the course once the conference ended. I appreciate the structure of the course, and the flexibility was also needed." class="highlight" %}

## A window into the Python ecosystem — and the AI conversation

Ship It was about more than packaging mechanics. Through interviews with Python leaders like Carol Willing, CPython core developer, and Melissa Mendonça from Quansight, participants got an inside look at the Python ecosystem that most of us simply aren't exposed to in traditional academic environments.

That included an honest conversation about AI — specifically, how the explosion of generative AI is placing real pressure on the open source human ecosystem. The people maintaining the tools you rely on are volunteers. That context matters.

The course also explored how to use AI thoughtfully — as a tool for building more robust test suites, writing defensive code, and deepening your own understanding. Not something to become reliant on, but something to grow with.

## What we learned from cohort one

The flexibility of the async format resonated more than we expected. Participants were logging in at 2 am, at 7 am, whenever it fit their lives and time zones.

My favorite part of running this course was the cross-institutional engagement. Learners at Stanford, Berkeley, UC Davis, UC Santa Barbara, Harvard, Wisconsin, and universities across the country were connecting with each other in ways that simply don't happen within a single institution. That's exactly what pyOpenSci is built for — bringing the broader community together rather than keeping expertise siloed.

That community connection extended to the experts, too. Participants learned directly from the people building the tools they use every day through real conversations. That kind of engagement is what makes pyOpenSci's trainings shine, and it's hard to replicate.

For pyOpenSci, the async cohort model also supports our sustainability goals. Running the course multiple times for different groups, at their own pace, means we can reach more people — and build toward long-term sustainability by doing what we do best: making packaging and sharing code more accessible so researchers can spend more time solving the world's greatest challenges and less time fighting with tooling.

## Bringing Ship It to your institution

If you're running an OSPO, a research computing program, or any initiative that supports academics who write and share code, ShipIt was built with you in mind. The course gives your community direct access to modern Python packaging practices, responsible AI frameworks, and — crucially — real connections to the people building the tools within the open source ecosystem.

[Click here to learn more about our partnership program.]({{ site.baseurl }}/learn-universities-labs.html). We'd love to talk with you about how we can support your community.

## What's next

The first cohort proved the model works. Researchers published packages, made connections across institutions, and left with skills and confidence they didn't have before. We're building on that for fall 2026.

Keep an eye on our [events page](https://www.pyopensci.org/events.html) for cohort announcements.
