/* jshint esnext:true */
export
var docCtrl = ['$scope', '$http',
    function($scope, $http) {
        $http.get('/api/docs')
            .then((resp) => {
                $scope.docs = resp.data;
            })
            .catch((err) => {
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
var mainCtrl = ['$scope', '$http', '$sce',
    function($scope, $http, $sce) {
        $http.get('/api/docs/11beel')
            .then(response => {
                $scope.content = $sce.trustAsHtml(response.data.content);
            })
            .catch(error =>
                console.log(error)
            );
    }
];
