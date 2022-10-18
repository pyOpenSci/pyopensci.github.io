---
layout: single
title: "What makes a Python Open Source package healthy? A conversation on Twitter."
excerpt: "Here i..summarize... ."
author: "Leah Wasser"
permalink: /blog/what-makes-a-python-package-healthy
header:
    overlay_color: "#666"
    overlay_filter: 0.6
categories:
  - updates
  - blog-post
  - highlight
  - peer-review
---

## Program development: developing pyOpenSci as an independent organization that supports Python open source software
I've created a few broader open science focused programs now. One at NEON and 
another at CU Boulder. If
i've learned anything from these programs, it's that one of the first things 
I do when creating a new program, after defining the mission and goals is to 
define the metrics that constitute success. 

These metrics are critical as they drive everything that you do. 

If you have evaluation or education in your professional root system (like I do) 
you may even go as far as 
creating a logic model to map activities to outcomes nad goals and metrics to track all of that. 

### Baseline data are critical to collect now to measure success (or failure) in the future

As I am building the pyOpenSci program, I find myself thinking about what metrics 
we want to track to better understand:

1. the outcomes of our activities
2. the overall health of packages in our growing pyOpenSci ecosystem
3. how/if we contributed to that package health
4. how we are impacting the broader scientific python, open source community

> This thought process needs to happen now, at the beginning, because now is when 
> we collect baseline data that we can use to measure outcomes as they evolve. 


### pyOpenSci is more than just peer review

pyOpenSci is more than just open peer review of scientific Python packages. 


A few package-related goals of pyOpenSci include:

* Ensure that package quality is better after the review than before
* Inspire maintainers to develop more robust package infrastructure including testing
* Improve the usability of packages through documentation and vignettes (short tutorials showing users how to get started with the package)
* Ensure that packages are maintained over time; If they aren't maintained, ensure that they are archived or sunsetted in a way that users know they are no longer maintained. (no more dark orphan repositories!)

> TODO: make orphan package graphic on canva?>

To make sure we reach our goals, we have to collect metrics on packages 
submitted to our open peer review process to track quality and health over time.

> We want to help the community.

**sADD: NOTE ABOUT WHY THESE PACKAGES MATTER TO SCIENTIST **
packages 
that make it easier for scientists to process their data, with less complex code.
Packages that enable open reproducible workflow development. 
{: .notice }

## How pyOpenSci hopes to improve the usability and quality of smaller open source software packages that support science  

These, my friend are lofty goals. But our mission is to do just that - to help
scientists build better software. And to ensure that the community nderstands the 
mainteannce level of tha tsoftware before they adopt using it. 

So how do we track that? 

### Peer review is actually the second step in our process. 

We won't begin to review a package [without bare minimum checks](https://www.pyopensci.org/contributing-guide/open-source-software-submissions/author-guide.html#pyopensci-review-guide-for-python-open-source-package-authors).
We hope that these checks bare minimal checks help maintainers as they try to decide
what is good enough infrastructure for their package?

We hope this will even help those that never make it to peer review improve their infrastructure from the start. 

but what are those?
* After the review we hope some elements of health have improved
* overtime we hope that improvement continues and develops... and we also need to track
maintenance.

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

### A note about our pyOpenSci packages 

Our packages are often smaller and maintained by 1 person. Sometimes they have a 
small maintainer team, sometimes they don't. They often don't have the resources
to build community. But many are keen to build users of their tools and to contribute
to the broader scientific python ecosystem.   

## Metrics for open source software

So how should we define package health?

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">How do you define health?</p>&mdash; Dr. Ray Bell (@RayBell_DTN) <a href="https://twitter.com/RayBell_DTN/status/1577759427171524609?ref_src=twsrc%5Etfw">October 5, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

Yup, my question exactly. *Help!*

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Depends on what is &quot;health&quot;. Sustainability? Funding? Maintainability? Culture? I think most metrics are proxies to some other thing we want to measure, but are not representative. For ex looking at github, a bunch of the work done by community managers is not captured at all.</p>&mdash; Ax=13!!! (@melissawm) <a href="https://twitter.com/melissawm/status/1577776074863288324?ref_src=twsrc%5Etfw">October 5, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 


# I wonder if this goes at the top?
## The ecological perspective always rules

I may be a bit biased here considering I have a degree in ecology BUT... I definitely
agree with Hao Ye - health metrics are (and should be) multi-dimensional and 
different metrics will capture different things. 

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I think, much like &quot;ecological stability&quot; - <a href="https://t.co/lJe2Fa0ycR">https://t.co/lJe2Fa0ycR</a> - , &quot;health&quot; here is multi-dimensional and different metrics will capture different facets, such as growth, transparency in governance, stability / backwards compatibility, etc.</p>&mdash; Hao Ye will haunt you for bad keming (@Hao_and_Y) <a href="https://twitter.com/Hao_and_Y/status/1577739685841059842?ref_src=twsrc%5Etfw">October 5, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 


## What are the needs of pyOpenSci?

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I think that relevant metrics really depend on who is evaluating &quot;health&quot; and what their needs are.</p>&mdash; Justin Kiggins (@neuromusic) <a href="https://twitter.com/neuromusic/status/1577743299531534336?ref_src=twsrc%5Etfw">October 5, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

# Todo - buckets to organize this: Maintenance, Infrastructure, Community Adoption


## Maintenance ????

### What does GitHub (and Ivan) think about health checks for (Python) open source?

Ivan, who is a long time advisor, editor and member of the pyOpenSci community
(and generally a great human being who is growing open science efforts such as 
[Open Science Labs](https://opensciencelabs.org/))  
was quick to point out some basic metrics offered by GitHub which follow their 
[community standards online guidebook here](https://opensource.guide/).

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Maybe not totally related, but github has a section called community standards that mabe could be used as reference, for example: <a href="https://t.co/wmu1bDdcQR">https://t.co/wmu1bDdcQR</a></p>&mdash; XMN (@xmnlab) <a href="https://twitter.com/xmnlab/status/1578745372880429057?ref_src=twsrc%5Etfw">October 8, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

Actually it's totally related, Ivan! Let's have a look look at the [pyOpenSci contributing-guide GitHub repository](https://www.github.com/pyopensci/contributing-guide/community) to see how we are 
doing as an organization.

{% include figure image_path="/images/blog/oss-health-github.png" alt="Image showing the community standards page in GitHub. You can see in the image we are missing several critical files including  a code of conduct file, a contributing file that helps people understand how to contribute to the guide and issue and pull request templates." caption="Here you can see the community page in GitHub for our contributing-guide repository. Note that we are missing several important items in the repo including a code of conduct file, a contributing file that helps people understand how to contribute to the guide and issue and pull request templates. HELP!" %}

> Um.... we've got some real work to do, y'all on our guides and repos. We need to set a better example here don't we? We welcome help welcome if you wanna contribute. Just sayin... 


### GitHub bare minimum requirements are a great start!

The GitHub minimum requirements are a great start to assessing package repository health. In fact i've created a TODO
to add this url of checks to our pre-submission and submission templates as these are things
we want to see too. 

> Health check #1: are all GitHub community checks green?

Looking at these checks more closely you can begin to think about different categories
of checks that broadly look at package usability (readme, description), community engagement (code of conduct, 
templates), etc. 

<div class="notice" markdown="1">
The GitHub list includes: 

* Description
* README.md file ((but what's in that))
* Code of conduct (but what's in that file?!)
* License (OSI approved)
* Issue templates (great for community building)
* Pull request templates

</div>

But these checks don't look at what's in that README, or how the issue templates
are designed to invite contributions that are useful to the maintainers (and that
guide new potential contributors). 

# Infrastructure ?? 
- gh checks are mostly infrastructure but don't check content

## Test suits and Python versions

Another topic that came up in the discussion was testing and test suites. Evan, 
who has been helping me improve our website navigation suggested looking at test suites
and what version of Python those suites are testing against.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">My initial reaction is that it should have to do with the presence and quality of automated tests, and the versions of Python those tests are run against.<br><br>I can imagine a small, mature package needs little more than minor updates to run on newer versions of Python.</p>&mdash; Evan (he/him) (@darth_mall) <a href="https://twitter.com/darth_mall/status/1577736476053250048?ref_src=twsrc%5Etfw">October 5, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

Test suites are critical not only to ensure the package functionality works as expected 
(if tests are designed well). They also make it easier for contributors to see that
changes they made in a PR don't break unexpected things. 

Tests can also be created
in a Continuous Integration (CI) workflow to ensure code syntax is consistent 
(e.g. linting tools such as `Black`) and to test documentation builds for broken
links and other potential errors.

> <i class="fas fa-question-circle"></i> How should pyOpenSci handle Python versions supported in our review process?

## Maintenance activity as a metric of health

Throughout the conversation on Twitter, the issue of maintenance came up frequently.
How many times have you tried to figure out what Python package you wanted to 
process or access your data, and you found 4 different packages on PyPI all in 
varying states of maintanence?

I've certainty been there. So has RenéKat it seems: 

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I look to see if issues are being resolved. If it’s not being maintained I’m not going to waste my time installing it.</p>&mdash; RenéKat (@renekat14) <a href="https://twitter.com/renekat14/status/1577745550803451918?ref_src=twsrc%5Etfw">October 5, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

It's true. For a scientist (or anyone) it's a waste of time to install something
that won't be fixed as bugs arise. It's also a difficult time burden for scientists to 
have to dig into the package to check if it's being maintained or not. Which is
one department where we hope pyOpenSci can help. 

Now we need to keep in mind that this is relative. Some package maintainers
may spend lots of time on issues or have too many to handle quickly as Melissa
points out:  

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Would that apply to large established projects such as NumPy? My guess is it wouldn&#39;t 😉</p>&mdash; Ax=13!!! (@melissawm) <a href="https://twitter.com/melissawm/status/1577776605220454403?ref_src=twsrc%5Etfw">October 5, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

But alas I think there are ways around that. We can look at commits, pr's and such
just to see if there's any activity happening in the repository. Or if it's gone dark. 

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Well, one should look beyond the number of open issues. A lot of them get closed very fast, many prs are merged on a short timescale too. So if you go into a well established repo and see larger numbers, those may still be just the leftover corner cases of decades of usage.</p>&mdash; Brigitta Sipőcz (@AstroBrigi) <a href="https://twitter.com/AstroBrigi/status/1577786476523589633?ref_src=twsrc%5Etfw">October 5, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

uh oh! But are commits enough, Kurt asks? Is there such a thing as a perfect project?

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Could a project with no recent commits be healthy? What if it needed no commits?</p>&mdash; Kurt Schwehr, PhD (@kurtschwehr) <a href="https://twitter.com/kurtschwehr/status/1578022419926683650?ref_src=twsrc%5Etfw">October 6, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

# Maybe this is where the quote about packages doing only one thing well principles??

Does the package do one thing well?
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">My experience from R. None apply if packages stick to the Unix philosophy of doing one thing really well. This will lead to packages with considerable uptake but little development. Base code of {snotelr} is mostly unchanged since inception (12K users).<a href="https://t.co/3oKwmeBaA8">https://t.co/3oKwmeBaA8</a></p>&mdash; Koen Hufkens, PhD (@koen_hufkens) <a href="https://twitter.com/koen_hufkens/status/1577753313482866688?ref_src=twsrc%5Etfw">October 5, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 


<blockquote class="twitter-tweet"><p lang="en" dir="ltr">As others have said, it’s multidimensional, but this article argues that a steady stream of issues = a community of active and engaged users — often somewhat programming-literate since it’s GH. I find that argument compelling.<a href="https://t.co/X2vY2QxRfV">https://t.co/X2vY2QxRfV</a></p>&mdash; Juan Nunez-Iglesias (@jnuneziglesias) <a href="https://twitter.com/jnuneziglesias/status/1578290475017981953?ref_src=twsrc%5Etfw">October 7, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 



### User Interest 

As chris mentions below, herin reach a point where the same type of activity can 
specify different things. Many users opening issues, can represent COMMUNITY INTEREST
(or community adoption as I am calling it below). Massive volumes answered or unaddressed 
issues *might* represent unresponsive maintainers  (or not).


<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I think a steady stream of issues implies a lot of user interest, though I can tell you from first-hand experience that it does not mean a project is healthy :-)<br><br>I think it misses one of the most stressful anti-patterns for OS projects: Catastrophic Success<br><br>h/t <a href="https://twitter.com/fperez_org?ref_src=twsrc%5Etfw">@fperez_org</a> :-D</p>&mdash; Chris Holdgraf (@choldgraf) <a href="https://twitter.com/choldgraf/status/1578304871530631168?ref_src=twsrc%5Etfw">October 7, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

Yup




Maintenance ... 
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">CI (multi-platform, coverage, static analysis), promptness of reviews, number of distinct institutions who have committed in past 6 months, ditto who have reviewed PRs in past 6 months, promptness of reviews, quality of commit messages and PR discussion.</p>&mdash; Jed Brown (@five9a2) <a href="https://twitter.com/five9a2/status/1577746418906714112?ref_src=twsrc%5Etfw">October 5, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 


>> So i think now i was at we have a few buckets to consider

1. community adoption of tools (use)
2. degree of maintenance (maintenance)
3. packaging quality?? (docs, license, etc) <- missing in my tweet>


<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Also note - a lot of folks developing scientific software are more interested in the pragmatic side of open source (i.e availability, making the codebase public and accessible) rather than building a community around it.</p>&mdash; ✨Tania Allard 💀🇲🇽 🇬🇧 she/her (@ixek) <a href="https://twitter.com/ixek/status/1577914450505601024?ref_src=twsrc%5Etfw">October 6, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 


<blockquote class="twitter-tweet"><p lang="en" dir="ltr">To this point - i think that an example of a healthy project behavior is that it explicitly states its technical and organizational goals and intentions</p>&mdash; Chris Holdgraf (@choldgraf) <a href="https://twitter.com/choldgraf/status/1577971815305060354?ref_src=twsrc%5Etfw">October 6, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 


## What do developers think?

There is a developer perspective to consider here too. Yuvi pointed out a few
items that they look for: 

1. Frequency of merged commits
2. [Bus factor](https://www.michaelbromley.co.uk/blog/but-what-about-the-bus-factor/)
3. Release cadence (a topic brought up a few times throught the discussion)

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Without being specific to open science, I always look at: 1. how frequently are commits being merged? 2. what does bus factor look like (is it just 1 person?), 3. What is cadence of release</p>&mdash; Yuvi Panda (@yuvipanda) <a href="https://twitter.com/yuvipanda/status/1578094184040321024?ref_src=twsrc%5Etfw">October 6, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

One thought I had here was to look at commits from the maintainer relative to 
total commits to get a sense of community contribution (if any).

> NOTE: the average number of maintainers for  open source projects is 1. This so far holds true for our 12 packages accepted into pyOpenSci. Yikes!

Or maybe we just get developers to assess and tell us if they'd be happy with it 
being a dependency given the subjectivity of metrics? While I do understand where
this comes from, pyOpenSci does need to have some way to evaluate tools that is 
reproducible. 

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Ask developers how comfortable they would be to depend on the package for a new project. I think &quot;health&quot; is largely subjective and I don&#39;t trust metrics without context.</p>&mdash; Erik Welch (@eriknwelch) <a href="https://twitter.com/eriknwelch/status/1577775776719585280?ref_src=twsrc%5Etfw">October 5, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

releases, releases with semantic versioning, release roadmap ...

release frequency

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Yes. Regular releases is a sign of good health. But given the fact that many scientific projects are often maintained by few people I would avoid any normalization. I&#39;m usually super happy with 1 or 2 releases per year.</p>&mdash; Pierre Poulain (@pierrepo) <a href="https://twitter.com/pierrepo/status/1577758919392362496?ref_src=twsrc%5Etfw">October 5, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 


and could we look at that rel to who is commintting /openin isuses?


## This section should be around community...

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Governance was another aspect I was going to suggest. The “benevolent dictator for life” model is… risky</p>&mdash; Evan (he/him) (@darth_mall) <a href="https://twitter.com/darth_mall/status/1577741937544609793?ref_src=twsrc%5Etfw">October 5, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

## Existing efforts on health metrics: Chaoss project and SSI (neil)

Several people including

Nic Weber, Karthik Ram and Matthew Turk mentioned the Chaoss project as a place to start
* https://chaoss.community/

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Is this something that the <a href="https://twitter.com/CHAOSSproj?ref_src=twsrc%5Etfw">@CHAOSSproj</a> work could be specialized and applied to scientific software?</p>&mdash; Matthew Turk (@powersoffour) <a href="https://twitter.com/powersoffour/status/1577755607540580354?ref_src=twsrc%5Etfw">October 5, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">CHAOSS (<a href="https://t.co/moiMUeDuS3">https://t.co/moiMUeDuS3</a>) has been thinking about this more generally, but it&#39;s interesting to think about some of the more &quot;science&quot; aspects.<br><br>I&#39;ve wondered about &quot;frequency of API changes&quot; - for use in research is it healthier to be &quot;stable&quot; or &quot;move fast/break things&quot;?</p>&mdash; Neil P Chue Hong (he/him｜they/them) (@npch) <a href="https://twitter.com/npch/status/1577952873568239618?ref_src=twsrc%5Etfw">October 6, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Not that controversial! Have you looked into the rich body of work that the <a href="https://twitter.com/CHAOSSproj?ref_src=twsrc%5Etfw">@CHAOSSproj</a> community has done? Each metric has been explored in great detail</p>&mdash; Karthik Ram (@_inundata) <a href="https://twitter.com/_inundata/status/1578061660706975744?ref_src=twsrc%5Etfw">October 6, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

Maintenance - 

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Would you accept &quot;expected future lifetime of package&quot; (where &quot;lifetime&quot; means &quot;period of active maintenance&quot;) as a measure of health? That feels like something a model could plausibly be trained to predict...</p>&mdash; Greg Wilson (@gvwilson) <a href="https://twitter.com/gvwilson/status/1577780995293601792?ref_src=twsrc%5Etfw">October 5, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

Citations - 

but people dont often cite software... 

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Citations, naturally! 😉</p>&mdash; Jacob Deppen (@jacob_deppen) <a href="https://twitter.com/jacob_deppen/status/1577996604883312643?ref_src=twsrc%5Etfw">October 6, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 




## Infrastructure Is it easily installable?

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Lots of thoughts on this... 😂<br>One aspect is definitely whether or not the package is published through PyPI, whether it follows standard packaging practices, has a test suite or well documented simple examples of how to use it, etc.</p>&mdash; Kenneth Hoste (@kehoste) <a href="https://twitter.com/kehoste/status/1578107988715671555?ref_src=twsrc%5Etfw">October 6, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 



## Community adoption of a package

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Derivative of 🌟 with respect to ⏲️ plus date of last commit!!</p>&mdash; MLinHydro (@MLinHydro) <a href="https://twitter.com/MLinHydro/status/1577826311250509824?ref_src=twsrc%5Etfw">October 6, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

# TODO Add chris tweet about issues representing broad interest in the package...
COuld also add downloads




community vs use

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I guess that depends on whether you&#39;re concerned about the quality of the package or the popularity of the package.<br><br>Most of your proposed metrics seem to be about size and activity of the COMMUNITY using the package rather than quality or reliability of the package itself.</p>&mdash; Joel Bennett (@Jaykul) <a href="https://twitter.com/Jaykul/status/1577739823154094080?ref_src=twsrc%5Etfw">October 5, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 


SNYK

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">This might be helpful. This website collects various metrics. And here is the example for numpy. <a href="https://t.co/YNsRoMgks4">https://t.co/YNsRoMgks4</a></p>&mdash; Kevin Wang (@KevinWangStats) <a href="https://twitter.com/KevinWangStats/status/1577999823911161856?ref_src=twsrc%5Etfw">October 6, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 


## Questions?
If you have any questions, please reach out to me at leah at pyopensci.org or on 
twitter at [@LeahAWasser](https://twitter.com/LeahAWasser).
