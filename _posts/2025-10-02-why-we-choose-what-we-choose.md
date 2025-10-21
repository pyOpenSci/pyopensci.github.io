---
layout: single
title: "Why We Choose What We Choose"
excerpt: "In selecting one workflow to package a Python project, pyOpenSci chooses between a lot of code tools. These choices often come after months of exploration and debate. Find out what motivates us to make the decisions that we do."
author: "Jeremiah Paige"
permalink: /blog/pyopensci-why-we-choose.html
categories:
  - blog-post
  - community
classes: wide
toc: true
comments: true
last_modified: 2025-10-02
---

A primary focus at pyOpenSci, one of our petals of support, is selecting packaging tools that work well for our users and work well together. We use our curated selection of tooling in our packaging guide, in our online tutorials, and in our trainings. We don’t require the use of any of our selected tools to submit a package to our peer review program but we will suggest them if the package authors ask for help trying to clean up or adopt new workflows.

The members of pyOpenSci spend a great deal of time selecting these tools, debating tradeoffs, test-driving them in new situations, looking at new community trends, and listening to feedback from events we run. But up until now we haven't typically posted in the open either how or why we have come to the decisions we did. This post outlines, in not very strict terms, the rubric we use when selecting a project that we want to recommend. We focus on a beginner-leaning happy path for packaging workflows. In other words, what works really well for new projects that don't have a lot, if any, non-conventional requirements to share their code.

Our rubric comes from five categories, approximately ordered as follows:

## Tools that are free and open

We love open software! It's even in our name. We are always looking to nurture and support open source software, even beyond packaging projects. It should come as no surprise, then, that we only choose tools in our packaging guide that are themselves open source.

We don’t just appreciate open source, though, we also look for projects that are open contribution – that do most of their maintenance, stewardship, and designing in public. This means there is a public bug tracker where new issues are accepted from anyone, and fixes for those bugs are also accepted from non-maintainers. It may also mean that new feature ideas are accepted from the community, or even given a period of public comment. Contributions from everyone, including members and non-members, should be respected as the exchange of free ideas. Project authors should not seek to take exclusive ownership of the collaborative efforts of the community they are a part of. This means that contributors of any level and for any purpose of the project should be recognized publicly. It also means that the project is not asking for the exclusive rights to those contributors' ideas (through overly restrictive Contributor License Agreements).

Our commitment to open software goes beyond just projects that choose to host their code and bugs in a public manner. We also value Free Software; both as in Beer and as in Freedom. Permissive open source software empowers its users to take control of their tools and fix, extend, secure, and adapt code for the purposes that will best fit their own needs. Choosing projects that do not require a financial exchange in order to be used ensures that we can recommend our choices to anyone no matter their situation or location.

## Tools that are inclusive

Inclusivity is very important to us; it is a critical component of tooling projects we select. Programming, including packaging of that software, is a skill that should be available to everyone.

The tools we advocate for should not seek to limit their use through actions such as: adoption of a restrictive license; poor, missing, obfuscated, or expert-only documentation; charging for use of the tool or any process related to its successful usage; not supporting mainstream operating systems. The projects behind the tools should welcome constructive bug reports from users of all levels, and ideally also welcome contributions from all their users.

There are some signals that we look for to tell if the project is inclusive. We want all of our recommended tools to have a code of conduct for their project. The project should also have a contributors guide that is easy to find. Labeling issues or running sprints aimed at fostering commits from new contributors is also a great indicator.

Projects that manage to attract and maintain a broad base of contributors will be viewed more positively. We value projects that strive to do this not only in code, but also in documentation, engagement with the bug tracker, external write-ups and tutorials, and so forth.

## Tools that implement open standards

It is very important to us that the tools and processes we stand behind support the full set of community standards.

For Python, this typically means conforming to [Python Enhancement Proposals](pep.python.org), but may also involve other standard bodies such as [Scientific Python Ecosystem Coordination](https://scientific-python.org/specs/).

Supporting community standards demonstrates that the project respects the community it is working within and is serious about interoperability with other tools and processes. When done right, these tools empower their users to move this workflow, or any of its inputs or outputs, to another standards-compliant tool or process with little to no friction. It also makes it easier to teach since many of the concepts, as well as in some cases entire parts of project data, are tool-agnostic and can feel "familiar" even to those that have never used the tool before. There is also likely to be more documentation developed through forums, blogs, workshops, and other online platforms, because they apply to more than one tool.

It can be a lot of work for tool maintainers to keep up-to-date with changes in standardization, especially in a large and eclectic community such as Python. While we understand that it can take time to implement new features imposed from outside of a project, we also know that a selectively-implemented standard is often worse than no standard.

## Tools that are well supported

We would like to only recommend projects that we can confidently say are healthy, correct, and here to stay. A well-maintained project is a somewhat subjective metric that is hard to pin down, but whenever possible we would apply our [same standard](https://www.pyopensci.org/software-peer-review/how-to/author-guide.html#does-your-package-meet-packaging-requirements) for Peer Reviews of Scientific Software.

Authors and maintainers should respond to open issues and continue to make fixes to the project. We do not have any expectation or metric of response time, open bug count, time to close commit requests, security artifacts, or any other level of effort requirement; only that the project is alive and healthy to the degree that is appropriate for its function. We also strongly prefer projects that have a team of core maintainers as opposed to an individual maintainer.

## Tools that reduce user choices

Python packaging suffers, perhaps infamously, from [Too Many Options](https://www.pyopensci.org/blog/python-packaging-friends-dont-let-friends-package-alone.html#just-say-no-to-tmo). We would like to make as many pragmatic choices as we can on behalf of the learner. Better yet is to make choices that will eliminate further choices and complexity later on in the process; this can help learners from getting stuck in runaway analysis paralysis.

This means that these tools should implement sensible defaults for any configurable value. Like with Python, they should make the simple easy and the difficult possible.

It also means that we will generally select one tool when two or more could do the same job. So long as the one tool fits our other criteria it doesn't have to "win" at every single task it is capable of doing when compared against a plethora of other tools.
