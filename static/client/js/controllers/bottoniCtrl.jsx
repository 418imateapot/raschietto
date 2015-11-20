/* jshint esnext:true */
export
var bottoniCtrl = ['$scope', '$http',
    ($scope, $http) => {
		$http.get('/api/docs/11beel')
			.then(response => {
				$scope.page = response.data;
				console.log(response.data);
			})
			.catch(err => {
				$scope.page = err;
				console.log(err);
			});
    }
];
