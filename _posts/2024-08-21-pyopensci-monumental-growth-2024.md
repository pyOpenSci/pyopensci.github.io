---
layout: single
title: "It's Been a Long Short Road: The Monumental Past 2 Years of pyOpenSci"
excerpt: "Learn about what pyOpenSci has accomplished in the last two years, including the evolution of our packaging guide, the expansion of our peer review process, and the vibrant community we've built."
author: "Leah Wasser"
permalink: /blog/what-pyopensci-accomplished-with-two-years-of-funding.html
header:
  overlay_image: images/headers/pyos-two-years.png
  overlay_filter: rgba(20, 13, 36, 0.3)
categories:
  - blog-post
  - community
classes: wide
toc: true
comments: true
---

## It's been two years since I started working full-time on pyOpenSci

I have been working full-time building pyOpenSci for two years now, thanks to funding from the [Sloan Foundation](https://sloan.org/) and [CZI (Chan Zuckerberg Initiative)](https://chanzuckerberg.com/). pyOpenSci has come SO FAR in two years.

It's time to take a breath and celebrate everything the pyOpenSci community has accomplished. Before we move on to the next big thing—[our pyOpenSci Fall Festival](https://www.pyopensci.org/events/pyopensci-2024-fall-festival.html) (more on that below)—I want to take a moment to reflect on:

* where we've been,
* what we've accomplished, and
* the incredible community of practice that we've built.

I'll wrap up by discussing what's next for pyOpenSci.

## A brief history of pyOpenSci

I founded pyOpenSci in 2018 because I saw the pain points that scientists were
facing in creating open, reproducible workflows using Python. My experience
inspired me to establish a vibrant, inclusive pyOpenSci community of practice
fueled by making open science best practices more accessible to scientists.

pyOpenSci makes open science more accessible by [developing educational resources](/learn.html), [running training events](/events/index.html), running an [open software peer review process](/about-peer-review/index.html) and [partnering with other communities](/partners.html). From humble beginnings characterized by small community meetings, pyOpenSci has blossomed into a thriving community marked by:

* a robust editorial team,
* hundreds of contributors, and
* numerous valuable community partners and friends.

Our software peer review program has seen **over 50 packages**; we've [accepted 35 scientific Python packages into our growing library of trusted scientific Python packages](https://www.pyopensci.org/python-packages.html) and have **17 packages** in [active stages of review](https://github.com/orgs/pyOpenSci/projects/7) as I write this post.

[<i class="fa-solid fa-wand-magic-sparkles"></i> Learn more about how pyOpenSci started <i class="fa-solid fa-wand-magic-sparkles"></i>](/blog/how-pyopensci-got-started.html)
{: .button }

<figure>
    <a href="/images/pyopensci-general/pyopensci-flower-pillars.png">
    <img src="/images/pyopensci-general/pyopensci-flower-pillars.png" style="max-width:100%" alt="A flower petal image with three flower petals and a flower center. In each petal, there is text. The first petal says software peer review; the second says community partnerships; the third says education & training. The center circle of the flower says diverse, inclusive community.">
    </a>
    <figcaption> pyOpenSci supports scientists developing open-source software through three programs: 1) peer review of scientific software, 2) community partnerships, and 3) education & training. A diverse and inclusive community that cares about the open-source software that drives open science supports all three of these programs.
    </figcaption>
</figure>

### pyOpenSci and iterative, data-driven program design

pyOpenSci's development and design is data-driven. I collected survey data
from scientists and Pythonistas at meetings and conferences to identify community pain points and needs. I used this data to inform the iterative development of pyOpenSci programs, events, and resources and to define pyOpenSci's mission, vision, values, and structure.

The survey data I've collected shows what I've seen in the classroom-- scientists face many challenges when
processing, analyzing, and sharing their workflows. While reproducible
science is critical to accelerating science, sharing and publishing code is hard.

This blog post includes quotes and data I've collected over the past 5+ years; these data have shaped the vibrant community of practice that pyOpenSci is today.

<figure>
    <a href="/images/pyopensci-general/pyopensci-iterative-evaluation-program-design.png">
    <img src="/images/pyopensci-general/pyopensci-iterative-evaluation-program-design.png" style="max-width:60%" class="align-center" alt="A round graphic that shows the cycle of iterative program development. The pyOpenSci logo is at the top left. The graphic title reads iterative program development. The first step says, 'A good idea gets better and better', the second says  'survey community needs,' the third says, 'evaluation based program design,' and the fourth says, 'evaluate results and make iterative improvements'. In the center is th">
    </a>
    <figcaption> Iterative data-driven program design is a fusion of evaluation and program development that utilizes community feedback to build a program using an iterative and community-responsive approach. You test approaches and collect data about the program's effectiveness. This type of development allows an organization to grow dynamically, following community needs.
    </figcaption>
</figure>

<div class="notice" markdown ="1">

### Responses to the question: *How could pyOpenSci help you with your science, code, and software?*
{: .not_toc}

{% include pyos-blockquote.html quote="[*I want to know...*] What are the best practices for sharing the code?" author="Anonymous" event="AGU 2019 Townhall" class="highlight" event="2019 AGU Town Hall" %}

{% include pyos-blockquote.html quote="[*I want to... *] Streamline the development of good quality, socially responsible, and easily shareable software." author="Anonymous" event="AGU 2019 Townhall" class="highlight magenta" %}

{% include pyos-blockquote.html quote="[*I want more *] Bullet-proof, well-documented packages for Earth science." author="Anonymous" event="AGU 2019 Townhall" class="highlight" %}

Many earth scientists attend AGU. It's a different crowd than who you meet
at the SciPy meetings.
</div>

### Why pyOpenSci tackled Python packaging

pyOpenSci's design is also based on our experiences developing software peer review guidelines for Python packages. We [interact daily with scientific software maintainers](https://pyopensci.discourse.group/t/api-reference-building-locally-but-not-on-rth-missing-path/368/7). According to our surveys, 80% of our maintainers and reviewers identify strongly as scientists.

As we developed our [peer review guide]((https://www.pyopensci.org/software-peer-review/)), it became clear that a beginner-friendly packaging guide was essential to support scientists in sharing their code because:

1. [Our pre-review software checks](https://www.pyopensci.org/software-peer-review/how-to/editor-in-chief-guide.html#editor-checklist-template) require basic package infrastructure. Scientists must be clear about the core elements of a Python package.
1. We want to help scientists make their packages more maintainable over time by adding tests and [continuous integration (CI)](https://www.pyopensci.org/python-package-guide/tests/tests-ci.html#run-tests-with-continuous-integration) checks that run when someone submits a suggested change (or a pull request). We want to set scientists up for success.
1. We realize that Python packaging is a thorny ecosystem to navigate. I knew that pyOpenSci could help file down those thorns.

<div class="notice" markdown ="1">
### *"How could pyOpenSci help you with your science, code, and software?"*

{% include pyos-blockquote.html quote="Training for people who can code for themselves but want to start developing software for others. Topics include style, documentation, testing, git, etc." author="Anonymous" event="AGU 2019 Townhall" class="highlight magenta" %}

</div>

#### Helping scientists navigate a complex and difficult-to-understand Python packaging ecosystem

The packaging ecosystem has evolved rapidly. Numerous tools and approaches are available to create Python packages. Further, recent changes to ecosystem standards have led to an explosion of packaging tools like [Hatch](https://hatch.pypa.io/latest/), [Flit](https://flit.pypa.io/en/stable/), [PDM](https://pdm.fming.dev/latest/), and [Poetry](https://python-poetry.org/); other tools like Pixi and Rye are also on the horizon. Scientists often feel overwhelmed by the sheer number of options and have begged for clear guidance for years.

<div class="notice" markdown ="1">

<h3 class="no-toc"> QUESTION: "How could pyOpenSci help you with your science, code, and software?"</h3>


{% include pyos-blockquote.html quote="[*I want pyOpenSci to*] clarify Python packaging. There are too many different mechanisms floating around..." author="" event="2021 SciPy BoF" class="highlight magenta" %}

</div>

<figure>
    <a href="{{ site.baseurl }}/images/python-packaging/pyopensci-python-package-tools-word-cloud-2024.png"><img src="{{ site.baseurl }}/images/python-packaging/pyopensci-python-package-tools-word-cloud-2024.png" style="max-width:80%" alt="This is a giant word cloud with dozens of words. The biggest words are Build, Poetry, Conda, Setuptools, Sphinx, pip, Hatch, Mamba, Twine PyPI, venv, and GitHub Actions."></a>
    <figcaption>This word cloud represents around 100 responses to the question: What Python packaging tools do you most often use? It demonstrates both 1) how many tools there are to choose from and 2) how divided the ecosystem is in terms of which tools they are using. Yes, a few tools there aren't explicitly Python packaging tools. :) </figcaption>
</figure>

There are some excellent, more advanced guides and tutorials available now, such as [PyPA's packaging tutorial](https://packaging.python.org/tutorials/) and the [scientific Python development guide](https://learn.scientific-python.org/development/). However, our resources serve a different audience.

1. The people using our resources are often folks who find the packaging ecosystem to be overwhelming.
1. Scientists are also only sometimes familiar with various terms. For example, it's easy to confuse a build backend with a build frontend, especially when both have the word "hatch" in them (e.g., Hatch vs. Hatchling).
1. Scientists often want to avoid deciding what tools to use. pyOpenSci intends to alleviate this burden and provide a robust and practical approach.

From a beginner's perspective, every decision is a potential opportunity to go down the wrong path, adding cognitive load. Armed with a clear understanding of the packaging pain points, I knew that pyOpenSci could simplify the packaging journey for scientists.

If you want to learn more, my [talk at PyCon dove into the Python packaging challenges of too many options and cognitive overload.](/blog/python-packaging-friends-dont-let-friends-package-alone.html)

### pyOpenSci guided the community towards a single way to create a Python package in under a year

In just under a year, pyOpenSci created a [comprehensive packaging guide](https://www.pyopensci.org/python-package-guide/) that includes an end-to-end Python packaging / share your code tutorial that walks scientists through creating a package and publishing it to both [PyPI](https://www.pyopensci.org/python-package-guide/tutorials/publish-pypi.html) and [conda-forge](https://www.pyopensci.org/python-package-guide/tutorials/publish-conda-forge.html) using [Hatch](https://www.pyopensci.org/python-package-guide/tutorials/get-to-know-hatch.html). Together, the pyOpenSci community built consensus around which packaging approaches should be adopted as best practices. Building consensus around packaging decisions was challenging, but we were successful because we focused on our users first. We decided on which tools we thought would create the best packaging experience for scientists creating pure Python packages.

[Check out the GitHub pull requests for packaging guide pages](https://github.com/pyOpenSci/python-package-guide/pulls?q=is%3Apr+sort%3Acomments-desc+is%3Aclosed) if you're curious about the feedback and discussions that we had when writing the packaging guide. Notice the number of comments on the most popular PRs. The sheer volume of comments on some of the early PRs associated with packaging build tools speaks to the various issues, complexity, and decisions we needed to make.

## **Building Python packaging consensus and developing the pyOpenSci Python Packaging Guide**

The success of our Python Packaging Guide is due to extensive community input.
We directed Python Packaging Guide contributors towards the objective of simplifying Python packaging for beginners. Focusing on a specific audience allowed contributors to make decisions about the content in the Guidebook more easily. It also ensured that the outcome text is easy to understand for beginners and for scientists who prefer to avoid delving into packaging nuances. In each review, we made sure to include a diverse group of reviewers, including:

* **packaging tool maintainers:** We asked each maintainer from Flit, PDM, Hatch, and Poetry to provide feedback on our overviews of their tools,
* **[PyPA](https://www.pypa.io/en/latest/) members** who have already developed packaging resources that serve the broader Python community,
* **core scientific Python community members** who are maintaining tools like Matplotlib, Numpy, and Pandas that require more technical complex builds, and
* **scientists with varying levels of packaging expertise:** This group is most important as packaging beginners provide the lens of what is confusing and ensure that the technical content is more beginner-friendly.
The truly collaborative effort of creating the Python Packaging Guide resulted in a beginner-friendly and accurate guide that the pyOpenSci community now maintains and continuously updates.

It was essential to have a mix of content reviewers with a range of packaging expertise to make the guide accurate and accessible. Some were packaging experts building packaging tools, and others were beginners, the audience for whom we wrote the guide.

### What's in the pyOpenSci Python Packaging Guide?

The pyOpenSci packaging guide provides an overview of the Python packaging ecosystem to support users who want to understand the packaging landscape. These users may want to decide on their own which tools best serve their needs. The guide also defines core packaging terms that can make the ecosystem seem more complex than it is, such as:

* [build backend](https://www.pyopensci.org/python-package-guide/package-structure-code/python-package-build-tools.html#build-back-ends),
* [build frontend](https://www.pyopensci.org/python-package-guide/package-structure-code/python-package-build-tools.html#python-package-build-front-ends),
* [wheel](https://www.pyopensci.org/python-package-guide/package-structure-code/python-package-distribution-files-sdist-wheel.html#wheel-whl-files), and
* [sdist](https://www.pyopensci.org/python-package-guide/package-structure-code/python-package-distribution-files-sdist-wheel.html#source-distribution-sdist).

Our Python Packaging Guide aims to translate the technical jargon that gets in the way of new users having a successful packaging experience. Over time, we
hope that this will make packaging less confusing and more accessible to more people.

<figure>
 <a href="{{ site.baseurl }}/images/python-packaging/"><img src="{{ site.baseurl }}/images/python-packaging/publish-python-package-pypi-conda.png" alt="Diagram that has the pyOpenSci logo in the upper left-hand corner with the pyOS flower. The diagram has four steps for making a package: create package structure, add code, add metadata to pyproject.toml, and finally, pip install package. The four steps are within arrows that point to two building shapes representing the PyPI and conda-forge warehouses. Below each of those steps, represented as storage houses, the code instructions for installing using a package from that warehouse is written out--python -m pip install yourpackage and conda install -c conda-forge yourpackage. "></a>
 <figcaption>Our opinionated Python packaging tutorials demonstrate one way to create a Python package using modern packaging best practices. Through these tutorials, pyOpenSci has reduced the cognitive load for scientists who want to share their code. This graphic represents the steps a user needs to understand to make their code installable and create a basic Python package.</figcaption>
</figure>


### Creating opinionated Python packaging tutorials

<figure>
    <a href="{{ site.baseurl }}/images/python-packaging/have-you-created-python-package-scipy-24.png"><img src="{{ site.baseurl }}/images/python-packaging/have-you-created-python-package-scipy-24.png" style="max-width:80%" alt="This is a graphic that shows the results to a survey question. The question is--have you created a Python package before? The three options are Yes (18%), no (59%), and I struggled trying (24%)"></a>
    <figcaption> This response ratio of most people either struggling to create a package or never having created a Python package before is common when I ask this questions at events. More often than not, people want help learning packaging.</figcaption>
</figure>

In addition to the ecosystem overview provided in the guide, I knew that we needed to have opinionated, complete Python packaging tutorials that guided users through the entire packaging process including:

* [creating a package](https://www.pyopensci.org/python-package-guide/tutorials/installable-code.html),
* publishing it on [PyPI](https://www.pyopensci.org/python-package-guide/tutorials/publish-pypi.html), and
* [conda-forge](https://www.pyopensci.org/python-package-guide/tutorials/publish-conda-forge.html).

Most scientists (and packaging beginners) want to get the job done; they don't want to become packaging experts. A community presenter made this statement directly at the PyCon US 2023 Python packaging summit:

> I just want to create a Python package. Where is the tutorial or
> documentation that teaches me how to do that?
{: .highlight-quote }

Our Python packaging tutorials went through the same community development and review process as the rest of our Python Packaging Guide. We have also begun teaching the lessons; most workshop attendees have successfully created their first Python packages!

<figure>
    <a href="{{ site.baseurl }}/images/python-packaging/successfully-created-python-package-scipy-24.png"><img src="{{ site.baseurl }}/images/python-packaging/successfully-created-python-package-scipy-24.png" style="max-width:80%" alt="Another survey result image. The question is: were you able to create a package? 91% responded yes (10 people), 9% (1 person) said no; no one responded 'I'm not sure'"></a>
    <figcaption>It's always hard to collect data at the end of a long workshop. Here, 11 out of 30+ people responded. Most people in our workshop were successful. We worked with the one person who responded "no" after the survey at the end of the workshop. They successfully made their first package with our support! This feedback was similar to the success rates at [our first online workshop](https://www.pyopensci.org/events/april-2024-create-python-package-pyopensci-online-workshop.html), held in May 2024. </figcaption>
</figure>


### Teaching online lessons is the best way to ensure they stay current

I have created hundreds of [open online lessons](https://www.leahwasser.com/my-path-to-open-education-earth-environmental-data-science) both for ecologists [NEON](https://www.neonscience.org/resources/learning-hub/teaching-modules/quantifying-drivers-and-impacts-natural-disturbance-events) and [earth and environmental scientists](https://www/earthdatascience.org). One of the biggest challenges is that it's easy for data science lessons to [become dated quickly](https://www.leahwasser.com/open-education-data-science-posting-online-is-not-enough)--especially in the rapidly evolving data science space. By teaching the lessons, we can update them regularly as the ecosystem evolves. We also often have users review the lessons at our [annual sprint events](blog/pyopensci-pyconus-2024-sprints.html) to test them out; more on pyOpenSci beginner-friendly sprints below.

<i class="fa-solid fa-heart-pulse" style="color: #B197FC;"></i><i class="fa-solid fa-heart-pulse" style="color: #B197FC;"></i><i class="fa-solid fa-heart-pulse" style="color: #B197FC;"></i><i class="fa-solid fa-heart-pulse" style="color: #B197FC;"></i><i class="fa-solid fa-heart-pulse" style="color: #B197FC;"></i><i class="fa-solid fa-heart-pulse" style="color: #B197FC;"></i>

> Hi Leah. Thanks for the course today. I really enjoyed it. I heard about it from your post here in the Python channel so I'm glad you shared it here. I'll keep my eye out for more coming up and will be referring to the tutorials and guides on your site. Hopefully you work out the spatial chat because that seemed to have a lot of potential!
I also want to let you know that I got a ton of value out of your materials on the CU Open Earth data analytics site, and it's still my go-to resource to point people to when they ask me how to get started learning the open source spatial stack. So thank you!
> workshop attendee -- Software Underground community
{: .highlight-quote }

<i class="fa-solid fa-heart-pulse" style="color: #B197FC;"></i><i class="fa-solid fa-heart-pulse" style="color: #B197FC;"></i><i class="fa-solid fa-heart-pulse" style="color: #B197FC;"></i><i class="fa-solid fa-heart-pulse" style="color: #B197FC;"></i><i class="fa-solid fa-heart-pulse" style="color: #B197FC;"></i><i class="fa-solid fa-heart-pulse" style="color: #B197FC;"></i>

In addition to the valuable feedback we receive from our community, the data we collect through [Matomo web analytics](https://matomo.org/) shows our guide's usage and growth.
I will leave web and social media growth, which have also shown extraordinary growth for future posts!

### The power of community: Translating the guide & tutorials to other languages

The success of our packaging guide has been remarkable, thanks to the tremendous input and feedback from the community. What began as a simple guide has evolved into a collaborative project, with enthusiastic participation from contributors worldwide.

> @leahawasser @pyOpenSci clicking through and eventually found myself looking at "what is a python package" [www.pyopensci.org] and involuntarily performed a standing ovation. bookmarked it as an example of great docs for an incredibly complex subject with many meanings in many different contexts
{: .highlight-quote }

[View toot on mastodon](https://circumstances.run/@hipsterelectron/112557545629456885)

At our last PyCon sprint, a then-new contributor, [Felipe Moreno](https://www.github.com/flpm), set up translation infrastructure for our guide. The translation infrastructure uses a Sphinx extension that allows contributors to translate as much or as little of the guide as they wish. This process supports
small iterative pull requests that any contributor with little time can make.

```markdown
#: ../../documentation/hosting-tools/intro.md:3
msgid ""
"The most common tool for building documentation in the Python ecosystem "
"currently is Sphinx. However, some maintainers are using tools like "
"[mkdocs](https://www.mkdocs.org/) for documentation. It is up to you to "
"use the platform that you prefer for your documentation!"
msgstr ""
"Sphinx es la herramienta más común para construir documentación en el "
"ecosistema de Python. Sin embargo, algunos mantenedores están usando "
"herramientas como [mkdocs](https://www.mkdocs.org/) para generar la "
"documentación. ¡Es tu decisión usar la herramienta que prefieras para tu "
"documentación!"
```

Felipe's translation infrastructure contribution has sparked significant community momentum. As I write this, pyOpenSci contributors are actively translating our Python Packaging Guide into Spanish and Japanese; we have had dozens of pull requests. One contributor may even teach the pyOpenSci Python packaging lessons at [PyCon Japan](https://2024.pycon.jp/en) next year! This entire effort underscores the power of community when guided in the right direction.

Our guide is becoming a global resource!

You may be wondering where all of these new contributors are
coming from. We get many new active contributors when we lead events at core meetings.

I'll talk about that next.

## pyOpenSci at PyCon and SciPy 2024 -- sprints, talks and new contributors

We've held sprints at SciPy and PyCon US in the past two years.
We had significantly more engagement at SciPy and PyCon in 2024 compared to 2023. What is most impressive is many of our sprint participants have continued to contribute to pyOpenSci after our in-person sprint events.

While pyOpenSci operates mainly as an online community, I find there is no better way to build a core community than by holding in-person events at large meetings. While we get plenty of expert Pythonistas at our sprints, our sprint events are always beginner-friendly. Many first-time contributors help pyOpenSci with various open issues on our help-wanted GitHub project board while submitting their first pull requests and issues to GitHub.

Beginner-friendly sprints represent a true win-win for both contributors and pyOpenSci. Contributors learn new skills, and pyOpenSci gets help with the vital work that we are doing.

<div class="notice" markdown="1">

### What is a community sprint?
{: .no-toc}

Community sprints are collaborative coding and documentation update sessions where new and experienced contributors work together on open-source projects. These sprints provide a supportive environment with guidance from project maintainers or experienced developers, helping participants contribute effectively. They are an excellent opportunity for learning, networking, and making meaningful contributions to the open-source community. [You can read more about that here.](https://www.pyopensci.org/blog/pyopensci-pyconus-2024-sprints.html)
</div>


| Year  | PRs & Issues | Contributors |
|----------|----------|----------|
| 2023 | 41  |  12 |
| 2024 | 86  | 39   |


### My talks at SciPy and PyCon US 2024

Last year, I gave a talk at PyCon US at the [Maintainers Summit](https://www.pyopensci.org/blog/pycon-2023-packaging-presentation-sprints-leah-wasser.html#python-packaging-packaging-packaging).
This year, I gave talks about both [SciPy's Maintainers Summit](https://www.youtube.com/watch?v=uCLlshkTBM0) and at [PyCon US - in the main track](https://www.youtube.com/watch?v=uCLlshkTBM0)! At PyCon, I spoke about how pyOpenSci is leveraging the community and building consensus on the thorniest topic: Python packaging. At SciPy, I focused on bringing the scientific community together to help solve Python packaging. I also overviewed our community-run scientific Python software peer review program and the success that we've
had collaborating with [other partner communities, such as Astropy](https://www.pyopensci.org/software-peer-review/partners/astropy.html).

Here is my SciPy video if you want to check it out now. :)

{% include video id="uCLlshkTBM0" provider="youtube" %}


## pyOpenSci's software peer review program is growing, too

Funding has propelled pyOpenSci's peer review process forward. While pyOpenSci has run peer review since 2019, funding allowed us to document, formalize, and make the peer review program more sustainable and scalable. The [peer review guide](https://www.pyopensci.org/software-peer-review/) was one of the first things I worked on in the Fall of 2022. The goal of this guide was to
define each role in the software peer review process,
define policies around our review package scope, how we review, how we determine what is in scope, and more.
The guide also documents our [community partnership program](https://www.pyopensci.org/partners.html), which we launched in 2024 through our collaboration with [Astropy](https://www.pyopensci.org/software-peer-review/partners/astropy.html).

In four months, we published a shiny new peer review guide. In January 2023, we re-launched peer review again. Peer review submissions increased dramatically starting in January 2024 (see below).

<figure>
    <a href="{{ site.baseurl }}/images/peer-review/pyopensci-python-software-peer-review-growth.png"><img src="{{ site.baseurl }}/images/peer-review/pyopensci-python-software-peer-review-growth.png" alt="A cumulative sum plot with months on the x-axis and number of review issues submitted on the y-axis. The curve starts with a small slope in 2019. Then, around January 2023, the slope becomes significantly steeper, indicating a dramatic increase in submissions when we reopened the peer review. At that point in the plot, there is a label that says 'Full-time funding'."></a>
    <figcaption>It is clear the impact that 1) working on our peer review guide and governance plus 2) funding, which allowed me to devote all of my professional time to pyOpenSci, had on our peer review program. It has been incredibly successful in the past year! And true success lies in the hands of the community that leads the review process. Today, on average, pyOpenSci has 10-14 packages in our software review queue.
</figcaption>
</figure>

<!-- TODO: rename  repo to "guide" (rename it to be metrics and then link to it) -->

You can see more of our [peer review metrics on our MyST Markdown metrics dashboard here](https://www.pyopensci.org/peer-review-metrics/pyopensci-peer-review-stats)
{: .button }


### Is pyOpenSci's peer review program diverse?

Diversity, equity, inclusion, and accessibility (DEIA) are core to everything that pyOpenSci does. But how do we know that we are aligning with that core value?

Data can help us here, too. Here are a few insights from 93 people who have participated in our peer review program survey over the past two years. Our peer review participants represent a healthy mix of students, industry professionals, and academics.

Almost half of the participants identify as having some computer science application in their work; 80% self-identify as scientists (as mentioned above).

About 40% of our peer review participants identify as female, non binary, or non conforming.

####  Open Source metrics

Some of the open-source responses surprised me:

* **60% of people maintainers have funding** to do their work! (*This number surprised me given the challenges I have seen in funding open source work.*), and
* **70% of maintainers** report that outside contributors contribute to their projects through issues and pull requests.

I'll dedicate another blog post to examining this data more thoroughly. Still, you can get the gist from the above summary: We have a strong representation of people from different career stages. However, we still need to do more to support increased gender and identity diversity.

## A thoughtful, kind, and supportive community is what makes pyOpenSci special

Every morning, I wake up and am excited to begin my work. It doesn't matter if I'm working on budgets and other Executive Director-type tasks or developing educational content and teaching (my two favorite things); I can't wait to see what messages pop up in my inbox, be it Slack, email, Discord, or GitHub. I love my job because the pyOpenSci community is extraordinary.

<i class="fa-solid fa-circle-check" style="color: #63E6BE;"></i> People care about our organization's mission to help scientists make their science more open and collaborative. So they can solve the world's greatest challenges.

<i class="fa-solid fa-circle-check" style="color: #63E6BE;"></i> The community wants to help--be it each other or pyOpenSci as an organization.

<i class="fa-solid fa-circle-check" style="color: #63E6BE;"></i> The community is kind; the discussions are engaging and people help each other.

{% include pyos-blockquote.html quote="I love the friendliness and positive energy around the combination of science+computing (in Python, too)! It's a lovely community of practice!" author="Titus Brown, Faculty - University of California, Davis, pyOpenSci community member" class="highlight magenta" %}

The community also cares a lot about the scientific Python ecosystem and wants to see more robust software.

{% include pyos-blockquote.html quote="As maintainers of the Scientific Python library, we see great potential in pyOpenSci. Test, code, documentation, and internationalization. These are things we have gradually accumulated know-how for in order to create a robust library on GitHub. Now, these are about to be integrated by the pyOpenSci project." author="Tetsuo Koyama - PyVista maintainer" class="highlight" %}

They care about the packaging guidelines we have worked so hard to co-create and the impact those guidelines and online resources have on scientists who are just trying to get their jobs done.

{% include pyos-blockquote.html quote="I'm hopeful that the standards established by pyOpenSci will help alleviate the reproducibility crisis, increasing public trust in science, accelerating progress, and making all our jobs a little bit easier!" author="Jackson Burns, MIT" class="highlight magenta" %}

And, like me, the community cares deeply about education. The community wants to help
eliminate the packaging and open science thorns. They want to make packaging (and using Python) more
accessible to more people.

{% include pyos-blockquote.html quote="I love the educational aspect of pyOpenSci and how it focuses on removing the technical friction that prevents people from contributing to open source and open science. The community makes a conscious effort to create a welcoming culture and provide a safe place to learn for beginners. It helps prepare people for even bigger future contributions to the open science and open source movements." author="Felipe Moreno  - Tech Industry Professional" class="highlight" %}

Carol below was more than just a participant! She also helped many students
in their workshop learning experience.

{% include pyos-blockquote.html quote="As a participant in the first packaging workshop, I found that individual attention and focus on success were outstanding. The organization and approach to teaching a scientist how to create a package helped build skills and ongoing productivity." author="Carol Willing - Open Source & Open Science Leader, Project Jupyter, Python Core Dev" class="highlight purple" %}

## Building a sustainability model for pyOpenSci so we can continue to thrive - what's next

There’s a strong demand for the work pyOpenSci is doing. Still, every nonprofit or fiscally sponsored project has to ask:

*How do we keep this going long-term?*

Writing grants to bring in funding is essential, but I need to do more than just write grants. Writing grants takes tremendous energy, with only a ~10-20% chance of success. Also, grant calls usually focus on innovation. They do not often support project maintenance and daily operations.

To ensure that pyOpenSci is sustainable, we’re rolling out paid online training events. Paid events are a revenue model used by other nonprofits in our ecosystem:

NumFocus runs PyData and SciPy meetings
The Python Software Foundation runs PyCon as a significant fundraising event.
These paid events will support the low-cost training, event scholarships, free online tutorials, and resources we will continue to create and publish online.

## What's next for pyOpenSci - The Road Ahead
Our next training event is the inaugural pyOpenSci Fall Festival--a week-long event that teaches skills needed to:

* write cleaner, more modular code,
* package and share code,
* publish and cite code, and
* create reproducible reports that connect code, data, and outputs into a dynamically produced interactive publication.

We also will develop collaborative GitHub lessons following the BSSw fellowship I received this year.

## Get involved with pyOpenSci

Congratulations on reading my longest post ever. I hope you are as excited as I am about pyOpenSci's future.

If you'd like to get involved with pyOpenSci, check out our [volunteer page](/volunteer.html).

You can also:

* Keep an eye on our [events page](/events.html) for upcoming training events.

Follow us on social platforms:

* [<i class="fa-brands fa-discourse"></i> Discourse](https://pyopensci.discourse.group/)
* [<i class="fa-brands fa-mastodon"></i> Mastodon](https://fosstodon.org/@pyopensci)
* [<i class="fa-solid fa-cloud"></i> Bluesky](https://bsky.app/profile/pyopensci.bsky.social)
* [<i class="fa-brands fa-linkedin"></i> LinkedIn](https://www.linkedin.com/company/pyopensci)
* [<i class="fa-brands fa-github"></i> GitHub](https://github.com/pyOpenSci)

If you are on LinkedIn, you should [subscribe to our newsletter, too](https://www.linkedin.com/newsletters/7179551305344933888/?displayConfirmation=true).

<div class = "notice" markdown="1">
## About Me
My name is Leah, and I'm the executive director and founder of pyOpenSci. I have over 20 years of experience in both academic and nonprofit spaces and have dedicated my career to helping scientists overcome the challenges of open science. I've built and led two successful data science programs:

1. **NEON Data Skills Program** at NEON, and
2. **Earth Analytics Program** at CU Boulder.

I'm now building  **pyOpenSci**--a vibrant, active, and diverse community of practice that supports open science and the open-source software that drives that science.

The programs I build have consistently stayed at the cutting edge of technology through continual evaluation and a data-driven approach. Throughout my career, I've observed significant gaps between the innovative tools being developed and the training scientists receive, which has driven my work in bridging these gaps.
</div>
