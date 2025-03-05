---
layout: single
title: "Demystifying the Python packaging ecosystem "
excerpt: "pyOpenSci has published the packaging structure and tool section of it's guide. This chapter has been reviewed by dozens of core community members to ensure accuracy and is community-driven. "
author: "Leah Wasser"
permalink: /blog/demystifying-python-packaging.html
header:
  overlay_color: "#666"
  overlay_filter: 0.6
categories:
  - blog-post
  - highlight
  - python-packaging
toc: false
comments: true
last_modified: 2024-08-29
---

## A guide to make Python packaging easier for scientists

I've spent the last few months working on creating a Python packaging guide. This guide seeks to help those creating new scientific Python packages select a packaging tool and workflow. This guide also supports the [pyOpenSci peer review process](https://www.pyopensci.org/about-peer-review/).

Below, I provide a brief overview of our content development process given the [packaging tool guide chapter has been published](https://www.pyopensci.org/python-package-guide/package-structure-code/intro.html)! Yay!

# TL;DR

There are a few key takeaways from this post:

1. Many learn how to create a Python package by copying the structure of other packages built by maintainers they respect. While this is an OK approach, it doesn't help people better understand the ecosystem. And in some cases it can cause more confusion given the many different options and approaches.
2. Much of the existing Python packaging blog post and guidebook content online is dated. The community needs dependable, maintained resources that they can rely on!
3. Much of the existing packaging resources assumes some base technical knowledge about packaging making it difficult for beginners to work through and understand the content.
4. pyOpenSci is [creating a Python packaging guidebook](https://www.pyopensci.org/python-package-guide/) driven by significant community input from packaging maintainers, scientists and others in the community. The guide's goal is to help people understand best practices for packaging that follow current standards and use current tools.
5. We will also be creating some tutorials in the near future.

The [packaging chapter of our guide](https://www.pyopensci.org/python-package-guide/package-structure-code/intro.html) is online now! Stay tuned for more content on environments, CI and testing!

<figure>
    <a href="/images/python-package-tools-decision-tree.png">
    <img src="/images/python-package-tools-decision-tree.png" style="max-width:100%" alt="Diagram showing a decision tree with the tools flit, hatch, pdm and poetry highlighted. The diagram is called Pick a Packaging Tool.">
    </a>
    <figcaption>An diagram from our packaging guide that shows the core packaging tools that scientists may need to decide between. For a pure python package you can use any tool that you wish based on the features that you want in a tool. However, if you have a more complex build you may want to use PDM or the PyPA's build tool with a powerful back-end like meson-python.
    </figcaption>
</figure>

## My jump into packaging

In the Fall of 2022, in support of my [new role as Executive Director of pyOpenSci](https://www.pyopensci.org/blog/new-executive-director-leah-wasser), I began to explore Python packaging tools in an effort to update our guidebook in support of our [package peer review program](https://www.pyopensci.org/software-peer-review/about/our-goals.html).

I saw significant community confusion around how to create a Python package. But, in my mind, it wouldn't be that big of a challenge to create a guidebook.

- There are a bunch of tools out there.
- There are a bunch of Python standards that people should follow

I just needed to find the combination of tools and standards that we could recommend to people in an attempt to demystify the packaging ecosystem.

No problem, right?

At the same time I noticed that many did not want to talk about
Python packaging. And I wondered, why?

<figure>
    <a href="/images/python-packaging/lion-meme-pyopensci.jpeg">
    <img src="/images/python-packaging/lion-meme-pyopensci.jpeg" style="max-width:100%" alt="A meme showing a mountain lion with it's little paw up like an italian mobster. the meme text says - so you want to talk about python packaging..">
    </a>
    <figcaption>People didn't want to talk about Python packaging. It was such a painful, sore topic.
    </figcaption>
</figure>

### My approach to learning how to create a Python package

I've worked on the development of 3 other Python packages. Each time my approach to create a package was asking the question:

- What would [GeoPandas](https://geopandas.org/en/stable/) do?

GeoPandas is a spatial library that supports working with vector data (think points, lines and polygons). I decided to follow their structure, because I respected the Geopandas maintainers greatly, and I had [contributed to the package.](https://github.com/geopandas/geopandas/pull/1128)

My approach to packaging was: "monkey see, monkey do". I was the monkey.

I also munched on some bananas. It worked out alright.

## The monkey approach to packaging is not ideal

Copying a package's structure is like copying code from stack overflow and pasting it into your workflow in hopes it runs. If it doesn't run, you don't know enough to fix it! Frustration sets in.

However, at least in Stack Overflow you can see when the post was published and know that it might be dated. I found it hard to find updated information on Python packaging tools. I found this particularly challenging considering I found so many tool options. And each tool had a level of documentation that assumed some depth of knowledge around Python packaging.

Where does the authoritative and complete guide to packaging live and who maintains it? Further, is it helpful enough for a begineer to dig into and get started quickly?

## In education, early wins are key

I've taught data intensive science for almost 20 years. If there is one thing I know about teaching those new to technical areas, it is that early wins are critical. Whether the win is creating a simple data plot within the first 20 minutes of a workshop, or using an `init` method in PDM to create a package structure, early wins can motivate a beginner mind as:

1. It builds confidence that they can do it
2. That confidence allows a learner to continue even when it gets more complicated

I struggled to find any resources that provided users of Python packaging tools with early wins. Rather, I found that I needed to increase my technical knowledge of packaging to even understand many of the resources out there.

### How could pyOpenSci help?

To support pyOpenSci's goals of making packaging easier for scientists while also improving package quality I knew we needed to create a guide that would help others navigate the packaging ecosystem. At a minimum, helping users understand the tool landscape and how to pick a tool was a good start.

### Python packaging is not bad. It's just not well documented

From all of the above I came to a conclusion that Python packaging is not bad. It's just not well documented. If people understood what all of the tools did and how to pick one, it might be akin to shopping for a car\*.

_\*But without the annoying sales person who might assume you know nothing about cars if you are a women..._

## A Python packaging guide for scientists

In creating this guide, I talked with scientific Python tool maintainers, folks from [PYPA](https://www.pypa.io/en/latest/), [scientific python](https://scientific-python.org/) and maintainers of core packages (such as Flit, Hatch, Poetry and PDM) to get insights into common workflows, common challenges and tools that folks are using. This guide has been a true example of community-driven content. [If you are curious, you can see the contributor list here.](https://github.com/pyOpenSci/python-package-guide#contributors-)

The packaging chapter alone had over [200 comments to address in round 1](https://github.com/pyOpenSci/python-package-guide/pull/55) of reviews. And another [200+ in round 2 of review](https://github.com/pyOpenSci/python-package-guide/pull/55). All of the chapters in our guide go through community review however this particular chapter elicited a LOT of strong response regarding which tools do what, and how they should be described.

Sometimes, the discussions got tense. People have strong opinions about packaging approaches. Also, not everyone agrees on the best technical approaches. But even more interesting is that many involved knew something about some of the tools but often that was based on word of mouth or a quick glance at documentation. (this is largely because tools are evolving quickly). The people that knew the most were also the most technical, and often involved in the actual development of the tools.

## An assessment of python packaging tools

My take away from all of this:

After hundreds of comments and conversations;

After testing each one of the tools in our guide with a start to end workflow;

My takeaway is that Python doesn't have a packaging problem (if you are a user creating a pure Python package).

Python has a much more human problem where approaches to packaging are simply unclear, not well documented and often debated - heavily.

Further, the standards created for Python packaging while important, live on a website that is not intended for the broader public to use.

Sure, there are many tricky parts to packaging. And understanding the standards can be even trickier. This is certainly not a perfect system.

However, we **can** create packages using the given existing tools -- now! I promise, this is true.

It's just (extremely) hard to figure out:

1. how do you create a package,
2. which tool should we use, and
3. why use that tool over the others?

The Python ecosystem is evolving rapidly. Approaches evolve and it's hard to know which approaches are the most current. Those who deeply understand the packaging challenges represent a small subset of the community and also are technically proficient.

In general, users want to use the simplest approach to publish their packages online.

Remember - early wins go a long way.

<figure>
    <a href="/images/python-packaging/dont-talk-about-peps-pyopensci.jpeg">
    <img src="/images/python-packaging/dont-talk-about-peps-pyopensci.jpeg" style="max-width:100%" alt="A meme from the movie flight flub showing brad pitt with his arms crossed in a black tshirt. The text says - the first rul of peps is do not talk about peps.">
    </a>
    <figcaption>At one point, I was trying to link to Python standards - known as PEPS (Python Enhancement Protocols) given everyone was sharing the various PEPs that tools follow. I was then told that we should avoid linking to these pages as they weren't intended for public consumption. If that is the case then how does the public get current information about standards? While I understood the goal, My mind was a bit blown. This was one of many points of confusion that I had to sort through.  :)
    </figcaption>
</figure>

## Assessment of packaging tools functionality

At the same time there is no good assessment that i've seen of the tools
that do exist to help users in the ecosystem. I had questions about:

- what each tool does
- what each tool could do better.
- And how I should pick a tool for my packaging needs.

It was clear that people want that guidance.

## A few spoilers regarding what is to come

With this all said, i'll now set the stage for what's to come from
pyOpenSci in the upcoming months. And what i've learned so far.

- There are a few great packaging tools that support comprehensive build workflows.
- Many of the packing tools out there only have one core maintainer (a low bus factor). What would happen if a few of them just teamed up and worked together (and with the community) to move forward? Or could we somehow change that to add stability to the ecosystem?
- We need better documentation with clear beginning to end quick-start tutorials that help new users get started. If the tools were better documented more people would use them.

Right now, Poetry is the most common (modern) packaging tool being used. Have a look at its documentation and you'll see why! PDM, however, has numerous features that are be ideal for the scientific ecosystem's needs.

Specifically it allows you to use [different build back ends](https://www.pyopensci.org/python-package-guide/package-structure-code/python-package-build-tools.html#build-front-end-vs-build-back-end-tools), which is good news if you are creating either a pure python package OR a package with some C/C++ extensions.

_Poetry can't (yet) be a single solution to packaging because right now it's support of non pure python builds is not documented (and might not ever be). But it could be a great solution for those creating pure Python package._

## What's next?

In the next few blog posts i'm going to present each Python build workflow tool including:

- Flit
- PDM
- Hatch and
- Poetry.

I'll break down the pros and cons of using each tool. I will also provide examples of what using the tool looks like. In the meantime, [check out our shiny new packaging chapter here to see the overview of packaging tools and approaches for scientists creating pure Python packages](https://www.pyopensci.org/python-package-guide/package-structure-code/intro.html).

## Tutorials are also on the way

In the very near future i'll also create some packaging tutorials that will help you get started with creating a new package. Stay tuned for more on that as well!

## Got questions on Python packaging?

If you are just getting started with Python packaging OR if you have questions about it, please use our [discourse forum](https://pyopensci.discourse.group/) to ask questions. We are happy to help!
