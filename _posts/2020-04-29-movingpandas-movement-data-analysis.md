---
layout: single
title: "MovingPandas: Data Structures and Methods for Movement Data Analysis"
excerpt: "MovingPandas is an easy to use toolkit for exploring movement data that has recently passed the PyOpenSci review."
author: "Anita Graser"
permalink: /blog/movingpandas-movement-data-analysis
header:
    overlay_image: images/pandas.jpg
    overlay_filter: 0.6
    caption: "Photo credit: [**Ann Batdorf, Smithsonian's National Zoo**](https://www.flickr.com/photos/nationalzoo/5371290900/in/photostream/)"
categories:
  - blog-post
  - pandas
  - spatial
---

Movement data is everywhere: from tracking apps that record human or vehicle movement to ecologists monitoring wildlife behavior. Movement data analysis is challenging since movement data combines time series and spatial data analyses questions. Existing spatial analysis libraries, such as GeoPandas, are great at handling spatial data but they don't support moving objects. 

MovingPandas aims to fill the gap of missing tools for exploring movement data. It provides data structures and methods for dealing with data of moving objects. MovingPandas has been accepted by pyOpenSci as part of its ecosystem in March 2020. 

## A Toolkit for Movement Data Analysis

The MovingPandas repository contains multiple tutorials in the form of Jupyter notebooks that illustrate diverse analysis capabilities using different datasets, including: tracking data of ships, migration of birds, and tracks from a horse's GPS collar. 

MovingPandas Trajectory objects are created from GeoPandas GeoDataFrames. A minimal example would be:

```python
import pandas as pd
import geopandas as gpd
import movingpandas as mpd
from shapely.geometry import Point
from datetime import datetime
from pyproj import CRS

df = pd.DataFrame([
  {'geometry':Point(0,0), 't':datetime(2018,1,1,12,0,0)},
  {'geometry':Point(6,0), 't':datetime(2018,1,1,12,6,0)},
  {'geometry':Point(6,6), 't':datetime(2018,1,1,12,10,0)},
  {'geometry':Point(9,9), 't':datetime(2018,1,1,12,15,0)}
]).set_index('t')
gdf = gpd.GeoDataFrame(df, crs=CRS(31256))
traj = mpd.Trajectory(gdf, 1)
```

MovingPandas provides static plots using Matplotlib and interactive plots using hvplot:

```python
traj.plot()
```

![The trajectory is plotted as a blue line on a white background with latitude and longitude values labeled on the axes.]({{ site.url }}/images/movingpandas/mp_fig1.png)

Matplotlib and hvplot parameters are passed along to the underlying libraries to enable extensive customization of plots:

```python
traj.hvplot(geo=True, tiles='OSM', line_width=5, frame_width=300, frame_height=300)
```

![The trajectory is plotted as a wide blue line on an OpenStreetMap background with latitude and longitude values labeled on the axes.]({{ site.url }}/images/movingpandas/mp_fig2.png)

### Exploring Movement Characteristics

MovingPandas makes it straightforward to compute movement characteristics, such as trajectory length and duration, as well as movement speed and direction.

For example, we can explore the daily travelled distance as recorded by a GPS tracker:

```python
df = read_file('tracker.gpkg')
df = df.set_index('t')
tc = mpd.TrajectoryCollection(df, 'CollarID')

daily = tc.split_by_date(mode='day')
daily_lengths = [traj.get_length() for traj in daily.trajectories]
daily_t = [traj.get_start_time() for traj in daily.trajectories]
daily_lengths = pd.DataFrame(daily_lengths, index=daily_t, columns=['length'])
daily_lengths.hvplot(title='Daily trajectory length')
```

![The evolution of the length of the daily trajectories is plotted over the whole obseration period.]({{ site.url }}/images/movingpandas/mp_fig3.png)

In this case, the movement data, which comes from a GPS collar of a horse, reveals that the animal tends to travel farther during summer days than during shorter winter days.  

Other functions deal with trajectory generalization, splitting trajectories into subtrajectories, clipping trajectories to an area of interest, and extracting trajectory start and end times and locations.

### Standing on the Shoulders of Giants

By leveraging existing functionality within the Python data analysis ecosystem, such as, for example: 
time series handling by Pandas,
spatial data analysis by GeoPandas, and 
interactive plotting by HoloViews,
MovingPandas can focus on its core functionality dealing with challenges that are specific to movement data.

For example, the close integration with HoloViews makes it possible to create
[interactive dashboards](http://holoviews.org/user_guide/Dashboards.html) to explore the effect of different trajectory generalization methods:

![The animated map and speed histogram show that speeds increase when the generalization tolerance value is increased.]({{ site.url }}/images/movingpandas/mp_fig4.gif)

## Test Your Movement Data Anylsis Skills Today!

You can [try MovingPandas in a MyBinder notebook - no installation required](https://mybinder.org/v2/gh/anitagraser/movingpandas/binder-tag?filepath=tutorials/0_getting_started.ipynb).

## What's next?

MovingPandas is under active development and there are some exciting features coming up. 
If you’d like to contribute to this project, you’re welcome to head on over to the [Github repo](https://github.com/anitagraser/movingpandas)! 


