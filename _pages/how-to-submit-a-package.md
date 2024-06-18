---
layout: splash
title: "How to: submit a package to pyOpenSci"
author_profile: false
published: true
site-map: true
permalink: /how-to-submit-a-package-to-pyopensci.html
header:
  overlay_filter: 0.6
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

Fill out an exemplar issue that someone can follow along with. Use two images side-by-side: blank (before) and filled-in
(after), going section by section
> Remember: keep the formatting of the issue template exactly as it is! It's OK to leave sections that apply to you blank, and there's no need to add any additional formatting (bolding, italicizing, etc.).

### Package metadata
Logistics:
Submit all at once
Recommend reading through a few times, but at a high level, in addition to having your package, you’ll want to know:
Scope of your package (see categories)
Target audience
Scientific applications of the package
Other packages that accomplish the same thing (if any), and how yours is different
Let’s start at the very beginning: writing a title
Keeping it simple
Package name: short description
Header
You fill out author, maintainers, name, one-liner, repo link, version submitted
You don’t need to worry about: editor, reviewer 1, reviewer 2, archive, JOSS DOI, version accepted, or date accepted

### Code of Conduct & Commitment to Maintain Package
Link to CoC, etc. in tutorial
Provide highlights

### Description

### Scope
Is there more information I can provide here about what we do and do not accept?

### Domain specific

### Community Partnerships
How to know if your package is associated with an existing community

### Technical checks
Links to OSI approved license information
Explain what each component is and why it's important for submission

### Publication Options
Submitting to JOSS
Links from issue in tutorial

### Are you OK with Reviewers Submitting Issues and/or pull requests to your Repo Directly?
Submitting directly to your repo
Why we ask this
Confirmation
Link to author guide

### Please fill out our survey
How it helps pyOS
How long it takes to fill out
Feedback
Let us know what you like, dislike, and would like to see changed

### Editor and Review templates
Not something you need to worry about!

## <i class="fa-solid fa-hourglass"></i> What’s next: what happens after you submit your package for review
Relax, be ready (to make adjustments)
Once submit, EIC reviews package for scope and infrastructure
Takes about two weeks
May take longer if changes need to be implemented
Entire process can take approximately 3 months, but can also take considerably longer–entirely package-dependent
Full timeline (link to author guide)

# <i class="fa-regular fa-comments"></i> Talk to us!
If you found this how-to guide useful, or if you have suggestions for how to improve it, we'd love to hear from you! You can always reach out to us on [Fosstodon](https://fosstodon.org/@pyOpenSci), [LinkedIn](https://www.linkedin.com/company/pyopensci), or our [Discourse forum](https://pyopensci.discourse.group/)!