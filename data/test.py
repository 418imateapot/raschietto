#!/usr/bin/env python
#coding: utf-8

from flask import json

with open('docs/banana.json', 'r') as f:
    print json.load(f)
