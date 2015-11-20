/* jshint esnext:true */
export
var docCtrl = ['$scope', '$http', '$rootScope',
    function($scope, $http, $rootScope) {
        $http.get('/api/docs')
            .then((resp) => {
                $scope.docs = resp.data;
            })
            .catch((err) => {
                console.log(err);
            });
        $scope.load = function(id) {
			$rootScope.$broadcast('change_document', {'doc_id': id});
        };
    }
];

export
var metaCtrl = ['$scope',
    function($scope) {
        $scope.test = "ok";
    }
];

export
var mainCtrl = ['$scope', '$http', '$sce', 'loadDocument',
    function($scope, $http, $sce, loadDocument) {
		$scope.loading = true;
		loadDocument.get('11beel')
			.then((doc)=>{
				$scope.content = $sce.trustAsHtml(doc.resp);
				$scope.loading = false;
			});
		$scope.$on('change_document', (event, args) => {
			$scope.loading = true;
			loadDocument.get(args.doc_id)
				.then((doc)=>{
					$scope.content = $sce.trustAsHtml(doc.resp);
					$scope.loading = false;
				});
		});
    }];
