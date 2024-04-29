---
layout: single
title: "pyOpenSci Newsletter: May 2024"
excerpt: "May has brought two new packages, the first (of many!) pyOpenSci workshops, and several incredible speaking opportunities. Read on to learn more!"
author: "Jesse Mostipak"
permalink: /blog/pyos-newsletter-may-2024.html
header:
  overlay_color: "#666"
  overlay_filter: 0.6
categories:
  - blog-post
  - community
classes: wide
toc: true
comments: true
---

## <i class="fa-solid fa-seedling"></i> Spring is in the Air
For those of us in the Northern Hemisphere, spring seems to have finally sprung. It’s a lovely time of year, filled with growth, opportunity, and new beginnings. And for all of us here in the pyOpenSci it’s brought new packages, new opportunities, and new projects that we can’t wait to share with you!

## <i class="fa-solid fa-chalkboard-user"></i> pyOpenSci’s first workshop was a success!
<figure>
    <a href="/images/blog/2024/may/april-workshop.png">
    <img src="/images/blog/2024/may/april-workshop.png" style="max-width:100%" alt="Purple line art of a robot standing in a field of solid purple flowers. The text reads 'Build Your First Python Package! a live, online workshop with pyOpenSci. Thursday, April 25th, 2024.">
    </a>
    <figcaption>
      Thank you to everyone who made our first workshop such a fun experience!
    </figcaption>
</figure>
On Thursday, April 25th, pyOpenSci held its first-ever workshop, titled: [Build Your First Python Package!](https://www.eventbrite.com/e/build-your-first-python-package-tickets-879586546037). With eight countries represented, we had 28 learners create and install their first Python package using [Hatch](https://hatch.pypa.io/latest/) over the course of three hours.

This workshop was the first of many online educational events that we plan on hosting, and was a great opportunity for us to put [our educational philosophy](https://www.pyopensci.org/blog/pyos-education-announcement.html) into practice. All of the pyOpenSci educational materials are community-developed and go through extensive technical and pedagogical review. While the workshop will *not* be available as a recording, the written content is available on the [Learn section of our website](https://www.pyopensci.org/learn.html), where you’ll find resources such as our [Python Packaging Tutorial](https://www.pyopensci.org/python-package-guide/tutorials/intro.html#), as well as in-depth guides on [Python packaging](https://www.pyopensci.org/python-package-guide/package-structure-code/intro.html), [documentation](https://www.pyopensci.org/python-package-guide/documentation/index.html), and [testing](https://www.pyopensci.org/python-package-guide/tests/index.html).

## <i class="fa-solid fa-table"></i> Hello, rdata!
[rdata](https://rdata.readthedocs.io/en/latest/), a Python package that offers a lightweight way to import R datasets/objects stored in the “.rda” and “.rds” formats into Python, has been accepted into the pyOpenSci ecosystem. Created by [Carlos Ramos Carreño](https://github.com/vnmabus), rdata has several key advantages:

rdata is a pure Python implementation, with no dependencies on the R language or related libraries. Thus, it can be used anywhere where Python is supported, including the web using [Pyodide](https://pyodide.org/en/stable/).
rdata attempts to support all R objects that can be meaningfully translated. As opposed to other solutions, you are not limited to import dataframes or data with a particular structure.
rdata allows users to easily customize the conversion of R classes to Python ones. Does your data use custom R classes? Worry no longer, as it is possible to define custom conversions to the Python classes of your choosing.
rdata has a permissive license (MIT). As opposed to other packages that depend on R libraries and thus need to adhere to the GPL license, you can use rdata as a dependency on MIT, BSD or even closed source projects.

If you’d like to learn more about rdata, we recommend [this guest blog post](https://www.pyopensci.org/blog/read-r-datasets-from-python.html) from Carlos!

### Write a guest blog post for pyOpenSci
Interested in writing a guest blog post for pyOpenSci? Reach out to [media@pyopensci.org](mailto:media@pyopensci.org) to get started! We’re always looking for volunteers to write about all things open source and open science, whether that’s a package you’ve created or something new you’ve learned in Python, or anything in between!

## <i class="fa-regular fa-handshake"></i> Welcome, ZodiPy
<figure>
    <a href="/images/blog/2024/may/april-workshop.png">
    <img src="/images/blog/2024/may/april-workshop.png" style="max-width:100%" alt="Purple line art of a robot standing in a field of solid purple flowers. The text reads 'Build Your First Python Package! a live, online workshop with pyOpenSci. Thursday, April 25th, 2024.">
    </a>
    <figcaption>
      Thank you to everyone who made our first workshop such a fun experience!
    </figcaption>
</figure>

[ZodiPy](https://github.com/Cosmoglobe/zodipy) is an open source, [Astropy affiliated](https://www.astropy.org/affiliated/), Python tool for simulating the zodiacal emission that a solar system observer is predicted to see given an interplanetary dust model. ZodiPy attempts to make zodiacal emission simulations more accessible by providing the community with a simple interface to existing models, and is also a new member of the pyOpenSci community!

## <i class="fa-regular fa-message"></i> Listen to Leah at SciPy
We’ve received the exciting news that our Executive Director and Founder, [Leah Wasser](https://github.com/lwasser), will be speaking as well as running a Python packaging workshop at [SciPy](https://www.scipy2024.scipy.org/) this year! We’ll be sharing more about Leah’s work as the conference gets closer, but consider this your reminder to grab your tickets!

## <i class="fa-solid fa-apple-whole"></i> Congratulations on an amazing keynote, Inessa!
<iframe width="560" height="315" src="https://www.youtube.com/embed/5Bjo6pWj-88?si=fUu5zYPrVCgmPEZF&amp;start=711" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

If you weren’t able to attend PyConDE & PyData Berlin 2024 to hear [Inessa Pawson’s](https://github.com/InessaPawson) keynote, [Tending Open Source Orchards](https://2024.pycon.de/program/7TEYDQ/), never fear! You can [watch her phenomenal talk,](https://www.youtube.com/live/5Bjo6pWj-88?feature=shared&t=711) where she dives into the resilient contributor communities behind every large open source project, and shares her insights on the art and science of fostering resilient open source communities.

## <i class="fa-brands fa-python"></i> Upcoming Python events for scientists
### PyCon US
[Registration is still open](https://us.pycon.org/2024/accounts/login/?next=/2024/registration/register) for [PyCon US 2024]((https://us.pycon.org/2024/), happening May 15th–23rd in Pittsburgh, PA. There’s also an online component for folks who can’t be there in person. It’s shaping up to be a stacked event, and you can [view the schedule here(https://us.pycon.org/2024/schedule/).

### PyCon Italia
Fancy a trip to Florence? Then grab your tickets for PyCon Italia! The conference runs Wednesday, May 22nd through Saturday, May 25th, and has a stacked list of [keynote speakers](https://2024.pycon.it/en/schedule/2024-05-22?view=grid).

### PyData London
Happening June 14–16, [PyData London](https://pydata.org/london2024/) tickets are available now! With tutorials on Friday, June 14th, and talks Saturday and Sunday, this is shaping up to be a phenomenal event for the international community of data scientists, data engineers, and developers of data analysis tools to share ideas and learn from each other.

### SciPy
Happening July 8th–14th in Tacoma, WA, [SciPy](https://www.scipy2024.scipy.org/) registration is live! Early bird pricing has ended, but it’s not too late to grab a standard ticket.

### Tell us about your event!
Have an upcoming scientific Python event that’s open to the public? Email us at [media@pyopensci.org](mailto:media@pyopensci.org) with the details to have your event listed.

## <i class="fa-regular fa-paper-plane"></i> Connect with us
You can stay up-to-date with all things pyOpenSci by following us on (LinkedIn)[https://www.linkedin.com/company/pyopensci] and [Fosstodon](https://fosstodon.org/@pyOpenSci), and you can connect with the broader pyOpenSci community on our [Discourse forum](https://pyopensci.discourse.group/). And if you’re interested in our weekly newsletter where we share news, blog posts, and monthly updates, [subscribe on LinkedIn](Subscribe on LinkedIn https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7179551305344933888). We also send out a monthly recap newsletter to [our mailing list](https://eepurl.com/iM7SOM)!
