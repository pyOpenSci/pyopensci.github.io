---
layout: single
title: "Crafting pyOpenSci: creating a vibrant, supportive, and thoughtfully open (science) community"
excerpt: "Dive into my journey of nurturing a vibrant, inclusive, pyOpenSci community. Learn about how things started, how the organization evolved, what we learned, and where we are today. Experience the evolution, challenges, and victories that have shaped **pyOpenSci** into today's thriving community."
author: "Leah Wasser"
permalink: /blog/how-pyopensci-got-started.html
header:
  overlay_image: images/headers/scipy-2024-workshop.png
  overlay_filter: rgba(20, 13, 36, 0.8)
categories:
  - blog-post
  - community
classes: wide
toc: true
comments: true
---


<div class="notice" markdown = "1">
## TL;DR

*
</div>
I founded pyOpenSci in 2018. The idea was born from a fusion of frustration and
inspiration. As someone deeply involved in teaching open science with Python and
who had taught R previously with many more successes, I was surprised by the
challenges I experienced. At the same time, I clearly understood what a powerful
language Python is and how valuable knowing it would be to students' careers.
After all, it's consistently been a top 10 data science favorite (top 1!) language
according to Stack Overflow (link) and other surveys.

The cohesiveness that I had experienced in the R community wasn't as present in
the scientific Python ecosystem. These experiences sparked a desire in me to
create a more supportive and accessible community for scientists so that they
could be empowered to fully embrace Python as a tool—especially given its use in
the workplace.

What began as a small initiative, with meetings of 3-4 people in 2018, has since
evolved into a thriving, inclusive community that is:

* x packages reviewed
* editorial team of XX
* over 250 contributors
* formally partnered with Astropy and the Journal of Open Source Software (JOSS)

pyOpenSci is a vibrant community that has grown through persistence, collaboration,
and learning from successes and setbacks.

This blog post will overview how we got to where we are today.

## The why behind creating pyOpenSci -- Concept and history

I've taught data science for a long time. When I built the [Data Skills program at NEON](TODO: LINK HERE), I focused on teaching R because it was the go-to language for ecologists. Later, when I created the Earth Analytics education program at CU Boulder,

I initially taught R but quickly realized that a significant portion of the earth science community used Python. Data I collected from industry and academic sources confirmed that Python was the most in-demand language for scientists seeking professional jobs

[TODO: add zenodo citation and link to the report and add results plot].

### Transitioning from R to Python to teach earth and environmental data science

Transitioning the Earth Analytics program to Python deepened my understanding of the challenges students face at all levels when learning Python, particularly for open science applications. Though necessary, this shift also revealed new obstacles for me as an educator teaching scientists new to coding and eager to learn open science best practices to overcome.

### Navigating the Transition to Python

Transitioning from teaching spatial earth data science with R to Python was difficult. The thousands of packages to select from to teach on PyPI felt overwhelming. I spent significant time deciding which ones to incorporate into our online, open curriculum. Once I found the right package, the next hurdle was learning:

* how to use these packages effectively
* how to effectively teach them to beginners.

I selected packages carefully based on the package's:

* ease of use
* quality of documentation
* maintenance

### Python specific pain points that I experienced

Unfortunately, I often found the package documentation either too technical or missing, leaving me to figure out how to use the packages on my own. This process usually led to extensive dialogues with package maintainers as I sought to understand and clear up bugs. Learning how to process spatial data in Python made me feel like a beginner again. I could process spatial data with my eyes closed using R, Matlab and even ArcGIS / QGIS.

What stood out to me during this transition was that I had to write more code using Python to do the same things I could do using less code in R. This was largely because R had a lot of "Wrapper" packages that made normal plotting ana anlayiss operations straight forward.

Combine the experience of writing more code with bugs and navigating the labyrinth of highly / not beginner-friendly technical package documentation left me frustrated.. This, in turn, resulted in my developing relationships with numerous package maintainers who sometimes even used our online lessons to support their documentation; this was an ideal synergy when it happened.

Through these experiences, I realized that developing online lessons in Python for spatial earth data science was a continuous learning and adaptation journey. The challenges encountered along the way were not simply obstacles. I saw opportunities to engage with the scientific open-source Python community to enhance the learning experience for my students and any human trying to learn Python to develop open science workflows.

### Creating my first Python package - EarthPy - to streamline spatial data processing

To address some of these challenges, I created EarthPy, a package designed to simplify standard spatial data processing and visualization tasks. At the time, creating a Python package seemed amorphous - I didn't know what best practices were and I certainly didn't know how to create a package. It was easy to learn in R as there was one way to do it.

I learned to build a Python package by mimicking the infrastructure used by GeoPandas, one of my favorite spatial libraries. The clip module from EarthPy was later upstreamed into GeoPandas (link to PR).

EarthPy's marked the start of my deep dive into open-source software and the scientific Python ecosystem.

## pyOpenSci's foundation - learning from other communities  including rOpenSci, JOSS and the broader scientific Python community

Based on my own experiences, I saw a demand for a community that could support scientists in both creating better packages with beginner-friendly and accessible documentation and finding high-quality packages that had maintainers committed to maintaining them and were well-built and documented. A modified version of the rOpenSci model would be invaluable to scientists in the vast Python ecosystem.

### Learning from and leveraging the work rOpenSci has done

I wanted pyOpenSci to learn from our friends at rOpenSci. After all, the true spirit of open science and open source is about building on each other's work.

rOpenSci was the first to pioneer software peer review processes, allowing scientists to get academic credit for improving software. Their work inspired me. However, I knew we needed to tailor the rOpenSci processes to support the unique needs of the scientific Python community.

This was particularly true when it came to packaging - Phew!

A group even discussed the idea of pyOpenSci at the annual SciPy meeting one year. While I heard there was plenty of enthusiasm in the SciPy meeting room at the time, these ideas never gained traction. I suspect many people were unsure what a Python version of "OpenSci" would look like.


### The R and Python communities are fundamentally different

In my experience, having taught and used both R and Python, this is because the two communities are quite different. The Python community spans numerous applications from web development to xxxxx. Its science part includes many domain-specific sub-communities, with Astropy being the most developed in terms of age and governance / structure.

Because of this:

* There are many different ways to do one thing in Python. In fact, even installing Python presents many options (Conda vs python.org vs...). This choice is valued in the Python community, but it's also a challenge for beginners.
* There are thousands of packages on PyPI (the packaging index from which you can get packages). It can be hard to figure out which one is the best, which is why, in part, we started a peer review of Sofwta (more on that below).
* Python is used much more broadly for many different applications beyond
  science.
* Python has many more approaches and complexities associated with packaging.
* Python is more often used as a "glue" language, meaning it's common for
  scientists to have compiled C and other language extensions in their Python
  code and packages.
* The Python community is larger and generally more dispersed.
* There is not a single core decision-making body within the Python ecosystem. Sure, there are core Python developers who work on making Python the awesome language it is, but...

## Step 1: Early pyOpenSci community meetings - Building pyOpenSci

To try to build momentum around pyOpenSci, I began by holding community meetings.  The first few meetings in 2018 were small and comprised of myself and a few others. Chris Holdgraf, now the Executive Director of [2i2c](https://2i2c.org), was instrumental in the early days and helped me run two community events at meetings (more on that below). We'd also get incredible folks like Filipe Fernandes—a [conda-forge](https://conda-forge.org) maintainer who has since joined our editorial team—and folks from projects like [rOpenSci](https://ropensci.org), who reviews R packages, the [Journal of Open Source Software](https://joss.theoj.org), which reviews and publishes software providing academic credit for any software with a research application, and the [Software Sustainability Institute](https://software.ac.uk).

As weeks passed and we continued to meet, friends told other friends, and our core crew began
to grow ([link to early meeting notes]()).



We slowly built up momentum.

Meetings became increasingly productive, discretely focusing on developing a proof-of-concept scientific Python software peer review process.

Discussions included:

### 1. Community Building and Governance:
The early discussions focused on establishing the structure of pyOpenSci and its governance. We discussed setting up community guidelines and a code of conduct to ensure a welcoming environment for contributors. Even in the early meetings, we emphasized the importance of inclusivity and diversity within the budding pyOpenSci community of practice.

What is a community of practice? A community of practice (CoP) is a group of people
with a shared interest who come together to achieve common goals. In
the pyOpenSci community, our focus is on open science and open source. We engage in
joint activities, help each other with challenges, and share information.
{:: .notice }

### 2. Developing a Python-specific software Peer Review Process:

In many initial meetings, we discussed ways to create a truly Python-centric pyOpenSci peer review process to better support high-quality scientific Python software. The goal was to create a transparent, constructive, non-adversarial review system and guidelines around creating a package. A community-run peer review process would slowly elevate the quality and standards of Python packages over time while making it easier for scientists to find the quality tools they need. And, of course, it was important that the software that we reviewed would be maintained over time and documented in a way that helped beginners harness the full potential of each tool without too much struggle.

### 3. Collaborating with Journal of Open Source Software (JOSS)

Collaboration with the JOSS was a recurring theme too. We wanted to partner with JOSS to allow someone who went through our peer review process to get academic credit for their work.

Why is academic credit so important?
You see, in academic traditionally you can get credit for writing peer reviewed papers. While I'm a deep advocate of scientific research, there are a lot of problems with a system that only values highly technical papers that only other scientists can understand. Related to open source software, this means that the scientists don't get actual "credit" for high quality software that is needed to make data processing more efficient and more open.

Frankly, this lack of credit for important work that is driving open science - system stinks.

JOSS is a journal that reviews software and when accepted, provides a cross-ref enabled DOI. This is different than a DOI you'd get by linking your GitHub repo to a platform like Zenodo <link to how this works>. A cross-ref DOi is connected to a scientist's OrcidID, which is their unique identifier. What does this mean?

It means actual academic credit as a "publication" for the hard work of creating a research-focused open source software tool.

However, pyOpenSci reviews software, our goals are different than those of JOSS.

we care about the python specific packaging painpoints. As such we are developing review guideblines for what makes a sicentific Python software good
we care about long term maintenance of software. While JOSS will publish a paper, they don't necessarily engage with the maintainer or support the maintainer after. As a community of practice, we do
The partnership aimed to streamline the submission and review process across both organizations so pythonista could harness the python specific review process and also post review support of the community while also getting academic credit for their work.

In short - You can submit a package to pyOpenSci; we will review it, and if it's in scope for JOSS< then you can become accepted by JOSS, too. They take our review and only review your software's paper.

This partnership is a true win/win for JOSS and us. It provides a structured pathway for scientific software developers to earn academic credit for their work while also gaining visibility and community support from pyOpenSci.

### 4. Challenges and Strategic Goals

Some of the biggest challenges in peer review revolved around project maintenance. So many scientific Python tools are maintained by one person. We wanted to ensure that the pyOpenSci software ecosystem represented maintained tools that scientists could trust. This meant thinking hard about what happened to a package after it was reviewed.

How could we support maintainers in updating their packages over time?

We knew that this type of effort would require some funding support. Strategic goals included expanding the community's reach, increasing engagement through events, and securing sustainable funding.

### 5. Holding pyOpenSci events and connecting with the community

We also wanted to get the word out about pyOpenSci to encourage new package submissions, and to grow our editorial and reviewer base. After all, at the time, we were just a small group of scientists talking about this community. We discussed holding events at meetings such as SciPy and AGU <add link American geophysical Union meeting>. And we discussed holding maintainer sprints <link to sprints blog. > It's funny to look back at those early meetings, now that we are actually doing all of the things we talked about back then and more!


Even then, we knew that pyOpenSci was about more than reviewing software. It was about supporting science and getting more scientists involved.

We launched software peer review formally in 2019. We initially identified a package to review that was internal to our team—as a prototype. We even tested out the peer-mentor review approach, pairing someone newer to peer review with someone more seasoned to see how it would go.

From there, things took off. Especially as I began to travel to scientific meetings and promote the work. More on that below

## Understanding the community's needs and interests interest: outreach at conferences 2019-2021

Before fully launching pyOpenSci, I trusted my professional instincts that others in the scientific Python ecosystem faced similar challenges to those my students and I encountered. However, I needed evidence from the community to justify pursuing funding for pyOpenSci. I needed the community to tell me what they needed so I  strategically build pyOpenSci to file down those pain points.

To do this, I held several community meetings between 2019 and 2021, including sessions at the SciPy and AGU conferences.

By holding community events at SciPy and AGU, I was able to reach diverse communities to understand their needs. While both communities shared an interest in scientific Python, their focus areas differed

* SciPy attendees are more software-centric
* AGU attendees are generally more science focused with deep roots in the earth and environmental sciences.

Getting input from both the scientific and the scientific Python communities was invaluable in shaping pyOpenSci's direction and ensuring that our efforts aligned with the needs of both software developers and scientists.

### SciPy Meeting 2019 & 2021: A Filled Room and a Lively Discussion Around Peer Review of Scientific Software

In 2019, we held our very first pyOpenSci event—a Birds of a Feather (BoF) session at the SciPy meeting in Austin, Texas. It was me, Chris Holdgraf and Jenny Palomino leading the session. The second event was virtual and co-hosted by the wonderful, David Nicholson.

link - more about scipy - link to 2024 blog

During these events, the goal was to engage the scientific Python community about pyOpenSci and our peer review process and better understand some of the pain points. We held a followup Bof in 2021 but this time in a virtual space given the COVID-19 pandemic was still in full swing.

What is a BoF? A bof is an informal meeting where participants with similar interests gather to discuss a specific topic, often leading to valuable insights and collaborations. If you've been to PyCon before, the Open Space structure is similar to SciPy Bof sessions
{: .notice }

Both SciPy BoFs were well-attended with at least 30-40 people in the room each time. The discussions centered around pyOpenSci's peer review process and the community's pain points. These sessions helped us gauge the community's needs and interests, which were crucial in shaping our initiatives.

## 2019 AGU (American Geophysical Union) Town Hall

In 2019 and again in 2021, I held town halls at the massive AGU meeting. My friend and long time colleague [Chris Holdgraf](https://github.com/choldgraf)

agreed to co-lead the very first in person town hall with me, which was a lot
of fun! We had well over 60 people in the room. At that time, the incredible organization 2i2c was still just a
vision, with efforts underway to make it a reality. And look where it is now.

If you haven't been to AGU before, it's a huge (20,000-25.000 person) international conference. Given my background in earth and environmental science
and remote sensing, this meeting had long been my absolute favorite. It was
where "my people" were—where I could talk for days about sensors and remote
sensing.

The AGU meeting also has a strong bioinformatics track. The town hall
resulted in a full room of geoscientists who cared about Python.

<slides from Mentimeter??>

This experience reinforced that pyOpenSci was not only needed but wanted
within the scientific Python community. From there, our peer review process
began to grow.


In 2019, I also hosted a town hall at the massive AGU (American Geophysical Union) meeting. My long-time colleague and friend, [Chris Holdgraf](https://github.com/choldgraf), co-led the session with me, which was a lot of fun! At the time, 2i2c, the incredible organization Chris would go on to lead, was still in its early stages of becoming a reality.

AGU is a huge international conference with a geoscience focus, aligning closely with my earth and environmental science and remote sensing background. The AGU meeting has always been my favorite—-I could connect with "my people" and talk for days about sensors and remote sensing. This town hall was important because the audience is quite different from that at sciPy. At SciPy you meet a lot of maintainers and tool developers. While there are beginning Pythonistas there, the audience tends to be more technically focused. AGU, on the other hand, is this lovely mixture of earth scientists, geosceintists and also some open source and bioinformatcs folks.

This can be clearly seen in the data we collected
at SciPy over 80% of bof attendees were maintainers or people who had contributed to open source before compared to XX % at agu.
<o,ages of agi vs SciPy>

The AGU town hall attracted a full room of geoscientists who were passionate about Python, reinforcing that pyOpenSci was not only needed but also wanted within the scientific Python community. The feedback and insights from this event further fueled the growth of our peer review process.

### Outcomes from the early meetings

what did people need and want
include quotes and a plto or two.


> * clarify python packaging. Too many different mechanisms floating around...
> * What are best practices of sharing the code?
> * Training about developing tools
> * Training for people who can code for themselves, but want to start developing software for others. Style, documentation, testing, got, etc.


## Getting funding
* applied to Sloan - etter software for science
* got funding - it was a ahrd time - king soopers shooting...
* decided to leave academia and pursue what makes me happy - community work.

the rest is history....

## **pyOpenSci Today**

- **Joining pyOpenSci**: A primer on how individuals can contribute to and engage with pyOpenSci, including practical steps for getting involved.



**Community Feedback and Needs**: - Collating a comprehensive summary of community expectations. - Insight into how these expectations steered the project towards its current approach.



***************


I've always trusted by professional gut when it comes to building new programs. Everything inside of me was telling me that if I and my students were encountering these challenges in the scientific python ecosystem - that others were experienceing them too. But i needed that evidence from the community before trying to get funding for pyOpenSci. So in an effort to get the word out and better understand community needs, I held severa



* **Open Licensing Challenges**: These are particularly relevant for those working at agencies or corporations with licensing policies that do not fully embrace open source principles.
* **packaging challenges**: <look at 2021 mentimeter>
* **Peer Review Partnership**: Astropy members were present, and they were developing their own peer review process at the time. We spent some time talking about what would happen after the review ends in terms of tracking package maintenance over time.


<add image - historical growth of pyOS peer review>
