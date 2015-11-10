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

@app.route('/bottoni')
def fabbio():
    sparql = SPARQLWrapper('http://tweb2015.cs.unibo.it:8080/data',returnFormat='json')
    sparql.setQuery("""
            PREFIX oa: <http://www.w3.org/ns/oa#>
            PREFIX raschietto: <http://vitali.web.cs.unibo.it/raschietto/>
            PREFIX xmls: <http://www.w3.org/2001/XMLSchema#>
            PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
            PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>

            SELECT ?x ?y ?z ?aaa ?author WHERE {
                    ?x a oa:Annotation;
                      raschietto:type "hasAuthor"^^xmls:normalizedString;
                      oa:hasBody ?y .
                    ?y rdf:object ?z .
                    ?z rdf:subject ?aaa .
                    ?z rdfs:label ?author .
            } LIMIT 10
           """)
    return jsonify(sparql.query().convert())
