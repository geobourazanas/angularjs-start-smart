/* jshint -W117, -W030 */
describe('layout', function () {
    describe('SidebarController', function () {
        var controller,
            flush,
            view1 = 'app/dashboard/dashboard.html',
            authentication = {
                isAuth: true,
                token: 'testToken',
                userName: 'testUser'
            };

        beforeEach(function() {
            module('app', specHelper.fakeLogger);
            specHelper.injector(function($controller, $httpBackend, $location, $rootScope, 
                $state, $templateCache, authService) {});
            flush = function flush() {
                $rootScope.$digest();
            };
        });

        beforeEach(function () {
            authService.authentication = authentication;
            controller = $controller('SidebarController');
        
            $templateCache.put(view1, '');
        });

        it('should have a base attribute for / to return `true`', function () {
            $location.path('/');
            flush();
            expect(controller.isCurrent($state.current)).to.be.true;
        });

        it('should have isCurrent() for non route not return `current`', function () {
            $location.path('/invalid');
            flush();
            expect(controller.isCurrent({title: 'invalid'})).to.be.false;
        });

        it('$broadcast and $stateChangeStart event', function () {
            var toState = {
                hideSidebar: true
            };
            controller.isCurrent($state.current);
            $rootScope.$broadcast('$stateChangeStart', {}, toState);
            flush();
        });
    });
});