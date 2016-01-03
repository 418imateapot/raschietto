/* jshint esnext: true */
export
var loginModal = function($modal, $rootScope){

function assignCurrentUser (user){
$rootScope.currentUser=user;
return user;
}

return function(){
var istance= $modal.open({
templateUrl:'views/loginView.html',
controller:'loginModalCtrl',
controllerAs:'loginModalCtrl'
});
return istance.result.then(assignCurrentUser);
};
};
