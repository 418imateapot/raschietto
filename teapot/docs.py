# encoding: utf-8
#from SPARQLWrapper import SPARQLWrapper
from os import path
from flask import json, Response, send_from_directory
from .boris.getDoc import getDoc
from . import app

@app.route('/bottoni')
def getBottoni():
    return "OK"

@app.route('/docs')
def getDocumentList():
    """ Carica lista di documenti da disco """
    cache_path = path.join(path.dirname(path.realpath(__file__)), '../data')
    return send_from_directory(cache_path, 'doclist.json')


@app.route('/docs/<string:id>')
def getDocument(id):
    cache_path = path.join(path.dirname(path.realpath(__file__)), '../data')
    with open(path.join(cache_path, 'doclist.json'), 'r') as f:
        articles = json.load(f)
        for a in articles:
            if a['id'] == id:
                return getDoc(a['url'])

#@app.route('/docs/<string:id>')
#def getDocument(id):
#    """ Trova l'URL di un documento e lo visualizza """
#    cache_path = path.join(path.dirname(path.realpath(__file__)), '../data')
#    with open(path.join(cache_path, 'doclist.json'), 'r') as f:
#        articles = json.load(f)
#        for a in articles:
#            if a['id'] == id:
#                page = requests.get(a['url']).content
#                return page
#    return Response(status=404, response="Not Found")
    
