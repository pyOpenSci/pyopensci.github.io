---
layout: single
title: "Generative AI and open source: what PyCon US 2026 taught us about the path forward"
excerpt: "Generative AI was a dominant theme at PyCon US 2026 — not as a buzzword, but as a lived reality the Python community is actively wrestling with. From our pyOpenSci open space to the Maintainers Summit BoF to Amanda Casari's powerful closing keynote, the path forward remains human."
author: "Leah Wasser"
permalink: /blog/pycon-us-2026-generative-ai-open-source.html
header:
  overlay_image: images/blog/headers/pycon-us-2026-header.png
categories:
  - blog-post
  - community
classes: wide
toc: true
comments: true
last_modified: 2026-06-05
---

*This post is Part 4 of a 4-part series on pyOpenSci at [PyCon US 2026](https://us.pycon.org/2026/). [Part 1](/blog/pycon-us-2026-community-connection.html) covers community and connection. [Part 2](/blog/pycon-us-2026-maintainers-summit.html) covers the Maintainer Summit. [Part 3](/blog/pycon-us-2026-sprints.html) covers the sprints.*

*******

## Generative AI and open source: what the community is wrestling with

Generative AI was a dominant theme at PyCon US 2026 — prominent enough
to have its own dedicated conference track for the first time. But for
pyOpenSci, the conversation wasn't about machine learning applications
or what AI can build. It was about something more immediate: **what
generative AI tools are doing to open source communities themselves.**

How are they changing who contributes? Who reviews? Who stays? What
does it mean for the humans who maintain these projects — often
voluntarily, often at the edges of burnout — when the barrier to
submitting code drops to near zero while the cost of reviewing it keeps
climbing?

*At pyOpenSci, these questions have been front of mind for a few years — shaping our [peer review policy for AI-assisted submissions](https://www.pyopensci.org/software-peer-review/our-process/policies.html#policy-for-use-of-generative-ai-llms) and our course [Ship It: Python Packaging in the Generative AI Era](/blog/ship-it-cohort-one.html). PyCon US 2026 gave us a chance to bring that work into the broader conversation.*

## Where we heard it: AI conversations across PyCon US 2026

AI conversations showed up everywhere — hallways, structured open spaces, and the keynote stage.

**On day one, pyOpenSci hosted an open space** around a simple but hard question: *What can we do together to ease some of the pain points around generative AI in open source?* Small groups formed around specific tensions and came back with themes that will feel familiar to anyone in this space.

<figure>
  <picture>
    <source srcset="{{ site.baseurl }}/images/blog/2026/pycon-us-2026-genai-open-space.webp" type="image/webp">
    <img src="{{ site.baseurl }}/images/blog/2026/pycon-us-2026-genai-open-space.png" alt="Attendees gather around a round table during the pyOpenSci generative AI open space at PyCon US 2026, laptops open as one participant gestures while leading a small-group discussion.">
  </picture>
  <figcaption>Small-group discussion at the pyOpenSci generative AI open space on day one of PyCon US 2026.</figcaption>
</figure>

**At the Maintainers Summit on Saturday,** pyOpenSci co-hosted a Generative AI BoF with [Jackie Kazil](https://github.com/jackiekazil), giving us a rare snapshot of how maintainers are actually using and feeling about these tools. Taken together, these conversations painted a remarkably consistent picture.

## What the community shared

Nearly two thirds of our event participants maintain projects with four or fewer
active co-maintainers. Over 80% are using generative AI tools — across
chat, IDEs, and the command line — for everything from generating code to
rubber ducking through problems. Most find them useful, but few called them
*very* useful. That pragmatism, and the frustrations underneath it, shaped
everything that follows. **Most people that we talk to use AI tools regularly.**

<figure>
  <picture>
    <source srcset="{{ site.baseurl }}/images/blog/2026/pycon-us-2026-genai-community-discussion.webp" type="image/webp">
    <img src="{{ site.baseurl }}/images/blog/2026/pycon-us-2026-genai-community-discussion.png" alt="Attendees sit together around a round table at PyCon US 2026, leaning in during a focused small-group conversation about generative AI and open source.">
  </picture>
  <figcaption>Maintainers and contributors working through generative AI questions together at PyCon US 2026.</figcaption>
</figure>

## What we keep hearing: themes across the community

These aren't new concerns — but PyCon US 2026 made clear they are intensifying.
One pattern worth naming upfront: usage is high across the board. Course participants
tend to be excited — energized by what the tools make possible. Maintainers are more
measured. They're using the same tools, but they're sitting on the other side of the
pull request. That difference in vantage point shapes everything that follows.

### The maintainer burden is growing

The barrier to submitting an open source contribution has dropped dramatically. The
barrier to reviewing one has not. More PRs, more issues, more noise — but the same
number of hours in the day. AI-generated code can look right while being wrong in ways
that take real expertise to catch:

{% include pyos-blockquote.html quote="It's like a genius who's also a toddler — which is hard to explain to the people who want us to rely on it completely." author="PyCon US 2026 Maintainers Summit BoF attendee" class="highlight" %}

Even course participants — people actively learning and enthusiastic about these tools
— are already noticing the gap:

{% include pyos-blockquote.html quote="They are helpful and increase efficiency, but they make it harder to fully understand the code." author="Ship It: Python Packaging in the Generative AI Era participant" class="highlight" %}

The review burden isn't just a workload problem. It's a trust problem. Reviewers used
to assume a pull request came from someone who wanted to learn and contribute. That
assumption no longer holds. Projects are asking hard questions about how to verify
human intent, but no consensus approach has emerged.

### The contributor pipeline is at risk

Open source has always had an informal mentorship model — small issues, feedback,
mistakes, gradual responsibility. That slow, messy process is how contributors become
maintainers. AI tools are short-circuiting that ramp. When a new contributor can
generate a plausible-looking pull request without deeply engaging with the codebase,
they skip the hard learning that builds judgment and intuition:

{% include pyos-blockquote.html quote="It's made growing long-term contributors very hard." author="PyCon US 2026 Maintainers Summit BoF attendee" class="highlight" %}

Our course participants are sensing this from the other side:

{% include pyos-blockquote.html quote="Very helpful for prototyping and learning, but not for scaling production — still need a senior software engineer to make good judgement." author="Ship It: Python Packaging in the Generative AI Era participant" class="highlight" %}

{% include pyos-blockquote.html quote="[AI tools are] Somewhere in between — they can be super helpful but I think they can fool people into thinking they don't need to understand the fundamentals." author="Ship It: Python Packaging in the Generative AI Era participant" class="highlight" %}

There's a paradox here: the people who most need AI tools to bridge skill gaps are
often the least equipped to critically evaluate their outputs. That requires deep
knowledge of the codebase — exactly what newer contributors are still building.

### AI policy shapes community culture

Projects are taking wildly different stances — outright bans, permissive approaches,
everything in between. But policies aren't just legal governance. The policy you
create is a signal about what kind of community you're building.

The [pip-tools policy discussion](https://github.com/jazzband/pip-tools/discussions/2278)
offered one of the clearest framings we heard all week: **"Don't let AI speak for you."**
A ban selects for contributors who want to engage deeply with the craft of developing software. A permissive
policy may attract volume but sacrifice quality code. Neither choice is inherently right or wrong — but the
choice determines the type of community that forms around your project. Every project is making that choice, whether
explicitly or not.

### The power asymmetry no one is talking about

Companies are requiring engineers to use these tools, setting up token consumption
leaderboards, tying job security to AI output volume. Meanwhile the individual
maintainer — often unpaid, often solo — absorbs the downstream costs: more
AI-generated PRs to review, more hallucinated issues to triage, no budget for tooling
to help manage it.

{% include pyos-blockquote.html quote="Cost / access asymmetry between megacorporations with infinite token budgets and individuals without them." author="PyCon US 2026 Maintainers Summit BoF attendee" class="highlight" %}

This asymmetry isn't just economic. It's a power dynamic reshaping who open source works for.

### The ethics and sustainability conversation has gone quiet

A few years ago, conversations about AI in open source were full of harder questions —
copyright, consent, environmental cost. Legal and licensing questions remain genuinely
unresolved: what is the copyright status of AI-generated code? How do licenses and attribution
interact with AI-assisted contributions?

{% include pyos-blockquote.html quote="Copyright violations — something we were all talking about before, but not much any longer..." author="PyCon US 2026 Maintainers Summit BoF attendee" class="highlight" %}

Those conversations haven't been resolved. They've just been crowded out by urgency
and pragmatism. The fact that we stopped having them doesn't mean the questions
were answered.

## The human thread: Amanda Casari's keynote: a note on hope

All of these conversations — the frustrations, the policy debates, the
pipeline worries — could easily leave you feeling like the ground is
shifting in ways that are hard to stand on. And for a lot of
maintainers, it is.

But PyCon US 2026 didn't end on that note.

The conference closed with one of the most moving keynote addresses
I've witnessed — Amanda Casari speaking about resilience, hope, and
what it means to be human in an era of rapid technological change.

The message wasn't naive optimism. It was a recognition that yes, this
is hard, and yes, people are burnt out — and also that the path forward
is a human one. Connection, care, and community are not features that
any AI tool can replicate. They are the thing.

<figure>
  <picture>
    <source srcset="{{ site.baseurl }}/images/blog/2026/pycon-us-2026-amanda-casari-keynote.webp" type="image/webp">
    <img src="{{ site.baseurl }}/images/blog/2026/pycon-us-2026-amanda-casari-keynote.png" alt="Amanda Casari delivers the closing keynote at PyCon US 2026 beside a slide that reads Disposable Code Is Here to Stay, but Durable Code Is What Runs the World, attributed to Charity Majors.">
  </picture>
  <figcaption>Amanda Casari's closing keynote at PyCon US 2026, citing Charity Majors: "Disposable code is here to stay, but durable code is what runs the world."</figcaption>
</figure>

That framing landed differently after a week of conversations about
reviewer burden and contributor pipelines and token consumption
leaderboards. It was a reminder that the reason any of this matters is
the people — the ones showing up, often voluntarily, often quietly, to
maintain the tools that the rest of the world depends on.

## Wrapping it all up (but not with a pretty bow just yet)

AI is a tool. A powerful one, with real implications for how open
source works. But the humans — the ones showing up, building trust,
passing knowledge on — that's the irreplaceable part.

The conversations at PyCon US this year gave me genuine hope. Not because
we solved anything, but because the community is engaging with these
questions seriously, honestly, and together. That's how hard things
get figured out.

I'll be bringing these conversations to the UN Open Source Summit,
EuroPython (where I'll be keynoting), EuroSciPy, and RSECon in
September. I hope to see many of you along the way.

---

*This is Part 4 of a 4-part series on pyOpenSci at PyCon US 2026.
[Part 1: community and connection](/blog/pycon-us-2026-community-connection.html) ·
[Part 2: Maintainer Summit](/blog/pycon-us-2026-maintainers-summit.html) ·
[Part 3: pyOpenSci sprints](/blog/pycon-us-2026-sprints.html)*
