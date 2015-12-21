/*jshint esnext:true */

import {metaCtrl} from './metaController.jsx';
import {metaDir} from './metaDirective.jsx';

var metaArea = angular.module('metaArea', []);
metaArea.directive('metaDir', metaDir);
metaArea.controller('metaCtrl', metaCtrl);

export {metaArea};
