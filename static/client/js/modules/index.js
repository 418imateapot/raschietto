
/**
 * Questo modulo fa da contenitore per tutte le componenti
 * dell'applicazione.
 *
 * @module teapot/modules
 */
import './metaArea/index.js';
import './mainArea/index.js';
import './docArea/index.js';
import './raschiettoNavbar/index.js';
import './loginModal/index.js';

export default angular.module('teapot.modules', [
    'teapot.modules.metaArea',
    'teapot.modules.docArea',
    'teapot.modules.mainArea',
    'teapot.modules.navbar',
    'teapot.modules.login'
]);
