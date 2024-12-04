#!/usr/bin/env python3
"""annotate a function below"""
from typing import List, Tuple


def element_length(lst: List[str]) -> List[Tuple[str, int]]:
    """ takes a list of tuple with strings and int as argument"""
    return [(i, len(i)) for i in lst]
