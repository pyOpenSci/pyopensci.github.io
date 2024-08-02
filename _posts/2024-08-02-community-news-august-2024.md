---
layout: single
title: "pyOpenSci beginner-friendly sprints at PyCon US 2024"
excerpt: "pyOpenSci holds beginner-friendly sprints with the goal of making new contributors feel welcome. Learn about our latest sprint at PyCon US 2024, and tips we use to make sprints accessible to more people."
author: "Leah Wasser"
permalink: /blog/pyopensci-pyconus-2024-sprints.html
header:
  overlay_image: images/blog/2024/may/23-05-2024-get-involved.png
  overlay_filter: rgba(20, 13, 36, 0.8)
categories:
  - blog-post
  - community
classes: wide
toc: true
comments: true
---


💜 pyOpenSci community news

As the pyOpenSci community has continued to grow, we wanted to dedicate at least one newsletter issue a month to sharing conversations, contributions, and news related to our diverse and vibrant community! This month we’re celebrating everyone who’s participated in a pyOpenSci sprint, sharing the exciting news around the Spanish translation of our Python Packaging Guide, and elevating a discussion from GitHub around the use of Hatch for Python Package creation.

🐣 Hello, Hatch! 

Education is one of the three petals of pyOpenSci, and to that end we strive to create resources that help learners navigate the Python packaging ecosystem with ease. This means that when we find our community members and scientists encountering consistent issues with trying to make their workflows more open and reproducible, or trying to build a Python package, we look for ways to lower (or ideally remove!) the barrier for learners. And this was exactly the scenario we were faced with in our beginner-friendly packaging tutorials. We decided that Hatch is a great user-friendly tool that scientists can use to package and share their code. However, in developing and teaching our Get to know Hatch tutorial, we found scientists struggling to install a tool called pipx that can be used to install Hatch globally, rather than in a Python environment. This was causing a host of problems (in large part because pipx can be tricky to install on Windows machines!)

We know that it can be challenging to wrap your head around packaging, but what it boils down to is that packaging is really just a process of making something that can be installed into an environment and then reused in different places. And while we decided to use Hatch because it makes packaging life easier, it turns out that it has its own nuanced pain points that we’re still filing down! And we want to share this, because we firmly believe that even someone who is brand new to packaging can get value out of our materials.

If you’d like to dig into the details of our Hatch adventures, we recommend reading through the discussions in the associated issue and PR:

Fix: update hatch install instructions to use the hatch installers rather than pipx in our tutorial #301
All Hatch PRs: [Tuesday july 2 merge] Fix: update hatch install instructions

And for those of you who are interested in the end result, after a robust and lively community discussion, we’ve updated our Get to know Hatch tutorial with the following changes:

Suggest users default to the Hatch installers rather than pipx.
Suggest Linux users use pipx as the install there is simpler.


It’s important to us to elevate this conversation, because all of our materials are community–developed and go through extensive technical review not only before they’re published for the first time, but also for the entire lifetime of the content! We value openness and transparency, and because of the open discussions with community members, we’ve been able to make it even easier to get started with Python packaging!

🌎 Coming soon: a Spanish translation of the pyOpenSci Python Package Guide

This past May, during our PyCon US sprints, pyOpenSci community member Felipe Moreno submitted an issue to our Python Package Guide GitHub repository, asking if we had considered translating the guide to Spanish. Felipe is an experienced security engineering manager with a strong background in Python software development, data science and user-centered design, who leads the Security Data Science team at Bloomberg LP. Felipe has worked with other projects, setting up infrastructure support through Sphinx for this kind of work. We were, of course, immediately thrilled with the idea, and took Felipe up on the offer! From there, Felipe built a PR that created a translation guide for contributors, along with another PR that provides internationalization support. 

Following Felipe’s initial efforts, several of our SciPy sprint attendees continued to work on translation of the pyOpenSci Python Packaging Guide, and you can see their progress in the guide repository on GitHub. This has resulted in 13 PRs to our packaging guide. Our next steps are to create an editorial team, composed of members who are fluent in Spanish/native speakers. This team will be  responsible for reviewing and merging these contributions. Stay tuned for updates on this incredible community-driven project!

If you have other suggestions for how to get involved, please reach out to media@pyopensci.org so that we can connect you with the right people!

🎉 All the credit for our contributors

We have been absolutely floored with the community involvement with pyOpenSci over the last few months, and wanted to take a moment to recognize everyone who has been a part of our sprints at both PyCon US and SciPy! In total we’ve had over 30 contributors submit 65 issues to six different pyOpenSci repos between the two events, which is incredible.
 
Props to all of our PyCon contributors, including:
Jesse Bobish, Patrick Byers, Sarah Kaiser, Ryan Keith, Jon Kiparsky, Filipe Laíns, Cheng Lee, Felipe Moreno, Matthew Ngoy, Jeremy Paige, Ken Seehart, Steven Silvester, Megan Sosey, Zack Weinberg, Brianne Wilhelmi, Carol Willing, Sneha Yadav, and Brandon Zhang

Shout out to all of our SciPy contributors, including:
Naty Clementi, Geoff Cureton, John Drake, Han, Elise Hinman, hpodzorski-USGS, Sarah Kaiser, kaiyamag, Felipe Moreno, Roberto Pastor Muela, Olek, Santiago Soler, Revathy Venugopal

💌 Stay connected with pyOpenSci

There are so many ways to stay up-to-date with all things pyOpenSci, including following us on LinkedIn, Fosstodon, and Bluesky. You can also connect with the broader pyOpenSci community on our Discourse forum. And if you’re interested in our weekly newsletter where we share news, blog posts, and monthly updates, subscribe on LinkedIn. We also send out a monthly recap newsletter to our mailing list!
