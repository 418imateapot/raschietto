/* jshint esnext: true */
import {metaArea} from './metaArea/metaArea.jsx';
import {mainArea} from './mainArea/mainArea.jsx';
import {docArea} from './docArea/docArea.jsx';

export
var teapotAreas = angular.module('teapot.areas', [
    'teapot.areas.metaArea',
    'teapot.areas.docArea',
    'teapot.areas.mainArea'
]);
