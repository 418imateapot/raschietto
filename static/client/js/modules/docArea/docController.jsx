/* jshint esnext:true */

/**
 * Controller per la docArea.
 */
export
var docCtrl = ['$scope', '$http', '$rootScope',
    function($scope, $http, $rootScope) {
        var query = `
            PREFIX fabio: <http://purl.org/spar/fabio/>
            PREFIX dcterms: <http://purl.org/dc/terms/>
            SELECT ?url ?title {
                GRAPH <http://vitali.web.cs.unibo.it/raschietto/graph/ltw1543> {
                    ?x a fabio:Expression;
                        dcterms:title ?title;
                        fabio:hasRepresentation ?url.
                }
            }`; // Backtick, non virgoletta semplice
        var encodedQuery = encodeURIComponent(query);
        var endpoint = 'http://tweb2015.cs.unibo.it:8080/data';
        var opts = 'format=json&callback=JSON_CALLBACK';
        var query_url = `${endpoint}?query=${encodedQuery}&${opts}`; // ES6 Template String!

        /*
         * Recupera i titoli dei doc dal triplestore
         */
        $http.jsonp(query_url)
            .then(response => {
                $scope.urls = response.data.results.bindings;
            })
            .catch(err => {
                console.log(err);
            });

        /**
         * Notifica il mainController che vuoi caricare un nuovo doc
         * @param url: l'url del documento da caricare
         */
        $scope.load = (url) => {
            $rootScope.$broadcast('change_document', {
                'doc_url': url,
                'doc_expr': "something" // TODO: WTF??
            });
        };
    }
];
