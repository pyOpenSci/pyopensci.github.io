---
layout: single
title: "Why Python open source software metrics matter for pyOpenSci and what should we track?"
excerpt: ""
author: "Leah Wasser"
permalink: /blog/why-metrics-matter-pyopensci-open-source
header:
    overlay_color: "#666"
    overlay_filter: 0.6
categories:
  - blog-post
  - highlight
  - python-packaging
  - peer-review
toc: true
---

## Program development: developing pyOpenSci as an independent organization that supports Python open source software
I've created a few open science focused programs now from the ground up. One at 
NEON and another at CU Boulder. When building a new program, one of the first 
things that I do (after defining the mission and goals) is to define the metrics 
that constitute success. 

These metrics are critical to define early because:

* They drive everything that you do
* And often they take time to develop
* For solid metrics comparisons to evaluate success, you often need solid baseline data; baseline data needs to be collected from the start. Often, it can't be collected later retrospectively.  

If you have evaluation or education in your professional root system (like I do) 
you may even go as far as 
creating a logic model to map activities to outcomes and goals. Then you decide how 
to collect the data that you need to track outcome success over time. 

### Baseline data are critical to collect now to measure success (or failure) in the future

As I am building the pyOpenSci program, I find myself thinking about what metrics 
around Python open source software we want to track to better understand:

1. The outcomes of our activities
2. The overall health of packages in our growing pyOpenSci ecosystem (specific to our organization)
3. How/if we contributed to improving that package health
4. How we are impacting the broader scientific python, open source community


### Why should Python open source package health matter to scientists? 

If you are a scientist, package health may not be something that 
you care about. What might seem more important is doing your science, processing 
your data. 

In actuality, package health is incredibly important to science, especially open
science. It should be important to you too! 

Why? 

**Free and open source tools (FOSS) makes your code simpler as they provide commonly needed functionality wrapped up in simple tested functions and objects that you don't need to recreate** If you are creating open workflows to process your data, you are likely using free-to-download (and use) tools - software. These tools make it easier for you to access, open, process and visualize your data. In short these allows allow you to write 
less (complicated) code to process your data. Code that someone else (a package maintainer)
maintains.

**Open source software provides centralized maintenance of commonly used workflows:** Similarly if you are using free and open code to access or get data to make a reproducible workflow. And many people access that same data through that same API for different  applications, isn't it better that one person writes great code and 
updates it as things like the download API change? This avoids many people trying to create the same workflow and creating different and potentially problematic code. Now lots of people are trying the reinvent the wheel. This idea of central maintenance of a code base to reduce code complexity is also at the heart of
open science. 

**Open source software reduces barriers to others building upon your work:** If you do use free-to-download tools then your work becomes more reproducible. 
It removes the layer of needing a paid license to run your code. Thus more people
can recreate your workflow and build upon your work rather than starting from scratch.
**This is the heart of open science.** 

There is a lot more to say about the value of open source here but i'll leave
that to another blog post. 

### Creating and maintaining open source software is hard 
But alas creating these tools to work with data is not a trivial task and often 
the people who develop the tools (who may gbe developers or scientists) burn out, 
get new jobs, etc. This leaves a toll that was once maintained vulnerable to new bugs
as other packages that the tool depends on update, or as the Python language updates. 

Further not all developers focus on usability - documenting the package well enough 
so a beginner can get started with using it. 

Maintainers do a lot of hard work and rarely get credit for it. 

> Please - cite software in your work if you use it!

And finally, what happens to that package that you are using in your workflow, 
when the developer gets a new job or finds they no longer have the time to 
maintain it? 

Now what?

These issues surrounding citation, maintenance, usability and quality of software, 
are the types of issues that pyOpenSci will address. 

<figure>
    <a href="/images/blog/xkcd-open-source-dependency.png">
    <img src="/images/blog/xkcd-open-source-dependency.png" style="max-width:70%" alt="Image showing xkcd comic with a robotic type of image representing a scientific workflow and pointing to the small open source package maintained by one person that is a major dependency of the workflow.">
    </a>
    <figcaption>Critical scientific workflows and projects often have dependencies
            that are maintained by volunteers. Source: XKCD </figcaption>
</figure>


### pyOpenSci needs to collect data around metrics to track all of these issues 


pyOpenSci needs to do more than just open peer review of scientific Python 
packages. We need to collect data to better understand the issues and how we 
impact those issues over time.

A few package-related goals of pyOpenSci include:

* Ensure that package quality is better after the review than before
* Inspire maintainers to develop more robust package infrastructure including testing
* Improve the usability of packages through documentation and vignettes (short tutorials showing users how to get started with the package)
* Ensure that packages are maintained over time; If they aren't maintained, ensure that they are archived or sunsetted in a way that users know they are no longer maintained. (no more dark orphan repositories!)

<figure>
    <a href="/images/blog/orphan-python-open-source-packages.png">
    <img src="/images/blog/orphan-python-open-source-packages.png" style="max-width:70%" alt="Image showing girl crying with text orphan python packages are breaking my open workflows.">
    </a>
    <figcaption>Your workflow likely depends upon tools that are being developed
    by volunteers. Supporting these tools is critical to supporting open science. And 
    open science is critical to accelerating scientific discovery Source: Meme created by yours truly. :) </figcaption>
</figure>

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

We won't begin to review a package [without bare minimum checks](https://www.pyopensci.org/contributing-guide/open-source-software-submissions/author-guide.html#pyopensci-review-guide-for-python-open-source-package-authors).
We hope that these bare minimal checks help maintainers as they try to decide
what is good enough infrastructure for their package. This won't be easy if 
at all possible to track but we hope this is an indirect outcome of our efforts.

We hope that these checks will also help maintainers that are creating a 
new packages even if they never submit their package to us for peer review. 

### Goals for package metrics

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




<div class="notice" markdown="1">
### A note about our pyOpenSci packages 

Our packages are often smaller and often maintained by 1 person (a common phenomenom in open source). Sometimes they have a 
small maintainer team, sometimes they don't. Our package maintainers often don't have the resources
to build community. And often they are scientists rather than developers. But many are keen to build users of their tools and to contribute
to the broader scientific python ecosystem.   
</div>

### Three open source software healthy metric "buckets" 

Based on all of the feedback, and what I *think* might be a start at what I need, 
I organized the following conversation into three buckets:

1. Infrastructure
2. Maintenance 
3. Community adoption (and usability??)

These three buckets I think are all priorities of pyOpenSci.

Note: Diversity, Equity, Inclusion, and Accessibility (DEIA) are also of critical 
concern  for pyOpenSci but I will save that too for another post.  

[In the next post, I will recap that convo on twitter.](/blog/what-makes-a-python-package-healthy)

