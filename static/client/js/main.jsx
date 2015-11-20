/* jshint esnext:true */
import 'jquery';
import 'angular';
import 'angular-animate';
import {foundation} from 'angular-foundation';
import {router} from 'angular-ui-router';

import {routes} from './routes.jsx';
import {mainCtrl, docCtrl, metaCtrl} from './controllers/areaControllers.jsx';
import {bottoniCtrl} from './controllers/bottoniCtrl.jsx';
import {loadDocumentService} from './services/loadDocumentService.jsx';

angular.module('teapot', ['mm.foundation', 'ui.router', 'ngAnimate'])
    .config(routes)
    .controller('docCtrl', docCtrl)
    .controller('metaCtrl', metaCtrl)
    .controller('mainCtrl', mainCtrl)
    .controller('bottoniCtrl', bottoniCtrl)
	.factory('loadDocument', loadDocumentService);
