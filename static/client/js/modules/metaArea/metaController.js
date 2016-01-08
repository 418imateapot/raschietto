/*jshint esnext:true */
/**
 * Controller per la metaArea
 */

MetaController.$inject = ['$scope', 'annotationService'];

export default function MetaController($scope, annotationService) {
    var metaArea = this;

    this.annotations = [];

    $scope.$on('change_document', load_annotations);

    function load_annotations(event, args) {
        annotationService.get(args.doc_url)
            .then(response => {
                metaArea.annotations = annotationService.tidy(response.body);
            }).catch(err => console.log(err));
    }
}
