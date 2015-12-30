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
from './routes.jsx';
import {
    sharedServices
}
from './sharedServices/index.jsx';
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
/* Inizializzazione */
app.run(['$rootScope', '$state', '$stateParams',
    function($rootScope, $state, $stateParams) {
/* mantieni una copia 'globale' dello stato corrente */
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }
]);

app.controller('fakeController', ['$scope', 'documentService',
    function($scope, documentService) {}
]);
