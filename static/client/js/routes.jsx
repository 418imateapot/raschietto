/* jshint esnext:true */
export
var routes = ['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/home');

        $stateProvider

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

        });
    }
];
