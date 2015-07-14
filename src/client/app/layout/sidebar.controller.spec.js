/* jshint -W117, -W030 */
describe('layout', function () {
    describe('SidebarController', function () {
        var controller,
            di,
            view1 = 'app/products/products.html';

        beforeEach(function() {
            module('app', specHelper.fakeLogger);
            specHelper.injector(function($controller, $httpBackend, $location, $rootScope, 
                $state, $templateCache, productsService) {});
            di = function di() {
                $rootScope.$digest();
            };
        });

        beforeEach(function () {
            controller = $controller('SidebarController');
            $templateCache.put(view1, '');
        });

        // it('should have a base attribute for / to return `true`', function () {
        //     $location.path('/');
        //     di();
        //     expect(controller.isCurrent($state.current)).to.be.true;
        // });

        // it('should have isCurrent() for non route not return `current`', function () {
        //     $location.path('/invalid');
        //     di();
        //     expect(controller.isCurrent({title: 'invalid'})).to.be.false;
        // });

        // it('$broadcast and $stateChangeStart event', function () {
        //     var toState = {
        //         hideSidebar: true
        //     };
        //     controller.isCurrent($state.current);
        //     $rootScope.$broadcast('$stateChangeStart', {}, toState);
        //     di();
        // });
    });
});