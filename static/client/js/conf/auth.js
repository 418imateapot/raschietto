

checkAuth.$inject = ['$rootScope', '$state', 'loginModal'];

/** @module teapot/conf/auth */

/**
 * @function
 * @param {Event} event L'evento che ha causato l'invocazione della funzione
 * @param {object} toState Il nuovo stato
 * @param {object} toParams I parametri passati al nuovo stato
 * @description
 * Ogni volta che l'applicazione cambia stato, verifica se sia
 * necessaria l'autenticazione per accedere al nuovo stato.
 */
export default function checkAuth($rootScope, $state, loginModal) {
    $rootScope.$on('$stateChangeStart', _perform_check);


    function _perform_check(event, toState, toParams) {

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
