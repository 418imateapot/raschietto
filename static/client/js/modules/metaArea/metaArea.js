/*jshint esnext:true */

import {metaCtrl} from './metaController.js';
import {metaDir} from './metaDirective.js';

var metaArea = angular.module('teapot.areas.metaArea', []);
metaArea.directive('metaArea', metaDir);
metaArea.controller('metaCtrl', metaCtrl);

export {metaArea};
