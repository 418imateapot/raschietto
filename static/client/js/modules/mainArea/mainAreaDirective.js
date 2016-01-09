/* jshint esnext:true */
/**
 * @name teapot.modules.mainArea.mainAreaDirective
 * @description
 * Mostra il contenuto del documento caricato
 */
export default function mainAreaDirective() {
    return {
        restrict: "AE",
        templateUrl: 'views/mainView.html',
        scope: {},
        controller: 'MainAreaController',
        controllerAs: 'mainArea'
    };
}
