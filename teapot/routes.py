# encoding: utf-8
"""
Gestisce il routing per l'api server-side di raschietto
"""
from flask import request, Response

from .boris.documents import get_doc
from . import app


@app.route('/docs', methods=['GET'])
def get_document():
    '''
    Dato un url, restituisce l'html del documento corrispondente
    '''
    doc_url = request.args.get('url')
    return get_doc(doc_url)


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    '''
    Restituisci 404 per tutte le route che non fanno
    match con nulla
    '''
    return Response(status=404, response="{} Not Found".format(path))
