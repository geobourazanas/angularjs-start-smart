/* jshint -W079 */
/* global sinon: false, mockData: false */
var stubs = (function() {
    var service = {
        resolved: resolved,
        rejected: rejected,
    };
    return service;

    function resolved($q) {
        var deferred = $q.defer();
        deferred.resolve();
        return deferred.promise;
    }

    function rejected($q) {
        var deferred = $q.defer();
        deferred.reject();
        return deferred.promise;
    }
})();
