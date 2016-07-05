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
            .state('principal.galeria', {
                url: "/articulos",
                data: {pageTitle: 'Galeria de Imagenes'},
                templateUrl: "assets/views/galeria/galeria.html",
                resolve: {
                    loadPlugin: function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            {
                                serie: true,
                                files: [
                                    'bower_components/dataTables/datatables.min.js',
                                    'bower_components/dataTables/datatables.min.css'
                                ]
                            },
                            {
                                files: [
                                    'bower_components/summernote/summernote.css',
                                    'bower_components/summernote/summernote-bs3.css',
                                    'bower_components/summernote/summernote.min.js'
                                ]
                            },
                            {
                                name: 'summernote',
                                files: [
                                    'bower_components/summernote/summernote.css',
                                    'bower_components/summernote/summernote-bs3.css',
                                    'bower_components/summernote/summernote.min.js',
                                    'bower_components/summernote/angular-summernote.min.js'
                                ]
                            },
                            {
                                serie: true,
                                name: 'datatables',
                                files: ['bower_components/dataTables/angular-datatables.min.js']
                            },
                            {
                                serie: true,
                                name: 'datatables.scroller',
                                files: [
                                    'bower_components/dataTables/plugins/scroller/angular-datatables.scroller.min.js',
                                    'bower_components/dataTables/plugins/scroller/dataTables.scroller.js',
                                    'bower_components/dataTables/plugins/scroller/dataTables.scroller.css'
                                ]
                            },
                            {
                                serie: true,
                                name: 'datatables.select',
                                files: ['bower_components/dataTables/plugins/select/angular-datatables.select.min.js',
                                    'bower_components/dataTables/plugins/select/dataTables.select.js',
                                    'bower_components/dataTables/plugins/select/select.dataTables.css'
                                ]
                            },
                            {
                                name: 'ngImgCrop',
                                files: [
                                    'bower_components/ngImgCrop/ng-img-crop.js',
                                    'bower_components/ngImgCrop/ng-img-crop.css'
                                ]
                            },
                            {
                                files: ['bower_components/sweetalert/sweetalert.min.js', 'bower_components/sweetalert/sweetalert.css']
                            },
                            {
                                name: 'oitozero.ngSweetAlert',
                                files: ['bower_components/sweetalert/angular-sweetalert.min.js']
                            }
                        ]);
                    }
                }
            })
            .state('principal.articulos', {
                url: "/articulos",
                data: {pageTitle: 'Administrador de Articulos'},
                templateUrl: "assets/views/articulos/articulos.html",
                resolve: {
                    loadPlugin: function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            {
                                serie: true,
                                files: [
                                    'bower_components/dataTables/datatables.min.js',
                                    'bower_components/dataTables/datatables.min.css'
                                ]
                            },
                            {
                                files: [
                                    'bower_components/summernote/summernote.css',
                                    'bower_components/summernote/summernote-bs3.css',
                                    'bower_components/summernote/summernote.min.js'
                                ]
                            },
                            {
                                name: 'summernote',
                                files: [
                                    'bower_components/summernote/summernote.css',
                                    'bower_components/summernote/summernote-bs3.css',
                                    'bower_components/summernote/summernote.min.js',
                                    'bower_components/summernote/angular-summernote.min.js'
                                ]
                            },
                            {
                                serie: true,
                                name: 'datatables',
                                files: ['bower_components/dataTables/angular-datatables.min.js']
                            },
                            {
                                serie: true,
                                name: 'datatables.scroller',
                                files: [
                                    'bower_components/dataTables/plugins/scroller/angular-datatables.scroller.min.js',
                                    'bower_components/dataTables/plugins/scroller/dataTables.scroller.js',
                                    'bower_components/dataTables/plugins/scroller/dataTables.scroller.css'
                                ]
                            },
                            {
                                serie: true,
                                name: 'datatables.select',
                                files: ['bower_components/dataTables/plugins/select/angular-datatables.select.min.js',
                                    'bower_components/dataTables/plugins/select/dataTables.select.js',
                                    'bower_components/dataTables/plugins/select/select.dataTables.css'
                                ]
                            },
                            {
                                name: 'ngImgCrop',
                                files: [
                                    'bower_components/ngImgCrop/ng-img-crop.js',
                                    'bower_components/ngImgCrop/ng-img-crop.css'
                                ]
                            },
                            {
                                files: ['bower_components/sweetalert/sweetalert.min.js', 'bower_components/sweetalert/sweetalert.css']
                            },
                            {
                                name: 'oitozero.ngSweetAlert',
                                files: ['bower_components/sweetalert/angular-sweetalert.min.js']
                            }
                        ]);
                    }
                }
            });
}

angular
        .module('easyapp')
        .config(config)
        .run(function ($rootScope, $state) {
            $rootScope.$state = $state;
        });