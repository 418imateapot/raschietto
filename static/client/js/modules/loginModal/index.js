/*jshint esnext:true */

import {loginModal} from './loginModal.js';
import {loginModalCtrl} from './loginModalCtrl.js';

var login = angular.module('teapot.ui.login', []);
login.service('loginModal', loginModal);
login.controller('loginModalCtrl', loginModalCtrl);

export {login};
