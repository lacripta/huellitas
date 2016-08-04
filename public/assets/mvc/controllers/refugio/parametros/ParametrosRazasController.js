
function ParametrosRazasController($scope, $uibModal, DTOptionsBuilder, DTColumnBuilder, SweetAlert, Razas, Notificar) {
    var vm = this;
    vm.especies = {};
    $scope.raza = {};
    vm.dtOptions = DTOptionsBuilder.fromFnPromise(Razas.listar())
            .withDisplayLength(25)
            .withLanguageSource('assets/js/dtSpanish.json')
            .withOption('stateSave', true)
            .withPaginationType('full_numbers')
            .withOption('deferRender', true)
            // Do not forget to add the scorllY option!!!
            .withOption('scrollY', 350)
            .withSelect({
                style: 'os',
                selector: 'td'
            });

    vm.dtColumns = [
        DTColumnBuilder.newColumn('nombre').withTitle('Raza'),
        DTColumnBuilder.newColumn('especie').withTitle('Especie'),
        DTColumnBuilder.newColumn('id').withTitle('ID').notVisible(),
        DTColumnBuilder.newColumn('id_especie').withTitle('ID Especie').notVisible()
    ];
    vm.editarSeleccionado = editarSeleccionado;
    vm.nuevoArticulo = nuevoArticulo;
    vm.borrarArticulo = borrarSeleccionado;
    $scope.dtEditarArtiulo = {};

    function nuevoArticulo() {
        $scope.selected = {};
        $scope.selected.accion = 'nuevo';
        var modalInstance = $uibModal.open({
            templateUrl: "assets/views/refugio/parametros/razas_editar.html",
            controller: RazasModalController,
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
                    Razas.borrar($scope.selected);
                    $scope.dtEditarArtiulo.changeData(Razas.listar());
                    $scope.selected = {};
                } else {
                    Notificar.cancelado();
                }
            });
        } else {
            Notificar.seleccionar()();
        }
    }

    function editarSeleccionado() {
        if ($scope.selected = $scope.dtEditarArtiulo.DataTable.row('.selected').data()) {
            //$scope.selected = $scope.dtEditarArtiulo.DataTable.row('.selected').data();
            $scope.selected.accion = 'editar';
            var modalInstance = $uibModal.open({
                templateUrl: "assets/views/refugio/parametros/razas_editar.html",
                controller: RazasModalController,
                scope: $scope,
                size: 'lg',
                windowClass: "animated fadeIn"
            });
        } else {
            Notificar.seleccionar();
        }
    }
}
function RazasModalController($scope, $uibModalInstance, Razas, Notificar) {
    $scope.ok = function (ok) {
        if (ok) {
            if ($scope.selected.accion === 'nuevo') {
                Razas.nuevo($scope.selected);
                $uibModalInstance.close();
                $scope.dtEditarArtiulo.changeData(Razas.listar());
                $scope.selected = {};
            } else if ($scope.selected.accion === 'editar') {
                Razas.editar($scope.selected);
                $uibModalInstance.close();
                $scope.dtEditarArtiulo.changeData(Razas.listar());
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
        .controller('ParametrosRazasController', ParametrosRazasController);