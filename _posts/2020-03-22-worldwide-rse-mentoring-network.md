---
layout: single
title: "Guess it's time for the Worldwide Research Software Engineer Mentoring Network"
excerpt: "Developing reusable code and tools is not easy. This post discusses the benefits of a mentoring network to support better practices for scientific software."
author: "David Nicholson"
permalink: /blog/worldwide-mentoring-network-for-scientific-software
header:
    overlay_color: "#333"
    caption:
categories:
  - events
---

## How Do Scientists Using Python Organize Their Code?

If you're reading this blog, you might feel like you have a pretty good
answer for that. But how many examples could you show to a researcher
in your field that's new to coding? Would those examples stand on their own?
Imagine you're a grad student who used Matlab in undergrad, and you
have just worked your way through the Jupyter notebooks in
<a href = "https://github.com/jakevdp/WhirlwindTourOfPython", target="_blank">A Whirlwind Tour of Python</a>,
and now you're facing some random repository on Github that reproduces
the results of a paper.
Can you make sense of all the "development cruft"?
By which I mean the `setup.py`s (or <a href = "https://snarky.ca/clarifying-pep-518/", target="_blank">`pyproject.toml`s</a>)
and the `environment.yml`s cluttering up the root of the
project? Why do you think the person who wrote this code decided
to have a `util.py` module in their `data` sub-package
*and* a separate sub-package just called `util`?
(That person was me. Sorry.
<a href = "https://breadcrumbscollector.tech/stop-naming-your-python-modules-utils/", target="_blank">I now know that's not such a great idea.</a>)

## Why Do I Care?

Let me tell you where I'm coming from with this intro.
Hey, I'm David, and I've been doing what I can to contribute to PyOpenSci
since I found out about the group at their 2019 SciPy Birds of a Feather
event. The group's mission makes a lot of sense to me, and lines up with
a lot of other activities I've been involved in, like the <a href = "https://data-science-for-scientists-atl.github.io/", target="_blank">graduate data science group</a>
at my home institution, Emory University.
Which is where I got a germ of an idea for this blog post. Our group
runs Software Carpentry workshops, and right after the last one,
I led a session on "Python 102", about the basics of organizing code
(based on this excellent site
<a href = "https://python-102.readthedocs.io/en/latest/packaging.html#", target="_blank">Python 102</a>
which I came to through <a href = "https://merely-useful.github.io/py-rse/py-rse-package-py.html", target="_blank">this site</a>).
At the end of the session, one of our group members told me it was helpful,
but asked me if I could point her to examples of real research projects
so she could get a better idea of what code in our field looks like.

It really bothered me that I couldn't give a good answer to that question.
I think I have a good idea of *why* I couldn't. I'm no expert.
In terms of writing research code, I would describe
myself now as somewhere between "novice" and "competent practitioner"
[image]: https://carpentries.github.io/instructor-training/fig/skill-level.svg
I've attempted to write two software libraries, one of which is now
finally almost useful, and I have a couple papers in progress where I have
forced myself to make everything as reproducible as possible.
But most of what I know is from hard-won trial-and-error.
*Even though I am a trained Carpentries instructor and I have way more
exposure to these things than a random sample of biomedical graduate students.*
For example, it really only dawned on me in the last year, that, hey,
that Hadley Wickham person was really onto something, and I should just use
[tidy data](https://vita.had.co.nz/papers/tidy-data.pdf)
format whenever I can, even for something that feels less like an
analysis and more like "data munging", e.g. splitting a dataset into
training and test sets for machine learning.
Before I woke up to the beauty of tidy data, I spent a lot of time  
writing functions to pack Numpy arrays into Python
dictionaries. Which in turn led me share my data by
dumping a bunch of Numpy arrays into .json files. That wasn't *wrong*
necessarily, but it's not *great*. Especially when I could have replaced all my
bespoke, handmade, Numpy dictionary dumping functions
with a single method call: `df.to_csv()`
This brilliant insight only came to me after finding out the hard way that
my other approaches were not so great, especially when I had to drill down
on unexpected results and sniff out the source of bugs. It also mainly came to
me by cross -ollinating with R people who learn to think that way
almost by default (assuming they became R converts after
the advent of the Tidyverse).

## How Can We Help Scientist-coders Move Faster from Novice to Expert?

Hopefully you now can see why it seems to me there has to a better way to help
scientist-coders learn. Even the dumb ones like me.
I guess I'm asking, are there things we can do as a (PyOpenSci) community
to further help other scientist-coders avoid my pain. And not just general
stuff like what are best practices for cleaning and transforming data. I'm
almost more worried about things that are domain specific. How can we help a
relative newbie answer questions like:
what libraries do people in our domain usually use?
And also questions that feel more Python specific, like:
When should I use sub-packages?
Why would I ever want an `__all__` statement in my module?

Again, if you are reading this blog, there's a good chance you know exactly
the right combination of search terms to start to answer those questions.
Given half an hour, you could find a handful of
good examples of, say, GitHub repositories associated with papers in
your domain of science. I know I could do the same. (Replace GitHub repo
with Zenodo entry, or OSI project, or whatever your preferred flavor of open is.)
*But* there's probably a ton of expert knowledge you've built up, and
maybe kind of even forgotten that you have, that guides you as you select those
handful of good examples. **How do we get most efficiently get scientists
that are *relatively new* to writing research code to that level of expertise?**

## Straw Man Solutions

First, let me say I am fully aware there are plenty of great resources to help
researchers understand best practices for organizing computational research
projects, and for developing research software libraries.
For example, my go-to is
[Good Enough Practices in Scientific Computing](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5480810/#sec009title)
and I am definitely learning a lot from
<https://merely-useful.github.io/py-rse/py-rse-package-py.html>.

The audience I'm imagining for this post is someone who I assume
cares enough to read the PyOpenSci blog, and probably knows a researcher *y*
in a specific field *z* with enough knowledge to write
some beginning scripts and code, but doesn't have a good handle on what packages
to use, and how best to make all those packages and libraries work together.
How do you and I help **that** person?

I can think of a couple of solutions for this. I have a feeling that people
that are much smarter than me have already have spent a lot of time
working on solutions for this. But since I am a scientist,
I enjoy finding out how wrong I am. So here I will outline two straw man
solutions, and I hope people will comment on them.

### Straw Man Solution Number 1: the Carefully-Curated Collection of Domain-Specific Scientific Python Projects

The first straw man solution is to provide newbie scientist-coders with a
collection of Python projects, specific to their domain, carefully curated by
people with more experience.
You might ask, justifiably, "isn't that what PyOpenSci is?"
If a project goes through the PyOpenSci process, isn't it kind of *by definition*
a carefully-curated domain-specific scientific Python project?
I think the group as a whole is still open to different answers, but if we are
following our own
[guidelines about what in scope](https://www.pyopensci.org/dev_guide/peer_review/aims_scope.html),
and the model of ROpenSci,
then our group is more focused on building tooling that helps you,
the scientist with domain expertise, get your job done without having to
reinvent the wheel.

And, yeah, as we continue to build that tooling, there will be more and more
projects that make use of it, and we could in some automated way see all the
GitHub repos linked with papers that use some `DomainToolX`. Again, if we are
following the lead of ROpenSci, we'd have something like
[`makeDepGraph`](https://www.rdocumentation.org/packages/miniCRAN/versions/0.2.12/topics/makeDepGraph)
But we are not there yet.

You might also say, justifiably, aren't these curated collections
springing up organically? Sure, *sort of*.
I mean, don't I go to
[Ye Olde Gallery Of Interesting Notebooks](https://github.com/jupyter/jupyter/wiki/A-gallery-of-interesting-Jupyter-Notebooks)
every time I give an intro talk, and look for something field specific that
I hope will catch people's interest?
But again, I think this is just the *start* of giving someone that is
relatively new to writing research code an idea of how to put their project
together. I want there to be so many examples that I could really crunch some
numbers on them. I want to be able to calculate a meaningful statistic about
the number of papers on topic $a$ using function $b$ from library $c$.

So the straw man solution is to start some group that curates a
collection of scientific Python projects.
It bothered me so much that I didn't have a good answer for that student that
asked for examples that I made an attempt at this, that you can see in the
PyOpenSci discourse here:
<https://pyopensci.discourse.group/t/real-world-repo-packs-looking-for-examples/151>

### Straw Man Solution Number 2: the Worldwide Research Software Engineer Mentoring Network

But again, showing our newbie researcher coder some examples feels like
just the *start* of helping them
[progress from novice to expert](https://carpentries.github.io/instructor-training/02-practice-learning/).
So what do you do after that start?
One way to bootstrap this kind of knowledge until it becomes more widespread
would be a mentoring program.
What would such a mentoring program look like?
Well, we want something that achieves similar goals, helping researchers  
move forward with code more efficiently, but let's do it one-on-one:
basically pair one scientist-coder with another who has more
experience. A formal process for them to follow could be built on
[code reviews](http://carver.cs.ua.edu/Slides/URSSI-WinterSchool-PeerCodeReview.pdf).
(You can file "code review" under "things people with more experience already
knew about but I just discovered"--I learned about code reviews
recently at the URSSI Winter School; main repo that I included that presentation
from is here: <https://github.com/si2-urssi/winterschool>).
More precisely, I'm picturing a decentralized network of mentors that could
connect with scientist-coders all over. That's right, I'm talking about the
Worldwide Research Software Engineer Mentoring Network.
I'll say more about why it would be decentralized below.

But first let me say this solution of mentoring may not be such a straw-man.
We have talked about similar ideas at PyOpenSci meetings before.
And I was excited to hear Martin Héroux and Michael Kennedy bring up the
same idea on this episode of the Talk Python podcast:
<https://talkpython.fm/episodes/show/252/what-scientific-computing-can-learn-from-cs>  
I tweeted about it
https://twitter.com/nicholdav/status/1235336475773939713
and the tweet got enough likes and retweets (for a Very Serious Tweet)
that it made me think this at least sounds like a *nice* idea to other people.

Of course, such mentoring program would line up perfectly
with the mission of the Carpentries and other groups working in this
space, such as Mozilla Science.
And as Hannah Aizenmann pointed out on Twitter, yes, this mentoring
is already happening at a lot of universities with these programs in place.
https://twitter.com/story645/status/1235594559620558848

But that is exactly the problem:
if your university already has a thriving group of labs that support
multiple Carpentries workshops a semester, it probably *also* has
a community of practice where grad students can go to get guidance.
No grad student is left to their own devices, sharing their data in a .json
file because no-one told them about tidy data and CSVs (*points to self*).
Can we bootstrap ourselves out of this rich-get-richer situation somehow?

Enter the decentralized Worldwide Research Software Engineer Mentoring Network.
What makes this solution a straw man is that it would
be asking people who are already teaching Carpentries workshops
and mentoring in their own labs to do additional (unpaid) labor, by
mentoring people virtually.
https://twitter.com/story645/status/1235591579311771649
So the answer, of course, is for all universities to immediately institute
data scientist fellowships for graduate students; fellowships that encourage
those students to mentor locally. And while we're at it, let's institute
required computational literacy courses for all graduate students.
And universal health care.
Okay, clearly I've replaced my straw man solution with something even more
extreme, or at least slightly tongue-in-cheek.
It's fine, I already know I'm not electable.

But in all seriousness, I found myself returning to this idea of
mentoring again as I read this article from
Vicki Boykis about how the tech industry doesn't do the greatest job of
passing on on institutional knowledge:
https://increment.com/software-architecture/architecture-for-generations/
Different domain, same problem.
So I actually think there might be something to my idea for a
Worldwide Research Software Engineer Mentoring Network.
Here is where I hope people will comment: on our Discourse, at our meetings.
Maybe even in the Twitterverse (but please let's try to move quickly to
a different format). If you also have ideas and/or strong feelings about this,
 please come talk with us.
