'use strict';

module.exports =
    angular.module('myApp', [
        'ngRoute',
        // modules
        require('./foo').name,
        //templates
        require('../../tmp/templates').name,
    ])