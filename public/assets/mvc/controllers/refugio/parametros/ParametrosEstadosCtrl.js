
function ParametrosEstadosController($scope, $uibModal, $http, DTOptionsBuilder, DTColumnBuilder, SweetAlert, EstadosAnimales, Notificar) {
    var vm = this;

    vm.dtOptions = DTOptionsBuilder.fromFnPromise(EstadosAnimales.listar())
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
        DTColumnBuilder.newColumn('adoptable').withTitle('Adoptable'),
        DTColumnBuilder.newColumn('id').withTitle('ID').notVisible()
    ];
    vm.editarSeleccionado = editarSeleccionado;
    vm.nuevoArticulo = nuevoArticulo;
    vm.borrarArticulo = borrarSeleccionado;
    $scope.dtEditarArtiulo = {};

    function nuevoArticulo() {
        $scope.selected = {};
        $scope.selected.accion = 'nuevo';
        var modalInstance = $uibModal.open({
            templateUrl: "assets/views/refugio/parametros/estados_editar.html",
            controller: EstadosAnimalModalController,
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
                    EstadosAnimales.borrar($scope.selected);
                    $scope.dtEditarArtiulo.changeData(EstadosAnimales.listar());
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
            //$scope.selected = $scope.dtEditarArtiulo.DataTable.row('.selected').data();
            $scope.selected.accion = 'editar';
            var modalInstance = $uibModal.open({
                templateUrl: "assets/views/refugio/parametros/estados_editar.html",
                controller: EstadosAnimalModalController,
                scope: $scope,
                size: 'lg',
                windowClass: "animated fadeIn"
            });
        } else {
            Notificar.seleccionar();
        }
    }
}
function EstadosAnimalModalController($scope, $uibModalInstance, EstadosAnimales, Notificar) {
    $scope.ok = function (ok) {
        if (ok) {
            if ($scope.selected.accion === 'nuevo') {
                EstadosAnimales.nuevo($scope.selected);
                $uibModalInstance.close();
                $scope.dtEditarArtiulo.changeData(EstadosAnimales.listar());
                $scope.selected = {};
            } else if ($scope.selected.accion === 'editar') {
                EstadosAnimales.editar($scope.selected);
                $uibModalInstance.close();
                $scope.dtEditarArtiulo.changeData(EstadosAnimales.listar());
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
        .controller('ParametrosEstadosController', ParametrosEstadosController);