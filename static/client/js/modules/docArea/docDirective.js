/* jshint esnext:true */

/**
 * @ngdoc directive
 * @scope {}
 * @name teapot.areas.docArea.directive:docArea
 * @description Mostra la lista di documenti
 */
export
var docDir = function () {
    return {
        restrict: "AE",
        templateUrl: 'views/docView.html',
        scope: {},
        controller: 'docCtrl'
    };
};
