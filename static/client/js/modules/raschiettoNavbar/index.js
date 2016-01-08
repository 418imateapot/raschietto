/*jshint esnext:true */

import NavbarController from './NavbarController.js';
import navbarDirective from './navbarDirective.js';

export default angular.module('teapot.modules.navbar', [])
.directive('raschiettoNavbar', navbarDirective)
.controller('NavbarController', NavbarController);
