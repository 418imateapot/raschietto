/*jshint esnext:true */

import {metaCtrl} from './metaController.jsx';
import {metaDir} from './metaDirective.jsx';

var metaArea = angular.module('teapot.areas.metaArea', []);
metaArea.directive('metaArea', metaDir);
metaArea.controller('metaCtrl', metaCtrl);

export {metaArea};
