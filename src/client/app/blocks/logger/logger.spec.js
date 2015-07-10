/* jshint -W117, -W030 */
'use strict';

describe('logger service', function() {
    var deferred,
        di;

    beforeEach(function() {
        // load the module.
        module('app', function($provide) {
            specHelper.fakeStateProvider($provide);
            // specHelper.fakeLogger($provide);
        });
        specHelper.injector(function($rootScope, $q, layoutService, logger) {});

        deferred = $q.defer();

        di = function di() {
            $rootScope.$digest();
        };
    });

    describe('should', function () {
        var layoutServiceStub;

        beforeEach(function () {
            layoutServiceStub = sinon.stub(layoutService, 'pushHttpRequests');
        });

        afterEach(function () {
            layoutServiceStub.restore();
        });

        it('be defined', function () {
            expect(logger).to.exist;
        });

        it('with logger.error', function() {
            logger.error();
            di();

            expect(layoutService.pushHttpRequests.calledOnce).to.be.true;
        });        
 
        it('with logger.info', function() {
            logger.info();
            di();

            expect(layoutService.pushHttpRequests.calledOnce).to.be.true;
        });

        it('with logger.success', function() {
            logger.success();
            di();

            expect(layoutService.pushHttpRequests.calledOnce).to.be.false;
        });

        it('with logger.warning', function() {
            logger.warning();
            di();

            expect(layoutService.pushHttpRequests.calledOnce).to.be.true;
        });        
        
    });
   

});