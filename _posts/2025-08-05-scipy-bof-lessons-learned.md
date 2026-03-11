---
layout: single
title: "Listening, learning, and building together: what we heard at our SciPy 2025 BoF"
excerpt: "We held an incredibly informative community session this year at the SciPy meeting in Tacoma Washington. We asked the community what their open source Python pain points were. Learn more about what we learned in this interactive session."
author: "Mandy Moore"
permalink: /blog/pyopensci-bof-community-scipy-2025.html
header:
  overlay_image: images/headers/pyopensci-scipy-2025.png
categories:
  - blog-post
  - community
classes: wide
toc: true
comments: true
last_modified: 2025-08-05
---


<figure>
  <picture>
  <source srcset="/images/blog/2025/scipy-bof/community-discussion-2.webp" type="image/webp">
  <img src="/images/blog/2025/scipy-bof/community-discussion-2.png" alt="Attendees from different scientific backgrounds actively participate in a BoF discussion, sharing experiences from across the research software ecosystem.">
  </picture>
</figure>

At [SciPy 2025](https://www.scipy2025.scipy.org/) in July, [pyOpenSci hosted a Birds of a Feather session](https://www.pyopensci.org/events/pyopensci-scipy25-bof-packaging-challenges.html) focused on packaging challenges in research software.

Rather than giving another talk or demo, we created a space to listen. Building on themes from [our earlier blog about the social side of packaging](https://www.pyopensci.org/blog/python-packaging-friends-dont-let-friends-package-alone.html), we invited folks into a Birds of a Feather (BoF) session centered on one big question:

**What are your biggest pain points when it comes to sharing and maintaining research software—and what should pyOpenSci focus on next?**

<div class="notice notice--primary" markdown="1">
💬 What’s a BoF?

A “Birds of a Feather” (BoF) session is an informal gathering where people with shared interests come together to discuss a topic—no slides, no lectures, just real conversation. At SciPy, our BoF served as a chance to connect, surface ideas, and shape the future of open science together.
</div>

The goal wasn’t to walk away with a perfect roadmap. It was to get honest input from people across the scientific open source ecosystem, like maintainers, researchers, tool builders, educators, and curious newcomers. We wanted to surface the real-world friction points that often get lost in documentation or conference talks. These aren’t just isolated issues—they’re patterns that affect how research software gets built, shared, cited, and sustained.

And wow, did people show up!

We kicked things off with a few warm-up questions, then broke into small groups for deeper discussion. Each group used [Mentimeter](https://www.mentimeter.com/) to log their thoughts in real time, so we could capture the full range of ideas. Some responses were serious. Others were playful (one response to “What’s hardest about packaging your code?” was simply: “cats” 😹). But across it all, real patterns emerged\!

Here’s what we heard and how it’s shaping where we go from here.

---

<figure>
  <picture>
  <source srcset="/images/blog/2025/scipy-bof/community-discussion.webp" type="image/webp">
  <img src="/images/blog/2025/scipy-bof/community-discussion.png" alt="SciPy 2025 attendees sit in a discussion circle during the pyOpenSci BoF session, engaged in conversation about research software challenges.">
  </picture>
</figure>

## “Packaging is still painful”: core frustrations

Despite the progress in tooling over the last few years, many attendees made one thing clear: **Python** **packaging is still a struggle**.

Participants used phrases like “dependency hell,” “non-Python pain,” “configuration chaos,” and “too many choices” to describe their current reality. One common theme? There are *lots* of tools available, but little clarity on how to navigate them.

People asked:

* When should I use [Pixi](https://pixi.sh/) vs [pip](https://pypi.org/project/pip/) vs [uv](https://docs.astral.sh/uv/)?
* What’s the right way to support non-Python dependencies?
* Why does it still feel like setting up my environment is half the battle?

Even seasoned developers shared that they still wrestle with [build systems](https://www.pyopensci.org/python-package-guide/package-structure-code/python-package-build-tools.html#build-front-end-vs-build-back-end-tools) and [publication pipelines](https://www.pyopensci.org/python-package-guide/tutorials/publish-pypi.html). And for scientists new to software development, the learning curve can feel nearly vertical.

---


<figure>
  <picture>
  <source srcset="/images/blog/2025/scipy-bof/results-open-code-painpoints.webp" type="image/webp">
  <img src="/images/blog/2025/scipy-bof/results-open-code-painpoints.png" alt="Mentimeter board filled with participant feedback on how institutions could better support sustainable research software, including ideas like checklists and incentives.">
  </picture>
</figure>

## Docs are the front door—but it’s often locked

[Documentation](https://www.pyopensci.org/python-package-guide/documentation/index.html) came up repeatedly, not just as a technical need but as a key accessibility issue.

People weren’t just asking for more documentation. They were asking for:

* Docs that actually work (e.g., install instructions that don’t break),
* Docs that explain why as well as how,
* And docs with effective examples, not just API references.

We also heard about the challenge of writing good documentation when you’re strapped for time, unsure what your audience needs, or dealing with tools that change frequently. There were several calls for best practice guides—what *has* to be documented, how to make [gallery](https://www.pyopensci.org/python-package-guide/documentation/write-user-documentation/create-package-tutorials.html)\-style examples, and how to make sure docs stay up-to-date across versions.

---

<figure>
  <picture>
  <source srcset="/images/blog/2025/scipy-bof/results-open-code-painpoints-2.webp" type="image/webp">
  <img src="/images/blog/2025/scipy-bof/results-open-code-painpoints-2.png" alt="Mentimeter slide summarizing common barriers to making research code more open, including time constraints, lack of institutional support, and unclear best practices.">
  </picture>
</figure>

## Matchmaking, mentorship, and human help

One of the clearest messages from the BoF was that technical infrastructure only goes so far. What people also need is human infrastructure.

That includes:

* Mentoring programs to help new contributors feel supported and seen
* Ways to match scientists with programmers (and vice versa), especially when each party has complementary knowledge but no bridge between them
* Contributor paths that don’t assume deep technical knowledge, but instead offer orientation and validation

Several folks mentioned imposter syndrome, burnout, or the sense of shouting into the void as solo maintainers. It was a good reminder that building sustainable software also means building sustainable communities.

---

<figure>
  <picture>
  <source srcset="/images/blog/2025/scipy-bof/plot-use-of-llms.webp" type="image/webp">
  <img src="/images/blog/2025/scipy-bof/plot-use-of-llms.png" alt="Mentimeter slide displaying audience reactions to generative AI in research software, with mixed responses including excitement, skepticism, and caution.">
  </picture>
</figure>

## AI is here (whether we like it or not)

Of course, we also asked about LLMs and generative AI and got a spectrum of reactions.

Some folks are excited about the potential to scaffold code, summarize docs, or speed up tedious workflows. Others shared more cautionary takes, raising issues around:

* Trust and reproducibility (especially when LLMs hallucinate)
* Licensing concerns (who owns what?)
* The risk that “AI-hype” could distract from foundational work and people

In short, people are experimenting, but they’re also wary. There’s interest in using these tools responsibly—**not to replace developers, but to augment and support them**.

---

## Academic culture still makes it hard

One of the deeper undercurrents in the BoF conversation was how academic norms actively discourage openness and sustainability. This is especially true when it comes to research software, which often underpins entire publications but rarely receives credit, maintenance funding, or institutional support.

We heard:

* Researchers don’t get credit for making code reproducible or open.
* There’s little incentive to write good docs or maintain packages after publication.
* People are exhausted just trying to meet the minimum requirements for publication (never mind building for reuse).

And yet, people had ideas:

* Could pyOpenSci or a partner journal offer non-monetary awards for well-packaged, reproducible code?
* Could we provide press release templates to help institutions spotlight their open science champions?
* What if we offered more checklists or templates to help researchers make their code more open, with less guesswork? We’re already taking small steps in this direction through resources like our [packaging guide](https://www.pyopensci.org/python-package-guide/), the [pyos-package-template](https://github.com/pyOpenSci/pyos-package-template), and our [list of peer-reviewed packages](https://www.pyopensci.org/python-packages.html), which offers a bit of well-earned recognition for open research software.

These aren’t technical problems. They’re cultural ones. And they’re just as important to address.

---

## Ideas we loved

This community doesn’t just surface problems. It shows up with solutions. Across the BoF discussions, people weren’t just venting—they were imagining what better could look like.

Here are some of the ideas we’re excited to explore next, aligned with the major themes we heard:

### Packaging & tooling

* Promote beginner-friendly packaging tools—like our [Python packaging guide](https://www.pyopensci.org/python-package-guide/) and [packaging template](https://github.com/pyOpenSci/pyos-package-template), which we also use in our [lessons](https://www.pyopensci.org/lessons/).

* Help researchers understand the evolving [Python packaging landscape](https://www.pyopensci.org/python-package-guide/package-structure-code/python-package-build-tools.html)—tools like uv, Pixi, pip, and Hatch—with comparison tables, use-case guides, or decision trees.

* Offer clearer guidance on when to publish a new package vs. contribute to an existing one, and how to manage non-Python dependencies in cross-platform environments.

  ### Documentation & onboarding

* Publish best practices for writing docs that actually work—including install instructions, example-rich gallery pages, and tips for keeping docs up to date.

* Make contributing easier through better labeling of issues (e.g., “good first issue,” “review needed”) and improved contributor guides.

* Create lightweight templates or checklists for maintainers who want to lower the barrier for contributions but aren’t sure where to start.

  ### Community & contributor support

* Provide talking points for researchers who want to advocate for their contributions to research software in tenure reviews, grant applications, or institutional conversations.

* Offer some form of visible recognition—like our [listed packages](https://www.pyopensci.org/software-contributing-guide/peer-reviewed-packages.html)—for maintainers who go above and beyond.

* Pilot mentorship, pairing, or office-hour models to connect researchers with developers, especially in early-stage projects.

### AI, academic culture & broader systems
* Build resources that help the community responsibly evaluate the use of LLMs and generative AI in open source—without overpromising or oversimplifying.
* Share reproducibility and openness checklists tailored to academic realities, helping researchers take incremental steps toward sustainable software.
* Explore non-monetary awards or spotlights that recognize peer-reviewed, well-documented, and reusable research software—even if it’s not “published” in the traditional sense.

---

<figure>
  <picture>
  <source srcset="/images/blog/2025/scipy-bof/breakout-group.webp" type="image/webp">
  <img src="/images/blog/2025/scipy-bof/breakout-group.png" alt="A small breakout group at SciPy 2025 BoF, with participants gathered around a table talking and taking notes on packaging and documentation pain points.">
  </picture>
</figure>

## So, what’s next?

This BoF reminded us that the work pyOpenSci does matters. But it also reminded us that we can’t (and shouldn’t) do it alone.

We are thrilled to be [working with Stanford University's Open Source Program office](https://www.pyopensci.org/events/pyopensci-stanford-ospo-peer-review.html) and are excited about a peer review event that we are hosting!

We’ll also continue to develop our [packaging guide](https://www.pyopensci.org/python-package-guide/), [peer review process](https://www.pyopensci.org/software-peer-review/), and [community programs](https://www.pyopensci.org/contributing/) more beginner-friendly and human-centered. But we also want to invite your voices into that work.

What do you want to see next? Where can we partner, collaborate, or amplify?

---

<div class="notice" markdown="1">
## Connect with us!

Whether you’re new to open science or have been building tools for decades, there’s a place for you here.

* Check out our [packaging guide](https://www.pyopensci.org/python-package-guide/) for tutorials, tooling comparisons, and overviews of the Python packaging ecosystem. If you spot missing content, typos, or areas for improvement, [open an issue](https://www.pyopensci.org/python-package-guide/#report-issues-or-contribute) to help us make it better.
* [Volunteer to be a reviewer for pyOpenSci’s software review process](https://docs.google.com/forms/u/6/d/e/1FAIpQLSeVf-L_1-jYeO84OvEE8UemEoCmIiD5ddP_aO8S90vb7srADQ/viewform?usp=send_form).
* [Submit a research software package to pyOpenSci for peer review.](https://www.pyopensci.org/software-peer-review/how-to/author-guide.html#submit-your-package-for-peer-review)
* [Donate to pyOpenSci](https://give.communityin.org/pyopensci_2024?ref=ab_0sHhtifYvgR0sHhtifYvgR) to support scholarships for future training events and the development of new learning content.
* Check out our [volunteer page](https://www.pyopensci.org/volunteer.html) for other ways to get involved.

You can also:

* Keep an eye on our [events page](https://www.pyopensci.org/events.html) for upcoming training events.

Follow us on social platforms:

* [Mastodon](https://fosstodon.org/@pyopensci)
* [Bluesky](https://bsky.app/profile/pyopensci.org)
* [LinkedIn](https://www.linkedin.com/company/pyopensci/)
* [GitHub](https://github.com/pyOpenSci)

If you are on LinkedIn, check out and [subscribe to our newsletter](https://www.linkedin.com/newsletters/7179551305344933888/?displayConfirmation=true), too.

Let’s keep building a better, more inclusive, and more sustainable open science ecosystem, together.
</div>
