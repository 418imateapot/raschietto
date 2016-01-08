/* jshint esnext:true */

export default function navbarDirective() {
    return {
        restrict: "AE",
        templateUrl: 'views/navbarView.html',
        scope: {},
        controller: 'NavbarController',
        controllerAs: 'navbar'
    };
}
