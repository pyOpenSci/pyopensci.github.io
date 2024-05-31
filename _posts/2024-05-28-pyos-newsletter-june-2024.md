---
layout: single
title: "pyOpenSci Newsletter: June 2024"
excerpt: "We're starting June with a record number of Python package submissions, a call for editors, a PyCon US reflection, and some SciPy meeting news!"
author: "Jesse Mostipak"
permalink: /blog/pyos-newsletter-june-2024.html
header:
  overlay_image: images/blog/2024/may/pyos-june-newsletter.png
  overlay_filter: 0.6
categories:
  - blog-post
  - community
classes: wide
toc: true
comments: true
---
## <i class="fa-regular fa-comments"></i> PyCon was incredible!
We feel so incredibly fortunate to have connected with so many of you at PyCon US! While we're still recovering from a week of summits, talks, and sprints, we wanted to share this sentiment from our Executive Director and Founder, [Leah Wasser](https://github.com/lwasser), which she shared on [her Fosstodon account](https://fosstodon.org/@leahawasser):
<figure>
    <a href="/images/blog/2024/may/leah-pycon.png">
    <img src="/images/blog/2024/may/leah-pycon.png" style="max-width:100%" alt="Screenshot of a Fosstodon post from Leah Wasser, reading: In my first few moments at pycon I ran into some of my conda friends & was quickly reminded of why this conference is so powerful.  Python is more than a programming language. It's a community of people who I can geek out with about the most obscure topics. I belong. People care. They care a lot about their work. They care about helping each other learn.  While this is a tech conference, it's really people that make python the vibrant communty that it is.">
    </a>
</figure>

### pyOpenSci's PyCon US Open Space
This year, pyOpenSci's first Open Space brought together 17 attendees from various organizations, including Anaconda, NVIDIA, CPython, and more. The discussions focused on interoperability, scientific data workflows, and Python packaging for science, emphasizing the need for consistent tools and data formats to reduce cognitive load for scientists. A key topic was the gap between exploratory scripts and fully packaged code, highlighting the need for "in between" options for sharing code and outputs. These insights will guide pyOpenSci's efforts, with more discussions planned for the Fall Festival, scheduled for September 28-29, 2024.

### pyOpenSci's PyCon US Sprint
This year we had a tremendous turnout of over 20 people from several countries for our 1-day pyConUS sprint. At last count this resulted in about [30 issues and pull requests](https://github.com/orgs/pyOpenSci/projects/12/views/1) where volunteers who were there to support scientists, helped us fix issues on our website, in our tutorials and our [packaging](https://www.pyopensci.org/python-package-guide/) and [peer review](https://www.pyopensci.org/software-peer-review/index.html) guidebooks. So many long-standing issues and bugs were fixed thanks to this wonderful Python community.

## <i class="fa-solid fa-handshake-simple"></i> See you at SciPy
[SciPy 2024](https://www.scipy2024.scipy.org/) is just around the corner, and we can't wait to see you there! We're pulling together our pyOpenSci Guide to SciPy, similar to the guide we did for [PyCon 2024](https://www.pyopensci.org/blog/pyos-guide-to-pyconus-2024.html), and wanted to give you a preview of some of the tutorials and talks being given by pyOpenSci Community members!

### Tutorials
#### [Interactive data visualizations with Bokeh (in 2024)](https://cfp.scipy.org/2024/talk/JRLMLD/)
Along with [Timo Metzger](https://cfp.scipy.org/2024/speaker/HMRG3H/) and [Bryan Van de Ven](https://cfp.scipy.org/2024/speaker/BBLFMK/), pyOpenSci community member [Pavithra Eswaramoorthy]() will be covering everything you need to know to create beautiful and powerful interactive plots from scratch using Bokeh’s latest features. Starting with a quick introduction of Bokeh’s core concepts, the team will cover creating and customizing simple static plots like line and bar charts before introducing layers of interactivity, creating specialized plotting features like geographic maps, contour plots, Mathematical Text, and discussing new additions to Bokeh like ImageStacks. By the end, you will be able to create a complete interactive dashboard using Bokeh.

#### [3D Visualization with PyVista](https://cfp.scipy.org/2024/talk/GKGRWE/)
Led by [Tetsuo Koyama](https://cfp.scipy.org/2024/speaker/WY7NA9/), [Alexander Kaszynski](https://cfp.scipy.org/2024/speaker/3RXHG8/), [Bill Little](https://cfp.scipy.org/2024/speaker/FDVWDN/), and [Bane Sullivan](https://cfp.scipy.org/2024/speaker/NEC33M/), this tutorial demonstrates [PyVista's](https://github.com/pyvista/pyvista) latest capabilities and bring a wide range of users to the forefront of 3D visualization in Python, including:

* Use PyVista to create 3D visualizations from a variety of datasets in common formats.
* Overview the classes and data structures of PyVista with real-world examples.
* Be familiar of the various filters and features of PyVista.
* Know which Python libraries are used and can be used by PyVista (meshio, trimesh etc).
* We see this tutorial catering to anyone who wants to visualize data in any domain, and this ranges from basic Python users to advanced power users.

#### [From RAGS to riches: Build an AI document inquiry web-app](https://cfp.scipy.org/2024/talk/W3ZJWG/)
[Pavithra Eswaramoorthy](https://cfp.scipy.org/2024/speaker/QGMGFB/), a Developer Advocate at [Quansight](https://quansight.com/), is teaming up with [Dharhas Pothina](https://cfp.scipy.org/2024/speaker/EKHUEY/) and [Andrew Huang](https://cfp.scipy.org/2024/speaker/QSLXKW/) to cover how to use RAG to build document-inquiry chat systems using different commercial and locally running LLMs. The topics we’ll cover include:

* **Introduction to RAG**, how it works and interacts with LLMs, and Ragna - a framework for RAG orchestration
* **Creating and optimizing a basic chat function** that uses popular LLMs (like GPT) answers questions about your documents, using a Python API in Jupyter Notebooks
* **Running a local LLM on GPUs** on the provided platform, and comparing its performance to commercial LLMs
* **Introduction to Panel**, by creating a basic chat UI for Ragna using Panel’s ChatBox widget
* **Building and deploying a Panel-based web-app**, which extends the basic chat UI and includes more application components

By the end of this tutorial, you will have an understanding of the fundamental components that form a RAG model, and practical knowledge of open source tools that can help you or your organization explore and build on your own applications. This tutorial is designed to enable enthusiasts in our community to explore an interesting topic using some beginner-friendly Python libraries.

#### [Create Your First Python Package: Make Your Python Code Easier to Share and Use](https://cfp.scipy.org/2024/talk/QT9GBY/)
Led by pyOpenSci's Executive Director and Founder, [Leah Wasser](https://github.com/lwasser), in this tutorial session you'll learn how to:

* Create code that can be installed into different environments
* Use [Hatch](https://hatch.pypa.io/latest/) as a workflow tool, making setup and installation of your code easier
* Use Hatch to publish your package to (test) PyPI

Creating code that can be shared and reused is the gold-standard of open science. But tools and skills to share your code can be tricky to learn. In this hands-on tutorial, you’ll learn how to turn your code into an installable Python module ( a file containing Python code that defines functions, classes, and variables), that can be shared with others. We will provide pre-built code and module examples for each step of the tutorial to make it more beginner-friendly. However, to get the most out of this tutorial, you should be familiar with writing Python code, writing and using functions and you should understand the concept of Python environments. You should also have Python and Hatch installed on your computer prior to attending. If you are newer to environments and don’t have a preferred tool, then we recommend that you use conda. However, any environment tool that you prefer works well.

Interested in helping out with our Packaging workshop? Reach out to us at [media@pyopensci.org](mailto:media@pyopensci.org). We're looking for volunteers to assist learners throughout the workshop.
{: .notice}

#### [Data of an Unusual Size (2024 edition): A practical guide to analysis and interactive visualization of massive datasets](https://cfp.scipy.org/2024/talk/UKLNLQ/)
[Pavithra Eswaramoorthy](https://cfp.scipy.org/2024/speaker/QGMGFB/), and [Dharhas Pothina](https://cfp.scipy.org/2024/speaker/EKHUEY/), both from [Quansight](https://quansight.com/), will help you learn the fundamentals of analyzing massive datasets with real-world examples on actual powerful machines on a public cloud provided by the presenters – starting from how the data is stored and read, to how it is processed and visualized.

### Talks
#### [The power of community in solving scientific Python’s most challenging problems](https://cfp.scipy.org/2024/talk/AMTLJ7/)
This talk from our Executive Director and Founder, [Leah Wasser](https://github.com/lwasser), shares pyOpenSci’s knowledge in building a constructive open peer review process that supports maintainers, and also resources that make Python packaging more accessible and easier-to-navigate. Our insights are based on five years of experience working with over 200 community members, who have evaluated 58 packages developed by over 56 package maintainers.

Leah's talk is about writing the [pyOpenSci Python Packaging Guide](https://www.pyopensci.org/python-package-guide/) via community!
{: .notice}

#### [Great Tables for Everyone](https://cfp.scipy.org/2024/talk/BRMQRW/)
This talk from [Rich Iannone](https://cfp.scipy.org/2024/speaker/NJCPZ7/), whose package [Great Tables](https://github.com/pyOpenSci/software-submission/issues/184) is currently under review with pyOpenSci, will provide a demonstration of Great Tables, showing how data can come alive in when in tabular form. We’ll use data from the fields of meteorology, chemistry, and the atmospheric sciences within our table-making examples. We’ll learn how the different components of a table (e.g., the column labels, the header, etc.) can be manipulated to best convey the data. We believe tables are worthy of being deemed data visualizations and we hope that Great Tables can become an indispensable tool in your data analysis workflow.

#### [From Code to Clarity: Using Quarto for Python Documentation](https://cfp.scipy.org/2024/talk/GFGSTS/)
[Isabel Zimmerman](https://cfp.scipy.org/2024/speaker/AVSVUJ/), a member of our triage team and an Emeritus Editor in Chief, will be speaking from her experiences as an open source developer who works with multilingual tools, and how Quarto + quartodoc helped to fill those gaps. This talk is intended for anyone who might have to communicate with stakeholders through code using a web-based format. She'll be focusing on Python package documentation websites, but the stories and examples expose the difficulties in many types of technical communication. The intent is to have a lighthearted talk filled with examples of how to make technical communication and publishing easier and more accessible.

#### [Vector space embeddings and data maps for cyber defense](https://cfp.scipy.org/2024/talk/STUXTH/)
pyOpenSci community member [Benoit Hamelin](https://cfp.scipy.org/2024/speaker/SAQUZD/) will cover how the vast amounts of information of interest to cyber defense organizations comes in the form of unstructured data; from host-based telemetry and malware binaries, to phishing emails and network packet sequences. All of this data is extremely challenging to analyze. In recent years there have been huge advances in the methodology for converting unstructured media into vectors. However, leveraging such techniques for cyber defense data remains a challenge.

Imposing structure on unstructured data allows us to leverage powerful data science and machine learning tools. Structure can be imposed in multiple ways, but vector space representations, with a meaningful distance measure, have proven to be one of the most fruitful.

In this talk, he will demonstrate a number of techniques for embedding cyber defense data into vector spaces, as well as discuss how to leverage manifold learning techniques, clustering, and interactive data visualization to broaden our understanding of the data and enrich it with expert feedback.

### Sprints
We'll also be holding a pyOpenSci sprint at SciPy 2024! Be sure to follow us on [LinkedIn](https://www.linkedin.com/company/pyopensci) and [Fosstodon](https://fosstodon.org/@pyOpenSci) for more details!

## <i class="fa-solid fa-envelope-open"></i> Save the Date: pyOpenSci's Open Source Fall Festival
<figure>
    <a href="/images/blog/2024/may/oss-fall-festival.png">
    <img src="/images/blog/2024/may/oss-fall-festival.png" style="max-width:100%" alt="Abstract shapes on a white background with the text: Save the Date. pyOpenSci Open Source Fall Festival. September 28 & 29, 2024. Entirely online! Follow us on socials for more info. fosstodon.org/@pyOpenSci linkedin.com/company/pyopensci pyopensci.org.">
    </a>
</figure>
We love a good get-together, and our Open Source Fall Festival is no exception! Held entirely online using [Gather](https://www.gather.town/), our goals is to bring together members of the Python community that create open source tools with the members of the Python community who use the tools. In building this festival, our focus is on a grassroots, community-led event with some big unconference vibes. So mark your calendars, and save the date for September 28--29th, 2024!

## <i class="fa-solid fa-hand-holding-heart"></i> Python packages for everyone!
pyOpenSci's [Open Peer Review process](https://www.pyopensci.org/about-peer-review/index.html) is experiencing an [unprecedented number of Python package submissions](https://github.com/pyOpenSci/software-submission/issues)! We're excited to see so many wonderful packages that are helping scientists help make the world a better place being submitted for review. Our open peer review process facilitates scientists getting credit and recognition for the work they’ve invested in developing scientific Python tools while also supporting them in building better software. The peer review process also supports scientists in finding vetted and maintained software, which drives their open science workflows.

You can submit your package for review (or pre-submission inquiry to determine if it's in scope) by [submitting an issue](https://github.com/pyOpenSci/software-submission/issues/new/choose) to [our software-submission repository](https://github.com/pyOpenSci/software-submission). And because all of our reviews are open, [you can see our review process in action](https://github.com/pyOpenSci/software-submission).

We're also accepting applications for [package reviewers](https://docs.google.com/forms/d/e/1FAIpQLSeVf-L_1-jYeO84OvEE8UemEoCmIiD5ddP_aO8S90vb7srADQ/viewform). We welcome reviewers from a diversity of background and with varying levels of Python technical expertise.

Some of the basic things that we look for in a review include:
* Familiarity with using the Python programming language.
* Ability to evaluate a Python package for usability and documentation quality.
* Ability to provide a technical review of Python package structure and code quality / approach to solving the problems that the package seeks to address.

We like to have a mix of technical and usability focus in our reviews so it’s ok if you don’t have all of the above skills! Not sure if you're ready to review on your own? Check out the [pyOpenSci mentorship program](https://www.pyopensci.org/software-peer-review/how-to/reviewer-guide.html#a-guide-for-new-reviewers)!

## <i class="fa-solid fa-bullhorn"></i> Get involved with pyOpenSci: call for editors
<figure>
    <a href="/images/blog/2024/may/pyos-call-for-editors.png">
    <img src="/images/blog/2024/may/pyos-call-for-editors.png" style="max-width:100%" alt="Off-white square on a purple floral background with text that reads: Get involved with pyOpenSci! We're growing out editorial team, and are seeking volunteers from a wide variety of scientific backgrounds. Editors: lead the review process for 3-4 packages a year and assist with editorial and peer review policies. People from diverse backgrounds are especially encouraged to apply! Questions? Email media@pyopensci.org. Apply: bit.ly/pyOSEditor">
    </a>
</figure>

If you're looking to give back to the broader Python community, consider joining our Editorial Board! The pyOpenSci Editorial Board is comprised of a diverse group of volunteer editors, each one responsible for the following tasks:

* Finding reviewers from diverse backgrounds who have a mixture of scientific domain and Python experience.
* Overseeing the entire review process for a package ensuring it runs in a timely and efficient manner.
* Supporting the submitting authors and reviewers in answering questions related to the review.
* Determining whether that package should be accepted into the pyOpenSci ecosystem once the review has wrapped up.

While we have a current need for editors with expertise in climatology and/or energy, we're also recruiting editors from all scientific disciplines. If you feel you'd be a good fit for the pyOpenSci Editorial Board, please fill out [this form](https://docs.google.com/forms/d/e/1FAIpQLScRQHQ7NKVEAG3BKAphiUdVFvQ5nkez0IpyXBMZDzXjuBPloQ/viewform).

If you're interested in joining our Editorial Board, but have questions or would like to chat with someone from pyOpenSci about volunteering to be an editor, please email us at [media@pyopensci.org](mailto:media@pyopensci.org).

## <i class="fa-brands fa-python"></i> Upcoming Python events for scientists
### SciPy
With keynotes from [Julia Silge](https://juliasilge.com/), [Dr. Elizabeth (Libby) Barnes](https://sites.google.com/view/barnesgroup-csu/prof-barnes), and [Kyle Cranmer](https://www.physics.wisc.edu/directory/cranmer-kyle/), [SciPy 2024](https://www.scipy2024.scipy.org/) is going to be yet another conference you don't want to miss! Held at the Tacoma Convention Center, July 8-14, 2024, [tickets are still available](https://ti.to/scipy/scipy2024)!

### PyData Eindhoven
With 14 captivating talks lined up, [PyData Eindhoven](https://pydata.org/eindhoven2024/)  offers a diverse range of topics to expand your knowledge and inspire innovative thinking. From cutting-edge data analysis techniques to machine learning applications, our expert speakers will cover it all. Co-hosted with Day 2 of [JuliaCon](https://juliacon.org/2024/), [grab your tickets](https://pydata.org/eindhoven2024/tickets) and join your peers in the Netherlands this July 11th!

### BioC 2024
Taking place Wednesday July 24 - Friday July 26 at the Van Andel Institute in Grand Rapids, MI,the [BioC 2024: Where Software and Biology Connect](https://www.bioc2024.bioconductor.org/) hybrid conference still has [tickets available](https://www.bioc2024.bioconductor.org/registration). And what's more, all proceeds go to helping underrepresented minorities and individuals from low to middle-income countries, including students, fellows, and early career investigators.

### PyData Vermont
[PyData Vermont 2024](https://pydata.org/vermont2024/) is a two day in-person event for the international community of data scientists, data engineers, and developers of data analysis tools to share ideas and learn from each other. The event will be in-person at the Main Street Landing Performing Arts Center, July 29 to July 30, 2024. [Register today](https://pydata.org/vermont2024/tickets)!

### Tell us about your event!
Have an upcoming scientific Python event that’s open to the public? Email us at [media@pyopensci.org](mailto:media@pyopensci.org) with the details to have your event listed.

## <i class="fa-regular fa-paper-plane"></i> Connect with us
Stay up-to-date with all things pyOpenSci by following us on [LinkedIn](https://www.linkedin.com/company/pyopensci) and [Fosstodon](https://fosstodon.org/@pyOpenSci), and you can connect with the broader pyOpenSci community on our [Discourse forum](https://pyopensci.discourse.group/). And if you’re interested in our weekly newsletter where we share news, blog posts, and monthly updates, [subscribe on LinkedIn](https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7179551305344933888). We also send out a monthly recap newsletter to [our mailing list](https://eepurl.com/iM7SOM)!
