---
layout: single
title: "How to submit a Python package to pyOpenSci for review"
header:
  overlay_image: images/header.png
  overlay_filter: 0.8
author_profile: false
published: true
site-map: true
permalink: /how-to-submit-a-package-to-pyopensci.html
classes: wide
toc: true
---



## <i class="fa-solid fa-rocket" style="color:#a193c6"></i> Submit Your Python Package for pyOpenSci Review

You’ve created a Python package—now what? How do you ensure it follows best practices, is well-documented, and reaches the right audience?

**pyOpenSci’s peer review process** connects you with experts who will help refine your package’s structure, documentation, and usability. Accepted packages become part of our vetted ecosystem, increasing their visibility and credibility. You may also have the opportunity to publish in the [Journal of Open Source Software (JOSS)](https://www.pyopensci.org/software-peer-review/partners/joss.html).


### <i class="fa-solid fa-circle-chevron-down" style="color:#a193c6"></i> Why submit a Python package for software peer review?
- <i class="fa-solid fa-eye" style="color:#81c0aa;"></i> **Visibility & support:** Gain expert feedback on your code, documentation, and packaging.
- <i class="fa-solid fa-check-circle" style="color:#81c0aa;"></i> **Quality & best practices:** Ensure your package follows open-source and scientific standards.
- <i class="fa-solid fa-book-open" style="color:#81c0aa;"></i> **JOSS publication:** Get the option to publish in the Journal of Open Source Software (JOSS) after acceptance.

<i class="fa-solid fa-book" style="color:#81c0aa;"></i> **[Learn more about the benefits of our peer review process](https://www.pyopensci.org/software-peer-review/about/benefits.html)**


<figure>
  <source srcset="/images/peer-review/pyos-joss-peer-review.webp" type="image/webp">
    <img src="/images/peer-review/pyos-joss-peer-review.png" alt="A flowchart showing how a package submitted to pyOpenSci can also be fast-tracked for JOSS publication.">
  <figcaption>
       Packages accepted into pyOpenSci can also be published in JOSS through a streamlined process.

  </figcaption>
</figure>

Read more about the benefits of pyOpenSci's open peer review process in our [Peer Review Guide](https://www.pyopensci.org/software-peer-review/about/benefits.html).

<div class="notice" markdown="1">
  <i class="fa-solid fa-graduation-cap" style="color:#81c0aa;"></i> **New to Python packaging?**

  If you're still working on your package and want guidance, check out our
  [**Python packaging tutorials**](https://www.pyopensci.org/python-package-guide/tutorials/intro.html). Our tutorials provide step-by-step guidance that walks you through the process of creating your first package from start to finish.
</div>


## <i class="fa-solid fa-list-check" style="color:#81c0aa;"></i> Step-by-step guide to submitting your package for review

Our **open peer review process** happens through GitHub issues in the
[**pyOpenSci software submission repository**](https://github.com/pyopensci/software-submission). Using open GitHub issues ensures a **transparent and constructive** review process focused on improving:

- **Package structure & quality:** Ensure best practices in documentation, testing, and maintenance.
- **Usability & reproducibility:** Improve user experience and scientific reliability.
- **Visibility:** Join a vetted ecosystem of high-quality, community-endorsed Python tools.

Follow the steps below to submit your package for review.

### <i class="fa-solid fa-magnifying-glass" style="color:#a193c6"></i> 1. Check if your package is in pyOpenSci's scope

Before submitting, ensure your package fits within [**pyOpenSci’s peer review scope**](https://www.pyopensci.org/software-peer-review/about/package-scope.html).

Your package is a good fit if:

- **Supports a scientific application:** Examples include data retrieval, processing, and visualization.
- **Meets packaging & maintenance expectations:** Installable, documented, tested, and actively maintained.
- **Does not significantly overlap:** Your package should provide new functionality rather than duplicate an existing package in the ecosystem.


#### <i class="fa-solid fa-circle-question" style="color:#81c0aa;"></i> Unsure if your package is in scope?

If you're unsure, **submit a pre-submission inquiry** to get feedback from our editorial team before starting the full review process.

🔗 **[Check how to submit a pre-submission inquiry](#3-submit-your-package-for-review-or-submit-a-presubmission-inquiry)**
*(Jump to the next section for full details on submitting a pre-submission inquiry.)*

## TODO: move this somewhere better.
📖 Read the Author Guide – A detailed walkthrough of the review process

### <i class="fa-solid fa-tools" style="color:#a193c6"></i> 2. Check if your package meets our pre-review requirements

Once you have determined your package is in scope, check that it meets [**pyOpenSci’s pre-review requirements**](https://www.pyopensci.org/software-peer-review/how-to/pre-review-checks.html). Our Editor in Chief will review your package against these criteria before the review formally begins.

#### <i class="fa-solid fa-list" style="color:#81c0aa;"></i> Summary of python package pre-review requirements

Our requirements represent the basic elements every Python package should have to be usable and maintainable.

- <i class="fa-solid fa-box" style="color:#81c0aa;"></i> **Be installable:** Available on [PyPI](https://pypi.org/) (preferred) or a Conda channel (e.g., conda-forge, bioconda).
- <i class="fa-solid fa-book" style="color:#81c0aa;"></i> **Have clear documentation:** Includes user guides, tutorials, and API documentation.
- <i class="fa-solid fa-vial" style="color:#81c0aa;"></i> **Include automated testing & CI:** A test suite with continuous integration setup.
- <i class="fa-brands fa-github" style="color:#81c0aa;"></i> **Contain key repository files:** Includes `README.md`, `LICENSE`, `CONTRIBUTING.md`, and a code of conduct.


<div class="notice notice--success" markdown="1">

### <i class="fa-solid fa-graduation-cap" style="color:#81c0aa;"></i> Need help preparing your package?
Check out our [**<i class="fa-solid fa-link"></i> Python packaging guide**](https://www.pyopensci.org/python-package-guide/) for best practices on packaging, testing, and infrastructure setup.

</div>


### <i class="fa-brands fa-github-alt" style="color:#a193c6"></i> 3. Submit your package for review or submit a presubmission inquiry

Once your have determined that you package it in scope and meets our core packaging requirements, it's time to submit your package for peer review. To submit a package for review, you need to **open an issue** in pyOpenSci’s software submission repository. Follow these steps:

1. **Go to our submission repository**: [pyOpenSci/software-submission](https://github.com/pyOpenSci/software-submission/issues/new/choose)
2. **Click on the Issues tab**
3. **Select the appropriate issue template**
4. **Complete the issue form** and submit it

<figure>
    <img src="/images/peer-review/peer-review-submit-issue.gif" style="max-width:100%" alt="Animated gif showing how to find the GitHub issue submission process for peer review.">
    <figcaption>
      More....
    </figcaption>
</figure>
Once submitted, our editors will review your issue and guide you through the next steps.


### <i class="fa-solid fa-list-check" style="color:#81c0aa;"></i> Choose the correct submission type

There are **three submission types** that you can select from:

- **<i class="fa-solid fa-hand-holding-heart" style="color:#81c0aa;"></i> Help request:** If you need guidance on testing, documentation, or packaging best practices, submit a help request. Our editorial team will make sure that you get the help that you need with your Python package!
- [**<i class="fa-solid fa-magnifying-glass" style="color:#81c0aa;"></i> Pre-submission inquiry:**](https://github.com/pyOpenSci/software-submission/issues/new?template=presubmission-inquiry.md) If you are unsure if your package [fits our scope](https://www.pyopensci.org/software-peer-review/about/package-scope.html), you can submit a pre-submission inquiry to get input from our editorial team before submitting.
- **<i class="fa-solid fa-check" style="color:#81c0aa;"></i> Full submission:** If you are ready to submit a review, then use this option to submit a full submission for review which will kick-off the editorial peer review process.

**<i class="fa-solid fa-link"></i> [Click here to to our GitHub issue submission page](https://github.com/pyOpenSci/software-submission/issues/new/choose)**

<figure>
    <source srcset="/images/peer-review/pyopensci-software-review-issue-selection.webp" type="image/webp">
    <img src="/images/peer-review/pyopensci-software-review-issue-selection.png" style="max-width:100%" alt="Screenshot of the pyOpenSci issue selection screen on GitHub, with three options: Help Request, Presubmission Inquiry, and Submit Software for Review.">
    <figcaption>
      Above are the three issue templates that you can select from when submitting a package for review to pyOpenSci. Select the issue that best fits your current situation.
    </figcaption>
</figure>

> All **data visualization packages** must go through the pre-submission inquiry process before being considered for review.


<div class="notice notice--info" markdown="1">

### Need help with your Python package?

If you need help getting your package ready for review, you can submit a help request here, and someone will be assigned to help you. This is a great way to get guidance on topics like [continuous integration](https://www.pyopensci.org/python-package-guide/tests/tests-ci.html#run-tests-with-continuous-integration), [testing](https://www.pyopensci.org/python-package-guide/#tests), and [full documentation](https://www.pyopensci.org/python-package-guide/#documentation), all of which are required for a package to be accepted into [the pyOpenSci ecosystem](https://www.pyopensci.org/python-packages.html). You can also learn more about each of these processes in [the pyOpenSci Package Guide](https://www.pyopensci.org/python-package-guide/).

</div>

### <i class="fa-brands fa-github-alt" style="color:#81c0aa;"></i> Understanding our GitHub issue submission process

When you submit your package for review, you will **fill out a GitHub issue template**. This structured template helps our editorial board evaluate your package efficiently.

To keep the process smooth and ensure your package is reviewed efficiently:

✔ **Complete all sections:** Even if something doesn’t apply, leave it as is.
✔ **Do not change the template format:** Keep section headers, bullet points, and structure intact.
✔ **Submit once your issue is fully complete:** Avoid continuous edits to the issue after your submit whenever possible.

<div class="notice notice--info" markdown="1">
<i class="fa-solid fa-circle-exclamation" style="color:#81c0aa;"></i> **Why does this matter?**
Our peer review workflow relies on scripts to process submission data. If the template structure is modified, it will break our automated processes!
</div>

### <i class="fa-solid fa-tags" style="color:#81c0aa;"></i> GitHub labels

When you submit an issue, GitHub automatically applies labels to categorize your submission.
For a **new submission**, the following labels will appear:

- **`0/pre-review-checks`** – Indicates the package is in the initial review phase.
- **`New Submission!`** – Marks it as a new review request.

No action is needed on your part—labels are applied automatically.


#### <i class="fa-solid fa-pen-to-square" style="color:#81c0aa;"></i> Writing and previewing your issue

- Fill out your issue in the **Write** tab.
- Click the **Preview** tab to see how your submission will appear once posted.

Check that all required fields are filled out before submitting.

One of the quirky things about the pyOpenSci submission template is that the checkboxes have two different methods for completion:
* You can manually add an "X" in the box to mark it as checked,
* or you can check it off after you submit the issue by clicking on the corresponding boxes.

### <i class="fa-solid fa-code" style="color:#81c0aa;"></i> Markdown basics

The issue template is written in Markdown, a simple text formatting language.
Here are the basics you need to know:

- **Headers:** Use `#` for section titles (`##` for subheaders).
- **Bullet points:** Use `-` or `*` to create lists.
- **Checkboxes:** Use `[ ]` for an empty box, `[X]` to check it off.
- **Bold text:** Use `**bold**` to emphasize words.
- **Italic text:** Use `*italics*` for softer emphasis.

Need more Markdown help? Check out this [Markdown Guide](https://www.markdownguide.org/basic-syntax/).

### <i class="fa-solid fa-circle-check" style="color:#81c0aa;"></i> Final checklist before submitting

✅ The issue is **fully completed**
✅ The template **formatting has not been changed**
✅ The **Write tab preview looks correct**

Once you're ready, **submit your issue**, and our editors will take it from there! 🚀


### <i class="fa-solid fa-map"></i> Step-by-step guide to completing the pyOpenSci software review issue template

When completing your package submission, it's best to submit the issue all at once, rather than completing it over the course of several sessions. We recommend reading through the issue once or twice to see what information you'll need, which includes:

* The scope of your package (see categories)
* Your target audience
* Scientific applications of your package
* Other packages that accomplish the same thing (if any), and how yours is different

> Remember: keep the formatting of the issue template exactly as it is! It's OK to leave sections that don't apply to you blank, and there's no need to add any additional formatting (bolding, italicizing, etc.). Any of these types of changes make it more difficult for our editorial team to process your package submission.

#### Package metadata

* **Add a title:** keep your title simple. Oftentimes your package name and the word submission is enough, such as "My Amazing Python package submission."
* **Add a description** in this section you'll want to fill out the Submitting Author, All current maintainers, Package Name, One-Line Description of Package, Repository Link, and Version submitted sections. You should *not* fill out the EiC, Editor, Reviewer 1, Reviewer 2, Archive, JOSS DOI, Version accepted, or Date accepted sections. Instead, leave these as is, with "TBD."

#### Code of Conduct & Commitment to Maintain Package

In order for your package to progress through the pyOpenSci review process, you'll need to check both of the [Code of Conduct](https://www.pyopensci.org/handbook/CODE_OF_CONDUCT.html) agreement as well as the [maintenance agreement](https://www.pyopensci.org/software-peer-review/our-process/policies.html#after-acceptance-package-ownership-and-maintenance) outlined in the [pyOpenSci Policies Guidelines](https://www.pyopensci.org/software-peer-review/about/intro.html). You can indicate your agreement in one of two ways:
* adding an "X" (without quotation marks) inside the brackets in the Markdown version of the issue, so that it reads like this: [X]
* submitting the issue without making any changes to this section, and then clicking on the checkboxes when they're rendered in the submitted issue.

#### Description

This section is where you'll provide a brief description of your package. It's helpful to include information on what your package does, and how it helps to benefit the open science community. Sharing information about what your package allows users to do helps us get a clearer idea on the scope of your package, as well as help us identify editors and reviewers who will be a good fit for your review.

#### Scope

The mission of pyOpenSci’s open peer review process is to:

1. Support improving the quality, usability and discoverability of maintained scientific Python software in support of open science.

2. We also support maintainers in navigating the Python packaging ecosystem.

pyOpenSci reviews packages that support open reproducible science, data processing and the various stages of managing the data lifecycle. We review packages with the goal of improving package quality and usability for scientists. As such, we review packages across a spectrum of small to large user bases. The popularity of your package is not a consideration in our review process!

We welcome young packages that are just entering the scientific Python ecosystem to apply for review if they are relevant to the science community and fit into at least one scope category below. We also welcome mature packages with a growing or established community!

The following categories are in-scope for the pyOpenSci review process:
* **Data retrieval:** refers to packages for accessing and downloading data from online sources, including wrappers for accessing APIs.
* **Data extraction:** these packages aid in retrieving data from unstructured sources such as text, images, and PDFs. They might also parse scientific data types and outputs from scientific equipment.
* **Data processing/munging:** this category focuses on tools for handling data in specific formats that scientists may be interested in working with.
* **Data deposition:** includes tools for depositing data into scientific research repositories.
* **Data validation and testing:** refers to tools that enable automated validation and checking of data quality and completeness that in turn support scientific workflows.
* **Data visualization:** these are packages that enhance a scientist’s experience in visualizing and analyzing data. If your package falls into the category of data visualization, please fill out a [pre-submission inquiry](https://github.com/pyOpenSci/software-submission/issues/new?assignees=&labels=0%2Fpresubmission&template=presubmission-inquiry.md&title=) first.
* **Workflow automation:** these tools automate and link together workflows, and as such support reproducible workflows. These tools may include build systems and tools to manage continuous integration, as well as support version control.
* **Citation management and bibliometrics:** these are packages that facilitate managing references.
* **Scientific software wrappers:** these tools provide a Python interface for existing scientific packages written in other languages.
* **Database interoperability:** these packages deal with bindings and wrappers for database APIs.

Similar to the previous section, you can indicate which categories are applicable to your package in one of two ways:
* adding an "X" (without quotation marks) inside the brackets in the Markdown version of the issue, so that it reads like this: [X]
* submitting the issue without making any changes to this section, and then clicking on the checkboxes when they're rendered in the submitted issue.

You can read more about each of these categories in the [Package Scope](https://www.pyopensci.org/software-peer-review/index.html) section of the [pyOpenSci Peer Review Guide](https://www.pyopensci.org/software-peer-review/about/package-scope.html).

#### Domain specific

This section is currently evolving, and it's OK if your package doesn't fit into a specific listed domain.

#### Community Partnerships

Similar to the Domain specific section, our Community Partnerships are continuously growing and changing, and it's OK if your package isn't affiliated with one of the listed partners.

#### For all submissions

This section is important, as it helps us more holistically evaluate your package and determine whether or not it's a good fit for pyOpenSci review. Each of the following sections should be addressed/answered:
* *Explain how and why the package falls under the categories you indicated above.* Here's where you'll provide us with information that connects your package and its functionality to both its domain and technical capabilities.
* *Who is the target audience and what are scientific applications of this package?* This helps us understand who will be using the package.
* *Are there other Python packages that accomplish the same thing? If so, how does yours differ?* This helps us get a handle on other packages that fall within the same domain, as well as ensure that efforts aren't being duplicated.
* *If you made a pre-submission enquiry, please paste the link to the corresponding issue, forum post, or other discussion, or `@tag` the editor you contacted.* This is an important section, as it links your pre-submission inquiry with your submission.

#### Technical checks

It's important that your package meet each of the qualifications in this section. If you are missing one or more of these items, you can learn more about how to implement them in our [pyOpenSci Packaging Guide](https://www.pyopensci.org/python-package-guide/). Taken as a whole, these components represent best practices in Python packaging, and as such its important that they be present in all pyOpenSci-approved packages.

#### Publication Options

One of the benefits of submitting your package to pyOpenSci for review is that once it's approved, it can be fast-tracked for publication with [JOSS](https://joss.theoj.org/). JOSS accepts pyOpenSci's review as theirs, and therefore you will not need to go through another full review. Instead, JOSS will only review your paper.md file.

#### Are you OK with Reviewers Submitting Issues and/or pull requests to your Repo Directly?

You'll notice that the section on having reviewers submit requested changes as issues to your package repositories is already checked. You do have the option of un-checking it, but we consider the benefits of this to be that people can contribute to your review repos. Open issues, PRs, etc. all help you as a maintainer, while also giving you the opportunity to address any issues via PR links.

#### Please fill out our survey

We know that surveys aren't necessarily your favorite thing to do, but completing the [pyOpenSci pre-review survey](https://forms.gle/F9mou7S3jhe8DMJ16) is a huge help to our team of volunteers, future package authors, and pyOpenSci as an organization. It helps us track submissions as well as continuously improve our peer review process.

#### Editor and Review templates

This isn't a section that you need to worry about! In fact, this is a great time to read through your issue one last time, and hit submit.

### <i class="fa-solid fa-hourglass"></i> What’s next: what happens after you submit your package for review

Now that you've submitted your package to pyOpenSci's peer review process, you can relax for a bit. Our Editor-in-Chief will review your submission for both its scope and infrastructure and determine whether or not it's a good fit for pyOpenSci. This process generally takes about two weeks, but may be shorter or longer depending on how many packages pyOpenSci currently has in review. The Editor-in-Chief will also use this time to ask for any necessary changes that may need to be made to your package, as well as give you time to implement them.

Once the Editor-in-Chief has decided to move ahead with your package, we begin the review process with both editors and reviewers. On average, this takes approximately three months, but this timeframe can vary considerably depending on the package. You can read the detailed steps of what happens during the peer review process in the [pyOpenSci Peer Review Guide for Python Open Source Authors](https://www.pyopensci.org/software-peer-review/how-to/author-guide.html).

## <i class="fa-regular fa-comments"></i> Connect with us!

If you found this how-to guide useful, or if you have suggestions for how to improve it, we'd love to hear from you! Reach out to us on:

* [BlueSky]()
* [Fosstodon](https://fosstodon.org/@pyOpenSci),
* [LinkedIn](https://www.linkedin.com/company/pyopensci),
