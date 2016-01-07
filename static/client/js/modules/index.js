/* jshint esnext: true */
/**
 * Questo modulo fa da contenitore per tutte le componenti
 * dell'applicazione.
 *
 * @module teapot/modules
 */
import {metaArea} from './metaArea/metaArea.js';
import {mainArea} from './mainArea/mainArea.js';
import {docArea} from './docArea/docArea.js';
import {raschiettoNavbar} from './raschiettoNavbar/navbar.js';
import {login} from './loginModal/index.js';

var teapotModules = angular.module('teapot.modules', [
    'teapot.modules.metaArea',
    'teapot.modules.docArea',
    'teapot.modules.mainArea',
    'teapot.modules.navbar',
    'teapot.modules.login'
]);

export {teapotModules};
