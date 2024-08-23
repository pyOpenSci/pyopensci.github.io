---
layout: single
title: "It's Been a Long Short Road: The Monumental Past 2 Years of pyOpenSci"
excerpt: "Learn about what pyOpenSci has accomplished in the last two years, including the evolution of our packaging guidebook, the expansion of our peer review process, and the vibrant community we've built."
author: "Leah Wasser"
permalink: /blog/what-pyopensci-accomplished-with-two-years-of-funding.html
header:
  overlay_image: images/headers/scipy-2024-workshop.png
  overlay_filter: rgba(20, 13, 36, 0.8)
categories:
  - blog-post
  - community
classes: wide
toc: true
comments: true
---

## It's been two years since I started working full-time on pyOpenSci
As of September 1, 2024, I have been working full-time at pyOpenSci for two years, thanks to funding from the [Sloan Foundation](https://sloan.org/) and [CZI (Chan Zuckerberg Initiative)](https://chanzuckerberg.com/). pyOpenSci has come SO FAR in two years. 

It's time to take a breath and celebrate everything that the pyOpenSci community has accomplished in the past two years. 

Before we move on to the next big thing—our pyOpenSci Fall Festival (more on that below)—I want to take a moment to reflect on: 

* where we've been, 
* what we've accomplished, 
* the incredible community of practice that we've built.

I'll wrap up by discussing what's next for pyOpenSci.  

## How I created pyOpenSci

In 2018, I founded pyOpenSci out of a combination of inspiration with a splash 
of frustration encountered while teaching open science approaches to scientists in Python. Despite Python's power and popularity, I noticed a gap in community support compared to the R ecosystem. This gap inspired me to think about ways to make the Python ecosystem more accessible to and supportive of scientists trying to share their workflows. 

My experiences teaching and working in the Python ecosystem, 
inspired me to establishing a vibrant, inclusive community of practice. This 
community would be driven to develop and encourage open science best practices.
And also to fill in knowledge gaps that scientists encounter when trying to make their science open and reproducible. 

From humble beginnings characterized by 3-4 person community meetings, pyOpenSci has grown into a thriving community, marked by a robust editorial team, hundreds of contributors, and numerous valuable community partners and friends. Our peer review process has seen over 50 packages; we've accepted 35 and have 17 packages in [active stages of review](https://github.com/orgs/pyOpenSci/projects/7) as I write this post. 

This evolution underscores my commitment to building this vibrant community of practice and making open science practices and Python more accessible to scientists. 

[<i class="fa-solid fa-wand-magic-sparkles"></i> Learn more about how pyOpenSci started <i class="fa-solid fa-wand-magic-sparkles"></i>](/blog/how-pyopensci-got-started.html)
{: .button }

### What is pyOpenSci? 

pyOpenSci's mission is to create a community of practices that helps scientists make their science more open and collaborative. We empower scientists with the skills and knowledge to create efficient open and shared data processing and analysis workflows to process open science best practices. We enable scientists to share and reuse their code through packaging. Our goal is for scientists to spend less time fighting with code and more time tackling the world's most significant challenges. 

We do this by:

* **Creating online open education resources** that help scientists implement open science best practices. Over the past two years, this work has included helping scientists with the skills needed to package their code in a way that can be shared and reused across workflows. It also includes using Git and GitHub to enhance open, collaborative workflows and ensure versions. 
* **Running training events** that help scientists discover new tools for reproducibly sharing their code, workflows, and discoveries; we also teach open science best practices. 
* **Running an open software peer review process** that helps scientists make and find better software to support their work.
* **Partnering with other open science and Python communities** to leverage knowledge and effort.

# TODO: redo this so the third petal says "education & training." modify software peer review to say software peer review & packaging guidelines. Then, update the captions in the other posts that use this image

<figure>
    <a href="/images/pyopensci-pillars-flower.png">
    <img src="/images/pyopensci-pillars-flower.png" style="max-width:100%" alt="A flower petal image with three flower petals and a flower center. In each petal, there is text. The first petal says software peer review; the second says community partnerships; the third says packaging resources and recommendations. The center circle of the flower says diverse, inclusive community.">
    </a>
    <figcaption> pyOpenSci supports scientists developing open-source software through three programs: 1) peer review of scientific software, 2) community partnerships, and 3) packaging resources and recommendations. A diverse and inclusive community that cares about the open-source software that drives open science supports all three of these programs.
    </figcaption>
</figure>

### pyOpenSci and iterative, data-driven program design 

PyOpenSci's development and design have been data-driven from the start. I started collecting data about community pain points back in 2019. And today I have 
quotes and word clouds and other valuable insights collected from community 
members at meetings such as:

* the US Research Software Engineer (USRSE) RSE, 
* SciPy, and 
* AGU (American Geophysical ophiycail Union). 

<figure>
    <a href="/images/pyopensci-general/pyopensci-iterative-evaluation-program-design.png">
    <img src="/images/pyopensci-general/pyopensci-iterative-evaluation-program-design.png" style="max-width:60%" alt="Alt here.">
    </a>
    <figcaption> Iterative Data driven program design is a fusion of evaluation and program development that utilizes community feedback over time to iteratively build a program. Rather than build the entire thing at once, you build it in pieces and continue to collect data which allows you to be agile in trying things and adjusting program elements to better align with community needs.
    </figcaption>
</figure>

The data that I've collected over the years, reveals vital pain points and gaps that scientists face when trying to process analyze and share their workflows. 
This data directly informs the successful community that pyOpenSci has become today. 


<div class="notice" markdown ="1">
**Survey question & responses:**
"How could pyOpenSci help you with your science, code, and software?"

> 
> -- 2019 AGU townhall  
> What are the best practices for sharing the code?

> Streamline the development of good quality, socially responsible, and easily shareable software.

> Bullet-proof, well-documented packages for Earth science.

Many earth scientists attend AGU. It's a very different crowd then who you meet
at the SciPy meetings.  
</div>

### pyOpenSci learned a lot from building a Python software peer review program

pyOpenSci's design is also based on our experiences developing the software peer review guidelines for Python packages. We [interact with scientific software maintainers](https://pyopensci.discourse.group/t/api-reference-building-locally-but-not-on-rth-missing-path/368/7) - who are often more scientists than developers - 
from around often. 

As we developed our [peer review guide]((https://www.pyopensci.org/software-peer-review/)), it became clear that a beginner-friendly packaging guide was essential to support scientists in sharing their code. This is because [our pre-review software checks](https://www.pyopensci.org/software-peer-review/how-to/editor-in-chief-guide.html#editor-checklist-template) require basic package infrastructure. We wanted to set scientists up for success. We want to be clear about what that packaging infrastructure is.



<div class="notice" markdown ="1">
**Survey question & responses:**
"How could pyOpenSci help you with your science, code, and software?"

> 
> -- 2019 AGU townhall  
> AGU 2019: Training for people who can code for themselves but want to start developing software for others. Topics include style, documentation, testing, git, etc.

</div>

#### Helping scientists navigate a complex and difficult-to-understand Python packaging ecosystem 

The packaging ecosystem has evolved rapidly. Numerous tools and approaches are available to create Python packages. Further, recent changes to ecosystem standards have led to an explosion of packaging tools like [Hatch](https://hatch.pypa.io/latest/), [Flit](https://flit.pypa.io/en/stable/), [PDM](https://pdm.fming.dev/latest/), and [Poetry](https://python-poetry.org/) with other tools like Pixi and Rye also on the horizon. Scientists often feel overwhelmed by the sheer number of options and have begged for clear guidance for years.

<div class="notice" markdown ="1">

QUESTION: "How could pyOpenSci help you with your science, code, and software?"

> 
> -- 2021 SciPy BoF
>  **clarify Python packaging. There are too many different mechanisms floating around...**

</div>

There are some excellent, more advanced guidebooks and tutorials available now, such as [PyPA's packaging tutorial](https://packaging.python.org/tutorials/) and the [scientific Python development guide](add link). However, our resources serve a different audience. 

1. We want to ensure that our resources don't require foundational knowledge that scientists don't usually have. 
2. We want to avoid burdening scientists with decisions about packaging concepts they don't fully understand, such as selecting a build backend.

From a beginner's perspective, every decision point is a potential opportunity to go down the wrong path, adding cognitive load. 

<!-- **TODO embed video too?** -->
 
I knew that pyOpenSci could make the packaging journey more straightforward for scientists. I also knew there was a strong need to file down packaging and open science thorns.

If you want to learn more, my [talk at PyCon dove into the challenges of too many options and cognitive overload; I wrote about it here.](/blog/python-packaging-friends-dont-let-friends-package-alone.html) 

### pyOpenSci guided the community towards a single way to create a Python package in under a year

In just under a year, we created a comprehensive packaging guidebook and a set of end-to-end Python packaging / share your code tutorials that walk scientists through creating a package and publishing it to both [PyPI](https://pypi.org/) and [Conda-Forge](https://conda-forge.org/) using [Hatch](https://hatch.pypa.io/). Together, the pyOpenSci community built consensus around which packaging approaches should be adopted as best practices.

[Check out the pull requests ](https://github.com/pyOpenSci/python-package-guide/pulls?q=is%3Apr+sort%3Acomments-desc+is%3Aclosed) if you're curious about the discussions. The sheer volume of comments on some of the early PRs associated with packaging build tools speaks to the various issues, complexity, and decisions we needed to make. 

## **Building Python packaging consensus and developing the pyOpenSci Python packaging guidebook**

The success of our Python packaging guidebook is due to extensive community input, 
focusing contributors on the guidebook goals which was to make the Python packaging accessible to beginners and scientists who didn't want to become packaging experts, and our intensive community review process that includes input from:  

* **Packaging tool maintainers:** We asked each maintainer from Flit, PDM, Hatch, and Poetry to provide feedback on our overviews of their tools
* **[PyPA](https://www.pypa.io/en/latest/) members** who have already developed packaging resources that serve the broader Python community
* **Core scientific Python community members** who are maintaining tools like Matplotlib, Numpy, and Pandas that require more technical complex builds
* **Scientists with varying levels of packaging expertise:** This group is most important as packaging beginners provide the lens of what is confusing and ensure that the technical content is more beginner-friendly. 
The truly collaborative effort of creating the Python packaging guidebook resulted in a beginner-friendly and accurate guide that the pyOpenSci community now maintains and continuously updates.

Our packaging guide provides an overview of the Python packaging ecosystem to support scientists who want to understand what all the packaging tools and approaches do; they want to decide on their own which tools best serve their needs. We also include sections that define core terms that most scientists need to learn as they appear often in online documentation, such as: 

* [build backend](https://www.pyopensci.org/python-package-guide/package-structure-code/python-package-build-tools.html#build-back-ends)
* [build frontend](https://www.pyopensci.org/python-package-guide/package-structure-code/python-package-build-tools.html#python-package-build-front-ends)
* [wheel](https://www.pyopensci.org/python-package-guide/package-structure-code/python-package-distribution-files-sdist-wheel.html#wheel-whl-files) 
* [sDist](https://www.pyopensci.org/python-package-guide/package-structure-code/python-package-distribution-files-sdist-wheel.html#source-distribution-sdist) 

The goal of the Python Packaging Guide is to translate--to help scientists understand the base language around packaging. Our Python Packaging Guide will clarify and file down the packaging thorns over time. 

<figure>
    <a href="{{ site.baseurl }}/images/blog/2024/july/pyopensci-package-guide-review.png"><img src="{{ site.baseurl }}/images/blog/2024/july/pyopensci-package-guide-review.png" style="max-width:80%" alt="Image of the pyOpenSci package guide review process. There are three main boxes on the slide labeled 'expert feedback,' 'community review,' and 'sprints and bug bashes.' The top of the image is titled 'The Power of Community Review.' "></a>
    <figcaption>pyOpenSci engages people from all parts of the Python community, with all levels of expertise, in our packaging guide review process. Every page in our Python packaging guide has gone through extensive community review to ensure that it is 1) beginner friendly, 2) accurate and 3) up to date. </figcaption>
</figure>

### Creating opinionated Python packaging tutorials  

More often than not, scientists (and packaging beginners) just want to get the job done. They don't want to become packaging experts.

They want to create a Python package and do their important work more quickly. A community presenter made this statement directly at the Python packaging summit at PyCon US 2023. He stood up and said:

> I just want to create a Python package. Where is the tutorial or
> documentation that teaches me how to do that?

I have heard this statement from dozens of scientists and non-science Pythonistas in the past two years. And because of this sentiment, pyOpenSci created opinionated Python packaging tutorials that guides users through the entire packaging process, from [creating a package](https://www.pyopensci.org/python-package-guide/tutorials/installable-code.html) to publishing it on [PyPI](https://www.pyopensci.org/python-package-guide/tutorials/publish-pypi.html) and [conda-forge](https://www.pyopensci.org/python-package-guide/tutorials/publish-conda-forge.html). 
By providing clear, opinionated, step-by-step instructions, pyOpenSci has reduced the cognitive load for scientists who want to share their code. 

<figure>
    <a href="{{ site.baseurl }}/images/python-packaging/publish-python-package-pypi-conda.png"><img src="{{ site.baseurl }}/images/python-packaging/publish-python-package-pypi-conda.png" alt=""></a>
    <figcaption>Our opinionated Python packaging tutorials demonstrate 1 way to create a Python package using modern packaging best practices. This graphic represents the steps that a user needs to understand to make their code installable and create a basic Python package.  </figcaption>
</figure>
 
These tutorials went through the same community development and review process as the rest of our Python packaging guidebook. We have also begun teaching the lessons with high success rates. We taught the lessons several times and plan to continue teaching them, especially as we build out our training sustainability model (more on that below). 

### Teaching online lessons is the best way to ensure they stay current 

I have created hundreds of [open online lessons](https://www.leahwasser.com/my-path-to-open-education-earth-environmental-data-science) both for ecologists [NEON](https://www.neonscience.org/resources/learning-hub/teaching-modules/quantifying-drivers-and-impacts-natural-disturbance-events) and [earth and environmental scientists](https://www/earthdatascience.org). One of the biggest challenges is that it's easy for data science lessons to become dated quickly--especially in the rapidly evolving data science space. By teaching the lessons, we can update them regularly as the ecosystem evolves. We also often have users review the lessons at our [annual sprint events](blog/pyopensci-pyconus-2024-sprints.html) to test them out; more on pyOpenSci beginner-friendly sprints below.

**TODO:** add quotes from people on the guidebook. 
**TODO:** Add two sentences on the growth— both the web growth and maybe a quote from an email I've received. 

### The power of community: Translating the guide & tutorials to other languages

The success of our packaging guidebook has been remarkable, thanks to the tremendous input and feedback from the community. What began as a simple guide has evolved into a collaborative project, with enthusiastic participation from contributors worldwide. At our last PyCon sprint, [Felipe Moreno](https://www.github.com/flpm), a new contributor at the time, took the initiative to set up the translation infrastructure, sparking significant momentum that has since transformed the guidebook into a truly global resource. 

This translation process has taken on a life of its own, with over XX pull requests already submitted. pyOpenSci community members are now actively translating our Python packaging guide into Spanish and Japanese, with the exciting possibility of pyOpenSci lessons being taught at PyCon Japan next year once the Japanese translation is complete. This entire effort underscores the power of community when guided in the right direction, showcasing how collective effort can drive meaningful progress.

> This entire effort underscores the power of community when guided in 
> the right direction, showcasing how collective effort can drive 
> meaningful progress.
{: .highlight-quote }

## Using Sphinx as a translation tool for our Python packaging guide--Internationalization 
Felipe set up flexible ttranslation infrastructure using a Sphinx extension, allowing contributors to translate as much or as little of the guidebook as they wish at any time. The infrastructure also runs so that as we update the English versions of the guidebook, the translation extension will identify new and revised text that needs to be translated. The community's response has been overwhelmingly positive, with about 50% of the Spanish translation already covered (though unpublished) and work on the Japanese translation well underway. Remarkably, this entire translation effort is unfunded and entirely community-led, a testament to the dedication and passion of the pyOpenSci community.

Translation in our context refers to converting text from one language to another to make the content accessible to a broader audience. Internationalization (i18n) is the process of designing and developing infrastructure to be easily adapted to various languages and regions. Together, these practices enable global accessibility and usability of the pyOpenSci online education resources, including our packaging guide. 
{: .notice }

## pyOpenSci at PyCon and SciPy 2024 -- sprints, talks and new contributors 

Our engagement at SciPy and PyCon this year marked a significant leap forward from last year. We had so much more engagement this year compared to last. 

**What is a community sprint?:** Community sprints are collaborative coding and documentation update sessions where new and experienced contributors work together on open-source projects. These sprints provide a supportive environment with guidance from project maintainers or experienced developers, helping participants contribute effectively. They are an excellent opportunity for learning, networking, and making meaningful contributions to the open-source community. [You can read more about that here.](https://www.pyopensci.org/blog/pyopensci-pyconus-2024-sprints.html)
{: .notice }

We had many more people engaged and contributing to pyOpenSci this year than last. As I write this, many of our sprint participants have continued to contribute to pyOpenSci after the event—our focus on making sprints beginner-friendly paid off. Many first-time contributors helped pyOpenSci with various open issues on our help-wanted GitHub project board. This surge in participation and continued engagement underscores the growing momentum and impact of pyOpenSci. 

TODO: UPDATE NUMBERS HERE from https://github.com/orgs/pyOpenSci/projects/12

| Meeting  | total prs & issues submitted | total contributors | 
|----------|----------|----------| 
| PyCon 2023 | Item 2   | Item 3   |
| PyCon 2024 | Item 2   | Item 3   | 
| Scipy 2023   | Item 5   | Item 6   | 
| Scipy 2024    | Item 8   | Item 9   |
| pyCascades 2024 (community lead)   | 19   | Item 9   |

## Talks at big Python meetings - PyCon and SciPy

I wonder if this section could be integrated above somehow? i can link to both blog posts on my talks. 

I also had the opportunity to give two talks this year. 
I gave a talk at PyCon about how pyOpenSci is leveraging the community and building consensus around the thorniest topic: Python packaging. 

Link to blog post on the talk. 

<Embed youtube video>

## Strengthening Scientific Software ecosystem with Peer Review

While pyOpenSci has run peer review since 2019, funding allowed us to fully document, formalize and set the review process up to be more scalable when I started, I started full-time. The [peer review guidebook](https://www.pyopensci.org/software-peer-review/) was one of the first things I worked on in the fall of 2022. The goal of this guidebook was to 
define each role in the software peer review process
define policies around our review package scope, how we review, how we determine what is in scope, and more 
The guidebook also guides community partnerships that we have with groups such as Astropy <link to partner page> (formalized in in 2024). 

In 4 months, we published a shiny new peer review guide. In January 2023, we started peer review again. The results of both funding, documentation, and building a robust editorial team can be clearly seen in the plot below 


<figure>
    <a href="{{ site.baseurl }}/images/peer-review/pyopensci-python-software-peer-review-growth.png"><img src="{{ site.baseurl }}/images/peer-review/pyopensci-python-software-peer-review-growth.png" alt="A cumulative sum plot with months on the x-axis and number of review issues submitted on the Y axis. The curve starts with a small slope in 2019. Then, around January 2023, the slope becomes more steep, indicating a dramatic increase in submissions when we reopened the peer review. At that point in the plot, there is a label that says 'Full-time funding'"></a>
    <figcaption>It is clear the impact that 1) working on our peer review guide and peer review governance plus 2) funding which allowed me to devote all of my professional time to pyOpenSci, had on our peer review program. It has been incredibly successful in the past year! And true success lies in the hands of the community that leads the review process.  </figcaption>
</figure>

<!-- TODO: rename  guide (rename it to be metrics and then link to it) -->

You can see more of our [peer review metrics on the myst markdown metrics dashboard here](https://www.pyopensci.org/peer-review-metrics/pyopensci-peer-review-stats) 
Our goal for the Sloan Foundation proposal was to review 20 packages in two years. We have almost doubled that goal already. On average, pyOpenSci now has 10-14 packages in our queue. 


**We greatly value diversity (do we have any metrics from our review data that I can share here??)**

## A thoughtful, kind, and supportive community is what makes the pyOpenSci special 

Every morning, I wake up and am excited to begin my work. It doesn't matter if I'm working on budgets and other Executive Director-type tasks or developing educational content and teaching (my two favorite things); I can't wait to see what messages pop up in my inbox, be it Slack, email, or others. I love my job so much because the pyOpenSci community is extraordinary. 

This community is extraordinary because:

People care about our organization's mission to help scientists make their science more open and collaborative. So they can solve the world's greatest challenges. 
The community wants to help - be it each other or pyOpenSci as an organization--and people care. 
The community is kind. They are kind in their words and kind in how they help each other. 

> I love the friendliness and positive energy around the combination of 
> science+computing (in Python, too)! It's a lovely community of practice!
~ Titus Brown, Faculty - University of California, Davis, pyOpenSci community member.

> As maintainers of the Scientific Python library, we see great potential in > pyOpenSci. Test code, documentation, and internationalization. These 
> are things we have gradually accumulated know-how for in order to 
> create a robust library on GitHub. Now, these are about to be integrated 
> by the pyOpenSci project.
> ~ Tetsuo Koyama - PyVista maintainer


> I'm hopeful that the standards established by pyOpenSci will help  
> alleviate the reproducibility crisis, increasing public trust in science, 
> accelerating progress, and making all our jobs a little bit easier!
> ~Jackson Burns  - DM about info 

> I love the educational aspect of pyOpenSci and how it focuses on removing the technical friction that prevents people from contributing to open source and open science. The community makes a conscious effort to create a welcoming culture and provide a safe place to learn for beginners. It helps prepare people for even bigger future contributions to the open science and open source movements.

> ~Felipe Moreno  - Tech Industry Professional

> As a participant in the first packaging workshop, I found that individual attention and focus on success were outstanding. The organization and approach to teaching a scientist how to create a package helped build skills and ongoing productivity.
>
> Carol Willing, 

## Building a sustainability model for pyOpenSci so we can continue to thrive

We now have strong evidence of a demand for the on-the-ground community and education work that pyOpenSci is doing. However, every non-profit organization (or fiscally sponsored project) has to ask is:

How do we sustain this effort over time?

You see, writing grants, while encouraged at universities, is not a sustainable business model.

You spend months working on a grant that you have a 15-20% chance of actually getting. This requires time, and time requires money. But you also need money to survive. 

New grants often focus on funding new and innovative ideas rather than sustaining existing work. While innovation is valuable, maintaining open-source tools and educational resources is critical. As organizations and communities grow, the need to hire additional support increases, making sustainability more challenging. Unfortunately, most funding agencies do not prioritize maintenance. However, despite these challenges, pyOpenSci aims to build a sustainable model despite this challenge. 

As part of our sustainability model, we will offer paid online training events. In the same way that NumFocus runs PyData and SciPy meetings, we will run workshops and open science festivals <i class="fa-solid fa-hand-sparkles"></i>.

The first paid workshop we ran was an intro to packaging workshop. Our upcoming event is the inaugural pyOpenSci Fall Festival.

The idea here is that we build and provide free online resources as a community service. We also offer support through our community. But we also offer more hands-on events that include training and, in our first experiment, office hours to troubleshoot outside of the programmed workshop.  

I love experiments, which might be why I've been able to build three programs to date. At home, I experiment with plants, starting seeds and propagating various plants using different methods. At work, I'm experimenting with a business model to see if we can sustain the incredible community effort that pyOpenSci has created. This experiment will show how pyOpenSci can sustain a training model. 

## What's next for pyOpenSci - The Road Ahead
Our upcoming projects and initiatives include launching our inaugural Fall Festival and developing BSSw lessons focused on collaborative Git and GitHub workflows for scientists. We’re also excited to share our visions for the future of pyOpenSci, emphasizing our commitment to fostering a vibrant community. The community has been central to pyOpenSci’s journey, and we are dedicated to continuing our efforts to grow and support it further.


  - Reiterate the importance of the community in pyOpenSci's journey.
  - Mention any planned efforts to grow or support the community further.


## Get involved with pyOpenSci
  - Invite readers to get involved or support pyOpenSci in various ways.
  - Provide links or contacts for further engagement.

## About Me
My name is Leah, and I'm the executive director and founder of pyOpenSci. With over 20 years of experience in both academic and non-profit spaces, my career is dedicated to helping scientists overcome the challenges of open science. I've built and led two successful data science programs:

1. **NEON Data Skills Program** at NEON
2. **Earth Analytics Program** at CU Boulder

And i'm onw building  **pyOpenSci** - a vibrant, active and diverse community of practice that supports open science and the open-source software that driving that science. 

The programs i build have consistently stayed at the cutting edge of technology through continual evaluation and a data-driven approach. Throughout my career, I've observed significant gaps between the innovative tools being developed and the training scientists receive, which has driven my work in bridging these gaps.