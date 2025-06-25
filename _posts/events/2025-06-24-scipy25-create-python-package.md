---
layout: single
title: "Create Your First Python Package: SciPy 2025"
excerpt: "Learn how to create your first Python package using the pyOpenSci template."
author: "pyopensci"
event:
  start_date: "2025-07-08"
  location: Online
permalink: /events/pyopensci-scipy25-create-python-package-workshop.html
header:
  overlay_image: images/headers/pyopensci-sustainability.png
categories:
  - events
classes: wide
type: "event"
last_modified: 2025-04-22
comments: true
---

## <i class="fa-solid fa-box-open"></i> Learn how to create your first Python package!

* **When:** Tuesday, 8 July 2025 @ 8:00–12:00 PM Pacific Time
* **Where:** SciPy Meeting 2025 in Tacoma, Washington
* **Instructors:**
    * Leah Wasser
    * Carol Willing
    * Jeremiah Paige
    * Tetsuo Koyama

[<i class="fa-regular fa-circle-right"></i> View our workshop abstract](https://cfp.scipy.org/scipy2025/talk/Z3VBWR/){: .btn .btn--success .text-center }


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

> <i class="fa-solid fa-triangle-exclamation"></i> **Note:** JupyterLab or Jupyter Notebook is **not ideal** for the packaging work we’ll be doing.
{: .notice }

If you run into issues, please [join our Discord and ask for help](https://discord.gg/m7RFFxnc) before the workshop.


## 2b. If you plan to use GitHub Codespaces (SUGGESTED)

We strongly suggest that you use our curated [GitHub Codespace](https://codespaces.new/pyOpenSci/ff-2024-create-python-package?quickstart=1), which you can find in your forked workshop repository. This workspace is already set up with

* VSCode, copier, Hatch, and everything you need to successfully create your first Python package. Codespaces also allows you to easily commit your work during the workshop to your own forked GitHub repository.

### Before the workshop do the following

* Go to GitHub.com and [Fork the workshop repository](https://github.com/pyOpenSci/pyopensci-scipy25-create-python-package)

<figure>
    <picture>
    <img src="{{ site.baseurl }}/images/github/codespaces/scipy-fork-repo.gif" alt=".">
    </picture>
</figure>

* **Create a branch** in your fork to work on during the workshop.
* **Launch the repository codespace from your fork, BEFORE the workshop begins**. The initial spin-up for a codespace can take up to 15 minutes or longer. Once it's been created, it will be quicker to relaunch.

<figure>
    <picture>
    <img src="{{ site.baseurl }}/images/github/codespaces/scipy-open-codespace.gif" alt=".">
    </picture>
</figure>


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


### How to open a codespace

To open a Codespace,

* Go to your forked SciPy 2025 workshop repository on GitHub,
* Switch to a branch that you want to work on during the workshop,
* Click the code drop-down button (where you'd find a link to clone a repo)
* Click on the Codespaces tab in the drop-down.

Within the Codespaces tab you will see a button: <kbd style="background-color: #2da44e; color: white; padding: 2px 6px; border-radius: 4px;">
Create codespace on main
</kbd>. This button launches a Codespace from the currently active branch. It will default to the
`main` branch if you haven't changed your branch yet.

<figure style="width: 55%; margin: 0 auto;">
  <picture>
    <source srcset="{{ site.baseurl }}/images/github/codespaces/create-github-codespace-main.webp"
            type="image/webp">
    <img src="{{ site.baseurl }}/images/github/codespaces/create-github-codespace-main.png"
         alt="Create codespace on main button">
  </picture>
</figure>

> <i class="fa-solid fa-circle-info"></i> To follow GitHub best practices, always create a new branch before making
> changes. Avoid working directly on the `main` branch.

If you switch branches in GitHub, Codespaces will launch from the
selected, active branch.

<figure>
  <picture>
    <img src="{{ site.baseurl }}/images/github/codespaces/scipy-open-codespace.gif"
         alt="GIF showing Codespace launch process">
  </picture>
</figure>


> Codespaces are associated with your **personal GitHub account**, even if
you open one from the pyOpenSci repository. The usage counts toward your
own GitHub credits.
{: .notice }


### View & manage open codespaces

Once you've opened a Codespace, you can return to it later without needing
to start from scratch. GitHub will reuse the environment, making it launch
significantly faster the second time.

If possible, resume the **same Codespace** you started in, rather than
creating a new one in your fork.

<figure>
  <picture>
    <img src="{{ site.baseurl }}/images/github/codespaces/scipy-open-codespace.gif"
         alt="Animated gif of GitHub Codespace launch names">
  </picture>
</figure>

<i class="fa-solid fa-link"></i>
[View all active Codespaces associated with your account](https://github.com/codespaces)

{: .notice}
> <i class="fa-solid fa-circle-info"></i> When you delete a Codespace, you're
> ending the session, but the configuration remains available so you can
> launch a new one anytime.
> [Learn more in the GitHub docs](https://docs.github.com/en/codespaces/developing-in-a-codespace/stopping-and-starting-a-codespace)


As you can see in the animated gif below, GitHub codespaces always have fun names.


### How to relaunch a codespace

To relaunch a Codespace:

1. Go to your fork of the workshop repository.
2. Click the **Code** dropdown (same as when you first created the Codespace).
3. Select the **Codespaces** tab to view existing environments.
4. If GitHub finds a matching Codespace, it will prompt you to:

<i class="fa-solid fa-play"></i> **Resume this Codespace**


<figure>
  <picture>
    <img src="{{ site.baseurl }}/images/github/codespaces/reopen-codespace.gif"
         alt="GIF showing how to reopen a GitHub Codespace">
  </picture>
</figure>

<div class="notice" markdown="1">

<i class="fa-solid fa-users-line"></i> Connect with us!
{: .header }

There are lots of ways to get involved if you are interested!

* If you read through our lessons and want to suggest changes, open an issue in our [lessons repository here](https://github.com/pyOpenSci/lessons)
* [Volunteer to be a reviewer for pyOpenSci's software review process](https://forms.gle/GHfxvmS47nQFDcBM6)
* [Submit a Python package to pyOpenSci for peer review](https://www.pyopensci.org/software-peer-review/how-to/author-guide.html#submit-your-package-for-peer-review)
* [Donate to pyOpenSci](https://give.communityin.org/pyopensci_2024) to support scholarships for future training events and the development of new learning content.
* Check out our [volunteer page](/volunteer.html) for other ways to get involved.

You can also:

* Keep an eye on our [events page](/events.html) for upcoming training events.

Follow us on social platforms:

* [<i class="fa-brands fa-discourse" style="color:#81c0aa;"></i> Discourse](https://pyopensci.discourse.group/)
* [<i class="fa-brands fa-mastodon" style="color:#81c0aa;"></i> Mastodon](https://fosstodon.org/@pyopensci)
* [<i class="fa-solid fa-cloud" style="color:#81c0aa;"></i> Bluesky](https://bsky.app/profile/pyopensci.bsky.social)
* [<i class="fa-brands fa-linkedin" style="color:#81c0aa;"></i> LinkedIn](https://www.linkedin.com/company/pyopensci)
* [<i class="fa-brands fa-github" style="color:#81c0aa;"></i> GitHub](https://github.com/pyOpenSci)

If you are on LinkedIn, check out and [subscribe to our newsletter, too](https://www.linkedin.com/newsletters/7179551305344933888/?displayConfirmation=true).

</div>
