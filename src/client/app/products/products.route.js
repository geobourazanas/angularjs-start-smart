(function() {
    'use strict';

    angular
        .module('app.products')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates(), '/products');
    }

    function getStates() {
        return [
            {
                state: 'home',
                config: {
                    url: '',
                },
                ncyBreadcrumb: {
                    label: 'Home'
                }
            },
            {
                state: 'products',
                config: {
                    url: '/products',
                    templateUrl: 'app/products/products.html',
                    controller: 'ProductsController',
                    controllerAs: 'vm',
                    title: 'Products',
                    resolve: {
                        products: products,
                        categories: categories
                    },
                    settings: {
                        nav: 1,
                        content: '<i class="fa fa-products"></i> Products',
                    },
                    ncyBreadcrumb: {
                        label: 'Products',
                        parent: 'home'
                    }
                }
            }
        ];

        /**
         * products description
         *
         * @param  {Object} productsService
         * @return {Object} Resolved object
         * @ngInject
         */
        function products(productsService) {
            return productsService.getProducts();
        }

        /**
         * categories description
         *
         * @param  {Object} productsService
         * @return {Object} Resolved object
         * @ngInject
         */
        function categories(productsService) {
            return productsService.getCategories();
        }

    }
})();
