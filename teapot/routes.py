# encoding: utf-8
from os import path
from flask import json, request, Response, send_from_directory
from SPARQLWrapper import SPARQLWrapper

from .boris.getDoc import getDoc
from . import app

@app.route('/docs', methods=['GET'])
def getDocument():
    '''
    Dato un url, restituisce l'html del documento corrispondente
    '''
    doc_url = request.args.get('url')
    return getDoc(doc_url)


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catchAll(path):
    '''
    Restituisci 404 per tutte le route che non fanno
    match con nulla
    '''
    return Response(status=404, response="{} Not Found".format(path))
