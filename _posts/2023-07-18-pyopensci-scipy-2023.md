---
layout: single
title: "Python is all about community - SciPy 2023 Meeting"
excerpt: "The SciPy 2023 meeting did not disappoint this year. We have a whole new group of contributors helping to build this vibrant and diverse Python open science community. Learn about my experience there."
author: "Leah Wasser"
permalink: /blog/scipy-2023-community.html
header:
  overlay_color: "#666"
  overlay_filter: 0.6
categories:
  - blog-post
  - highlight
  - community
  - talks
classes: wide
toc: false
comments: true
---

<div class="notice" markdown="1">
## TL;DR

- I met and got to talk with so many incredible people this year at SciPy 2023.
- The sprints this year were even more productive than the PyCON US 2023 sprints (which is hard to believe) with a total of **20 !!! pull requests submitted** which helped improve our website infrastructure, peer review and contributor database and associated website updates and even typos in our guidebooks.
- One person submitted her very first pull request and contribution EVER to pyOpenSci! What an honor to again be someone's first contribution!
- While I was a bit bummed to not get a pyOpenSci talk or a community BoF session, our lightning talk / shark attack made up for it! 😄
</div>

## My third scipy

I was so excited for SciPy this year.

I wanted to spread the word about pyOpenSci's core mission - supporting the scientific open source Python community
I wanted to get more people involved.

You see, pyOpenSci is my true calling, representing everything that matters most:

- 🌱 Community & People

- 🎓 Education

* 🔓 Open Science and Open Source

* 🌈 Diversity, Equity and Inclusion

SciPy was an incredible experience overall.
While pyOpenSci didn't get a talk or a
community session / BoF this year, we did get a lightning talk! It was a
randomized selection, and I threw my name into the bucket with fingers crossed.

It was fantastic!

SciPy may not have gone exactly as I envisioned. I'm used to attending meetings
with a list of responsibilities on my plate. But sometimes the best moments are
the unexpected ones. I had the chance to connect with amazing individuals and
share pyOpenSci's impactful mission.

And the best part? Our pyOpenSci community continues to grow, attracting more wonderful Pythonistas who share our vision. Together, we will make a positive impact on scientific open source Python

That's what truly matters.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr"><a href="https://twitter.com/pyOpenSci?ref_src=twsrc%5Etfw">@pyOpenSci</a> got the cutest slides at the lighting talk @SciPyCon <a href="https://twitter.com/hashtag/SciPy2023?src=hash&amp;ref_src=twsrc%5Etfw">#SciPy2023</a> <a href="https://t.co/ZXleLpdkqB">pic.twitter.com/ZXleLpdkqB</a></p>&mdash; Cheuk Ting Ho (@cheukting_ho) <a href="https://twitter.com/cheukting_ho/status/1679962465508147200?ref_src=twsrc%5Etfw">July 14, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

And I gave out a lot of pyOpenSci stickers too!

<figure>
    <a href="/images/pyopensci-stickers.png">
    <img src="/images/pyopensci-stickers.png" style="max-width:100%" alt="Two pyOpenSci sticker designs. the one is a light purple flower with white stamen and the letters pr and O as the center of the sticker. The S is a snake. The econd sticker is a darker and lighter purpler that says pyOPenSci and has the top half of a flower above the O in open.">
    </a>
    <figcaption>Fresh off the press - pyOpenSci stickers!
    </figcaption>
</figure>

## For all of you introverts out there - a few tips that helped me this year

My approach to participating in SciPy was so much better than that at pyCon.

I learned some valuable lessons about taking care of
both my work and my mental well-being. As an introvert in a busy meeting filled
with awesome colleagues, it's easy to get burnt out.

Here's what I did to make sure I left the meeting feeling refreshed and energized:

- 🌟 I prioritized mental health: It's all about balance. I put as much effort into taking care of myself as I did into my work during the meeting.
- 🌟 Embraced breaks: During the meeting, I consciously took short breaks to unwind. Whether it was chilling in my hotel room or going for a stroll outside, giving my brain a breather made a world of difference. And guess what? I slept better at night too!

* 🌟 Me time matters: While I didn't participate in every social activity, I didn't feel like I was missing out. Instead, I used that time to recharge solo and get some extra sleep. And let me tell you, it worked wonders!
* 🌟 Balanced work and recovery: To avoid getting run down, I allowed myself to miss the second day of the sprints. This allowed me to travel home on Sunday and recover in the afternoon with my furry friend, Juno.

In the end, I may have missed a bit of the action, but the payoff was totally worth it. I left the meeting feeling way better than I did after PyCon.

So, fellow introverts, remember this little secret weapon called
"recovery time" at your next big event! It's a game-changer!

## Sprints - my new favorite part of every meeting

If you are new to sprints, the idea is that people get together
and work on a particular part of a project. Often people participating in
a sprint are newer to the project. Sometimes this effort is their first
ever contribution to an open source project.

This was the third sprint that i've lead with the [first being at pyCon US 2023](https://www.pyopensci.org/blog/pycon-2023-packaging-presentation-sprints-leah-wasser.html). In my mind every sprint should be a mentored sprint in pyOpenSci land.

I went into it with a [more organized help-wanted board.](https://github.com/orgs/pyOpenSci/projects/3) This board has been a great way to keep track of things that we need help with.

GitHub PROTIP: I struggled at PyCon with assigning people who weren't in our organization to an issue. Now, I know that if someone comments on an issue I can then assign it to them (thanks to [Thomas Fan](https://github.com/thomasjpfan)!!).
{: .notice .info}

### So many helpful contributions!

I decided this year that it would be better to travel home on Sunday for mental health reasons. As such I only was at the sprints in person on Saturday. We had 4 people show up for who were newer to contributing to kick off the day. After that, others popped in and submitting pr's that included:

- Updating our website workflow to allow for site preview on every pr. This means that no one needs to setup a ruby environment locally in order to view website changes. And the less ruby environments contributors need to deal with, the better as far as I am concerned :) !!
- Updating and enhancing our contributor package metadata workflow to be more efficient and effective
- A first contribution ever!! Grace helped us by fixing typos in our throughout our peer review guide! She called these fixes trivial but there is NO SUCH THING as a trivial pull request. We need fresh sets of eyes on all of our guides and appreciate any and all fixes that pr's bring big or small!

All pull requests submitted during the sprint are listed in the box below:

<div class="notice" markdown="1">

Tip: a pull request, known as a "pr", represents a set of suggested changes to a set of code or text. In the GitHub.com interface you can view the suggested changes and comment on them - in the same way that you might comment on suggested changes in a Google doc.

**Thomas Fan:** Thomas submitted a [set of pr's that allow us to preview our website after every pull request](https://github.com/pyOpenSci/pyopensci.github.io/pulls/thomasjpfan) is submitted.

**Mike Sarahan:** Mike tackled our automated workflow that tracks contributors across our GitHub repositories and also that tracks packages, reviewers and editors in our review process.

- **ruoxi** Submitted an issue surrounding a rendering issue with our packaging guide in the Safari browser. And also a [pull request updating text around our partnership](https://github.com/pyOpenSci/software-peer-review/pull/232/files) with the Journal of Open Source Software (JOSS) where they accept our review as theirs and only review your paper.
- [**Grace** Grace made her first, second, third ...seventh!! pull requests ever fixing typos in our peer review guide](https://github.com/pyOpenSci/software-peer-review/pulls/g-patlewicz)

* [**Ricky** - Url redirect fixes on website](https://github.com/pyOpenSci/pyopensci.github.io/pull/235)
* [**Kerry** fixed the packages order so that newest was at the top of the page not the bottom](https://github.com/pyOpenSci/pyopensci.github.io/pull/234)

</div>

### People kept sprinting without me!

My leaving on day two (Sunday) did not stop the community from continuing to
sprint and contribute to pyOpenSci! Two people continued to work additional
website fixes that were on our project board but didn't get tackled on Saturday.

## A personal note - flying solo in the open source world is never truly solo

Back in March 2023, I made a bold decision to leave a toxic academic
environment and fully dedicate myself to building and growing pyOpenSci—an
amazing, community-focused organization.

Let me tell you, taking that leap of faith was pretty intimidating. The academic
setting had taken a toll on me, shattering my confidence and even affecting my
health. But I knew in my heart that I wanted to channel all my energy into
community work, collaborating with people who respected and appreciated me as
much as I respected them.

And guess what? This journey has been beyond my wildest dreams! Not only has
the pyOpenSci community thrived and made a remarkable impact in just its first
year, but it has also turned out to be the kind of inclusive, supportive
community I always envisioned.

It's incredible how not only is pyOpenSci helping others, but it's also been a
source of support and healing for me. I couldn't be more grateful for this
vibrant and uplifting environment that we've created together.

I'll keep pushing forward, knowing that this beautiful journey is just the
beginning.

## Wrapping up

And that is all I have to say about SciPy 2023! It was an incredible experience.
If you are reading this and we connected at SciPy this year or if you contributed
to pyOpensci this year, I just want to say thank you.

From the bottom of my heart. I see change coming in the upcoming years.
pyOpenSci wants to be a part of and to drive that change!!

We can't achieve that without your help!
