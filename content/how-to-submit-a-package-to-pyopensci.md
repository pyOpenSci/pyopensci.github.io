---
title: "How to submit a Python package to pyOpenSci for review"
description: >-
  Our open review process happens on GitHub and is community led. Learn how to
  submit a Python package to pyOpenSci for peer review.
layout: single
url: /how-to-submit-a-package-to-pyopensci/
---

## Submit your Python package for review

Awesome, you've built a Python package! How do you ensure it follows best
practices and gets seen by the broader Python community?

**pyOpenSci's peer review process** connects you with community reviewers and
editors who will help you refine your package's structure, documentation,
maintainability, and usability. pyOpenSci accepted packages:

* Join a [vetted ecosystem](/python-packages/) of high-quality scientific tools
* Benefit from increased community visibility
* Can be fast-tracked for publication in [Journal of Open Source Software (JOSS)](https://www.pyopensci.org/software-peer-review/partners/joss.html) through our end-to-end review

{{< button href="https://www.pyopensci.org/software-peer-review/about/benefits.html" variant="dark-purple" target="_blank" >}}
Learn more about the benefits of our peer review process
{{< /button >}}

{{< admonition type="info" title="Need help with your Python package?" >}}
If you need help getting your package ready for review, you can submit a help
request in our software-submission repository.

Check out the [pyOpenSci Package Guide](https://www.pyopensci.org/python-package-guide/), including
[beginning-to-end Python packaging tutorials](https://www.pyopensci.org/python-package-guide/tutorials/intro.html)
and overviews of
[continuous integration](https://www.pyopensci.org/python-package-guide/tests/tests-ci.html#run-tests-with-continuous-integration),
[testing](https://www.pyopensci.org/python-package-guide/#tests), and
[documentation](https://www.pyopensci.org/python-package-guide/#documentation) —
all required for acceptance into the [pyOpenSci ecosystem](/python-packages/).
{{< /admonition >}}

## Step-by-step guide to submitting your package for review

Our **open peer review process** happens on GitHub using structured issues in
the [**pyOpenSci software submission repository**](https://github.com/pyopensci/software-submission).
Our review process is **open, constructive, and focused on improving your
software for others to use**.

{{< button href="https://www.pyopensci.org/software-peer-review/how-to/author-guide.html" variant="dark-purple" target="_blank" >}}
Read our Author Guide for an overview of the process
{{< /button >}}

### What happens after you submit your package?

Once you submit your package, our **Editor-in-Chief** will review it to confirm:

* It fits within **pyOpenSci's scope**
* It meets **infrastructure and documentation requirements**

### Expected timeline

The timeline of your review depends upon a few things:

* Whether we have an editor on board (or need to find one) to lead a review of your package
* How long it takes your editor to find reviewers
* How much work your package needs before the review begins

However, once we find editors and reviewers for your package, you can expect a timeline like this:

* **Initial pre-review checks:** ~2 weeks (varies based on submission volume)
* **Finding editors and reviewers to lead the peer review:** ~2–4 weeks (depends on package complexity and availability)
* **Running the review:** 4–8+ weeks. This depends on the amount of reviewer feedback you get and how long it takes for you to respond to that feedback

Read the full review process in our [Peer Review Guide](https://www.pyopensci.org/software-peer-review/how-to/author-guide.html).

### 1. Check if your package is in pyOpenSci's scope

Before submitting your package for review, make sure that it fits within
[**pyOpenSci's peer review scope**](https://www.pyopensci.org/software-peer-review/about/package-scope.html).
Our package scope focuses on the scientific domains and areas in which we review.

If you are unsure if your package is in scope,
[**submit a pre-submission inquiry**](#submission-type) to get feedback from our
editorial team and ask questions.

### 2. Check that your package meets our pre-review requirements

It's also a good idea to check that your package meets
[**pyOpenSci's minimum Python package requirements**](https://www.pyopensci.org/software-peer-review/how-to/editor-in-chief-guide.html#editor-checklist-template)
before you submit. The Editor in Chief will check your package against these
criteria before the review begins.

If you have any questions or need help getting your package up to pyOpenSci
standards, we are here to help. Submit a help-request issue in our
software-submission repo or ask a question in our
[GitHub Discussions](https://github.com/orgs/pyOpenSci/discussions).

{{< admonition type="note" title="Core packaging criteria" >}}
Our packaging guide covers the core criteria which include:

* **Your package is installable** through [PyPI](https://www.pyopensci.org/python-package-guide/package-structure-code/publish-python-package-pypi-conda.html#what-is-pypi) (preferred) and/or a [Conda channel](https://www.pyopensci.org/python-package-guide/package-structure-code/publish-python-package-pypi-conda.html#what-is-conda-and-anaconda-org) (e.g., conda-forge, bioconda)
* **It has clear documentation**, including user guides, tutorials, and API documentation
* **It has automated [testing](https://www.pyopensci.org/python-package-guide/tests/write-tests.html) and [Continuous Integration (CI)](https://www.pyopensci.org/python-package-guide/tests/tests-ci.html) setup**
* **It has core [documentation files](https://www.pyopensci.org/python-package-guide/documentation/repository-files/intro.html):** including `README.md`, `LICENSE`, `CONTRIBUTING.md`, and a Code of Conduct file
{{< /admonition >}}

### 3. Submit your package for review

Once you have determined that your package is in scope and meets our core
packaging requirements, it's time to submit it for review:

1. **Go to our software submission GitHub repository**: [pyOpenSci/software-submission](https://github.com/pyOpenSci/software-submission/issues/new/choose)
2. **Click on the Issues tab**
3. <a id="submission-type"></a> **Select the appropriate issue template**
4. **Complete the issue form** and submit it

{{< button href="https://github.com/pyOpenSci/software-submission/issues/new/choose" variant="dark-purple" target="_blank" >}}
Submit your package here
{{< /button >}}

{{< admonition type="success" title="Three templates in our Issue Submission repo" >}}
* **Help request:** Need guidance on testing, docs, or packaging? Submit a help request, and our editorial team will assist.
* **[Pre-submission inquiry](https://github.com/pyOpenSci/software-submission/issues/new?template=presubmission-inquiry.md):** Unsure if your package [fits our scope](https://www.pyopensci.org/software-peer-review/about/package-scope.html)? Submit an inquiry for feedback before review.
* **Full submission:** Ready for peer review? Submit your package to kick off the process.

{{< figure src="/images/peer-review/pyopensci-software-review-issue-selection.png" alt="Screenshot of the pyOpenSci issue selection screen on GitHub with three template options." caption="Select the issue template that best fits your current situation." >}}
{{< /admonition >}}

{{< figure src="/images/peer-review/peer-review-submit-issue.gif" alt="Animated gif showing how to open a new review submission on GitHub." caption="How to open a new review submission in our GitHub repository." >}}

#### Guidelines for filling out the review issue template

When you fill out the review template, please consider the following:

##### Basic template criteria

* **Complete all sections of the template.** If you have questions about fields, you can ask about them in the review issue.
* **Do not modify existing formatting:** Please do not modify the template structure by adding elements to the template fields such as bold, italics, etc.
* **Submit your issue only when fully completed:** If you can, try to avoid submitting an issue and then continuously editing it. If you'd like to work on the issue over time, consider forking our repository and working on the issue in your fork before submitting it as an option.
* **If you made a pre-submission inquiry**, paste the link to the corresponding issue in your issue submission to link your submission request to the pre-submission discussion.

##### Long-term maintenance and code of conduct

To be considered for review, you must agree to the following when filling out the review submission:

1. **Follow our Code of Conduct:** Ensure respectful and constructive communication during and after the review.
2. **Commit to maintaining your package for at least 2 years maintenance:** Package maintenance is one area that distinguishes pyOpenSci from JOSS. If your primary goal is publication rather than ongoing package maintenance, consider submitting directly to [JOSS](https://joss.theoj.org/) instead.

```markdown
## Code of Conduct & Commitment to Maintain Package

- [ ] I agree to abide by [pyOpenSci's Code of Conduct][PyOpenSciCodeOfConduct] during the review process and in maintaining my package after should it be accepted.
- [ ] I have read and will commit to package maintenance after the review as per the [pyOpenSci Policies Guidelines][Commitment].
```

##### Our partnerships

Becoming published or affiliated with one of our partners is optional.

{{< figure src="/images/peer-review/pyos-partnerships-peer-review.png" alt="Flowchart showing pyOpenSci acceptance leading to JOSS publication and community affiliation." caption="Packages accepted into pyOpenSci can also be published in JOSS through a streamlined process." >}}

* **If you are interested in a fast track review through JOSS, be sure to check the JOSS box.** JOSS will accept our review as theirs and only review your `paper.md` file.
* **Community affiliation:** If you are interested in becoming affiliated with a partner community like [Astropy](https://www.pyopensci.org/software-peer-review/partners/astropy.html), be sure to click the community partner. Learn more about [community affiliation through pyOpenSci's peer review process here](https://www.pyopensci.org/software-peer-review/partners/scientific-communities.html).

```markdown
## Community Partnerships

If your package is associated with an existing community please check below:

- [ ] Astropy:[My package adheres to Astropy community standards](https://www.pyopensci.org/software-peer-review/partners/astropy.html)
- [ ] Pangeo: My package adheres to the [Pangeo standards listed in the pyOpenSci peer review guidebook][PangeoCollaboration]
```

##### Please fill out our survey

Completing the [pyOpenSci pre-review survey](https://forms.gle/F9mou7S3jhe8DMJ16) is a huge help to our team of volunteers, future package authors, and pyOpenSci as an organization. It helps us track submissions as well as continuously improve our peer review process.

##### Template sections that you can ignore

Some template sections are **for editors only** and should be left blank. These include:

* **Editorial assignments:** "EiC," "Editor," "Reviewer 1," "Reviewer 2"
* **JOSS-specific fields:** "JOSS DOI," "Version accepted," "Date accepted"

```yaml
# All of the fields below will be filled out by our editorial team
EiC: TBD
Editor: TBD
Reviewer 1: TBD
Reviewer 2: TBD
Archive: TBD
JOSS DOI: TBD
Version accepted: TBD
Date accepted (month/day/year): TBD
```

{{< admonition type="success" title="Need help?" >}}
Check out our [**Python packaging guide**](https://www.pyopensci.org/python-package-guide/) for best practices on packaging, testing, and infrastructure setup.
{{< /admonition >}}

Once you're ready, **submit your issue**, and our editors will take it from there!

{{< admonition type="info" title="Connect with us" >}}
If you found this how-to guide useful, or if you have suggestions for improving it, we'd love to hear from you! Reach out to us on:

* [Bluesky](https://bsky.app/profile/pyopensci.org)
* [Fosstodon](https://fosstodon.org/@pyOpenSci)
* [LinkedIn](https://www.linkedin.com/company/pyopensci)
{{< /admonition >}}
