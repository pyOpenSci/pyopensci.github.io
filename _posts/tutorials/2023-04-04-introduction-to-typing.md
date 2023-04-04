---
layout: single
title: "Introduction to Typing in Python - Python Packaging"
excerpt: "."
author: "Syzmon Molinsky"
permalink: tutorials/python-packaging/intro-to-typing/
header:
  overlay_filter: 0.6
  overlay_color: "#333"
categories:
  - tutorial
  - python-packaging
---

# How to add type hints to your Python code

## Type hints in practice

Type hinting was introduced with Python 3.5 and is described in [PEP 484](https://peps.python.org/pep-0484/).
**PEP 484** defines the scope of type hinting. Is Python drifting towards compiled languages with this feature?
It is not. Type hints are optional and static. They will work like that in the future until Python is Python.
The power of type hints lies somewhere between docstrings and unit tests, and with it, we can avoid many bugs
throughout development.

We've seen type hints in the simple example earlier. Let's come back to it and change it slightly:

```python
from typing import Dict, List


def extent_to_json(ext_obj: List) -> Dict:
    """Convert bounds to a shapely geojson like spatial object."""
    ...

```

Here we focus on the new syntax. First, we described the parameter `ext_obj` as the `List` class. How do we do it?
Add a colon after the parameter (variable) and the name of a class that is passed into a function.
It’s not over. Do you see, that the function definition after closing parenthesis is expanded?
If we want to inform the type checker what the function returns, then we create the arrow sign `->` that points to a returned type,
and after it, we put the function’s colon. Our function returns a Python dictionary (`Dict`).

```{note}
We have exported classes `List` and `Dict` from the `typing` module, but we may use
`list` or `dict` keywords instead. We will achieve the same result.
Capitalized keywords are required when our package uses Python versions that are lower than
Python 3.9. Python 3.7 will be deprecated in June 2023, and Python 3.8 in October 2024.
Thus, if your package supports the whole ecosystem, it should use the `typing` module syntax.
```

### Type hints: basic example

The best way to learn is by example. We will use the [pystiche](https://github.com/pystiche/pystiche/tree/main) package.
To avoid confusion, we start with a mathematical operation:

```python
import torch


def _norm(x: torch.Tensor, dim: int = 1, eps: float = 1e-8) -> torch.Tensor:
    ...

```

The function has three parameters:

- `x` that is required, and its type is `torch.Tensor`,
- `dim`, optional `int` with a default value equal to `1`,
- `eps`, optional `float` with a default value equal to `1e-8`.

As we see, we can use basic data types to mark simple variables. The basic set of those types is:

- `int`,
- `float`,
- `str`,
- `bool`
- `complex`.

We will most frequently use those types within simple functions that are _close to data_.
However, sometimes our variable will be a data structure that isn't built-in within Python itself
but comes from other packages:

- `Tensor` from `pytorch`,
- `ndarray` from `numpy`,
- `DataFrame` from `pandas`,
- `Session` from `requests`.

To perform type checking, we must import those classes. Then we can set those as a parameter's type.
The same is true if we want to use classes from within our package (but we should avoid **circular imports**,
the topic we will uncover later).

### Type hints: complex data types

We can use type hints to describe other objects available in Python.
A little sample of those objects are:

- `List` (= `list`)
- `Dict` (= `dict`)
- `Tuple` (= `tuple`)
- `Set` (= `set`)

How do `pystiche` developers use those objects in their code? Let's take a look at the example below:

```python
from typing import List, Optional
import torch


def _extract_prev(self, idx: int, idcs: List[int]) -> Optional[str]:
    ...

```

The function has two parameters. The parameter `idcs` is a list of integers. We may write it as `List[int]` or `List` without
square brackets and data type that is within a list.

The `_extract_prev` function returns the `Optional` type. It is a special type that describes inputs and output
that can be `None`. There are more interesting types that we can use in our code:

- `Union` – we can use it to describe a variable of multiple types. An example could be:

```python
from typing import List, Union
import numpy as np
import pandas as pd


def process_data(data: Union[np.ndarray, pd.DataFrame, List]) -> np.ndarray:
    ...

```

What's the problem with the example above? The function definition becomes unreadable with more data types passed into the parameter `data`.
We have two solutions for this issue. The first one is to use the `Any` type, which is a wildcard that is equal to not passing any type.

```python
from typing import Any


def process_data(data: Any) -> np.ndarray:
    ...

```

The second solution is to think what is a high-level representation of a passed data type. The examples are:

- `Sequence` – we can use it to describe a variable as a sequence of elements. Sequential are `list`, `tuple`, `range` and `str`.
- `Iterable` – we can use it to describe an iterable variable. Iterables are `list`, `tuple`, `range`, `str`, `dict` and `set`.
- `Mapping` – we can use it to describe a variable that is a mapping. Mappings are `dict` and `defaultdict`.
- `Hashable` – we can use it to describe a hashable variable. Hashables are `int`, `float`, `str`, `tuple` and `frozenset`.
- `Collection` - we can use it to describe a collection variable. Collections are `list`, `tuple`, `range`, `str`, `dict`, `set` and `frozenset`.

Thus, the function could look like this:

```python
from typing import Iterable


def process_data(data: Iterable) -> np.ndarray:
    ...

```

### Type hints: unique objects and interesting cases

The `typing` module provides us with more objects that we can use to describe our variables.
An interesting object is `Callable` that we can use to describe a variable that is a function. Usually,
when we write decorators or wrappers, we use the `Callable` type. The example in the context of the `pystiche` package:

```python
from typing import Callable


def _deprecate(fn: Callable) -> Callable:
    ...

```

The `Callable`can be used as a single word or a word with square brackets with two parameters: `Callable[[arg1, arg2], return_type]`.
The first parameter is a list of arguments, and the second is a function output's data type.

There is an important case around type hints. Sometimes we want to describe a variable that comes from within
our package. Usually, we can do it without problems:

```python
from my_package import my_data_class


def my_function(data: my_data_class) -> None:
    ...

```

And it will work fine. But we may encounter _circular imports_ that need to be fixed. What is a _circular import_?
It is a case when we want to import module B into module A, but module A is already imported into module B.
We are importing the same module into itself. The issue is rare when we program without type
hinting. However, with type hints, it could be tedious.

Thus, if you encounter this error:

```python
from my_package import my_data_class


def my_function(data: my_data_class) -> None:
    ...

```

```shell
ImportError: cannot import name 'my_data_class' from partially initialized module 'my_package' (most likely due to a circular import) (/home/user/my_package/__init__.py)
```

Then you should use the `typing.TYPE_CHECKING` clause to avoid circular imports. The example:

```python
from __future__ import annotations
from typing import TYPE_CHECKING


if TYPE_CHECKING:
    from my_package import my_data_class


def my_function(data: my_data_class) -> None:
    ...

```

Unfortunately, the solution is _dirty_ because we have to
use the `if TYPE_CHECKING` clause and `from __future__ import annotations` import to make it work. It make our
script messier! Type hinting is not only the roses and butterflies!

The nice feature of type hinting is that we can define variable's type within a function:

```python
from typing import Dict
import numpy as np


def validate_model_input(data: np.ndarray) -> Dict:
    """
    Function checks if dataset has enough records to perform modeling.

    Parameters
    ----------
    data : np.ndarray
        Input data.

    Returns
    -------
    : Dict
        Dictionary with `data`, `info` and `status` to decide if pipeline can proceed with modeling.
    """

    output: Dict = None  # type hinting

    # Probably we don't have the lines below yet

    # if data.shape[0] > 50:
    #     output = {"data": data, "info": "Dataset is big enough for statistical tests.", "status": True}
    # else:
    #     output = {"data": data, "info": "Dataset is too small for statistical tests.", "status": False}

    return output

```

We will use this feature rarely. The most probable scenario is when we start defining a function and its output, but
we don't know how we will process data. In this context, we can still run type checking to be sure that the
function behaves as we expect within the newly designed pipeline.

(Another scenario: we will be forced to add type hints to silence dynamic type checkers from some IDEs ;) ).

### Type hinting: final remarks

There are tools designed for static type checking. The most popular one is [`mypy`](https://mypy.readthedocs.io/en/stable/).
Adding it to your Continuous Integration (CI) pipeline is a good idea.
Other tools are integrated with popular IDEs like `PyCharm` or `VSCode`; most are based on `mypy` logic.

The last thing to remember is that **type hints are optional in all our functions, and we can introduce them gradually,
which won't damage our code and output generated by CI type checking tools**.
It is a very convenient way of using this extraordinary feature!
