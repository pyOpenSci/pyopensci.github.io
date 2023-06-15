---
layout: single
title: "My First Time Attending PyCon - A Tale of Sprints and Python Packaging"
excerpt: "This year I attended by first PyCon US meeting representing pyOpenSci. In this blog I talk about my experience, highlighting the sprints we lead and talks on packaging."
author: "Leah Wasser"
permalink: /blog/pycon-2023-packaging-presentation-sprints-leah-wasser.html
header:
  overlay_color: "#666"
  overlay_filter: 0.6
categories:
  - blog-post
  - highlight
  - python-packaging
  - talks
classes: wide
toc: false
comments: true
---

## How it all went down - PyCON US 2023, Salt Lake City, Utah

This year was my first time attending pyCon US! I was intimidated to attend such
a big Python meeting. For years i've attended science meetings such as
AGU (American Geophysical Union), ESRI (GIS) users conferences and ESA (Ecological
Society of America). I've been to and lead data science hackathons and been to
the annual SciPy meeting. But i've never been to a pure tech conference.

Even after teaching data science using R and Python for the past 10 years I
_STILL_ feel like an imposter sometimes.

_What's up with that?_

But I went and had a fantastic time. Getting to talk to people all day, every
day about all things Python felt like how I might imagine a trip to Disneyworld
feels for an 8 year-old... (minus the cotton candy, costumes and the upside down
rides).

I felt energized, excited. I learned so much and met SO MANY incredible people.

A few highlights of the meeting are below.

## Python packaging, packaging, packaging

Did I mention packaging? No?

Ok well I spent a lot of the meeting talking to people about Python packaging.

I even got to present in the maintainers summit (see the video below) on...
guess what?

PYTHON PACKAGING!

It was my first time recording myself talking formally about packaging and using
OBS studio. And I have to say I have some sort of shifty eye syndrome going on.
I think I still have a bit to learn from those YouTubers on video creation!

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Qxy7bxW72iA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

This presentation echoed the sentiment that I shared in this [blog post about
Python packaging.](/blog/demystifying-python-packaging.html)

### TLDR breakdown

If you're short on time, the take-aways of the talk were:

- Our [pyOpenSci packaging guide](https://www.pyopensci.org/python-package-guide/) is community-driven. It is created via a heavily-moderated review process that consisted of several rounds of reviews.
- Guidebook reviews were heavily moderated. This ensured that we formed consensus on packaging recommendations.
- Packaging might seem "messy" but really it's just a matter of knowing what tools to use and how to use them. While this is not a simple task. We believe that these community-driven resources will help the scientific Python community by demystifying the packaging ecosystem!

### Creating our packaging guide

I spent a bit of time in that video talking about how we create our guides.

- Every part of our guides are reviewed by lots of people.
- Reviews for just a few pages of the guide could have 200 or more comments.
- Our process is normally several steps including an initial writing of content that is reviewed by experts. Followed by 2 rounds of open reviews of the content. The image below describes that process.

<figure>
    <a href="/images/python-packages/pycon-packaging-review-process.png">
    <img src="/images/python-packages/pycon-packaging-review-process.png" style="max-width:100%" alt="Graphic that has a large purple thick arrow. The title says Python Packaging Guide - Our Process. The sections in the arrow include Talk with core experts (write a section of the guide), semi-closed review (core experts review), Open Review 1 (ping tool developers and maintainers and welcome broad community feedback) and Open Review 2 (welcome broad community feedback).">
    </a>
    <figcaption>Image from my talk that shows our packaging guide review process. Our packaging guide is community-driven. This means that every page of the guide has been reviewed by dozens of people with expertise in the packaging space. While this meant that it is taking extra time to create the guide, it also means the community supports it. We value community knowledge and input at pyOpenSci.
    </figcaption>
</figure>

Another part of our packaging guide review process is getting input from packaging
experts in the community. These experts come from the core python community,
the packaging community, the scientific community and even maintainers of core
packaging tools.

_Leave no stone unturned_ (my motto when doing most things).

<figure>
    <a href="/images/python-packages/pyOS-package-guide-contributors.png">
    <img src="/images/python-packages/pyOS-package-guide-contributors.png" style="max-width:100%" alt=".sdf">
    </a>
    <figcaption>Image from my talk that shows our packaging guide review process. Our packaging guide is community-driven. This means that every page of the guide has been reviewed by dozens of people with expertise in the packaging space. While this meant that it is taking extra time to create the guide, it also means the community supports it. We value community knowledge and input at pyOpenSci.
    </figcaption>
</figure>

### Why I LOVE peer review

If you haven't already guessed, I have a deep seeded love for peer review. In my
mind, anything that is produced that requires a lot of technical knowledge will
only be improved when vetted by lots of people.

Sure, it takes a lot of extra work to produce a guide that way. And it slows down
the process. But, the end product will be worth it.

As such we not only review Python packages at pyOpenSci. We also make sure that
all of our content is heavily reviewed too.

## The only (woman) in the room

So I have to say this. While pyCon was the most wonderful experience, I did have
a few awkward moments. For one, I was often one of
the few female identifying people in the room. This was particularly true are the packaging summit where I gave a small presentation related to PyPA and packaging tools!

I did feel welcomed and included. BUT, I can say that it is interesting to walk
into a room and _know_ that you are different. I noted the
things that made me feel super welcome and comfortable.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">My 1st <a href="https://twitter.com/hashtag/PyCon2023?src=hash&amp;ref_src=twsrc%5Etfw">#PyCon2023</a> is FUN. As a female in STEM, tech &amp; <a href="https://twitter.com/hashtag/opensource?src=hash&amp;ref_src=twsrc%5Etfw">#opensource</a> i&#39;m walking into &amp; presenting in rooms full of men. it&#39;s been supportive but i&#39;ve found comfort in ppl actively welcoming me. taking notes 3 developing <a href="https://twitter.com/pyOpenSci?ref_src=twsrc%5Etfw">@pyopensci</a> how 2 implement inclusion strategies <a href="https://twitter.com/hashtag/PyConUS2023?src=hash&amp;ref_src=twsrc%5Etfw">#PyConUS2023</a></p>&mdash; Leah Wasser @leahawasser@fosstodon.org 🦉 (@LeahAWasser) <a href="https://twitter.com/LeahAWasser/status/1649795095414145025?ref_src=twsrc%5Etfw">April 22, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

## pyCon was more about (freakin amazing) people than code

I can't even begin to highlight ALL OF THE AMAZING PEOPLE I met at pyCon. In some
cases I met folks who I had been interacting with online Such as C.A.M. from the
Python core team who I "met" on the Python Discourse. Or [Pradyun](https://github.com/pradyunsg) another Python core dev who has been
involved with pyOpenSci providing guidance on the packaging space for months. Pradyun is also a part of our advisory council. His expertise is really invaluable to our organization.

I got to meet [Erik](https://github.com/eriknw) who's Python package - [python-graphblas is going through our
peer review process right now.](https://github.com/pyOpenSci/software-submission/issues/81)

I met Chase, CEO of a really cool company called [Million Concepts](https://millionconcepts.com/about.html) and some of the folks from the [Python Heliophysics community](https://heliopython.org/).

Finally, I got to meet and hang out with the amazing [Inessa Pawson](https://github.com/InessaPawson). If you haven't heard of
Inessa's work it's extraordinary. Inessa has been working as a contributor lead
for the Numpy project and is also a project manager for Open Teams.

There are so many other people who I got to know and build working relationships
at this meeting.

## pyOpenSci Sprints at PyCON

pyOpenSci also lead 2 sprints at pyCon! On Sunday we lead a mentored sprint and
had a full table plus an overflow table of people who wanted to contribute!

<figure>
    <a href="/images/people/pycon-2023-mentored-sprints-pyopensci.png">
    <img src="/images/people/pycon-2023-mentored-sprints-pyopensci.png" style="max-width:100%" alt="Image showing people at laptops sitting around a round table wearing masks during our PyCon 2023 mentored sprint. ">
    </a>
    <figcaption>Contributors working together in small groups during our mentored sprints at PyCon 2023. People worked together on issues in pairs and had help from dedicated mentors. Most of the contributors had Python experience but also most had never contributed to open source before.
    </figcaption>
</figure>

It was incredible. The people at the sprint were not the people who I expected.
Many of them had significant technical skills and backgrounds. But many of them
also had never committed to an open source project. Perhaps they had used subversion
but not git / GitHub. Perhaps they knew python well but didn't know where to start
in terms of contributing.

At the sprints I was grateful to have [Luiz Irber](https://github.com/luizirber) and [David Nicholson](https://github.com/NickleDave) supporting
the (larger-than-expected) group! Luiz served as editor for pyOpenSci years ago
during one of our very first reviews. And David is now our editor in chief of
pyOpenSci.

In total we ended up with 8 pull requests submitted during the sprints and 2
others submitted after. Every pull request was from a new contributor to
pyOpenSci. And also they were mostly made by those new to contributing in general.

If you want to check any of them out - please click on any of the links below!

<div class="notice" markdown="1">

## Contributions from the pyOpenSci mentored and regular sprints at PyCon US 2023

Contributions to open source tools and communities can come in all shapes and
sizes. Note that some of the items below are small fixes (which are a huge help).
And others are a bit more involved.

### More technical pr's

- [This pr was a bit more involved and included some changes to how we handle tokens in our metrics package.](https://github.com/pyOpenSci/update-web-metadata/pull/24)
- [This Python code update fixed the format that we were using to manage authentication tokens](https://github.com/pyOpenSci/update-web-metadata/pull/23)
- [This is a more technical PR by Austin that updated some of our typing and cleaned up some of our API request calls](https://github.com/pyOpenSci/update-web-metadata/pull/19)
- [This pr by Tiffany updated parsing our review issues. It ensured that we grabbed all maintainers from a review issue so we can list them in our package list once the package is accepted.](https://github.com/pyOpenSci/update-web-metadata/pull/14)
- [This pr was another technical one submitted by Austin to fix how we were authenticating with the GitHub API](https://github.com/pyOpenSci/update-web-metadata/pull/11)
- [Barnabas submitted this PR. It fixes a glitch in the website to ensure all maintainers are listed there (building on top of tiffany's PR above that fixed the code that actually collected maintainer names). ](https://github.com/pyOpenSci/pyopensci.github.io/pull/172)

### Less Technical PR's

These pr's are highlighted here because it's important to know that not all contributions
need to be highlight technical. They can be text fixes that are equally important to projects.

- Not all pr's need to be huge and technical. This one was actually done using only the GitHub interface! [This is a much less technical pr that updated the repos that we were using to grab contributors from. We wanted to grab all contributors so we can recognize them on our website.](https://github.com/pyOpenSci/update-web-metadata/pull/13)
- [This was a less technical but equally important issue opened that suggested we add some more information to our guidebook. Not all contributions need to be code!](https://github.com/pyOpenSci/pyopensci.github.io/issues/168)
- [This is another example of a pr that has no code involved! It was an update to our guidebook simplifying text that was redundant! Submitted by Mahe](https://github.com/pyOpenSci/software-peer-review/pull/210)

### Packaging Guide pull requests

In the spirit of understanding that not all contributions need to be code! The pr's
below, submitted by Jeremy, identified lots of typos in our packaging guide! This
was SO SO helpful to us!!

- [Packaging guide typo fixes.](https://github.com/pyOpenSci/python-package-guide/pull/82)
- [Second pr fixing typos.](https://github.com/pyOpenSci/python-package-guide/pull/81)

</div>

All of the contributors are now listed on our website. And we are grateful for
each and every one of them!

## Would I attend pycon again?

I'm sure I don't have to tell you the answer to that question.

heck-yea I would!

The people I met at that meeting even sitting in the lunch room were incredible.
And many of them have become colleagues that I am still in touch with and who
are now involved with pyOpenSci.

## A final highlight of the meeting - David Nicholson's Lightnight talk

One of the other highlights of the meeting that I can't forget to mention is
David getting up on the ginormous speaker stage in the main ballroom and
giving a lightning talk about his experience submitting Crowsetta, a Python package, to pyOpenSci. Check out a blog on that here.
