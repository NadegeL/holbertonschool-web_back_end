#!/usr/bin/env python3
"""Write a Python function that lists all documents in a collection."""
from pymongo import MongoClient


def list_all(mongo_collection):
    """function with one collection, returns all documents
    or an empty list if no document in the collection"""
    return list(mongo_collection.find())
