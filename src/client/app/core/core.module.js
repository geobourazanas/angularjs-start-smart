(function () {
    'use strict';

    /**
    * @class app.core
    * @memberOf app
    */
    angular.module('app.core', [
        'ngAnimate', 
        'ngSanitize',
        'ngTouch',
        'ui.router', 
        'ui.select',
        'ui.bootstrap',
        'ncy-angular-breadcrumb',
        'angularMoment',
        'schemaForm',
        'ngFileUpload',

        'blocks.exception', 
        'blocks.logger', 
        'blocks.router',
        'blocks.filters',
    ]);
})();