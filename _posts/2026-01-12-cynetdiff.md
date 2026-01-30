---
layout: single
title: "CyNetDiff: A Python Library for Accelerated Implementation of Network Diffusion Models"
excerpt: "CyNetDiff is a Python package for accelerating network diffusion simulations, recently accepted into the pyOpenSci ecosystem."
author: Eliot W. Robson
permalink: /blog/cynetdiff.html
header:
  overlay_image: images/headers/pyopensci-floral.png
categories:
  - blog-post
  - cynetdiff
  - network-diffusion
  - pyos-accepted
classes: wide
comments: true
last_modified: 2026-01-12
---

Network diffusion models study how information and epidemics spread over social networks, and have garnered increasing interest in recent years. Two of the most widely used models are the **independent cascade (IC)** and **linear threshold (LT) models**. These models simulate spread through a network by starting with a set of seed nodes that are designated as "active", and all other nodes are "inactive". Then, in each iteration, some inactive nodes become active, and the iterations continue until no other nodes can be activated.

Many tasks related to these models, particularly influence maximization, require running simulations on large graphs many times, which can be computationally expensive. There has been significant prior work on reducing the number of simulations needed for these tasks, demonstrating the importance of an efficient implementation.

While researchers often prefer high-level languages like Python for their flexibility and quick development, these computationally intensive tasks are better suited for low-level, compiled languages. To bridge this gap, we've developed **CyNetDiff**, a Python library that uses components written in Cython to provide the performance of a compiled language with the flexibility of a high-level language.

---

## Package Features

The performance-critical parts of CyNetDiff are written in **Cython**, a language extension that compiles to C++ while remaining callable from Python. To take advantage of Cython's speed, the library uses the **compressed sparse row (CSR) format** in an array-based representation. This data structure has low memory overhead and allows for efficient, repeated traversals, making it ideal for diffusion process simulations.

The implementation also uses a **BFS-based traversal algorithm** that only explores the out-neighbors of nodes activated in the previous iteration. This means the work done is proportional to the number of edges connected to activated nodes, which can be much smaller than the size of the entire graph, especially when there are few seed nodes.

The package also includes utility functions to easily convert well-established NetworkX graphs into the CSR format, allowing for seamless integration into existing research pipelines.

---

## Development

The development and review process for CyNetDiff was lengthy, partly due to the complex packaging requirements for Cython. After trying many different tools, we eventually settled on PDM and Meson as the packaging tools for this project. Our greatest difficulty in converting from prior tools was understanding the configuration files necessary for building and releasing our package.

### Use of Generative AI

During development, we used Google Gemini to help interpret and understand Meson's configuration syntax for our project's build system. The AI-generated configuration suggestions were carefully reviewed, tested, and adapted to our specific project needs before implementation. All code was validated through our test suite and the pyOpenSci review process.

pyOpenSci encourages transparency about AI tool use in package development. To learn more about our approach to generative AI in open source software, see our [generative AI peer review policy](/blog/generative-ai-peer-review-policy.html).

---

## Citing

This library is joint work with Dhemath Reddy and [Abhishek K. Umrawal](https://ece.illinois.edu/about/directory/faculty/aumrawal).
This post is adapted from our [VLDB paper](https://dl.acm.org/doi/abs/10.14778/3685800.3685887), which
should be used for citations.
