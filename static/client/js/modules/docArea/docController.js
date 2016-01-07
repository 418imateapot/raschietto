/* jshint esnext:true */

/**
 * @class
 * @name teapot.modules.docArea.DocumentController
 *
 * @property {Array} this.docs La lista dei documenti disponibili
 * @property {function} this.load Notifica gli altri componenti che
 *                                vuoi caricare un nuovo documento
 *
 * @description Controller per la docArea.
 *              Si occupa di interrogare fuseki per ottenere la lista
 *              dei documenti visualizzabili, e di informare tramite
 *              $rootScope.$broadcast gli altri componenti quando l'utente
 *              desidera caricare un nuovo documento.
 */
function DocumentController($http, $rootScope, documentService) {

    var model = this;

    /**
     * @type Array
     */
    model.docs = [];
    model.load = _load;


    documentService.list()
        .then(data => {
            model.docs = data;
            console.log(data);
        })
        .catch(err => {
            console.log(err);
        });


    /**
     * @method
     * @fires teapot.modules.docArea.DocumentController#change_document
     * @memberOf teapot.modules.docArea.DocumentController
     * @private
     *
     * @param {string} url L'URL del documento da caricare
     * @param {string} doi Il DOI del documento da caricare
     */
    function _load(url, doi) {
        /**
         * @event teapot.modules.docArea.DocumentController#change_document
         * @type {object}
         * @property {string} url L'URL del documento da caricare
         * @property {string} doi Il DOI del documento da caricare
         */
        $rootScope.$broadcast('change_document', {
            'doc_url': url,
            'doc_doi': doi
        });
    }
}

DocumentController.$inject = ['$http', '$rootScope', 'documentService'];

export {DocumentController};
