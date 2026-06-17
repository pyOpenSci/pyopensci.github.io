# Contributing to pyOpenSci

## Organization

If you are interested in contributing to pyOpenSci, please read about
how we work in [**pyOpenSci's organization-wide contributing guide**](https://www.pyopensci.org/handbook/CONTRIBUTING.html).

## Updating blog posts

We have a bash script, `scripts/date-updated.sh`, that walks blog posts and sets
the `last_modified:` date in front matter from your local git history. It only
updates posts that already include a `last_modified:` key.

Hugo blog posts live in `content/blog/`. The script still scans `_posts/`
(Jekyll layout) — update the script path after cutover, or edit front matter
manually until then.

From the repository root:

```bash
chmod +x scripts/date-updated.sh
./scripts/date-updated.sh
```

In the future we will add this step to our CI build.

## Contributing to other pyOpenSci GitHub Repositories

If you are interested in contributing to a specific repository, please review
the `README.md` and `CONTRIBUTING.md` files in the repository. If you have any
questions, please open an issue in the repository or contact us via Slack.

### pyOpenSci Website

This repository, [`pyOpenSci/pyopensci.github.io`](https://github.com/pyOpenSci/pyopensci.github.io),
contains the source code for the [pyOpenSci.org](https://www.pyopensci.org) website.

The site is migrating from Jekyll to **[Hugo](https://gohugo.io)**. Hugo source
lives at the repo root (`content/`, `data/`, `themes/clean-hugo/`). The legacy
Jekyll site remains in `jekyll/` until production cutover.

If you want to contribute pages, blog posts, theme layouts, SCSS, or shortcodes,
start here:

1. Read [README.md](./README.md) for prerequisites and local setup (`npm ci`,
   `hugo server --disableFastRender`).
2. Read [DEVELOPMENT.md](./DEVELOPMENT.md) for CSS architecture and the Hugo
   asset pipeline.

Please test changes locally before opening a pull request.

### Python Package Guide

The Python Package Guide listed on our website is a guide for scientific authors
who are interested in creating a Python package. The guide is built using the
pyData Sphinx theme for Sphinx, which is a static site generator. If you are
interested in contributing to the Python Package Guide, please see the
[`README.md`](https://github.com/pyOpenSci/python-package-guide/blob/main/README.md)
in the `pyOpenSci/python-package-guide` repo.

### Peer Review Guide

The Peer Review Guide is a guide for authors who are interested in submitting a
package to pyOpenSci for peer review. The guide is built using the pyData Sphinx
theme for Sphinx, which is a static site generator. If you are interested in
contributing to the Peer Review Guide, please see the
[`README.md`](https://github.com/pyOpenSci/software-peer-review/blob/main/README.md)
in the `pyOpenSci/software-peer-review` repo.
