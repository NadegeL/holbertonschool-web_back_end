#!/usr/bin/env python3
"""modify the code from wait_n to be a coroutine"""

import asyncio
import random
from typing import List
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """create asyncio tasks based on wait_random"""

    tasks = [task_wait_random(max_delay) for _ in range(n)]

    delays = []

    for task in asyncio.as_completed(tasks):
        result = await task
        delays.append(result)

    return delays
