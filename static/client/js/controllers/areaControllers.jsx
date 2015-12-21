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

/**
 * Controller per la metaArea
 */
export
var metaCtrl = ['$scope', 'annotationService',
    function($scope, annotationService) {
        $scope.$on('change_document', (event, args) => {
            annotationService.get(args.doc_url)
                .then(response => {
                    $scope.annotations = annotationService.tidy(response.body);
                }).catch(err => console.log(err));
        });
    }
];


/**
 * Controller per la mainArea
 */
export
var mainCtrl = ['$scope', '$http', '$sce', 'documentService',
    function($scope, $http, $sce, documentService) {
        $scope.loading = true; // Usato per l'animazione
        //TODO: carica un default in maniera meno triste
        documentService.get('http://www.dlib.org/dlib/november14/beel/11beel.html')
            .then((doc) => {
                $scope.content = $sce.trustAsHtml(doc.resp.content);
                $scope.loading = false;
            });
        /**
         * Risponde all'evento 'change_document' chiedendo al server di
         * caricare un nuovo documento
         */
        $scope.$on('change_document', (event, args) => {
            $scope.loading = true; // Usato per l'animazione
            // Chiama il servizio loadDocument per
            // caricare un nuovo documento (duh)
            documentService.get(args.doc_url)
                .then((doc) => {
                    // $sce dice ad angular di _non_ fare escape dell'html
                    $scope.content = $sce.trustAsHtml(doc.resp.content);
                    $scope.loading = false;
                });
        });
    }
];
