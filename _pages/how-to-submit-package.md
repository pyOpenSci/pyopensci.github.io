---
layout: single
title: "How to submit a Python package to pyOpenSci for review"
header:
  overlay_image: images/headers/pyos-peer-review-header.png
author_profile: false
published: true
site-map: true
permalink: /how-to-submit-a-package-to-pyopensci.html
classes: wide
toc: true
---

## <i class="fa-solid fa-rocket" style="color:#a193c6"></i> Submit your Python package for review

Awesome, you’ve built a Python package! How do you ensure it follows best practices and gets seen by the broader Python community?

**pyOpenSci’s peer review process** connects you with community reviewers and editors who will help you refine your package's structure, documentation, maintainability, and usability. pyOpenSci accepted packages:
* Join a [vetted ecosystem]({{ '/python-packages.html' | relative_url }}) of high-quality scientific tools
* Benefit from increased community visibility
* Can be fast-tracked for publication in [Journal of Open Source Software (JOSS)](https://www.pyopensci.org/software-peer-review/partners/joss.html) through our end-to-end review.

 **[<i class="fa-solid fa-book" style="color:#81c0aa;"></i> Learn more about the benefits of our peer review process](https://www.pyopensci.org/software-peer-review/about/benefits.html)**{: .btn .btn--success}
<!--
<figure>
  <source srcset="{{ '/images/peer-review/pyos-joss-peer-review.webp' | relative_url }}" type="image/webp">
    <img src="{{ '/images/peer-review/pyos-joss-peer-review.png' | relative_url }}" alt="A flowchart showing how a package submitted to pyOpenSci can also be fast-tracked for JOSS publication.">
  <figcaption>
       Packages accepted into pyOpenSci can also be published in JOSS through a streamlined process.
  </figcaption>
</figure> -->

<div class="notice notice--info" markdown="1">

Need help with your Python package?
{: .header }

If you need help getting your package ready for review, you can submit a help request in our software-submission repository.

You can also check out the [pyOpenSci Package Guide](https://www.pyopensci.org/python-package-guide/) which contains both

* [Beginning-to-end Python packaging tutorials](https://www.pyopensci.org/python-package-guide/tutorials/intro.html)

and overviews of:

* [continuous integration](https://www.pyopensci.org/python-package-guide/tests/tests-ci.html#run-tests-with-continuous-integration),
* [testing](https://www.pyopensci.org/python-package-guide/#tests), and
* [documentation](https://www.pyopensci.org/python-package-guide/#documentation), all of which are required for a package to be accepted into [the pyOpenSci ecosystem](https://www.pyopensci.org/python-packages.html).

</div>

## <i class="fa-solid fa-list-check" style="color:#81c0aa;"></i> Step-by-step guide to submitting your package for review

Our **open peer review process** happens on GitHub using structured issues in the [**pyOpenSci software submission repository**](https://github.com/pyopensci/software-submission). Our review process is **open, constructive, and focused on improving your software for others to use**.


 **[<i class="fa-solid fa-book"></i> Read our Author Guide for an overview of the process](https://www.pyopensci.org/software-peer-review/how-to/author-guide.html)**{: .btn .btn--success}

### <i class="fa-solid fa-hourglass" style="color:#81c0aa;"></i> What happens after you submit your package?

Once you submit your package, our **Editor-in-Chief** will review it to confirm:
- <i class="fa-solid fa-check" style="color:#81c0aa;"></i> It fits within **pyOpenSci’s scope**
- <i class="fa-solid fa-check" style="color:#81c0aa;"></i> It meets **infrastructure and documentation requirements**


### <i class="fa-solid fa-calendar-days" style="color:#81c0aa;"></i> Expected timeline
The timeline of your review depends upon a few things:

* Whether we have an editor on board (or need to find one) to lead a review of your package
* How long it takes your editor to find reviewers
* How much work your package needs before the review begins.

However, once we find editors and reviewers for your package, you can expect a timeline like this:

- <i class="fa-solid fa-clock" style="color:#81c0aa;"></i> **Initial Pre-review checks:** ~2 weeks (varies based on submission volume)
- <i class="fa-solid fa-users" style="color:#81c0aa;"></i> **Finding editors and reviews to lead the review peer review:** ~2-4 weeks (depends on package complexity and availability)
- <i class="fa-solid fa-users" style="color:#81c0aa;"></i> **Running the review:** 4-8+ weeks. This depends on the amount of reviewer feedback you get and how long it takes for you to respond to that feedback.

📖 **Read the full review process in our** [Peer Review Guide](https://www.pyopensci.org/software-peer-review/how-to/author-guide.html).

### <i class="fa-solid fa-magnifying-glass" style="color:#a193c6"></i> 1. Check if your package is in pyOpenSci's scope

Before submitting your package for review, make sure that it fits within [**pyOpenSci’s peer review scope**](https://www.pyopensci.org/software-peer-review/about/package-scope.html).
Our package scope focuses on the scientific domains and areas in which we review.

If you are unsure if your package is in scope, [**🔗 submit a pre-submission inquiry**](#submission-type) to get feedback from our editorial team and ask questions.

### <i class="fa-brands fa-github-alt" style="color:#a193c6"></i> 2. Check that your package meets are  pre-review requirements

It's also a good idea to check that your package meets [**pyOpenSci’s minimum Python package requirements**](https://www.pyopensci.org/software-peer-review/how-to/editor-in-chief-guide.html#editor-checklist-template). So check that your package meets those criteria before you submit.
The Editor in Chief will check your package against these criteria before the review begins.

If you have any questions or need help getting your package up to pyOpenSci standards, we are here to help. Submit a help-request issue in our software-submission repo or ask a question in our Discourse.

<div class="notice" markdown="1">
Our packaging guide covers the core criteria which include:
* <i class="fa-solid fa-box" style="color:#81c0aa;"></i> **Your package is installable:** through [PyPI](https://www.pyopensci.org/python-package-guide/package-structure-code/publish-python-package-pypi-conda.html#what-is-pypi) (preferred) and/or a [Conda channel](https://www.pyopensci.org/python-package-guide/package-structure-code/publish-python-package-pypi-conda.html#what-is-conda-and-anaconda-org) (e.g., conda-forge, bioconda).
* <i class="fa-solid fa-book" style="color:#81c0aa;"></i> **It has clear documentation:** including user guides, tutorials, and API documentation.
* <i class="fa-solid fa-vial" style="color:#81c0aa;"></i> **It has automated [testing](https://www.pyopensci.org/python-package-guide/tests/write-tests.html) & [Continuous Integration (CI)](https://www.pyopensci.org/python-package-guide/tests/tests-ci.html) setup:**
* <i class="fa-brands fa-github" style="color:#81c0aa;"></i> **It has core [documentation files](https://www.pyopensci.org/python-package-guide/documentation/repository-files/intro.html):** Including `README.md`, `LICENSE`, `CONTRIBUTING.md`, and a Code of Conduct file.
</div>


### <i class="fa-brands fa-github-alt" style="color:#a193c6"></i> 3. Submit your package for review

Once you have determined that your package is in scope and meets our core packaging requirements, it's time to submit it for review:

1. **Go to our software submission GitHub repository**: [pyOpenSci/software-submission](https://github.com/pyOpenSci/software-submission/issues/new/choose)
2. **Click on the Issues tab**
3. <a id="submission-type"></a> <i class="fa-solid fa-list-check" style="color:#81c0aa;"></i> **Select the appropriate issue template**
4. **Complete the issue form** and submit it

**<i class="fa-solid fa-link"></i> [Submit your package here](https://github.com/pyOpenSci/software-submission/issues/new/choose)**{: .btn .btn--success}

<div class="notice notice--success" markdown="1">
There are **three templates in our Issue Submission repo**:

- **<i class="fa-solid fa-hand-holding-heart" style="color:#81c0aa;"></i> Help request:** Need guidance on testing, docs, or packaging? Submit a help request, and our editorial team will assist.
- [**<i class="fa-solid fa-magnifying-glass" style="color:#81c0aa;"></i> Pre-submission inquiry:**](https://github.com/pyOpenSci/software-submission/issues/new?template=presubmission-inquiry.md) Unsure if your package [fits our scope](https://www.pyopensci.org/software-peer-review/about/package-scope.html)? Submit an inquiry for feedback before review.
- **<i class="fa-solid fa-check" style="color:#81c0aa;"></i> Full submission:** Ready for peer review? Submit your package to kick off the process.


<figure>
    <source srcset="{{ '/images/peer-review/pyopensci-software-review-issue-selection.webp' | relative_url }}" type="image/webp">
    <img src="{{ '/images/peer-review/pyopensci-software-review-issue-selection.png' | relative_url }}" style="max-width:100%" alt="Screenshot of the pyOpenSci issue selection screen on GitHub, with three options: Help Request, Presubmission Inquiry, and Submit Software for Review.">
    <figcaption>
      Above are the three issue templates that you can select from when submitting a package for review to pyOpenSci. Select the issue that best fits your current situation.
    </figcaption>
</figure>
</div>


<figure>
    <img src="{{ '/images/peer-review/peer-review-submit-issue.gif' | relative_url }}" style="max-width:100%" alt="Animated gif showing how to find the GitHub issue submission process for peer review.">
    <figcaption>
      How to open a new review submission in our GitHub repository.
    </figcaption>
</figure>


#### <i class="fa-solid fa-check" style="color:#81c0aa;"></i> Guidelines for filling out the review issue template

When you fill out the review template, please consider the following:

##### Basic template criteria
* **Complete all sections of the template.** If you have questions about fields, you can ask about them in the review issue.
* **Do not modify existing formatting:** Please do not modify the template structure by adding elements to the template fields such as bold, italics, etc.
* **Submit your issue only when fully completed:** If you can, try to avoid submitting an issue and then continuously editing it. If you'd like to work on the issue over time, consider forking our repository and working on the issue in your fork before submitting it as an option.
* **If you made a pre-submission inquiry**, paste the link to the corresponding issue in your issue submission to link your submission request to the pre-submission discussion.

##### Long term maintenance and code of conduct

To be considered for review, you must agree to the following when filling our the review submission:
1. **Follow our Code of Conduct:** Ensure respectful and constructive communication during and after the review.
2. **Commit to maintaining your package for at least 2 years maintenance:** Package maintenance is on area that distinguishes pyOpenSci from JOSS. If your primary goal is publication rather than ongoing package maintenance, consider submitting directly to [JOSS](https://joss.theoj.org/) instead.

```markdown
## Code of Conduct & Commitment to Maintain Package

- [ ] I agree to abide by [pyOpenSci's Code of Conduct][PyOpenSciCodeOfConduct] during the review process and in maintaining my package after should it be accepted.
- [ ] I have read and will commit to package maintenance after the review as per the [pyOpenSci Policies Guidelines][Commitment].
```

##### Our partnerships

Becoming published or affiliated with one of our partners is optional.

<figure>
  <source srcset="{{ '/images/peer-review/pyos-partnerships-peer-review.webp' | relative_url }}" type="image/webp">
    <img src="{{ '/images/peer-review/pyos-partnerships-peer-review.png' | relative_url }}" alt="A flowchart showing how a package submitted to pyOpenSci can also be fast-tracked for JOSS publication." style="width: 70%;  display: block; margin: 0 auto;">
  <figcaption>
       Packages accepted into pyOpenSci can also be published in JOSS through a streamlined process.

  </figcaption>
</figure>

* **If you are interested in a fast track review through JOSS, be sure to check the JOSS box** JOSS will accept our review as theirs and only review your paper.md file.
* **Community Affiliation:** If you are interested in becoming affiliated with a partner community like [Astropy](https://www.pyopensci.org/software-peer-review/partners/astropy.html), be sure to click the community partner. Learn more about [community affiliation through pyOpenSci's peer review process here](https://www.pyopensci.org/software-peer-review/partners/scientific-communities.html).

```markdown
## Community Partnerships

If your package is associated with an existing community please check below:

- [ ] Astropy:[My package adheres to Astropy community standards](https://www.pyopensci.org/software-peer-review/partners/astropy.html)
- [ ] Pangeo: My package adheres to the [Pangeo standards listed in the pyOpenSci peer review guidebook][PangeoCollaboration]
```

##### Please fill out our survey

Completing the [pyOpenSci pre-review survey](https://forms.gle/F9mou7S3jhe8DMJ16) is a huge help to our team of volunteers, future package authors, and pyOpenSci as an organization. It helps us track submissions as well as continuously improve our peer review process.

##### <i class="fa-solid fa-eye-slash" style="color:#81c0aa;"></i> Template sections that you can ignore

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

<!-- <div class="notice notice--info" markdown="1">
<i class="fa-solid fa-circle-exclamation" style="color:#81c0aa;"></i> **Why does filling out our review template matter?**
Our peer review workflow relies on scripts to process submission data. If the template structure is modified, it will break our automated processes!
</div> -->

<div class="notice notice--success" markdown="1">

<i class="fa-solid fa-graduation-cap" style="color:#81c0aa;"></i> Need help?
{: .header }

Check out our [**<i class="fa-solid fa-link"></i> Python packaging guide**](https://www.pyopensci.org/python-package-guide/) for best practices on packaging, testing, and infrastructure setup.

</div>

Once you're ready, **submit your issue**, and our editors will take it from there! 🚀

<div class="notice notice--info" markdown="1">
## <i class="fa-regular fa-comments"></i> Connect with us!

If you found this how-to guide useful, or if you have suggestions for improving it, we'd love to hear from you! Reach out to us on:

* [BlueSky](https://bsky.app/profile/pyopensci.org)
* [Fosstodon](https://fosstodon.org/@pyOpenSci)
* [LinkedIn](https://www.linkedin.com/company/pyopensci)
</div>
