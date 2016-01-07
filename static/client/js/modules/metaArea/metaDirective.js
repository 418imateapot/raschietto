/* jshint esnext:true */

export {metaDirective};

function metaDirective () {
    return {
        restrict: "AE",
        templateUrl: 'views/metaView.html',
        scope: {},
        controller: 'MetaController',
        controllerAs: 'metaArea'
    };
}
