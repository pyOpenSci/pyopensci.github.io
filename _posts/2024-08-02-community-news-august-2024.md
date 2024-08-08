---
layout: single
title: "pyOpenSci Community News: August 2024"
excerpt: "Welcome to the first edition of pyOpenSci's Community News newsletter, where we summarize and share conversations, contributions, and news related to our diverse and vibrant community! Read on for insights into running pyOpenSci sprints, Python packaging guide Spanish translation efforts, and using Hatch to create and maintain Python."
author: "Jesse Mostipak"
permalink: /blog/pyos-community-news-aug-2024.html
header:
  overlay_image: /images/headers/white-header.png
  overlay_filter: rgba(20, 13, 36, 0.8)
categories:
  - blog-post
  - community
classes: wide
toc: true
comments: true
---


## <i class="fa-regular fa-heart"></i> pyOpenSci community news

As the pyOpenSci community has continued to grow, we wanted to dedicate at least one newsletter issue a month to sharing conversations, contributions, and news related to our diverse and vibrant community! This month we’re celebrating everyone who’s participated in a pyOpenSci sprint, sharing the exciting news around the Spanish translation of our Python Packaging Guide, and elevating a discussion from GitHub around the use of Hatch for Python package creation.

## <i class="fa-solid fa-egg"></i> Hello, Hatch!

Education is one of the [three petals of pyOpenSci](https://www.pyopensci.org/blog/pyos-education-announcement.html), and to that end we strive to create resources that help learners navigate the Python packaging ecosystem with ease. This means that when we find our community members and scientists encountering consistent issues with trying to make their workflows more open and reproducible, or trying to build a Python package, we look for ways to lower (or ideally remove!) the barrier for learners. And this was exactly the scenario we were faced with in our beginner-friendly packaging tutorials. We decided that Hatch is a great user-friendly tool that scientists can use to package and share their code. However, in developing and teaching our [Get to know Hatch tutorial](https://www.pyopensci.org/python-package-guide/tutorials/get-to-know-hatch.html), we found scientists struggling to install a tool called [`pipx`](https://github.com/pypa/pipx) that can be used to install Hatch globally, rather than in a Python environment. This was causing a host of problems (in large part because `pipx` can be tricky to install on Windows machines!)

<figure>
  <img src="{{ site.baseurl }}/images/pyopensci-pillars-flower.png" alt="a circle and three petals representing the pillars of pyOpenSci. The circle at the center represents a diverse, inclusive community, and radiating out from it are the three petals–how pyOpenSci accomplishes its community goals. Those are: open peer review, community partnerships, and training and open educational resources." style="width: 70%;" />
  <figcaption><i class="fa-solid fa-heart-pulse"></i>The three petals of pyOpenSci<i class="fa-solid fa-heart-pulse"></i>.</figcaption>
</figure>

We know that it can be challenging to wrap your head around packaging, but what it boils down to is that packaging is really just a process of making your code installable so that it can be reused in different places. And while we decided to use Hatch because it makes packaging life easier, it turns out that Hatch has its own nuanced pain points that we’re still filing down! And we want to share this, because we firmly believe that even someone who is brand new to packaging can get value out of our materials.

> ...packaging is really just a process of making your code installable so that it can be reused in different places.

If you’d like to dig into the details of our Hatch installation adventures, we recommend reading through the discussions in the associated issue and PR:

* [Fix: update hatch install instructions to use the hatch installers rather than pipx in our tutorial #301](https://github.com/pyOpenSci/python-package-guide/issues/301)
* [All Hatch PRs: [Tuesday july 2 merge] Fix: update hatch install instructions](https://github.com/pyOpenSci/python-package-guide/pull/308)

And for those of you who are interested in the end result, after a robust and lively community discussion, we’ve updated our Get to know Hatch tutorial with the following changes:

1. Suggest users default to the Hatch installers rather than `pipx`.
2. Suggest Linux users use `pipx` as the install there is simpler.

It’s important to us to elevate this conversation, because all of our materials are community–developed and go through extensive technical review not only before they’re published for the first time, but also for the entire lifetime of the content! We value openness and transparency, and because of the open discussions with community members, we’ve been able to make it even easier to get started with Python packaging!

## <i class="fa-solid fa-earth-americas"></i> Coming soon: a Spanish translation of the pyOpenSci Python Package Guide

This past May, during our [PyCon US sprints](https://www.pyopensci.org/blog/pyopensci-pyconus-2024-sprints.html), pyOpenSci community member [Felipe Moreno](https://github.com/flpm) submitted [an issue to our Python Package Guide GitHub repository](https://github.com/pyOpenSci/python-package-guide/issues/287), asking if we had considered translating the guide to Spanish. Felipe is an experienced security engineering manager with a strong background in Python software development, data science and user-centered design, who leads the Security Data Science team at [Bloomberg LP](https://www.bloomberg.com/company/). Felipe has worked with other projects, setting up infrastructure support through [Sphinx](https://www.sphinx-doc.org/en/master/) for this kind of work. We were, of course, immediately thrilled with the idea, and took Felipe up on the offer! From there, Felipe built a PR that created a [translation guide for contributors](https://github.com/pyOpenSci/python-package-guide/pull/304), along with another PR that [provides internationalization support](https://github.com/pyOpenSci/python-package-guide/pull/298).

Following Felipe’s initial efforts, several of our SciPy sprint attendees continued to work on translation of the pyOpenSci Python Packaging Guide, and you can see their progress in the [guide repository on GitHub](https://github.com/pyOpenSci/python-package-guide/issues?q=is%3Aopen+is%3Aissue+label%3Ascipy-24). This has resulted in 13 PRs to our packaging guide. Our next steps are to create an editorial team composed of members who are fluent in Spanish/native speakers. This team will be  responsible for reviewing and merging these contributions. Stay tuned for updates on this incredible community-driven project!

> Following Felipe’s initial efforts, several of our SciPy sprint attendees continued to work on translation of the pyOpenSci Python Packaging Guide...resulting in 13 PRs to our packaging guide.

If you have questions about how to get involved with pyOpenSci, please reach out to [media@pyopensci.org](media@pyopensci.org) so that we can connect you with the right people!

## <i class="fa-solid fa-rainbow"></i> All the credit for our contributors

We have been absolutely floored by the community involvement with pyOpenSci over the last few months, and wanted to take a moment to recognize everyone who has been a part of our sprints at both [PyCon US](https://us.pycon.org/2024/) and [SciPy](https://www.scipy2024.scipy.org/)! In total we’ve had over 30 contributors submit 65 issues to six different pyOpenSci repos between the two events, which is incredible.

### Props to all of our PyCon contributors, including:
Jesse Bobish, [Patrick Byers](https://github.com/pb-413), [Sarah Kaiser](http://github.com/crazy4pi314), [Ryan Keith](https://github.com/ryanskeith), [Jon Kiparsky](https://github.com/jonkiparsky), [Filipe Laíns](https://github.com/FFY00), [Cheng Lee](https://github.com/chenghlee), [Felipe Moreno](https://github.com/flpm), [Matthew Ngoy](https://github.com/Vaunty), [Jeremy Paige](https://github.com/ucodery), [Ken Seehart](https://github.com/kenseehart), [Steven Silvester](https://github.com/blink1073), [Megan Sosey](https://github.com/sosey), [Zack Weinberg](https://github.com/zackw), [Brianne Wilhelmi](https://github.com/BSuperbad), [Carol Willing](https://github.com/willingc), [Sneha Yadav](https://github.com/sn3hay), and [Bradon Zhang](https://github.com/BradonZhang).

> In total we’ve had over 30 contributors submit 65 issues to six different pyOpenSci repos between the two events, which is incredible.

### Shout out to all of our SciPy contributors, including:
[Naty Clementi](https://github.com/ncclementi), [Geoff Cureton](https://github.com/gpcureton), [John Drake](https://github.com/John-Drake), [Han](https://github.com/ayhanxian), [Elise Hinman](https://github.com/ehinman), [hpodzorski-USGS](https://github.com/hpodzorski-USGS), [Sarah Kaiser](https://github.com/crazy4pi314), [kaiyamag](https://github.com/kaiyamag), [Felipe Moreno](https://github.com/flpm), [Roberto Pastor Muela](https://github.com/RobPasMue), [Olek](https://github.com/yardasol), [Santiago Soler](https://github.com/santisoler), and [Revathy Venugopal](https://github.com/Revathyvenugopal162).

## <i class="fa-regular fa-envelope"></i> Stay connected with pyOpenSci

There are so many ways to stay up-to-date with all things pyOpenSci, including following us on [LinkedIn](https://www.linkedin.com/company/pyopensci), [Fosstodon](https://fosstodon.org/@pyOpenSci), and [Bluesky](https://bsky.app/profile/pyopensci.bsky.social). You can also connect with the broader pyOpenSci community on our [Discourse forum](https://pyopensci.discourse.group/). And if you’re interested in our weekly newsletter where we share news, blog posts, and monthly updates, [subscribe on LinkedIn](https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7179551305344933888).
