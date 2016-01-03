/* jshint esnext: true */
export
var loginModalCtrl = function($scope /*, UsersApi*/){
  this.cancel=$scope.$dismiss;

  this.submit = function (email, password){
//    UsersApi.login(email,password).then(function(user){
      $scope.$close(user);
//    });
  };
};
