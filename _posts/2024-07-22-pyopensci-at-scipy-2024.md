---
layout: single
title: "pyOpenSci a Recap of @ SciPy 2024 Meeting - Tacoma, Washington"
excerpt: "More"
author: "Leah Wasser"
permalink: /blog/pyos-scipy-2024-recap.html
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


<div class="notice" markdown = "1">
## TL;DR

* pyOpenSci lead 3 incredibly successful events at SciPy this year: A tutorial,
a talk and a 1.5 day sprint
* During our sprint we had over 35 GitHub issues and pull requests submitted by XX new contributors.
* Our tutorial had 40 registrations and about 30 people showed up. Almost all learners had never created a Python package before and almost all learners were successful creating their first Python package.
* I thoroughly enjoyed connect with new and old colleagues and friends.

</div>

## My SciPy 2024 experience

This year was my 4th time attending the annual SciPy meeting - a meeting organized by NumFocus that celebrates the scientific Python ecosystem. My first experience was in 2019,
where we held the very first pyOpenSci BoF (Birds of a Feather) session.

A birds of a feather session also known as a BoF is a community organized event where people lead a discussion around a specific topic. Our BoF was about our peer review process that we had just kicking launched that year.
{: .notice }

In previous years, pyOpenSci was less known in the community. This year, however, was different. There were many
familiar faces including:

* maintainers of packages that we have reviewed and accepted
through our [scientific Python software peer review process](/about-peer-review/index.html),
* colleagues who I have met at other meetings such as PyCon,
* reviewers and editors from our community,
* members of our advisory council, contributors, and
* friends — so many friends.

This year, I was busy:

1. Running an in-person tutorial: Create Your First Python Package.
2. Giving a talk in the Maintainers Track (what an honor!).
3. Working the hallway track.
4. Running a 1.5-day sprint that resulted in over 35 issues and pull requests. Wow.

Admittedly, I started off this conference behind and frazzled. You see, pyOpenSci
has been growing in recent months. With that
growth comes more wonderful people to support and engage with. More people
getting involved does mean more work for pyOpenSci. However, the time is worth
it as all of this effort is moving pyOpenSci's mission of support open science forward.

<figure>
  <img src="{{ site.baseurl }}/images/blog/2024/july/scipy-24-pyopensci-package-submission-growth.png" alt="A bar plot with purple bars titled - number of submissions by quarter per year. The plot shows the number of submissions that pyOS has received since it started peer review in 2019. We started with only a few submissions per quarter but the numbers have grown to about 13 per quarter on average in the 2024. " style="width: 100%;" />
  <figcaption><i class="fa-solid fa-heart-pulse"></i> pyOpenSci runs an open software peer review process. Above you can see how submissions have increased since we started in 2019. I started full time on pyOpenSci in late 2022. <i class="fa-solid fa-heart-pulse"></i>.</figcaption>
</figure>

In the end, even though I wasn't quite as prepared as I wanted to be, my talk
and the workshop went great! This was a lesson for me in understanding that
things can be less than perfect and still go well!

More on all of that below. But first--what is the SciPy meeting?

## About the SciPy meeting

If you haven't attended this meeting before, let me give you the run down. The
SciPy Conference is an annual meeting dedicated to celebrating and learning
more about scientific computing using the Python programming language. The
meeting started back in [~2002](https://web.archive.org/web/20021030003450/http://www.scipy.org/site_content/scipy02/). The early meetings were run by EnThought and were smaller in size and scope. Over the years, SciPy has evolved significantly, mirroring
the [<i class="fa-solid fa-rocket"></i> explosive growth of the Python ecosystem <i class="fa-solid fa-rocket"></i>](https://stackoverflow.blog/2023/01/26/comparing-tag-trends-with-our-most-loved-programming-languages/) in scientific computing and data science.

Today, the SciPy Conference, hosted by [NumFocus](https://numfocus.org/),
attracts over 800 attendees from diverse scientific fields such as astronomy, biology,
geophysics, and more. Today, SciPy is much more than a workshop.

SciPy features:

* Incredible keynote speakers, such as the inspirational [Carol Willing.](https://www.youtube.com/watch?v=s-W-UvGgDco)
* Talks from the community about tools and approaches.
* Poster sessions that allow presenters to directly engage and discuss cool work with the meeting attendees.
* Tutorials lead by community members (and pyOpenSci) that cover important scientific data processing & analysis related Python skills.
* Sprints: collaborative coding sessions where people come to contribute to and learn about open-source projects.

I'd be remiss if I didn't mention the lightning talk sessions. During lightning
talks, people throw their name into a literal bucket. If their name is selected,
then they are given 5 minutes (or less if the dice
are rolled) to talk about a topic that they love. At SciPy there are often
off-beat distractions from the moderators along the way such as the infamous
grab claw (see below). Yes, it is as ridiculously hilarious as it seems.

<figure>
  <img src="{{ site.baseurl }}/images/blog/2024/july/scipy-24-lobster-claw.jpeg" alt="Photograph showing a man with a beard holding a red lobsterclaw - while deviously looking at a blond woman at a podium who is smirking at him. She is wearing a blue top and beige pants" style="width: 90%;" />
  <figcaption><i class="fa-solid fa-heart-pulse"></i> It's a commonly knowns that lighting talk organizers enjoy heckling presenters. Sometimes they do so using props such as the lobster claw seen here<i class="fa-solid fa-heart-pulse"></i>. Photo Credit: ScipyConf Fosstodon </figcaption>
</figure>

[Did someone mention sharks? More here on my experience last year giving a SciPy lighting talk.](scipy-2023-community.html)

The entire meeting is also community driven. With groups of volunteers organizing sessions, engaging with presenters and making sure that everyone feels included.

Since the pandemic, the SciPy meeting has adapted to support
virtual/hybrid participation, which has further increased its reach. In fact,
some of the remote attendees also helped to organize the meeting!

If you are
a Pythonista who loves science, this meeting might be for you!

## Create your first Python package tutorial @ SciPy 2024

My first time teaching IN PERSON since... forever.
Ok since 2020.

My adventure at the SciPy meeting kicked off with a 4-hour tutorial entitled: Create Your First Python Package: From Code to Module. This tutorial was an expanded version of the [Create Your First Python Package tutorial that pyOpenSci ran in April 2024](pyos-education-announcement.html). In our first workshop, We have over 20 people create their first Python
package. We had similar success in our SciPy tutorial.

I realized when I got to SciPy that I hadn't actually taught in person since 2020! To this day, I vividly remember the last in-person class that I led for the [Professional Graduate Program in Earth Data Analytics that I created at CU Boulder](https://catalog.colorado.edu/graduate/colleges-schools/interdisciplinary-programs/earth-data-analytics-foundations-graduate-certificate/). That class happened on the Wednesday before the pandemic lockdown started in the United States. It was a sad day to say "goodbye for now" to in-person teaching and to my students. Teaching and working with learners is, after all, one of my favorite things.

It was a rush to be back in the "classroom" at SciPy 2024!

### Workshop setup

Our workshop room was full of people who were eager to better understand Python packaging. We also had great helpers and all of the tech in the room just worked.
The SciPy tutorial organizers did an amazing job of ensuring everything ran smoothly.

After a really tricky internet situation at PyCon this past May, I really
appreciated the smoothness of the room setup.

A special shout-out to pyOpenSci community members
[Jeremiah](https://www.github.com/ucodery) and
[Isabel Zimmerman](https://github.com/isabelizimm), who were there and
committed to helping all of the learners having a successful experience. Their
support and expertise was invaluable.

<figure>
  <img src="{{ site.baseurl }}/images/blog/2024/july/pyos-tutorial-scipy-24.jpeg" alt="A photograph showing a large open and well lit meeting room with two rows of horizontal tables. In the room are people working at laptops. There is an instructor in the front with their laptop screen projected on the screen" style="width: 90%;" />
  <figcaption><i class="fa-solid fa-heart-pulse"></i> This image was taken about half way into the workshop. We had lost a few folks to other conference activities but most were still engaged! <i class="fa-solid fa-heart-pulse"></i> Source: SciPyConf Fosstodon.</figcaption>
</figure>

### Navigating the packaging // tutorial challenges together

Of course, there were a few challenges too.

1. Many participants came without working through the setup instructions. This was particularly problematic for folks with government issued laptops where they couldn't install software.

2. While most workshops could use the cloud platform that Quantsite labs hosts called Nebari, it didn't support our development use case. Thus we didn't have a "backup" platform for participants that didn't get things setup to use. However, I was able to later work on this with [Sarah Kaiser](https://github.com/crazy4pi314) from GitHub, who got
us set up with a Codespace later that week that we can use for future workshops.

3. Installation quirks. In this workshop, we switched from suggesting [pipx](https://pipxproject.github.io/pipx/)
to using [Hatch installers](https://hatch.pypa.io/latest/install/). We made this change because Windows users previously had significant issues installing pipx.

The glitch we encountered was that Hatch would initiate an
update on some computers that already had it installed when users ran
`hatch --version` for the first time. This is something we need to address
in the future or at least warn users about.

### Workshop outcomes

Challenges aside, we also had a lot of successes to celebrate!

Similar to our online workshop in April <link>, many attendees created their first Python package!!


<figure class="half">
    <a href="{{ site.baseurl }}/images/blog/2024/july/pyopensci-have-you-created-package.png"><img src="{{ site.baseurl }}/images/blog/2024/july/pyopensci-have-you-created-package.png" alt="An image showing a question - have you created a Python package before. Below is a bar plot with 3 colored bars. 3 people answered Yes, 10 people answered no and 4 answered I strugged trying."></a>
    <a href="{{ site.baseurl }}/images/blog/2024/july/pyopensci-workshop-successful-package.png"> <img src="{{ site.baseurl }}/images/blog/2024/july/pyopensci-workshop-successful-package.png" alt="An image showing a question - Were you able to create a package during this workshop. 10 people answered yes, 1 person answered no, and no one answer i am not sure."></a>
    <figcaption>We used Mentimeter during the workshop to get feedback from participants along the way. Next workshop I think I will use this tool more to get feedback. Feedback is so important to iteratively improve any event but is more important when teaching as it allows you to address pain points dynamically which both improve online lessons and in person trainings. </figcaption>
</figure>

The verbal feedback from participants was overwhelmingly positive.

Comments like

> "One of the best workshops I've been to"

and

>"I'm always behind in a workshop—this is the first one where I could actually keep up"

made all the effort worthwhile.

Needless to say, I left the event with a full heart.🫶

And several enjoyed the process so much that they joined our sprint
afterwards to help build out the packaging guide. More on that below.

## My talk on Python packaging at SciPy 2024

The very next day, I gave my first ever talk in the maintainers track at SciPy. <i class="fa-solid fa-gift"></i>

What an honor to be selected as a speaker.

This year, the SciPy maintainers track, was organized and hosted by [Inessa Pawson](https://github.com/InessaPawson), [Brigitta Sipőcz](https://github.com/bsipocz)
[Matt Craig](https://github.com/mwcraig), [Mridiul Seth](https://github.com/MridulS). It kicked of with a fantastic talk by [Eric Mah](https://github.com/ericmjl). Eric discussed how he has been bringing open source values and workflows to the corporate environment at Moderna (yes the same place that makes one of the  more popular COVID vaccines). His talk was interesting because it carefully navigated both the benefits of open source for corporate teams while also acknowledging some of the tensions.

My talk closed out the session.

<figure>
  <img src="{{ site.baseurl }}/images/blog/2024/july/pyopensci-talk-leah-wasser-scipy24.jpg" alt="xxx" style="width: 90%;" />
  <figcaption><i class="fa-solid fa-heart-pulse"></i> xxx<i class="fa-solid fa-heart-pulse"></i>. caption  Photo Credit: Inessa Pawson</figcaption>
</figure>

### pyOpenSci and community

My talk was about how pyOpenSci has been carving out space and coordinating community efforts to address several core challenges in our ecosystem:

1. Scientists finding and using the right open source tools
2. Scientists sharing their code and building better software
3. Scientists getting credit for their open source work
4. Packaging which has been an ongoing thorny topic in the Python ecosystem - a topic that I discussed in my [PyCon talk in April](blog/python-packaging-friends-dont-let-friends-package-alone.html) which is also on YouTube if you want to check it out.

### Python memes for the win

My talk started off with a bang thanks to the best meme ever created by
[Filipe Fernandes](https://github.com/ocefpaf) while is also a conda-forge
maintainer. Filipe was someone who early on introduced me to conda environments.
I was at the time fighting with spatial data packages that I needed my students
to learn. People started to laugh at this one because it's widely known that
fighting with GDAL can be a challenge in a Python environment. But thanks
to people like Filipe and conda-forge it's a bit more of a thing of the past for
most users as spatial environments are much easier today to manage than they
used to be!

<figure>
  <img src="{{ site.baseurl }}/images/blog/2024/july/pyopensci-leah-talk-pip-install-gdal.jpg" alt="XXX" style="width: 90%;" />
  <figcaption><i class="fa-solid fa-heart-pulse"></i> Thinking about Pip installing gdal is not for the faint of heart. In the early years of using Python for spatial data, it was incredibly challenging to create a successful environment that contained spatial libraries (that often depend on GDAL)... <i class="fa-solid fa-heart-pulse"></i>. Photo Credit: Luis López</figcaption>
</figure>

### pyOpenSci is addressing critical pain points in the scientific Python ecosystem

I talked about the pain points that I had experienced both as a educator teaching spatial / earth data science to students and as a maintainer of stravalib (a package that supports my previous, pre-getting Covid obsession with ultra mountain running).

<figure>
  <img src="{{ site.baseurl }}/images/blog/2024/july/pyopensci-what-if.png" alt="Image of a flat coated retriever chewing on a stick with a bunch of pyOpenSci stickers in front of her cut face. " style="width: 100%;" />
  <figcaption><i class="fa-solid fa-heart-pulse"></i> Thinking about Pip installing gdal is not for the faint of heart. In the early years of using Python for spatial data, it was incredibly challenging to create a successful environment that contained spatial libraries (that often depend on GDAL). <i class="fa-solid fa-heart-pulse"></i>. Photo Credit: Luis López</figcaption>
</figure>

### pyOpenSci and inclusive, open software peer review

And I talked about how pyOpenSci is using an inclusive, community-lead peer review
process to achieve several goals:

* Help scientists find vetted, trusted and maintained software
* Help scientists build better software
* Provide maintainers with credit for the important work that they are doing to support open science.

<figure>
  <img src="{{ site.baseurl }}/images/blog/2024/july/pyopensci-community-lead-software-peer-review.png" alt="xxx. " style="width: 90%;" />
  <figcaption><i class="fa-solid fa-heart-pulse"></i> XXX <i class="fa-solid fa-heart-pulse"></i>. Photo Credit: Luis López</figcaption>
</figure>

And how we partner with communities like the Journal of Open Source Software
and Astropy to leverage resources and move forward together.

<figure>
    <a href="{{ site.baseurl }}/images/blog/2024/july/pyopensci-partnerships-joss-astropy.png"> <img src="{{ site.baseurl }}/images/blog/2024/july/pyopensci-partnerships-joss-astropy.png" alt="" style="width: 90%;"></a>
    <figcaption>Caption describing these two images. blah</figcaption>
</figure>

### pyOpenSci and partner communities

Where ever we can, pyOpenSci partners with other communities and leverages their
work. Building on top of and leveraging each other's work IS the true spirit of
open source and open science.

<figure>
  <img src="{{ site.baseurl }}/images/blog/2024/july/pyopensci-community-leverage-partners.png" alt="Image of a flat coated retriever chewing on a stick with a bunch of pyOpenSci stickers in front of her cut face. " style="width: 90%;" />
  <figcaption><i class="fa-solid fa-heart-pulse"></i> xxx<i class="fa-solid fa-heart-pulse"></i>. Photo Credit: Luis López</figcaption>
</figure>

I also discussed our work in the Python packaging ecosystem specifically around
making packaging more beginner accessible and friendly. And how we lean into
community peer review that once again leverages input from people across the
ecosystem including

* Python packaging authority members (PyPA)
* Packaging tools maintainers
* Packaging experts
* scientists
* people new to packaging

to create a guidebook that is both accurate and beginner friendly.

One of the decisions that we mad as a community early on was to use Hatch as
an end-to-end packaging tool. We believe that this tool is user friendly and
supports many of the use cases that scientists have when sharing their code.

<figure class="half">
    <a href="{{ site.baseurl }}/images/blog/2024/july/pyopensci-package-guide-review.png"><img src="{{ site.baseurl }}/images/blog/2024/july/pyopensci-package-guide-review.png"></a>
    <a href="{{ site.baseurl }}/images/blog/2024/july/pyopensci-packaging-hatch.png"><img src="{{ site.baseurl }}/images/blog/2024/july/pyopensci-packaging-hatch.png"></a>
    <figcaption>Caption describing these two images.</figcaption>
</figure>

I met some really great people and had some good discussions with people about
all things peer review and Python packaging. The presentation will be on YouTube
at some point and I will update this post with it when it's live.
However, for the meantime, my slides are here on [Zenodo pyOpenSci community](https://zenodo.org/records/8045448).

## The hallway track

It seems like this year has been the year of the hallway track. The hallway
track is the time that you spend in the hallways of a meeting talking to people
that you don't normally get to work with in person. Sometimes the hallway track
of a meeting is even more valuable than attending the talks. Because you can
always watch the talks after on YouTube, but you can't always work with someone
in real life like you can at a meeting like SciPy that attracts people from
around the world.

I spent a lot of time talking with colleagues, friends and community members about all things Python, open source and open science.

* I spent some time working with Sarah Kaiser on our new GitHub container to support workshops
* I had an ad hoc sprint with Angus and Rowan from MyST Markdown community in support of developing our [pyOpenSci peer review metrics dashboard](https://www.pyopensci.org/peer-review-metrics).

And then generally I spent time catching up with colleagues chatting about all things packaging and scientific Python.

<figure>
    <a href="{{ site.baseurl }}/images/blog/2024/july/inessa-pawson-numpy-scipy-24.png"><img src="{{ site.baseurl }}/images/blog/2024/july/inessa-pawson-numpy-scipy-24.png"></a>
    <figcaption>A blurry photo of Inessa and Chuck - Numpy maintainers giving a Numpy project update during the plenary session at SciPy 2024. </figcaption>
</figure>

## Sprints

TODO: wrap up other blog post and link to it here.

Every year at SciPy we spend the last two days of the meeting sprinting.
This year was the first year that I stayed for both days of the sprints.

### A brief overview of open source sprints

If you haven't been to an open source sprint before, a sprint is an open session where contributors join a project and help address specific issues and tasks that the project needs help with. Sprints are a lot of fun because if there is enough time, you can both make a lot of progress on a project and also you can support first time and new contributors in making their first contributions!!

If you want to learn more about sprints and how pyOpenSci runs them, check out this blog post <TODO -- add link>.
{: .notice }

This is what the second sprint room looked like this year as SciPy. There was a scramble to find a new location for our sprints given some
power issues stemming from an ugly accident in Tacoma this year that were unexpected so our space was a lot smaller than usual.

But we made it work!
<figure>
    <a href="{{ site.baseurl }}/images/blog/2024/july/pyopensci-scipy-24-sprints.jpeg"><img src="{{ site.baseurl }}/images/blog/2024/july/pyopensci-scipy-24-sprints.jpeg" alt=""></a>
    <figcaption> xxx</figcaption>
</figure>

We had a great group this year who worked on a set of different tasks including:

* Jon tackled a long standing issue to sync our labels across all of our repositories. We have a lot of labels and they are all different in each repository.
* We had a few people working on our Python packaging guide which is now being translated to Spanish!
* We had someone who was excited about sphinx working on our pyos-sphinx-theme.
* And finally we had a handful of people working on our MyST Markdown [peer review metrics dashboard](https://www.pyopensci.org/peer-review-metrics).

<figure class="half">
    <a href="{{ site.baseurl }}/images/blog/2024/july/pyopensci-sprints-day-1.png"><img src="{{ site.baseurl }}/images/blog/2024/july/pyopensci-sprints-day-1.png" alt="XX"></a>
    <a href="{{ site.baseurl }}/images/blog/2024/july/pyopensci-sprints-day-2.png"><img src="{{ site.baseurl }}/images/blog/2024/july/pyopensci-sprints-day-2.png" alt="XXX"></a>
    <figcaption> xxx</figcaption>
</figure>

Several people made their first ever contributions to open source in our pyOpenSci sprints which was awesome. And alas, a lot of great people give involved and were there supporting us! The energy was great

## Wrapping up

It's amazing to think about how far pyOpenSci has come in the past 5 years. In 2019 pyOpenSci was just kicking off it's peer review process. Only a small number of people knew about us. Fast forward to 2023, we had some funding to begin to travel and spread the word about our work. But we were still somewhat unknown in the community . Fast forward to 2024, people not only know about us, but also they are excited to contribute and to support our mission to help scientists both find and build better software and also develop better open science skills.

After this spectacular year, I can't wait to see what 2025 brings!!

### Get involved

If you are interested in getting involved with us, there are many ways to do so! Check out our [volunteer](/volunteer.html) page as a starting place. Or shoot an email to media at pyopensci.org.

And maybe I'll see you next year at PyCon US or SciPy 2025!
