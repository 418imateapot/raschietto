/* jshint esnext: true */
export
var loginModalCtrl = function($scope , UserService){
  this.cancel=$scope.$dismiss;

  this.submit = function (email, password){
    var user = UserService.login(email,password);
    $scope.$close(user);
  };
};
