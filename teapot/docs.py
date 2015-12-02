# encoding: utf-8
#from SPARQLWrapper import SPARQLWrapper
from os import path
from flask import json, request, Response, send_from_directory
from .boris.getDoc import getDoc
from . import app

@app.route('/bottoni')
def getBottoni():
    return "OK"

#@app.route('/docs')
#def getDocumentList():
#    """ Carica lista di documenti da disco """
#    cache_path = path.join(path.dirname(path.realpath(__file__)), '../data')
#    return send_from_directory(cache_path, 'doclist.json')


@app.route('/docs')
def getDocument():
    doc_url = request.args.get('url')
    return getDoc(doc_url)

