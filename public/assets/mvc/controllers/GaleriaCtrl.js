
function GaleriaCtrl($scope, $uibModal, $http, DTOptionsBuilder, DTColumnBuilder, SweetAlert) {
    var vm = this;

    vm.dtOptions = DTOptionsBuilder.newOptions()
            .withDOM('lfrti')
            .withDisplayLength(25)
            .withLanguageSource('assets/js/dtSpanish.json')
            .withOption('ajax', {
                // Either you specify the AjaxDataProp here
                //dataSrc: 'data',
                url: '/easyapp/galeria/listar',
                type: 'POST',
                data: {cosa: ''}
            })
            .withOption('stateSave', true)
            .withPaginationType('full_numbers')
            .withScroller()
            .withOption('deferRender', true)
            // Do not forget to add the scorllY option!!!
            .withOption('scrollY', 350)
            .withSelect({
                style: 'os',
                selector: 'td:first-child'
            });

    vm.dtColumns = [
        DTColumnBuilder.newColumn(null).withTitle('')
                .notSortable()
                .withClass('select-checkbox')
                // Need to define the mRender function, otherwise we get a [Object Object]
                .renderWith(function () {
                    return '';
                }),
        DTColumnBuilder.newColumn('id').withTitle('ID').notVisible(),
        DTColumnBuilder.newColumn('descripcion').withTitle('Descripcion').notVisible(),
        DTColumnBuilder.newColumn('nombre').withTitle('Nombre').notVisible(),
        DTColumnBuilder.newColumn('titulo').withTitle('Titulo'),
        DTColumnBuilder.newColumn('fecha').withTitle('Fecha'),
        DTColumnBuilder.newColumn('estado').withTitle('Estado').renderWith(function (data) {
            switch (data) {
                case '0':
                    return 'SIN PUBLICAR';
                case '1':
                    return 'PUBLICADO';
                default:
                    return 'DESCONOCIDO';
            }
        })
    ];
    vm.reloadData = reloadData;
    vm.editarSeleccionado = editarSeleccionado;
    vm.nuevoArticulo = nuevoArticulo;
    vm.borrarArticulo = borrarSeleccionado;
    vm.publicarArticulo = publicarSeleccionado;
    $scope.dtEditarArtiulo = {};

    function reloadData() {
        var resetPaging = false;
        vm.dtInstance.reloadData(callback, resetPaging);
    }

    function callback(json) {
        console.log(json);
    }

    function nuevoArticulo() {
        $scope.selected = {};
        $scope.selected.accion = 'nuevo';
        $scope.selected.estado = 0;
        $scope.selected.destacado = 0;
        $scope.selected.autor = '.';
        var modalInstance = $uibModal.open({
            templateUrl: "assets/views/galeria/editar.html",
            controller: GaleriaModalController,
            scope: $scope,
            size: 'lg',
            windowClass: "animated fadeIn"
        });
    }

    function publicarSeleccionado() {
        if ($scope.selected = $scope.dtEditarArtiulo.DataTable.row('.selected').data()) {
            SweetAlert.swal({
                title: "Cambiar el estado de Publicación de esta Articulo?",
                text: "Titulo: " + $scope.selected.titulo,
                type: "warning",
                showCancelButton: true,
                confirmButtonText: "Aceptar",
                cancelButtonText: "Cancelar",
                closeOnConfirm: false,
                closeOnCancel: false
            }, function (isConfirm) {
                if (isConfirm) {
                    $http.post('/easyapp/galeria/publicar/' + $scope.selected.id).success(function (data) {
                        SweetAlert.swal(data.mensaje, data.estado, data.codigo === "1" ? "success" : "error");
                        $scope.dtEditarArtiulo.reloadData();
                    });
                } else {
                    SweetAlert.swal("Operación Cancelada", "La tarea ha sido cancelada por el usuario", "error");
                }
            });
        } else {
            SweetAlert.swal({
                title: "No puede Realizar la accion Solicitada",
                text: "Debe marcar uno de los elementos de la tabla como seleccionado",
                type: "warning",
                showCancelButton: false,
                confirmButtonText: "Aceptar",
                closeOnConfirm: true,
                closeOnCancel: true
            });
        }
    }

    function borrarSeleccionado() {
        if ($scope.selected = $scope.dtEditarArtiulo.DataTable.row('.selected').data()) {
            SweetAlert.swal({
                title: "Borra el articulo Seleccionado?",
                text: "Titulo: " + $scope.selected.titulo,
                type: "warning",
                showCancelButton: true,
                confirmButtonText: "Aceptar",
                cancelButtonText: "Cancelar",
                closeOnConfirm: false,
                closeOnCancel: false
            }, function (isConfirm) {
                if (isConfirm) {
                    $http.post('/easyapp/galeria/borrar', {json: JSON.stringify($scope.selected)}).success(function (data) {
                        SweetAlert.swal(data.mensaje, data.estado, data.codigo === "1" ? "success" : "error");
                        $scope.dtEditarArtiulo.reloadData();
                    });
                } else {
                    SweetAlert.swal("Operación Cancelada", "La tarea ha sido cancelada por el usuario", "error");
                }
            });
        } else {
            SweetAlert.swal({
                title: "No puede Realizar la accion Solicitada",
                text: "Debe marcar uno de los elementos de la tabla como seleccionado",
                type: "warning",
                showCancelButton: false,
                confirmButtonText: "Aceptar",
                closeOnConfirm: true,
                closeOnCancel: true
            });
        }
    }

    function editarSeleccionado() {
        if ($scope.selected = $scope.dtEditarArtiulo.DataTable.row('.selected').data()) {
            //$scope.selected = $scope.dtEditarArtiulo.DataTable.row('.selected').data();
            $scope.selected.accion = 'editar';
            var modalInstance = $uibModal.open({
                templateUrl: "assets/views/galeria/editar.html",
                controller: GaleriaModalController,
                scope: $scope,
                size: 'lg',
                windowClass: "animated fadeIn"
            });
        } else {
            SweetAlert.swal({
                title: "No puede Realizar la accion Solicitada",
                text: "Debe marcar uno de los elementos de la tabla como seleccionado",
                type: "warning",
                showCancelButton: false,
                confirmButtonText: "Aceptar",
                closeOnConfirm: true,
                closeOnCancel: true
            });
        }
    }
}
function GaleriaModalController($scope, $uibModalInstance, $http, SweetAlert) {
    $scope.ok = function () {
        $http.post('/easyapp/galeria/agregar', {json: JSON.stringify($scope.selected)}).success(function (data) {
            $uibModalInstance.close();
            $scope.dtEditarArtiulo.reloadData();
            SweetAlert.swal({
                title: data.mensaje,
                text: data.estado,
                type: data.codigo === "1" ? "success" : "error",
                showCancelButton: false,
                confirmButtonText: "Aceptar",
                closeOnConfirm: true,
                closeOnCancel: true
            });
            $scope.selected = {};
        });
    };
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
}
function GaleriaImagen($scope, $http, $log, resizeService) {
    $scope.myImage = '';
    $scope.myCroppedImage = '';
    $http.post('/easyapp/galeria/imagen/' + $scope.selected.id).success(function (data) {
        $.each(data, function (k, v) {
            $scope.selected.url = v.url;
        });
    });
    var handleFileSelect = function (evt) {
        var file = evt.currentTarget.files[0];
        var reader = new FileReader();
        reader.onload = function (evt) {
            $scope.$apply(function ($scope) {
                resizeService
                        .resizeImage(evt.target.result, {
                            size: 100,
                            sizeScale: 'ko'
                                    // Other options ...
                        })
                        .then(function (image) {
                            $scope.myImage = image;
                            $scope.selected.url = image;
                        })
                        .catch($log.error);
            });
        };
        reader.readAsDataURL(file);
    };
    angular.element(document.querySelector('#imagenGaleria')).on('change', handleFileSelect);
}
angular
        .module('easyapp')
        .controller('GaleriaCtrl', GaleriaCtrl)
        .controller('GaleriaImagen', GaleriaImagen);