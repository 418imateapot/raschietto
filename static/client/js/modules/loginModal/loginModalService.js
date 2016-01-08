/* jshint esnext: true */

loginModal.$inject = ['$modal', '$rootScope'];

export default function loginModal($modal, $rootScope) {

    function assignCurrentUser(user) {
        $rootScope.currentUser = user;
        return user;
    }

    return function() {
        var istance = $modal.open({
            templateUrl: 'views/loginView.html',
            controller: 'LoginModalController',
            controllerAs: 'loginModal'
        });
        return istance.result.then(assignCurrentUser);
    };
}
