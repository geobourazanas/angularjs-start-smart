(function () {
    'use strict';

    angular
        .module('app.core')
        .provider('$core', $core);

    /* @ngInject */
    function $core(ENV) {

        this.$get = function() {
            return this.config;
        };
            
        var _defaultSet = ENV;
    //    if (window.location.protocol != 'https:')
    //        window.location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
        var prefix = 'https';

        // Base URLs
        var baseLocalDevURL = 'http://localhost:8000';  // Django localhost
        var baseLocalDevMocksURL = 'http://localhost:9000';
        var baseTestingURL = 'http://localhost:9001';
        var baseStageURL = prefix + '://app.stage.com';
        var baseProductionURL = prefix + '://app.production.com';

        // Configuration sets
        var sets = {
            // Local development set
            'localDev': {
                baseURL : baseLocalDevURL,
                basePath: '/',

                // heartbeat: function () {
                //     return baseLocalDevURL + '/api/heartbeat/';
                // },
            },

            // Local testing set
            'testing': {
                baseURL : baseTestingURL,
                basePath: '/',
            },

            // Stage set
            'stage': {
                baseURL : baseStageURL,
                basePath: '/',

            },

            // Production set
            'production': {
                baseURL : baseProductionURL,
                basePath: '/',
                
                // heartbeat: function () {
                //     return baseProductionURL + '/api/heartbeat/';
                // },  
            }
        };

        this.config = {

            /**
             * Get a configuration parameter or the result of a configuration function
             *
             * @param {string} configVar The configuration value we are searching for
             * @param {*} param1 optional parameter to be passed to configuration function
             * @param {*} paramN optional parameter to be passed to configuration function
             * @returns {string} The appropriate connection function with current environment
             */
            get: function(configVar) {
                if (angular.isUndefined(sets[_defaultSet])) {
                    throw 'CONFIG: Invalid default set ' + _defaultSet;
                }
                if (angular.isUndefined(sets[_defaultSet][configVar])) {
                    throw 'CONFIG: Invalid configVar ' + configVar;
                }

                //This is a function
                if (angular.isFunction(sets[_defaultSet][configVar])) {
                    var argsArray = Array.prototype.slice.call(arguments);
                    argsArray.shift();
                    return sets[_defaultSet][configVar].apply(null, argsArray);
                }
                //This is a value
                return sets[_defaultSet][configVar];
            },

            /**
             * Switch a configuration set in real time
             * @param {string} setName The set to be used
             */
            switchSet: function(setName) {
                if (angular.isUndefined(sets[setName])) {
                    throw 'CONFIG: Invalid default set ' + setName;
                }
                _defaultSet = setName;
            },

            /**
             * Gets the current set
             * @return {string} the name of the set
             */
            getSet: function() {
                return _defaultSet;
            },

            /**
             * Gets the complete set
             * @param {string} setName The set to be used
             * @return {Object} the config set
             */
            getSetComplete: function(setName) {
                return sets[setName];
            }

        };
    }
})();