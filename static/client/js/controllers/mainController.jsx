/* jshint esnext:true */

/**
 * Controller principale
 */
export
var mainCtrl = ['$scope', '$http',
    function($scope, $http) {
        $scope.$on('change_document', (event, args) => {
            annotationService.get(args.doc_url)
                .then(response => {
                    $scope.annotations = annotationService.tidy(response.body);
                }).catch(err => console.log(err));
        });
    }
];
