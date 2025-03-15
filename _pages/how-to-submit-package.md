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

## <i class="fa-solid fa-rocket" style="color:#a193c6"></i> Submit your Python package for review

You’ve created a Python package—now what? How do you ensure it follows best practices, is well-documented, and reaches the right audience?

**pyOpenSci’s peer review process** connects you with experts who will help refine your package’s structure, documentation, and usability. Accepted packages become part of our vetted ecosystem, increasing their visibility and credibility. And finally, if your package is in scope, you can also publish it in the [Journal of Open Source Software (JOSS)](https://www.pyopensci.org/software-peer-review/partners/joss.html) through our single end-to-end review process.

### <i class="fa-solid fa-circle-chevron-down"></i> Why submit a Python package for review?
- <i class="fa-solid fa-eye" style="color:#8B868E"></i> **Visibility & support:** Gain expert feedback on your code, documentation, and packaging.
- <i class="fa-solid fa-check-circle" style="color:#8B868E"></i> **Quality & best practices:** Ensure your package follows open-source and scientific standards.
- <i class="fa-solid fa-book-open" style="color:#8B868E"></i> **JOSS publication:** Get the option to publish in the Journal of Open Source Software (JOSS) after acceptance.

<i class="fa-solid fa-book" style="color:#81c0aa;"></i> **[Learn more about the benefits of our peer review process](https://www.pyopensci.org/software-peer-review/about/benefits.html)**


<figure>
  <source srcset="{{ page.url | relative_url }}/images/peer-review/pyos-joss-peer-review.webp" type="image/webp">
    <img src="{{ page.url | relative_url }}/images/peer-review/pyos-joss-peer-review.png" alt="A flowchart showing how a package submitted to pyOpenSci can also be fast-tracked for JOSS publication.">
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

Our **open peer review process** happens through GitHub issues in the [**pyOpenSci software submission repository**](https://github.com/pyopensci/software-submission). Using open GitHub issues ensures a **transparent and constructive** review process focused on improving:

- **Package structure & quality:** Ensure best practices in documentation, testing, and maintenance.
- **Usability & reproducibility:** Improve user experience and scientific reliability.
- **Visibility:** Join a vetted ecosystem of high-quality, community-endorsed Python tools.

Follow the steps below to submit your package for review.

 **[<i class="fa-solid fa-book"></i> Read our Author Guide for an overview of the process](https://www.pyopensci.org/software-peer-review/how-to/author-guide.html)**{: .btn .btn--primary}


### <i class="fa-solid fa-magnifying-glass" style="color:#a193c6"></i> 1. Check if your package is in pyOpenSci's scope

Before submitting, ensure your package fits within [**pyOpenSci’s peer review scope**](https://www.pyopensci.org/software-peer-review/about/package-scope.html).

Your package is a good fit if it:

- **Supports a scientific application:** Examples include data retrieval, processing, and visualization.
- **Meets packaging & maintenance expectations:** Installable, documented, tested, and actively maintained.
- **Does not significantly overlap:** Your package should provide new functionality rather than duplicate an existing package in the ecosystem.

#### <i class="fa-solid fa-circle-question" style="color:#81c0aa;"></i> Unsure if your package is in scope?

If you're unsure, [**🔗 submit a pre-submission inquiry**](#submission-type) to get feedback from our editorial team before starting the full review process.



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
    <img src="{{ page.url | relative_url }}/images/peer-review/peer-review-submit-issue.gif" style="max-width:100%" alt="Animated gif showing how to find the GitHub issue submission process for peer review.">
    <figcaption>
      More....
    </figcaption>
</figure>

Once submitted, our editors will review your issue and guide you through the next steps.

### <i class="fa-solid fa-check" style="color:#81c0aa;"></i> Guidelines for filling out the issue template

* **Complete all sections of the template.** If you have questions about fields, you can ask about them in the review issue.
* **Do not modify existing formatting:** Please do not modify the template structure by adding elements to the template fields such as bold, italics, etc.
* **Submit your issue only when fully completed:** If you can, try to avoid submitting an issue and then continuously editing it. If you'd like to work on the issue over time, consider forking our repository and working on the issue in your fork before submitting it as an option.
* **If you made a pre-submission enquiry**, paste the link to the corresponding issue in your issue submission to link your submission request to the pre-submission discussion.

<div class="notice notice--info" markdown="1">
<i class="fa-solid fa-circle-exclamation" style="color:#81c0aa;"></i> **Why does filling out our review template matter?**
Our peer review workflow relies on scripts to process submission data. If the template structure is modified, it will break our automated processes!
</div>

### <a id="submission-type"></a> <i class="fa-solid fa-list-check" style="color:#81c0aa;"></i> Choose the correct submission type

There are **three submission types** that you can select from:

- **<i class="fa-solid fa-hand-holding-heart" style="color:#81c0aa;"></i> Help request:** If you need guidance on testing, documentation, or packaging best practices, submit a help request. Our editorial team will make sure that you get the help that you need with your Python package!
- [**<i class="fa-solid fa-magnifying-glass" style="color:#81c0aa;"></i> Pre-submission inquiry:**](https://github.com/pyOpenSci/software-submission/issues/new?template=presubmission-inquiry.md) If you are unsure if your package [fits our scope](https://www.pyopensci.org/software-peer-review/about/package-scope.html), you can submit a pre-submission inquiry to get input from our editorial team before submitting.
- **<i class="fa-solid fa-check" style="color:#81c0aa;"></i> Full submission:** If you are ready to submit a review, then use this option to submit a full submission for review which will kick-off the editorial peer review process.

**<i class="fa-solid fa-link"></i> [Click here to to our GitHub issue submission page](https://github.com/pyOpenSci/software-submission/issues/new/choose)**

<figure>
    <source srcset="{{ page.url | relative_url }}/images/peer-review/pyopensci-software-review-issue-selection.webp" type="image/webp">
    <img src="{{ page.url | relative_url }}/images/peer-review/pyopensci-software-review-issue-selection.png" style="max-width:100%" alt="Screenshot of the pyOpenSci issue selection screen on GitHub, with three options: Help Request, Presubmission Inquiry, and Submit Software for Review.">
    <figcaption>
      Above are the three issue templates that you can select from when submitting a package for review to pyOpenSci. Select the issue that best fits your current situation.
    </figcaption>
</figure>

> All **data visualization packages** must go through the pre-submission inquiry process before being considered for review.


<div class="notice notice--info" markdown="1">

### Need help with your Python package?

If you need help getting your package ready for review, you can submit a help request here, and someone will be assigned to help you. This is a great way to get guidance on topics like [continuous integration](https://www.pyopensci.org/python-package-guide/tests/tests-ci.html#run-tests-with-continuous-integration), [testing](https://www.pyopensci.org/python-package-guide/#tests), and [full documentation](https://www.pyopensci.org/python-package-guide/#documentation), all of which are required for a package to be accepted into [the pyOpenSci ecosystem](https://www.pyopensci.org/python-packages.html). You can also learn more about each of these processes in [the pyOpenSci Package Guide](https://www.pyopensci.org/python-package-guide/).

</div>

## <i class="fa-brands fa-github-alt" style="color:#81c0aa;"></i> About our GitHub issue submission process

The structured template of our GitHub issue helps our editorial board evaluate your package efficiently. This section will help you understand some of the core elements of our template.

### <i class="fa-solid fa-eye-slash" style="color:#81c0aa;"></i> Sections you can ignore

Some template sections are **for editors only** and should be left blank. These include:

- **Editorial assignments:** "EiC," "Editor," "Reviewer 1," "Reviewer 2"
- **JOSS-specific fields:** "JOSS DOI," "Version accepted," "Date accepted"

```yaml
# All of the fields below will be filled out by out editorial team
EiC: TBD
Editor: TBD
Reviewer 1: TBD
Reviewer 2: TBD
Archive: TBD
JOSS DOI: TBD
Version accepted: TBD
Date accepted (month/day/year): TBD
```

### JOSS publication

One of the benefits of submitting your package to pyOpenSci for review is that once it's approved, it can be fast-tracked for publication with [JOSS](https://joss.theoj.org/). JOSS accepts pyOpenSci's review as theirs, and therefore, you will not need to go through another full review. Instead, JOSS will only review your paper.md file.

### <i class="fa-solid fa-users" style="color:#81c0aa;"></i> Community partnerships


We collaborate with [domain-specific organizations](https://www.pyopensci.org/software-peer-review/partners/scientific-communities.html) that run their own package review processes. Instead of undergoing **separate reviews**, you package can be considered for affiliation with three organizations in **one streamlined pyOpenSci review**.

If your package fits within a partnered domain, we will assign an editor familiar with both **pyOpenSci’s** and the affiliated community’s **review standards**.
This allows your package to:

- **Gain community affiliation** (for example, Astropy for astronomy-related packages).
- **Join pyOpenSci’s vetted ecosystem** as a recognized open source tool.
- **Optionally be fast-tracked for publication in JOSS** after pyOpenSci acceptance.

**[Astropy](https://www.pyopensci.org/software-peer-review/partners/astropy.html)** is currently our most active partnership.

*Below is the template if you want to be considered for partner-community affiliation.*

```markdown

## Community Partnerships

If your package is associated with an existing community please check below:

- [ ] Astropy:[My package adheres to Astropy community standards](https://www.pyopensci.org/software-peer-review/partners/astropy.html)
- [ ] Pangeo: My package adheres to the [Pangeo standards listed in the pyOpenSci peer review guidebook][PangeoCollaboration]
```

<figure>
  <source srcset="{{ page.url | relative_url }}/images/peer-review/pyos-partnerships-peer-review.webp" type="image/webp">
    <img src="{{ page.url | relative_url }}/images/peer-review/pyos-partnerships-peer-review.png" alt="A flowchart showing how a package submitted to pyOpenSci can also be fast-tracked for JOSS publication." style="width: 70%;  display: block; margin: 0 auto;">
  <figcaption>
       Packages accepted into pyOpenSci can also be published in JOSS through a streamlined process.

  </figcaption>
</figure>


### Code of conduct & package maintenance commitment

To be considered for review, you must agree to both:
1. **Follow our Code of Conduct:** Ensure respectful and constructive collaboration.
2. **Commit to package maintenance:** Keep your package updated after acceptance.


```markdown
## Code of Conduct & Commitment to Maintain Package

- [ ] I agree to abide by [pyOpenSci's Code of Conduct][PyOpenSciCodeOfConduct] during the review process and in maintaining my package after should it be accepted.
- [ ] I have read and will commit to package maintenance after the review as per the [pyOpenSci Policies Guidelines][Commitment].
```

#### <i class="fa-solid fa-comments" style="color:#81c0aa;"></i> Code of conduct: constructive collaboration

pyOpenSci’s peer review is a **collaborative process** focused on **improving your package**.
We require all maintainers, reviewers, and editors to follow our [Code of Conduct](https://www.pyopensci.org/handbook/CODE_OF_CONDUCT.html) to ensure discussions remain **professional, constructive, and respectful**.


#### <i class="fa-solid fa-wrench" style="color:#81c0aa;"></i> Package maintenance: sustaining a curated ecosystem

Our peer review process aims to build a **trusted ecosystem of well-maintained scientific Python packages**. Maintainers should expect to **actively maintain** their package for at least **2 years** after acceptance.

If your primary goal is publication rather than ongoing package maintenance, consider submitting directly to [JOSS](https://joss.theoj.org/) instead.

<!--
You can indicate your agreement in one of two ways:
* adding an "X" (without quotation marks) inside the brackets in the Markdown version of the issue, so that it reads like this: [X]
* submitting the issue without making any changes to this section, and then clicking on the checkboxes when they're rendered in the submitted issue.
 -->

## TODO: add screenshot of the preview

<div class="notice notice--tip" markdown="1">
One of the quirky things about the pyOpenSci submission template is that checkboxes have two completion methods:
- You can manually add an "X" inside the box (`[X]`).
- Or, after submission, click the box to check it off.

Need more Markdown help? Check out this [Markdown Guide](https://www.markdownguide.org/basic-syntax/).
</div>

Once you're ready, **submit your issue**, and our editors will take it from there! 🚀

#### Please fill out our survey

Completing the [pyOpenSci pre-review survey](https://forms.gle/F9mou7S3jhe8DMJ16) is a huge help to our team of volunteers, future package authors, and pyOpenSci as an organization. It helps us track submissions as well as continuously improve our peer review process.

### <i class="fa-solid fa-hourglass" style="color:#81c0aa;"></i> What happens after you submit your package?

Once you submit your package, our **Editor-in-Chief** will review it to confirm:
- <i class="fa-solid fa-check" style="color:#81c0aa;"></i> It fits within **pyOpenSci’s scope**
- <i class="fa-solid fa-check" style="color:#81c0aa;"></i> It meets **infrastructure and documentation requirements**

#### <i class="fa-solid fa-calendar-days" style="color:#81c0aa;"></i> Timeline overview

- <i class="fa-solid fa-clock" style="color:#81c0aa;"></i> **Initial checks:** ~2 weeks (varies based on submission volume)
- <i class="fa-solid fa-users" style="color:#81c0aa;"></i> **Full peer review:** ~3 months (depends on package complexity)

During this process, editors may request **minor updates** to help your package move forward smoothly.

📖 **Read the full review process in our** [Peer Review Guide](https://www.pyopensci.org/software-peer-review/how-to/author-guide.html).

<div class="notice notice--info" markdown="1">
## <i class="fa-regular fa-comments"></i> Connect with us!

If you found this how-to guide useful, or if you have suggestions for improving it, we'd love to hear from you! Reach out to us on:

* [BlueSky]()
* [Fosstodon](https://fosstodon.org/@pyOpenSci),
* [LinkedIn](https://www.linkedin.com/company/pyopensci),
</div>
