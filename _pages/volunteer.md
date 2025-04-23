---
layout: splash
classes: flowing
title: "Get involved with pyOpenSci"
author_profile: false
published: true
site-map: true
permalink: /volunteer.html
header:
  overlay_image: images/headers/pyopensci-learn-header.png
  overlay_filter: 0.3
volunteer-mission:
  - excerpt: "pyOpenSci is a volunteer community that broadens participation in scientific open source. We make finding, sharing and contributing to reusable code easier for everyone, everywhere."
build-skills:
  - title: "pyOpenSci volunteers build skills and community"
    excerpt: "When you volunteer with pyOpenSci, you’re both giving back and developing professional skills. As a volunteer you will:

- **Learn new skills:** you don’t have to be a Python expert to get involved with pyOpenSci. We can help you level up your packaging game and learn how to constructively review both code and copy through contributions to our online learning resources.

- **Meet and connect with new peers.** Our [public Discourse forum](https://pyopensci.discourse.group/) is a great place to ask and answer questions, as well as discuss packaging and open science with other Pythonistas.

- **Get recognized** on the [pyOpenSci website](https://www.pyopensci.org/our-community/index.html) and in our [GitHub repositories](https://github.com/pyOpenSci): your contribution matters, and we want to ensure your work is recognized and celebrated in a public forum. If you serve as an editor you can also connect with pyOpenSci professionally as a volunteer for our organization on LinkedIn"
    image_path: /images/people-building-blocks.jpg
diverse-backgrounds:
  - title: "pyOpenSci volunteers come from diverse backgrounds"
    excerpt: "Our volunteers come from a diverse array of backgrounds, including industry, academia, agencies, national labs, and more. pyOpenSci volunteers are primarily engaged in both the peer review process and developing resources to support the scientific Python community. Volunteers  help improve the quality, maintainability and usability of the software that scientists need for open science. They also support maintainers in developing scientific Python software."
    image_path: /images/people/pyopensci-sprint-pycon-2023.png
help-us:
  - image_path:
    title: "Lend a Hand on GitHub"
    alt:
    excerpt: "Got some time to help? Check out our GitHub Project Board for a list of current issues that we could use help with. Any issue that is tagged `help-wanted` in our repos is also fair game for anyone to tackle! We add anyone who contributes to pyOpenSci to our [community page](/our-community/). "
    url: https://github.com/orgs/pyOpenSci/projects/3/views/1
    btn_label: "> Check out our GitHub Help Wanted Board"
    btn_class: btn--inverse
  - image_path:
    title: "Sign up to review a Python package"
    alt:
    excerpt: "We are always looking for new reviewers from a broad range of scientific domains. Some reviewers have extensive packaging expertise and others have domain expertise or focus on package usability. If you are new to reviewing we are happy to support you through our peer review mentorship program. [Learn more about the reviewer role](https://www.pyopensci.org/software-peer-review/how-to/reviewer-guide.html) and sign up using the link below."
    url: https://forms.gle/GHfxvmS47nQFDcBM6
    btn_label: "> Sign up now."
    btn_class: btn--inverse
  - image_path:
    title: "Get involved as software peer review Editor"
    alt:
    excerpt: "We also often recruit new editors to support our peer review process. "
    url: https://www.pyopensci.org/software-peer-review/how-to/editors-guide.html
    btn_label: "> Click here to learn more about the editor role."
    btn_class: btn--inverse
---

{% include feature_row id="volunteer-mission" type="center" %}


<div class="pyos-section purple" markdown="1">
<div class="content padding" markdown="1">

## Volunteer opportunities with pyOpenSci

There are many ways to get involved with pyOpenSci! We’re always looking for folks to:

{% include feature_row_pyos id="help-us" %}


</div>
</div>

{% include div_purple_bottom.html  %}


<div class="pyos-section" markdown="1">
<div class="content padding" markdown="1">

## Share your expertise and experience with the broader community through blogging

And last but not least, we’d also love for you to be a guest blogger on the [pyOpenSci blog](https://www.pyopensci.org/blog/index.html)! If you’d like to write about a pyOpenSci package, your experiences with pyOpenSci, or how you’re using free and open Python tools in your scientific endeavors, we’d love to hear from you! Email our Community team at [media@pyopensci.org](mailto:media@pyopensci.org) for more information.



</div>
</div>


<div class="pyos-section purple">
<div class="content" markdown="1">

{% include feature_row id="diverse-backgrounds" type="left" %}

</div>
</div>

{% include div_purple_bottom.html  %}


<div class="pyos-section" markdown="1">
<div class="content" markdown="1">

{% include feature_row id="build-skills" type="right" %}

</div>
</div>

{% include div_purple_top.html  %}

{% include div_purple_top.html  %}

<div class="pyos-section purple" markdown="1">
<div class="content padding" markdown="1">

## Meet the most recent PyOpenSci community contributors

<!-- Get a list of all contribs and sort reverse so newest are first -->
{% assign new_ppl = site.data.contributors | reverse %}

{% assign total_people = new_ppl | size %}

pyOpenSci has a diverse and vibrant community of pythonistas! To date,
**{{ total_people }}** wonderful people have contributed to pyOpenSci.

<div class="entries-grid">
{% for aperson in new_ppl limit:4 %}
    {% include people-grid.html  %}
{% endfor %}
</div>

<br clear="both">
<br clear="both">

<a href="/python-packages/" class="btn btn--info">View All Contributors <i class="fa fa-4 fa-arrow-circle-right" aria-hidden="true"></i></a>


</div>
</div>


<div class="pyos-section" markdown="1">
<div class="content padding" markdown="1">


## Learn more about volunteering with pyOpenSci

If you still have questions about volunteer roles at pyOpenSci, email our Community team at [media@pyopensci.org](mailto:media@pyopensci.org), and we’d be more than happy to help! You can also ask questions and network with the broader pyOpenSci community on our [Discourse forum](https://pyopensci.discourse.group/).

## Let's connect!

** [<i class="fa-brands fa-mastodon"></i> Mastodon](https://fosstodon.org/@pyopensci)
** [<i class="fa-solid fa-cloud"></i> Bluesky](https://bsky.app/profile/pyopensci.bsky.social)
** [<i class="fa-brands fa-linkedin"></i> LinkedIn](https://www.linkedin.com/company/pyopensci)
** [<i class="fa-brands fa-github"></i> GitHub](https://github.com/pyOpenSci)
** [<i class="fa-brands fa-discord"></i> Discord](https://discord.gg/yYyDFP2BcP)


</div>
</div>
