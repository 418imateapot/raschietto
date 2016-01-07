/*jshint esnext:true */

import {loginModal} from './loginModal.js';
import {loginModalCtrl} from './loginModalCtrl.js';
import {UserService} from './UserService.js';

var login = angular.module('teapot.modules.login', ['ngCookies']);
login.service('loginModal', loginModal);
login.controller('loginModalCtrl', loginModalCtrl);
login.service('UserService', UserService);

export {login};
