/* jshint esnext: true */
import {documentService} from './documentService.js';
import {annotationService} from './annotationService.js';

/**
 * @module teapot
 * @name teapot.sharedServices
 * @description 
 * Questo modulo espone alcuni servizi condivisi utili al
 * resto dell'applicazione
 */
export
var sharedServices = angular.module('teapot.sharedServices', [])
.factory('documentService', documentService)
.factory('annotationService', annotationService);
