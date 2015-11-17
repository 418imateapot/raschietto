/* jshint esnext:true */
export
var docCtrl = ['$scope', '$http',
    function($scope, $http) {
		$http.get('/api/docs')
			.then((resp) => {
				$scope.docs = resp.data;
			})
		.catch((err) =>{
			console.log(err);
		});
		$scope.load = function(id) {
			
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
var mainCtrl = ['$scope', '$http',
    function($scope, $http) {
        $scope.data = "";
        $http.get('/api/spam')
            .then(
                response =>
                $scope.data = response.data,
                error =>
                console.log(error)
            );
    }
];
