---
layout: single
title: "Friends don't let friends package alone- my talk at PyCon 2024"
excerpt: "."
author: "Leah Wasser"
permalink: /blog/python-packaging-friends-dont-let-friends-package-alone.html
header:
  overlay_image: images/blog/2024/may/pycon-us-2024.png
  overlay_filter: 0.6
categories:
  - blog-post
  - community
classes: wide
toc: true
comments: true
---

## <i class="fa-solid fa-heart"></i>  Python packaging and community: my first talk at PyCon US 2024

I started thinking about Python packaging in 2018 during our first pyOpenSci community meetings. To me, as someone who was teaching Python to beginners, and dabbling in creating and maintaining packages myself to support teaching, packaging was this somewhat undefined space. I wasn’t sure where to begin, what sources were truly authoritative. I knew that pyOpenSci needed to create a community peer review process that:

* enforced “good enough” practices in scientific Python packaging that were
* not too overly binding but also set users up for success.

I also knew that:

*  We needed to create some sort of packaging guide that set up expectations for that review process. And that
* I wasn't the lead expert in the room. Thus, needed people from across the (scientific) Python ecosystem and beyond to build consensus and define what was “good enough” practices.

But how do we empower people to navigate a tricky if not complex ecosystem empowered by choice?

## Choice is a value in the Python ecosystem

In the Python ecosystem, choice is a value. Why? Because the Python language is used across so many domains. And further, it’s a “glue” language. This means that it can wrap around other languages like C - making it even more flexible.

This flexibility warrants choice. It’s almost by design.

And I value choice too.

But choice isn’t a beginner friendly approach as it leaves too much room for uncertainty as a beginner. And that just makes learning more stressful.

As my mentor and colleague Carol says
"choice is an opportunity for someone to make the wrong decision"

Years later, what started out as a generic Python development guide, was transformed into what’s now the pyOpenSci Python package guide.

* A guidebook that has 55 contributors as I’m writing this post today.
* A guidebook that has color and graphics and that leads Pythonistas down a singular, opinionated path to Python packaging success.
* A guidebook that breaks down pieces and processes into their fundamentals and explains them using digestible words.

The pyOpenSci path is not the only path. It is just a path that works and enables early wins for scientists and others using Python.

If you're reading this and you have your own path, that's ok too.

This guidebook was created not by a single or small group of Python packaging experts. It was create by a community effort that aimed to build consensus around an approach to pure Python packaging that would **yield user success**. A guide that acknowledged a suite of fantastic tools across the ecosystem while still leading users down a streamlined path.


## My talk at PyCON US 2024 – How did we create such a guide?

A big highlight of this year was being selected to give a talk on the process of creating this guidebook at pyCon US in Pittsburgh, PA. My talk called:

“Friends don’t let friends package alone”

## Me and the child-like imposter inside

Giving this talk felt like a huge step for me. Imposter syndrome - the feeling like I didn't belong, that I wasn't technical enough to build pyOpenSci - has always been my reality. As a Pythonista, coder, data scientist, and tech geek, I’m very aware of how much more others know than I do about lots of different topics—including packaging.

In my talk I even shared my experiences as a maintainer of stavalib. How challenging it was to figure out the best packaging infrastructure for our team. However, that experience also empowered me to better understand the painpoints in the ecosystem from a "beginner lense". From a lense of "I just need to create a package and publish it to PyPI regularly".

My angle on tackling hard technical problems to help beginners, has always been about breaking things down into their simplest forms.

I thrive on those “ah ha” moments where a tough concept clicks.

And someone gets it.

And sometimes that someone is me (before I can teach the topic to others)!

I wasn’t sure what it would be like to be on that big pyCon US presentation stage, in that big room full of chairs. Would they be empty?

I felt my body trembling even minutes before my talk began. But once I got up on the stage, I was able to focus on my friends sitting in the front rows

Carol, Hugo, Jeremiah, and Inessa - they were all there.

Carol told me to lean into the teacher inside of me. I know that teacher best. My body calmed because I really do care about helping people. I remembered why I was there. My friends got me through it.

You can watch the talk here: [Link to video].


## So what about packaging with friends?

The essence of my Python packaging talk was the work that I and more importantly our pyOpenSci community have done over the past year and a half to demystify and help _people_ navigate the complex Python packaging ecosystem.

It was about people helping people tackle challenging things.

Python packaging matters because scientists need open software to create open and reproducible workflows. To build upon each other's work. To tackle the world's hardest challenges more efficiently and effectively.

Among other things, pyOpenSci reviews software <link> as a constructive way to help scientists both create better software and get credit for the important work they are doing.

The pyOpenSci community has created a Python package guide that harnesses the expertise, opinions, and experiences of 55 people. This guide provides:

* a beginner-friendly overview of the packaging ecosystem combined with a
* start-to-finish tutorial that uses Hatch <link> to create a Python package.

Python is known for its incredible community, so it only made sense to leverage that collective knowledge and experience to create a packaging guide. Packaging doesn’t have to be complex. Friends can help.

The talk can be broken down into 4 takeaways:


### People can help (_surprise_!)




![alt_text](images/image1.png "image_tooltip")


When tackling some of the most thorny technical Python problems, people can help. This might mean:



* Learning together by working in a small supportive group to create your first Python package;
* Bringing in experts to review and vet online resources to ensure they are accurate and accessible that support scientists worldwide in their packaging journey.
* Running a constructive peer review process where people volunteer their time to provide feedback on a package’s usability, function, and structure.

In creating the guide, we knew we were tackling hard, complex technical problems. But also there is a tremendous amount of collective knowledge in this community that can be harnessed and focused on the problem at hand. By focusing people on the users of the guide first, rather than tools, we were able to build consensus.

We were able to move forward together.


### Create early wins for users





![alt_text](images/image2.png "image_tooltip")


As an educator, I’ve always known that the best way to empower someone new to any topic is to create a learning environment where they quickly make progress. I’ve [collected data on what approaches work better than others](https://osf.io/preprints/osf/xdj4z). I’ve explored how certain presentations of information empower, while others break people down triggering imposter syndrome and even isolation within a science field.

The key is early wins.

Early wins empower users to:

* Want to do more
* Feel like they belong and can be successful learning the skill at hand
* Try again and expand their knowledge
* Even help their colleagues which is the biggest win of all. \


High quality documentation (or tutorials) helps users achieve this by providing quickstarts and resources that ensure they can get up and running quickly and have early positive experiences.


### Fundamentals First



![alt_text](images/image3.png "image_tooltip")


When teaching beginners, break things down to their fundamental concepts. In the case of packaging, this meant explaining pure Python packaging in its most basic form, without immediately discussing tools. Notice that the diagram below doesn’t discuss tools at all!.



<p id="gdcalert4" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image4.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert5">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image4.png "image_tooltip")


While some may think that this approach is over simplified, it’s not. The idea here is that you begin with digestible information that empowers a learner. You help them understand that they can do this! And then, and only then, you add more complexity when they are ready to absorb it.

This also opens the door wide to early wins.


### Just say no to TMO

Avoid TMO—Too Many Options or Too Many Opinions at all costs when teaching beginners. Options are great, but when someone is new to a topic, it’s best to give them a straightforward path to success.

Early on in creating our packaging guide, we found contributors, often quite expert in the packaging ecosystem, arguing about the best tools and best practices. Since we invited many people with different levels of experience to review our content, these arguments pushed some people away and created an unhealthy environment. Moderating these conversations to focus on the users and their needs, rather than debating tools, was critical. This approach helped create a truly beginner-friendly guide and fostered a review environment that was safe and inclusive, where both beginners and experts could contribute.

&lt;Todo - add “Too Many Options and Too Many Opinions to this graphic - and our logo>



<p id="gdcalert5" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image5.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert6">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image5.png "image_tooltip")



### Friends don’t let friends package alone

When my talk finished, I felt this sense of relief but also I felt love, support and deep passion for this topic and the community. It’s more than just packaging. It is about empowering people with skills that will help them tackle the biggest scientific challenges that we face as humans. Science is about data. And to process data we need tools - open tools that are accessible for scientists to learn and use. It’s about carving out space for scientists to build and use these tools. And also to make space for people who may feel like outsiders because of who they are, to participate.

I’m excited to have the privilege of moving the pyOpenSci mission forward. Of getting to connect with so many amazing people. I’m excited to continue to facilitate and support better science through better software and to empower more people with skills. And maybe, through this talk, a little piece of that child-like imposter within me has been chipped away!

I’m human too. I need friends too.
