/* jshint esnext:true */

// Librerie di terze parti
import 'jquery';
import 'angular';
import 'angular-animate';
import {
    foundation
}
from 'angular-foundation';
import {
    router
}
from 'angular-ui-router';

// Componenti dell'applicazione
import {
    routes
}
from './routes.js';
import {
    sharedServices
}
from './sharedServices/index.js';
import {
    teapotAreas, teapotUi
}
from './modules/index.js';

/**
 * Registra tutti i componenti dell'applicazione
 * col modulo angular principale
 */
var app = angular.module('teapot.main', [
    'mm.foundation',
    'ui.router',
    'ngAnimate',
    'teapot.sharedServices',
    'teapot.ui',
    'teapot.areas'
]);
/* Registra le ROUTE */
app.config(routes);

app.run(function($rootScope, $state, loginModal){
  $rootScope.$on('$stateChangeStart' , function(event,toState,toParams){

  var autenticazione=toState.data.autenticazione;

  if (autenticazione && typeof $rootScope.currentUser === 'undefined'){
    event.preventDefault();

    loginModal()
    .then(function(){
      return $state.go(toState.name, toParams);
    })
    .catch(function(){
      return $state.go('reader');
    });
  }

  });
});
app.controller('fakeController', ['$scope', 'documentService',
    function($scope, documentService) {}
]);
