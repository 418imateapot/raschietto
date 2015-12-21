/* jshint esnext: true */
import './metaArea/metaArea.jsx';
import './mainArea/mainArea.jsx';
import './docArea/docArea.jsx';

export
var teapotAreas = angular.module('teapot.areas', ['metaArea', 'docArea', 'mainArea']);
