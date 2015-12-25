/*jshint esnext:true */

import {docCtrl} from './docController.jsx';
import {docDir} from './docDirective.jsx';

var docArea = angular.module('teapot.areas.docArea', []);
docArea.directive('docArea', docDir);
docArea.controller('docCtrl', docCtrl);

export {docArea};
