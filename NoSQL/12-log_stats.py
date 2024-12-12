#!/usr/bin/env python3
""" Python script that provides some stats about Nginx logs stored in MongoDB"""
from pymongo import MongoClient


def get_nginx_stats():
    """count the number of Nginx logs in MongoDB"""

    client = MongoClient("mongodb://localhost:27017/")
    db = client.logs
    collection = db.nginx

    total_logs = collection.count_documents({})
    print(f"{total_logs} logs")

    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    method_counts = {method: collection.count_documents(
        {"method": method}) for method in methods}
    print("Methods:")

    specific_count = collection.count_documents(
        {"method": "GET", "path": "/status"})
    for method in methods:
        print(f"\tmethod {method}: {method_counts[method]}")
    print(f"{specific_count} status check requests")


if __name__ == "__main__":
    get_nginx_stats()
