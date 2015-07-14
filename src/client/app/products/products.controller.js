(function () {
    'use strict';

    angular
        .module('app.products')
        .controller('ProductsController', ProductsController);

    /* @ngInject */
    function ProductsController($q, $timeout, logger, products, categories, productsService) {
        var vm = this;

        vm.error = null;
        vm.products = null;
        vm.categories = null;
        vm.events = productsService.events;
        vm.product = productsService.product;

        vm.saveProduct = saveProduct;
        vm.editProduct = editProduct;

        activate();

        /////////////////////////////////

        /**
         * Everything in controller starts here
         */
        function activate() {
            vm.products = products;
            vm.categories = categories;
        }

        /**
         * Validates the form and saves the new product
         *
         * @param  {Object} form The form object
         */
        function saveProduct(form) {
            if (form.$valid) {
                if (!vm.product.id) {
                    vm.product.id = productsService.autoIncrimentId(vm.products);
                    // Adding the new product at the top of the products list
                    vm.products = [vm.product].concat(vm.products);
                }
                vm.events.isCollapsed = !vm.events.isCollapsed;
                // Need a timer until the form closes completely
                var timer = $timeout(
                    function() {
                        vm.product = productsService.product;
                    },
                    1000
                );
            }
        }

        /**
         * From the specific product id it loads the data of 
         * the whole single product
         *
         * @param  {number} productId The product's id for modification
         */
        function editProduct(productId) {
            var product = vm.products.filter(function (obj) {
                return obj.id === productId;
            });
            vm.product = product[0];
            vm.product.price = parseFloat(vm.product.price);
            vm.events.isCollapsed = false;
        }

    }
})();
