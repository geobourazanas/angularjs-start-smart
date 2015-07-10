/* jshint -W117, -W030 */
'use strict';

describe('routerHelper provider', function() {
    var deferred,
        di,
        routerHelperProvider;

    beforeEach(function() {
        // load the module.
        module('app', function($provide, _routerHelperProvider_) {
            routerHelperProvider = _routerHelperProvider_;
            specHelper.fakeStateProvider($provide);
            specHelper.fakeLogger($provide);
        });
        specHelper.injector(function($rootScope, $q) {});
    });

    beforeEach(function () {
        deferred = $q.defer();
        di = function di() {
            $rootScope.$digest();
        };
    });

    describe('should', function () {
        var eventStub = {
                preventDefault: sinon.spy()
            },
            toState = {}, 
            toParams = {}, 
            fromState = {},
            fromParams = {},
            error = {data: {}};

        beforeEach(function () {

        });

        afterEach(function () {

        });

        it('be defined', function () {
            expect(routerHelperProvider).to.exist;
        });     
       
        it('should do what...', function () {
            $rootScope.$broadcast('$stateChangeError', eventStub, toState, toParams, fromState, fromParams, error);
        });
       
        it('should do what...', function () {
            $rootScope.$broadcast('$stateChangeSuccess', eventStub, toState, toParams, fromState, fromParams, error);
        });

        // it('should do what...', function () {
        //     routerHelperProvider.$get().getStates();
        // });

    });
   

});