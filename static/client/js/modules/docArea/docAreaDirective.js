/* jshint esnext:true */


/**
 * @name teapot.modules.docArea.docAreaDirective
 * @description
 * Mostra la lista di documenti
 */
export default function docAreaDirective() {
    return {
        restrict: "AE",
        templateUrl: 'views/docView.html',
        scope: {},
        controller: 'DocumentController',
        controllerAs: 'docArea'
    };
}
