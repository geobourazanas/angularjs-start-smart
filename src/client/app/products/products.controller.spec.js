/* jshint -W117, -W030 */
'use strict';

describe('ProductsController', function() {
    var deferred,
        di,
        controller;

    beforeEach(function() {
        // load the module.
        module('app', function($provide) {
            specHelper.fakeStateProvider($provide);
            specHelper.fakeLogger($provide);
        });
        specHelper.injector(function($rootScope, $q, $controller) {});
        deferred = $q.defer();
        di = function di() {
            $rootScope.$digest();
        };
    });

    beforeEach(function () {
        controller = $controller('ProductsController', {
            products: [],
            categories: []
        });
        di();
    });

    describe('should ....', function () {

        beforeEach(function () {
                    
        });

        it('should be created successfully', function () {
            expect(controller).to.be.defined;
        });        
        
    });
   

});