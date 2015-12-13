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
         * Contiene tre views annidate (doc, main, meta)
         */
            .state('home', {
            url: '/home',
            views: {
                '': {
                    templateUrl: 'views/home.html'
                },
                'doc@home': {
                    templateUrl: 'views/docArea.html'
                },
                'meta@home': {
                    templateUrl: 'views/metaArea.html'
                },
                'main@home': {
                    templateUrl: 'views/mainArea.html'
                },
            }

        })

        /* TODO: Da cancellare?? */
        .state('bottoni', {
            url: '/bottoni',
            templateUrl: 'views/bottoni.html',
            controller: 'bottoniCtrl'
        });
    }
];
