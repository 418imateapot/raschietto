/* jshint esnext: true */

import {metaArea} from './metaArea/metaArea.js';
import {mainArea} from './mainArea/mainArea.js';
import {docArea} from './docArea/docArea.js';
import {raschiettoNavbar} from './raschiettoNavbar/raschiettoNavbar.js';
import {login} from './loginModal/index.js';

/**
 * @module teapot.areas
 * @description Esporta le tre aree
 */
export
var teapotAreas = angular.module('teapot.areas', [
    'teapot.areas.metaArea',
    'teapot.areas.docArea',
    'teapot.areas.mainArea'
]);

export
var teapotUi = angular.module('teapot.ui', [
    'teapot.ui.raschiettoNavbar',
    'teapot.ui.login'
]);
