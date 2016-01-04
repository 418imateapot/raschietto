# coding: utf-8

title_annotation_template = """
[ a <http://www.w3.org/1999/02/22-rdf-syntax-ns#Statement> ;
    <http://www.w3.org/1999/02/22-rdf-syntax-ns#object>
        "{TITLE}"^^<http://www.w3.org/2001/XMLSchema#string> ;
    <http://www.w3.org/1999/02/22-rdf-syntax-ns#predicate>
        <http://purl.org/dc/terms/title> ;
    <http://www.w3.org/1999/02/22-rdf-syntax-ns#subject>
        "A title of the document is {TITLE}"@en^^<http://www.w3.org/2001/XMLSchema#string> .
]
"""

author_annotation_template = """
[ a <http://www.w3.org/1999/02/22-rdf-syntax-ns#Statement> ;
    <http://www.w3.org/1999/02/22-rdf-syntax-ns#object>
        <{PERSON_URL}>.
    <{PERSON_URL}> a <http://xmlns.com/foaf/0.1/Person>;
        <http://www.w3.org/2000/01/rdf-schema#label>
        "{PERSON_NAME}"^^<http://www.w3.org/2001/XMLSchema#string>
    <http://www.w3.org/1999/02/22-rdf-syntax-ns#predicate>
        <http://purl.org/dc/terms/creator> ;
    <http://www.w3.org/1999/02/22-rdf-syntax-ns#subject>
        <{WORK}> ;
    <http://www.w3.org/2000/01/rdf-schema#label>
        "An author of the document is {PERSON_NAME}"@en^^<http://www.w3.org/2001/XMLSchema#string> .
]
"""


main_annotation_template = """
[ a       <http://www.w3.org/ns/oa#Annotation> ;
  <http://www.w3.org/2000/01/rdf-schema#label>
          "Title"^^<http://www.w3.org/2001/XMLSchema#string> ;
  <http://vitali.web.cs.unibo.it/raschietto/type>
          "hasTitle"^^<http://www.w3.org/2001/XMLSchema#normalizedString> ;
  <http://www.w3.org/ns/oa#annotatedAt>
          "{TIMESTAMP}"^^<http://www.w3.org/2001/XMLSchema#dateTime> ;
  <http://www.w3.org/ns/oa#annotatedBy>
          <{EMAIL}> ;
  <http://www.w3.org/ns/oa#hasBody>
           {INNER_TEMPLATE};
  <http://www.w3.org/ns/oa#hasTarget>
          [ a       <http://www.w3.org/ns/oa#SpecificResource> ;
            <http://www.w3.org/ns/oa#hasSelector>
                    [ a                              <http://www.w3.org/ns/oa#FragmentSelector> ;
                      <http://www.w3.org/1999/02/22-rdf-syntax-ns#value>
                              "{FRAGMENT}"^^<http://www.w3.org/2001/XMLSchema#normalizedString> ;
                      <http://purl.org/dc/terms/conformsTo>
                              <http://tools.ietf.org/rfc/rfc3236> ;
                      <http://www.w3.org/ns/oa#end>  {FRAG_END} ;
                      <http://www.w3.org/ns/oa#start>
                              {FRAG_START}
                    ] ;
            <http://www.w3.org/ns/oa#hasSource>
                    <{WORK}>
          ]
]
"""#.format(TITLE="qualcosa")
