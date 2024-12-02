---
layout: single
title: "The Human Dimension to Clean, Distributable, and Documented Data Science Code"
excerpt: "Discover how to create clean, accessible, and impactful data science code by focusing on the human side of coding practices. Here, Eric Ma shares insights from his talk at the 2024 pyOpenSci Fall Festival. Learn key open science principles, including readability, cognitive load, and the toolmaker’s mindset, and explore practical strategies to enhance your work"
author: "Eric J. Ma"
permalink: /blog/human-dimension-clean-documented-data-science-code.html
header:
  overlay_image: /images/blog/2024/eric-ma-blog-post-header.webp
  overlay_filter: rgba(20, 13, 36, 0.7)
categories:
  - blog-post
  - community
classes: wide
toc: true
comments: true
last_modified: 2024-11-22
---

This post was originally posted on [Eric's blog](https://ericmjl.github.io/blog/2024/10/25/the-human-dimension-to-clean-distributable-and-documented-data-science-code/) in support of the [2024 pyOpenSci Open Science Fall Festival](https://www.pyopensci.org/events/pyopensci-2024-fall-festival.html).

<figure class="align-center">
<picture>
  <source srcset="/images/blog/2024/eric-ma-blog-post-header.webp" type="image/webp">
  <img src="/images/blog/2024/eric-ma-blog-post-header.jpg" alt="An illustration of a diverse group of people collaboratively analyzing and discussing code displayed on a large transparent screen, surrounded by books, plants, and abstract symbols, set against a vibrant gradient background." />
</picture>
</figure>


## Introduction

Since 2016 (8 years now!),
I've been advocating for data scientists
to apply basic software development practices in their work.
This means making sure that one's work is well-documented -- and thus easily understandable,
working in a way that is portable across machines -- and thus easily accessible,
making sure that one's code is modular -- and thus easy to reuse,
and ensuring that one's code is well-tested -- and thus reliable. (Table 1)
In this post,
we'll dive deeper into why it is crucial for making your work impactful
to consider the psychology of people
who read, install, and use your work.
We'll explore the "why" behind the "what"
that will be covered in the upcoming pyOpenSci training course.
This training course will be teaching you a lot of valuable skills - the "what to do" -
and I'd like to help reinforce the "why" behind all of these.
By understanding the reasoning and motivation behind these practices,
you'll be better equipped to apply them effectively
and adapt them to your specific needs in data science projects.

| Practice                 | Benefit               |
|--------------------------|-----------------------|
| Well-documented          | Easily understandable |
| Portable across machines | Easily accessible     |
| Modular code             | Easy to reuse         |
| Well-tested code         | Reliable              |

_Table 1: Key practices and their benefits in data science code development._

## Key concept 1: readability and cognitive load

When we write code,
it's easy to forget that we're not just communicating with machines,
but with other humans as well - including our future selves.
This principle is deeply ingrained in Python's philosophy,
as expressed in "The Zen of Python" which states,
"Readability counts."
Python's emphasis on readability over performance
underscores the importance of human-friendly code.
Readability is crucial because it directly impacts the cognitive load
placed on anyone trying to understand or use your code.

### The importance of readability

Readable code offers several significant benefits.

First and foremost, it enables faster comprehension.
When code is clean and well-structured,
readers can quickly grasp its purpose and functionality,
allowing them to understand the logic and flow more efficiently.

This leads to the second advantage: easier maintenance.
Code that is easy to read is also easier to debug, update, and extend,
saving valuable time and resources in the long run.

Furthermore, readable code greatly improves collaboration!
When team members can easily understand each other's code,
it fosters better teamwork and enables them to build upon each other's work more effectively.
This synergy can lead to more innovative solutions and faster project completion.

Lastly, clear and readable code reduces the likelihood of errors.
When code is easy to interpret,
there's less chance of misunderstanding its intent or functionality.
This clarity minimizes the risk of introducing bugs during modifications
or when integrating with other parts of the system,
ultimately leading to more robust and reliable software.

### A cautionary tale from my graduate school days

During my graduate studies,
I developed a complex data analysis project
for identifying putative reassortant influenza viruses
from the Influenza Research Database (IRD).
While the algorithm was scientifically sound and potentially valuable,
its implementation left much to be desired
from a software engineering perspective.

The project consisted of more than 10 separate Python scripts
that had to be executed in a specific order.
There was little to no documentation,
and the code itself was not written with readability or maintainability in mind.
You can find the original code repository [here](https://github.com/ericmjl/influenza-reassortment-detector)
to see an example of what **not** to do.

The project had several significant drawbacks:

- **Lack of modularity**: The scripts were tightly coupled, making it difficult to reuse or modify individual components.
- **Poor documentation**: Without clear documentation, understanding the purpose and workflow of each script was challenging.
- **Difficult deployment**: The complex execution order and tight coupling to a GridEngine HPC cluster made it nearly impossible for others to deploy or use the tool effectively.

The consequences of this poor code quality
became apparent when the IRD team
expressed interest in incorporating my algorithm into their database.
I remember being engaged with them in discussion,
and was excited to see my work potentially being used
by researchers around the world.
However, the barrier to deployment was immense
due to the scrappy implementation and lack of documentation.
While I never knew what the real reasons were behind-the-scenes,
I can only imagine that the lack of a well-documented,
modular, and easily deployable solution
was a major barrier to the adoption of my work.

This experience taught me a valuable lesson
about the importance of writing clean, well-documented, and easily deployable code,
even in academic settings.
Had I invested more time in proper software development practices,
my work could have had a much broader impact
and been more easily adopted by the scientific community.

### The impact of readability

By prioritizing readability,
we can significantly enhance the overall quality and impact of our data science projects.
Readable code:

1. Reduces the cognitive load on users, making it easier for them to understand and use your code.
2. Encourages collaboration and knowledge sharing within the data science community.
3. Improves the maintainability and longevity of your codebase.
4. Enhances the overall credibility and professionalism of your work.

Remember, the goal is to create tools and analyses
that others can easily access, understand, and build upon.
By embracing the human dimension of our code,
we not only improve our individual projects
but also contribute to the growth and accessibility
of the entire field of data science.

## Key concept 2: User-friendly installation and setup

The ease of installation and setup
can make or break the adoption of your data science package.
Even the most brilliant code is useless
if users can't get it running on their systems.
Let's explore the psychological barriers users face
and how to overcome them.

### The psychology of installation friction

When users encounter complex installation processes,
they often face several psychological barriers.

**Barrier 1 - Complexity**:
First, the sheer complexity can be overwhelming,
causing users to abandon the installation before they even begin.
This initial hurdle can be particularly daunting
for those who are less technically inclined
or new to the field.

**Barrier 2 - Frustration**:
Secondly,
users may experience frustration when installations fail
or when they encounter unclear error messages.
These setbacks can be discouraging,
potentially leading users to give up on further attempts to install and use the software.
I remember the early days of installing SciPy!
Nowadays, it's so easy:
`pip install scipy` or `conda install scipy` and you've got it installed.
But back then, I was wrangling C compilers and linker flags at the terminal...
as a 3 month old programmer!
Anyways, the negative emotions associated with these experiences
can create a lasting impression,
deterring users from trying again in the future.

**Barrier 3 - Time Pressure**:
Many users, particularly those in professional settings,
have limited time to experiment with new tools.
If the installation process is time-consuming or requires multiple attempts,
your potential users may decide that the potential benefits of the tool
are not worth the time investment required to get it up and running.
Your impact, as a result, is diminished --
especially because your users missed the opportunity
to leverage what you've built!

**Barrier 4 - Imposter Syndrome**:
Difficulties in the setup process
can trigger feelings of imposter syndrome.
When users struggle to install or configure a tool
that they believe should be straightforward,
they may begin to question their own competence.
This self-doubt can be a powerful deterrent to adoption,
as users may avoid tools
that make them feel inadequate or out of their depth.

### Two perspectives on setup: User vs. Developer

When we talk about "getting set up" with a data science package or project,
it's important to recognize that this can mean two distinct things,
depending on the user's intentions:

**Installing a tool for use**:
This is the perspective of an end-user who wants to leverage your package as a tool in their own work.
They're primarily concerned with getting the package installed and running quickly,
without needing to understand or modify the underlying code.

**Installing to contribute**:
This is the perspective of a developer or contributor
who wants to explore, modify, or contribute to your project's code.
They need to set up a full development environment,
which often involves more steps and a deeper understanding of the project structure.

Each of these scenarios presents its own set of challenges and psychological barriers:

For tool users, the focus is on simplicity and speed.
They want a straightforward installation process,
ideally with a single command like `pip install your-package`.
Complex dependencies or platform-specific instructions can be major deterrents.

For developers, the process is inherently more involved.
They need to clone the repository,
set up a virtual environment,
install development dependencies,
and possibly configure additional tools like linters or test runners.
While they may be more technically inclined,
a clear and well-documented setup process is still crucial to encourage contributions.

By recognizing and addressing both of these perspectives in your documentation and setup process,
you can create a more inclusive and user-friendly experience for all potential users of your project,
whether they're simply using it as a tool or diving deep into the code.

### The impact of user-friendly setup

By prioritizing a smooth installation and setup process:

1. You lower the barrier to entry for potential users.
2. You increase the likelihood of adoption and continued use.
3. You create a positive first impression, encouraging users to explore your package further.
4. You reduce the support burden, as fewer users encounter installation issues.

Think back to the moment that you picked up someone else's Python package
and it _just worked_... wasn't that a magical feeling?
When you build a tool, you'll want to get users to the "aha!" moment
of using your package as quickly and painlessly as possible.
Every step you can eliminate or simplify in the setup process
is a win for user adoption and satisfaction.

## Key concept 3: Documentation as a bridge to understanding

Documentation is often treated as an afterthought in data science projects,
but it's a crucial bridge between your code and its users.
Good documentation can make the difference
between a project that gathers dust
and one that becomes widely adopted and built upon.
The Diataxis framework,
developed by Daniele Procida,
provides an excellent structure
for thinking about and organizing documentation.

### The role of documentation

The Diataxis framework identifies four distinct types of documentation, each serving a specific purpose:

1. **Tutorials**: Learning-oriented guides that help new users get started quickly.
2. **How-To Guides**: Problem-oriented instructions for completing specific tasks.
3. **Explanation**: Understanding-oriented discussions that provide background and context.
4. **Reference**: Information-oriented technical descriptions of the code.

These four types of documentation serve different roles in a user's journey:

1. **Onboarding**: Tutorials help new users quickly understand and start using your code.
2. **Problem-Solving**: How-To Guides assist users in accomplishing specific tasks.
3. **Deep Understanding**: Explanation sections provide insight into the why and how of your project.
4. **Detailed Information**: Reference documentation offers a reliable source of information for all features and functions.

### Types of documentation artifacts

Within these four categories, you might create various documentation artifacts:

1. **README**: The first point of contact for users, providing an overview and quick start guide.
2. **API Documentation**: Detailed explanations of functions, classes, and modules (part of the Reference quadrant).
3. **Tutorials**: Step-by-step guides for common use cases (part of the Tutorials quadrant).
4. **Examples**: Practical demonstrations of how to use the code in real-world scenarios (often part of How-To Guides).
5. **Inline Comments**: Explanations within the code itself for complex logic or algorithms (can feed into Reference documentation).

By structuring your documentation according to the Diataxis framework,
you can ensure that you're meeting the diverse needs of your users,
from newcomers to experienced developers looking for specific information.

### Best practices for effective documentation

When it comes to creating effective documentation,
there are several key practices to keep in mind.

**Contemporaneous documentation**:
First and foremost,
it's crucial to write documentation as you code,
rather than leaving it as an afterthought!
Leaving just-in-time comments
can help you preserve critical details that may be handy
for future readers of your code.
This approach ensures that your documentation remains accurate and complete,
reflecting the most up-to-date state of your project.

**Clear language**:
Clear language is paramount in documentation.
Avoid using jargon or overly technical terms without explanation.
Instead, strive to explain complex concepts in simple, accessible language
that a wide range of users can understand.
This clarity helps reduce the learning curve for new users
and makes your project more approachable.
If you use tools like Quarto or MyST,
you can use pop-ups, sidebars, and callouts
to help ~~disambiguate~~ explain terms.

**Examples**:
Examples are a powerful tool in documentation.
Whenever possible,
include code snippets and use cases
that illustrate how to use your package.
These practical demonstrations can help users
quickly grasp how to apply your code to real-world scenarios,
bridging the gap between theory and practice.

**Regular updates**:
As your project evolves,
so should your documentation.
Regularly reviewing and updating your documentation
is essential to ensure it remains relevant and accurate.
This ongoing maintenance helps prevent confusion and frustration
that can arise from outdated or incorrect information.

Personally,
I've been building GenAI tooling
to help me identify out-of-date documentation
as my codebase evolves,
as well as update the documentation directly.
I've been prototyping this in LlamaBot,
and if you're interested in talking about it,
I'm more than happy to chat!

**Tooling**:
Finally, consider leveraging documentation tools
to enhance the presentation and organization of your content.
Documentation systems, such as Quarto and MkDocs
can help you create professional-looking documentation
that's easy to navigate and visually appealing.
These tools can significantly improve the user experience,
making your documentation more engaging and effective.
Additionally, use LLMs to help you draft documentation!
It'll help you get over writer's block.

### The impact of good documentation

Investing in quality documentation yields far-reaching benefits for your data science project:

1. It increases user adoption and satisfaction
2. It reduces support burden on maintainers
3. It fosters a vibrant community by encouraging contributions
4. It enhances project credibility and professionalism
5. It maximizes code's potential and impact

Remember, even the most brilliant code
is only as valuable as users' ability to understand and implement it.
High-quality documentation is the key that unlocks your code's full potential,
amplifying its reach and influence in the field.
By creating and maintaining excellent documentation,
you're not just explaining your code –
you're expanding its impact within the data science community and beyond.

## How we operationalize these ideas at work

At Moderna, where I work,
I've been fortunate to be an early member of
the Data Science and Artificial Intelligence teams.
This gave me the opportunity to influence the ways of working
of a team that was still figuring out how to operationalize these ideas in practice.
We've implemented several concrete practices
that bring these concepts to life in our daily work.

### Code reviews

One of our key practices is the consistent use of code reviews.
Except for rapid prototyping that needs to be completed within an afternoon,
we always conduct code reviews.
While this process may slow us down in the short term,
typically adding a day or two of waiting for colleagues to review,
it pays off significantly in the long run.
(Moreover, we use AI-assisted coding to speed up our code writing anyway,
so not much is lost!)
We move faster overall because of the growing shared knowledge across the team.
Code reviews are particularly crucial
for ensuring both the correctness and maintainability of our code.
They also serve as an excellent way for team members
to learn coding patterns from each other and maintain high code quality.
It's worth noting that a hallmark of an experienced programmer
is their ability to deploy effective patterns in their codebase.

### Docathons and AI-assisted documentation

We also emphasize the habit of writing documentation through regular "docathons."
Every quarter, we set aside two days specifically for working on documentation.
During these events, we focus on updating documentation for our various projects.
These docathons serve a dual purpose:
they are not only productive work sessions but also great team-building exercises.
We find that newcomers to the team are particularly helpful during these events,
as they assist in keeping our onboarding documentation up to date,
providing fresh perspectives on what new team members need to know.

In addition, we use AI to help us draft documentation.
Modeling after [documentation tooling that I built for LlamaBot](https://github.com/ericmjl/llamabot/blob/main/docs/cli/docs.md),
we use the same pattern at work to help us draft documentation,
especially for routine, templated, and tedious-to-write documentation.
Humans are still responsible for checking the drafted documentation,
but at least we use AI tools to help us get started.

### Standard project templates and automation

To streamline our development process,
we have implemented standard project templates and automation tools.
Our approach is similar to Cookiecutter Data Science-templated projects,
but with additional automation and customization specific to Moderna's needs.
We make extensive use of pre-commit hooks and GitHub Actions
to automatically check our code with every commit.
This automation significantly alleviates
the mental burden associated with manual checking.
By leveraging these tools,
we have effectively removed much of the human burden
typically associated with nitpicking another person's code.
Instead, we let the automated systems handle these checks,
and we simply respond to what the "robots" tell us needs attention.

### The impact of these practices

Through these practices,
we have created an environment where clean, distributable,
and well-documented code is not just an ideal,
but a daily reality.
This approach has significantly enhanced our team's efficiency,
collaboration, and the overall quality of our data science projects at Moderna.
We engage in long-term research partnerships with our colleagues
and can reliably take code from prototype to production with minimal overhead.
We easily onboard new people onto projects
thanks to the high-quality documentation provided.

## Conclusion

Throughout this keynote blog post,
we've explored the critical human dimension of data science code,
focusing on three key concepts:
readability, user-friendly installation, and documentation.
These elements,
often overlooked in favor of algorithmic efficiency or cutting-edge techniques,
are fundamental to the success and impact of your data science projects.

**Readability** reduces cognitive load and fosters collaboration,
inviting others to build upon our work.
This openness drives scientific progress in data science.

**User-friendly installation** lowers barriers to entry,
encouraging wider adoption and increasing impact.
A brilliant but unusable algorithm is effectively useless.

**Documentation** bridges code and users,
serving as a form of communication and teaching.
Good documentation can transform users into contributors,
fostering a community around your project.

These practices are fundamental to open science and reproducible research.
By making our code accessible and understandable,
we enable verification, replication, and advancement of scientific work.
This approach addresses the reproducibility crisis in many fields.
Ultimately, we contribute to a more transparent and robust scientific ecosystem,
not just improving individual projects.

As data scientists, our goals are to create tools and analyses that make a real-world impact.
By considering the human dimension to how our code gets used,
we dramatically increase the chances of our work being used,
understood, and built upon by others.
As you go forward, be other-centered in your work,
and treat your customers as you would want them to treat you!

### Call to action

As you embark on your next data science project, challenge yourself to:

1. Prioritize readability from the start.
2. Create a smooth installation process.
3. Document as you go, not as an afterthought.
4. Seek early user feedback.
5. Contribute to open-source projects, focusing on documentation and user experience.

Impactful data science isn't just about clever algorithms or big data.
By adopting a toolmaker's mindset,
we create knowledge that others can easily access, understand, and build upon.
This approach enhances our ability to solve real-world problems creatively.

Let's commit to writing code that's both computationally efficient and human-friendly.
In doing so, we'll foster a more collaborative, innovative, and impactful data science community.
Thank you for reading!

## Additional Resources

| Resource                                                           | Description                                                                                  |
|--------------------------------------------------------------------|----------------------------------------------------------------------------------------------|
| [The Hitchhiker's Guide to Python](https://docs.python-guide.org/) | An excellent resource for Python best practices, including code style and project structure. |
| [Python Packaging User Guide](https://packaging.python.org/)       | Comprehensive guide on distributing Python packages.                                         |
| [Write the Docs](https://www.writethedocs.org/)                    | A global community of people who care about documentation, with many resources and guides.   |
| [Diataxis Framework](https://diataxis.fr/)                         | Detailed explanation of the documentation framework mentioned in this post.                  |


## FAQ

**Should I be using AI tools to help me code?**
Yes! And make sure you are ready to defend every line of code that is produced by an AI tool.
My personal conviction is that humans who write with AI assistance
will be the ones who are able to turbocharge their effectiveness.
At the same time, humans are the ones who are responsible for the end product.
So, let AI assist you, but don't relinquish your responsibility!

**Should I be using AI tools to help me write my documentation?**
Yes! And just like with code,
make sure you are ready to defend every line of documentation that is produced by an AI tool.
In fact, I wrote this blog post with the help of Claude 3.5 Sonnet,
in which I drafted out my ideas in bullet point format
and then asked Claude to help me flesh out each section one at a time
into a cohesive written piece.
And I'm ready to defend every line that's in this blog post
or else be willingly corrected!

**What if I don't have time to write documentation?**
Use AI tools to help!
But if you're in an airgapped environment with no access to AI tools over an API,
see if you're able to procure hardware to run local LLMs on your own machine.
It turns out that we have supercomputers (by 1980s standards) in our pockets,
on our laps, and on our desks,
and the total amount of compute capacity that just runs idle is staggering.
