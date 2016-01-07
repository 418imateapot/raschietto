/*jshint esnext:true */

/**
 * @module teapot/areas/docArea
 * @name docArea
 * @description
 * Questo componente mostra la lista dei documenti disponibili
 * Su Desktop appare come un barra di ricerca con autocompletamento
 * Su Mobile lo sa la Madonna
 */

import {docCtrl} from './docController.js';
import {docDir} from './docDirective.js';

var docArea = angular.module('teapot.areas.docArea', []);

docArea.directive('docArea', docDir);
docArea.controller('docCtrl', docCtrl);

export {docArea};
