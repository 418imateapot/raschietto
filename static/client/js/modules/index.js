/* jshint esnext: true */
import {metaArea} from './metaArea/metaArea.jsx';
import {mainArea} from './mainArea/mainArea.jsx';
import {docArea} from './docArea/docArea.jsx';
import {raschiettoNavbar} from './raschiettoNavbar/raschiettoNavbar.jsx';

export
var teapotAreas = angular.module('teapot.areas', [
    'teapot.areas.metaArea',
    'teapot.areas.docArea',
    'teapot.areas.mainArea'
]);

export
var teapotUi = angular.module('teapot.ui', [
    'teapot.ui.raschiettoNavbar'
]);
