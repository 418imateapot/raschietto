from flask import render_template
from SPARQLWrapper import SPARQLWrapper
from flask.json import jsonify

from . import app

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

from queries import *
