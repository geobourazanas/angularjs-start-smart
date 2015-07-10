/* jshint -W117, -W030 */
'use strict';

describe('layout layoutService service', function() {
    var localStorageServiceStub,
        deferred;

    beforeEach(function() {
        // load the module.
        module('app', function() {});
        specHelper.injector(function($q, layoutService) {});
        deferred = $q.defer();
    });
   

});