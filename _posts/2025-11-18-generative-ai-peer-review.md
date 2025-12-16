---
layout: single
title: "Navigating LLMs in Open Source: pyOpenSci's New Peer Review Policy"
excerpt: "Generative AI products are reducing the effort and skill necessary to generate large amounts of code. In some cases, this strains volunteer peer review programs like ours. Learn about pyOpenSci's approach to developing a Generative AI policy for our software peer review program."
author: "pyopensci"
permalink: /blog/generative-ai-peer-review-policy.html
header:
  overlay_image: images/headers/pyopensci-floral.png
categories:
  - blog-post
  - community
classes: wide
toc: true
comments: true
last_modified: 2025-12-16
---

authors: Leah Wasser, Jed Brown, Carter Rhea, Ellie Abrahams, Carol Willing, Stefan van der Walt, Eliot Robson

## Generative AI meets scientific open source

Some developers believe that using Generative AI products increases
efficiency. However, in scientific open source, speed isn't
everything—transparency, quality, and community trust are just as
important as understanding the environmental impacts of using large
language models in our everyday work. Similarly, ethical questions
arise when tools may benefit some communities while harming others.

## Why we need guidelines

At pyOpenSci, [we’ve drafted a new policy](https://github.com/pyOpenSci/software-peer-review/pull/344) for our peer review process to set clear expectations for disclosing the use of LLMs in scientific open-source software.

Our goal is transparency and fostering reproducible research. For scientific rigor, we want maintainers to **disclose when and how they’ve used LLMs** so editors and reviewers can fairly and efficiently evaluate submissions. Further, we want to avoid burdening our volunteer editorial and reviewer team with being the initial reviewers of generated code.

This is the beginning of our work to ensure that Gen AI tools are not
creating undue burden on our volunteer software review team. Humans
cannot perform in depth reviews at the rate at which these tools can
create large volumes of code.

## A complex topic: benefits and concerns

LLMs are perceived as helping developers:

* Explain complex codebases
* Generate unit tests and docstrings
* Simplify language barriers for participants in open source around
  the world
* Speed up everyday workflows

Some contributors perceive these products as making open source more
accessible. And for some, maybe they do. However, LLMs also present
unprecedented social and environmental challenges that we have to
critically evaluate.

### Incorrectness of LLMs and misleading time benefits

Although it is commonly stated that LLMs help improve the productivity
of high-level developers, recent scientific explorations of this
hypothesis [indicate the
contrary](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/).
What's more is that the responses of LLMs for complex coding tasks
[tend to be
incorrect](https://arxiv.org/html/2407.06153v1) and/or overly
verbose/inefficient. It is crucial that, if you use an LLM to help
produce code, you should independently evaluate code correctness and
efficiency.

### Environmental impacts

Training and running LLMs [requires massive energy
consumption](https://www.unep.org/news-and-stories/story/ai-has-environmental-problem-heres-what-world-can-do-about),
raising sustainability concerns that sit uncomfortably alongside much
of the global-scale scientific research that our community supports.

### Impact on learning

Heavy reliance on LLMs risks producing developers who can prompt, but
not debug, maintain, or secure production code. This risk undermines
long-term project sustainability and growth. In the long run, it will
make it [harder for young developers to learn how to code and
troubleshoot
independently](https://knowledge.wharton.upenn.edu/article/without-guardrails-generative-ai-can-harm-education/).

> We’re really worried that if humans don’t learn, if they start using these tools as a crutch and rely on it, then they won’t actually build those fundamental skills to be able to use these tools effectively in the future. _Hamsa Bastani_

### Ethics and inclusion

LLM outputs can reflect and amplify bias in training data. In
documentation and tutorials, that bias can harm the very communities
we want to support.

## Our approach: transparency and disclosure

We acknowledge that social and ethical norms, as well as concerns
about environmental and societal impacts, vary widely across the
community. We are not here to judge anyone who uses or doesn't use
LLMs. Our focus centers on supporting informed decision-making and
consent regarding LLM use in the pyOpenSci software submission,
review, and editorial process.

Our community’s expectation for maintainers submitting a package is simple: **be open and disclose any Generative AI use in your package** when you submit it to our open software review process.

* Disclose LLM use in your README and at the top of relevant modules.
* Describe how the Generative AI tools were used in your package's development.
* Be clear about what human review you performed on Generative AI
  outputs before submitting the package to our open peer review
  process.

Transparency helps reviewers understand context, trace decisions, and
focus their time where it matters most. We do not want the burden of
reviewing code generated from a model, placed on a volunteer. That
effort belongs to the maintainer who ran the model that generated that
code.

### Human oversight

LLM-assisted code must be **reviewed, edited, and tested by humans**
before submission.

* Run your tests and confirm the correctness of the code that you submitted.
* Check for security and quality issues.
* Ensure style, readability, and concise docstrings. Depending on the
  AI tool, generated docstrings can sometimes be overly verbose without
  adding meaningful understanding.
* Explain your review process in your software submission to pyOpenSci.

Please **don't offload vetting of generative AI content to volunteer
reviewers**. Arrive with human-reviewed code that you understand,
have tested, and can maintain. As the submitter, you are accountable
for your submission: you take responsibility for the quality,
correctness, and provenance of all code in your package, regardless of
how it was generated.

### Watch out for licensing issues.

LLMs are trained on large amounts of open source code, and most of
that code has licenses that require attribution (including permissive
licenses like MIT and BSD-3). The problem? LLMs sometimes produce
near-exact copies of that training data, but without any attribution
or copyright notices. **LLM output does not comply with the license
requirements of the input code, even when the input is permissively
licensed**, because it fails to provide the required attribution.

Not all code carries the same licensing risk. The risk varies
depending on what you're generating.

Risk of license infringement is **lower for routine tasks** like
refactoring existing code, test suite improvements, creating
boilerplate code, simple utility functions, and docstring generation.
These tasks are more common, often use widely documented patterns,
and are not as likely to be substantially similar to copyrighted
training data.

Tasks that are **higher risk** include:

* Algorithm implementations
* Developing workflows for complex data structures
* Domain-specific logic that is potentially already published or
  copyrighted

For high-risk content (e.g., algorithm implementations), you need to
understand the algorithm to vet its correctness, ensure the approach
is not already published and copyrighted, vet its performance, and
evaluate edge cases. If you understand it well enough to review it
thoroughly, you can often implement it yourself. In these cases, use
LLMs as learning aids—ask questions, study approaches, then write
your own implementation.

Why this matters:

* LLM-generated code may be _substantially similar_ to copyrighted
  training data; sometimes it is identical. Copyright law focuses on
  how similar your content is compared to the original.
* You can't trace what content the LLM learned from (the black box
  problem); this makes due diligence impossible on your part. You
  might accidentally commit plagiarism or copyright infringement by
  using LLM output in your code even if you modify it.
* License conflicts occur because of both items above. Read on...

When licenses clash, it gets particularly messy. Even when licenses
are compatible (e.g., MIT-licensed training data and MIT-licensed
output), you still have a violation because attribution is missing.
With incompatible licenses (say, an LLM outputs GPL code and your
package uses MIT), you can't just add attribution to fix it—you'd
technically have to delete everything and rewrite it from scratch
using clean-room methods to comply with licensing requirements.

The reality of all of this is that you can't eliminate this risk of
license infringement or plagiarism with current LLM technology. But
you can be more thoughtful about how you use the technology.

### What you can do now

Consider the following:

* Assess the licensing risk based on what you're generating: routine
  refactoring carries lower risk than implementing novel algorithms or
  domain-specific logic.
* Be aware that when you directly use content from an LLM, there will
  be inherent license conflicts and attribution issues.
* **Use LLMs as learning tools**: Ask questions, review outputs
  critically, then write your own implementation based on
  understanding. Often the outputs of LLMs are messy or inefficient.
  Use them to learn, not to copy. This is especially important for
  high-risk content like algorithms.
* Understand and transform code returned from an LLM: Don't paste LLM
  outputs directly. Review, edit, and ensure you fully understand what
  you're using. You can ask the LLM questions to better understand its
  outputs. This approach also helps you learn, which addresses the
  education concerns that we raised earlier.
* Consider [clean-room
  techniques](https://en.wikipedia.org/wiki/Clean-room_design): Have
  one person review LLM suggestions for approach; have another person
  implement from that high-level description.
* **Document your process**: If you plan to submit a Python package
  for pyOpenSci review, we will ask you about your use of LLMs in your
  work. Document the use of LLMs in your project's README file and in
  any modules where LLM outputs have been applied. Confirm that it has
  been reviewed by a human prior to submitting it to us, or any other
  volunteer-led peer review process.

You can't control what's in training data, but you can be thoughtful
about how you use these tools.

<div class="notice" markdown="1">
Examples of how these licensing issues are impacting and stressing our
legal systems:

* [GitHub Copilot litigation](https://githubcopilotlitigation.com/case-updates.html)
* [Litigation around text from LLMs](https://arxiv.org/abs/2505.12546)
* [incompatible licenses](https://dwheeler.com/essays/floss-license-slide.html)
</div>

### Review for bias

Inclusion is part of quality. Treat AI-generated text with the same
care as code.
Given the known biases that can manifest in Generative AI-derived text:

* Review AI-generated text for stereotypes or exclusionary language.
* Prefer plain, inclusive language.
* Invite feedback and review from diverse contributors.

## Things to consider in your development workflows

If you are a maintainer or a contributor, some of the above can apply
to your development and contribution process, too. Similar to how
peer review systems are being taxed, rapid, AI-assisted pull requests
and issues can also overwhelm maintainers too. To combat this:

* If you are using generative AI tools in your daily workflows, keep each task small, focused, and well-defined. This is particularly important if you are using agent mode. This will produce smaller changes to your codebase that
will be easier to thoughtfully review and evaluate.
* Open an issue first before submitting a pull request to a repository that you don't own to ensure it's
  welcome and needed
* Keep your pull requests small with clear scopes.
* If you use LLMs, test and edit all of the output before you submit a
  pull request or issue.
* Flag AI-assisted sections of any contribution so maintainers know
  where to look closely.
* Be responsive to feedback from maintainers, especially when
  submitting code that is AI-generated.

## Where we go from here

A lot of thought and consideration has gone into the development of
[pyOpenSci's Generative AI
policies](https://www.pyopensci.org/software-peer-review/our-process/policies.html#policy-for-use-of-generative-ai-llms).

We will continue to suggest best practices for embracing modern
technologies while critically evaluating their realities and the
impacts they have on our ecosystem. These guidelines help us maintain
the quality and integrity of packages in our peer review process while
protecting the volunteer community that makes open peer review
possible. As AI tools evolve, so will our approach—but transparency,
human oversight, and community trust will always remain at the center
of our work.

## Join the conversation

This policy is just the beginning. As AI continues to evolve, so will
our practices. We invite you to:

👉 [Read the full draft policy and discussion](https://github.com/pyOpenSci/software-peer-review/pull/344)
👉 Share your feedback and help us shape how the scientific Python
  community approaches Generative AI in open source.

The conversation is only starting, and your voice matters.
