function config($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, IdleProvider, KeepaliveProvider) {

    // Configure Idle settings
    IdleProvider.idle(5); // in seconds
    IdleProvider.timeout(120); // in seconds
    $urlRouterProvider.otherwise("/principal/resumen");

    $ocLazyLoadProvider.config({
        // Set to true if you want to see what and when is dynamically loaded
        debug: false
    });
    $stateProvider
            .state('principal', {
                abstract: true,
                url: "/principal",
                templateUrl: "assets/views/common/content.html",
            })
            .state('principal.resumen', {
                url: "/resumen",
                data: {pageTitle: 'Articulo'},
                templateUrl: "assets/views/inicio/resumen.html",
            })
            .state('principal.articulo', {
                url: "/articulo",
                data: {pageTitle: 'Articulo'},
                templateUrl: "assets/views/article.html",
            })
            .state('principal.dashboard_1', {
                url: "/asd",
                templateUrl: "assets/views/dashboard_1.html",
                resolve: {
                    loadPlugin: function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            {
                                serie: true,
                                name: 'angular-flot',
                                files: ['js/plugins/flot/jquery.flot.js', 'js/plugins/flot/jquery.flot.time.js', 'js/plugins/flot/jquery.flot.tooltip.min.js', 'js/plugins/flot/jquery.flot.spline.js', 'js/plugins/flot/jquery.flot.resize.js', 'js/plugins/flot/jquery.flot.pie.js', 'js/plugins/flot/curvedLines.js', 'js/plugins/flot/angular-flot.js', ]
                            },
                            {
                                name: 'angles',
                                files: ['js/plugins/chartJs/angles.js', 'js/plugins/chartJs/Chart.min.js']
                            },
                            {
                                name: 'angular-peity',
                                files: ['js/plugins/peity/jquery.peity.min.js', 'js/plugins/peity/angular-peity.js']
                            }
                        ]);
                    }
                }
            })
            .state('dashboards_top', {
                abstract: true,
                url: "/dashboards_top",
                templateUrl: "views/common/content_top_navigation.html",
            })
            .state('mailbox.email_template', {
                url: "/email_template",
                templateUrl: "assets/views/email_template.html",
                data: {pageTitle: 'Mail compose'}
            });
}

angular
        .module('easyapp')
        .config(config)
        .run(function ($rootScope, $state) {
            $rootScope.$state = $state;
        });