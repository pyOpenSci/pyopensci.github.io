---
layout: splash
classes: flowing
title: "Get involved with pyOpenSci"
author_profile: false
published: true
site-map: true
permalink: /volunteer.html
volunteer-mission:
  - excerpt: "The vibrant and diverse pyOpenSci community is driven by volunteer Pythonistas that care deeply about the scientific Python open source software that drives open science."
help-us:
  - image_path:
    title: "Lend a Hand on GitHub"
    alt:
    excerpt: "Got some time to help? Check out our GitHub Project Board for a list of current issues that we could use help with. Any issue that is tagged `help-wanted` in our repos is also fair game for anyone to tackle! We add anyone who contributes to pyOpenSci to our [community page](/our-community/). "
    url: https://github.com/orgs/pyOpenSci/projects/3/views/1
    btn_label: "> Check out our GitHub Help Wanted Board"
    btn_class: btn--inverse
  - image_path:
    title: "Sign up to be a package reviewer"
    alt:
    excerpt: "Finding reviewers is one of the more challenging parts of running a peer review process. We are always looking for new reviewers from a broad range of scientific domains. Some reviewers have extensive packaging expertise and others have domain expertise. We think that mix is great, so sign up today! If you are new to reviewing we are happy to support you through our peer review mentorship program."
    url: https://forms.gle/GHfxvmS47nQFDcBM6
    btn_label: "> Sign up now."
    btn_class: btn--inverse
  - image_path:
    title: "Get involved as a peer review Editor"
    alt:
    excerpt: "We also often recruit new editors to support our peer review process. Keep an eye out on our [Discourse forum](https://pyopensci.discourse.group/) for calls for new editors. In the meantime if you are interested in learning more about the editor role, check out our [peer review guidebook](https://www.pyopensci.org/software-peer-review/). "
    url: https://www.pyopensci.org/software-peer-review/how-to/editors-guide.html
    btn_label: "> Click here to learn more about the editor role."
    btn_class: btn--inverse
---

{% include feature_row id="volunteer-mission" type="center" %}

<div class="pyos-section purple">
<div class="content" markdown="1">

## pyOpenSci volunteers come from diverse backgrounds

Our volunteers come from a diverse array of backgrounds, including industry, academia, agencies, national labs, and more. pyOpenSci volunteers are primarily engaged in both the peer review process and developing resources to support the scientific Python community. Volunteers  help improve the quality, maintainability and usability of the software that scientists need for open science. They also support maintainers in developing scientific Python software.

</div>
</div>

{% include div_purple_bottom.html  %}


<div class="pyos-section" markdown="1">
<div class="content" markdown="1">

## pyOpenSci volunteers build skills and community

When you volunteer with pyOpenSci, you’re not only giving back to the community, but also:

- **Learning new skills:** you don’t have to be a Python expert to get involved with pyOpenSci. We can help you level up your packaging game and learn how to constructively review both code and copy through contributions to our online learning resources.
- **Connecting with peers:** our [public Discourse forum](https://pyopensci.discourse.group/) is a great place to ask and answer questions, as well as discuss packaging and open science with other Pythonistas.
- **Being recognized** on the [pyOpenSci website](https://www.pyopensci.org/our-community/index.html) and [GitHub repositories](https://github.com/pyOpenSci): your contribution matters, and we want to ensure your work is recognized and celebrated in a public forum.

</div>
</div>

{% include div_purple_top.html  %}

<div class="pyos-section purple" markdown="1">
<div class="content" markdown="1">

## Volunteer opportunities with pyOpenSci

There are many ways to get involved with pyOpenSci! We’re always looking for folks to:

{% include feature_row_pyos id="help-us" %}


</div>
</div>

{% include div_purple_bottom.html  %}


<div class="pyos-section" markdown="1">
<div class="content" markdown="1">

## Share your expertise and experience with the broader community through blogging

And last but not least, we’d also love for you to be a guest blogger on the [pyOpenSci blog](https://www.pyopensci.org/blog/index.html)! If you’d like to write about a pyOpenSci package, your experiences with pyOpenSci, or how you’re using free and open Python tools in your scientific endeavors, we’d love to hear from you! Email our Community team at [media@pyopensci.org](media@pyopensci.org) for more information.

## Learn more about volunteering with pyOpenSci

If you still have questions about volunteer roles at pyOpenSci, email our Community team at [media@pyopensci.org](media@pyopensci.org), and we’d be more than happy to help! You can also ask questions and network with the broader pyOpenSci community on our [Discourse forum](https://pyopensci.discourse.group/).

</div>
</div>


<div class="pyos-section purple" markdown="1">
<div class="content" markdown="1">

## Let's connect!

- [<i class="fa-brands fa-discourse"></i> Discourse](https://pyopensci.discourse.group/)
- [<i class="fa-brands fa-mastodon"></i> Mastodon](https://fosstodon.org/@pyopensci)
- [<i class="fa-solid fa-cloud"></i> Bluesky](https://bsky.app/profile/pyopensci.bsky.social)
- [<i class="fa-brands fa-linkedin"></i> LinkedIn](https://www.linkedin.com/company/pyopensci)
- [<i class="fa-brands fa-github"></i> GitHub](https://github.com/pyOpenSci)

</div>
</div>


<div class="pyos-section" markdown="1">
<div class="content" markdown="1">

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

<a href="/python-packages/" class="btn btn--info">View All Contributors <i class="fa fa-4 fa-arrow-circle-right" aria-hidden="true"></i></a>


</div>
</div>
