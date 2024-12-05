#!/usr/bin/env python3
"""annotate a function below"""
from typing import List, Tuple, Iterable, Sequence


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """ takes a list of tuple with strings and int as argument"""
    return [(i, len(i)) for i in lst]
