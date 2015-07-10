(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('ShellController', ShellController);

    /**
     * ShellController
     *
     * @param {!angular.$timeout} $timeout
     * @param {!angular.$q} $q
     * @param {!angular.config} config
     * @param {!blocks.logger.logger} logger
     * @constructor
     * @memberOf app.layout
     * @ngInject
     */
    function ShellController($timeout, $q, config, logger, productsService) {
        var vm = this;

        vm.events = productsService.events;

        activate();

        //////////////////////////////

        function activate() {
            
        }

    }
})();
