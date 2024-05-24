---
layout: single
title: "My experience at PyCon US 2024 - pyOpenSci, Python packaging and community"
excerpt: "Learn about  pyOpenSci's experience at PyCon US 2024, how pyOpenSci is making Python packaging more accessible and beginner friendly and how the Python community is helping us get there."
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
* fix captions
* add stravalib note at the end of my talk section -->


<div class="notice" markdown = "1">
## TL&DR

* pyOpenSci has a strong presence at pyCon US this year. I hope this continues for years to come! We held an open space, helped run the maintainers summit (lead by Inessa Pawson for 5 years and counting), gave a talk and ran a 1 day sprint where over 16 people contributed to our efforts.
* pyOpenSci’s theme this year for PyConUS was people first. People first when trying to make technical concepts easier to understand, people first when trying to write good tutorials or documentation and people first when you are trying to solve the world’s hardest problems.
* Giving a talk on packaging at pyConUS triggered every ounce of the imposter in me. But in the end it was a rewarding experience. Having friends in the audience made a world of difference. It was calming to focus on people who I know support both me and this vibrant organization. Friends really should never let friends … package … or use Python … or do anything technical…  alone.
</div>


## Another year, another pyCon

Wow! I wasn’t sure it would be possible to top last year’s PyCon US 2023 experience
in Salt Lake City, but this year was better. People are learning about pyOpenSci. The community is excited to support our mission to **help
scientists create better software and make their science more open and
reproducible** so they can tackle the world's greatest challenges. So I was excited to leave for [PyConUS 2024](https://us.pycon.org/2024/) to continue our efforts of building diverse community that supports scientists.

PyConUS, run by the [Python Software
Foundation,](https://www.python.org/psf-landing/) is one of the biggest Python meetings in the world with a record 2,700 registrations this year.
{: .notice }



I also knew that I'd get to see a bunch of the friends who I met last year. I was returning to
this inclusive community, filled with pythonistas like me
who care, who want to learn, and most importantly who want to help each other.

And... Thanks to our incredible community manager,
[Jesse (`@kiersi` on GitHub)](https://github.com/kiersi), we now have
a [pyOpenSci](https://www.pyopensci.org) visual brand, and swag and stickers galore.

<figure>
  <img src="{{ site.baseurl }}/images/blog/2024/may/juno-stickers.png" alt="Image of a flat coated retriever chewing on a stick with a bunch of pyOpenSci stickers in front of her cut face. " style="width: 60%;" />
  <figcaption>My pip Juno prefers sticks, but also likes  pyOpenSci.</figcaption>
</figure>

### So different from last year

My experience last year was a bit different. I walked into my first PyCon
US - having no idea how I'd fit in at the meeting. I didn’t know
many people. I had never led a [mentored sprint](https://www.mentored-sprints.dev/).
And I wasn't sure how my packaging talk would be received (packaging is a notoriously thorny
topic). [But it too turned out pretty great - read more here.](pycon-2023-packaging-presentation-sprints-leah-wasser.html)

However, rather than feeling like an outsider, I met a lot of new people
who became new Python friends and colleagues. I learned about a lot of cool
projects and organizations and our sprint session went so well with tons of new contributions. Yaas!

My takeaway: if you are considering going to PyCon but are worried about not knowing
people YOU SHOULD STILL GO! You can feel the true spirit of open source (and open science) at PyCon US. That is one of my many favorite parts.


## My first main track PyCon US talk Friends don't let friends package alone

I gave my first main track talk at PyCon this year, titled “Friends Don’t Let
Friends Package Alone.” Getting a main track slot means presenting on a big
stage to a huge room of people! It was real - headset mic, incredible
tech support, and even an “escort” from the speaker room to the main stage. Wow!

Speaking of friends, it was my friends who got me through this talk. I saw them sitting in
the front rows, smiling and supporting me. They both empowered me and gave me calm.

As someone who often battles imposter syndrome, giving a talk on the "big" stage of a tech meeting
was unforgettable.

### A talk about making Python packaging more beginner friendly
My talk focused on how pyOpenSci helps beginners by breaking down
complex packaging concepts into simple, digestible pieces. I leaned into decades of
experience and study of teaching data science to various audiences, from big-ten university students
to students at under-resourced and under-served <a href="https://www.leahwasser.com/lessons-learned-working-with-tribal-hispanic-serving-schools-earth-data-science-corps" target="_blank">tribal colleges</a>. The essence of my talk was about the importance of
community and collaboration in the thorny Python packaging ecosystem. And also why documentation should focus on fundamental concepts that users need to understand rather than tools.

Our pyOpenSci community has created a comprehensive, [beginner-friendly Python
package guide](https://www.pyopensci.org/python-package-guide/) with contributions from over 50 community members. Key takeaways
from my talk:

* leverage community support,
* create early wins for users, focus on
fundamental concepts, and
* avoid “Too Many Options and Opinions” (TMO) to keep things simple
for beginners.



<figure>
  <img src="{{ site.baseurl }}/images/blog/2024/may/pyopensci-too-many-python-packaging-options-pycon-talk-2024.png
" alt="A cute image of a black flat coated retriever laying on the floor with a purple ice pack on it's head looking right at you." />
  <figcaption>Whether it's too many options or too many opinions, TMO will push beginner users away. Too many options create cognitive load that prevent users from having successful experiences.</figcaption>
</figure>


[I break this all down in more detail here if you want to read more.](#addlink)

Giving a talk at PyConUS experience reinforced my belief in the power of community to tackle complex
problems and support each other in our scientific journeys.



<!--
Or you can check out the talk itself on youtube below:

TODO: embed video - they are slowly being posted - 145 are in draft state....

2023 talk --
https://www.youtube.com/watch?v=Qxy7bxW72iA
-->


## The PyCon US maintainers Summit

This year, I had the honor of helping Inessa Pawson and Kara Sowles organize the
[PyCon US Maintainers Summit 2024](https://us.pycon.org/2024/events/maintainers-summit/), an event that has grown from an experimental
“hatchery” to its 6th year at PyCon US. Last year, I had the [privilege of giving
a talk at the summit](https://www.youtube.com/watch?v=Qxy7bxW72iA). This year, I co-organized, learning the ropes of proposal
calls, speaker selection, and navigating a summit that filled a room of 80
people within a conference boasting 2,700 registrations. The prep leading up to
the summit was manageable, but the days before and the day of were quite the
adventure!

The summit featured amazing speakers, including

* Leonard Richardson, who shared
insights on maintaining core tools like [Beautiful Soup](https://pypi.org/project/beautifulsoup4/) for 20 years and tips on
handling burnout.
* [Jessica Tegner](https://github.com/JessicaTegner). Jessica became a maintainer of one of the top 1% of all downloaded packages on PyPI - [pypandoc](https://github.com/JessicaTegner/pypandoc). She talked about her experiences taking over a package with over 3 million monthly downloads. Oh and did i mention that Jessica does all this without the ability to see? Yes she is blind. The backgrounds of the maintainers in our open source ecosystem always blows my mind.

 Working alongside Inessa Pawson, Kara Sowles and Chris Rose who are all also rockstars in the open source world was a fantastic
experience. Despite some logistical challenges, like the summit filling up
quickly and a waitlist, the event was a success. Next year, we hope to better pin down registration and also broader the scope of our summit to also include aspiring maintainers and contributors!


{% include video id="L-Ok_89QJOM" provider="youtube" %}


Also if you were wondering, yes that Monstera (plant) in the background is real! AND YES it is ginormous!

## Our second pyOpenSci sprint

<figure class="half">
  <img src="{{ site.baseurl }}/images/blog/2024/may/pycon-us-24-pyopensci-sprints-juno.png" alt="Image of the puycon us sprint board where projects signed up for different rooms." />
  <img src="{{ site.baseurl }}/images/blog/2024/may/pycon-24-sprints-pyopensci.png" alt="Image of the puycon us sprint board where projects signed up for different rooms." />
  <figcaption>The pyConUS sprint sign-up board had lots of projects. Because the rooms are large projects tend to share spaces. We ended up in the packaging room which was great as it allowed us to do some more difficult work around Python packages with C extensions!</figcaption>
</figure>


This year we had a tremendous turnout of 17 people from several countries and across the United States  for our 1-day sprint. At last count this resulted in over 35 issues and pull requests where volunteers who were there to support scientists, helped us fix issues on our website, in our tutorials and our packaging and peer review guidebooks. So many long-standing issues and bugs were fixed thanks to this wonderful python community.

If you haven’t been to a sprint before, it’s an experience that every open source enthusiast should have. Sprints are where a bunch of people come together to work on a project. If you are running sprints that support software development in a professional environment (i.e. at a company) this might mean a team of people working together on releasing a new software feature. But for open source, sprints can also mean volunteers coming to a space to help maintainers work on various parts of a project - even a project like pyOpenSci that supports other people's software has has it's own software too. We have tools that help us keep track of our [open community-lead peer review process ](https://www.pyopensci.org/about-peer-review/index.html) and other programs.


<figure>
  <img src="{{ site.baseurl }}/images/blog/2024/may/pycon-24-sprints-table-pyopensci.png" alt="Image of a round table of people talking and working at computers during our sprints." />

  <figcaption>We had people working at multiple tables on pyOpenSci issues. A handful of people worked through our Create Your First Python Package tutorials and provided input and found issues! Included in this image is Jeremiah Paige who is making our packaging guide so much better by adding actual package examples (including on that has C extensions!) using Hatch! </figcaption>
</figure>

At pyOpenSci, we have a [help-wanted project board](https://github.com/orgs/pyOpenSci/projects/3) where we list things that we could use help with across our organization. Some of the tasks that we need help with are beginner friendly. For example it's useful for beginners to test drive our [online packaging tutorials](https://www.pyopensci.org/python-package-guide/tutorials/intro.html) and then report bugs as GitHub issues. Your feedback might be errors in a lesson, typos or things that were confusing / didn’t work.

Some of our help-wanted issues are more technical too. pyOpenSci is a non-profit organization whose heart is a community of volunteers. We have infrastructure that any other open source project would have and as such we need technical help working on CI (continuous integration) workflows, guidebook infrastructure, our website and more.

As an Executive Director and Founder of pyOpenSci, I created most of this infrastructure to support our mission myself early on. While I cherish times when I have bandwidth to work on technical things, it’s hard to keep up. So I really appreciate when community members can help us tick off open issues - big and small.


## Our first pyOpenSci Open Space

<figure>
  <img src="{{ site.baseurl }}/images/blog/2024/may/pyconus-2024-pyopensci-openspace.png" alt="Image showing a room with round tables and people working at each table most of who have laptops sitting in front of them." style="width: 100%;" />
  <figcaption>I was new to leading open spaces but learned a lot for next year. We had 3 tables of people talking about different science related pain points in the Python ecosystem.</figcaption>
</figure>

This year, we ran our first pyOpenSci Open Space, bringing together 17 attendees
from organizations like Anaconda, NVIDIA, CPython, PyPA, Million Concepts,
CapitalOne, Moderna, and MongoDB. Our discussions spanned interoperability,
scientific data workflows, and Python packaging for science. We focused on the
importance of consistent tools and data formats, reducing cognitive load for
scientists, and maintaining backwards compatibility. Key takeaways included the
need for shared data formats, simple reproducibility practices, and opinionated
packaging guides.

A topic that came up a lot was the gap between exploratory code / scripts and
fully packaged / published code. There is a need for more "in between" options that support scientists sharing their code and code outputs.

The discussions in this year’s open space gave pyOpenSci much to consider moving
forward. The complexity and diversity of tools in scientific computing can
create significant cognitive load.

We need consistent and straightforward tools and
workflows that allow allowing scientists to focus on their research
rather than tools. We plan to tackle some of these and other topics during our Fall festival on September 28-29,
2024 so save the date and come ready to learn and share!


## Packaging summit
Last but not least, pyOpenSci had a strong presence at the PyConUS packaging summit this year. The summit was organization by Pradyun Gedam, Jannis ... CAM, Filipe Laines. As I have mentioned several times, packaging is one of the more thorny topics in our Python ecosystem. However, this year, things felt different compared to last.

For one there were a lot more people in the room and people with different perspectives. For one, last year I was 1/3 women in the room - this year there were people from many backgrounds and identities in the room! Last year also felt more technical whereas this year was a perfect mix of  discussing technical topics combined with a strong theme of considering user experience in both installing Python and creating packages (plus documentation - yes PLEASE)!

The Executive Director of the Python Software Foundation was in the room and there could be financial support in the future to make packaging better!

I'm hopeful.

From my perspective the biggest challenges in our ecosystem revolve around:
*  too much focus on tools and not enough focus on user experience and documentation, and
* too many options and opinions that prevent users from have early success.

There is a path forward. And people who are working on tools in the ecosystem really do care -- a lot. So please thank them - thank the maintainers and people who work on the tools that you use - or might use in the future. It's all volunteer time.

A few other highlights for m e included meeting Ofek, the maintainer of [Hatch](https://ofek.dev/projects/hatch/). Ofek has a condition which makes travel difficult. It was incredible that he was able to make it to PyCon. He also gave a talk which I will link to here once it is online!

## Wrap up

<figure>
  <img src="{{ site.baseurl }}/images/blog/2024/may/pyopensci-pyconus-2024-juno-thankyou.png" alt="Image of Juno a black down that looks like a flat coated retriever border collie mix with the pyconus swag thank you bag and a pyopensci sticker on it with the name leah wasser maintainers summit." style="width: 60%;" />
  <figcaption>Image of Juno my pup with my PyConUS thank you gifts. PyCon provides letters and gifts for people who either give talks or lead / organize events. This year I did both and got a pint glass to remember it all - #rescuedogapproved. </figcaption>
</figure>

I left pyCon US 2024 overwhelmed by the support that pyOpenSci received. People at pyCon generally care a lot and are invested in making scientists' experience in the Python ecosystem better. I also exhausted. I am an introvert by nature so even the best days of interacting with friends makes me tired!

I look forward to attending the meeting again next year - once again in Pittsburgh, Pennsylvania, USA. And I look forward to seeing my newly expanded Python family again too.
