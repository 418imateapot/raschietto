from flask import render_template
from SPARQLWrapper import SPARQLWrapper
from flask.json import jsonify

from . import app

# Test routes
@app.route('/')
def hello():
    return "Ammazzaoh"

@app.route('/spam')
def spam():
    string = ""
    for i in range (0,1000):
        if i%15 == 0:
            string += "\n"
        string += "spam "
    return string

# Import other routes
from docs import *
from queries import *

# Catch everything else
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catchAll(path):
    return Response(status=404, response="{} Not Found".format(path))
