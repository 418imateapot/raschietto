/* jshint esnext:true */


export {docAreaDirective};

/**
 * @ngdoc directive
 * @scope {}
 * @restrict AE
 *
 * @namespace
 * @name teapot.modules.docArea.docAreaDirective
 * @description
 * Mostra la lista di documenti
 */
function docAreaDirective() {
    return {
        restrict: "AE",
        templateUrl: 'views/docView.html',
        scope: {},
        controller: 'DocumentController',
        controllerAs: 'docArea'
    };
}
