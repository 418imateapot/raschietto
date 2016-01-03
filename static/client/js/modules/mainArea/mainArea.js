/*jshint esnext:true */

import {mainCtrl} from './mainController.js';
import {mainDir} from './mainDirective.js';

var mainArea = angular.module('teapot.areas.mainArea', []);
mainArea.directive('mainArea', mainDir);
mainArea.controller('mainCtrl', mainCtrl);

export {mainArea};
