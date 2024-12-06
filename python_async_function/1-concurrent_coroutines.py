#!/usr/bin/env python3

import asyncio
from typing import List
wait_random = __import__('0-basic_async_syntax').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Spawns wait_random n times with the specified max_delay.

    Args:
        n (int): Number of times to call wait_random.
        max_delay (int): Maximum delay (in seconds) for wait_random.

    Returns:
        List[float]: List of all delays in ascending order.
    """
    tasks = [wait_random(max_delay) for _ in range(n)]
    delays = []
    for task in asyncio.as_completed(tasks):
        result = await task

        index = 0
        while index < len(delays) and delays[index] < result:
            index += 1
        delays.insert(index, result)

    return delays
