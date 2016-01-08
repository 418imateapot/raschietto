/*jshint esnext:true */

/**
 * @module teapot/modules/docArea
 *
 * @description
 * Questo modulo visualizza la lista dei documenti disponibili e permette di
 * sceglierne uno da visualizzare.<br/>
 * Su Desktop appare come un barra di ricerca con autocompletamento
 * Su Mobile lo sa la Madonna.
 *
 * ##### Componenti:
 *   - Direttiva: {@link teapot.modules.docArea.docAreaDirective}
 *   - Controller: {@link teapot.modules.docArea.DocumentController}
 */

import DocumentController from './docController.js';
import  docAreaDirective from './docDirective.js';

export default angular.module('teapot.modules.docArea', ['teapot.sharedServices'])

.directive('docArea', docAreaDirective)
.controller('DocumentController', DocumentController);
