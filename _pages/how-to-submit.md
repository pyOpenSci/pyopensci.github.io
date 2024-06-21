---
layout: splash
title: "How to submit a package to pyOpenSci"
header:
  overlay_image: images/header.png
  overlay_filter: 0.8
author_profile: false
published: true
site-map: true
permalink: /how-to-submit-a-package-to-pyopensci.html
toc: true
---
# <i class="fa-solid fa-screwdriver-wrench"></i> Congratulations, you’ve created a package!

Creating a Python package, whether it's your first or five-hundredth, is an incredible contribution to the open source ecosystem---don't forget to take a moment to celebrate! But the adventure doesn't have to stop there. You can also submit your package to pyOpenSci's open peer review process.

> Looking for help creating a Python package? Check out [the pyOpenSci Package Guide](https://www.pyopensci.org/python-package-guide/), which will walk you through the process, start to finish.

# <i class="fa-solid fa-circle-chevron-down"></i> Why you should submit to pyOpenSci's open peer review process

pyOpenSci's peer review process is run by a team of dedicated volunteers, and provides the opportunity for package maintainers to have their code, documentation, and infrastructure vetted by both domain experts as well as Python experts. Because pyOpenSci invests in recruiting a diverse team of editors and reviewers, our review process provides and enhanced feedback experience.

In addition, pyOpenSci's partnership with the [Journal of Open Source Software](https://www.pyopensci.org/software-peer-review/partners/joss.html) means that if your package is accepted by pyOpenSci and in scope for JOSS, it will be fast-tracked through JOSS’ review process.

Read more about the benefits of utilizing pyOpenSci's open peer review process in our [Peer Review Guide](https://www.pyopensci.org/software-peer-review/about/benefits.html).

# <i class="fa-solid fa-magnifying-glass"></i> What pyOS looks for in a package

When submitting to pyOpenSci, there are several criteria we use to evaluate if the package is in-scope for our review process:
1. Package maintenance: we understand that life happens, but we ask that you commit to maintaining your package for at least 1-2 years after the pyOpenSci review process is complete.
2. Your package should meet all of the initial Editor checks, which include:
- **Installation:** the package can be installed from a community repository such as PyPI (preferred), and/or a community channel on conda (e.g. conda-forge, bioconda).
- **Fit:** the package meets criteria for [fit](https://www.pyopensci.org/software-peer-review/about/package-scope.html#what-types-of-packages-does-pyopensci-review) and [overlap](https://www.pyopensci.org/software-peer-review/about/package-scope.html#package-overlap).
- **Documentation:** the package has sufficient online documentation to allow us to evaluate package function and scope *without installing the package*.
- **GitHub:** core GitHub repository files are present.
- **Issue submission documentation:** all of the information is filled out in the `YAML` header of the issue (located at the top of the issue template).
- **Automated tests:** the package has a testing suite and is tested via a Continuous Integration service.
- **Repository:** the repository link resolves correctly.
- **Package overlap:** The package doesn't entirely overlap with the functionality of other packages that have already been submitted to pyOpenSci.
- **Archive** (JOSS only, may be post-review): The repository DOI resolves correctly.
- **Version** (JOSS only, may be post-review): Does the release version given match the GitHub release (v1.0.0)?
- **Survey:** the initial onboarding survey was filled out.

You can get more details about each of these criteria in our [Authors Guide](https://www.pyopensci.org/software-peer-review/how-to/author-guide.html).

# <i class="fa-brands fa-github-alt"></i> Choosing the correct issue for submission via GitHub
<figure>
    <a href="/images/website-pages/how-to-submit-package/issue-selection-screen.png">
    <img src="/images/website-pages/how-to-submit-package/issue-selection-screen.png" style="max-width:100%" alt="Screenshot of the pyOpenSci issue selection screen on GitHub, with three options: Help Request, Presubmission Inquiry, and Submit Software for Review.">
    </a>
    <figcaption>
      There are three options when you reach the pyOpenSci issue selection screen.
    </figcaption>
</figure>

## Help request

If you need some help getting your package ready for review, you can submit a help request here and someone will be assigned to help you out. This is a great way to get guidance on topics like [continuous integration](https://www.pyopensci.org/python-package-guide/tests/tests-ci.html#run-tests-with-continuous-integration), [testing](https://www.pyopensci.org/python-package-guide/#tests), and [full documentation](https://www.pyopensci.org/python-package-guide/#documentation), all of which are required for a package to be accepted into [the pyOpenSci ecosystem](https://www.pyopensci.org/python-packages.html). You can also learn more about each of these processes in [the pyOpenSci Package Guide](https://www.pyopensci.org/python-package-guide/).

## Pre-submission inquiry

If you're not sure if your package falls within the [scope of packages pyOpenSci accepts](https://www.pyopensci.org/software-peer-review/about/package-scope.html), you can submit a pre-submission inquiry. A pre-submission inquiry opens up a dialogue between you and the pyOpenSci editorial team to determine whether or not your package would be a good fit for a full peer review.

> A note on data visualization packages: all data visualization packages need to go through the pre-submission inquiry process.

## Submit Software for Review

When you file an issue using our [Submit Software for Review](https://github.com/pyOpenSci/software-submission/issues/new?assignees=&labels=0%2Fpre-review-checks%2C+New+Submission%21&projects=&template=submit-software-for-review.md&title=) template, you officially kick-off the pyOpenSci open peer review process. Read on for a detailed, step-by-step guide for completing the process!

# <i class="fa-solid fa-heart"></i> Breaking down the pyOpenSci Submit Software for review issue template
<figure>
    <a href="/images/website-pages/how-to-submit-package/submit-software-ui.png">
    <img src="/images/website-pages/how-to-submit-package/submit-software-ui.png" style="max-width:100%" alt="Screenshot of the pyOpenSci Submit Software for Review issue on GitHub.">
    </a>
</figure>

## Overview of the GitHub issue UI

GitHub issue templates are an efficient way to standardize a recurring process, and makes it easier for our editorial board to both evaluate a package as well as identify areas where they need more information. When using an issue template, it's important to keep the formatting the way that it's presented. This means:
* Don't delete sections, even if they don't apply to your package.
* Don't add additional formatting to your submission (bolding, italicizing, etc.).
* Don't rearrange sections

We use a script to scrape and parse issues, which allows us to work more quickly and efficiently. When extra formatting is added and/or section are removed it adds time to the review process, as we have to go in and adjust things manually.

We also ask that you only submit your issue once it's complete, rather than continuously editing an issue. This guide will go through all of the information you'll need to submit your package for review, and it can be helpful to set aside enough time to complete the issue in its entirety when you go to submit.

### Labels

Labels are used to categorize issues on GitHub, and when you open a [Submit Software for Review issue](https://github.com/pyOpenSci/software-submission/issues/new?assignees=&labels=0%2Fpre-review-checks%2C+New+Submission%21&projects=&template=submit-software-for-review.md&title=), the appropriate labels are already applied for you! We currently use `0/pre-review-checks` and `New Submission!` to categorize software submissions.

### Write and Preview

When completing the issue template, you can add your text in the `Write` tab, and then click on the `Preview` tab to see how your issue is rendered. It can be helpful to read through the issue template in `Preview` mode, as it automatically formats and organizes the information.

One of the quirky things about the pyOpenSci submission template is that the check boxes have two different methods for completion:
* You can manually add an "X" in the box to mark it as checked,
* or you can check it off after you submit the issue by clicking on the corresponding boxes.

### Markdown basics

Our issue template is written using Markdown. Because we ask that you not add any additional formatting to the issue template, you don't actually need to know how to use Markdown to complete the issue template! However, knowing the basics of Markdown can be helpful in understanding how the information in the issue template is organized. At a very high level, the Markdown used in the pyOpenSci issue template includes:

* Headers, indicated by `#`. `#` corresponds to an `H1` header, `##` and `H2` header, and so on.
* Bullet-points, which can be created using `*` or `-`.
* Checkboxes, which appear as `[ ]`. You can mark a checkbox as completed by adding an "X", like this: `[X]`. The "X" can be uppercase or lowercase.
* Bolding text, using two asterisks on each side of the text to be bolded, like this: **this text is bold**.
* Italicizing text, using a single asterisk on each side of the text to be italicized: *this text is italicized*.

> New to Markdown? Here's a great [Markdown Guide](https://www.markdownguide.org/basic-syntax/) that covers all of the basic syntax.

## <i class="fa-solid fa-map"></i> Step-by-step guide to completing the pyOpenSci software review issue template

When completing your package submission, it's best to submit the issue all at once, rather than completing it over the course of several sessions. We recommend reading through the issue once or twice to see what information you'll need, which includes:

* The scope of your package (see categories)
* Your target audience
* Scientific applications of your package
* Other packages that accomplish the same thing (if any), and how yours is different

> Remember: keep the formatting of the issue template exactly as it is! It's OK to leave sections that don't apply to you blank, and there's no need to add any additional formatting (bolding, italicizing, etc.). Any of these types of changes make it more difficult for our editorial team to process your package submission.

### Package metadata

* **Add a title:** keep your title simple. Oftentimes your package name and the word submission is enough, such as "My Amazing Python package submission."
* **Add a description** in this section you'll want to fill out the Submitting Author, All current maintainers, Package Name, One-Line Description of Package, Repository Link, and Version submitted sections. You should *not* fill out the EiC, Editor, Reviewer 1, Reviewer 2, Archive, JOSS DOI, Version accepted, or Date accepted sections. Instead, leave these as is, with "TBD."

### Code of Conduct & Commitment to Maintain Package

In order for your package to progress through the pyOpenSci review process, you'll need to check both of the [Code of Conduct](https://www.pyopensci.org/handbook/CODE_OF_CONDUCT.html) agreement as well as the [maintenance agreement](https://www.pyopensci.org/software-peer-review/our-process/policies.html#after-acceptance-package-ownership-and-maintenance) outlined in the [pyOpenSci Policies Guidelines](https://www.pyopensci.org/software-peer-review/about/intro.html). You can indicate your agreement in one of two ways:
* adding an "X" (without quotation marks) inside the brackets in the Markdown version of the issue, so that it reads like this: [X]
* submitting the issue without making any changes to this section, and then clicking on the checkboxes when they're rendered in the submitted issue.

### Description

This section is where you'll provide a brief description of your package. It's helpful to include information on what your package does, and how it helps to benefit the open science community. Sharing information about what your package allows users to do helps us get a clearer idea on the scope of your package, as well as help us identify editors and reviewers who will be a good fit for your review.

### Scope

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

### Domain specific

This section is currently evolving, and it's OK if your package doesn't fit into a specific listed domain.

### Community Partnerships

Similar to the Domain specific section, our Community Partnerships are continuously growing and changing, and it's OK if your package isn't affiliated with one of the listed partners.

### For all submissions

This section is important, as it helps us more holistically evaluate your package and determine whether or not it's a good fit for pyOpenSci review. Each of the following sections should be addressed/answered:
* *Explain how and why the package falls under the categories you indicated above.* Here's where you'll provide us with information that connects your package and its functionality to both its domain and technical capabilities.
* *Who is the target audience and what are scientific applications of this package?* This helps us understand who will be using the package.
* *Are there other Python packages that accomplish the same thing? If so, how does yours differ?* This helps us get a handle on other packages that fall within the same domain, as well as ensure that efforts aren't being duplicated.
* *If you made a pre-submission enquiry, please paste the link to the corresponding issue, forum post, or other discussion, or `@tag` the editor you contacted.* This is an important section, as it links your pre-submission inquiry with your submission.

### Technical checks

It's important that your package meet each of the qualifications in this section. If you are missing one or more of these items, you can learn more about how to implement them in our [pyOpenSci Packaging Guide](https://www.pyopensci.org/python-package-guide/). Taken as a whole, these components represent best practices in Python packaging, and as such its important that they be present in all pyOpenSci-approved packages.

### Publication Options

One of the benefits of submitting your package to pyOpenSci for review is that once it's approved, it can be fast-tracked for publication with [JOSS](https://joss.theoj.org/). JOSS accepts pyOpenSci's review as theirs, and therefore you will not need to go through another full review. Instead, JOSS will only review your paper.md file.

### Are you OK with Reviewers Submitting Issues and/or pull requests to your Repo Directly?

You'll notice that the section on having reviewers submit requested changes as issues to your package repositories is already checked. You do have the option of un-checking it, but we consider the benefits of this to be that people can contribute to your review repos. Open issues, PRs, etc. all help you as a maintainer, while also giving you the opportunity to address any issues via PR links.

### Please fill out our survey

We know that surveys aren't necessarily your favorite thing to do, but completing the [pyOpenSci pre-review survey](https://forms.gle/F9mou7S3jhe8DMJ16) is a huge help to our team of volunteers, future package authors, and pyOpenSci as an organization. It helps us track submissions as well as continuously improve our peer review process.

### Editor and Review templates

This isn't a section that you need to worry about! In fact, this is a great time to read through your issue one last time, and hit submit.

## <i class="fa-solid fa-hourglass"></i> What’s next: what happens after you submit your package for review

Now that you've submit your package to pyOpenSci's peer review process, you can relax for a bit. Our Editor-in-Chief will review your submission for both its scope and infrastructure, and determine whether or not it's a good fit for pyOpenSci. This process generally takes about two weeks, but may be shorter or longer depending on how many packages pyOpenSci currently has in review. The Editor-in-Chief will also use this time to ask for any necessary changes that may need to be made to your package, as well as give you time to implement them.

Once the Editor-in-Chief has decided to move ahead with your package, we begin the review process with both editors and reviewers. On average, this takes approximately three months, but this timeframe can vary considerably depending on the package. You can read the detailed steps of what happens during the peer review process in the [pyOpenSci Peer Review Guide for Python Open Source Authors](https://www.pyopensci.org/software-peer-review/how-to/author-guide.html).

# <i class="fa-regular fa-comments"></i> Talk to us!

If you found this how-to guide useful, or if you have suggestions for how to improve it, we'd love to hear from you! You can always reach out to us on [Fosstodon](https://fosstodon.org/@pyOpenSci), [LinkedIn](https://www.linkedin.com/company/pyopensci), or our [Discourse forum](https://pyopensci.discourse.group/)!
