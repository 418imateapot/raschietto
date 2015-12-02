/* jshint esnext:true */

/**
* Controller per la docArea.
*/
export
var docCtrl = ['$scope', '$http', '$rootScope',
    function($scope, $http, $rootScope) {
        var query = 'PREFIX fabio: <http://purl.org/spar/fabio/>' +
					'PREFIX dcterms: <http://purl.org/dc/terms/>' +
					'SELECT ?url ?title {' +
					'GRAPH <http://vitali.web.cs.unibo.it/raschietto/graph/ltw1543> {' +
					'	?x a fabio:Expression;' +
					'		dcterms:title ?title;' +
					'		fabio:hasRepresentation ?url.' +
				   	'}}';

        var encodedQuery = encodeURIComponent(query);
		
        /*
		 * Recupera i titoli dei doc dal triplestore
		 */
        $http.jsonp('http://tweb2015.cs.unibo.it:8080/data?query=' + encodedQuery + '&format=json&callback=JSON_CALLBACK')
            .then(function(response) {
                $scope.urls = response.data.results.bindings;
                console.log(response.data.results.bindings);
            })
            .catch(function(err) {
                console.log(err);
            });

		/**
		 *	Notifica il mainController che vuoi caricare un nuovo doc
		 *	@param url: l'url del documento da caricare
		 */
        $scope.load = function(url) {
            $rootScope.$broadcast('change_document', {
                'doc_url': url,
				'doc_expr': "something"
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
		$scope.test = "ASDASD";
        $scope.$on('change_document', (event, args) => {
			annotationService.get(args.doc_url)
				.then(resp => {
					console.log(resp.status);
					console.log(resp.data);
					console.log(resp.endpoint);
				}).catch(err => consol.log(err));
		});
    }
];


/**
 * Controller per la mainArea
 */
export
var mainCtrl = ['$scope', '$http', '$sce', 'loadDocument',
    function($scope, $http, $sce, loadDocument) {
        $scope.loading = true;		// Usato per l'animazione
        loadDocument.get('http://www.dlib.org/dlib/november14/beel/11beel.html')
            .then((doc) => {
                $scope.content = $sce.trustAsHtml(doc.resp.content);
                $scope.loading = false;
            });
		/**
		 * Risponde all'evento 'change_document' chiedendo al server di
		 * caricare un nuovo documento
		 */
        $scope.$on('change_document', (event, args) => {
            $scope.loading = true;		// Usato per l'animazione
			// Chiama il servizio loadDocument per 
			// caricare un nuovo documento (duh)
            loadDocument.get(args.doc_url)
                .then((doc) => {
					// $sce dice ad angular di _non_ fare escape dell'html
                    $scope.content = $sce.trustAsHtml(doc.resp.content);
                    $scope.loading = false;
                });
        });
    }
];
