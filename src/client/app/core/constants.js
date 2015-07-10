/* global toastr:false, moment:false */
(function() {
    'use strict';

    angular
        .module('app.core')
        .constant('moment', moment)
        .constant('toastr', toastr)
        .constant('ENV', 'production')

	    .constant('angularMomentConfig', {
	        // preprocess: 'unix', // optional
	        // timezone: 'Europe/London' // Need to include moment-timezone.js
	    });
})();