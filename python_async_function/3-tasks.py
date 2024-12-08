#!/usr/bin/env python3
"""create asyncio tasks"""

import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delays: int) -> asyncio.Task:
    """return asyncio task"""
    return asyncio.create_task(wait_random(max_delays))
