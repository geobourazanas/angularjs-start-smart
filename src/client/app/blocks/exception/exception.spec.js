/* jshint -W117, -W030 */
'use strict';

describe('exception factory', function() {
    var deferred;

    beforeEach(function() {
        // load the module.
        module('app', function($provide) {
            specHelper.fakeStateProvider($provide);
            specHelper.fakeLogger($provide);
        });

        specHelper.injector(function($rootScope, $q, exception, logger) {});

        deferred = $q.defer();
    });

    describe('should catch an error', function () {

        beforeEach(function () {
                    
        });

        it('be defined', function () {
            expect(exception).to.exist;
        });

        it('that exists with all dependencies', function () {
            expect(angular.isFunction(exception.catcher)).to.be.true;
        });

        it('should do what...', function () {
            var message = 'test',
                reason = 'testData';

            var returns = exception.catcher(message);
            $rootScope.$digest();

            returns(reason);
            expect(logger.error.calledOnce).to.be.true;
        });
        
    });
   

});