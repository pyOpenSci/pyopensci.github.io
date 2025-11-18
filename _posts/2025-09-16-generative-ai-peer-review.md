---
layout: single
title: "Navigating LLMs in Open Source: pyOpenSci's New Peer Review Policy"
excerpt: "Generative AI products are reducing the effort and skill necessary to generate large amounts of code, which in some cases is causing a strain  on volunteer peer review programs like ours. Learn about pyOpenSci's policy on generative AI in peer review in this blog post."
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

authors: Leah Wasser, Mandy Moore, 

## Generative AI meets scientific open source

It has been suggested that for some developers, using AI tools for tasks can increase efficiency by as much as 55%. But in open source scientific software, speed isn't everything—transparency, quality, and community trust matter just as much. So do the ethical questions these tools raise.

**Edit this.** Whatever breakout content we want here.... needs to be all on a single line. 
{: .notice--success}


## Why we need guidelines

At [pyOpenSci](https://www.pyopensci.org/), we’ve drafted a new policy for our peer review process to set clear expectations around disclosing use of LLMs in scientific software packages.

This is not about banning AI tools. We recognize their value to some. Instead, our goal is transparency. We want maintainers to **disclose when and how they’ve used LLMs** so editors and reviewers can fairly and efficiently evaluate submissions.

## Our Approach: Transparency and Disclosure

We know that people will continue to use LLMs. We also know they can meaningfully increase productivity and lower barriers to contribution for some. We also know that there are significant ethical, societal and other challenges that come with the development and use of LLM’s. 

Our community’s expectation is simple: **be open about and disclose any generative AI use in your package**.

* Disclose LLM use in your README and at the top of relevant modules.  
* Describe how the tools were used   
* Be clear about what human review you performed.

Transparency helps reviewers understand context, trace decisions, and focus their time where it matters most.

### Human oversight

LLM-assisted code must be **reviewed, edited, and tested by humans** before submission.

* Run tests and confirm correctness.  
* Check for security and quality issues.  
* Ensure style, readability, and clear docstrings.  
* Explain your review process in your software submission to pyOpenSci.

Please don’t offload vetting to volunteer reviewers. Arrive with human-reviewed code that you understand, have tested, and can maintain.

### Licensing awareness

LLMs are trained on source code and documents with many licenses, most of which require attribution/preservation of a copyright notice (possibly in addition to other terms). LLM outputs sometimes produce verbatim or near-verbatim copies of [code](https://githubcopilotlitigation.com/case-updates.html) or [prose](https://arxiv.org/abs/2505.12546) from the training data, but with attribution stripped. Without attribution, such instances constitute a derivative work that violates the license, thus are likely to be copyright infringement and are certainly plagiarism. Copyright infringement and plagiarism are issues of process, not merely of the final artifact, so it is difficult to prescribe a reliable procedure for due diligence when working with LLM output, short of assuming that such output is always tainted and thus the generated code or derivative works can never come into the code base. We recognize that many users of LLM products for software development would consider such diligence impractical.

If similarities with existing software is detected **and** the licenses are compatible, one can come into compliance with the license by complying with its terms, such as by adding attribution. When the source package has an [incompatible license](https://dwheeler.com/essays/floss-license-slide.html), there is no simple fix. For example, if LGPL-2.1 code is emitted by an LLM into an Apache-2.0 project, no amount of attribution or license changes can bring the project into compliance. The Apache-2.0 project cannot even relicense to LGPL-2.1 without consent from every contributor (or their copyright holder). In such cases, the project would be responsible for deleting all implicated code and derivative works, and rewriting it all using [clean-room techniques](https://en.wikipedia.org/wiki/Clean-room_design).

* Acknowledge potential license ambiguity in your disclosure.  
* Avoid pasting verbatim outputs that resemble known copyrighted code.  
* Prefer human-edited, transformative outputs you fully understand.

We can’t control upstream model training data, but we can be cautious, explicit and critical about our usage.

### Ethics and inclusion

LLM outputs can reflect and amplify bias in training data. In documentation and tutorials, that bias can harm the very communities we want to support.

* Review AI-generated text for stereotypes or exclusionary language.  
* Prefer plain, inclusive language.  
* Invite feedback and review from diverse contributors.

Inclusion is part of quality. Treat AI-generated text with the same care as code.

## Supporting volunteer peer review

Peer review runs on **volunteer time**. Rapid, AI-assisted submissions can overwhelm reviewers—especially when code hasn’t been vetted.

* Submit smaller PRs with clear scopes.  
* Summarize changes and provide test evidence.  
* Flag AI-assisted sections so reviewers know where to look closely.  
* Be responsive to feedback, especially on AI-generated code.

These safeguards protect human capacity so high-quality packages can move through review efficiently.

## Benefits and opportunities

LLMs are already perceived as helping developers:

* Explaining complex codebases  
* Generating unit tests and docstrings  
* In some cases, simplifying language barriers for participants in open source around the world  
* Speeding up everyday workflows

Some contributors perceive these products as making open source more accessible.

## Challenges we must address

### Overloaded peer review

Peer review relies on volunteers. LLMs can produce large volumes of code quickly, increasing submissions with content that may not have been carefully reviewed by a human before reaching our review system.

### Ethical and legal complexities

LLMs are often trained on copyrighted or licensed material. Outputs may create conflicts when used in projects under different licenses. They can also reflect extractive practices, like data colonialism, and disproportionately harm underserved communities.

### Bias and equity concerns

AI-generated text can perpetuate bias. When it appears in documentation or tutorials, it can alienate the very groups open source most needs to welcome.

### Environmental impacts

Training and running LLMs [requires massive energy consumption](https://www.technologyreview.com/2019/06/06/239031/training-a-single-ai-model-can-emit-as-much-carbon-as-five-cars-in-their-lifetimes/), raising sustainability concerns that sit uncomfortably alongside much of the scientific research our community supports.

### Impact on learning

Heavy reliance on LLMs risks producing developers who can prompt, but not debug or maintain, code—undermining long-term project sustainability and growth.

## What you can do now 

* **Be transparent.** Disclose LLM use in your README and modules.  
* **Be accountable.** Thoroughly review, test, and edit AI-assisted code.  
* **Be license-aware.** Note uncertainties and avoid verbatim look-alikes.  
* **Be inclusive.** Check AI-generated docs for bias and clarity.  
* **Be considerate.** Respect volunteer reviewers’ time.


<div class="notice" markdown="1"> 
## Join the conversation

This policy is just the beginning. As AI continues to evolve, so will our practices. We invite you to:

👉 Read the full draft policy  
👉 Share your feedback and help us shape how the scientific Python community approaches AI in open source.

The conversation is only starting, and your voice matters.
</div>
