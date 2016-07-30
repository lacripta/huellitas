(function () {
    angular.module('easyapp', [
        'ngResource',
        'images-resizer',
        'ui.router', // Routing
        'oc.lazyLoad', // ocLazyLoad
        'ui.bootstrap', // Ui Bootstrap
        'pascalprecht.translate', // Angular Translate
        'ngIdle', // Idle timer
        'ngSanitize'                    // ngSanitize
    ]);
})();