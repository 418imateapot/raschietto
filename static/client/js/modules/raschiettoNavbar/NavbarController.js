/*jshint esnext:true */
/**
 * Controller per la metaArea
 */
export
var raschiettoNavCtrl = ['$rootScope', '$scope', '$state',
    function($rootScope, $scope, $state) {

        var modes = {
            'reader': {
                'color': 'reader-blue',
                'icon': 'fa fa-book',
                'name': 'Reader',
                'state': 'reader'
            },
            'annotator': {
                'color': 'annotator-red',
                'icon': 'fa fa-pencil',
                'name': 'Annotator',
                'state': 'annotator'
            },
            'tutorial': {
                'color': 'tutorial-green',
                'icon': 'fa fa-graduation-cap',
                'name': 'Tutorial',
                'state': 'home'
            }
        };

        function setupMode(mode1, mode2, mode3) {
            $scope.modeColor = modes[mode1].color;
            $scope.icon1 = modes[mode1].icon;
            $scope.modeName1 = modes[mode1].name;
            $scope.icon2 = modes[mode2].icon;
            $scope.modeName2 = modes[mode2].name;
            $scope.uiState2 = modes[mode2].state;
            $scope.icon3 = modes[mode3].icon;
            $scope.modeName3 = modes[mode3].name;
            $scope.uiState3 = modes[mode3].state;
        }

        $scope.currentState = $state;
        $scope.$watch('currentState.current.name', function(newState, oldState) {
            switch (newState) {
                case 'annotator':
                    setupMode('annotator', 'reader', 'tutorial');
                    break;
                case 'home':
                    setupMode('tutorial', 'reader', 'annotator');
                    break;
                case 'reader':
                    setupMode('reader', 'annotator', 'tutorial');
                    break;
            }
        });

        // Controlla se dobbiamo mostrare "login" o "logout"
        $scope.rs = $rootScope;
        $scope.$watch('rs.currentUser', function(newVal) {
            $scope.login =  (newVal) ? 'Logout' :  'Login';
        });

        $scope.changeMode = function(newMode) {
            $state.go(newMode);
        };
    }
];
