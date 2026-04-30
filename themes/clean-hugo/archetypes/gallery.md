+++
title = '{{ replace .File.ContentBaseName "-" " " | title }}'
date = {{ .Date }}
excerpt = ""
groups = [] # Add group names for filtering (e.g., silver, green, variegated, small leaf)
tags = []

# Populate the hero with a title, excerpt and image
[ hero ]
image = "image.jpg"
subtitle = "A description of this gallery item."

# Optional--explicit list of images
[image_roles]
flower = "flower.jpg"
habit = "habit.jpg"
images = []
+++

A short summary or notes about this item. Add more details below.

