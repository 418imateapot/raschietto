/* jshint esnext: true */
import {documentService} from './documentService.js';
import {annotationService} from './annotationService.js';
import {loginService} from './loginService.js';

export
var sharedServices = angular.module('teapot.sharedServices', [])
.factory('documentService', documentService)
.factory('annotationService', annotationService)
.factory('loginService', loginService);
