/*jshint esnext:true */

/**
 * @module teapot/modules/mainArea
 *
 * @description
 * Questo modulo visualizza il documento caricato e, si spera, permetterà un
 * giorno di leggere e scrivere le sue annotazioni
 *
 * ##### Componenti:
 *   - Direttiva: {@link teapot.modules.mainArea.mainAreaDirective}
 *   - Controller: {@link teapot.modules.mainArea.MainAreaController}
 */



import {MainAreaController} from './mainController.js';
import {mainAreaDirective} from './mainDirective.js';

var mainArea = angular.module('teapot.modules.mainArea', []);
mainArea.directive('mainArea', mainAreaDirective);
mainArea.controller('MainAreaController', MainAreaController);

export {mainArea};
