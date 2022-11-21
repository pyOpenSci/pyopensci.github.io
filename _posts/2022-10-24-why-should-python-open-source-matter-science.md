---
layout: single
title: "Why should Python open source package health matter to scientists? (and to you!)"
excerpt: "Free and open source software tools are the foundation for thousands if not millions of scientific workflows. Yet, it is rare that users fully understand it's importance in moving science forward. Here, I discuss the value of free and open source software for science; why you as a scientist should care; and what pyOpenSci is doing to try to support Python scientific tools for science."
author: "Leah Wasser"
permalink: /blog/why-python-open-source-software-matters-for-scientists.html
header:
    overlay_color: "#666"
    overlay_filter: 0.6
categories:
  - blog-post
  - highlight
  - python-packaging
  - peer-review
toc: false
comments: true
---

<div class="notice" markdown="1">
## Part 1/3: Blog series on package health 

This blog post is part 1 of a 3 part series on open source package health. 
The series was inspired by a conversation 
held on twitter. This blog post is not a comprehensive perspective on what pyOpenSci
plans to track as an organization. Rather it's a summary of thoughts collect during 
the conversation on twitter that we can use to inform our final metrics. 
* [In blog 2/3 I will discuss 
why free and open source package metrics matter and which categories of metrics we at pyOpenSci are thinking about tracking.](/blog/why-python-package-health-metrics-matter.html)
* [In blog 3/3, I'll recap a conversation held on 
twitter around package health metrics](/blog/what-makes-open-source-python-package-healthy.html).

</div>

## Why Python open source package health should matter to you as a scientist 

If you are a scientist, the health of a scientific python package may not be something that 
you care about. What might seem more important is doing your science, and processing 
your data to get to that coveted scientific inquiry and exploration stage. 

In actuality, package health is incredibly important to science, especially open,
data-intensive science. It should be important to you too! 

Why? Let me provide a few reasons below:

#### 1. Free and open source tools (FOSS) make your code simpler. 

Free and open source tools provide commonly needed functionality wrapped up in simple tested functions and objects that you don't need to recreate yourself.

If you are creating open workflows to process your data, you are likely using free-to-download (and use) tools - software. These tools make it easier for you to access, open, process and visualize your data. These free and open tools allow 
allow you to write less (complicated) code to process your data. Code that 
someone else (a package maintainer) maintains (often in their spare time but we'll
get to that in another blog post!).

#### 2. Open source software provides centralized maintenance of commonly used workflows

Imagine 1,000 scientists accessing climate data. They all need to download the 
data and plot it. However they made download different types of climate data, 
different models, different variables. The base code that all 1,000 scientists
write to download and open the data is the same. Similarly the base code for 
plotting is also the same.  

Isn't it better that one person writes great code and 
updates it as things like the download API change? Or they update plotting 
functionality? 

* This central maintenance avoids you and many other people needing to write code that 
does the same thing. It makes it easier for you to process your climate data and get
to the science. Your code is simpler. 

* This centralization of tools that perform tasks that many 
people need to do avoids the problem of 1,000 people trying to create the same workflow and creating different and potentially problematic code. 

* This avoids everyone reinventing the scientific wheel. 

#### 3. Free and open source software reduces the barrier of needing a paid license to build upon your work. 

Free and open source software removes the barrier a paid license to run your code. This makes your work more accessible.

There is a lot more to say about the value of open source here but i'll leave
that to another blog post. 

<figure>
    <a href="/images/foss-free-open-source-software/why-scientists-should-care-open-source.png">
    <img src="/images/foss-free-open-source-software/why-scientists-should-care-open-source.png" style="max-width:70%" alt="Image with a blue computer keyboard background with the text: why scientists should care about open source software on top.">
    </a>
    <figcaption>If you are a scientist using open science approaches, then your workflow likely depends upon open source tools. These tools are critical to our work and yet are often not supported or consider 
    as integral components of open science.
    </figcaption>
</figure>

## Creating and maintaining open source software is hard work 

Creating these open source tools to work with data is not a trivial task. Often 
the people (who may be developers or scientists) who develop the tools:

* Aren't paid to do the work  
* Burn out from all of the effort associated with supporting the tools
* Aren't acknowledged for their effort
* Have to deal with users who are frustrated by bugs, but aren't able to communicate that frustration kindly or effectively to help the maintainer get it fixed while also acknowledging their effort (which again is often volunteer)

Maintainers also get new jobs, and need to step away from maintaining that tool. 

All of the above causes a challenge where once-maintained tools are now left 
unmaintained and vulnerable to new bugs as other packages that tool depends on 
are updated, or as the Python language itself is updated. 

### Package usability is also important but not always considered by maintainers

Not all developers focus on usability when designing a new tool. Some do. 
Maintainers often start,
as expected, with trying to get a job done. Documenting a package well enough 
so that a beginner can get started with using it, is not always an immediate goal.

Yet usability is critical to developing a user base. To making a tool accessible 
to more people which could in turn help grow community around it that 
supports that tool. 

This can be frustrating for scientists who are trying to find the right tool 
to use to support their analysis. And as such another area that we definitely 
want to consider when building pyOpenSci. 


## Maintainers do a lot of hard work and rarely get credit for it

Before I say anything else here:

> Please - cite software in your work if you use it! And also if you need to report a bug, please do so in a kind and thoughtful way!

Maintainers work hard on their packages. One package may be the foundation for 
data processing and analysis across hundreds to thousands (or more) scientific 
papers. But unlike scientific papers, work on the package continues long after a 
paper is published. A package is a living thing that needs continual work and love. 

So, what happens to that package that you are using in your workflow, 
when the developer gets a new job or finds they no longer have the time to 
maintain it? What happens when you need to update your workflow to support a paper review OR when you want to 
build upon it for another analysis if that tool no longer 
is maintained?

<figure>
    <a href="/images/foss-free-open-source-software/orphan-python-open-source-packages.png">
    <img src="/images/foss-free-open-source-software/orphan-python-open-source-packages.png" style="max-width:70%" alt="Image showing girl crying with text orphan python packages are breaking my open workflows.">
    </a>
    <figcaption>Your workflow likely depends upon tools that are being developed
    by volunteers. Supporting these tools is critical to supporting open science. And 
    open science is critical to accelerating scientific discovery Source: Meme created by yours truly. :) </figcaption>
</figure>

This, my friend, is why you should care about, and support, open source software!

## pyOpenSci is designed to create diverse community for and to support the open source Python tools that you as a scientist are using in your workflows. 

The issues discussed above around maintenance, usability and quality of software, 
are the types of issues that pyOpenSci will address. 

<figure>
    <a href="/images/foss-free-open-source-software/xkcd-open-source-dependency.png">
    <img src="/images/foss-free-open-source-software/xkcd-open-source-dependency.png" style="max-width:70%" alt="Image showing xkcd comic with a robotic type of image representing a scientific workflow and pointing to the small open source package maintained by one person that is a major dependency of the workflow.">
    </a>
    <figcaption>Critical scientific workflows and projects often have dependencies
            that are maintained by volunteers. Source: XKCD </figcaption>
</figure>

But we (pyOpenSci) need to track package use, and maintenance, collect data and 
quantify outcomes to determine if we are making the impact that we want to. To 
determine if we are truly helping you, as a scientist in selecting the tool that 
will help you in your workflow and also be maintained over time and documented 
enough that you can get started using it quickly.

We also want to ensure that we are supporting maintainers as well. To help them 
with the hard job of showing up each day to maintain a package that maybe hundreds 
to thousands of scientists are using. 

### pyOpenSci needs to collect data around metrics to track all of these issues 

pyOpenSci needs to do more than just open peer review of scientific Python 
packages. We need to collect data to better understand the issues and how we 
impact those issues over time.

A few package-related goals of pyOpenSci include:

* Ensure that package quality is better after the review than before
* Inspire maintainers to develop more robust package infrastructure including testing
* Improve the usability of packages through documentation and vignettes (short tutorials showing users how to get started with the package)
* Ensure that packages are maintained over time; If they aren't maintained, ensure that they are archived or sunsetted in a way that users know they are no longer maintained. (no more dark orphan repositories!)


To make sure we reach our goals, we have to collect metrics on packages 
submitted to our open peer review process to track quality and health over time.
And hopefully, through our review process and support of 
maintainers, we will help to improve the overall quality of packages being created
to support scientific workflows. 

> We want to help the community.


## How pyOpenSci hopes to improve the usability and quality of smaller open source software packages that support science  

These, my friend are lofty goals. But our mission is to help
scientists build better software. And to ensure that the community understands the 
maintenance level of that software before they adopt using it.

We also want scientists to understand how hard maintainers work to create the 
tools that they use. And to cite that work if they use the tools in the same
way they might cite a peer reviewed article. But that is another blog to be written. 

So how do we track open source tool health (for science)? 

### Peer review is actually the second step in our process. 

We won't begin to review a package [without bare minimum checks](https://www.pyopensci.org/peer-review-guide/software-peer-review-guide/author-guide.html#does-your-package-meet-packaging-requirements).
We hope that these bare minimal checks help maintainers as they try to decide
what is good enough infrastructure for their package. 

We hope that these checks will also help new maintainers that are creating 
new packages even if they never submit their package to us for peer review. 

## Goals for package metrics

These metrics will help us quantify several of our goals: 

We hope that:

* Peer review improves Python package structure and usability. 
* Peer review in some way supports maintenance and/or responsible archiving when a package comes to life-end.
* Over time, the package is improved and maintained with possible contributions for those other than the maintainer. 

We need metrics to understand things like

* Community adoption of the package (are scientists using it?)
* Maintenance level of the package (are maintainers still working on it and fixing bugs?)
* Infrastructure (are tests setup to help identify if contributions break things? )
* Usability (is the package documented in a way that helps users quickly get started)

### A discussion about package health on twitter 

A few weeks ago, I posted on twitter to see what the community
thought about "*what constitutes package health*". 

<blockquote class="twitter-tweet" data-partner="tweetdeck"><p lang="en" dir="ltr">controversial topic: How do we measure the &quot;health&quot; of a <a href="https://twitter.com/hashtag/science?src=hash&amp;ref_src=twsrc%5Etfw">#science</a> <a href="https://twitter.com/hashtag/python?src=hash&amp;ref_src=twsrc%5Etfw">#python</a> package? GitHub stars? downloads, date of latest commit? # of commits a month / quarter? Spread of commits? Thoughts? <a href="https://twitter.com/hashtag/opensource?src=hash&amp;ref_src=twsrc%5Etfw">#opensource</a> <a href="https://twitter.com/hashtag/OpenScience?src=hash&amp;ref_src=twsrc%5Etfw">#OpenScience</a> <a href="https://twitter.com/pyOpenSci?ref_src=twsrc%5Etfw">@pyOpenSci</a></p>&mdash; Leah Wasser 🦉 (@LeahAWasser) <a href="https://twitter.com/LeahAWasser/status/1577730887818498049?ref_src=twsrc%5Etfw">October 5, 2022</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

The twitter convo made me realize that there are
many different perspectives that we can consider when addressing this question. 

More specifically, pyOpenSci is interested in the health of packages that
support science. So we may need to build upon already existing 
efforts that determine metrics and customize them to our needs.

## Continue reading the blog series on package health

This blog post is part 1 of a 3-part series.

[<i class="fas fa-hand-point-right"></i> Click here to proceed to the part 2/3, where I discuss why free and open source package metrics matter.](/blog/what-makes-open-source-python-package-healthy.html){: .btn .btn--info .btn--large}

In the [final post of this three part blog series](/blog/what-makes-open-source-python-package-healthy.html), I'll recap a conversation held on 
twitter around package health metrics. This conversation will be used to define the 
types of metrics that we will collect as an organization. 

## Feedback? Leave it below 

If you have any thoughts on pyOpenSci metrics and goals or questions, please 
leave them in the comments below!
