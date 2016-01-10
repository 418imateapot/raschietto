

MainAreaController.$inject = ['$scope', '$http', '$sce', '$stateParams', 'documentService'];

/**
 * @class
 * @name teapot.modules.mainArea.MainAreaController
 * @property {bool} mainArea.loading *True* mentre il documento sta venendo caricato.
 *                                Usato per l'animazione.
 * @property {string} mainArea.content Stringa HTML contenente il testo del documento
 * @listens teapot.modules.docArea.DocumentController#change_document
 * @desc Controller per la mainArea
 */
export default function MainAreaController($scope, $http, $sce, $stateParams, documentService) {
    var mainArea = this;

    mainArea.loading = true; /** Usato per l'animazione */
    mainArea.content = '';   /** Il contenuto del documento HTML */

    $scope.$on('change_document', change_document); /** Reagisci agli eventi 'change_document' */

    init();

    /**
     * @inner
     * @memberOf teapot.modules.mainArea.MainAreaController
     * @desc Inizializza la vista caricando un primo documento
     * @todo carica un default in maniera meno triste
     */
    function init() {
        documentService.retrieve('http://www.dlib.org/dlib/november14/beel/11beel.html')
            .then((doc) => {
                mainArea.content = $sce.trustAsHtml(doc.resp.content);
                mainArea.loading = false;
            });
    }

    /**
     * @inner
     * @memberOf teapot.modules.mainArea.MainAreaController
     * @desc La funzione callback invocata quando si verifica un evento 'change_document'
     * @param {Event} event L'evento verificatosi
     * @param {object} args Il payload dell'evento
     */
    function change_document(event, args) {
        mainArea.loading = true;
        // Chiama il servizio loadDocument per
        // caricare un nuovo documento (duh)
        documentService.retrieve(args.doc_url)
            .then(function(doc) {
                // $sce dice ad angular di _non_ fare escape dell'html
                mainArea.content = $sce.trustAsHtml(doc.resp.content);
                mainArea.loading = false;
            });
    }

}
