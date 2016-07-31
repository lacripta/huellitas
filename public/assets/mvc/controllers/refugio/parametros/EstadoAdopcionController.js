
function EstadoAdopcionController($scope, $uibModal, $http, DTOptionsBuilder, DTColumnBuilder, SweetAlert, EstadoAdopcion, Notificar) {
    var vm = this;

    vm.dtOptions = DTOptionsBuilder.fromFnPromise(EstadoAdopcion.listar())
            .withDOM('lfrti')
            .withDisplayLength(25)
            .withLanguageSource('assets/js/dtSpanish.json')
            .withOption('stateSave', true)
            .withPaginationType('full_numbers')
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
                .renderWith(function () {
                    return '';
                }),
        DTColumnBuilder.newColumn('descripcion').withTitle('Descripcion'),
        DTColumnBuilder.newColumn('desfinal').withTitle('Estado al Final'),
        DTColumnBuilder.newColumn('desborrar').withTitle('Estado al Borrar')
    ];
    vm.editarSeleccionado = editarSeleccionado;
    vm.nuevoArticulo = nuevoArticulo;
    vm.borrarArticulo = borrarSeleccionado;
    $scope.dtEditarArtiulo = {};

    function nuevoArticulo() {
        $scope.selected = {};
        $scope.selected.accion = 'nuevo';
        var modalInstance = $uibModal.open({
            templateUrl: "assets/views/refugio/parametros/adopciones_estados_editar.html",
            controller: EstadoAdopcionModalController,
            scope: $scope,
            size: 'lg',
            windowClass: "animated fadeIn"
        });
    }


    function borrarSeleccionado() {
        if ($scope.selected = $scope.dtEditarArtiulo.DataTable.row('.selected').data()) {
            SweetAlert.swal({
                title: "Borra el articulo Seleccionado?",
                text: "Titulo: " + $scope.selected.nombre,
                type: "warning",
                showCancelButton: true,
                confirmButtonText: "Aceptar",
                cancelButtonText: "Cancelar",
                closeOnConfirm: false,
                closeOnCancel: false
            }, function (isConfirm) {
                if (isConfirm) {
                    EstadoAdopcion.borrar($scope.selected);
                    $scope.dtEditarArtiulo.changeData(EstadoAdopcion.listar());
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
            var modalInstance = $uibModal.open({
                templateUrl: "assets/views/refugio/parametros/adopciones_estados_editar.html",
                controller: EstadoAdopcionModalController,
                scope: $scope,
                size: 'lg',
                windowClass: "animated fadeIn"
            });
        } else {
            Notificar.seleccionar();
        }
    }
}
function EstadoAdopcionModalController($scope, $uibModalInstance, EstadoAdopcion, Notificar) {
    $scope.ok = function (ok) {
        if (ok) {
            if ($scope.selected.accion === 'nuevo') {
                EstadoAdopcion.nuevo($scope.selected);
                $scope.dtEditarArtiulo.changeData(EstadoAdopcion.listar());
                $uibModalInstance.dismiss();
                $scope.selected = {};
            } else if ($scope.selected.accion === 'editar') {
                EstadoAdopcion.editar($scope.selected);
                $scope.dtEditarArtiulo.changeData(EstadoAdopcion.listar());
                $uibModalInstance.dismiss();
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
        .controller('EstadoAdopcionController', EstadoAdopcionController);