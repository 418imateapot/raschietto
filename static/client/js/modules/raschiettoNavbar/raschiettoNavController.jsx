/*jshint esnext:true */
/**
 * Controller per la metaArea
 */
export
var raschiettoNavCtrl = ['$scope', '$state', '$sce',
    function($scope, $state, $sce) {


        var readerModeString = $sce.trustAsHtml('<i class="fa fa-book"></i> Modalità Reader');
        var annotatorModeString = $sce.trustAsHtml('<i class="fa fa-pencil"></i> Modalità Annotator');
        var tutorialModeString = $sce.trustAsHtml('<i class="fa fa-graduation-cap"></i> Tutorial</a>');

        $scope.currentState = $state;
        $scope.$watch('currentState.current.name', function(newState, oldState) {
            switch (newState) {
                case 'annotator':
                    $scope.activeMode = annotatorModeString;
                    $scope.mode2 = readerModeString;
                    $scope.mode3 = tutorialModeString;
                    $scope.color = 'annotator-red';
                    break;
                case 'home':
                    $scope.activeMode = tutorialModeString;
                    $scope.mode2 = readerModeString;
                    $scope.mode3 = annotatorModeString;
                    $scope.color = 'tutorial-green';
                    break;
                case 'reader':
                default:
                    $scope.activeMode = readerModeString;
                    $scope.mode2 = annotatorModeString;
                    $scope.mode3 = tutorialModeString;
                    $scope.color = 'reader-blue';
                   break;
            }
        });

    }
];
