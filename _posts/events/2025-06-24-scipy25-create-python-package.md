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


### 1. Create your free accounts

Before the workshop, please create and log into the following accounts:

1. [Create a free GitHub account](https://www.github.com) if you don’t already have one.
2. [Create a free account on Test PyPI](https://test.pypi.org/account/register) — we’ll use this to practice publishing packages.


> <i class="fa-solid fa-lock"></i> **Important:** To follow along when we publish to Test PyPI, you must enable **two-factor authentication (2FA)** on your Test PyPI account. We strongly recommend doing this **before** the workshop!
{: .notice .notice-important}

### 2a. Setup for working locally on your laptop

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

1. [Fork our workshop repository](https://github.com/pyOpenSci/pyopensci-scipy25-create-python-package) and
2. Launch the codespace from your fork, BEFORE the workshop begins. This ensures that it’s ready for you to use during the workshop.


## How to open a codespace


### What is a codespace

GitHub Codespaces are a cloud-based development environment integrated into GitHub. Codespaces provide fully configured, container-based environments that you can use to modify files in a GitHub repository. Codespaces are customizable, allowing users to define their environment using `.devcontainer` configuration files. The codespaces set up for this workshop run Visual Studio Code by default; you can set them up however to use the IDE (Integrated Development Environment) of your choice. Codespaces allow you to work on activities during a workshop in the cloud without needing to setup a local environment.

You can learn more about GitHub Codespaces [here](https://docs.github.com/en/codespaces/overview).

Important: GitHub Codespaces are free to run on a Free GitHub account for up to 60 hours a month. Given you have limited hours,  be sure to shut down your CodeSpace after the workshop ends to ensure that you don’t run out of credits.


### View & manage open codespaces

You can view open Codespaces associated with your account here:


* [https://github.com/codespaces](https://github.com/codespaces)

When you delete a running codespace, you are deleting an active session. However, the codespace configuration is always available for you to use and reopen a new codespace.


### How to open a codespace

Codespaces are associated with each GitHub user’s account (they are not associated with pyOpenSci / our GitHub organization. If you see the screenshot below, you haven’t launched a codespace from this repository before. In this case, click on `Create Codespace on main`. This will create a codespace for you using the configuration file provided in the main branch of our organization.



* You can use the CodeSpaces that pyOpenSci has already setup for you in our workshop repository..
    * [ff-2024-create-python-package Codespace](https://codespaces.new/pyOpenSci/ff-2024-create-python-package?quickstart=1) **UPDATE THIS**
    * **https://github.com/pyOpenSci/scipy-2025-create-python-package**
* If you have never used a codespace before, you might see the image below that says “No Codespaces”. That just means that you need to open a new CodeSpace. To do that, click on the green button that says: **Create codespace on main**.
    * This will create a codespace running on the main branch of your repository. If you are in an actual development workflow, you would likely want to create a codespace working on a different branch so you can submit a pull request using best practices (not from main branch).




<figure>
    <picture>
    <source srcset="{{ site.baseurl }}/images/github/codespaces/create-github-codespace-main.webp" type="image/webp">
    <img src="{{ site.baseurl }}/images/github/codespaces/create-github-codespace-main.png" alt=".">
    </picture>
</figure>

<p id="gdcalert1" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image1.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert2">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image1.png "image_tooltip")

* If you have already opened and used a Codespace in your repository, GitHub will find it and ask if you want to resume using the existing Codespace in your account.
    * Select Resume This Codespace. You don’t need to create a new codespace!!



<p id="gdcalert2" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image2.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert3">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image2.png "image_tooltip")

* How to relaunch a codespace
* How to commit changes to your fork after making them in a codespace.

<p id="gdcalert3" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image3.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert4">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image3.png "image_tooltip")


<p id="gdcalert4" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image4.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert5">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image4.png "image_tooltip")

<p id="gdcalert5" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image5.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert6">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image5.png "image_tooltip")


<p id="gdcalert6" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image6.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert7">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>


![alt_text](images/image6.png "image_tooltip")


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
