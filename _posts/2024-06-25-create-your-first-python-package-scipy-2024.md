---
layout: single
title: "pyOpenSci Workshop: Create Your First Python Package"
excerpt: "pyOpenSci will be running our `Create Your First Python Package: Make Your Python Code Easier to Share and Use
` workshop at SciPy 2024. Read on to learn more!"
author: "Jesse Mostipak"
permalink: /blog/pyos-workshop-scipy-2024.html
header:
  overlay_image: images/blog/2024/june/scipy-2024-workshop.png
  overlay_filter: rgba(20, 13, 36, 0.8)
categories:
  - blog-post
  - community
classes: wide
toc: true
comments: true
---
## Create Your First Python Package: Make Your Python Code Easier to Share and Use

* **What:** A hands-on workshop, titled: [Create Your First Python Package: Make Your Python Code Easier to Share and Use](https://cfp.scipy.org/2024/talk/QT9GBY/)
* **Where:** [SciPy 2024](https://www.scipy2024.scipy.org/), Room 316
* **When:** Tuesday, July 9th, 2024, from 13:30--17:30 Pacific

## Event overview

Creating code that can be shared and reused is the gold-standard of open science. But the tools and skills to share your code can be tricky to learn. In this hands-on tutorial, you’ll learn how to turn your code into an installable Python module (a file containing Python code that defines functions, classes, and variables), that can be shared with others. We will provide pre-built code and module examples for each step of the tutorial to help make it more beginner-friendly, but you will need some basic Python skills to get the most out of this session.

You will leave this tutorial understanding how to:
* Create code that can be installed into different environments
* Use [Hatch](https://hatch.pypa.io/latest/) as a workflow tool, making setup and installation of your code easier
* Use Hatch to publish your package to the test version of [PyPI](https://pypi.org/)

## What you need to know
* Basic Python programming
* How to write functions in Python
* How to use a Python environment manager of your choosing

## What you need installed
* Python
* An environment manager
* Hatch

### Install Python using `conda` and the `conda-forge` channel
*These instructions were adapted from the [Install Python Using Conda & Conda-forge - Mambaforge post](https://datascienceskills.org/install-python-science-conda/) from Leah Wasser and Jenny Palomino, originally posted on [datascienceskills.org](http://datascienceskills.org).*

#### For Mac users
*For homebrew users*
* Find directions for installing homebrew here.
* If you have homebrew installed, then the easiest way to install mambaforge is to use: `brew install mambaforge`

*If you don’t have homebrew*
* Download a mamba installer and use bash to install mambaforge:
  * Download the installer: [Mambaforge installer for Mac](https://github.com/conda-forge/miniforge#mambaforge).
  * Note that if you have a newer mac with an M1 or M2 chip, then you will want to install the Apple Silicon version: OS X arm64 (Apple Silicon) Mambaforge-MacOSX-arm64. If you have an older mac use: OS X x86_64 Mambaforge-MacOSX-x86_64
* In your Terminal window, cd to the location of the download file. Run: `bash Mambaforge3-latest-MacOSX-modify-filename-here.sh`
* Follow the prompts on the installer screens.
* If you are unsure about any setting, accept the defaults. You can change them later.
* To make sure that the changes take effect, close and then re-open your Terminal window.

#### For Linux users
* Download the installer: [Mambaforge installer for Linux](https://github.com/conda-forge/miniforge#mambaforge).
In your Terminal window, run making sure to modify the file name to match the file that you downloaded: `bash Mambaforge3-latest-Linux-modify-file-name-here.sh`
* Follow the prompts on the installer screens.
* If you are unsure about any setting, accept the defaults. You can change them later.
* To make sure that the changes take effect, close and then re-open your Terminal window.

#### For Windows users
Download the [Mambaforge installer for Windows](https://github.com/conda-forge/miniforge#mambaforge) and run the installer by double-clicking on the downloaded file. Then follow the steps below:
* Click “Run”.
* Click on “Next”.
* Click on “I agree”.
* Leave the selection on “Just me” and click on “Next”.
* Click on “Next”.
* **Select the first option for “Add Anaconda to my PATH environment variable”** and also **leave the selection on “Register Anaconda as my default Python 3.x”**. Click on “Install”.
  * Note that even though the installation is for Mambaforge, the installer uses the word Anaconda in these options.
  * You will also see a message in red text that selecting “Add Anaconda to my PATH environment variable” is not recommended; continue with this selection to make using conda easier in Git Bash. If you have questions or concerns, please contact your instructor.
* When the install is complete, Click on “Next”.
* Click on “Finish”.

#### Test that the installation was successful (all systems)
* Search for and open the Terminal program (found in /Applications/Utilities). In this `Terminal` window, type `bash` and hit enter. If you do not get a message back, then `Bash` is available for use.
* Next, type `git` and hit enter. If you see a list of commands that you can execute, then `Git` has been installed correctly.
* Next, type `conda` and hit enter. Again, if you see a list of commands that you can execute, then Mambaforge `Python` has been installed correctly.
* Close the `Terminal` by typing `exit`.

### Install Hatch
*These instructions were adapted from the [Introduction to Hatch](https://www.pyopensci.org/python-package-guide/tutorials/get-to-know-hatch.html) section of the [pyOpenSci Python Packaging Guide](https://www.pyopensci.org/python-package-guide/).*

#### For Mac users
*These instructions are for installing Hatch using the GUI installer. If you’d prefer to use the Command line installer, please see the [Hatch documentation](https://hatch.pypa.io/latest/install/.#command-line-installer).*
1. In your browser, download the `.pkg` file: [hatch-universal.pkg](https://github.com/pypa/hatch/releases/latest/download/hatch-universal.pkg)
2. Run your downloaded file and follow the on-screen instructions.
3. Restart your terminal.
4. To verify that the shell can find and run the hatch command in your `PATH`, run `hatch --version` in your Terminal.

#### For Linux users
*Note: if you prefer to use a tool other than pipx, please refer to the [Hatch documentation](https://hatch.pypa.io/latest/) for more information.*
* Install hatch from the command line using pipx: `pip install hatch`

#### For Windows users
*These instructions are for installing Hatch using the GUI installer. If you’d prefer to use the Command line installer, please see the [Hatch documentation](https://hatch.pypa.io/latest/install/#command-line-installer_1).*
1. In your browser, download the `.msi` file: [hatch-x64.msi](https://github.com/pypa/hatch/releases/latest/download/hatch-x64.msi).
2. Run your downloaded file and follow the on-screen instructions.
3. Restart your terminal.
4. To verify that the shell can find and run the hatch command in your `PATH`, run `hatch --version` in your Terminal.

### Configure Hatch (all systems)
Once you have installed Hatch, you will want to customize the configuration. Hatch stores your configuration information in a `config.toml` file.

While you can update the `config.toml` file through the command line, it might be easier to look at it and update it in a text editor if you are using it for the first time.

1. Open and edit your `config.toml` file by either:
  * Running `hatch config explore` in your shell, which will open up a directory window that will allow you to double click on the file and open it in your favorite text editor.
  * Alternatively, you can retrieve the location of the Hatch config file by running `hatch config find` in your shell.
2. Update your email and name
  * Once the file is open, update the \[template\] table of the `config.toml` file with your name and email. This information will be used in any `pyproject.toml` metadata files that you create using Hatch.
3. Set tests to `false`
*While tests are important, setting the tests configuration in Hatch to true will create a more complex pyproject.toml file. You won’t need to use this feature in this beginner friendly tutorial series but we will introduce it in later tutorials.*
  * Set tests to `false` in the `[template.plugins.default]` table.
4. Close the config file and `run hatch config show`
`hatch config show` will print out the contents of your config.toml file in your shell. Look at the values and ensure that your name and email are set, and also  make sure that `tests=false`.

## Helpful links
* Our [example Python package repo, `pyosPackage`](https://github.com/pyOpenSci/pyosPackage), that goes along with pyOpenSci tutorials.
* [Workshop information on the SciPy 2024 website](https://cfp.scipy.org/2024/talk/QT9GBY/).

## Workshop agenda

### Hour One: the structure of an installable module

**Key Takeaways: After this hour you will have an understanding of:**
* the purpose of the \_\_init\_\_.py file, and
* how workflow tools such as Hatch can be useful when making code installable.

**0-15 minutes:** Here we will get to know each other. I’ll also briefly introduce pyOpenSci and the work that we are doing in open science education and training space.

**15-30 minutes, interactive discussion:** Here, we’ll discuss why shareable code is important. And we’ll explore some best practices for making code easier to work with. I’ll also introduce Hatch as a workflow tool that streamlines tasks.

**30-60 minutes, hands-on:** You will take an existing script and turn it into an installable module. You are welcome to use the provided scripts for this. If you are more comfortable with Python, then you can also bring your own script with you and work on it during the workshop.


### Hour Two: everything you need to know about the `pyproject.toml` file & project metadata.

**0-15 minutes, interactive discussion:** Here you’ll learn about the pyproject.toml and how it’s used to document dependencies, and metadata for your project.

**15-30 minutes:** A short break to stretch your legs and get a drink.

**30-60 minutes, hands-on:** In the hands-on part of this hour, you will modify your pyproject.toml file with required dependencies needed to run your code. You will also learn how to install your code in interactive or development mode using both pip and Hatch. Interactive mode will allow you to dynamically update your code and test it locally without reinstalling it. Finally, you will take your shiny new Python module for a test drive in your favorite Python environment.

### Hour Three: the power of metadata and instructions for you, your future self & your colleagues

**0-15 minutes, interactive discussion:** In this part of the tutorial we’ll discuss the power of documentation when sharing code and also for you when you have to update things in the future. **

**15-50 minutes, hands-on:** Here you will [create a README file](https://www.pyopensci.org/python-package-guide/tutorials/add-readme.html) that helps users of your module understand how to install it and how to get started using it. You will also add [docstrings](https://www.pyopensci.org/python-package-guide/documentation/write-user-documentation/document-your-code-api-docstrings.html) to your code. See how docstrings are useful as “hints” when coding real time. Optional: if you are speedy, you can also delve into [typing](https://www.pyopensci.org/python-package-guide/documentation/write-user-documentation/document-your-code-api-docstrings.html#adding-type-hints-to-your-docstrings) your code on your own. However, we won’t directly cover typing in this tutorial.

**50-60 minutes:** Break

### Hour Four: publishing and sharing your code

**0-15 minutes, interactive discussion:** Here we will discuss what it means to “[publish](https://www.pyopensci.org/python-package-guide/tutorials/publish-pypi.html)” code. We will also discuss other important elements such as license files and codes of conduct if you intend to turn your code into a published [package](https://www.pyopensci.org/python-package-guide/tutorials/intro.html).

**15-45 minutes, hands-on:** Publishing to PyPI vs. installing from Github. Those who’d like to follow along interactively can do so here. However, if your brain is tired, sit back and learn how to build your module into a package distribution using Hatch. And then we will give you all of the tools needed to [publish to the test version of PyPI](https://www.pyopensci.org/python-package-guide/tutorials/publish-pypi.html).

**45-60 minutes:** wrap up, answer any questions, and provide feedback on the session.

## <i class="fa-solid fa-link"></i> Connect with pyOpenSci

Stay up-to-date with all things pyOpenSci by following us on [LinkedIn](https://linkedin.com/company/pyopensci) and [Fosstodon](https://fosstodon.org/@pyOpenSci), and connect with the broader pyOpenSci community on our [Discourse forum](https://pyopensci.discourse.group/). If you’re interested in our weekly newsletter where we share news, blog posts, and monthly updates, [subscribe on LinkedIn](https://www.bit.ly/pyOSNewsletter).
