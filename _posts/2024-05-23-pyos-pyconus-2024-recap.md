---
layout: single
title: "pyOpenSci at PyCon US 2024 Recap"
excerpt: ""
author: "Leah Wasser"
permalink: /blog/recap-pyos-pyconus-2024.html
header:
  overlay_image: images/blog/2024/may/pycon-us-2024.png
  overlay_filter: 0.6
categories:
  - blog-post
  - community
classes: wide
toc: true
comments: true
---

<!-- TODOs:
* embed video when live
* add graphics from social that jesse sent
* fix captions  -->


## Another year, another pyCon

Wow! I wasn’t sure it would be possible to top last year’s PyCon US experience
in Salt Lake City, but this year was even better.

I was excited to get to [PyConUS 2024](https://us.pycon.org/2024/) this year. People are learning about pyOpenSci. The community is excited to support our mission to **help
scientists create better software and make their science more open and
reproducible** so they can tackle the world's greatest challenges.

I also knew that I'd get to see a bunch of the friends who I met last year. I was returning to
this inclusive community, filled with pythonistas like me
who care, who want to learn, and most importantly who want to help each other.

And... Thanks to our incredible community manager,
[Jesse (`@kiersi` on GitHub)](https://github.com/kiersi), we now have
a [pyOpenSci](https://www.pyopensci.org) visual brand, and swag and stickers galore.

<figure>
  <img src="{{ site.baseurl }}/images/blog/2024/may/juno-stickers.png" alt="Image of Juno with pyOpenSci stickers" style="width: 60%;" />
  <figcaption>Image of Juno with pyOpenSci stickers that Jesse posted on social</figcaption>
</figure>

### So different from last year

My experience last year was a bit different. I walked into my first PyCon
US - one of the biggest Python meetings in the world run by the  [Python Software
Foundation.](https://www.python.org/psf-landing/). I had no idea how I'd fit in at the meeting. I didn’t know
many people. I had never led a  [mentored sprint](https://www.mentored-sprints.dev/).
And I wasn't sure how my packaging talk would be received (packaging is a notoriously thorny
topic).

However, rather than feeling like an outsider, I met a lot of new people
who became new Python friends and colleagues. I learned about a lot of cool
projects and organizations and our sprint session went so well with tons of new contributions. Yaas!

My takeaway: if you are considering going to PyCon but are worried about not knowing
people YOU SHOULD STILL GO! You can feel the true spirit of open source (and open science) at PyCon US. That is one of my many favorite parts.

<div class="notice" markdown = "1">
## TL&DR

* pyOpenSci has a strong presence at pyCon US this year. I hope this continues for years to come! We held an open space, helped run the maintainers summit (lead by Inessa Pawson for 5 years and counting), gave a talk and ran a 1 day sprint where over 16 people contributed to our efforts.
* pyOpenSci’s theme this year for PyConUS was people first. People first when trying to make technical concepts easier to understand, people first when trying to write good tutorials or documentation and people first when you are trying to solve the world’s hardest problems.
* Giving a talk on packaging at pyConUS triggered every ounce of the imposter in me. But in the end it was a rewarding experience. Having friends in the audience made a world of difference. It was calming to focus on people who I know support both me and this vibrant organization. Friends really should never let friends … package … or use Python … or do anything technical…  alone.
</div>

## My first main track PyCon US talk Friends don't let friends package alone

I gave my first main track talk at PyCon this year, titled “Friends Don’t Let
Friends Package Alone.” Getting a main track slot means presenting on a big
stage to a huge room of people! It was the real deal—headset mic, incredible
tech support, and even an “escort” from the speaker room to the main stage. Wow!

Speaking of friends, it was my friends who got me through this talk, sitting in
the front rows, smiling and supporting me. Despite my nerves, they made me feel
at ease.

As someone who often battles imposter syndrome, giving a talk on the main stage
was unforgettable. I focused on how pyOpenSci helps beginners by breaking down
complex packaging concepts into simple, digestible pieces. I leaned on my
experience teaching data science to various audiences, from big-ten university students
to students at under-resourced and under-served <a href="https://www.leahwasser.com/lessons-learned-working-with-tribal-hispanic-serving-schools-earth-data-science-corps" target="_blank">tribal colleges</a>. The essence of my talk was about the importance of
community and collaboration in the thorny Python packaging ecosystem.

Our pyOpenSci community has created a comprehensive, [beginner-friendly Python
package guide](https://www.pyopensci.org/python-package-guide/) with contributions from over 50 community members. Key takeaways
from my talk:

* leverage community support,
* create early wins for users, focus on
fundamental concepts, and
* avoid “Too Many Options and Opinions” (TMO) to keep things simple
for beginners.

[I break this all down in more detail in this post.](#addlink)

Giving a talk at PyConUS experience reinforced my belief in the power of community to tackle complex
problems and support each other in our scientific journeys.

Or you can check out the talk itself on youtube below:

<!-- TODO: embed video - they are slowly being posted - 145 are in draft state.... -->


## The PyCon US maintainers Summit

This year, I had the honor of helping Inessa Pawson and Kara Sowles organize the
[PyCon US Maintainers Summit 2024](https://us.pycon.org/2024/events/maintainers-summit/), an event that has grown from an experimental
“hatchery” to its 6th year at PyCon US. Last year, I had the privilege of giving
a talk at the summit. This year, I co-organized, learning the ropes of proposal
calls, speaker selection, and navigating a summit that filled a room of 80
people within a conference boasting 2,700 registrations. The prep leading up to
the summit was manageable, but the days before and the day of were quite the
adventure!

The summit featured amazing speakers, including

* Leonard Richardson, who shared
insights on maintaining core tools like [Beautiful Soup](https://pypi.org/project/beautifulsoup4/) for 20 years and tips on
handling burnout.
* [Jessica Tegner](https://github.com/JessicaTegner). Jessica became a maintainer of one of the top 1% of all downloaded packages on PyPI - [pypandoc](https://github.com/JessicaTegner/pypandoc). She talked about her experiences taking over a package with over 3 million monthly downloads. Oh and did i mentiont hat Jessica does all this without the ability to see? Yes she is blind. The backgrounds of the maintainers in our open source ecosystem always blows my mind.

 Working alongside Inessa Pawson, Kara Sowles and Chris Rose who are all also rockstars in the open source world was a fantastic
experience. Despite some logistical challenges, like the summit filling up
quickly and a waitlist, the event was a success. Next year, we hope to better pin down registration and also broader the scope of our summit to also include aspiring maintainers and contributors!


{% include video id="L-Ok_89QJOM" provider="youtube" %}


Also if you were wondering, yes that Monstera (plant) in the background is real! AND YES it is ginormous!

## Our First pyOpenSci Openspace
This year, we ran our first pyOpenSci Open Space, bringing together 17 attendees
from organizations like Anaconda, NVIDIA, CPython, PyPA, Million Concepts,
CapitalOne, Moderna, and MongoDB. Our discussions spanned interoperability,
scientific data workflows, and Python packaging for science. We focused on the
importance of consistent tools and data formats, reducing cognitive load for
scientists, and maintaining backwards compatibility. Key takeaways included the
need for shared data formats, simple reproducibility practices, and opinionated
packaging guides. Notably, we highlighted the gap between exploratory code and
fully packaged solutions, emphasizing intermediate options for sharing code and
outputs.

The discussions in this year’s open space gave pyOpenSci much to consider moving
forward. The complexity and diversity of tools in scientific computing can
create significant cognitive load. Consistent and straightforward tools and
workflows are essential for allowing scientists to focus on their research
rather than software intricacies. By providing secure, reproducible, and
user-friendly solutions, the scientific community can enhance productivity and
ensure more reliable research outcomes. We plan to tackle these topics in talks
and interactive online workshops during our fall festival on September 28-29,
2024.

## Our second pyOpenSci sprint
pyOpenSci sprints at pyConUS 2024
This year we had a tremendous turnout of 17 people from several countries and across the United States  for our 1-day sprint. At last count this resulted in over 35 issues and pull requests where volunteers who were there to support scientists, helped us fix issues on our website, in our tutorials and our packaging and peer review guidebooks. So many long-standing issues and bugs were fixed thanks to this wonderful python community.

If you haven’t been to a sprint before, it’s an experience that every open source enthusiast should have. Sprints are where a bunch of people come together to work on a project. If you are running professional development sprints, this might mean lots of people (a team) working together on releasing a new feature of a project. But for open source, sprints can also mean volunteers coming to a space to help maintainers work on various parts of a project.

For pyOpenSci, we have a help-wanted project board <link> where we list things that we could use help with across our organization. Some of the tasks are beginner friendly - such as test driving our online packaging tutorials <link> and the contribution providing us with feedback in the form of a GitHub issue. That feedback might be bugs that they found in the lesson, typos or things that were just confusing / didn’t work. Some of our help wanted issues are more technical too. pyOpenSci is a non-profit organization whose heart is a community of volunteers.  We have infrastructure that any other open source project would have and as such we need technical help working on CI (continuous integration) workflows, guidebook infrastructure, website and more. As an executive director and founder of pyOpenSci, I created most of this infrastructure to support our mission. While I cherish times when I have bandwidth to work on technical things, it’s hard to keep up. So I really appreciate when community members can help us, tick off open issues - big and small.



## Wrap up

<figure>
  <img src="{{ site.baseurl }}/images/blog/2024/may/pyopensci-pyconus-2024-juno-thankyou.png" alt="Image of Juno a black down that looks like a flat coated retriever border collie mix with the pyconus swag thank you bag and a pyopensci sticker on it with the name leah wasser maintainers summit." style="width: 60%;" />
  <figcaption>Image of Juno my pup with my PyConUS thank you gifts.</figcaption>
</figure>

I left PyCon US 2024 this year exhausted (I am an introvert by nature so even the best days of interacting with friends makes me tired!) but also overwhelmed by the support that pyOpenSci received. People at pyCon generally care a lot and are invested in making the experiences of scientists in the Python ecosystem better.

I look forward to attending the meeting again next year - once again in Pittsburg, Pennsylvania, USA and to see my now expanded Python family. And to collect more information that will help pyOpenSci better serve the scientific Python community.
