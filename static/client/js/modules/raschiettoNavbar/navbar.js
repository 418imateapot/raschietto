/*jshint esnext:true */

import {raschiettoNavCtrl} from './NavbarController.js';
import {raschiettoNavDirective} from './navbarDirective.js';

var navbar= angular.module('teapot.modules.navbar', []);
navbar.directive('raschiettoNavbar', raschiettoNavDirective);
navbar.controller('raschiettoNavbarCtrl', raschiettoNavCtrl);

export {navbar};
