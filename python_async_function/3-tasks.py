#!/usr/bin/env python3
"""Module with function task_wait_random()
that returns a asyncio.Task"""

import asyncio
wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """return asyncio task that waits for a random delay"""
    return asyncio.create_task(wait_random(max_delay))
