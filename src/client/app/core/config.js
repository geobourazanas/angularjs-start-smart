(function () {
    'use strict';

    var config = {
        appTitle: 'StartSmart Project',
        appErrorPrefix: '[StartSmart Project Error] '
    };

    /* @ngInject */
    function toastrConfig(toastr) {
        toastr.options.timeOut = 4000;
        toastr.options.positionClass = 'toast-bottom-right';
    }

    /* @ngInject */
    function configure ($httpProvider, $provide, $stateProvider, $urlRouterProvider, 
        uiSelectConfig, $logProvider, routerHelperProvider, exceptionHandlerProvider) {
        if ($logProvider.debugEnabled) {
            $logProvider.debugEnabled(true);
        }
        exceptionHandlerProvider.configure(config.appErrorPrefix);
        routerHelperProvider.configure({docTitle: config.appTitle + ': '});

        uiSelectConfig.theme = 'selectize';
            
        // $httpProvider.interceptors.push('authInterceptorService');
        // $httpProvider.interceptors.push('httpMethodInterceptor');

        // Django specific headers for POST requests
        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
    }

    /* @ngInject */
    function initializeRun ($rootScope, $state, $stateParams, $urlRouter, amMoment) {

        amMoment.changeLocale('en-gb');

        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    }

    angular
        .module('app.core')
        .config(toastrConfig)
        .config(configure)
        .value('config', config)
        .run(initializeRun);

})();