---
layout: single
title: "When and why to use Flit to Create a Python Package"
excerpt: "Flit is one of many tools that you can use to create Python packages. Here you will see what the interface of Flit looks like. You will also learn where it might be most useful to you."
author: "Leah Wasser"
permalink: /blog/use-flit-for-python-packages.html
header:
  overlay_color: "#666"
  overlay_filter: 0.6
categories:
  - blog-post
  - highlight
  - python-packaging
toc: false
comments: true
---

# Learn About Using Flit for Python Packaging

Flit is a modern, no nonsense build tool with basic features needed to create and publish a Python package. Flit is intended for pure Python packages only.

Here, I'll review some of the features of Flit and some of the pain-points.

If you are interested in a high level overview of the packaging tools available, [check out our packaging guide here.](https://www.pyopensci.org/python-package-guide/package-structure-code/intro.html.

## Why use flit?

[Flit](https://flit.pypa.io/en/stable/) is a great option if you are building a small module locally for use or if you just want to publish to PyPI quickly.

[Read more about why Flit might be an option for you here. ](https://flit.pypa.io/en/stable/rationale.html)

## How to install Flit

You can install flit using pip or conda.

`$ pip install flit`

or

`$ conda install -c conda-forge flit`

### Flit dependencies

The install for flit is light weight and fast.

```bash
Collecting flit
  Using cached flit-3.8.0-py3-none-any.whl (49 kB)
Requirement already satisfied: requests in ../miniconda3/lib/python3.9/site-packages (from flit) (2.27.1)
Collecting tomli-w
  Using cached tomli_w-1.0.0-py3-none-any.whl (6.0 kB)
Collecting flit_core>=3.8.0
  Using cached flit_core-3.8.0-py3-none-any.whl (62 kB)
Requirement already satisfied: docutils in ../miniconda3/lib/python3.9/site-packages (from flit) (0.17.1)
Requirement already satisfied: idna<4,>=2.5 in ../miniconda3/lib/python3.9/site-packages (from requests->flit) (3.3)
Requirement already satisfied: charset-normalizer~=2.0.0 in ../miniconda3/lib/python3.9/site-packages (from requests->flit) (2.0.4)
Requirement already satisfied: certifi>=2017.4.17 in ../miniconda3/lib/python3.9/site-packages (from requests->flit) (2022.12.7)
Requirement already satisfied: urllib3<1.27,>=1.21.1 in ../miniconda3/lib/python3.9/site-packages (from requests->flit) (1.26.9)
Installing collected packages: tomli-w, flit-core, flit
Successfully installed flit-3.8.0 flit-core-3.8.0 tomli-w-1.0.0
```

## The Flit interface

Flit is has a streamlined interface with four core functions:

```bash
# Create a new package repository using the Flit interface
flit init
# Install your package for local development
flit install
# Build your packages SDist and Wheels
flit build
# Publish to PyPI (or test PyPI)
flit publish
```

Of all of the packaging tools that we review, Flit has the fewest features and as such is the simplest to use.

## Flit init

Package tools like Flit, PDM, Hatch and Poetry all have an `init` method that will create a new directory structure for your package. Each tool has a slightly different workflow when running through the init method.

When you run `flit init`, it creates a clean **pyproject.toml** file with all of the
basic metadata that you need and a license if you chose. You can see
what the interface of Flit Init looks like below.

Flit will catch errors in your pyproject.toml file and other parts of your package structure making it nice for beginners or someone who just wants to get up and running quickly with a local package environment.

This is what you receive from flit if you provide a poorly formatted url within the `flit init` command line workflow:

```bash
Home page: pyopensci.org
Should start with http:// or https:// - try again.
Home page: https://pyopensci.org
```

Below is the entire workflow for `flit init`.

```bash
> flit init
Module name: examplePy
Author [law]: me myself and i
Author email [law@example.com]: me@email.com


Home page: https://pyopensci.org

Choose a license (see http://choosealicense.com/ for more info)
1. MIT - simple and permissive
2. Apache - explicitly grants patent rights
3. GPL - ensures that code based on this is shared with the same terms
4. Skip - choose a license later
Enter 1-4 [1]: 1

Written pyproject.toml; edit that file to add optional extra info.
```

Flit init creates 2 output files:

- a LICENSE FILE and
- a populated pyproject.toml file (see below)

```toml
[build-system]
requires = ["flit_core >=3.2,<4"]
build-backend = "flit_core.buildapi"

[project]
name = "examplePy"
authors = [{name = "pyOpenSci LastName", email = "email@email.com"}]
readme = "README.md"
license = {file = "LICENSE"}
classifiers = ["License :: OSI Approved :: MIT License"]
dynamic = ["version", "description"]

[project.urls]
Home = "https://www.pyopensci.org"
```

Note: if you try to run `flit install` with the pyproject.toml file configuration above, be sure that you have a `__version__ file` in your package's directory that specifies your package's version. This is a minor "gotcha" when using Flit for the first time. You can't just run `flit init` and expect your package to then be installable!

```bash
➜ flit install
Cannot package module without a version string. Please define a `__version__ = "x.y.z"` in your module.
```

Alternatively you can specify the version in the pyproject.toml file if you wish. Note below that the version number needs to be in quotes (a string) following Python standards.

```toml
[build-system]
requires = ["flit_core >=3.2,<4"]
build-backend = "flit_core.buildapi"

[project]
name = "examplePy"
authors = [{name = "me myself and i", email = "me@email.com"}]
readme = "README.md"
license = {file = "LICENSE"}
classifiers = ["License :: OSI Approved :: MIT License"]
dynamic = ["description"]
version = "0.1"

[project.urls]
Home = "https://pyopensci.org"
```

## Build your package's SDist and Wheel distributions

You can use `flit build` to create your package's SDist and Wheel distributions:

```bash
$ flit build
```

[If you want to learn more about what the sdist and wheel distribution files are, check out our guide to distribution files, here.](https://www.pyopensci.org/python-package-guide/package-structure-code/python-package-distribution-files-sdist-wheel.html)

You can also [customize what's in your package's output SDist using Flit](https://flit.pypa.io/en/stable/pyproject_toml.html#sdist-section).

BREAKOUT: This customization step in the pyproject.toml replaces needing an extra file such as like `MANIFEST.in` (used with setuptools).

```toml
[tool.flit.sdist]
include = ["doc/"]
exclude = ["doc/*.html"]
```

## Upload to PypI

To upload to PyPI or test PyPI you can use:

```bash
flit publish
```

## Install your package for development

Flit also offers `flit install` which will install your package.

You can use `flit install -s` to install in editable mode which allows you to test your package's code as you develop without reinstalling it.

```bash
% flit install -s
Extras to install for deps 'all': {'.none'}                                          I-flit.install
Symlinking examplePy -> /Users/leahawasser/mambaforge/envs/myenv/lib/python3.10/site-packages/examplePy  I-flit.install
```

(BREAKOUT) IMPORTANT: be sure to read the Flit documentation. On windows you will need to either use `flit install -pth-file` instead of `flit install --symlink` or `flit install -s`

if those options don't work you can always use pip to install your package in editable mode:

`pip install -e .`

## Other features that Flit Supports

- [Entry points ](https://flit.pypa.io/en/stable/pyproject_toml.html#scripts-section)
- [Reproducible builds](https://flit.pypa.io/en/stable/reproducible.html?highlight=reproducible%20build)

## Things that Flit doesn't offer

Flit is a light weight tool. As such it doesn't offer as much functionality as you see with tools such as Hatch and PDM. It is, however, perfect for a small package that you just want to be able to install locally and perhaps publish to PyPI.

### Flit doesn't offer versioning support

Flit doesn't have any command support for bumping (or increasing) the version of your package.

You can either manage the package version using your **pyproject.toml** file.
Or you can set the package version to be "dynamic" in your pyproject.toml file if if you want to update the `__version__.py` file in your package.

If you want Flit to get the version from a `__version__` attribute, your pyproject.toml file
will look something like this:

```bash
[project]
name = "astcheck"
authors = [
    {name = "FirstName LastName", email = "email@email.com"},
]
readme = "README.rst"
classifiers = [
    "License :: OSI Approved :: MIT License",
]
requires-python = ">=3.5"
dynamic = ["version", "description"]
```

### Flit doesn't offer dependency management.

Some people don't want or need dependency management and prefer to declare dependency versions as needed. I went without it for many years instead
relying on CI workflows to tell me if dependencies were not playing nicely together.

However, given dependency management can be tricky - particularly for scientific packages, then Flit may not be your preferred tool. With Flit you will add versions manually to your pyproject.toml file.

```bash
dependencies = [
    "requests >=2.6",
    "configparser; python_version == '2.7'",
]
```

### Editable install consistency - minor nitpick

Flit offers a symlink install `flit install -s` if you want to install your project in development mode as discussed above. Note that Windows users might have challenges with this method. For consistency for users familiar with `pip install -e`, it would be nice if Flit offered a

`flit install -e` as well. Or, alternatively if it directed users to use pip for editable install.

**_ TODO: can i simplify the difference between symlink and -e ??? breakout: symlinking is one means of implementing an editable install? but it seems like the symlink flag in flit might not make a wheel and then link it, but instead just link the source directory itself?_**

### Use with other back-ends

Flit does not support using other build back ends. For many maintainers, this feature is not important. However if you are working on a package that requires custom build steps and has extensions in other languages, you may need this feature.

If you need custom build steps or have a package with a more complex build, consider using a tool such as PDM which will allow you to use a flexible back-end such as meson-python.

## Wrapping up

Flit is a great tool to use for those who don't want any frills and just want to create a package
environment quickly and publish to PyPI. If you are looking for more features, then you might
consider using a tool like Hatch, PDM or Poetry. More on those next.

## Got questions? Or is something in the above post incorrect? [Leave a comment in our discourse here](https://pyopensci.discourse.group/).
