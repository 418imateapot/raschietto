/* jshint esnext: true */
import {documentService} from './documentService.jsx';
import {annotationService} from './annotationService.jsx';
import {loginService} from './loginService.jsx';

export
var sharedServices = angular.module('teapot.sharedServices', [])
.factory('documentService', documentService)
.factory('annotationService', annotationService)
.factory('loginService', loginService);
