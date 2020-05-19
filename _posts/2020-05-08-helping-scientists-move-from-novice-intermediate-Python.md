---
layout: single
title: "Helping scientists move from novice to intermediate Python programmer"
excerpt: "Developing reusable code and tools is not easy. This post discusses how we can make it easier for  scientists to move from novice to intermediate level of writing scientific software with Python."
author: "David Nicholson"
permalink: /blog/helping-scientists-move-from-novice-intermediate-Python
header:
    overlay_color: "#333"
    caption:
categories:
  - python
  - community
  - mentoring
---

*Note: I started writing this post before we were in the middle of a global
pandemic, which now seems like it was several centuries ago.
I proposed, somewhat tongue-in-cheek, a Virtual Worldwide
Research Software Engineer Mentoring Network. Now, in the face of the pandemic,
groups like the Carpentries are pivoting towards remote workshops.
I guess I'm saying, maybe it's not such a crazy idea after all.*

## How Do Scientists Using Python Organize Their Code?

If you're reading this blog, you might feel like you have a pretty good
answer for that. But how many examples could you show to a researcher
in your field that's new to coding? Would those examples stand on their own?
Imagine you're a grad student who used Matlab in undergrad, and you
have just worked your way through the Jupyter notebooks in
<a href = "https://github.com/jakevdp/WhirlwindTourOfPython" target="_blank">
<!-- markup clean_ -->A Whirlwind Tour of Python</a>,
and now you're facing a repository on Github that reproduces
the results of a paper.
Can you make sense of all the "development cruft"?
By which I mean the `setup.py`s (or <a href = "https://snarky.ca/clarifying-pep-518/" target="_blank">`pyproject.toml`s</a><!-- markup clean_ -->)
and the `environment.yml`s cluttering up the root of the
project? Why do you think the person who wrote this code decided
to have a `util.py` module in their `data` sub-package
*and* a separate sub-package just called `util`?
(That person was me. Sorry.
<a href = "https://breadcrumbscollector.tech/stop-naming-your-python-modules-utils/" target="_blank">
<!-- markup clean_ -->I now know that's not such a great idea.</a>)

## Why Should You Care?

Let me tell you where I'm coming from with this intro--maybe some of
my experience will sound familiar to you.
Hey, I'm David, and I've been contributing to PyOpenSci
since I found out about the group at their 2019 SciPy Birds of a Feather
event. The group's mission makes a lot of sense to me, and lines up with
a lot of other activities I've been involved in, like the
<a href = "https://data-science-for-scientists-atl.github.io/" target="_blank">
<!-- markup clean_ -->graduate data science group</a>
at my home institution, Emory University.
Which is where I got the initial idea for this blog post. Our group
runs Software Carpentry workshops, and right after the last one,
I led a session on "Python 102", about the basics of organizing code
(based on this excellent site
<a href = "https://python-102.readthedocs.io/en/latest/packaging.html#" target="_blank">
<!-- markup clean_ -->Python 102</a>
which I came to through
<a href = "https://merely-useful.github.io/py-rse/py-rse-package-py.html" target="_blank">
<!-- markup clean_ -->this site</a>).
At the end of the session, one of our group members told me it was helpful,
but asked me if I could point her to examples of real research projects,
so she could get a better idea of what code in our field looks like.

It really bothered me that I couldn't give a good answer to that question.
I think I have a good idea of *why* I couldn't. I'm no expert.
In terms of writing research code, I would describe
myself now as somewhere between "novice" and "competent practitioner"
![The Carpentries skill level](https://carpentries.github.io/instructor-training/fig/skill-level.svg)
I develop a software library, and a handful of related tools,
and I have a couple papers in progress where I have
forced myself to make everything as reproducible as possible.
But most of what I know is from hard-won trial-and-error.
*Even though I am a trained Carpentries instructor, and I have way more
exposure to these things than a random sample of biomedical graduate students.*
For example, it really only dawned on me in the last year, that, hey,
that Hadley Wickham person was really onto something, and I should just use
<a href = "https://vita.had.co.nz/papers/tidy-data.pdf" target="_blank">
<!-- markup clean_ -->tidy data</a>
format whenever I can. Even for something that feels less like an
analysis and more like "data munging", like splitting a dataset into
training and test sets for training a machine learning model.
Turns out that it's easier to do the final analysis of your models
if your data is tidy from the get-go.
Before I woke up to the beauty of tidy data, I spent a lot of time  
writing functions to
<a href = "https://github.com/NickleDave/ML-comparison-birdsong/blob/master/experiment_code/generate_summary_results_files_linsvm_svmrbf_knn.py" target="_blank">
<!-- markup clean_ -->pack Numpy arrays into Python dictionaries</a>.
Which in turn led me share my data by
<a href = "https://github.com/NickleDave/ML-comparison-birdsong/blob/a243277c9e1866e633f46a92c439a20ca548edaa/experiment_code/make_json_file_of_all_results.py#L13"
taget="_blank">
<!-- markup clean_ -->dumping a bunch of Numpy arrays into .json files (shudder)</a>.
That wasn't *wrong* necessarily, but it's not *great*.
Especially when I could have replaced all my
bespoke, handmade, Numpy dictionary dumping functions
with a single method call: `df.to_csv()`
This brilliant insight only came to me after finding out the hard way that
my other approaches were not so great, after weeks of drilling down
on unexpected results and sniffing out the source of bugs. It also came to
me only after cross-pollinating with R people who learn to think Tidy
almost by default (assuming they became R converts after
the advent of the Tidyverse).

## How Can We Help Scientist-coders Move from Novice to Expert?

Hopefully you can see why experiences like this
make me wonder what other things we can do as a (PyOpenSci) community
to help other scientists avoid my growing pains.
Of course, the Carpentries and other similar organizations have already made
tremendous strides in teaching computational skills to novice scientist-coders.
I see less being done beyond this basic level of computational literacy,
although I'd be happy to learn that I'm wrong.
What do I think we should do about it (besides write long-winded blog posts)?
Basically I see two areas we could focus on as a PyOpenSci community
to further help scientist-coders move efficiently from novice to intermediate.

The first area is research domain specific.
How can we help a relative newbie answer questions like:
what libraries do people in our domain usually use?
For some fields this is fairly obvious, e.g. astrophysics, but for
other areas where Python tools are comparitively new--say, earth science,
 economics, myriad subfields of biomedical science--I think we could do more
 to help connect researchers to the tools.

The second area is Python specific.
How can we help new research software engineers answer questions they will
face as they move beyond writing scripts to developing packages, tools,
and full-fledged libraries.
The answers to many of these questions are still more art than science.
Questions like:
- How object-oriented should my code be? Is it worth implementing some sort of
  inheritance in my code base where I sub-class a base class?
- When should I use sub-packages? Will it make my namespacing more informative?
- Why would I ever want an `__all__` statement in my module?

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
For example, my go-to for organizing projects is
<a href = "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5480810/#sec009title" target="_blank">
<!-- markup clean_ -->Good Enough Practices in Scientific Computing</a>
and as for research software engineering, I am definitely learning a lot from
<a href = "https://merely-useful.github.io/py-rse/py-rse-package-py.html" target="_blank">
<!-- markup clean_ -->the Merely Useful site resources</a>.
And I am also learning a lot from the amazing
<a href = "https://the-turing-way.netlify.app/introduction/introduction" target="_blank">
<!-- markup clean_ -->Turing Way</a> handbook.
The audience I'm imagining for this post is someone who I assume
cares enough to read the PyOpenSci blog, and who knows a researcher *y*
in a specific field *z* with enough knowledge to write
some beginning scripts and code.
But that acquaintance *y* doesn't have a good handle on what packages
to use, and how best to make all those packages and libraries work together.
How do you and I help **that** person?

I can think of a couple of solutions for this. I have a feeling that people
that are much smarter than me have already have spent a lot of time
working on solutions for this. But since I am a scientist,
I enjoy finding out how wrong I am. So here I will outline two straw man
solutions, and I hope people will respond to them.

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
<a href = "https://www.rdocumentation.org/packages/miniCRAN/versions/0.2.12/topics/makeDepGraph" target="_blank">
<!-- markup clean_ -->`makeDepGraph`</a>
But we are not there yet.

You might also say, justifiably, aren't these curated collections
springing up organically? Sure, *sort of*.
I mean, don't I go to
<a href = "https://github.com/jupyter/jupyter/wiki/A-gallery-of-interesting-Jupyter-Notebooks" target="_blank">
<!-- markup clean_ -->Ye Olde Gallery Of Interesting Notebooks</a>
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
<a href= "https://pyopensci.discourse.group/t/real-world-repo-packs-looking-for-examples/151"> PyOpenSci discourse.</a>

### Straw Man Solution Number 2: the Worldwide Research Software Engineer Mentoring Network

But again, showing our newbie researcher coder some examples feels like
just the *start* of helping them
<a href = "https://carpentries.github.io/instructor-training/02-practice-learning/" target="_blank">
<!-- markup clean_ -->progress from novice to expert</a>.
So what do you do after that start?
One way to bootstrap this kind of knowledge until it becomes more widespread
would be a mentoring program.
What would such a mentoring program look like?
Well, we want something that achieves similar goals, helping researchers  
move forward with code more efficiently, but let's do it one-on-one:
basically pair one scientist-coder with another who has more
experience. A formal process for them to follow could be built on
<a href = "http://carver.cs.ua.edu/Slides/URSSI-WinterSchool-PeerCodeReview.pdf" target="_blank">
<!-- markup clean_ -->code reviews</a>.
(You can file "code review" under "things people with more experience already
knew about but I just discovered"--I learned about code reviews
recently at the URSSI Winter School; main repo that I included that presentation
from <a href = "https://github.com/si2-urssi/winterschool" target="blank">is here</a>).
More precisely, I'm picturing a decentralized network of mentors that could
connect with scientist-coders all over. That's right, I'm talking about the
Worldwide Research Software Engineer Mentoring Network.
I'll say more about why it would be decentralized below.

But first let me say this solution of mentoring may not be such a straw-man.
We have talked about similar ideas at PyOpenSci meetings before.
And I was excited to hear Martin Héroux and Michael Kennedy bring up the
same idea on this episode of the
<a href="https://talkpython.fm/episodes/show/252/what-scientific-computing-can-learn-from-cs" target="_blank">
<!-- markup clean_ --> Talk Python podcast.</a>

<a href="https://twitter.com/nicholdav/status/1235336475773939713" target="_blank">
<!-- markup clean_ --> I tweeted about it</a>
and the tweet got enough likes and retweets (for a Very Serious Tweet)
that it made me think this at least sounds like a *nice* idea to other people.

Of course, such mentoring program would line up perfectly
with the mission of the Carpentries and other groups working in this
space, such as Mozilla Science.
And as Hannah Aizenmann pointed out on Twitter, yes, this mentoring
is already happening at a lot of universities
<a href="https://twitter.com/story645/status/1235594559620558848" target="_blank">
<!-- markup clean_ -->with these programs in place.</a>


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
and mentoring in their own labs to do additional (unpaid) labor,
<a href="https://twitter.com/story645/status/1235591579311771649" target="_blank">
<!-- markup clean_ -->by mentoring people virtually.</a>
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
<a href="https://increment.com/software-architecture/architecture-for-generations/" target="_blank">
<!-- markup clean_ -->passing on institutional knowledge.</a>

Different domain, same problem.
So I actually think there might be something to my idea for a
Worldwide Research Software Engineer Mentoring Network.
Here is where I hope people will comment: on our Discourse, at our meetings.
Maybe even in the Twitterverse (but please let's try to move quickly to
a different format). If you also have ideas and/or strong feelings about this,
 please come talk with us.
