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
last_modified: 2025-09-16
---

authors: Leah Wasser, Jed Brown, Carter Rhea, Ellie Abrahams

## Generative AI meets scientific open source

Some developers believe that using AI products increases efficiency. However, in scientific open source, speed isn't everything—transparency, quality, and community trust are just as important as understanding the environmental impacts of using large language models in our everyday work. Similarly, ethical questions arise when tools may benefit some communities while harming others.

## Why we need guidelines

At pyOpenSci, we’ve drafted a new policy for our peer review process to set clear expectations for disclosing the use of LLMs in scientific open-source software.

Our goal is transparency and fostering reproducible research. For scientific rigor, we want maintainers to **disclose when and how they’ve used LLMs** so editors and reviewers can fairly and efficiently evaluate submissions. Further, we want to avoid burdening our volunteer editorial and reviewer team with being the initial reviewers of generated code.

## A complex topic: Benefits and concerns

LLMs are perceived as helping developers:

* Explain complex codebases
* Generate unit tests and docstrings
* In some cases, simplifying language barriers for participants in open source around the world
* Speeding up everyday workflows

Some contributors also perceive these products as making open source more accessible. However, LLM's also present
unprecedented social and environmental challenges.

### Incorrectness of LLMs and misleading time benefits

Although it is commonly stated that LLMs help improve the productivity of high-level developers, recent scientific explorations of this hypothesis [indicate the contrary](https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/). What's more is that the responses of LLMs for complex coding tasks [tend to be incorrect](https://arxiv.org/html/2407.06153v1) and/or overly verbose/inefficient. It is crucial that, if you use an LLM to help produce code, you should independently evaluate code correctness and efficiency.

### Environmental impacts

Training and running LLMs [requires massive energy consumption](https://www.unep.org/news-and-stories/story/ai-has-environmental-problem-heres-what-world-can-do-about), raising sustainability concerns that sit uncomfortably alongside much of the global scale scientific research that our community supports.

### Impact on learning

Heavy reliance on LLMs risks producing developers who can prompt, but not debug or maintain, code—undermining long-term project sustainability and growth. This also in the long run will make it [harder for young developers to learn how to code, and troubleshoot independently](https://knowledge.wharton.upenn.edu/article/without-guardrails-generative-ai-can-harm-education/).

> We’re really worried that if humans don’t learn, if they start using these tools as a crutch and rely on it, then they won’t actually build those fundamental skills to be able to use these tools effectively in the future. *Hamsa Bastani*

### Ethics and inclusion

LLM outputs can reflect and amplify bias in training data. In documentation and tutorials, that bias can harm the very communities we want to support.

## Our Approach: Transparency and Disclosure

We acknowledge that social and ethical norms, as well as concerns about environmental and societal impacts, vary widely across the community. We are not here to judge anyone who uses or doesn't use LLMs. Our focus centers on supporting informed decision-making and consent regarding LLM use in the pyOpenSci software submission, review, and editorial process.

Our community’s expectation is simple: **be open about and disclose any Generative AI use in your package** when you submit it to our open software review process.

* Disclose LLM use in your README and at the top of relevant modules.
* Describe how the Generative AI tools were used in your package's development.
* Be clear about what human review you performed on Generative AI outputs before submitting the package to our open peer review process.

Transparency helps reviewers understand context, trace decisions, and focus their time where it matters most.

### Human oversight

LLM-assisted code must be **reviewed, edited, and tested by humans** before submission.

* Run your tests and confirm the correctness of the code that you submitted.
* Check for security and quality issues.
* Ensure style, readability, and concise docstrings.
* Explain your review process in your software submission to pyOpenSci.

Please **don’t offload vetting of generative AI content to volunteer reviewers**. Arrive with human-reviewed code that you understand, have tested, and can maintain.

### Watch out for licensing issues.

LLMs are trained on large amounts of open source code; most of that code has licenses that require attribution.
The problem? LLMs sometimes spit out near-exact copies of that training data, but without any attribution or copyright notices.

Why this matters:

* Using LLM output verbatim could violate the original code's license
* You might accidentally commit plagiarism or copyright infringement by using that output verbatim in your code
* Due diligence is nearly impossible since you can't trace what the LLM "learned from" (most LLM's are black boxes)

When licenses clash, it gets messy. Say your package uses an MIT license (common in scientific Python), but an LLM outputs Apache-2.0 or GPL code—those licenses aren't compatible. You can't just add attribution to fix it. Technically, you'd have to delete everything and rewrite it from scratch to comply with the licensing requirements.

While this is all tricky, here's what you can do, now:

*Prefer human-edited, transformative outputs you fully understand*

* Be aware that when you directly use content developed by an LLM, there will be inherent license conflicts.
* Be aware that LLM products can potentially return copyrighted code verbatim. **Don't paste LLM outputs directly into your code**. Instead, review, edit, and transform anything an LLM gives you. Consider using [clean-room techniques](https://en.wikipedia.org/wiki/Clean-room_design) to achieve this.
* **Make sure you fully understand the code before using it:** This is actually in your best interest because you can learn a lot about programming by asking an LLM questions and reviewing the output critically.

You can't control what's in training data, but you can be thoughtful about how you use these tools.

<div class="notice" markdown="1">
Examples of how these licensing issues are impacting and stressing our legal systems:

* [GitHub Copilot litication](https://githubcopilotlitigation.com/case-updates.html)
* [Litigation around text from LLMs](https://arxiv.org/abs/2505.12546)
* [incompatible licenses](https://dwheeler.com/essays/floss-license-slide.html)
</div>

### Review for bias

Inclusion is part of quality. Treat AI-generated text with the same care as code.
Given the known biases that can manifest in Generative AI-derived text:

* Review AI-generated text for stereotypes or exclusionary language.
* Prefer plain, inclusive language.
* Invite feedback and review from diverse contributors.

## Things to consider in your development workflows

If you are a maintainer or a contributor, some of the above can apply to your development and contribution process, too.
Similar to how peer review systems are being taxed, rapid, AI-assisted pull requests and issues can also overwhelm maintainers too. To combat this:

* Open an issue first before submitting a pull request to ensure it's welcome and needed
* Keep your pull requests small with clear scopes.
* If you use LLMs, test and edit all of the output before you submit a pull request or issue.
* Flag AI-assisted sections of any contribution so maintainers know where to look closely.
* Be responsive to feedback from maintainers, especially when submitting code that is AI-generated.

## Where we go from here

A lot of thought and consideration has gone into the development of pyOpenSci's Generative AI policies.
We will continue to suggest best practices for embracing modern technologies while critically evaluating their realities and the impacts they have on our ecosystem. These guidelines help us maintain the quality and integrity of packages in our peer review process while protecting the volunteer community that makes open peer review possible. As AI tools evolve, so will our approach—but transparency, human oversight, and community trust will always remain at the center of our work.

## Join the conversation

This policy is just the beginning. As AI continues to evolve, so will our practices. We invite you to:

👉 [Read the full draft policy and discussion](https://github.com/pyOpenSci/software-peer-review/pull/344)
👉 Share your feedback and help us shape how the scientific Python community approaches Generative AI in open source.

The conversation is only starting, and your voice matters.
