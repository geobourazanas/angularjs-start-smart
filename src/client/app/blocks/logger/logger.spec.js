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
   

});