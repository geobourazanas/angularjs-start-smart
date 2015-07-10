(function () {
    'use strict';

    angular
        .module('app.products')
        .factory('productsService', productsService);

    /**
     * Products service 
     *
     * @constructor
     * @memberOf app.products
     * @ngInject
     */
    function productsService($http) {
        var service = {
            // Using events to comunicate between controllers and services
            // With this way we don't need to use $scope.$watch
            events: {
                isCollapsed: true
            },
            product: {
                name: null,
                price: null,
                description: null
            },
            getProducts: getProducts,
            getCategories: getCategories,
            autoIncrimentId: autoIncrimentId
        };

        return service;

        /**
         * Loads the products mock data
         */
        function getProducts() {
            return $http.get('products.json')
                .then(httpGetCompleted)
                .catch(httpGetFailed);

            function httpGetCompleted(response) {
                return response.data;
            }
            function httpGetFailed(error) {
                return error;
            }
        }

        /**
         * Loads the categories mock data
         */
        function getCategories() {
            return $http.get('categories.json')
                .then(httpGetCompleted)
                .catch(httpGetFailed);

            function httpGetCompleted(response) {
                return response.data;
            }
            function httpGetFailed(error) {
                return error;
            }
        }

        /**
         * We get the latest id and increase it by one
         *
         * @param  {Object} array The products array
         * @return {number}       The new id
         */
        function autoIncrimentId(array) {
            var maxId = Math.max.apply(Math, array.map(function(obj) { return obj.id; }));
            maxId++;
            return maxId;
        }
    }
})();