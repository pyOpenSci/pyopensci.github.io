---
title: "Post title goes here"
date: '{{ now.Format "2006-01-02" }}'
type: blog                    # Required: selects the blog single-post layout
url: "/blog/post-slug.html"   # Set the permalink slug for this post
excerpt: ""
author: "Leah Wasser"
blog_topic: community         # community | learn | software | updates - see data/blog_topics.yml
toc: true                     # Show an "on this page" table of contents
lastmod: '{{ now.Format "2006-01-02" }}'  # Update whenever you edit an already-published post
image:
  src: "images/your-image.webp"
  alt: "Description for accessibility"
  credit: ""                  # Optional photo credit shown near the hero image
tags: []                      # Optional tag links shown in the post footer
category: ""                  # Optional alternate hero gradient color source
show_author: false            # Show author name on blog index cards
learn_more:                   # Optional "Learn more" box after post content
  - title: ""
    url: ""
    icon: ""
comments: true
---
