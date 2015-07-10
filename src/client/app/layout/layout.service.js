(function () {
    'use strict';

    angular
        .module('app.layout')
        .factory('layoutService', layoutService);

    /**
     * Layout service is responsible for the main layout 
     * and their widjets (top-nav/sidebar)
     *
     * @constructor
     * @memberOf app.layout
     * @ngInject
     */
    function layoutService() {
        var service = {};

        return service;

    }
})();