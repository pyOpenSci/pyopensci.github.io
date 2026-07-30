---
title: 'Maintain Python code quality in Quarto Markdown files using lintquarto'
date: '2026-07-10'
type: blog
excerpt: lintquarto is a package for running linters, formatters, static type checkers and code analysis tools on Python code in Quarto markdown (.qmd) files.
author: Amy Heather
blog_topic: software
comments: true
url: "/blog/lintquarto.html"
lastmod: '2026-07-10'
image:
  src: images/blog/2026/cleaning.jpg
  alt: "Person cleaning by a computer. Image source: Unsplash (free to use under the Unsplash Licence) https://unsplash.com/photos/person-in-blue-long-sleeve-shirt-sitting-beside-black-laptop-computer--9gPKrsbGmc."
---

If you write Python code inside Quarto Markdown files, you've probably noticed that your linter can't run on it. `lintquarto` fixes that. It is a command-line tool that wraps Python linters, formatters, static type checkers, and code analysis tools so they can run directly on `.qmd` files. It has recently been [accepted into the pyOpenSci ecosystem](https://github.com/pyOpenSci/software-submission/issues/257).

## How `lintquarto` works

The core approach is straightforward. `lintquarto` converts each `.qmd` file into a temporary Python file, then runs your chosen code quality tool on it. For formatters, `lintquarto` can apply changes back to the source `.qmd` file. For tools that only report issues, it captures the output and surfaces it with correct paths.

The converter handles Quarto-specific syntax that would otherwise trip up a Python linter, including:

* Quarto chunk options (e.g., `#| echo: false`).
* Include directives.
* Inline annotations (e.g., `# <1>`).

It also avoids false positives that arise because `.qmd` files are not standard Python modules (e.g., cell-based structure and document-level syntax).

By default, it runs only on executable code, but this can be configured to include non-executable code as well.

## Getting started

`lintquarto` can be installed from PyPI or conda-forge. For example, from PyPI:

```
pip install lintquarto
```

You should also install your desired code quality tools. For a one-step installation that includes `lintquarto` and all supported tools, use:

```
pip install lintquarto[all]
```

`lintquarto` is run from the command line. Its main arguments are:

* `-l` which linters, static type checkers or code quality tools to run.
* `-f` which formatters to run.
* `-p` files or directories to include.
* `-e` paths to exclude.

For example, to run `flake8` on all `.qmd` files in the current directory:

```
lintquarto -l flake8 -p .
```

To run `ruff format` on files in a specific directory, excluding the `examples/` folder:

```
lintquarto -f ruff-format -p pages -e pages/examples
```

As an alternative to passing flags on every run, you can declare your settings once in a `[tool.lintquarto]` section in your `pyproject.toml`. The arguments are equivalent to those used on the command line. For example:

```
[tool.lintquarto]
linters = [
  "ruff",
  "pycodestyle",
]
paths = [
  "content/",
  "dashboard/index.qmd",
]
```

You can then simply call:

```
lintquarto
```

## Supported tools

`lintquarto` supports a wide variety of code quality tools. To date, these include:

* **Linters:** `flake8`, `pycodestyle`, `pydoclint`, `pyflakes`, `pylint`, `ruff`.
* **Formatters:** `ruff`.
* **Static type checkers:** `mypy`, `pyrefly`, `pyright`, `basedpyright`, `pytype`.
* **Code analysis:** `vulture`, `radon`.

## Try it out

* **GitHub:** https://github.com/lintquarto/lintquarto
* **Documentation:** https://lintquarto.github.io/lintquarto/
* **PyPI:** https://pypi.org/project/lintquarto/
* **Conda:** https://anaconda.org/conda-forge/lintquarto

If you find a bug, have a feature request, or want to add support for a tool not yet covered, contributions are very welcome. Head over to the GitHub repository and open an issue or pull request.
