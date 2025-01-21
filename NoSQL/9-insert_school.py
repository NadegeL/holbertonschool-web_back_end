#!/usr/bin/env python3
""" Python function that inserts a new document
in a collection based on kwargs"""

def insert_school(mongo_collection, **kwargs):
    """ **kwargs: nb variables d'args, rerturns new _id"""
    new = mongo_collection.insert_one(kwargs)
    return new.inserted_id
