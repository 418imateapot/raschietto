/*jshint esnext:true */

import MetaController from './metaController.js';
import metaDirective from './metaDirective.js';

export default angular.module('teapot.modules.metaArea', [])
.directive('metaArea', metaDirective)
.controller('MetaController', MetaController);

