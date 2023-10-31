---
layout: single
title: "Questions about pyOpenSci - RSE meeting 2023"
excerpt: "Here you will find answers to two of the most common questions that people ask about pyOpenSci. These questions were asked at our birds of a feather session at the 2023 Research Software Engineer meeting."
author: "Leah Wasser"
permalink: /blog/common-pyOpenSci-questions-rse-2023.html
header:
  overlay_color: "#666"
  overlay_filter: 0.6
categories:
  - blog-post
  - community
toc: true
comments: true
---

In [a previous post](/pyOpenSci-research-software-2023.html), I discussed some of the issues that Research Software Engineers
(RSE) encounter in the Python packaging ecosystem. The issues were brought up
in a Birds of a Feature community session that I lead at the RSE meeting in
Chicago.

Here, i'll address the two most common questions that we get about
pyOpenSci as asked in the RSE meeting.

## How is pyOpenSci different from JOSS?

One of the most common questions I get is:

> What is the difference between pyOpenSci and JOSS?

The short answer to this is that our organizations have different,
but complementary goals. Hence our partnership.

JOSS's core goal is to provide the critical academic credit to software maintainers for developing tools. As such they are a publisher and publication is an end-point for a maintainer. Once a package is published in JOSS, it gains a CROSS-REF doi which is citable and attached to your ORCID-id.

pyOpenSci's core goal is to support maintainers through the process of both developing and maintaining software. We also care about long term maintenance of software. As such, once accepted into our ecosystem, pyOpenSci package maintainers become an integral part of our community. pyOpenSci will build relationships with them. And we will watch tools over time to ensure tools in our growing catalog are maintained over time.

If they become unmaintained we will either archive / sunset the project in our catalog and/or try to help find a new maintainer for the tool.

| pyOpenSci                                                                                                                       | JOSS                                                                                              |
| ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| Is a diverse community focused on both running peer review, developing Python packaging guidelines and mentorship and training. | Is a organization with a community-driven review and publication process                          |
| Cares about long-term maintenance of software and partners with JOSS for academic credit                                        | Cares about academic credit for software and is a publication end-point                           |
| Reviews software that drives open science- broad scope                                                                          | reviews software that is explicitly determined to be "research". As such has a more narrow scope. |
| Supports community-affiliated review                                                                                            | Has a fixed review process because it operates as a Journal publication                           |

The good news is that you don't have to chose between us!

### pyOpenSci-JOSS partnership for the win

<figure>
    <a href="/images/peer-review/peer-review-partners-process.png"><img src="/images/peer-review/peer-review-partners-process.png" alt="Image showing our peer review process.Broadly, there are 4 boxes at the top that show the process where first a maintaining submits a tool for review. then the package is reviewed by 2 reviewers. When a package is accepted, ie becomes a part of our ecosystem and then can move on to be published by JOSS if it is in scope for JOSS."></a>
    <figcaption>Through our partnership with JOSS you can be reviewed by pyOpenSci and then published by JOSS (if in scope) via our review. Thus if you are interested in both maintained, high quality Python software and also long term maintenance of tools, this partnership is for you!</figcaption>
</figure>

Through our partnership with JOSS, a maintainer can both get
support and contribute back to the growing pyOpenSci community. But they can also receive the software publication and associated academic credit that is so important.

In the above image you may notice that we also run a affiliated package partnership program. We get
questions about that program often so i'll discuss that next.

## pyOpenSci's partnership program with domain-specific software communities

pyOpenSci runs an affiliated package [partnership program with domain specific Python communities](https://www.pyopensci.org/partners.html).

We have a partnership program where we add an additional layer to our review where through a single end-to-end review process, a package can become:

1. part of our ecosystem
2. published by JOSS
3. an affiliated package for pyOpenSci

Some of the communities that we are currently speaking with include:

- astropy
- scverse
- PyHeliophysics
- Sunpy
- plasmapy

<figure>
    <a href="/images/pyos-partnerships.png">
    <img src="/images/pyos-partnerships.png" alt="Image with text that reads - affiliated package partnerships. It then has logos of the astropy, scverse, PyHeliophysics, Sunpy and plasmapy communities. Below it says  says your community here. ">
    </a>
    <figcaption>Add caption.
    </figcaption>
</figure>

Questions we received around our partner community program

### Can a package that doesn't make the affiliated "standard" and is thus rejected from a partnership community or a package that doesn't want to go through JOSS< only pyOpenSci still become a part of the community?

The answer to that is YES and yes. just because a package is submitted to pyOpenSci doesn't mean you HAVE to move forward with a publication. Further if your tool doesn't make the affiliated package cut, you can still be accepted into the pyOpenSci ecosystem

in that regard it's a win-win situation for maintainers so submit to us regardless of their goals associated with JOSS or becoming an affiliated package with a partner community.
