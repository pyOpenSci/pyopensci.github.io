---
layout: single
title: "What makes a Python Open Source package healthy? A conversation on Twitter."
excerpt: "How should pyOpenSci measure Python open source package health and level of maintenance and usability? Here I summarize a conversation held on twitter around this very topic. Feedback here is welcome!"
author: "Leah Wasser"
permalink: /blog/what-makes-a-python-package-healthy
header:
    overlay_color: "#666"
    overlay_filter: 0.6
categories:
  - blog-post
  - highlight
  - python-packaging
  - peer-review
toc: true
comments: true
---

[In a previous post,](/blog/why-metrics-matter-pyopensci-open-source) I spoke 
generally about why open source should matter to scientists and why metrics of 
health matter to pyOpenSci.

I mentioned a Twitter conversation surrounding package health that resulted in
some really interesting insights. 

Here i'll recap that conversation.

<div class="notice" markdown ="1">

### Goals for package metrics

[If you recall from the previous post](/blog/why-metrics-matter-pyopensci-open-source), some of these metrics will help us quantify success surrounding 
several of our goals.

We hope that:

* Peer review improves Python package structure and usability. 
* Peer review in some way supports maintenance and/or responsible archiving when a package comes to life-end.
* Over time, the package is improved and maintained with possible contributions for those other than the maintainer. 

We need metrics to understand things like

* Community adoption of the package (are scientists using it?)
* Maintenance level of the package (are maintainers still working on it and fixing bugs?)
* Infrastructure (are tests setup to help identify if contributions break things? )
* Usability (is the package documented in a way that helps users quickly get started)

</div> 

### A discussion about package health on twitter 

Below is what I posted on Twitter.
**My goal:** to see what the community thought about "*what constitutes package health*". 

<blockquote class="twitter-tweet" data-partner="tweetdeck"><p lang="en" dir="ltr">controversial topic: How do we measure the &quot;health&quot; of a <a href="https://twitter.com/hashtag/science?src=hash&amp;ref_src=twsrc%5Etfw">#science</a> <a href="https://twitter.com/hashtag/python?src=hash&amp;ref_src=twsrc%5Etfw">#python</a> package? GitHub stars? downloads, date of latest commit? # of commits a month / quarter? Spread of commits? Thoughts? <a href="https://twitter.com/hashtag/opensource?src=hash&amp;ref_src=twsrc%5Etfw">#opensource</a> <a href="https://twitter.com/hashtag/OpenScience?src=hash&amp;ref_src=twsrc%5Etfw">#OpenScience</a> <a href="https://twitter.com/pyOpenSci?ref_src=twsrc%5Etfw">@pyOpenSci</a></p>&mdash; Leah Wasser 🦉 (@LeahAWasser) <a href="https://twitter.com/LeahAWasser/status/1577730887818498049?ref_src=twsrc%5Etfw">October 5, 2022</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

The twitter convo made me realize that there are
many different perspectives that we can consider when addressing this question. 

More specifically, pyOpenSci is interested in the health of packages that
support science. So we may need to build upon already existing 
efforts that determine metrics and customize them to our needs.

<div class="notice" markdown="1">
### A note about our pyOpenSci packages 

Packages in the pyOpenSci ecosystem are not the large packages like Xarray, 
Numpy of the SciPy ecosystem. Rather, they are often smaller and often developed 
by scientists for domain specific applications that others in their
community require. Our package maintainers:

* Often don't have the resources to build community
* Often are keen to build users of their tools and to contribute
to the broader scientific python ecosystem.   
</div>


## Existing efforts on health metrics: Chaoss project and the Software Sustainability Institute (neil)

I'd be remiss if I didn't mention that there are several projects out there that 
are deeply evaluating package health metrics.  

Several people including: Nic Weber, Karthik Ram and Matthew Turk mentioned the 
value and thought put into the [Chaoss project](https://chaoss.community/).

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Is this something that the <a href="https://twitter.com/CHAOSSproj?ref_src=twsrc%5Etfw">@CHAOSSproj</a> work could be specialized and applied to scientific software?</p>&mdash; Matthew Turk (@powersoffour) <a href="https://twitter.com/powersoffour/status/1577755607540580354?ref_src=twsrc%5Etfw">October 5, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">CHAOSS (<a href="https://t.co/moiMUeDuS3">https://t.co/moiMUeDuS3</a>) has been thinking about this more generally, but it&#39;s interesting to think about some of the more &quot;science&quot; aspects.<br><br>I&#39;ve wondered about &quot;frequency of API changes&quot; - for use in research is it healthier to be &quot;stable&quot; or &quot;move fast/break things&quot;?</p>&mdash; Neil P Chue Hong (he/him｜they/them) (@npch) <a href="https://twitter.com/npch/status/1577952873568239618?ref_src=twsrc%5Etfw">October 6, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Not that controversial! Have you looked into the rich body of work that the <a href="https://twitter.com/CHAOSSproj?ref_src=twsrc%5Etfw">@CHAOSSproj</a> community has done? Each metric has been explored in great detail</p>&mdash; Karthik Ram (@_inundata) <a href="https://twitter.com/_inundata/status/1578061660706975744?ref_src=twsrc%5Etfw">October 6, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

The Software Sustainability Institute lead by Neil P Chue Hong also has thought 
about this extensively and pulled together some data accordingly. Neil was also
a critical guiding member of the earlier pyOpenSci community meetings that were 
held in 2018.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">We also did some initial work on this in 2017 (see slide 12 of this presentation): <a href="https://t.co/1F0iMwfT5g">https://t.co/1F0iMwfT5g</a></p>&mdash; Neil P Chue Hong (he/him｜they/them) (@npch) <a href="https://twitter.com/npch/status/1577959663408218114?ref_src=twsrc%5Etfw">October 6, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 


### Snyk and security (which aren't discussed in this post)
One topic that I am not delving into here is security issues. SNYK is definitely 
a leader in this space and was mentioned atleast once in the conversation. 

Below are some of the metrics that you can easily access via SNYK's website. 

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">This might be helpful. This website collects various metrics. And here is the example for numpy. <a href="https://t.co/YNsRoMgks4">https://t.co/YNsRoMgks4</a></p>&mdash; Kevin Wang (@KevinWangStats) <a href="https://twitter.com/KevinWangStats/status/1577999823911161856?ref_src=twsrc%5Etfw">October 6, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 


## What metrics should pyOpenSci track for their Python scientific open source packages?

So back to the question at hand, what should we be tracking?

Hao Ye (and a few others) nailed it - health metrics are multi-dimensional. 

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I think, much like &quot;ecological stability&quot; - <a href="https://t.co/lJe2Fa0ycR">https://t.co/lJe2Fa0ycR</a> - , &quot;health&quot; here is multi-dimensional and different metrics will capture different facets, such as growth, transparency in governance, stability / backwards compatibility, etc.</p>&mdash; Hao Ye will haunt you for bad keming (@Hao_and_Y) <a href="https://twitter.com/Hao_and_Y/status/1577739685841059842?ref_src=twsrc%5Etfw">October 5, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

> I may be a bit biased here considering I have a degree in ecology BUT... I definitely support the ecological perspective always and forever :)

As Justin from Napari and CZI points out, metrics are also perspective based. 
We need to think carefully about the 
organization's goals and what we need to measure as a marker of success and as a 
flag of potential issues. 

See insightful thoughts below:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I think that relevant metrics really depend on who is evaluating &quot;health&quot; and what their needs are.</p>&mdash; Justin Kiggins (@neuromusic) <a href="https://twitter.com/neuromusic/status/1577743299531534336?ref_src=twsrc%5Etfw">October 5, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">From UXR work led by <a href="https://twitter.com/ObusLucy?ref_src=twsrc%5Etfw">@ObusLucy</a>, we found that what users of open source bioimaging plugins are looking for depends on whether they are looking at plugins for general purpose analyses or niche/emerging analyses.</p>&mdash; Justin Kiggins (@neuromusic) <a href="https://twitter.com/neuromusic/status/1577743480352169984?ref_src=twsrc%5Etfw">October 5, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">In the former case, they look for signals of usage (downloads, citations) and in the latter, signals of maintenance and support (commits, comments by dev on issues, etc).</p>&mdash; Justin Kiggins (@neuromusic) <a href="https://twitter.com/neuromusic/status/1577744011707621376?ref_src=twsrc%5Etfw">October 5, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I suspect this is different from what a funder who is interested in sustainability or a corporation who is interested in their software supply chain would look for to define &quot;health&quot;</p>&mdash; Justin Kiggins (@neuromusic) <a href="https://twitter.com/neuromusic/status/1577744568203632640?ref_src=twsrc%5Etfw">October 5, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

Alas it is true that metrics designed for funder reporting may differ significantly
from internal evaluation that informs program development. There is a lot to 
unpack there over the upcoming months!

### Three open source software healthy metric "buckets" 

Based on all of the feedback, and what I *think* might be a start at what I need, I organized the following conversation into three buckets:

1. Infrastructure
2. Maintenance 
3. Community adoption (and usability??)

Theses three buckets I think are all priorities of pyOpenSci.

Note: DEIA is another critical concern for pyOpenSci but I won't discuss that today
in this specific blog post. 


## Infrastructure in a Python open source GitHub repository as a measure of package health

So here I start with infrastructure as a preliminary measure of package health. 
When think of infrastructure I think about the files and "things" available in a 
repository that support it's use. I know that no bucket is perfectly isolated
from the others but i'm taking a stab at this here. 

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

> Um.... we've got some real work to do, y'all on our guides and repos. We need to set a better example here don't we? We welcome help welcome if you are reading this and wanna contribute. Just sayin... 


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

In short, GitHub checks are excellent but mostly exterior infrastructure focused.
They don't check content of those files and items. 

As Chris mentions below, things like having a clearly stated goal and intention,
likely articulated in the README is a sign of a healthy project. This goal was
ideally developed prior to development beginning. Further, if well-written, 
it helps keep the scope of the project management. 

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">To this point - i think that an example of a healthy project behavior is that it explicitly states its technical and organizational goals and intentions</p>&mdash; Chris Holdgraf (@choldgraf) <a href="https://twitter.com/choldgraf/status/1577971815305060354?ref_src=twsrc%5Etfw">October 6, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 



### Test suits and Python versions

Another topic that came up in the discussion was testing and test suites. Evan, 
who has been helping me improve our website navigation suggested looking at test suites
and what version of Python those suites are testing against.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">My initial reaction is that it should have to do with the presence and quality of automated tests, and the versions of Python those tests are run against.<br><br>I can imagine a small, mature package needs little more than minor updates to run on newer versions of Python.</p>&mdash; Evan (he/him) (@darth_mall) <a href="https://twitter.com/darth_mall/status/1577736476053250048?ref_src=twsrc%5Etfw">October 5, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

Test suites are critical not only to ensure the package functionality works as expected 
(if tests are designed well). They also make it easier for contributors to see that
changes they made in a GitHub pull request don't break things unexpectedly. 

Tests can also be created
in a Continuous Integration (CI) workflow to ensure code syntax is consistent 
(e.g. linting tools such as `Black`) and to test documentation builds for broken
links and other potential errors.

> <i class="fas fa-question-circle"></i> How should pyOpenSci handle Python versions supported in our review process?

### Infrastructure Is it easily installable?

How the package is installed is another critical factor to consider. While
these days most packages do seem to be uploaded to PyPI, some still aren't. And 
there are other package managers to consider too such as `Conda`. 

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Lots of thoughts on this... 😂<br>One aspect is definitely whether or not the package is published through PyPI, whether it follows standard packaging practices, has a test suite or well documented simple examples of how to use it, etc.</p>&mdash; Kenneth Hoste (@kehoste) <a href="https://twitter.com/kehoste/status/1578107988715671555?ref_src=twsrc%5Etfw">October 6, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

## Maintenance activity as a metric of health

Speaking of installation, the issue of maintenance came up frequently on Twitter.

Jed had some nice overarching insight here for things they look at that are 
indicators of both maintenance and bus factor (risk factor, mentioned below as a measure
of how many people / institutions support maintenance. More people and more institutions 
equals lower risk, fewer people and fewer institutions supporting the package equates
to a higher maintenance risk (or risk of the package becoming a sad orphan with 
family to take care of it. 

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">CI (multi-platform, coverage, static analysis), promptness of reviews, number of distinct institutions who have committed in past 6 months, ditto who have reviewed PRs in past 6 months, promptness of reviews, quality of commit messages and PR discussion.</p>&mdash; Jed Brown (@five9a2) <a href="https://twitter.com/five9a2/status/1577746418906714112?ref_src=twsrc%5Etfw">October 5, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

How many times have you tried to figure out what Python package you wanted to 
process or access your data, and you found 4 different packages on PyPI all in 
varying states of maintenance?

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
just to see if there's any activity happening in the repository. Or if it's gone dark
(dark referring to no long being maintained, answer to issues, fixing bugs, etc). 

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Well, one should look beyond the number of open issues. A lot of them get closed very fast, many prs are merged on a short timescale too. So if you go into a well established repo and see larger numbers, those may still be just the leftover corner cases of decades of usage.</p>&mdash; Brigitta Sipőcz (@AstroBrigi) <a href="https://twitter.com/AstroBrigi/status/1577786476523589633?ref_src=twsrc%5Etfw">October 5, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

Greg, interestingly suggested one might be able to model expected future lifetime of a package
based upon current (and past?) GitHub activity. 

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Would you accept &quot;expected future lifetime of package&quot; (where &quot;lifetime&quot; means &quot;period of active maintenance&quot;) as a measure of health? That feels like something a model could plausibly be trained to predict...</p>&mdash; Greg Wilson (@gvwilson) <a href="https://twitter.com/gvwilson/status/1577780995293601792?ref_src=twsrc%5Etfw">October 5, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

Uh oh! But are commits enough, Kurt asks? Is there such a thing as a perfect project?

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Could a project with no recent commits be healthy? What if it needed no commits?</p>&mdash; Kurt Schwehr, PhD (@kurtschwehr) <a href="https://twitter.com/kurtschwehr/status/1578022419926683650?ref_src=twsrc%5Etfw">October 6, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

Koen had a more broadly profound thought that would be ideal to consider when
creating a new package; especially a small package that supports specific
scientific workflows.

> Does it do one thing, well? Really well?

Yes, please.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">My experience from R. None apply if packages stick to the Unix philosophy of doing one thing really well. This will lead to packages with considerable uptake but little development. Base code of {snotelr} is mostly unchanged since inception (12K users).<a href="https://t.co/3oKwmeBaA8">https://t.co/3oKwmeBaA8</a></p>&mdash; Koen Hufkens, PhD (@koen_hufkens) <a href="https://twitter.com/koen_hufkens/status/1577753313482866688?ref_src=twsrc%5Etfw">October 5, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

While this might be challenging to enforce in peer review, it is a 
compelling suggestion.

### How do developers evaluate package maintenance?

There is a developer perspective to consider here too. Yuvi Panda pointed out a few
items that they look for: 

1. Frequency of merged commits
2. [Bus factor](https://www.michaelbromley.co.uk/blog/but-what-about-the-bus-factor/)
3. Release cadence (a topic brought up a few times throughout the discussion)

> Remember, *bus factor* has nothing to do with buses, but there is some truth to the 
analogy of what happens when the wheels fall off...

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Without being specific to open science, I always look at: 1. how frequently are commits being merged? 2. what does bus factor look like (is it just 1 person?), 3. What is cadence of release</p>&mdash; Yuvi Panda (@yuvipanda) <a href="https://twitter.com/yuvipanda/status/1578094184040321024?ref_src=twsrc%5Etfw">October 6, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

One thought I had here was to look at commits from the maintainer relative to 
total commits to get a sense of community contribution (if any). 

> The CHAOSS project has an entire working group devoted to risk. 

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">thanks Yuvi! i hadn&#39;t heard of the term bus factor before but was thinking that it would be interesting to look at how many commits do NOT belong to the maintainer in a ratio type of form. Since we have the maintainer information from our reviews we could potentially do that.</p>&mdash; Leah Wasser 🦉 (@LeahAWasser) <a href="https://twitter.com/LeahAWasser/status/1578157415526150144?ref_src=twsrc%5Etfw">October 6, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

Or perhaps pyOpenSci  asks their maintainers what their perceived risk is?
IE: how long do you think the package might remain maintained. They will obviously
know better than anyone what their funding environment and support it like.

Erik suggested that metrics can be dangerous and somewhat subjective at times. 
Akin to the whole - maps can lie, so can data. Ok it's our interpretation that is 
the risk or lie not the data but ... you follow me, yea? 

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Ask developers how comfortable they would be to depend on the package for a new project. I think &quot;health&quot; is largely subjective and I don&#39;t trust metrics without context.</p>&mdash; Erik Welch (@eriknwelch) <a href="https://twitter.com/eriknwelch/status/1577775776719585280?ref_src=twsrc%5Etfw">October 5, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

Some including Pierre brought up the idea of consistent releases. Not necessarily 
frequency but just some consistency to demonstrate that the package was being
updated. 

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Yes. Regular releases is a sign of good health. But given the fact that many scientific projects are often maintained by few people I would avoid any normalization. I&#39;m usually super happy with 1 or 2 releases per year.</p>&mdash; Pierre Poulain (@pierrepo) <a href="https://twitter.com/pierrepo/status/1577758919392362496?ref_src=twsrc%5Etfw">October 5, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

Other discussions evolved around semantic versioning and release
roadmaps.

## Community adoption of an open source Python tool 

Community adoption of an scientific Python package was another broad bucket in my list.
How many users are using the tool? How many stars does the package have? 

### Is the package cited? 

While we'd love to quantify citations, the reality of this is that most people
don't cite software.  But some do, and we hope you are one of them! 

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Citations, naturally! 😉</p>&mdash; Jacob Deppen (@jacob_deppen) <a href="https://twitter.com/jacob_deppen/status/1577996604883312643?ref_src=twsrc%5Etfw">October 6, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 



### What about stars (and commits) as a metrics of adoption (and maintenance)?

The tweeter below looks at stars and commit date as signs of community 
adoption and maintenance. 

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Derivative of 🌟 with respect to ⏲️ plus date of last commit!!</p>&mdash; MLinHydro (@MLinHydro) <a href="https://twitter.com/MLinHydro/status/1577826311250509824?ref_src=twsrc%5Etfw">October 6, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

As Chris Holdgraf mentions below, a package can reach a point where the same 
type of activity can have varying impacts of 
perceived level of maintenance. Many users opening issues, 
can represent community interest and perhaps even community adoption. And massive 
volumes of unaddressed 
issues *might* represent unresponsive maintainers. 

> Or perhaps the maintainers are just overwhelmed by *catastrophic success*.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I think a steady stream of issues implies a lot of user interest, though I can tell you from first-hand experience that it does not mean a project is healthy :-)<br><br>I think it misses one of the most stressful anti-patterns for OS projects: Catastrophic Success<br><br>h/t <a href="https://twitter.com/fperez_org?ref_src=twsrc%5Etfw">@fperez_org</a> :-D</p>&mdash; Chris Holdgraf (@choldgraf) <a href="https://twitter.com/choldgraf/status/1578304871530631168?ref_src=twsrc%5Etfw">October 7, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

Yup

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">it is the equivalent of when a small bakery gets written up in the New York Times, has a huge influx of customers, and collapses under the weight of demand. I think it&#39;s an outcome we don&#39;t think about enough ahead of time</p>&mdash; Chris Holdgraf (@choldgraf) <a href="https://twitter.com/choldgraf/status/1578305233611915264?ref_src=twsrc%5Etfw">October 7, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

> But I need atleast 5 (thousand) croissants, now. ANDDDD so does my friend. 

Juan agrees that a steady stream of issues suggests adoption. Especially since 
opening issues on GitHub suggests that the users have some technical literacy. 

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">As others have said, it’s multidimensional, but this article argues that a steady stream of issues = a community of active and engaged users — often somewhat programming-literate since it’s GH. I find that argument compelling.<a href="https://t.co/X2vY2QxRfV">https://t.co/X2vY2QxRfV</a></p>&mdash; Juan Nunez-Iglesias (@jnuneziglesias) <a href="https://twitter.com/jnuneziglesias/status/1578290475017981953?ref_src=twsrc%5Etfw">October 7, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 


### Are some things missing here? Probably so

* Some other items that didn't come up in the conversation included downloads.
* Packages found as dependencies or in environments on GitHub 

Joel rightfully noted that my original tweet seemed less concerned with package
quality and more concerned with community and use. I think they are right. 
We are hopeful that peer review metrics and recommended guidelines for packaging  
will get at package quality. 
 
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I guess that depends on whether you&#39;re concerned about the quality of the package or the popularity of the package.<br><br>Most of your proposed metrics seem to be about size and activity of the COMMUNITY using the package rather than quality or reliability of the package itself.</p>&mdash; Joel Bennett (@Jaykul) <a href="https://twitter.com/Jaykul/status/1577739823154094080?ref_src=twsrc%5Etfw">October 5, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 


## Metrics quantifying community around tools 

I'd be remiss if i didn't atleast mention that some of the discussion steered 
towards community around tools. For instance, Evan brought up community governance
being a priority.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Governance was another aspect I was going to suggest. The “benevolent dictator for life” model is… risky</p>&mdash; Evan (he/him) (@darth_mall) <a href="https://twitter.com/darth_mall/status/1577741937544609793?ref_src=twsrc%5Etfw">October 5, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

But the reality of our users was summarized well here by Tania. Most scientists 
developing tools are trying to simplify workflows with repeated code. Workflows
that others may be trying to develop to do the same thing. They aren't necessarily
focused on community, atleast not yet. 

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Also note - a lot of folks developing scientific software are more interested in the pragmatic side of open source (i.e availability, making the codebase public and accessible) rather than building a community around it.</p>&mdash; ✨Tania Allard 💀🇲🇽 🇬🇧 she/her (@ixek) <a href="https://twitter.com/ixek/status/1577914450505601024?ref_src=twsrc%5Etfw">October 6, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 

Further, capturing metrics around community is hard as Melissa points out. Most
of the above resources don't capture these types of items. And also, how would one
capture the work on a community manager quantitatively?
 
 <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Depends on what is &quot;health&quot;. Sustainability? Funding? Maintainability? Culture? I think most metrics are proxies to some other thing we want to measure, but are not representative. For ex looking at github, a bunch of the work done by community managers is not captured at all.</p>&mdash; Ax=13!!! (@melissawm) <a href="https://twitter.com/melissawm/status/1577776074863288324?ref_src=twsrc%5Etfw">October 5, 2022</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 


## Summarizing it all 

There is a lot of work to do in this area. And a lot of work that has already
been done to learn from. It's clear to me that we should start by looking at 
what's been done and what people are already collecting in this area. And then
customize to our needs.

A few items that stand out to me that we could begin collecting now surrounding
package maintenance and community adoption are below.
This list will grow but it's just a start. 

### Package Maintenance and Community Adoption

* Date of last commit
* Date of last release
* Annual frequency of releases
* Number of open issues / quarter
* Issues opened by maintainers vs non maintainers
* Number of commits made by non maintainers / year


### Package quality & infrastructure

* GitHub core checks for README, Contributing guide, etc
* Documentation & associated documentation quality (vignettes and quick start)
* Defined scope and intent of package maintenance
* Testing and CI setup

I will share a more comprehensive list once we pull that together as an organization
in another blog post. Stay tuned for more! 

## Thoughts?
If you have any additional thoughts on this topic or if I missed important 
parts of the conversation please share in the comment section below. 

