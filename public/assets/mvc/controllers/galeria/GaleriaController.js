
function GaleriaController($scope, $uibModal, $http, DTOptionsBuilder, DTColumnBuilder, SweetAlert, Notificar, Galeria) {
    var vm = this;

    vm.dtOptions = DTOptionsBuilder.fromFnPromise(Galeria.listar())
            .withDOM('lfrti')
            .withDisplayLength(25)
            .withLanguageSource('assets/js/dtSpanish.json')
            .withOption('stateSave', true)
            .withPaginationType('full_numbers')
            .withOption('deferRender', true)
            .withSelect({
                style: 'os',
                selector: 'td'
            });

    vm.dtColumns = [
        DTColumnBuilder.newColumn('id').withTitle('ID').notVisible(),
        DTColumnBuilder.newColumn('titulo').withTitle('Titulo'),
        DTColumnBuilder.newColumn('fecha').withTitle('Fecha'),
        DTColumnBuilder.newColumn('estado_n').withTitle('Estado')
    ];
    vm.editarSeleccionado = editarSeleccion;
    vm.nuevoArticulo = nuevoArticulo;
    vm.borrarArticulo = borrarSeleccionado;
    $scope.dtEditarArtiulo = {};

    function nuevoArticulo() {
        $scope.selected = {};
        $scope.selected.accion = 'nuevo';
        $scope.selected.autor = '.';
        var modalInstance = $uibModal.open({
            templateUrl: "assets/views/galeria/editar.html",
            controller: GaleriaModalController,
            scope: $scope,
            size: 'lg',
            windowClass: "animated fadeIn"
        });
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
                    Galeria.borrar($scope.selected);
                    $scope.dtEditarArtiulo.changeData(Galeria.listar());
                    $scope.selected = {};
                } else {
                    Notificar.cancelado();
                }
            });
        } else {
            Notificar.seleccionar();
        }
    }

    function editarSeleccion() {
        if ($scope.selected = $scope.dtEditarArtiulo.DataTable.row('.selected').data()) {
            $scope.selected.accion = 'editar';
            Galeria.imagen($scope.selected.id).then(function (data) {
                $scope.selected.url = data.url;
            }, function (error) {
                Notificar.error(error);
            });
            var modalInstance = $uibModal.open({
                templateUrl: "assets/views/galeria/editar.html",
                controller: GaleriaModalController,
                scope: $scope,
                size: 'lg',
                windowClass: "animated fadeIn"
            });
        } else {
            Notificar.seleccionar();
        }
    }
}
function GaleriaModalController($scope, $uibModalInstance, Notificar, Galeria) {
    $scope.ok = function (ok) {
        if (ok) {
            if ($scope.selected.accion === 'nuevo') {
                Galeria.nuevo($scope.selected);
                $uibModalInstance.close();
                $scope.dtEditarArtiulo.changeData(Galeria.listar());
                $scope.selected = {};
            } else if ($scope.selected.accion === 'editar') {
                Galeria.editar($scope.selected);
                $uibModalInstance.close();
                $scope.dtEditarArtiulo.changeData(Galeria.listar());
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
        .controller('GaleriaController', GaleriaController);