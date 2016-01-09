/* jshint esnext:true */

/** 
 * Questo è l'entry point dell'applicazione, dove
 * vengono registrate tutte le componenti necessarie
 * al suo funzionamento.
 *
 * @module teapot
 */

// Componenti dell'applicazione
import conf from './conf/index.js';
import sharedServices from './sharedServices/index.js';
import teapotModules from './modules/index.js';

/**
 * @name app
 * @description Registra tutti i componenti dell'applicazione col modulo angular principale
 */
var app = angular.module('teapot', [
    'mm.foundation',
    'ui.router',
    'ngAnimate',
    'teapot.sharedServices',
    'teapot.modules'
]);

/* Registra le ROUTE */
app.config(conf.router);

app.run(conf.auth);

app.controller('fakeController', ['$scope', 'documentService',
    function($scope, documentService) {}
]);
