---
title: 'When the human disappears: what maintainers told us about AI contributions at EuroPython'
date: '2026-12-08'
type: blog
excerpt: >
  At EuroPython 2026, fifteen maintainers talked for more than two hours about
  how AI tools are changing open source. The conversation kept returning to
  the loss of human connection.
description: >
  At EuroPython 2026, fifteen maintainers talked for more than two hours about
  how AI tools are changing open source. The conversation kept returning to
  the loss of human connection.
author: Leah Wasser
# Add names after review. One name, or a list.
reviewed_by: []
blog_topic: community
toc: true
comments: true
url: "/blog/when-the-human-disappears-europython.html"
lastmod: '2026-10-28'
highlight_image:
  src: images/events/europython-sprint-2026.png
  alt: Three people at EuroPython 2026 gather around a laptop. One stands and points at the screen while two sit and look on.
---

{{< figure src="images/events/europython-sprint-2026.png" alt="Three people at EuroPython 2026 gather around a laptop. One stands and points at the screen while two sit and look on." caption="Contributors working together at the EuroPython 2026 sprint." >}}

At EuroPython 2026, I facilitated a pilot focus group on how AI tools are changing open source work. Fifteen maintainers from core scientific Python and Linux projects joined a discussion that ran more than two hours.

I expected to hear about the time it takes to review AI-assisted code. Instead, the conversation kept returning to something else: the loss of, and uncertainty about, human connection.

The group covered the full range of AI tool use. Some refuse to use the tools and, in some cases, have left tech because of the strain. Others have fully embraced them, including people in start-up environments where adoption feels like the "only option" to keep up.

This post covers how AI tools are affecting the human experience of open source. A follow-up post will cover adoption and the motivations behind it. This pilot was larger and more open-format than the small groups we plan for our [research on how AI tools are changing scientific open source](/blog/ai-tools-research-sloan-funding.html).

All contributions to the discussion are anonymous.

## The loss is relational

> We need to see the human on the other side.

Maintainers described real joy in helping and mentoring contributors. Someone finds a bug and files a fix. The maintainer helps that contributor get it merged and, along the way, mentors them and builds their open source skills. That interaction fuels many maintainers, including myself.

AI-assisted contributions are eroding these personal, fulfilling interactions. We heard similar concerns at our [PyCon US roundtable on AI tools](/blog/pycon-us-2026-generative-ai-open-source.html). At EuroPython, three patterns came up repeatedly.

### Not knowing who is on the other end

The tension runs in two directions. Sometimes a maintainer really is talking to an agent or bot. Other times, it is a legitimate human.

One maintainer shared a story about suspecting a contributor was an agent. When they pressed further, the contributor turned out to be a person. The strain lands on both sides: the maintainer can't tell who they are talking to, and the contributor, who was just trying to help, is suspected of being deceptive.

> "Hey, this looks like AI wrote this."
>
> "Um, I wrote this last night."
>
> "Oops."

No one in our session had a solution, but many of us have been on one end of an exchange like this.

### False empowerment

A contributor working with an AI tool or agent can feel fully self-sufficient and never realize they need to talk to the maintainer. They keep making contributions, sometimes large ones, without pausing to connect with the humans maintaining the project. Meanwhile, the maintainer, who wants to engage with a human, is trying to reach someone who isn't listening.

I also wonder whether visibility plays a role here. People doing core project work may not be seen by contributors the way they once were.

### Shifting motivations

Maintainers see contributors chasing resume lines or trying to get past automated hiring filters. Some employers also encourage open source contributions as a way to demonstrate technical skill. Some maintainers call the extreme version "karma farming": opening many pull requests on high-profile projects to build up a GitHub profile. This isn't new, but it now makes up a much larger share of incoming work.

Credit is part of this too. One maintainer redid minor bot-generated fixes themselves rather than merge them, to avoid crediting an agent. Small, externally driven agent pull requests can generate more work for maintainers, and it remains unclear who deserves credit.

Beyond the focus group, we have seen this at pyOpenSci. We have heard stories of people setting up agentic accounts that first build karma and trust through valid contributions, then are deployed autonomously in harmful ways. We also recently had to ban an account on the all-contributors bot, which I maintain, that was clearly an agent. It commented frivolously on issues and pull requests in an attempt to "review" them, and it submitted dozens of pull requests for issues that hadn't yet been triaged for viability. All of this happened within hours to days.

## Don't just call it AI slop

It is easy to dismiss a low-quality pull request as "AI slop." Some participants pushed back on that label. One maintainer said the real question is whether the contributor is willing to invest their energy in engaging with the project.

Assuming AI use is the problem can misjudge a newcomer who wants to get involved. Rejecting their work outright as "slop" doesn't help them. They may simply need guidance on using AI tools thoughtfully. That is a chance to connect and help a well-intentioned contributor build real skills.

There is a real tension here. Many AI-fueled contributions strain maintainers, and that strain can understandably leave them shorter and less patient with new contributors. It is hard to know where to invest limited time, and whether the person on the other end is a human who cares about the process and learning, or an agent building credibility. But dismissing contributions too quickly risks turning away someone who genuinely wants to help.

## What projects are trying

Participants agreed on one point: banning AI tool use altogether is the wrong approach. A ban doesn't stop people from using these tools. It pushes that use out of sight, and contributors become less likely to disclose it. That makes the community less open, honest, and secure.

The maintainers in our group preferred flexible guidelines to strict rules and policies. Approaches included:

* Open an issue before opening a pull request, so a human conversation happens before any contribution. Connect first.
* Disclose AI use, including when the output hasn't been fully reviewed.
* Hold quality constant. The standard is the same whether or not a tool was used. If an AI-assisted contribution is high quality, maintainers accept it. Licensing is a separate consideration that came up only briefly in this conversation.
* Verify a human who cares about the project. One maintainer described asking contributors to attend a meeting to show they are a human who cares about the project. Talking to someone in real time is one of the few remaining ways to build accountability.

That last approach has a cost. The maintainer had spent years lowering barriers to contribution and is now working to raise them. Protecting maintainers and welcoming newcomers pull in opposite directions.

Participants also noted that contributions aren't only code. Outreach, documentation, and community work count, and they are harder to measure.

## What we're taking forward

This pilot gave us questions to test at scale:

* How common is it to not know whether a human is on the other end?
* Do contributors and maintainers see the same interaction differently?
* Which policy approaches reduce strain, and which just move it?

Behind each of these is the need we heard at the start: to see the human on the other side.

If you maintain or contribute to open source, [sign up for the survey and upcoming focus groups](https://forms.gle/yTNXwQWQC4dLvErB7). That signup is part of the [Sloan-funded research](/blog/ai-tools-research-sloan-funding.html) this pilot belongs to. Our next post covers why people adopt these tools and where their views split.
