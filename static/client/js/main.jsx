/* jshint esnext:true */
import 'jquery';
import 'angular';
import {foundation} from 'angular-foundation';
import {router} from 'angular-ui-router';

import {routes} from './routes.jsx';
import {mainCtrl, docCtrl, metaCtrl} from './controllers/areaControllers.jsx';

angular.module('teapot', ['mm.foundation', 'ui.router'])
    .config(routes)
    .controller('docCtrl', docCtrl)
    .controller('metaCtrl', metaCtrl)
    .controller('mainCtrl', mainCtrl);
