/*jshint esnext:true */

import loginModal from './loginModalService.js';
import LoginModalController from './LoginModalController.js';

export default angular.module('teapot.modules.login', [
    'ngCookies',
    'teapot.sharedServices'
])

.service('loginModal', loginModal)
.controller('LoginModalController', LoginModalController);
