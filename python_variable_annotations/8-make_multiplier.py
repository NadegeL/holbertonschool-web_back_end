#!/usr/bin/env python3
""" type-annotated function make_multiplier
takes a float multiplier as argument
returns a function that multiplies a float
by multiplier."""

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """ returns a function that multiplies a float by multiplier."""
    def multiply(n: float) -> float:
        return n * multiplier
    return multiply
