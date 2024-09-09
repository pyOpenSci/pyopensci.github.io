---
layout: single
title: "rdata: Read R datasets from Python"
excerpt: "rdata is a library for reading R datasets and converting them to Python objects that was recently accepted into the pyOpenSci ecosystem. Learn more about rdata."
author: "Carlos Ramos Carreño"
permalink: /blog/read-r-datasets-from-python.html
header:
    overlay_image: images/pandas.jpg
    overlay_filter: 0.6
    caption: "Photo credit: [**Ann Batdorf, Smithsonian's National Zoo**](https://www.flickr.com/photos/nationalzoo/5371290900/in/photostream/)"
categories:
  - blog-post
  - R
  - data-processing
  - datasets
  - highlight
comments: true
last_modified: 2024-04-18
---

In the last years Python has solidified itself as the main language for data science and machine learning.
However, the R programming language is also a widely used language in statistics, offering thousands of specialized software packages in this field.
As it is common in the R community, many of these packages include accompanying data, often stored as R objects in the .rds and .rda formats.

This variety of datasets is normally inaccessible directly from Python programs.
Instead, programmers typically have to open the data in R and manually convert it to another format, such as CSV, which can be understood by Python libraries.
This process requires an R interpreter, it is not fast, nor easy, and may even be impossible to do without information loss.
In particular, for nested structures and complex or custom R types there is no common file exchange format for Python and R that can be used to this purpose.

The Python package [rdata](https://rdata.readthedocs.io) allows Python programmers to read R datasets in the .rds and .rda formats directly, facilitating the sharing of examples and results between the two languages.
It is a small, pure Python solution that does not require an R interpreter to work, nor external libraries in other languages.
This makes it suitable to be used in most contexts where Python can be found, including the web using Pyodide.
The package rdata has been accepted by pyOpenSci as part of its ecosystem in March 2024.

# A library for reading R datasets

To illustrate rdata capabilities, lets take the role of a Python developer implementing new statistical techniques.
In order to compare her results with prior approaches, she needs to use the same data as them.
Unfortunately for her, the people who implemented the original techniques do not have the data in a format directly readable by Python, as they were all statisticians using the R programming language.
They are eager to share their data with her, in the form of a .rda file called `dataset.rda`.

A cursory inspection of the file in R shows the following:

![Data: frame (10 obs. of 3 variables), Values: (freq (1200), model ("NovTech200"))]({{ site.url }}/images/rdata/dataset.png "The contents of `dataset.rda`")

The dataset contains 3 variables, of which just one is a dataframe.
Moreover the dataframe contains a column with instances of a custom R class, and a boolean column with some NA values.
Thus, converting this data to a format such as CSV to read it in Python would be a difficult endeavor.
Luckily, this Python programmer has heard of the rdata Python package, which could be useful to solve this task.

Our programmer quickly installs rdata with pip or conda, and executes the following command in the Python interpreter:

```python
dataset = rdata.read_rda("dataset.rda")
```

This loads the file into a Python dictionary that she can now explore.
She now starts by checking the "model" and "freq" variables:

```python
>>> dataset["model"]
array(['NovTech200'], dtype='<U10')

>>> dataset["freq"]
array([1200.])
```

The original R vectors have been now converted to equivalent NumPy objects with their corresponding dtype.
Then, she checks the default conversion of the dataframe itself:
```python
>>> dataset["frame"]
    level                                            subject  control
1       8  namespace(name=array(['Louis'], dtype='<U5'), ...    False
2       4  namespace(name=array(['Martin'], dtype='<U6'),...     <NA>
3       6  namespace(name=array(['Miriam'], dtype='<U6'),...     True
4       3  namespace(name=array(['Yoshi'], dtype='<U5'), ...    False
5       9  namespace(name=array(['John'], dtype='<U4'), a...     True
6       2  namespace(name=array(['Karl'], dtype='<U4'), a...    False
7       7  namespace(name=array(['Eusebio'], dtype='<U7')...    False
8      10  namespace(name=array(['Rosa'], dtype='<U4'), a...    False
9       1  namespace(name=array(['Lilly'], dtype='<U5'), ...     <NA>
10      5  namespace(name=array(['Mark'], dtype='<U4'), a...     <NA>
```

## Support for custom classes

The dataframe has been converted by default to a Pandas dataframe, and the NA have been preserved.
However, there is a problem with the subject column: as it contains instances of a custom R class, the default conversion did not know to which class it should be mapped in Python, returning a `SimpleNamespace` instead.

Our programmer has developed a Python class, `Person`, which she plans to use in her code.
Instead of modifying the dataframe to manually convert the instances, she uses the following code to load the data applying the desired transformations:

```python
def person_constructor(obj, attrs):
	return Person(name=str(obj.name[0]), age=int(obj.age[0]))

constructor_dict = {
    **rdata.conversion.DEFAULT_CLASS_MAP,
    "Person": person_constructor,
}

dataset = rdata.read_rda(
    "dataset.rda",
    constructor_dict=constructor_dict,
)
```

This code defines a "constructor" of a Python object and assigns it to a dictionary of constructors, using "Person" as the key.
During the R to Python conversion process, whenever an object is found with a class attribute of "Person", the constructor function will be called with the partially converted object and its attributes, and the return value will be used as the converted value of that object.
The mapping `rdata.conversion.DEFAULT_CLASS_MAP` contains a default set of constructors, including the one for converting R dataframes into Pandas dataframes.
Now, showing the dataset again, we can verify that every instance of the original custom class has been replaced with its Python counterpart:

```python
>>> dataset["frame"]
    level                         subject  control
1       8    Person(name='Louis', age=57)    False
2       4   Person(name='Martin', age=22)     <NA>
3       6   Person(name='Miriam', age=41)     True
4       3    Person(name='Yoshi', age=29)    False
5       9     Person(name='John', age=63)     True
6       2     Person(name='Karl', age=34)    False
7       7  Person(name='Eusebio', age=77)    False
8      10     Person(name='Rosa', age=33)    False
9       1    Person(name='Lilly', age=28)     <NA>
10      5     Person(name='Mark', age=30)     <NA>
```

## What's next?

rdata is under active development, and new functionalities will be added as users need them.
Contributions are welcome in the [Github repository](https://github.com/vnmabus/rdata)!
