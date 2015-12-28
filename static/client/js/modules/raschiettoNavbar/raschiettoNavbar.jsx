/*jshint esnext:true */

import {raschiettoNavCtrl} from './raschiettoNavController.jsx';
import {raschiettoNavDirective} from './raschiettoNavDirective.jsx';

var raschiettoNavbar = angular.module('teapot.ui.raschiettoNavbar', []);
raschiettoNavbar.directive('raschiettoNavbar', raschiettoNavDirective);
raschiettoNavbar.controller('raschiettoNavbarCtrl', raschiettoNavCtrl);

export {raschiettoNavbar};
