/*jshint esnext:true */
/**
 * Controller per la mainArea
 */
export
var mainCtrl = ['$scope', '$http', '$sce', 'documentService',
    function($scope, $http, $sce, documentService) {
        $scope.loading = true; // Usato per l'animazione
        //TODO: carica un default in maniera meno triste
        documentService.get('http://www.dlib.org/dlib/november14/beel/11beel.html')
            .then((doc) => {
                $scope.content = $sce.trustAsHtml(doc.resp.content);
                console.log(doc.resp.content);
                $scope.loading = false;
            });
        /**
         * Risponde all'evento 'change_document' chiedendo al server di
         * caricare un nuovo documento
         */
        $scope.$on('change_document', (event, args) => {
            $scope.loading = true; // Usato per l'animazione
            // Chiama il servizio loadDocument per
            // caricare un nuovo documento (duh)
            documentService.get(args.doc_url)
                .then((doc) => {
                    // $sce dice ad angular di _non_ fare escape dell'html
                    $scope.content = $sce.trustAsHtml(doc.resp.content);
                    $scope.loading = false;
                });
        });
    }
];
