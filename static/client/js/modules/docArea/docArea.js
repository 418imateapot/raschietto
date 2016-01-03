/*jshint esnext:true */

import {docCtrl} from './docController.js';
import {docDir} from './docDirective.js';

var docArea = angular.module('teapot.areas.docArea', []);
docArea.directive('docArea', docDir);
docArea.controller('docCtrl', docCtrl);

export {docArea};
