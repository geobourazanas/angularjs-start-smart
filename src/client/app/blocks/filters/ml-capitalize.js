(function () {
    'use strict';

    angular
        .module('blocks.filters')
        .filter('mlCapitalize', mlCapitalize);

    /**
     * mlCapitalize
     *
     * @constructor
     * @memberOf blocks.filters
     * @ngInject
     */
    function mlCapitalize() {
        return function(input, scope) {
            if (input) {
                input = input.toLowerCase();
                var out = input.substring(0, 1).toUpperCase() + input.substring(1);
                return out.replace('_', ' ');
            } else {
                return input;
            }           
        };
    }
})();