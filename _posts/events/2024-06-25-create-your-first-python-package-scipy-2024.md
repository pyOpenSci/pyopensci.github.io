---
layout: single
title: "Workshop: pyOpenSci @ SciPy 2024--Create your first Python package"
excerpt: "Python packaging can be tricky to navigate. pyOpenSci will lead a workshop on creating your first Python package at SciPy 2024. The goal of this workshop is to help scientists learn how to package and make code installable and shareable. Read on to learn more!"
author:
permalink: /events/create-first-python-package-scipy-2024.html
header:
  overlay_image: images/headers/scipy-2024-workshop.png
  overlay_filter: rgba(20, 13, 36, 0.8)
categories:
  - events
classes: wide
toc: true
comments: true
---

## Create Your First Python Package: Make Your Python Code Easier to Share and Use

* **What:** A hands-on workshop, titled: [Create Your First Python Package: Make Your Python Code Easier to Share and Use](https://cfp.scipy.org/2024/talk/QT9GBY/)
* **Where:** [SciPy 2024](https://www.scipy2024.scipy.org/), Ballroom B/C
* **When:** Tuesday, July 9th, 2024, from 13:30--17:30 Pacific
* **Workshop GitHub repository:** [https://github.com/pyOpenSci/code-to-module-workshop/](https://github.com/pyOpenSci/code-to-module-workshop/)
* **pyOpenSci demo package:** [https://github.com/pyOpenSci/pyosPackage](https://github.com/pyOpenSci/pyosPackage)

## Event overview

Creating code that can be shared and reused is the gold-standard of open science. But the tools and skills to share your code can be tricky to learn. In this hands-on tutorial, you’ll learn how to turn your code into an installable Python module (a file containing Python code that defines functions, classes, and variables), that can be shared with others. We will provide pre-built code and module examples for each step of the tutorial to help make it more beginner-friendly, but you will need some basic Python skills to get the most out of this session.

You will leave this tutorial understanding how to:

* Create code that can be installed into different environments
* Use [Hatch](https://hatch.pypa.io/latest/) as a workflow tool, making setup and installation of your code easier
* Use Hatch to publish your package to the test version of [PyPI](https://pypi.org/)

## Pre-requisites: What you need to know

* Basic Python programming
* How to write functions in Python
* How to use a Python environment manager of your choosing

## What you should have installed on your computer prior to the workshop

* Python
* An environment manager
* Hatch
* Shell (e.g. terminal on MAC or GitBash on Windows)

[<i class="fas fa-hand-point-right"></i> Click here for setup instructions.](https://github.com/pyOpenSci/code-to-module-workshop/tree/cf9e7d9937c10bde9ee03075ebe78eb7a605f549){: .btn .btn--info .btn--large}

## Workshop agenda

<table width="100%">
  <tbody>
    <tr>
      <td colspan="2"><strong>Hour one:</strong> The structure of an installable module.</td>
      <td></td>
    </tr>
    <tr>
      <td rowspan="5" width="25%" style="vertical-align: top;"><strong>Key takeaways</strong><ul>
          <li>The purpose of the __init__.py file</li>
          <li>How workflow tools such as Hatch can be useful when making code installable.</li>
        </ul></td>
    </tr>
    <tr>
      <td><strong>Breakdown</strong></td>
    </tr>
      <td><strong>0-15 minutes:</strong> Here we will get to know each other. I’ll also briefly introduce pyOpenSci and the work that we are doing in open science education and training space.</td>
    <tr>
      <td><strong>15-30 minutes, interactive discussion:</strong> Here, we’ll discuss why shareable code is important. And we’ll explore some best practices for making code easier to work with. I’ll also introduce Hatch as a workflow tool that streamlines tasks.</td>
    </tr>
    <tr>
      <td><strong>30-60 minutes, hands-on:</strong> You will take an existing script and turn it into an installable module. You are welcome to use the provided scripts for this. If you are more comfortable with Python, then you can also bring your own script with you and work on it during the workshop.</td>
    </tr>
  </tbody>
</table>
<br>
<table width="100%">
  <tbody>
    <tr>
      <td colspan="2"><strong>Hour two:</strong> Everything you need to know about the <code>pyproject.toml</code> file & project metadata.</td>
      <td></td>
    </tr>
    <tr>
      <td rowspan="5" width="25%"><strong>Breakdown</strong></td>
    </tr>
      <td><strong>0-15 minutes, interactive discussion:</strong> Here you’ll learn about the pyproject.toml and how it’s used to document dependencies, and metadata for your project.</td>
    <tr>
      <td><strong>15-30 minutes:</strong> A short break to stretch your legs and get a drink.</td>
    </tr>
    <tr>
      <td><strong>30-60 minutes, hands-on:</strong> In the hands-on part of this hour, you will modify your <code>pyproject.toml</code> file with required dependencies needed to run your code. You will also learn how to install your code in interactive or development mode using both pip and Hatch. Interactive mode will allow you to dynamically update your code and test it locally without reinstalling it. Finally, you will take your shiny new Python module for a test drive in your favorite Python environment.</td>
    </tr>
  </tbody>
</table>
<br>
<table width="100%">
  <tbody>
    <tr>
      <td colspan="2"><strong>Hour three:</strong> The power of metadata and instructions for you, your future self & your colleagues.</td>
      <td></td>
    </tr>
    <tr>
      <td rowspan="5" width="25%"><strong>Breakdown</strong></td>
    </tr>
      <td><strong>0-15 minutes, interactive discussion:</strong> In this part of the tutorial we’ll discuss the power of documentation when sharing code and also for you when you have to update things in the future.</td>
    <tr>
      <td><strong>15-50 minutes, hands-on:</strong> Here you will <a href="https://www.pyopensci.org/python-package-guide/tutorials/add-readme.html">create a README file</a> that helps users of your module understand how to install it and how to get started using it. You will also add <a href="https://www.pyopensci.org/python-package-guide/documentation/write-user-documentation/document-your-code-api-docstrings.html">docstrings</a> to your code. See how docstrings are useful as “hints” when coding real time. Optional: if you are speedy, you can also delve into <a href="https://www.pyopensci.org/python-package-guide/documentation/write-user-documentation/document-your-code-api-docstrings.html#adding-type-hints-to-your-docstrings">typing</a> your code on your own. However, we won’t directly cover typing in this tutorial.</td>
    </tr>
    <tr>
      <td><strong>50-60 minutes:</strong> Break</td>
    </tr>
  </tbody>
</table>
<br>
<table width="100%">
  <tbody>
    <tr>
      <td colspan="2"><strong>Hour four:</strong> Publishing and sharing your code.</td>
      <td></td>
    </tr>
    <tr>
      <td rowspan="5" width="25%"><strong>Breakdown</strong></td>
    </tr>
      <td><strong>0-15 minutes, interactive discussion:</strong> Here we will discuss what it means to “<a href="https://www.pyopensci.org/python-package-guide/tutorials/publish-pypi.html">publish</a>” code. We will also discuss other important elements such as license files and codes of conduct if you intend to turn your code into a published <a href="https://www.pyopensci.org/python-package-guide/tutorials/intro.html">package</a>.</td>
    <tr>
      <td><strong>15-45 minutes, hands-on:</strong> Publishing to PyPI vs. installing from Github. Those who’d like to follow along interactively can do so here. However, if your brain is tired, sit back and learn how to build your module into a package distribution using Hatch. And then we will give you all of the tools needed to <a href="https://www.pyopensci.org/python-package-guide/tutorials/publish-pypi.html">publish to the test version of PyPI</a>.</td>
    </tr>
    <tr>
      <td><strong>45-60 minutes:</strong> Wrap up, answer any questions, and provide feedback on the session.</td>
    </tr>
  </tbody>
</table>

## Hatch & Python

If you already have a working version of Python on your computer, then you are in good shape! **If you don’t have Python installed on your computer, then Hatch will install Python for you when you install it following the instructions below.**

## Install Hatch

_These instructions were adapted from the [Introduction to Hatch](https://www.pyopensci.org/python-package-guide/tutorials/get-to-know-hatch.html) section of the [pyOpenSci Python Packaging Guide](https://www.pyopensci.org/python-package-guide/)._

### For Mac users

_These instructions are for installing Hatch using the GUI installer. If you’d prefer to use the command line installer, please see the [Hatch documentation](https://hatch.pypa.io/latest/install/#command-line-installer)._

1. In your browser, download the `.pkg` file: [hatch-universal.pkg](https://github.com/pypa/hatch/releases/latest/download/hatch-universal.pkg)
2. Run the downloaded file and follow the on-screen instructions to install Hatch.
3. Restart your terminal if it is already open.
4. To verify that shell can find and run the `hatch` command, run:
    1. `hatch --version` (in your Terminal / shell).

### For Linux users

_For Linux users, the easiest way to install Hatch is to use pipx which can be installed using apt install. Note: if you prefer to use a tool other than pipx, please refer to the [Hatch documentation](https://hatch.pypa.io/latest/) for more information_

* Install Hatch from the command line using [pipx](https://pipx.pypa.io/stable/):

```bash
# First install pipx using apt install
>> apt install pipx
# Then use pipx to install hatch
>> pipx install hatch
```

### For Windows users

_These instructions are for installing Hatch using the GUI installer. If you’d prefer to use the command line installer, please see the [Hatch documentation](https://hatch.pypa.io/latest/install/#command-line-installer_1)._

1. In your browser, download the `.msi` file: [hatch-x64.msi](https://github.com/pypa/hatch/releases/latest/download/hatch-x64.msi)
2. Run your downloaded file and follow the on-screen instructions.
3. Restart your terminal if it was already open.
4. To verify that the shell can find and run the `hatch` command in your `PATH`, in your terminal run:
    1. `hatch --version`

### Configure Hatch (all systems)

After installing Hatch, it’s useful to customize the Hatch configuration. The
configuration allows you to specify things like the default name and email to
use in your package’s metadata. If you don’t configure Hatch, you can always
edit files later! However your Hatch package outputs might look a bit different
than the ones in the workshop. (This is OK!)

Hatch stores your configuration information in a `config.toml` file.

While you can update the `config.toml` file through the command line, it might
be easier to look at it and update it in a text editor if you are using it for
the first time.

1. Open and edit your `config.toml` file by either:
    1. Running `hatch config explore` in your shell, which will open up a directory window that will allow you to double click on the file and open it in your favorite text editor.
    2. Alternatively, you can retrieve the location of the Hatch config file by running `hatch config find` in your shell.
2. Update your email and name
    3. Once the file is open, update the [template] table of the `config.toml` file with your name and email. This information will be used in any `pyproject.toml` metadata files that you create using Hatch.
3. Set tests to `false`

    _While tests are important, setting the tests configuration in Hatch to true will create a more complex pyproject.toml file. We won’t be creating tests in this workshop._

    Set tests to `false` in the `[template.plugins.default]` table.

Your config file should look something like this:

```toml
mode = "local"
project = ""
shell = ""

[dirs]
project = []
python = "isolated"
data = "/Users/leahawasser/Library/Application Support/hatch"
cache = "/Users/leahawasser/Library/Caches/hatch"

[dirs.env]

[projects]

[publish.index]
repo = "main"

[template]
name = "Leah Wasser"
email = "leah@pyopensci.org"

[template.licenses]
headers = true
default = [
    "MIT",
]

[template.plugins.default]
tests = false
ci = false
src-layout = true

[terminal.styles]
info = "bold"
success = "bold cyan"
error = "bold red"
warning = "bold yellow"
waiting = "bold magenta"
debug = "bold"
spinner = "simpleDotsScrolling"
```

Note: for future packages you may want to enable both CI and tests. This
configuration is to simplify things for our beginner-friendly tutorial.

4. Close the config file and run `hatch config show`

    `hatch config show`

This command prints out the contents of your config.toml file in your shell.
Look at the values and ensure that your name and email are set and also make
sure that `tests=false`.

## Useful Commands

### Conda environments

* **Create environment:** `conda create -n env_name python=3.11`
* **Activate environment:** `conda activate env_name`
* **Leave environment:** `conda deactivate`

### Venv environments

Create environment

* `python -m venv env_name`
* Activate_windows: `env_name\Scripts\activate`
* Activate MAC / LINUX: `source env_name/bin/activate`
* Leave environment: `deactivate`

## Helpful links

* Our [example Python package repo, `pyosPackage`](https://github.com/pyOpenSci/pyosPackage), that goes along with pyOpenSci tutorials.
* [Workshop information on the SciPy 2024 website](https://cfp.scipy.org/2024/talk/QT9GBY/).

## <i class="fa-solid fa-link"></i> Connect with pyOpenSci

Stay up-to-date with all things pyOpenSci by following us on [LinkedIn](https://linkedin.com/company/pyopensci) and [Fosstodon](https://fosstodon.org/@pyOpenSci), and connect with the broader pyOpenSci community on our [Discourse forum](https://pyopensci.discourse.group/). If you’re interested in our weekly newsletter where we share news, blog posts, and monthly updates, [subscribe on LinkedIn](https://www.bit.ly/pyOSNewsletter).
