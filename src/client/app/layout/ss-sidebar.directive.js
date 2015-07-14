(function() {
    'use strict';

    angular
        .module('app.layout')
        .directive('ssSidebar', ssSidebar);

    /* @ngInject */
    function ssSidebar () {
        // Opens and closes the sidebar menu.
        // Usage:
        //  <div ss-sidebar">
        //  <div ss-sidebar whenDoneAnimating="vm.sidebarReady()">
        // Creates:
        //  <div ss-sidebar class="sidebar">
        var directive = {
            bindToController: {
                whenDoneAnimating: '&?'
            },
            controller: 'SidebarController',
            controllerAs: 'vm',
            link: link,
            restrict: 'EA'
        };
        return directive;

        function link(scope, element, attrs) {
            var $sidebarInner = element.find('.sidebar-inner');
            var $dropdownElement = element.find('.sidebar-dropdown a');
            element.addClass('sidebar');
            $dropdownElement.click(dropdown);

            function dropdown(e) {
                var dropClass = 'dropy';
                e.preventDefault();
                if (!$dropdownElement.hasClass(dropClass)) {
                    $sidebarInner.slideDown(350, scope.whenDoneAnimating);
                    $dropdownElement.addClass(dropClass);
                } else if ($dropdownElement.hasClass(dropClass)) {
                    $dropdownElement.removeClass(dropClass);
                    $sidebarInner.slideUp(350, scope.whenDoneAnimating);
                }
            }
        }
    }
})();
