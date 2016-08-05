
function ArticulosController($scope, $uibModal, $http, DTOptionsBuilder, DTColumnBuilder, SweetAlert, Notificar, Novedades) {
    var vm = this;

    vm.dtOptions = DTOptionsBuilder.fromFnPromise(Novedades.listar())
            .withDOM('lfrti')
            .withDisplayLength(25)
            .withLanguageSource('assets/js/dtSpanish.json')
            .withOption('stateSave', true)
            .withPaginationType('full_numbers')
            .withOption('deferRender', true)
            .withOption('scrollY', 350)
            .withSelect({
                style: 'os',
                selector: 'td'
            });

    vm.dtColumns = [
        DTColumnBuilder.newColumn('titulo').withTitle('Titulo'),
        DTColumnBuilder.newColumn('autor_n').withTitle('Autor'),
        DTColumnBuilder.newColumn('estado_n').withTitle('Estado'),
        DTColumnBuilder.newColumn('fecha').withTitle('Publicado'),
        DTColumnBuilder.newColumn('resumen').withTitle('Resumen')
    ];

    vm.editarSeleccionado = editarSeleccionado;
    vm.nuevoArticulo = nuevoArticulo;
    vm.borrarArticulo = borrarSeleccionado;
    vm.destacarArticulo = destacarSeleccionado;
    vm.publicarArticulo = publicarSeleccionado;
    $scope.dtEditarArtiulo = {};

    function nuevoArticulo() {
        $scope.selected = {};
        $scope.selected.accion = 'nuevo';
        $scope.selected.estado = 0;
        $scope.selected.destacado = 0;
        $scope.selected.autor = '.';
        var modalInstance = $uibModal.open({
            templateUrl: "assets/views/articulos/editar.html",
            controller: ArticuloModalController,
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
                    Novedades.publicar($scope.selected);
                    $scope.dtEditarArtiulo.changeData(Novedades.listar());
                    $scope.selected = {};
                } else {
                    Notificar.cancelado();
                }
            });
        } else {
            Notificar.seleccionar();
        }
    }

    function destacarSeleccionado() {
        if ($scope.selected = $scope.dtEditarArtiulo.DataTable.row('.selected').data()) {
            SweetAlert.swal({
                title: "Marcar este articulo como destacado?",
                text: "Titulo: " + $scope.selected.titulo,
                type: "warning",
                showCancelButton: true,
                confirmButtonText: "Aceptar",
                cancelButtonText: "Cancelar",
                closeOnConfirm: false,
                closeOnCancel: false
            }, function (isConfirm) {
                if (isConfirm) {
                    Novedades.destacar($scope.selected);
                    $scope.dtEditarArtiulo.changeData(Novedades.listar());
                    $scope.selected = {};
                } else {
                    Notificar.cancelado();
                }
            });
        } else {
            Notificar.seleccionar();
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
                    Novedades.borrar($scope.selected);
                    $scope.dtEditarArtiulo.changeData(Novedades.listar());
                    $scope.selected = {};
                } else {
                    Notificar.cancelado();
                }
            });
        } else {
            Notificar.seleccionar();
        }
    }

    function editarSeleccionado() {
        if ($scope.selected = $scope.dtEditarArtiulo.DataTable.row('.selected').data()) {
            $scope.selected.accion = 'editar';
            Novedades.imagen($scope.selected.id).then(function (data) {
                $scope.selected.imagen_url = data.imagen_url;
            }, function (error) {
                Notificar.error(error);
            });
            var modalInstance = $uibModal.open({
                templateUrl: "assets/views/articulos/editar.html",
                controller: ArticuloModalController,
                scope: $scope,
                size: 'lg',
                windowClass: "animated fadeIn"
            });
        } else {
            Notificar.seleccionar();
        }
    }
}
function ArticuloModalController($scope, $uibModalInstance, Notificar, Novedades) {
    $scope.ok = function (ok) {
        if (ok) {
            if ($scope.selected.accion === 'nuevo') {
                Novedades.nuevo($scope.selected);
                $uibModalInstance.close();
                $scope.dtEditarArtiulo.changeData(Novedades.listar());
                $scope.selected = {};
            } else if ($scope.selected.accion === 'editar') {
                Novedades.editar($scope.selected);
                $uibModalInstance.close();
                $scope.dtEditarArtiulo.changeData(Novedades.listar());
                $scope.selected = {};
            }
        } else {
            Notificar.form();
        }
    };
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
}

angular
        .module('easyapp')
        .controller('ArticulosController', ArticulosController);