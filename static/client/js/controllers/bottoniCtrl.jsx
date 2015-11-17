/* jshint esnext:true */
export
var bottoniCtrl = ['$scope', '$http',
    ($scope, $http) => {
		$http.get('http://www.dlib.org/dlib/november14/beel/11beel.html')
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
