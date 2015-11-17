# encoding: utf-8
#from SPARQLWrapper import SPARQLWrapper
from os import path
from flask import json, Response, send_from_directory
import requests

from . import app

@app.route('/bottoni')
def getBottoni():
    return "OK"

@app.route('/docs')
def getDocumentList():
    cache_path = path.join(path.dirname(path.realpath(__file__)), '../data')
    return send_from_directory(cache_path, 'doclist.json')

@app.route('/docs/<string:id>')
def getDocument(id):
    import re

    cache_path = path.join(path.dirname(path.realpath(__file__)), '../data')
    with open(path.join(cache_path, 'doclist.json')) as f:
        articles = json.load(f)
        for a in articles:
            if a['id'] == id:
                page = requests.get(a['url']).content
                return page
    return "NOPE"
    
