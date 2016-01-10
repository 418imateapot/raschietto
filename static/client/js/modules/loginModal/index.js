

/**
 * @module teapot/modules/loginModal
 *
 * @description
 * Questo modulo visualizza una finestra modale per l'autenticazione.
 *
 * ##### Componenti:
 *   - Direttiva: {@link teapot.modules.loginModal.loginModal}
 *   - Controller: {@link teapot.modules.loginModal.LoginModalController}
 */

import loginModal from './loginModalService.js';
import LoginModalController from './LoginModalController.js';

export default angular.module('teapot.modules.login', [
    'ngCookies',
    'teapot.sharedServices'
])

.service('loginModal', loginModal)
.controller('LoginModalController', LoginModalController);
