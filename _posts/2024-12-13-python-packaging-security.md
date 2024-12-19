---
layout: single
title: "How to Secure Your Python Packages on PyPI: Stop the Mining Madness"
excerpt: "Learn how to secure your Python package PyPI publishing workflows and protect your package from attacks. This post covers actionable steps, using PyPI Trusted Publisher, and sanitizing workflows, to ensure your projects stay safe."
author: "Leah Wasser"
permalink: /blog/python-packaging-security-publish-pypi.html
header:
  overlay_image: images/headers/pyopensci-inessa.png
  overlay_filter: rgba(20, 13, 36, 0.3)
categories:
  - blog-post
  - community
classes: wide
toc: true
comments: true
last_modified: 2024-12-13
---

## Is your PyPI publication workflow secure?

We can learn a lot from the recent Python package breach [involving Ultralytics](https://blog.pypi.org/posts/2024-12-11-ultralytics-attack-analysis/). This breach has highlighted our need to use more secure PyPI publishing workflows.

In this breach, hackers exploited a GitHub action workflow to inject malicious code into a Python package. This package was then published to PyPI. The outcome: Users who downloaded the package unknowingly allowed their machines to be hijacked for Bitcoin mining.

{% include pyos-blockquote.html quote="Hackers tricked a Python package into running bad code, using other people’s computers to mine Bitcoin without permission. Yikes!" class="highlight" %}

While unsettling, there’s a silver lining: the PyPI security team had already addressed most of the issues that caused this breach.

{% include pyos-blockquote.html quote="Because the Ultralytics project was using Trusted Publishing and the PyPA’s publishing GitHub Action: PyPI staff, volunteers, and security researchers were able to dig into how maliciously injected software was able to make its way into the package." author="Seth Larson, PSF Security Expert" class="highlight magenta" %}

This incident underscores the importance of understanding Python packaging security best practices, and this includes understanding how to lock things down on GitHub & GitLab!

Here, I'll cover the lessons learned that you can apply TODAY to your Python packaging workflows!

<div class="notice" markdown="1">
## TL;DR Takeaways

The Ultralytics breach is a wake-up call for all maintainers: secure your workflows to protect your users and the Python ecosystem. The most important steps that you can take are actually the simplest:

Below are **2 things that you can do right now** to secure your PyPI Python packaging workflow:

### Secure GitHub--Human and GitHub--PyPI connections


### Strengthen PyPI security
- 🔑 Set up Trusted Publisher for tokenless authentication with PyPI and **always** set the validated environment in it.
- 📱 Enable 2FA for your PyPI account and store recovery codes securely.

1. 🔒 If you have a GitHub action that publishes to PyPI, make sure that the publish section of your action uses a GitHub environment. Name that environment `pypi` and set environment permissions in GitHub that allow specific trusted maintainers to authorize the environment to run. I'll show you how to do this below.
1. 🤝 Create a Trusted Publisher link between GitHub and PyPI. You can call this trusted connection within the locked-down GitHub environment (named `pypi`) that you created above.

Together, these two measures protect both sides of your PyPI publication process - the trigger on GitHub and the connection between GitHub and PyPI.

Yaas!

If you want a 🍒 cherry on top (because who doesn't love cherries?!), add [`zizmor`](https://woodruffw.github.io/zizmor/) to your build to check GitHub actions for vulnerabilities. We'll talk about zizmor, more, below.

These steps (and the other best practices mentioned below) will significantly reduce risks to your packages, contributors, and the broader Python ecosystem.

Don’t wait--start securing your Python publishing workflows today.

TODO add all reviewers and link to their githubs...
note: many thanks to xxxx for reviewing this post for accuracy and accessibility!
</div>


## A call to (GitHub) actions ...

The Ultralytics breach highlights the need for us all to follow and understand secure PyPI publishing practices and carefully monitor workflows. Below are actionable steps you can take to enhance security when publishing Python packages to PyPI using GitHub actions.

## 1. Create a dedicated GitHub environment for publishing actions

First, make sure that your publish action uses an isolated GitHub environment. Isolated environments ensure your publishing process remains secure even if other parts of your CI pipeline are compromised. This is because you can lock an environment down by ensuring that only specific users have access to authorize this environment to run.

If you look at the pyoMeta workflow, notice that we have an [environment called `pypi`](https://github.com/pyOpenSci/pyosMeta/blob/2a09fba/.github/workflows/publish-pypi.yml#L57) that is used for trusted publishing. The `pypi` environment creates a direct link between this action and PyPI Trusted Published (discussed below).

```yaml
  publish:
    name: >-
      Publish Python 🐍 distribution 📦 to PyPI
    if: github.repository_owner == 'pyopensci'
    needs:
      - build
    runs-on: ubuntu-latest
    environment:
      name: pypi
      url: https://pypi.org/p/pyosmeta
```

To lock the environment down in GitHub go to:

* settings --> environments --> add the environment name --> and then add trusted users who can manually authorize the action that uses the environment to run.

TODO: add an animated gif that shows creating the environment in GitHub. or add a screenshot of the environment screen where you make a new one.
{: .notice }

<figure>
    <img src="/images/python-packaging/github-action-environment-pypi.png" alt="Screenshot of the GitHub settings interface showing the ‘Environments’ section with configuration options for ‘pypi.’ The ‘Deployment protection rules’ section is visible, with ‘Required reviewers’ enabled and two reviewers listed: ‘lwasser’ and ‘willingc.’ Other options such as ‘Prevent self-review’ and ‘Wait timer’ are present but not enabled.">
  <figcaption>
    GitHub environment settings for “pypi,” displaying deployment protection rules with required reviewers configured for workflow approvals.
  </figcaption>
</figure>


## 2. 🔑 Use Trusted Publisher for PyPI

If you only [publish locally to PyPI using the command line](https://www.pyopensci.org/python-package-guide/tutorials/publish-pypi.html), you must use a PyPI token. However, if you’re using GitHub Actions to automate your publishing process, setting up **Trusted Publisher** is a secure and easier-to-manage option.

A Trusted Publisher setup creates a secure link or "pipeline" between PyPI and your GitHub repository because:
- PyPI is allowed to authenticate your [package distribution files (sDist and Wheel archives)](https://www.pyopensci.org/python-package-guide/package-structure-code/python-package-distribution-files-sdist-wheel.html#how-to-create-the-distribution-format-that-pypi-and-pip-expects) uploads directly, so no additional configuration is required.
- It restricts publishing to specific GitHub action workflows and environments defined in your repository.


Using a Trusted publisher + a locked-down environment eliminates the need to store sensitive tokens as GitHub secrets. It also removes the need to refresh and update tokens periodically to avoid issues with token leaks or theft.
{: .notice .notice--success }

### How to get started

[PyPI provides a great guide to getting started with Trusted Publisher](https://docs.pypi.org/trusted-publishers/adding-a-publisher/).

The basic steps associated with Trusted Publisher are:
1. Go to your PyPI account and add a trusted publisher workflow to your account.
2. Fill out a form that looks like the one below. Notice that it asks for your workflow name, environment (STRONGLY recommended), and package name.
3. Update your GitHub action workflow to reference the Trusted Publisher configuration.
=======
2. Fill out a form that looks like the one below. Notice that it asks for your workflow name, (optional) environment, and package name.
3. Update your GitHub Actions workflow to reference the Trusted Publisher configuration.
>>>>>>> e16facb (fix: edits from @webknjaz)

<figure>
  <picture>
    <source srcset="/images/python-packaging/trusted-publisher-form.webp" type="image/webp">
    <img src="trusted-publisher-form.webp" alt="PyPI Trusted Publisher form example showing settings for linking a GitHub repository with PyPI for secure publishing." loading="lazy">
  </picture>
  <figcaption>
    Example of the PyPI Trusted Publisher form, used to securely link a GitHub repository with PyPI for publishing Python packages. Trusted Publisher reduces the risk of token theft and improves overall security.
  </figcaption>
</figure>

You can see how to set up GitHub Actions securely in our own [PyPI publishing GitHub workflow](https://github.com/pyOpenSci/pyosMeta/blob/main/.github/workflows/publish-pypi.yml), which follows the Trusted Publisher approach.

**Note:** Read more here about [support for publishing to GitLab](https://docs.pypi.org/trusted-publishers/adding-a-publisher/#gitlab-cicd) using trusted publishing.
{: .notice }

## 3. Consider adding zizmor to your builds

Finally, consider adding [Zizmor](https://woodruffw.github.io/zizmor/) to your builds. Zizmor is a static analysis tool designed to help identify GitHub Action security issues. Zizmor scans your workflows and highlights common vulnerabilities, ensuring your (continuous integration / continuous deployment) pipelines remain secure and efficient.

**TODO: link to packaging guide page on CI when it's published friday**

Named as a playful nod to Dr. Zizmor’s famous “clear skin” ads, Zizmor aims to give you “beautiful clean workflows.” The tool is beginner-friendly and straightforward to use, even for those new to workflow security.

Learn more about Zizmor on the [official blog post by Yossarian](https://blog.yossarian.net/2024/10/27/Now-you-can-have-beautiful-clean-workflows).
{: .notice .notice--success }

### How it works

To use zizmor first install it using `pip` or `pipx`:

`pip install zizmor`

Then, ask it to check a specific workflow file (or set of files).

Below, I ran it on our pyosMeta PyPI build. Among other things, it found a template injection risk in our build that we can easily fix by adding a sanitization step discussed below!

PyPI really is on top of things!

```bash
$ zizmor .github/workflows/publish-pypi.yml

error[template-injection]: code injection via template expansion
   --> path/here/pyosMeta/.github/workflows/publish-pypi.yml:97:7
github.ref_name may expand into attacker-controllable code
```

## Other security measures you can consider

There are other things that we can learn too from the recent breach. These are discussed below.


## Sanitize branch names in your workflow

One of the critical issues in the Ultralytics breach involved a
[**malicious branch name containing a shell script**](https://github.com/ultralytics/ultralytics/pull/18020)
that was executed because `github.ref` was used without sanitization. This type
of attack, known as **template injection**, allows malicious content in branch
names to be treated as shell commands.

{% include pyos-blockquote.html quote="...is a classic GitHub Actions template injection: the expansion of `github.head_ref || github.ref` is injected directly into the shell’s context, with no quoting or interpolation.." author="https://blog.yossarian.net/2024/12/06/zizmor-ultralytics-injection" class="highlight magenta" %}

Because the branch name wasn’t sanitized, it was treated as a shell command and executed with full permissions. Yikes!

In the example below, an unsanitized branch name could execute harmful commands:

```yaml
jobs:
  example-job:
    runs-on: ubuntu-latest
    steps:
      - name: Run a script
        run: |
          echo "Running script for branch: $GITHUB_REF"
```

To prevent this, [sanitize or clean](https://docs.github.com/en/get-started/using-git/dealing-with-special-characters-in-branch-and-tag-names) branch names before using them. A small Bash step can
remove unsafe characters:


```
jobs:
  example-job:
    runs-on: ubuntu-latest
    steps:
      - name: Sanitize branch name
        run: |
          SAFE_BRANCH=$(echo $GITHUB_REF | sed 's/[^a-zA-Z0-9_\-\/]//g')
          echo "Sanitized branch name: $SAFE_BRANCH"
          echo "Running script for branch: $SAFE_BRANCH"
```


## Lock down GitHub permissions

In addition to securing your workflows, lock down your accounts and repositories. 2FA (2-factor authentication) is thankfully now required as a security measure for both GitHub and PyPI. However, be sure to store your recovery codes somewhere safe (like in a password manager!).

Also consider:

- **Revoking old tokens**: If you've previously created PyPI API tokens and/or associated GitHub secrets, delete any unused or outdated ones.
- **Restrict repository access**: Limit write GitHub repository access to a trusted subset of maintainers. Most contributors don’t need direct write access, which reduces security risks.


### 🚫 Avoid `pull_request_target` and consider release-based workflows

A trigger event in a GitHub action is an event that sets off an action to run. For instance, you might have a trigger that runs a linter like Black or Ruff when a new pull request is opened.

The [`pull_request_target`](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#pull_request_target) trigger event in GitHub Actions that Ultralytics used, allows workflows to run with elevated permissions on the base branch, even when triggered by changes from a fork. Thus, your workflow becomes vulnerable when used as a trigger to push a release to PyPI.

Instead of a pull_request_target or a pull_request, consider adopting a **release-based publishing workflow**. This approach:

- Triggers publication workflows only on new versioned releases. You can lock down which maintainers are allowed to create releases using GitHub permissions
- Ensure workflows related to publishing are explicitly scoped to `release` events.

In the example GitHub action .yaml file below, you see a `release` trigger defined. This tells the action to only trigger the workflow when you publish a release.


```yaml
name: Publish to PyPI
on:
  # By using release - only people with admin access to make releases to our repo can trigger the push to PyPI
  release:
    types: [published]
```

Using a release-based workflow ensures that your publishing step is tightly controlled. A pull request will never accidentally trigger a publish build. This reduces your risk!



## Don’t cache package dependencies in your publish step

Caching dependencies involves storing dependencies to be reused in future workflow runs. This approach saves time, as GitHub doesn’t need to redownload all dependencies each time the workflow runs.

However, caching dependencies can allow attackers to manipulate cached artifacts. If this happens, the workflow may pull in compromised versions from the cache during the next run.


## Learn More

pyOpenSci follows best practices for PyPI publishing using our custom GitHub Actions workflow. Check out our tutorial on Python packaging here:
👉 [pyOpenSci Packaging Tutorial](https://www.pyopensci.org/python-package-guide/package-structure-code/python-package-structure.html)
👉 Join our discourse here

<div class="notice" markdown="1">
## Get involved with pyOpenSci

* Keep an eye on our [events page](/events.html) for upcoming training events.

Follow us on social platforms:

* [<i class="fa-brands fa-discourse"></i> Discourse](https://pyopensci.discourse.group/)
* [<i class="fa-brands fa-mastodon"></i> Mastodon](https://fosstodon.org/@pyopensci)
* [<i class="fa-solid fa-cloud"></i> Bluesky](https://bsky.app/profile/pyopensci.bsky.social)
* [<i class="fa-brands fa-linkedin"></i> LinkedIn](https://www.linkedin.com/company/pyopensci)
* [<i class="fa-brands fa-github"></i> GitHub](https://github.com/pyOpenSci)

If you are on LinkedIn, you should [subscribe to our newsletter, too](https://www.linkedin.com/newsletters/7179551305344933888/?displayConfirmation=true).
</div>

****** TODO add this link****
https://packaging.python.org/en/latest/guides/publishing-package-distribution-releases-using-github-actions-ci-cd-workflows/
