# Contributing to pyOpenSci

## Organization

If you are interested in contributing to pyOpenSci, please read about
how we work in [**pyOpenSci's organization-wide contributing guide**](https://www.pyopensci.org/handbook/CONTRIBUTING.html).

## Updating blog posts

Recently we added a bash script called: `scripts/date-updated.sh`. This script
will run through all posts in the `_posts/` directory and add the date that it was
last updated using your local git commit history. It will only update the date_update
yaml key if the `last_updated:` yaml key exists in the page's front matter.

Right now
it is a manual process to add `last_updated:` to all of our posts as a key.

You have to run the bash script at the command line, in the root of
this repository.

You may have to update the permissions
to allow it to modify files like this:


`chmod +x scripts/date-updated.sh`

then you can run the script:

`./scripts/date-updated.sh`

In the future we will add this step to our CI build.

## Contributing to other pyOpenSci GitHub Repositories

If you are interested in contributing to a specific repository, please review
the `README.md` and `CONTRIBUTING.md` files in the repository. If you have any
questions, please open an issue in the repository or contact us via Slack.

### pyOpenSci Website

This repository, `pyopensci/pyopensci.github.io` contains the source code
for the pyOpenSci website. The website is built using Jekyll, a static site
generator. If you are interested in contributing HTML, CSS, or JavaScript, this
is a good place to start.

### Python Package Guide

The Python Package Guide listed on our website, is a guide for scientific authors who are interested in creating
a Python package. The guide is built using the pyDataSphinx theme for sphinx, which is a a static site generator. If you are interested in contributing to the Python
Package Guide, please see the
[`README.md`](https://github.com/pyOpenSci/python-package-guide/blob/main/README.md)
in the `pyOpenSci/python-package-guide`repo.

### Peer Review Guide

The Peer Review Guide is a guide for authors who are interested in submitting a
package to pyOpenSci for peer review. The guide is built using the pyDataSphinx theme for sphinx, which is a a static site generator. If you are interested in
contributing to the Peer Review Guide, please see the
[`README.md`](https://github.com/pyOpenSci/software-peer-review/blob/main/README.md)
in the `pyOpenSci/software-peer-review` repo.
