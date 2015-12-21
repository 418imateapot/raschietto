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
         * /home è la pagina principale e forse sarà l'unica.
         */
            .state('home', {
            url: '/home',
            templateUrl: 'views/homeView.html',
            controller: 'bossCtrl'
        });

    }
];
