/* jshint esnext: true */
import {documentService} from './documentService.jsx';
import {annotationService} from './annotationService.jsx';

export
var sharedServices = angular.module('teapot.sharedServices', [])
.factory('documentService', documentService)
.factory('annotationService', annotationService);
