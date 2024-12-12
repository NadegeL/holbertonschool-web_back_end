#!/usr/bin/env python3
"""Python script that provides some stats
about Nginx logs stored in MongoDB"""
from pymongo import MongoClient


def get_nginx_stats():
    """Retrieve and display some statistics from the nginx logs"""
    client = MongoClient("mongodb://localhost:27017/")
    db = client.logs
    collection = db.nginx


    total_logs = collection.count_documents({})

    # Comptage par méthode  HTTP
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    method_counts = {method: collection.count_documents({"method": method}) for method in methods}

    # Comptage spécifique : GET + /status
    specific_count = collection.count_documents({"method": "GET", "path": "/status"})

    # Affichage des résultats
    print(f"{total_logs} logs")
    print("Methods:")
    for method in methods:
        print(f"\tmethod {method}: {method_counts[method]}")
    print(f"{specific_count} status check requests")

if __name__ == "__main__":
    get_nginx_stats()
