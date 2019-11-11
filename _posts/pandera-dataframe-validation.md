---
layout: single
title: "Statistical Data Validation with Pandera"
excerpt: "A flexible and expressive toolkit for performing statistical validation checks on pandas data structures."
author: "Niels Bantilan"
permalink: /posts/pandera-dataframe-validation
header:
    overlay_image: images/pandas.jpg
    overlay_filter: 0.6
categories:
  - blog-post
---

<span style='font-size: 16px;'>
    Photo credit:
    <a href="https://www.flickr.com/photos/nationalzoo/5371290900/in/photostream/"
       target="_blank">
    Ann Batdorf, Smithsonian's National Zoo</a>
</span>

Modern data engineering and analysis workflows will often involve using data
manipulation libraries, which, in the Python universe, would be tools like
[pandas](https://pandas.pydata.org/) and
[pyspark](https://spark.apache.org/docs/latest/api/python/index.html). The
dataframe is a data structure and set of abstractions that enables us to
express potentially complex transformations on data.

Let's say you're building out an ETL pipeline that cleans raw data into a form
that can be analyzed or modeled. One problem that you might encounter when
using these tools is that after multiple transformations, it becomes difficult
to reason about the contents and properties of a dataframe at any given part of
the pipeline. This makes the code harder to read, debug and refactor.

In the context of mission-critical analyses or models, it’s vital to ensure the
quality of the datasets that you're using as inputs to producing key insights
or predictions.


## Pandera: a Statistical Data Validation Toolkit

<img src="https://pandera.readthedocs.io/en/latest/_images/pandera-logo.svg"
width="250px">

[Pandera](https://pandera.readthedocs.io/en/latest/index.html) provides a
flexible and expressive data validation toolkit that helps data scientists and
machine learning engineers make assertions about pandas data structures.

## Use Cases

To illustrate `pandera`'s capabilities using a small toy example, suppose you
had the following dataset:

```python
import pandas as pd

dataset = pd.DataFrame(
    data={
        "height_in_cm": [150, 145, 122, 176, 137, 151],
        "age_category": ["20-30", "10-20", "10-20", "20-30", "10-20", "20-30"],
    },
    index=pd.Series([100, 101, 102, 103, 104, 105], name="person_id"),
)
print(dataset)
```

```
           height_in_cm age_category
person_id
100                 150        20-30
101                 145        10-20
102                 122        10-20
103                 176        20-30
104                 137        10-20
105                 151        20-30
```

Each row in the dataset is uniquely identified by a `person_id`,
and each column describes that person's `height_in_cm`s and `age_category`.


### Column Presence and Type Checking

The most basic type of schema is one that simply checks that specific columns
exist with specific datatypes.

```python
import pandera as pa

schema = pa.DataFrameSchema(
    columns={
        "height_in_cm": pa.Column(pa.Int),
        "age_category": pa.Column(pa.String),
    },
    index=pa.Index(pa.Int, name="person_id"),
)

schema(dataset)
```

The `schema` object is callable, so you can validate the dataset by passing it
it in as an argument to the `schema` call. If the dataframe passes schema
validation, the calling `schema` simply returns the dataframe.

If not, it'll provide useful error messages:


```python
invalid_dataframe = pd.DataFrame({
    "weight_in_kg": [44, 31, 55, 61, 55, 62],
    "age_category": ["20-30", "10-20", "10-20", "20-30", "10-20", "20-30"],
})

schema(invalid_dataframe)
```

```
SchemaError: column 'height_in_cm' not in dataframe
   weight_in_kg age_category
0            44        20-30
1            31        10-20
2            55        10-20
3            61        20-30
4            55        10-20
```

### Basic Statistical Checks

If you want to make stricter assertions about the empirical properties of the
dataset, we can supply the `checks` keyword argument to the `pa.Column` and
`pa.Index` constructors with a `pa.Check` or list of `pa.Check`s.

```python
schema = pa.DataFrameSchema(
    columns={
        "height_in_cm": pa.Column(
            pa.Int,
            # height in centimeters should be between 100 and 300
            checks=pa.Check(lambda s: (100 < s) & (s < 300)),
        ),
        "age_category": pa.Column(
            pa.String,
            # check allowable age categories
            checks=pa.Check(lambda s: s.isin(["10-20", "20-30"]))
        ),
    },
    index=pa.Index(
        pa.Int,
        name="person_id",
        checks=[
            # id is a positive integer
            pa.Check(lambda s: s > 0),

            # id is unique
            pa.Check(lambda s: s.duplicated().sum() == 0),
        ]
    ),
)

schema(dataset)
```

A `pa.Check` object specifies the exact implementation of how to validate a
column or index. The first positional argument in its constructor is a callable
with the signature:

```
pd.Series -> Union[bool, pd.Series[bool]]
```

Notice that the only constraint to the callable is that takes a `Series` as
input and returns a boolean or a boolean Series. By design, checks have access
to the entire pandas `Series` API to make assertions about the properties of a
particular column or index.

### Indexed Error Messages

In cases where the `pa.Check` returns a boolean `Series`, violations of the
schema are reported by the index location of failure cases.

```python
invalid_data = pd.DataFrame(
    data={
        "height_in_cm": [91, 105, 87, 87],
        "age_category": ["10-20", "10-20", "10-20", "10-20"]
    },
    index=pd.Series([200, 201, 202, 203], name="person_id")
)

schema(invalid_data)
```

```
pandera.errors.SchemaError: <Schema Column: 'height_in_cm' type=int64> failed element-wise validator 0:
<lambda>
failure cases:
               person_id  count
failure_case
87            [202, 203]      2
91                 [200]      1
```

The error is reported as a stringified dataframe where the `failure_case` index
enumerates instances of `height_in_cm` values that failed data validation, the
`index` column is the index location of the failure case, and `count` displays
the number of instances of a particular failure case.


### Statistical Hypothesis Tests

What if we wanted to test the hypothesis that older people tend to be taller?
We can achieve this with the [`Hypothesis`](https://pandera.readthedocs.io/en/latest/hypothesis.html)
check:

```python
schema = pa.DataFrameSchema(
    columns={
        "height_in_cm": pa.Column(
            # perform a one-sided two-sample t-test of
            # the distribution of heights by age category,
            # with an alpha value of 5%
            checks=pa.Hypothesis.two_sample_ttest(
                groupby="age_category",
                sample1="20-30",
                relationship="greater_than",
                sample2="10-20",
                alpha=0.05,
                equal_var=True,
            )
        ),
        "age_category": pa.Column(
            pa.String,
            checks=pa.Check(lambda s: s.isin(["10-20", "20-30"])),
        )
    }
)

schema(dataset)
```

## How Can I Use this Today?

Whether you use this tool in Jupyter notebooks, one-off scripts, ETL
pipeline code, or unit tests, `pandera` enables you to make code more readable
and robust by enforcing the deterministic and statistical properties of pandas
data structures at runtime.

Hopefully this post has given you a flavor of what `pandera` can do. It
offers a few more features that you may find useful:

- [Series schema validation](https://pandera.readthedocs.io/en/latest/series_schemas.html)
- [Coercing column data types](https://pandera.readthedocs.io/en/latest/dataframe_schemas.html#coercing-types-on-columns)
- [Multi-index validation](https://pandera.readthedocs.io/en/latest/dataframe_schemas.html#multiindex-validation)
- [Vectorized vs. element-wise checks](https://pandera.readthedocs.io/en/latest/checks.html#vectorized-vs-element-wise-checks)
- [Wide checks](https://pandera.readthedocs.io/en/latest/checks.html#wide-checks)
- [Groupby Column Checks](https://pandera.readthedocs.io/en/latest/checks.html#column-check-groups)
- [Check input/output decorators](https://pandera.readthedocs.io/en/latest/decorators.html)

## What's Next?

I'm actively developing this project and have some exciting features coming
up soon, such as [built-in checks](https://github.com/pandera-dev/pandera/issues/74), [first-class Dask support](https://docs.dask.org/en/latest/dataframe.html),
and [yaml schema specification](https://github.com/pandera-dev/pandera/issues/91). If you'd like to contribute to this
project, you're welcome to head on over to the [github repo](https://github.com/pandera-dev/pandera)!
