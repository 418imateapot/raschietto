/*jshint esnext:true */

import {docCtrl} from './docController.jsx';
import {docDir} from './docDirective.jsx';

var docArea = angular.module('docArea', []);
docArea.directive('docDir', docDir);
docArea.controller('docCtrl', docCtrl);

export {docArea};
