#!/usr/bin/env python3
"""sum of a list of floats and integers"""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """Sum of a list mixed int and floats."""
    return float(sum(mxd_lst))
