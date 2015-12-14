/* jshint esnext:true */

// Librerie di terze parti
import 'jquery';
import 'angular';
import 'angular-animate';
import {foundation} from 'angular-foundation';
import {router} from 'angular-ui-router';

// Componenti dell'applicazione
import {routes} from './routes.jsx';
import {mainCtrl, docCtrl, metaCtrl} from './controllers/areaControllers.jsx';
import {documentService} from './services/documentService.jsx';
import {annotationService} from './services/annotationService.jsx';

/**
 * Registra tutti i componenti dell'applicazione
 * col modulo angular principale
 */
angular.module('teapot', ['mm.foundation', 'ui.router', 'ngAnimate'])
	/* Registra le ROUTE */
    .config(routes)
	/* Registra i CONTROLLER */
    .controller('docCtrl', docCtrl)
    .controller('metaCtrl', metaCtrl)
    .controller('mainCtrl', mainCtrl)
	/* Registra I SERVIZI */
	.factory('documentService', documentService)
	.factory('annotationService', annotationService);
