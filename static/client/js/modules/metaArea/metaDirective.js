/* jshint esnext:true */

export default function metaDirective () {
    return {
        restrict: "AE",
        templateUrl: 'views/metaView.html',
        scope: {},
        controller: 'MetaController',
        controllerAs: 'metaArea'
    };
}
