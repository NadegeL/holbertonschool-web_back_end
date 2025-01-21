#!/usr/bin/env python3
"""use async comprehension and return list of random numbers"""

import asyncio
import random
async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> list[float]:
    """use async comprehension and return list of random numbers"""
    return [num async for num in async_generator()]
