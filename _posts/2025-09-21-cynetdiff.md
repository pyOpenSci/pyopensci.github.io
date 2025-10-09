---
layout: single
title: "CyNetDiff: A Python Library for Accelerated Implementation of Network Diffusion Models"
excerpt: CyNetDiff is a new Python package for accelerating network diffusion simulations, recently accepted into the pyOpenSci ecosystem.
author: Eliot W. Robson
permalink: /blog/cynetdiff
header:
  overlay_image: images/headers/pyopensci-floral.png
categories:
  - blog-post
  - cynetdiff
  - network-diffusion
  - pyos-accepted
classes: wide
comments: true
last_modified: 2025-09-15
---

In recent years, network diffusion models, which are used to study how information and epidemics spread over social networks, have garnered increasing interest. Two of the most widely used models are the **independent cascade (IC)** and **linear threshold (LT) models**. These models simulate spread through a network by starting with a set of seed nodes that are
designated as "active", and all other nodes are "inactive". Then, in each iteration, some inactive nodes become active,
and the iterations continue until no other nodes can be activated.

Many tasks related to these models, particularly influence maximization, require a significant number of simulations on large graphs, which can be computationally expensive. There has been significant prior work on
reducing the number of simulations needed for these tasks, demonstrating the importance of an efficient implementation.

While researchers often prefer high-level languages like Python for their flexibility and quick development, these computationally intensive tasks are better suited for low-level, compiled languages. To bridge this gap, we've developed **CyNetDiff**, a Python library that uses components written in Cython to provide the performance of a compiled language with the flexibility of a high-level language.

---

## Package Features

The performance-critical parts of CyNetDiff are written in **Cython**, a language extension that compiles to C++ while remaining callable from Python. To take advantage of Cython's speed, the library uses the **compressed sparse row (CSR) format** in an array-based representation. This data structure has low memory overhead and allows for efficient, repeated traversals, making it ideal for simulations of the diffusion processes.

The implementation also uses a **BFS-based traversal algorithm** that only explores the out-neighbors of nodes that were activated in the previous iteration. This means the work done is proportional to the number of edges connected to activated nodes, which can be much smaller than the size of the entire graph, especially when there are few seed nodes.

The package also includes utility functions to easily convert well-established NetworkX graphs into the CSR format, allowing for seamless integration into existing research pipelines.

---

## Development

The development and review process for CyNetDiff was long, partly due to the complex packaging requirements for Cython.
After trying many different tools, we eventually settled on PDM and Meson as the packaging tools for this project.
Our greatest difficulty in converting from prior tools was reasoning through the configuration files necessary
for building and releasing our package. For this task, Google Gemini was an invaluable tool that made packaging with
Meson understandable for our project, even with a long configuration file.

TODO mention the new AI policy

---

## Citing

This post is adapted from our [VLDB paper](https://dl.acm.org/doi/abs/10.14778/3685800.3685887), which
should be used for citations.
