/* jshint esnext:true */

// Librerie di terze parti
import 'jquery';
import 'angular';
import 'angular-animate';
import {foundation} from 'angular-foundation';
import {router} from 'angular-ui-router';

// Componenti dell'applicazione
import {routes} from './routes.jsx';
import {sharedServices} from './sharedServices/index.jsx';
import {teapotAreas} from './modules/index.js';

/**
 * Registra tutti i componenti dell'applicazione
 * col modulo angular principale
 */
var app = angular.module('teapot.main', [
    'mm.foundation',
    'ui.router',
    'ngAnimate',
    'teapot.sharedServices',
    'teapot.areas'
]);
/* Registra le ROUTE */
app.config(routes);
app.controller('bossCtrl', ['$scope', function($scope){$scope.test = "OK!";}]);
