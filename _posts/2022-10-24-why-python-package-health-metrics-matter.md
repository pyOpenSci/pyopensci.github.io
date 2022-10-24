---
layout: single
title: "Why Metrics Matter for any organization"
excerpt: "DIDII"
author: "Leah Wasser"
permalink: /blog/why-python-package-health-metrics-matter
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


## Metrics are critical to program development 

*Developing pyOpenSci as an independent organization that supports Python open source software*

I've created a few open science focused programs now from the ground up. One at 
NEON and another at CU Boulder. When building a new program, one of the first 
things that I do (after defining the mission and goals) is to define the metrics 
that constitute success. 

These metrics are critical to define early because:

* They drive everything that you do
* And often they take time to develop
* It's critical to have solid baseline data. This baseline data needs to be collected from the start of your program as often, it can't be collected later, retrospectively.  

If you have evaluation or education in your professional background like I do, 
you may even
[create a logic model](https://thecompassforsbc.org/how-to-guide/how-develop-logic-model-0) to map activities to outcomes and goals. This logic 
model helps you define how 
to collect the data that you need to track outcome success. 

### Baseline data are critical to collect now to measure success (or failure) in the future

As I am building the pyOpenSci program, I find myself thinking about what metrics 
around Python open source software we want to track to better understand:

1. The outcomes of our activities
2. The overall health of packages in our growing pyOpenSci ecosystem (specific to our organization)
3. How/if we contributed to improving the health of packages in our ecosystem
4. How we are impacting the broader scientific python, open source community

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