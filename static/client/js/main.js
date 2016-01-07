/* jshint esnext:true */

/** 
 * Questo è l'entry point dell'applicazione, dove
 * vengono registrate tutte le componenti necessarie
 * al suo funzionamento.
 *
 * @module teapot
 */

// Componenti dell'applicazione
import {router} from './routes.js';
import {sharedServices} from './sharedServices/index.js';
import {teapotModules} from './modules/index.js';

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
app.config(router);

app.run(['$rootScope', '$state', 'loginModal',
    function($rootScope, $state, loginModal) {
        $rootScope.$on('$stateChangeStart', checkAuth);


        /**
         * @callback checkAuth
         * @param {Event} event L'evento che ha causato l'invocazione della funzione
         * @param {object} toState Il nuovo stato
         * @param {object} toParams I parametri passati al nuovo stato
         * @description
         * Ogni volta che l'applicazione cambia stato, verifica se sia
         * necessaria l'autenticazione per accedere al nuovo stato.
         */
        function checkAuth(event, toState, toParams) {

            var autenticazione = toState.data.autenticazione;

            if (autenticazione && typeof $rootScope.currentUser === 'undefined') {
                event.preventDefault();

                loginModal()
                    .then(function() {
                        return $state.go(toState.name, toParams);
                    })
                    .catch(function() {
                        return $state.go('reader');
                    });
            }

        }
    }
]);

app.controller('fakeController', ['$scope', 'documentService',
    function($scope, documentService) {}
]);
