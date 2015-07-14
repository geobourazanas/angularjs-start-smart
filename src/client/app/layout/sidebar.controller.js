(function() {
    'use strict';

    angular
        .module('app.layout')
        .controller('SidebarController', SidebarController);

    /* @ngInject */
    function SidebarController($state, $rootScope, routerHelper) {
        var vm = this;
        var states = routerHelper.getStates();
        vm.isCurrent = isCurrent;
        vm.hideSidebar = false;

        activate();

        function activate() { getNavRoutes(); }

        // Routes with the attribute nav they are selected here for the left sidebar
        function getNavRoutes() {
            vm.navRoutes = states.filter(function(r) {
                return r.settings && r.settings.nav;
            }).sort(function(r1, r2) {
                return r1.settings.nav - r2.settings.nav;
            });
        }

        /**
         * This method doesn't have their's first scope.
         * It changed to one that looks for state.base atribute and adds
         * a 'title' label at the left menu.
         * Also looks for the state.hideSidebar and with this way
         * it hides the menu on specific states.
         *
         * @param  {Object}  route The active state object
         * @return {Boolean}       The state has or not a base attribute
         */
        function isCurrent(route) {
            if (!route.title || !$state.current || !$state.current.title) {
                return false;
            }
            $rootScope.$on('$stateChangeStart', function(ev, toState) {
                vm.hideSidebar = toState.hideSidebar ? true : false;
            });
            return $state.$current.includes[route.base] ? true : false;
        }
    }
})();
