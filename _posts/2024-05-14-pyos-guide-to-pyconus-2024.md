---
layout: single
title: "The pyOpenSci Guide to PyCon 2024"
excerpt: "PyCon US 2024 is finally here, and we can't wait to connect with you! This post has all of the talks, panels, summits, and keynotes where pyOpenSci community members (and friends!) will be speaking."
author: "Jesse Mostipak"
permalink: /blog/pyos-guide-to-pyconus-2024.html
header:
  overlay_image: images/blog/2024/may/pycon-us-2024.png
  overlay_filter: 0.6
categories:
  - blog-post
  - community
classes: wide
toc: true
comments: true
---
## <i class="fa-solid fa-heart"></i> Connect with the pyOpenSci community at PyCon US 2024!
We know there are a million things to do and see while at [PyCon US 2024](https://us.pycon.org/2024/) in beautiful Pittsburgh this weekend, so we wanted to compile a list of every talk, keynote, summit, and panel where you can expect to meet some of the fantastic pyOpenSci community members!

## <i class="fa-regular fa-calendar"></i> Friday, May 17th
### <i class="fa-solid fa-users-between-lines"></i> 11:00--4:30 PM: Maintainers Summit
*Room 402, David L. Lawrence Convention Center*\
The [Maintainers Summit](https://us.pycon.org/2024/events/maintainers-summit/), organized by [Inessa Pawson](https://github.com/InessaPawson), [Chris Rose](https://github.com/offbyone), [Kara Sowles](https://github.com/karasowles), and [Leah Wasser](https://github.com/lwasser), is where the Python community comes together to discuss and foster best practices on how to develop sustainable projects and nurture thriving communities. Check out the video below about what to expect at this year's Maintainers Summit produced by PyCon US 2024 Conference Chair [Mariatta Wijaya](https://github.com/readme/stories/mariatta-wijaya):

<a href="https://www.youtube.com/watch?v=L-Ok_89QJOM" target="_blank">
 <img src="/images/newsletter/04-2024-newsletter/ms-pycon-2024.png" alt="Watch the video" width="720" height="540" border="10" />
</a>

### <i class="fa-solid fa-comment"></i> 11:45--12:15 PM: Making Beautiful, Publication Quality Tables in Python is Possible in 2024
*Ballroom BC*\
**[Rich Iannone](https://github.com/rich-iannone) & [Michael Chow](https://github.com/machow)**\
We couldn't agree more with Rich and Michael when they say that "The display of tables can be beautiful. Tables can convey information effectively, just as plots do and, sometimes, it’s the better way to present data. Truly, the time has come to bridge the divide between raw DataFrame output and wondrously-structured tables suitable for publication." In this talk they'll go over which table components make for effective displays of information, and which combinations of Python packages that fit together to make this important task possible.

### <i class="fa-solid fa-comment"></i> 1:45--2:30 PM: Modern binary build systems
*Ballroom A*\
**[Henry Fredrick Schreiner III](https://github.com/henryiii)**\
Henry will be guiding attendees through how easy it is now to set up a binary extension using CMake, Meson, or Maturin (Rust only). It can be done with only three files each containing only a handful of lines of code. Unlike the previous solutions, this covers cross-compilation,multithreaded builds, modern C++ standards, and other features that would each require custom code in a classic setup.py. Combined with cibuildwheel for building wheels and good support from modern binding tools like pybind11 and nanobind, the barrier for entry to reliable compiled extensions has dropped dramatically.

### <i class="fa-solid fa-comment"></i> 2:45--3:15 PM: Hatch: The only tool you need
*Ballroom A*\
**[Ofek Lev](https://github.com/ofek)**\
It's no secret that we're big fans of Hatch---we even [taught a Python Packaging Workshop](https://www.pyopensci.org/blog/pyos-education-announcement.html#enroll-in-pyopenscis-upcoming-workshop-from-python-code-to-module) using [Hatch](https://hatch.pypa.io/latest/)! With an ever-growing set of tools used in Python packaging, Ofek will be presenting on how Hatch can be used as a unifying tool for Python packaging.

## <i class="fa-regular fa-calendar"></i> Saturday, May 18th
### <i class="fa-solid fa-people-group"></i> 9:00--9:25 AM: Diversity & Inclusion Panel
*Expo Hall B*\
Diversity and inclusion is core to the pyOpenSci mission, and we can't wait for this panel. The line-up is incredible, with [Débora Azevedo](https://github.com/deboraazevedo), [Dima Dinama](https://github.com/dmaharika), [Jessica Greene](https://github.com/sleepypioneer), Jules, [Mason Egger](https://github.com/MasonEgger), and [Abigail Dogbe](https://github.com/mesrenyamedogbe) all speaking. We know we'll be walking away from this panel inspired!

### <i class="fa-solid fa-comment"></i> 10:30--11:00 AM: Friends don't let friends package alone
*Hall C*\
**[Leah Wasser](https://github.com/lwasser)**
<figure>
    <a href="/images/python-packages/lion-meme-pyopensci.jpeg">
    <img src="/images/python-packages/lion-meme-pyopensci.jpeg" style="max-width:100%" alt="A puma leaning against a rock and flexing a front arm. Overlaid on the photo in meme text is the phrase 'so you want to talk about Python packaging.'">
    </a>
</figure>
We couldn't talk about PyCon US without talking about our Executive Director and Founder, Leah Wasser, who will be talking all things Python packaging! Python packaging can be a scary and confusing endeavor. The ecosystem can be thorny and filled with many decisions around which tool or approach to use. You’re also likely to get pricked by an approach or tutorial that doesn't work as expected. However, the packaging journey doesn’t have to be prickly - particularly for pure Python packages. By building community consensus around user goals and moderating healthy discussion, pyOpenSci is paving a smooth, thorn-free path for successful packaging.

### <i class="fa-solid fa-users-between-lines"></i> 1:45--5:45 PM: Packaging Summit
*David L. Lawrence Convention Center*\
The goal of the [Packaging Summit](https://us.pycon.org/2024/events/packaging-summit/) is to try to take advantage of the fact that, at PyCon, we can get a high concentration of these stakeholders in one room at the same time. This allows us to sync up on current and future best practices and to quickly come to agreements that would take months or even years over higher-latency media of discussion (e.g. mailing lists, forums, issue tickets).

### <i class="fa-solid fa-comment"></i> 2:30--3:00 PM: NetworkX is Fast Now: Graph Analytics Unleashed
*Hall C*\
**[Mridul Seth](https://github.com/MridulS) & [Erik Welch](https://github.com/eriknw)**\
Have you ever wondered how to find connections in your data and to gain insights from them? Come discover how NetworkX makes this easy (and fast!).

This talk is broadly divided into two parts. First we will talk about the power of graph analytics and how you can use tools like NetworkX to extract information from your data, and then we will talk about how we made the machinery behind NetworkX work with heterogeneous backends like GraphBLAS (CPU optimized) and cuGraph (GPU optimized).

### <i class="fa-solid fa-comment"></i> 2:30--3:00 PM: Eternal sunshine of the spotless development environment
*Room 301--305*\
**[Sarah Kaiser](https://github.com/crazy4pi314)**\
In this talk, Sarah will briefly cover why setting up container infrastructure, which can be useful for isolating your project environments and dig into how you can extend that with Dev Containers to configure a complete development experience using VS Code. She'll also look at two common OSS project situations, onboarding and workshops, to see how workflows for using Dev Containers and other supporting tools make things easier. No container experience required, and while a brief familiarity with VS Code is helpful, it's not necessary.

## <i class="fa-regular fa-calendar"></i> Sunday, May 18th
### <i class="fa-solid fa-users-between-lines"></i> 10:00--3:15 PM: Documentation Summit
The [Documentation Summit](https://us.pycon.org/2024/events/hatchery/docs-summit/) will be a full-day summit including talks and panel sessions inviting leaders in documentation to share their experience in how to make good documentation, discussion about documentation tools such as sphinx, mkdocs, themes etc, what are the common mistakes and how to avoid them.

### <i class="fa-solid fa-key"></i> 3:15--4:00 PM: Keynote
*Expo Hall B*\
**[Sumana Harihareswara](https://github.com/brainwane)**\
[Sumana Harihareswara](https://www.harihareswara.net/) is an open source contributor and leader who has managed work on pip, PyPI, GNOME, MediaWiki, HTTPS Everywhere, autoconf, GNU Mailman, and other projects---and who is working on a book to teach what she's learned along the way. Between 2016 and 2021, Harihareswara led fundraising for and managed the next-generation overhauls of PyPI and of pip's dependency resolver and user experience. Her work has earned her an Open Source Citizen Award and a Google Open Source Peer Bonus.


## <i class="fa-regular fa-paper-plane"></i> Connect with us
### pyOpenSci at PyCon US 2024
While there will be a whole host of pyOpenSci community members at PyCon US this year, be sure to make time to say hello to our Executive Director and Founder, Leah Wasser. Not only would she love to chat with you about Python, open source, and open science, she's got a whole new set of stickers (including holographic stickers!) to give away. And for those lucky few, she's also got a limited edition run of postcards to hand out!

And we'd love to hear about your PyCon experience! Be sure to tag us on [LinkedIn](https://www.linkedin.com/company/pyopensci) and/or [Fosstodon](https://fosstodon.org/@pyOpenSci)!

### pyOpenSci around the web
Stay up-to-date with all things pyOpenSci by following us on [LinkedIn](https://www.linkedin.com/company/pyopensci) and [Fosstodon](https://fosstodon.org/@pyOpenSci), and you can connect with the broader pyOpenSci community on our [Discourse forum](https://pyopensci.discourse.group/). And if you’re interested in our weekly newsletter where we share news, blog posts, and monthly updates, [subscribe on LinkedIn](https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7179551305344933888). We also send out a monthly recap newsletter to [our mailing list](https://eepurl.com/iM7SOM)!
