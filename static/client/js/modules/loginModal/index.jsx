/*jshint esnext:true */

import {loginModal} from './loginModal.jsx';
import {loginModalCtrl} from './loginModalCtrl.jsx';

var login = angular.module('teapot.ui.login', []);
login.service('loginModal', loginModal);
login.controller('loginModalCtrl', loginModalCtrl);

export {login};
