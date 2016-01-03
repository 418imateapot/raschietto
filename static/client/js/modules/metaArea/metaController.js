/*jshint esnext:true */
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

