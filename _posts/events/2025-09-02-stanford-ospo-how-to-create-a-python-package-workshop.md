---
layout: single
title: "pyOpenSci Workshop: Create a Python package -- Stanford Open Source Program Office"
excerpt: "Python packaging can be tricky to navigate. pyOpenSci will lead a pilot workshop on creating your first Python package. The goal of this workshop is to help scientists learn how to package and make code installable and shareable. Read on to learn more!"
author: "pyopensci"
event:
  start_date: "2025-10-02"
  location: Online
  cost: This workshop is paid through Stanford's membership with pyOpenSci.
permalink: /events/pyopensci-stanford-create-python-package-workshop.html
header:
  overlay_image: images/headers/pyopensci-sustainability.png
categories:
  - events
classes: wide
type: "event"
last_modified: 2025-09-02
comments: true
---

## Create a Python package: make your Python code easier to share and use

* **When:** Thursday, 2 October @ 10:00 AM Mountain Time // 9:00AM Pacific Time
* **Where:** We will use the Spatial Chat platform to create a classroom-like learning experience.

This event, hosted in partnership with [Stanford’s Open Source Program
Office](https://opensource.stanford.edu/), teaches participants best practices for packaging their Python code. You will learn how to build more reliable research tools and software development skills.

## Setup instructions

You can choose to work on your own machine during the workshop or use the GitHub Codespace we've set up for you. Codespaces include all the tools needed to create your first package—preinstalled and ready to go.

We encourage you to use GitHub Codespaces! If you prefer to install things locally, please do so **before** the workshop.

[Need help? Ask us on Discord.](https://discord.gg/m7RFFxnc)

### 1. Make sure you have a GitHub and Test PyPI account

Before the workshop, please create and log into the following accounts:

1. [Create a free GitHub account](https://www.github.com) if you don’t already have one.
2. [Create a free account on Test PyPI](https://test.pypi.org/account/register) — we’ll use this to practice publishing packages.


> <i class="fa-solid fa-lock"></i> **Important:** To follow along when we publish to Test PyPI, you must enable **two-factor authentication (2FA)** on your Test PyPI account. We strongly recommend doing this **before** the workshop!
{: .notice .notice-important}

## 2a. Setup for working locally on your laptop

We recommend using GitHub Codespaces (see next section) to avoid issues with environment setup. However, if you prefer to work locally, please ensure your environment is set up and ready before the workshop.

If you're comfortable with Python environments, arrive with an environment that has:

- [Hatch installed](https://www.pyopensci.org/python-package-guide/tutorials/get-to-know-hatch.html#install-hatch)
- [Copier installed](https://copier.readthedocs.io/en/stable/#installation)
    - You can install both via `pipx`, `uv`, pixi, or any preferred package manager.
- [VS Code](https://code.visualstudio.com/download) (or any IDE you prefer for packaging)

> <i class="fa-solid fa-triangle-exclamation"></i> **Note:**
* We strongly suggest that you visit GitHub.com and [Fork our SciPy 2025 workshop repository](https://github.com/pyOpenSci/pyopensci-scipy25-create-python-package) in case any issues arise with your local installation. This will ensure that you can follow along with us regardless of your environment setup.
> * JupyterLab or Jupyter Notebook is **not ideal** for the packaging work we’ll be doing.
{: .notice }

If you run into issues, please [join our Discord and ask for help](https://discord.gg/m7RFFxnc) before the workshop.


## 2b. If you plan to use GitHub Codespaces (SUGGESTED)

We strongly recommend using our curated [GitHub Codespace](https://codespaces.new/pyOpenSci/pyopensci-workshop-create-python-package?quickstart=1), which can be found in your forked workshop repository. This workspace is already set up with:

* VSCode, copier, Hatch, and everything you need to create your first Python package successfully. Codespaces also allows you to easily commit your work during the workshop to your own forked GitHub repository.

**Before the workshop do the following**

* Go to GitHub.com and [Fork our Python package workshop repository](https://github.com/pyOpenSci/pyopensci-workshop-create-python-package)

<figure>
    <picture>
    <img src="{{ site.baseurl }}/images/github/codespaces/scipy-fork-repo.gif" alt=".">
    </picture>
</figure>

*  Launch the codespace before the workshop:

<i class="fa-solid fa-circle-info"></i> The initial spin-up for a codespace can take up to 15 minutes or longer. Once GitHub creates the cloud environment, it will be quicker to relaunch. Please do this before attending the workshop session.
{: .notice }

To open your Codespace,

* Go to your forked SciPy 2025 workshop repository on GitHub,
* Switch to a branch that you want to work on during the workshop,
* Click the code drop-down button (where you'd find a link to clone a repo)
* Click on the Codespaces tab in the drop-down.

Within the Codespaces tab you will see a button: <kbd style="background-color: #2da44e; color: white; padding: 2px 6px; border-radius: 4px;">
Create codespace on main
</kbd>. This button launches a Codespace from the currently active branch. It will default to the
`main` branch if you haven't changed your branch in the repository.

The animated gif below walks you through how this works.

<figure style="width: 55%; margin: 0 auto;">
  <picture>
    <source srcset="{{ site.baseurl }}/images/github/codespaces/create-github-codespace-main.webp"
            type="image/webp">
    <img src="{{ site.baseurl }}/images/github/codespaces/create-github-codespace-main.png"
         alt="Create codespace on main button">
  </picture>
</figure>

> <i class="fa-solid fa-circle-info"></i> To follow GitHub best practices, always create a new branch before making
> changes to a repository, even if you own the repository. Avoid working directly on the `main` branch.

## <i class="fa-solid fa-cloud"></i> About GitHub Codespaces: Working in the cloud

## What is a codespace

GitHub Codespaces are cloud-based development environments that let you
code directly in your browser—no local setup needed. They provide fully
configured, container-based environments connected to your GitHub
repository.

You can customize Codespaces with `.devcontainer` files to match your
development setup. The Codespace for this workshop opens in Visual Studio
Code by default, but you can configure it to use any IDE you prefer.

Learn more in the [GitHub Codespaces docs](https://docs.github.com/en/codespaces/overview).

Codespaces are free for up to 60 hours/month on GitHub’s free plan. Be sure
to shut yours down after the workshop to conserve your allocated time.
{: .notice}

> Codespaces are associated with your **personal GitHub account**, even if
you open one from the pyOpenSci repository. The usage counts toward your
own GitHub credits.
{: .notice }

### View & manage open codespaces

Once you've opened a Codespace, you can return to it later without needing
to start from scratch. GitHub will reuse the environment, making it launch
significantly faster the second time.

If possible, resume the **same Codespace** you started in, rather than
creating a new one in your fork. Read on to learn how to find and reopen a codespace.

<i class="fa-solid fa-link"></i>
[View all active Codespaces associated with your account](https://github.com/codespaces)

{: .notice}
> <i class="fa-solid fa-circle-info"></i> When you delete a Codespace, you're
> ending the session, but the configuration remains available so you can
> launch a new one anytime.
> [Learn more in the GitHub docs](https://docs.github.com/en/codespaces/developing-in-a-codespace/stopping-and-starting-a-codespace)

### How to relaunch a codespace

To relaunch a Codespace:

1. Go to your fork of the workshop repository.
2. Click the **Code** dropdown (same as when you first created the Codespace).
3. Select the **Codespaces** tab to view existing environments.
4. Select the codespace that you want to resume from the list (see image below).

As you can see in the animated gif below, GitHub codespaces always have fun names.

<figure>
  <picture>
    <img src="{{ site.baseurl }}/images/github/codespaces/reopen-codespace.gif"
         alt="GIF showing how to reopen a GitHub Codespace">
  </picture>
</figure>

<div class="notice" markdown="1">

<i class="fa-solid fa-users-line"></i> Connect with us!
{: .header }

There are many ways to get involved if you're interested!

* If you read through our lessons and want to suggest changes, open an issue in our [lessons repository here](https://github.com/pyOpenSci/lessons)
* [Volunteer to be a reviewer for pyOpenSci's software review process](https://forms.gle/GHfxvmS47nQFDcBM6)
* [Submit a Python package to pyOpenSci for peer review](https://www.pyopensci.org/software-peer-review/how-to/author-guide.html#submit-your-package-for-peer-review)
* [Donate to pyOpenSci](https://give.communityin.org/pyopensci_2024) to support scholarships for future training events and the development of new learning content.
* Check out our [volunteer page](/volunteer.html) for other ways to get involved.

You can also:

* Keep an eye on our [events page](/events.html) for upcoming training events.

Follow us on social platforms:

* [<i class="fa-brands fa-mastodon" style="color:#81c0aa;"></i> Mastodon](https://fosstodon.org/@pyopensci)
* [<i class="fa-solid fa-cloud" style="color:#81c0aa;"></i> Bluesky](https://bsky.app/profile/pyopensci.bsky.social)
* [<i class="fa-brands fa-linkedin" style="color:#81c0aa;"></i> LinkedIn](https://www.linkedin.com/company/pyopensci)
* [<i class="fa-brands fa-github" style="color:#81c0aa;"></i> GitHub](https://github.com/pyOpenSci)

If you are on LinkedIn, check out and [subscribe to our newsletter, too](https://www.linkedin.com/newsletters/7179551305344933888/?displayConfirmation=true).
</div>
