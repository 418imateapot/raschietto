/* jshint esnext: true */
export
var loginModalCtrl = function($scope, UserService) {
    this.cancel = function() {
        $scope.$dismiss("cancelled");
    };

    this.submit = function(email, password) {
        var user = UserService.login(email, password);
        $scope.$close(user);
    };
};
