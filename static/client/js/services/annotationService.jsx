/* jshint esnext: true */

/**
 * Servizio che, dato un url, chiede al triplestore le annotazioni
 * sulla fabio:Expression corrispondente
 *
 * @param url: indovina un po'
 */
export
var annotationService = ['$http',
    function($http) {
		var promise;
		var service = {
            get: function(url) {
				var query_template = (expr) => {
					// Usa i nuovi template string di ES6
					return `
					PREFIX raschietto: <http://vitali.web.cs.unibo.it/raschietto/>
					PREFIX oa: <http://www.w3.org/ns/oa#>
					PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
					PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
					SELECT ?title
					WHERE {
						?anno a oa:Annotation;
							raschietto:type "hasTitle";
							oa:hasBody ?body.
						?body rdf:subject <${expr}>;
						rdf:object ?title.
					}
					`; // Sono backtick, non virgolette semplici
				};

				var expression = url.replace(/\.html$/, "_ver1"); // Converti brutalmente da fabio:Item a fabio:Expression
				var encodedQuery = encodeURIComponent(query_template(expression));
				var url_string = 'http://tweb2015.cs.unibo.it:8080/data?query=' + 
									encodedQuery + 
									'&format=json&callback=JSON_CALLBACK';
					promise =  $http.jsonp(url_string)
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
