/* jshint esnext:true */
export
var routes = ['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {

        /* html5Mode permette di avere url puliti (senza abuso di #)
         * sui browser che lo supportano */
        $locationProvider.html5Mode(true);
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
            auth: false
        })

        /**
         * Gli url figli di 'reader' non richiedono autenticazione
         */
        .state('reader', {
            url: '/reader',
            templateUrl: 'views/homeView.html',
            controller: 'fakeController',
            auth: false
        })

        /**
         * Gli url figli di 'annotator' richiedono autenticazione
         * e permettono di creare nuove annotazioni
         */
        .state('annotator', {
            url: '/annotator',
            templateUrl: 'views/homeView.html',
            controller: 'fakeController',
            auth: true
        });

    }
];
