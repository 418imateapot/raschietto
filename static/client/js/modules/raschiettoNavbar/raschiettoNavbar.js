/*jshint esnext:true */

import {raschiettoNavCtrl} from './raschiettoNavController.js';
import {raschiettoNavDirective} from './raschiettoNavDirective.js';

var raschiettoNavbar = angular.module('teapot.ui.raschiettoNavbar', []);
raschiettoNavbar.directive('raschiettoNavbar', raschiettoNavDirective);
raschiettoNavbar.controller('raschiettoNavbarCtrl', raschiettoNavCtrl);

export {raschiettoNavbar};
