---
layout: single
title: "pyOpenSci a Recap of @ SciPy 2024 Meeting - Tacoma, Washington"
excerpt: "This year I gave a talk and lead a packaging workshop at the SciPy 2024 conference in Tacoma Washington. Learn more about the SciPy meeting and how exciting it was for pyOpenSci to be there this year!"
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
* During our SciPy 2024 meeting sprint we had over 35 GitHub issues and pull requests submitted by XX new contributors.
* Our tutorial had 40 registrations and ~30 people showed up. Almost all learners had never created a Python package before and almost all learners were successful creating their first Python package.
* I thoroughly enjoyed connect with new and old colleagues and friends.

</div>

## My SciPy 2024 experience

This year was my fourth time attending the annual SciPy meeting—a meeting
organized by [NumFocus](https://www.numfocus.org) that celebrates the scientific
Python ecosystem. My first experience was in 2019, where we held the very first
pyOpenSci BoF (Birds of a Feather) session.

A Birds of a Feather session, also known as a BoF, is a community-organized
event where people lead a discussion around a specific topic. Our BoF was about
our peer review process, which we had just launched that year.
{: .notice }

In previous years, pyOpenSci was less known in the community. This year, however,
was different. There were many familiar faces, including:

* Maintainers of packages that we have reviewed and accepted through our
  [scientific Python software peer review process](/about-peer-review/index.html)
* Colleagues who I have met at other meetings such as PyCon,
* Reviewers and editors from our community,
* Members of our advisory council, contributors, and
* Friends—so many friends.

This year, I was busy as SciPy:

1. Running an in-person tutorial: Create Your First Python Package.
2. Giving a talk in the Maintainers Track (what an honor!).
3. Working the hallway track.
4. Running a 1.5-day sprint that resulted in over 35 issues and pull requests.
   Wow.

Admittedly, I started off this conference behind and frazzled. You see, pyOpenSci
has been growing in recent months. With that growth comes more wonderful people
to support and engage with. More people getting involved does mean more work for
pyOpenSci. However, the time is worth it, as all of this effort is moving
pyOpenSci's mission of supporting open science forward.

<figure>
  <img src="{{ site.baseurl }}/images/blog/2024/july/scipy-24-pyopensci-package-submission-growth.png" alt="A bar plot with purple bars titled - number of submissions by quarter per year. The plot shows the number of submissions that pyOS has received since it started peer review in 2019. We started with only a few submissions per quarter but the numbers have grown to about 13 per quarter on average in the 2024. " style="width: 100%;" />
  <figcaption><i class="fa-solid fa-heart-pulse"></i> pyOpenSci runs an open software peer review process. Above you can see how submissions have increased since we started in 2019. I started full time on pyOpenSci in late 2022. <i class="fa-solid fa-heart-pulse"></i>.</figcaption>
</figure>

In the end, even though I wasn't quite as prepared as I wanted to be, my talk
and the workshop went great! This was a lesson for me in understanding that
things can be less than perfect and still go well.

More on all of that below. But first--what is the SciPy Conference?

## About the SciPy Conference

If you haven't attended this meeting before, let me give you the rundown. The
SciPy Conference is an annual event dedicated to celebrating and learning more
about scientific computing using the Python programming language. The meeting
started back in [~2002](https://web.archive.org/web/20021030003450/http://www.scipy.org/site_content/scipy02/). The early meetings were run by EnThought and
were smaller in size and scope. Over the years, SciPy has evolved significantly,
mirroring the [🚀 explosive growth of the Python ecosystem 🚀](https://stackoverflow.blog/2023/01/26/comparing-tag-trends-with-our-most-loved-programming-languages/)
in scientific computing and data science.

Today, the SciPy Conference, hosted by [NumFocus](https://numfocus.org/),
attracts over 700 attendees from diverse scientific fields such as astronomy,
biology, geophysics, and more. SciPy is much more than just a workshop.

SciPy features:

* Incredible keynote speakers, such as the inspirational
  [Carol Willing](https://www.youtube.com/watch?v=s-W-UvGgDco).
* Talks from the community about tools and approaches.
* Poster sessions that allow presenters to directly engage and discuss cool
  work with the meeting attendees.
* Tutorials led by community members (and pyOpenSci) that cover important
  scientific data processing and analysis-related Python skills.
* Sprints: collaborative coding sessions where people come to contribute to
  and learn about open-source projects.

I'd be remiss if I didn't mention the lightning talk sessions. During lightning
talks, people throw their names into a literal bucket. If their name is selected,
they are given 5 minutes (or less if the dice are rolled) to talk about a topic
they love. At SciPy, there are often off-beat distractions from the moderators
along the way, such as the infamous grab claw (see below). Yes, it is as
ridiculously hilarious as it sounds.

<figure>
  <img src="{{ site.baseurl }}/images/blog/2024/july/scipy-24-lobster-claw.jpeg" alt="Photograph showing a man with a beard holding a red lobster claw - while deviously looking at a blonde woman at a podium who is smirking at him. She is wearing a blue top and beige pants" style="width: 90%;" />
  <figcaption><i class="fa-solid fa-heart-pulse"></i> It's well-known that lightning talk organizers enjoy heckling presenters. Sometimes they do so using props, such as the lobster claw seen here <i class="fa-solid fa-heart-pulse"></i>. Photo Credit: SciPyConf Fosstodon </figcaption>
</figure>

[Did someone mention sharks? More here on my experience last year giving a SciPy lighting talk.](scipy-2023-community.html)

The entire meeting is community-driven. The scientific Python community really
shows up to make this meeting what it is. All of the sessions are volunteer
organized and run. Volunteers also spend considerable time engaging with
presenters, ensuring there are social activities that everyone is invited to in
the evenings, and generally making sure that everyone feels included.

Since the pandemic, the SciPy meeting has adapted to support virtual/hybrid
participation, which has further increased its reach. In fact, some remote
attendees also helped organize the meeting!

If you are a Pythonista who loves science, this meeting is for you!

## Create your first Python package tutorial @ SciPy 2024

My adventure at the SciPy meeting kicked off with a 4-hour tutorial entitled:
_[Create Your First Python Package: From Code to Module](https://cfp.scipy.org/2024/talk/QT9GBY/)_. This tutorial was an
expanded version of the [Create Your First Python Package tutorial that
pyOpenSci ran in April 2024](pyos-education-announcement.html). In our first
workshop, we had over 20 people create their first Python package. We had
similar success in our SciPy tutorial.

I realized when I got to SciPy that I hadn't actually taught in person since
2020! I vividly remember the last in-person class that I led for the [Professional
Graduate Program in Earth Data Analytics that I created at CU
Boulder](https://catalog.colorado.edu/graduate/colleges-schools/interdisciplinary-programs/earth-data-analytics-foundations-graduate-certificate/).
That class happened on the Wednesday before the pandemic lockdown started in the
United States. It was a sad day to say "goodbye for now" to in-person teaching
and to my students. Teaching and working with learners is, after all, one of my
favorite things. However, luckily we had been running the program using a
hybrid online and in-person approach, so the transition was sad, but didn't
impact our learners too much.

But back to SciPy, it was a rush to be back in the "classroom" at SciPy 2024!

### Workshop setup

Our workshop room was full of people eager to better understand Python packaging.
We also had great helpers, and all the tech in the room just worked seamlessly.
The SciPy tutorial organizers did an amazing job of ensuring everything ran
smoothly.

After a really tricky internet situation at PyCon this past May, I truly
appreciated the smooth setup of the room.

A special shout-out to pyOpenSci community members
[Jeremiah](https://www.github.com/ucodery) and
[Isabel Zimmerman](https://github.com/isabelizimm), who were committed to
helping all the learners have a successful experience. Their support and
expertise were invaluable.

<figure>
  <img src="{{ site.baseurl }}/images/blog/2024/july/pyos-tutorial-scipy-24.jpeg" alt="A photograph showing a large open and well-lit meeting room with two rows of horizontal tables. People are working at laptops in the room. An instructor is at the front with their laptop screen projected on the screen" style="width: 90%;" />
  <figcaption><i class="fa-solid fa-heart-pulse"></i> This image was taken about halfway into the workshop. We had lost a few folks to other conference activities, but most were still engaged! <i class="fa-solid fa-heart-pulse"></i> Source: SciPyConf Fosstodon.</figcaption>
</figure>

### Navigating the Python packaging challenges together

Of course, there were a few challenges, too.

1. Many participants came without working through the setup instructions. This
   was particularly problematic for those with government-issued laptops, where
   they couldn't install software.

2. While most workshops could use the Jupyter-Hub cloud platform called Nebari, hosted by
   Quansight Labs, it didn't support our development use case. Thus, we didn't
   have a "backup" platform for participants who couldn't get things set up.
   However, I later worked with [Sarah Kaiser](https://github.com/crazy4pi314)
   from GitHub, who set us up with a [Codespace](https://github.com/features/codespaces)
   that we can use for future workshops.

3. Installing things across operating systems (Linux, Mac and windows) is always
   tricky. In this workshop, we switched from suggesting
   [pipx](https://pipxproject.github.io/pipx/) to using
   [Hatch installers](https://hatch.pypa.io/latest/install/) for Mac and
   Windows users. We made this change because Windows users previously had
   significant issues installing `pipx` both during our previous workshop, and
   during our [PyCon 2024](https://us.pycon.org/2024/) sprint.

   The glitch we encountered this time with the installers was that [Hatch](https://hatch.pypa.io/latest/) would
   initiate an update on some computers that already had it installed when users
   ran `hatch --version` for the first time. This is something we need to
   address in the future, or at least warn users about.

### Workshop outcomes

Challenges aside, we also had a lot of successes to celebrate!

Similar to our online workshop in April, many attendees created their
first Python package!

<!-- TODO: add link to april workshop once the event page is online -->

<figure class="half">
    <a href="{{ site.baseurl }}/images/blog/2024/july/pyopensci-have-you-created-package.png"><img src="{{ site.baseurl }}/images/blog/2024/july/pyopensci-have-you-created-package.png" alt="An image showing a question: 'Have you created a Python package before?' Below is a bar plot with 3 colored bars. 3 people answered Yes, 10 people answered No, and 4 answered 'I struggled trying.'"></a>
    <a href="{{ site.baseurl }}/images/blog/2024/july/pyopensci-workshop-successful-package.png"> <img src="{{ site.baseurl }}/images/blog/2024/july/pyopensci-workshop-successful-package.png" alt="An image showing a question: 'Were you able to create a package during this workshop?' 10 people answered Yes, 1 person answered No, and no one answered 'I am not sure.'"></a>
    <figcaption>We used Mentimeter during the workshop to get feedback from participants along the way. Next workshop, I think I will use this tool more to gather feedback. Feedback is crucial for iteratively improving any event, especially when teaching, as it allows you to address pain points dynamically, improving both online lessons and in-person trainings.</figcaption>
</figure>

The verbal feedback from participants was overwhelmingly positive. Comments like

> "One of the best workshops I've been to"

and

> "I'm always behind in workshops like this. This was the first workshop where I could actually
  keep up"

made all the effort worthwhile.

Needless to say, I left the event with a full heart. 🫶

Several participants enjoyed the process so much that they joined our sprint
afterwards to help build out the packaging guide. More on that below.

## My talk on Python packaging at SciPy 2024

The day after the workshop discussed above, and the first day of the conference,
I gave my first-ever talk, [The power of community in solving scientific Python’s most challenging problems](https://cfp.scipy.org/2024/talk/AMTLJ7/), in the maintainers track at SciPy. <i class="fa-solid fa-gift"></i>

What an honor to be selected as a speaker.

This year, the SciPy maintainers track was organized and hosted by
[Inessa Pawson](https://github.com/InessaPawson),
[Brigitta Sipőcz](https://github.com/bsipocz),
[Matt Craig](https://github.com/mwcraig), and
[Mridul Seth](https://github.com/MridulS). It kicked off with a fantastic talk
by [Eric Mah](https://github.com/ericmjl). Eric discussed how he has been
bringing open-source values and workflows to the corporate environment at
Moderna (yes, the same company that makes one of the more popular COVID
vaccines). Eric's talk carefully navigated both the benefits of open source for
corporate teams while also acknowledging some of the tensions.

My talk closed out the session.

<figure>
  <img src="{{ site.baseurl }}/images/blog/2024/july/pyopensci-talk-leah-wasser-scipy24.jpg" alt="Image of a room of round tables with black covers filled with people listening to my talk. At the front is a speaker wearing a red tank top. On the screen is a slide that says 'The Power of Community Review.'" style="width: 90%;" />
  <figcaption><i class="fa-solid fa-heart-pulse"></i> Me, giving my talk about community, packaging, and peer review at SciPy 2024. The coolest part of the talk was meeting people afterwards who I hadn't met in real life before. <i class="fa-solid fa-heart-pulse"></i> Photo Credit: Inessa Pawson</figcaption>
</figure>

### pyOpenSci and community

My talk was about how pyOpenSci has been carving out space and coordinating
community efforts to address several core challenges in our scientific Python
ecosystem. These include:

1. Helping scientists find and use the right open-source tools.
2. Encouraging scientists to write better code, share their code, and build better software.
3. Ensuring scientists get credit for their open-source work.
4. Addressing the ongoing challenges of packaging in the Python ecosystem-—a topic
   I discussed in my [PyCon talk in April](blog/python-packaging-friends-dont-let-friends-package-alone.html),
   which is also available on [YouTube](https://www.youtube.com/watch?v=mJPoj9Ex9fk&list=PL2Uw4_HvXqvYhjub9bw4uDAmNtprgAvlJ). I'd love for you to check it out!

### pyOpenSci's impact on the scientific Python ecosystem


During my talk, I addressed critical pain points I've experienced as an
educator teaching spatial and earth data science, and as a maintainer of
[stravalib](https://stravalib.readthedocs.io/en/latest/)—a package that supports my pre-COVID obsession with ultra mountain
running.

Things kicked off with a bang, thanks to the best meme ever, created by
[Filipe Fernandes](https://github.com/ocefpaf). Filipe, a conda-forge
maintainer, introduced me to conda environments when I was struggling with
creating consistent spatial data environments for my students. Anyone who's
spent time wrestling with GDAL in a Python environment knows the struggle.
Thanks to folks like Filipe and the conda-forge community, managing spatial
environments has become much easier for everyone!

<figure>
  <img src="{{ site.baseurl }}/images/blog/2024/july/pyopensci-leah-talk-pip-install-gdal.jpg" alt="Image of me with my eyes closed chuckling as people laugh at the meme on the screen. The meme has Boromir, played by Sean Bean in the Lord of the Rings Trilogy, making a circle with his right hand with the words 'One does not simply pip install GDAL overlaid on the image.'" style="width: 90%;" />
  <figcaption><i class="fa-solid fa-heart-pulse"></i> Filipe's meme is always a hit. Thinking about pip installing GDAL is not for the faint of heart. In the early years of using Python for spatial data, it was incredibly challenging to create a successful environment that contained spatial libraries (which often depend on GDAL)... <i class="fa-solid fa-heart-pulse"></i> Photo Credit: Luis López</figcaption>
</figure>

I discussed how pyOpenSci is working to make things easier for
scientists by improving access to the right packages, maintaining community-vetted
tools in one place, helping maintainers step down and transition out, and making documentation
more beginner-friendly.

<figure>
  <img src="{{ site.baseurl }}/images/blog/2024/july/pyopensci-what-if.png" alt="A slide on a dark purple background that says - What If... finding the right package was easier. Community vetted tools were maintained in one place? We could help maintainers step down? Docs were more beginner friendly. At the bottom, there are two stick figures at computers - one is frustrated, one is happily typing away." style="width: 100%;" />
  <figcaption><i class="fa-solid fa-heart-pulse"></i> pyOpenSci asks and addresses the questions - what would happen if things were easier for scientists? <i class="fa-solid fa-heart-pulse"></i>.</figcaption>
</figure>

### pyOpenSci and inclusive, open software peer review

I also talked about how pyOpenSci is using an inclusive,
[community-led peer review process](/about-peer-review/index.html) to achieve
several goals:

* Helping scientists find vetted, trusted, and maintained software.
* Helping scientists build better software.
* Providing maintainers with credit for the important work they do to support open
  science.

<figure>
  <img src="{{ site.baseurl }}/images/blog/2024/july/pyopensci-community-lead-software-peer-review.png" alt="Slide from my talk. It says 'The Power of Constructive Community Review' at the top. Below is a graphic showing the 4 core steps from left to right: submit your package, pre-review checks, review, and then accepted. The pyOpenSci accepted badge is below the accepted box. At the end of the row is a box that says 'Maintenance checks and stats.'" style="width: 90%;" />
  <figcaption><i class="fa-solid fa-heart-pulse"></i> pyOpenSci runs an open, community-led software peer review process. The process is overseen by a volunteer editor-in-chief, a rotating position, and includes an editor who leads the review and at least two reviewers. pyOpenSci cares about the long-term maintenance of software, so packages in our ecosystem undergo checks to ensure they are still actively maintained. The review itself is constructive and designed to support the maintainer(s) in improving the quality and usability of their package. <i class="fa-solid fa-heart-pulse"></i></figcaption>
</figure>

I also discussed how pyOpenSci [partners with communities](https://www.pyopensci.org/partners.html) like the [Journal of Open Source Software](https://joss.theoj.org/) and [Astropy](https://www.astropy.org/) to leverage resources. In the spirit of open source, our goal is to learn as much as we can from other communities.

Where ever we can, pyOpenSci partners with other communities and leverages their
work. Building on top of and leveraging each other's work IS the true spirit of
open source and open science. By working together, we can move forward together.

<figure>
    <a href="{{ site.baseurl }}/images/blog/2024/july/pyopensci-partnerships-joss-astropy.png">
    <img src="{{ site.baseurl }}/images/blog/2024/july/pyopensci-partnerships-joss-astropy.png" alt="A diagram on a light purple background showing the three peer review steps: prereview checks, review, and pyOpenSci acceptance. Below the review box, it says 'Your community standards,' indicating that a partner community can add their own affiliated package standards to our review process. To the right of this process is an arrow leading to three boxes: 'JOSS Published,' 'community affiliated,' and 'maintenance checks and stats.'" style="width: 90%;"></a>
    <figcaption>Through our partnership with the Journal of Open Source Software (JOSS), a package submitted to us can also be published by JOSS if it's in scope. JOSS accepts our review and only reviews the paper, providing a huge benefit to the maintainer team. We also partner with communities such as Astropy. Through the Astropy partnership, an Astropy-related package can also become Astropy-affiliated. Members of the Astropy community volunteer on our editorial board and support these reviews.</figcaption>
</figure>

### pyOpenSci and Python packaging

I also discussed our work in the Python packaging ecosystem, specifically around
making packaging more beginner-accessible and friendly. pyOpenSci leans into
community expertise and review as a way to leverage community expertise when
making packaging decisions. People who have reviewed our packaging content
include both those in the scientific Python ecosystem and those working on core
Python challenges. These people include:

* Python Packaging Authority members (PyPA)
* Packaging tools maintainers
* Packaging experts
* Scientists
* People new to packaging

All of these people have helped pyOpenSci create a [Python packaging guide](https://www.pyopensci.org/python-package-guide/index.html) that is both
accurate and beginner-friendly.

<figure>
    <a href="{{ site.baseurl }}/images/blog/2024/july/pyopensci-package-guide-review.png"><img src="{{ site.baseurl }}/images/blog/2024/july/pyopensci-package-guide-review.png" alt="Image of the pyOpenSci package guide review process. There are three main boxes on the slide labeled 'expert feedback,' 'community review,' and 'sprints and bug bashes.' The top of the image is titled 'The Power of Community Review.'"></a>
    <figcaption>pyOpenSci engages people from all parts of the Python community, with all levels of expertise, in our packaging guide review process. This engagement ensures a high-quality and beginner-friendly guidebook.</figcaption>
</figure>

One of the decisions we made as a community early on was to use Hatch as an
end-to-end packaging tool. We believe Hatch is user-friendly and supports many
of the use cases scientists have when sharing their code.

<figure>
    <a href="{{ site.baseurl }}/images/blog/2024/july/pyopensci-packaging-hatch.png"><img src="{{ site.baseurl }}/images/blog/2024/july/pyopensci-packaging-hatch.png" alt="Image titled 'Creating an Opinionated Tutorial.' Below it lists four bullet points about Hatch: 1. Responsive maintainer, 2. User friendly, 3. Adheres to standards, 4. Doesn't lock you in." style="width: 80%;"></a>
    <figcaption>pyOpenSci is teaching with Hatch now because we have had good success with using Hatch and engaging with its forward-thinking maintainer.</figcaption>
</figure>

I met some great people and had good discussions about peer review and Python
packaging. The presentation will be on YouTube at some point, and I will update
this post with the link when it's live. In the meantime, my slides are available
on [pyOpenSci's Zenodo community](https://zenodo.org/records/8045448).

## The hallway track

It seems like this year has been the year of the hallway track. The hallway
track refers to the time spent in the hallways of a meeting, talking to people
you don't normally get to work with in person. Sometimes, the hallway track can
be even more valuable than attending the talks. You can always watch the talks
later on YouTube, but you can't always collaborate in real life like you can at
a meeting like SciPy, which attracts people from around the world.

I spent a lot of time talking with colleagues, friends, and community members
about all things Python, open source, and open science.

* I worked with Sarah Kaiser on our new GitHub container to support workshops.
* I had an _ad hoc_ sprint with [Angus](https://github.com/agoose77) and [Rowan](https://github.com/rowanc1) from the [MyST Markdown](https://mystmd.org/) community
  to develop our [pyOpenSci peer review metrics dashboard](https://www.pyopensci.org/peer-review-metrics).

Additionally, I caught up with colleagues, chatting about packaging and scientific Python.


## Sprints

Every year at SciPy, we spend the last two days of the meeting sprinting.
This year was the first time I stayed for both days of the sprints.

### A brief overview of open-source sprints

If you haven't been to an open-source sprint before, a sprint is an open
session where contributors join a project and help address specific issues and
tasks that the project needs help with. Sprints are a lot of fun because,
given enough time, you can make significant progress on a project and support
first-time and new contributors in making their first contributions!

[If you want to learn more about sprints and how pyOpenSci runs them, check out
this blog post.](pyopensci-pyconus-2024-sprints.html)
{: .notice }

This is what the second sprint room looked like this year at SciPy. There was a
scramble to find a new location for our sprints due to some power issues
stemming from an unexpected accident in Tacoma. Our space was much smaller
than usual, but we made it work!

<figure>
    <a href="{{ site.baseurl }}/images/blog/2024/july/pyopensci-scipy-24-sprints.jpeg">
    <img src="{{ site.baseurl }}/images/blog/2024/july/pyopensci-scipy-24-sprints.jpeg"
    alt="Photograph showing a tan room filled with long tables and people sitting
    in front of laptops working together on specific projects or tasks."></a>
    <figcaption>The sprint setup isn't always perfect at meetings, but we made it
    work! This year, the rooms were full with little space to spread out. However,
    we made the best of it. The pyOpenSci sprint table is in the middle row,
    closest to the camera.</figcaption>
</figure>

We had a great group this year who worked on a variety of tasks, including:

* Tackling a longstanding issue to sync our labels across all repositories. We
  have many labels, and they vary across repositories. The work is now done, and
  next, we will implement a GitHub action to clean up labels across all of our
  GitHub repos.
* Working on our [Python Packaging Guide](https://www.pyopensci.org/python-package-guide/),
  which is now being translated into Spanish!
* Someone enthusiastic about Sphinx worked on our [pyos-sphinx-theme](https://github.com/pyOpenSci/pyos-sphinx-theme).
  pyOpenSci has several online "books" that would benefit from using the same
  theme and colors that follow the pyOpenSci brand.
* A handful of people contributed to our MyST Markdown [peer review metrics dashboard](https://www.pyopensci.org/peer-review-metrics).

<figure class="half">
    <a href="{{ site.baseurl }}/images/blog/2024/july/pyopensci-sprints-day-1.png">
    <img src="{{ site.baseurl }}/images/blog/2024/july/pyopensci-sprints-day-1.png"
    alt="An image of about 10 people sitting at a long table working on laptops."></a>
    <a href="{{ site.baseurl }}/images/blog/2024/july/pyopensci-sprints-day-2.png">
    <img src="{{ site.baseurl }}/images/blog/2024/july/pyopensci-sprints-day-2.png"
    alt="Another image similar to the above, but from the other side of the table
    on the second day."></a>
    <figcaption>People sitting at the pyOpenSci sprint table. We had a slightly
    different group each day, but the energy was equally enthusiastic both days.
    </figcaption>
</figure>

Several people made their first-ever contributions to open source during our
pyOpenSci sprints, which was fantastic. We had a lot of great people get
involved and support us! The energy was great.

## Wrapping up

It's amazing to think about how far pyOpenSci has come in the past five years.
In 2019, pyOpenSci was just kicking off its peer review process, and only a
small number of people knew about us. By 2023, we had some funding to begin
traveling and spreading the word about our work, but we were still somewhat
unknown in the community. Fast forward to 2024, and people not only know about
us but are also excited to contribute and support our mission. We aim to help
scientists find and build better software and develop better open science skills.

After this spectacular year, I can't wait to see what 2025 brings!

### Get involved

If you are interested in getting involved with us, there are many ways to do so! Check out our [volunteer](/volunteer.html) page as a starting place. Or shoot an email to [media at pyopensci.org](mailto:media@pyopensci.org).

I can't wait to see you next year at PyCon US and SciPy 2025!
