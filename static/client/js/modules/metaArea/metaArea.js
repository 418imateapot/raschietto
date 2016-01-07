/*jshint esnext:true */

import {MetaController} from './metaController.js';
import {metaDirective} from './metaDirective.js';

var metaArea = angular.module('teapot.modules.metaArea', []);
metaArea.directive('metaArea', metaDirective);
metaArea.controller('MetaController', MetaController);

export {metaArea};
