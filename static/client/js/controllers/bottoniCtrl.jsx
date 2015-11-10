/* jshint esnext:true */
export
var bottoniCtrl = ['$scope', '$http',
    function($scope, $http) {
        $scope.searchAuthor = "";
        $scope.result = "";
        $scope.gogo = function() {
            $http.get('/api/bottoni')
                .then(function(res) {
					$scope.result = res.data;
                });
        };
    }
];
