/* jshint esnext:true */
/**
 * @namespace
 * @name teapot.modules.mainArea.mainAreaDirective
 * @description
 * Mostra il contenuto del documento caricato
 */
function mainAreaDirective() {
    return {
        restrict: "AE",
        templateUrl: 'views/mainView.html',
        scope: {},
        controller: 'MainAreaController',
        controllerAs: 'mainArea'
    };
}

export {mainAreaDirective};
