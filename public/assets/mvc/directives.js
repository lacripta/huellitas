function pageTitle($rootScope, $timeout) {
    return {
        link: function (scope, element) {
            var listener = function (event, toState, toParams, fromState, fromParams) {
                // Default title - load on Dashboard 1
                var title = 'EASYAPP | Gestor de contenidos Web';
                // Create your own title pattern
                if (toState.data && toState.data.pageTitle)
                    title = 'EASYAPP | ' + toState.data.pageTitle;
                $rootScope.pageTitle = toState.data.pageTitle;
                $rootScope.pageDesc = toState.data.pageDesc;
                $timeout(function () {
                    element.text(title);
                });
            };
            $rootScope.$on('$stateChangeStart', listener);
        }
    };
}
function sideNavigation($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element) {
            // Call the metsiMenu plugin and plug it to sidebar navigation
            $timeout(function () {
                element.metisMenu();

            });
        }
    };
}
function minimalizaSidebar($timeout) {
    return {
        restrict: 'A',
        template: '<a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="" ng-click="minimalize()"><i class="fa fa-bars"></i></a>',
        controller: function ($scope, $element) {
            $scope.minimalize = function () {
                $("body").toggleClass("mini-navbar");
                if (!$('body').hasClass('mini-navbar') || $('body').hasClass('body-small')) {
                    // Hide menu in order to smoothly turn on when maximize menu
                    $('#side-menu').hide();
                    // For smoothly turn on menu
                    setTimeout(
                            function () {
                                $('#side-menu').fadeIn(400);
                            }, 200);
                } else if ($('body').hasClass('fixed-sidebar')) {
                    $('#side-menu').hide();
                    setTimeout(
                            function () {
                                $('#side-menu').fadeIn(400);
                            }, 100);
                } else {
                    // Remove all inline style from jquery fadeIn function to reset menu state
                    $('#side-menu').removeAttr('style');
                }
            }
        }
    };
}
function landingScrollspy() {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            element.scrollspy({
                target: '.navbar-fixed-top',
                offset: 80
            });
        }
    };
}
function fitHeight() {
    return {
        restrict: 'A',
        link: function (scope, element) {
            element.css("height", $(window).height() + "px");
            element.css("min-height", $(window).height() + "px");
        }
    };
}
function closeOffCanvas() {
    return {
        restrict: 'A',
        template: '<a class="close-canvas-menu" ng-click="closeOffCanvas()"><i class="fa fa-times"></i></a>',
        controller: function ($scope, $element) {
            $scope.closeOffCanvas = function () {
                $("body").toggleClass("mini-navbar");
            };
        }
    };
}
function selectSexos(Sexos, Notificar) {
    return {
        restrict: 'E',
        templateUrl: '/easyapp/assets/templates/select-sexos.html',
        scope: {
            sexo: '=',
            titulo: '@'
        },
        controller: function ($scope) {
            Sexos.listar().then(function (data) {
                $scope.sexos = data;
            }, function () {
                Notificar.error();
            });
        }
    };
}
function selectPersonas(Personas, Notificar) {
    return {
        restrict: 'E',
        templateUrl: '/easyapp/assets/templates/select-personas.html',
        scope: {
            persona: '=',
            titulo: '@'
        },
        controller: function ($scope) {
            Personas.listar().then(function (data) {
                $scope.personas = data;
            }, function () {
                Notificar.error();
            });
        }
    };
}
function selectPadrinos(Personas, Notificar) {
    return {
        restrict: 'E',
        templateUrl: '/easyapp/assets/templates/select-personas.html',
        scope: {
            persona: '=',
            titulo: '@'
        },
        controller: function ($scope) {
            Personas.padrinos().then(function (data) {
                $scope.personas = data;
            }, function () {
                Notificar.error();
            });
        }
    };
}
function selectTipoEdad() {
    return {
        restrict: 'E',
        templateUrl: '/easyapp/assets/templates/select-tipo-edad.html',
        scope: {
            tipoEdad: '=',
            titulo: '@'
        },
        controller: function ($scope) {
            $scope.unidades = ['días', 'semanas', 'meses', 'años'];
        }
    };
}
function selectEstados(EstadosAnimales, Notificar) {
    return {
        restrict: 'E',
        templateUrl: '/easyapp/assets/templates/select-animales-estados.html',
        scope: {
            estado: '=',
            titulo: '@'
        },
        controller: function ($scope) {
            EstadosAnimales.listar().then(function (data) {
                $scope.estados = data;
            }, function () {
                Notificar.error();
            });
        }
    };
}
function selectColores() {
    return {
        restrict: 'E',
        templateUrl: '/easyapp/assets/templates/select-animales-colores.html',
        scope: {
            color: '=',
            titulo: '@'
        },
        controller: function ($http, $scope) {
            $http.post('/easyapp/refugio/parametros/colores/listar').then(function (data) {
                $scope.colores = data.data;
            });
        }
    };
}
function selectEstadoAdopcion() {
    return {
        restrict: 'E',
        templateUrl: '/easyapp/assets/templates/select-adopciones-estado.html',
        scope: {
            estado: '=',
            titulo: '@'
        },
        controller: function ($http, $scope) {
            $http.post('/easyapp/refugio/parametros/adopciones/estados/listar').then(function (data) {
                $scope.estados = data.data;
            });
        }
    };
}
function selectAnimales(Animales, Notificar) {
    return {
        restrict: 'E',
        templateUrl: '/easyapp/assets/templates/select-animales.html',
        scope: {
            animal: '=',
            titulo: '@'
        },
        controller: function ($scope) {
            Animales.listar().then(function (data) {
                $scope.animales = data.data;
            }, function () {
                Notificar.error();
            });
        }
    };
}
function selectAnimalesAdopcion(Animales, Notificar) {
    return {
        restrict: 'E',
        templateUrl: '/easyapp/assets/templates/select-animales.html',
        scope: {
            animal: '=',
            titulo: '@'
        },
        controller: function ($scope) {
            Animales.adoptables($scope.animal).then(function (data) {
                $scope.animales = data;
            }, function () {
                Notificar.error();
            });
        }
    };
}
function selectConfirma() {
    return {
        restrict: 'E',
        templateUrl: '/easyapp/assets/templates/select-confirma.html',
        scope: {
            accion: '=',
            titulo: '@'
        },
        controller: function ($http, $scope) {
            $scope.acciones = [{codigo: "S", descripcion: "SI"}, {codigo: "N", descripcion: "NO"}];
        }
    };
}
function selectEspecie() {
    return {
        restrict: 'E',
        templateUrl: '/easyapp/assets/templates/select-animales-especies.html',
        scope: {
            especie: '='
        },
        controller: function ($http, $scope) {
            $http.post('/easyapp/refugio/parametros/especies/listar').then(function (data) {
                $scope.especies = data.data;
            });
        }
    };
}
function selectRaza(Razas, Especies) {
    return {
        restrict: 'E',
        templateUrl: '/easyapp/assets/templates/select-animales-razas.html',
        scope: {
            especie: '=',
            raza: '='
        },
        controller: function ($scope) {
            $scope.lista = function (especie) {
                if (especie) {
                    Razas.buscar(especie).then(function (data) {
                        $scope.razas = data;
                    });
                }
            };
            Especies.listar().then(function (data) {
                $scope.especies = data;
            });
            $scope.$watch($scope.especie, $scope.lista($scope.especie));
        }
    };
}
function textEditor() {
    return {
        restrict: 'E',
        templateUrl: '/easyapp/assets/templates/text-editor.html',
        scope: {
            contenido: '=',
            titulo: '@'
        }
    };
}
function inputText() {
    return {
        restrict: 'E',
        templateUrl: '/easyapp/assets/templates/input-text.html',
        scope: {
            valor: '=',
            readonly: '=',
            titulo: '@'
        }, controller: function ($scope) {
            $scope.nombre = $scope.titulo.toLocaleString().replace(' ', '');
        }
    };
}
function inputDate() {
    return {
        restrict: 'E',
        templateUrl: '/easyapp/assets/templates/input-date.html',
        scope: {
            valor: '=',
            readonly: '=',
            titulo: '@'
        },
        controller: function ($scope) {
            $scope.$watch($scope.valor, function () {
                if (!$scope.valor) {
                    $scope.valor = new Date();
                } else {
                    if (typeof $scope.valor === "string") {
                        var dt = $scope.valor.split("-");
                        $scope.valor = new Date(dt[0], dt[1] - 1, dt[2]);
                    }
                }

            });
        }
    };
}
function inputImage(resizeService) {
    return {
        restrict: 'E',
        templateUrl: '/easyapp/assets/templates/image-upload-single.html',
        scope: {
            imagen: '=',
            titulo: '@'
        },
        controller: function ($scope) {
            var procesarImagen = function (evt) {
                var file = evt.currentTarget.files[0];
                var reader = new FileReader();
                reader.onload = function (evt) {
                    $scope.$apply(function ($scope) {
                        resizeService
                                .resizeImage(evt.target.result, {
                                    size: 100,
                                    sizeScale: 'ko'
                                })
                                .then(function (image) {
                                    $scope.imagen = image;
                                });
                    });
                };
                reader.readAsDataURL(file);
            };
            angular.element(document.querySelector('#SelectImagenDirective')).on('change', procesarImagen);
        }
    };
}

angular
        .module('easyapp')
        .directive('pageTitle', pageTitle)
        .directive('sideNavigation', sideNavigation)
        .directive('minimalizaSidebar', minimalizaSidebar)
        .directive('landingScrollspy', landingScrollspy)
        .directive('closeOffCanvas', closeOffCanvas)
        .directive('selectSexos', selectSexos)
        .directive('selectPersonas', selectPersonas)
        .directive('selectPadrinos', selectPadrinos)
        .directive('selectTipoEdad', selectTipoEdad)
        .directive('selectEstados', selectEstados)
        .directive('selectColores', selectColores)
        .directive('selectEspecie', selectEspecie)
        .directive('selectRaza', selectRaza)
        .directive('selectEstadoAdopcion', selectEstadoAdopcion)
        .directive('selectAnimalesAdopcion', selectAnimalesAdopcion)
        .directive('selectConfirma', selectConfirma)
        .directive('selectAnimales', selectAnimales)
        .directive('inputDate', inputDate)
        .directive('inputImage', inputImage)
        .directive('inputText', inputText)
        .directive('textEditor', textEditor)
        .directive('fitHeight', fitHeight);