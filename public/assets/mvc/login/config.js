function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, IdleProvider, KeepaliveProvider) {

    // Configure Idle settings
    IdleProvider.idle(5); // in seconds
    IdleProvider.timeout(120); // in seconds
    $urlRouterProvider.otherwise("/inicio");

    $ocLazyLoadProvider.config({
        // Set to true if you want to see what and when is dynamically loaded
        debug: false
    });
    $stateProvider
            .state('inicio', {
                url: "/inicio",
                data: {pageTitle: 'Ingresar al Administrador'},
                resolve: {
                    loadPlugin: function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            {
                                files: ['bower_components/sweetalert/sweetalert.min.js', 'bower_components/sweetalert/sweetalert.css']
                            },
                            {
                                name: 'oitozero.ngSweetAlert',
                                files: ['bower_components/sweetalert/angular-sweetalert.min.js']
                            }
                        ]);
                    }
                },
                templateUrl: "assets/views/login.html",
            });
}

angular
        .module('easyapp')
        .config(config)
        .run(function ($rootScope, $state) {
            $rootScope.$state = $state;
        });