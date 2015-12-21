/*jshint esnext:true */

import {mainCtrl} from './mainController.jsx';
import {mainDir} from './mainDirective.jsx';

var mainArea = angular.module('mainArea', []);
mainArea.directive('mainDir', mainDir);
mainArea.controller('mainCtrl', mainCtrl);

export {mainArea};
