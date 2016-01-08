/*jshint esnext:true */

NavbarController.$inject = ['$rootScope', '$scope', '$state'];

/**
 * @class
 * Controller per la metaArea
 */
export default function NavbarController($rootScope, $scope, $state) {

    var navbar = this;

    navbar.changeMode = function(newMode) {
        $state.go(newMode);
    };

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
        navbar.login = (newVal) ? 'Logout' : 'Login';
    });


    const modes = {
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
        navbar.modeColor = modes[mode1].color;
        navbar.icon1 = modes[mode1].icon;
        navbar.modeName1 = modes[mode1].name;
        navbar.icon2 = modes[mode2].icon;
        navbar.modeName2 = modes[mode2].name;
        navbar.uiState2 = modes[mode2].state;
        navbar.icon3 = modes[mode3].icon;
        navbar.modeName3 = modes[mode3].name;
        navbar.uiState3 = modes[mode3].state;
    }


}
