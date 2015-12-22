/*jshint esnext:true */

import {mainCtrl} from './mainController.jsx';
import {mainDir} from './mainDirective.jsx';

var mainArea = angular.module('teapot.areas.mainArea', []);
mainArea.directive('mainArea', mainDir);
mainArea.controller('mainCtrl', mainCtrl);

export {mainArea};
