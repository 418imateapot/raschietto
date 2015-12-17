from rdflib import Graph, Namespace, BNode


FOAF = Namespace("http://xmlns.com/foaf/0.1/")
RDF = Namespace("http://www.w3.org/1999/02/22-rdf-syntax-ns#")
RDFS = Namespace("http://www.w3.org/2000/01/rdf-schema#label")
OA = Namespace("http://www.w3.org/ns/oa#")

g = Graph()

anno1 = BNode()

g.add((anno1, RDF.type, OA.annotation))

print g.serialize(format="turtle")
