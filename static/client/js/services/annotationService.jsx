/* jshint esnext: true */

/**
 * Servizio che, dato un url, chiede al triplestore le annotazioni
 * sulla fabio:Expression corrispondente
 *
 * @param url: indovina un po'
 */

var query_template = function(expr) {
    // Usa i nuovi template string di ES6
    return `
			PREFIX oa: <http://www.w3.org/ns/oa#>
			PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
			PREFIX frbr: <http://purl.org/vocab/frbr/core#>
			prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>
			prefix raschietto: <http://vitali.web.cs.unibo.it/raschietto/>
			SELECT ?type ?provenance ?object ?label ?fragment ?start ?end
			WHERE {
			  ?x a oa:Annotation;
				raschietto:type ?type;
				oa:annotatedBy ?provenance;
				oa:hasBody ?body.
			  ?body rdf:subject <${expr}>;
				rdf:object ?object.
			  OPTIONAL{?object rdfs:label ?label.}
			  OPTIONAL{
				?x oa:hasTarget ?target.
				?target oa:hasSelector ?selector.
				?selector rdf:value ?fragment;
				  oa:start ?start;
				  oa:end ?end.
			  }
			}
			`; // Sono backtick, non virgolette semplici
};

export
var annotationService = ['$http',
    function annotationLoaderFactory($http) {
        var promise;
        var service = {
            // Unico metodo di AnnotationService.
            // Restituisce la promessa del risultato di una query gigante
            // sul documento passato come arg.
            get: function(url) {
                // Converti brutalmente da fabio:Item a fabio:Expression
                var expression = url.replace(/\.html$/, "_ver1");
                var encodedQuery = encodeURIComponent(query_template(expression));
                var url_string = 'http://tweb2015.cs.unibo.it:8080/data?query=' +
                    encodedQuery +
                    '&format=json&callback=JSON_CALLBACK';
                promise = $http.jsonp(url_string)
                    .then(response => {
                        return {
                            'status': 'ok',
                            'body': response.data,
                        };
                    })
                    .catch(error => {
                        return {
                            'status': 'error',
                            'error': error
                        };
                    });
                return promise;
            }
        };
        return service;
    }
];
