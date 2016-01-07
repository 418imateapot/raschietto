/* jshint esnext:true */
/** @module main */

import {routes} from './routes.js';
import {sharedServices} from './sharedServices/index.js';
import {teapotAreas, teapotUi} from './modules/index.js';

/**
 * @member
 * @name teapot.main
 * @description Registra tutti i componenti dell'applicazione col modulo angular principale
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

app.run(['$rootScope', '$state', 'loginModal',
    function($rootScope, $state, loginModal) {
        /**
         * @callback checkAuth
         * @param {Event} event L'evento che ha causato l'invocazione della funzione
         * @param {object} toState Il nuovo stato
         * @param {object} toParams I parametri passati al nuovo stato
         * @description
         * Ogni volta che l'applicazione cambia stato, verifica se sia
         * necessaria l'autenticazione per accedere al nuovo stato.
         */
        $rootScope.$on('$stateChangeStart', function checkAuth(event, toState, toParams) {

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

        });
    }
]);

app.controller('fakeController', ['$scope', 'documentService',
    function($scope, documentService) {}
]);
