/* jshint esnext:true */
export
var docCtrl = ['$scope',
    function($scope) {
        $scope.docs = [{
            title: 'Fisasrmonica',
            short_desc: 'Funzionerà?'
        }];
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
