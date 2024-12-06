#!/usr/bin/env python3
"""Measure the runtime of wait_n."""

import asyncio
import time
wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int) -> float:
    """
    Measures the total execution time for wait_n(n, max_delay)
    and returns the average time per coroutine.
    """
    start_time = time.perf_counter()  # Start the timer
    asyncio.run(wait_n(n, max_delay))  # Run the wait_n coroutine
    end_time = time.perf_counter()  # End the timer

    total_time = end_time - start_time  # Calculate total execution time
    return total_time / n  # Return average time per coroutine
