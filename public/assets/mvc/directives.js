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
function selectColores(Colores) {
    return {
        restrict: 'E',
        templateUrl: '/easyapp/assets/templates/select-animales-colores.html',
        scope: {
            color: '=',
            titulo: '@'
        },
        controller: function ($scope) {
            Colores.listar().then(function (data) {
                $scope.colores = data;
            });
        }
    };
}
function selectEstadoAdopcion(EstadoAdopcion, Notificar) {
    return {
        restrict: 'E',
        templateUrl: '/easyapp/assets/templates/select-adopciones-estado.html',
        scope: {
            estado: '=',
            titulo: '@'
        },
        controller: function ($scope) {
            EstadoAdopcion.listar().then(function (data) {
                $scope.estados = data;
            }, function () {
                Notificar.error();
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
                $scope.animales = data;
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
function selectDepartamento(Departamento, Notificar) {
    return {
        restrict: 'E',
        templateUrl: '/easyapp/assets/templates/select-departamento.html',
        scope: {
            departamento: '=',
            titulo: '@'
        },
        controller: function ($scope) {
            Departamento.listar().then(function (data) {
                $scope.departamentos = data;
            }, function () {
                Notificar.error();
            });
        }
    };
}
function selectMunicipio(Municipio, Notificar) {
    return {
        restrict: 'E',
        templateUrl: '/easyapp/assets/templates/select-municipio.html',
        scope: {
            municipio: '=',
            titulo: '@'
        },
        controller: function ($scope) {
            Municipio.listar().then(function (data) {
                $scope.municipios = data;
            }, function () {
                Notificar.error();
            });
        }
    };
}
function selectPoblacion(Poblacion, Notificar) {
    return {
        restrict: 'E',
        templateUrl: '/easyapp/assets/templates/select-poblacion.html',
        scope: {
            poblacion: '=',
            titulo: '@'
        },
        controller: function ($scope) {
            Poblacion.listar().then(function (data) {
                $scope.poblaciones = data;
            }, function () {
                Notificar.error();
            });
        }
    };
}
function selectArea(AreaPoblacion, Notificar) {
    return {
        restrict: 'E',
        templateUrl: '/easyapp/assets/templates/select-area-poblacion.html',
        scope: {
            area: '=',
            titulo: '@'
        },
        controller: function ($http, $scope) {
            AreaPoblacion.listar().then(function (data) {
                $scope.areas = data;
            }, function () {
                Notificar.error();
            });
        }
    };
}
function selectRegion(Departamento, Municipio, Poblacion, Notificar) {
    return {
        restrict: 'E',
        templateUrl: '/easyapp/assets/templates/select-region.html',
        scope: {
            departamento: '=',
            municipio: '=',
            poblacion: '=',
            area: '=',
            titulo: '@'
        },
        controller: function ($scope) {
            Departamento.listar().then(function (data) {
                $scope.departamentos = data;
            }, function () {
                Notificar.error();
            });
            $scope.$watch('departamento', function (nuevo) {
                if (nuevo) {
                    Municipio.buscar(nuevo).then(function (data) {
                        $scope.municipios = data;
                    }, function () {
                        Notificar.error();
                    });
                }
            });
            $scope.$watch('municipio', function (nuevo) {
                if (nuevo) {
                    Poblacion.buscar(nuevo).then(function (data) {
                        $scope.poblaciones = data;
                    }, function () {
                        Notificar.error();
                    });
                }
            });
        }
    };
}
function selectEstadoUsuario(EstadoUsuario, Notificar) {
    return {
        restrict: 'E',
        templateUrl: '/easyapp/assets/templates/select-estado-usuario.html',
        scope: {
            estado: '=',
            titulo: '@'
        },
        controller: function ($scope) {
            EstadoUsuario.listar().then(function (data) {
                $scope.estados = data;
            }, function () {
                Notificar.error();
            });
        }
    };
}
function selectTipoUsuario(TipoUsuario, Notificar) {
    return {
        restrict: 'E',
        templateUrl: '/easyapp/assets/templates/select-tipo-usuario.html',
        scope: {
            tipo: '=',
            titulo: '@'
        },
        controller: function ($scope) {
            TipoUsuario.listar().then(function (data) {
                $scope.tipos = data;
            }, function () {
                Notificar.error();
            });
        }
    };
}
function selectEspecie(Especies) {
    return {
        restrict: 'E',
        templateUrl: '/easyapp/assets/templates/select-animales-especies.html',
        scope: {
            especie: '='
        },
        controller: function ($http, $scope) {
            Especies.listar().then(function (data) {
                $scope.especies = data;
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
            Especies.listar().then(function (data) {
                $scope.especies = data;
            });
            $scope.$watch('especie', function (especie) {
                if (especie) {
                    Razas.buscar(especie).then(function (data) {
                        $scope.razas = data;
                    });
                }
            });
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
            $scope.$watch('valor', function (nuevo) {
                if (nuevo) {
                    $scope.valor = nuevo.toLocaleUpperCase();
                }
            });
        }
    };
}
function inputDireccion() {
    return {
        restrict: 'E',
        templateUrl: '/easyapp/assets/templates/input-text.html',
        scope: {
            valor: '=',
            readonly: '=',
            titulo: '@'
        }, controller: function ($scope) {
            $scope.$watch('valor', function (nuevo) {
                if (nuevo) {
                    $scope.valor = nuevo.toLocaleUpperCase();
                }
            });
        }
    };
}
function inputNumber() {
    return {
        restrict: 'E',
        templateUrl: '/easyapp/assets/templates/input-number.html',
        link: function ($scope, $element, $attrs) {
            $scope.min_e = $attrs.min ? true : false;
        },
        scope: {
            valor: '=',
            readonly: '=',
            titulo: '@'
        }, controller: function ($scope) {
            $scope.salida = {};
            $scope.$watch('valor', function (nuevo) {
                if (nuevo) {
                    $scope.valor = parseInt(nuevo);
                }
            });
        }
    };
}
function imageUploader(AnimalImagen) {
    return {
        restrict: 'E',
        templateUrl: '/easyapp/assets/templates/image-uploader.html',
        scope: {
            valor: '=',
            imagenes: '=',
            readonly: '=',
            titulo: '@'
        }, controller: function ($scope, FileUploader, Notificar) {
            var uploader = $scope.uploader = new FileUploader({
                url: '/easyapp/refugio/animales/imagen/agregar/' + $scope.valor
            });
            uploader.filters.push({
                name: 'imageFilter',
                fn: function (item /*{File|FileLikeObject}*/, options) {
                    var type = '|' + item.type.slice(item.type.lastIndexOf('/') + 1) + '|';
                    return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
                }
            });
            uploader.onSuccessItem = function (fileItem, response, status, headers) {
                fileItem.isSuccess = response.codigo == '1' ? true : false;
                fileItem.isError = response.codigo == '0' ? true : false;
                if (fileItem.isSuccess) {
                    AnimalImagen.buscar($scope.valor).then(function (data) {
                        $scope.imagenes = data;
                    }, function () {
                        Notificar.error();
                    });
                }
                if (response.codigo != '1') {
                    Notificar.mensaje(fileItem.file.name + ": " + response.estado, response.codigo);
                }
            };
        }
    };
}
function ngThumb($window) {
    var helper = {
        support: !!($window.FileReader && $window.CanvasRenderingContext2D),
        isFile: function (item) {
            return angular.isObject(item) && item instanceof $window.File;
        },
        isImage: function (file) {
            var type = '|' + file.type.slice(file.type.lastIndexOf('/') + 1) + '|';
            return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
        }
    };

    return {
        restrict: 'A',
        template: '<canvas/>',
        link: function (scope, element, attributes) {
            if (!helper.support)
                return;
            var params = scope.$eval(attributes.ngThumb);

            if (!helper.isFile(params.file))
                return;
            if (!helper.isImage(params.file))
                return;

            var canvas = element.find('canvas');
            var reader = new FileReader();

            reader.onload = onLoadFile;
            reader.readAsDataURL(params.file);

            function onLoadFile(event) {
                var img = new Image();
                img.onload = onLoadImage;
                img.src = event.target.result;
            }

            function onLoadImage() {
                var width = params.width || this.width / this.height * params.height;
                var height = params.height || this.height / this.width * params.width;
                canvas.attr({width: width, height: height});
                canvas[0].getContext('2d').drawImage(this, 0, 0, width, height);
            }
        }
    };
}
function inputMail() {
    return {
        restrict: 'E',
        templateUrl: '/easyapp/assets/templates/input-mail.html',
        scope: {
            valor: '=',
            readonly: '=',
            titulo: '@'
        }, controller: function ($scope) {
            $scope.$watch('valor', function (nuevo) {
                if (nuevo)
                    if ($scope.texto.entrada.$valid)
                        $scope.valor = nuevo.toLocaleUpperCase();
            });
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
                        //moment.locale('es');
                        //var date = moment($scope.valor).format('L');
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
        .directive('selectDepartamento', selectDepartamento)
        .directive('selectMunicipio', selectMunicipio)
        .directive('selectPoblacion', selectPoblacion)
        .directive('selectArea', selectArea)
        .directive('selectRegion', selectRegion)
        .directive('selectTipoUsuario', selectTipoUsuario)
        .directive('selectEstadoUsuario', selectEstadoUsuario)
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
        .directive('inputMail', inputMail)
        .directive('inputDireccion', inputDireccion)
        .directive('inputNumber', inputNumber)
        .directive('imageUploader', imageUploader)
        .directive('ngThumb', ngThumb)
        .directive('fitHeight', fitHeight);