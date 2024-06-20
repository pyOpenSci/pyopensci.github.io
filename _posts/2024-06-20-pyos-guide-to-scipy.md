---
layout: single
title: "pyOpenSci's Guide to SciPy"
excerpt: "We've got another incredible conference on the horizon, and wanted to share the talks, workshops, and sprints where you can find members of the pyOpenSci community!"
author: "Jesse Mostipak"
permalink: /blog/pyos-guide-to-scipy.html
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
## <i class="fa-regular fa-handshake"></i> See you at SciPy!

[SciPy 2024](https://www.scipy2024.scipy.org/) is just around the corner, and we can’t wait to see you there! We’re pulling together our pyOpenSci Guide to SciPy, similar to the guide we did for [PyCon 2024](https://www.pyopensci.org/blog/pyos-guide-to-pyconus-2024.html), and wanted to give you a preview of some of the tutorials and talks being given by pyOpenSci Community members!

## <i class="fa-solid fa-chalkboard-user"></i> Tutorials

### [Interactive data visualizations with Bokeh (in 2024)](https://cfp.scipy.org/2024/talk/JRLMLD/)
Along with [Timo Metzger](https://cfp.scipy.org/2024/speaker/HMRG3H/) and [Bryan Van de Ven](https://cfp.scipy.org/2024/speaker/BBLFMK/), pyOpenSci community member [Pavithra Eswaramoorthy](https://www.linkedin.com/in/pavithraes/) will be covering everything you need to know to create beautiful and powerful interactive plots from scratch using Bokeh’s latest features. Starting with a quick introduction of Bokeh’s core concepts, the team will cover creating and customizing simple static plots like line and bar charts before introducing layers of interactivity, creating specialized plotting features like geographic maps, contour plots, Mathematical Text, and discussing new additions to Bokeh like ImageStacks. By the end, you will be able to create a complete interactive dashboard using Bokeh.

### [3D Visualization with PyVista](https://cfp.scipy.org/2024/talk/GKGRWE/)
Led by [Tetsuo Koyama](https://cfp.scipy.org/2024/speaker/WY7NA9/), [Alexander Kaszynski](https://cfp.scipy.org/2024/speaker/3RXHG8/), [Bill Little](https://cfp.scipy.org/2024/speaker/FDVWDN/), and [Bane Sullivan](https://www.linkedin.com/in/bane-sullivan/), this tutorial demonstrates [PyVista’s](https://github.com/pyvista/pyvista) latest capabilities and bring a wide range of users to the forefront of 3D visualization in Python, including:
* Use PyVista to create 3D visualizations from a variety of datasets in common formats.
* Overview the classes and data structures of PyVista with real-world examples.
* Be familiar of the various filters and features of PyVista.
* Know which Python libraries are used and can be used by PyVista (meshio, trimesh etc).
* We see this tutorial catering to anyone who wants to visualize data in any domain, and this ranges from basic Python users to advanced power users.

### [From RAGS to riches: Build an AI document inquiry web-app](https://cfp.scipy.org/2024/talk/W3ZJWG/)
[Pavithra Eswaramoorthy](https://cfp.scipy.org/2024/speaker/QGMGFB/), a Developer Advocate at [Quansight](https://quansight.com/), is teaming up with [Dharhas Pothina](https://cfp.scipy.org/2024/speaker/EKHUEY/) and [Andrew Huang](https://cfp.scipy.org/2024/speaker/QSLXKW/) to cover how to use RAG to build document-inquiry chat systems using different commercial and locally running LLMs. The topics we’ll cover include:
* **Introduction to RAG**, how it works and interacts with LLMs, and Ragna - a framework for RAG orchestration
* **Creating and optimizing a basic chat function** that uses popular LLMs (like GPT) answers questions about your documents, using a Python API in Jupyter Notebooks
* **Running a local LLM on GPUs** on the provided platform, and comparing its performance to commercial LLMs
* **Introduction to Panel**, by creating a basic chat UI for Ragna using Panel’s ChatBox widget
* **Building and deploying a Panel-based web-app**, which extends the basic chat UI and includes more application components

By the end of this tutorial, you will have an understanding of the fundamental components that form a RAG model, and practical knowledge of open source tools that can help you or your organization explore and build on your own applications. This tutorial is designed to enable enthusiasts in our community to explore an interesting topic using some beginner-friendly Python libraries.

By the end of this tutorial, you will have an understanding of the fundamental components that form a RAG model, and practical knowledge of open source tools that can help you or your organization explore and build on your own applications. This tutorial is designed to enable enthusiasts in our community to explore an interesting topic using some beginner-friendly Python libraries.

### [Create Your First Python Package: Make Your Python Code Easier to Share and Use](https://cfp.scipy.org/2024/talk/QT9GBY/)
Led by pyOpenSci’s Executive Director and Founder, [Leah Wasser](https://github.com/lwasser), in this tutorial session you’ll learn how to:
* Create code that can be installed into different environments
* Use [Hatch](https://hatch.pypa.io/latest/) as a workflow tool, making setup and installation of your code easier
* Use Hatch to publish your package to (test) PyPI

Creating code that can be shared and reused is the gold-standard of open science. But tools and skills to share your code can be tricky to learn. In this hands-on tutorial, you’ll learn how to turn your code into an installable Python module ( a file containing Python code that defines functions, classes, and variables), that can be shared with others. We will provide pre-built code and module examples for each step of the tutorial to make it more beginner-friendly. However, to get the most out of this tutorial, you should be familiar with writing Python code, writing and using functions and you should understand the concept of Python environments. You should also have Python and Hatch installed on your computer prior to attending. If you are newer to environments and don’t have a preferred tool, then we recommend that you use conda. However, any environment tool that you prefer works well.

> Interested in helping out with our Packaging workshop? Reach out to us at [media@pyopensci.org](mailto:media@pyopensci.org). We’re looking for volunteers to assist learners throughout the workshop.

### [Data of an Unusual Size (2024 edition): A practical guide to analysis and interactive visualization of massive datasets](https://cfp.scipy.org/2024/talk/UKLNLQ/)

[Pavithra Eswaramoorthy](https://cfp.scipy.org/2024/speaker/QGMGFB/) and [Dharhas Pothina](https://cfp.scipy.org/2024/speaker/EKHUEY/), both from [Quansight](https://quansight.com/), will help you learn the fundamentals of analyzing massive datasets with real-world examples on actual powerful machines on a public cloud provided by the presenters – starting from how the data is stored and read, to how it is processed and visualized.

## <i class="fa-regular fa-comments"></i> Talks

### [The power of community in solving scientific Python’s most challenging problems](https://cfp.scipy.org/2024/talk/AMTLJ7/)
This talk from our Executive Director and Founder, [Leah Wasser](https://github.com/lwasser), shares pyOpenSci’s knowledge in building a constructive open peer review process that supports maintainers, and also resources that make Python packaging more accessible and easier-to-navigate. Our insights are based on five years of experience working with over 200 community members, who have evaluated 58 packages developed by over 56 package maintainers.

> Leah’s talk is about writing the [pyOpenSci Python Packaging Guide](https://www.pyopensci.org/python-package-guide/) via community!

### [Great Tables for Everyone](https://cfp.scipy.org/2024/talk/BRMQRW/)
This talk from [Richard Iannone](https://www.linkedin.com/in/richard-iannone-a5640017/), whose package [Great Tables](https://posit-dev.github.io/great-tables/articles/intro.html) is currently [under review with pyOpenSci](https://github.com/pyOpenSci/software-submission/issues/202), will provide a demonstration of Great Tables, showing how data can come alive in when in tabular form. We’ll use data from the fields of meteorology, chemistry, and the atmospheric sciences within our table-making examples. We’ll learn how the different components of a table (e.g., the column labels, the header, etc.) can be manipulated to best convey the data. We believe tables are worthy of being deemed data visualizations and we hope that Great Tables can become an indispensable tool in your data analysis workflow.

### [From Code to Clarity: Using Quarto for Python Documentation](https://cfp.scipy.org/2024/talk/GFGSTS/)
[Isabel Zimmerman](https://www.linkedin.com/in/isabel-zimmerman/), a member of our triage team and an Emeritus Editor in Chief, will be speaking from her experiences as an open source developer who works with multilingual tools, and how Quarto + quartodoc helped to fill those gaps. This talk is intended for anyone who might have to communicate with stakeholders through code using a web-based format. She’ll be focusing on Python package documentation websites, but the stories and examples expose the difficulties in many types of technical communication. The intent is to have a lighthearted talk filled with examples of how to make technical communication and publishing easier and more accessible.

### [Vector space embeddings and data maps for cyber defense](https://cfp.scipy.org/2024/talk/STUXTH/)
pyOpenSci community member [Benoit Hamelin](https://www.linkedin.com/in/benoit-hamelin-43a44668/) will cover how the vast amounts of information of interest to cyber defense organizations comes in the form of unstructured data; from host-based telemetry and malware binaries, to phishing emails and network packet sequences. All of this data is extremely challenging to analyze. In recent years there have been huge advances in the methodology for converting unstructured media into vectors. However, leveraging such techniques for cyber defense data remains a challenge.
Imposing structure on unstructured data allows us to leverage powerful data science and machine learning tools. Structure can be imposed in multiple ways, but vector space representations, with a meaningful distance measure, have proven to be one of the most fruitful.
In this talk, he will demonstrate a number of techniques for embedding cyber defense data into vector spaces, as well as discuss how to leverage manifold learning techniques, clustering, and interactive data visualization to broaden our understanding of the data and enrich it with expert feedback.

## <i class="fa-solid fa-person-running"></i> Sprints
We’ll also be holding a pyOpenSci sprint at SciPy 2024! Be sure to follow us on [LinkedIn](https://www.linkedin.com/company/pyopensci) and [Fosstodon](https://fosstodon.org/@pyOpenSci) for more details!

## <i class="fa-solid fa-link"></i> Connect with pyOpenSci

Stay up-to-date with all things pyOpenSci by following us on [LinkedIn](https://linkedin.com/company/pyopensci
) and [Fosstodon](https://fosstodon.org/@pyOpenSci), and connect with the broader pyOpenSci community on our [Discourse forum](https://pyopensci.discourse.group/). If you’re interested in our weekly newsletter where we share news, blog posts, and monthly updates, [subscribe on LinkedIn](https://www.bit.ly/pyOSNewsletter).