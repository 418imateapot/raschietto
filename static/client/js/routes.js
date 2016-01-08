/* jshint esnext:true */
/** 
 * Questo file imposta il routing all'interno
 * dell'applicazione angular
 *
 * @module teapot/routes 
 */


router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

export {router};

/**
 * @function 
 * @param {Service} $stateProvider
 * @param {Service} $urlRouterProvider
 * @param {Service} $locationProvider
 * @description
 * Configura le routes all'interno dell'applicazione
 */
function router($stateProvider, $urlRouterProvider, $locationProvider) {

    /* html5Mode permette di avere url puliti (senza abuso di #)
     * sui browser che lo supportano */
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: true
    });
    /* Default route, se nessun altro fa match */
    $urlRouterProvider.otherwise('/home');

    /**
     * Configurazione dei singoli path nell'applicazione
     */
    $stateProvider

    /**
     * /home è la pagina principale
     * potrebbe ospitare il tutorial?
     */
        .state('home', {
        url: '/home',
        templateUrl: 'views/homeView.html',
        controller: 'fakeController',
        data: {
            autenticazione: false
        }
    })

    /**
     * Gli url figli di 'reader' non richiedono autenticazione
     */
    .state('reader', {
        url: '/reader',
        templateUrl: 'views/homeView.html',
        controller: 'fakeController',
        data: {
            autenticazione: false
        }
    })

    /**
     * Gli url figli di 'annotator' richiedono autenticazione
     * e permettono di creare nuove annotazioni
     */
    .state('annotator', {
        url: '/annotator',
        templateUrl: 'views/homeView.html',
        controller: 'fakeController',
        data: {
            autenticazione: true
        }
    });
}
