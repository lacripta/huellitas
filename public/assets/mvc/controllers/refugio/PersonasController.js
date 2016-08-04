function PersonasController($scope, $uibModal, DTOptionsBuilder, DTColumnBuilder, Notificar, SweetAlert, Personas) {
    var vm = this;
    vm.dtOptions = DTOptionsBuilder.fromFnPromise(Personas.listar())
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
        DTColumnBuilder.newColumn('cedula').withTitle('Cedula'),
        DTColumnBuilder.newColumn('nombre').withTitle('Nombre'),
        DTColumnBuilder.newColumn('apellido').withTitle('Apellido'),
        DTColumnBuilder.newColumn('direccion').withTitle('Dirección'),
        DTColumnBuilder.newColumn('email').withTitle('E-Mail'),
        DTColumnBuilder.newColumn('celular').withTitle('Celular'),
        DTColumnBuilder.newColumn('telefono').withTitle('Telefono'),
        DTColumnBuilder.newColumn('tipo').withTitle('Tipo')
    ];
    vm.editarSeleccionado = editarSeleccionado;
    vm.nuevoArticulo = nuevoArticulo;
    vm.borrarArticulo = borrarSeleccionado;
    $scope.dtInstance = {};

    function nuevoArticulo() {
        $scope.selected = {};
        $scope.selected.accion = 'nuevo';
        var modalInstance = $uibModal.open({
            templateUrl: "assets/views/refugio/personas/personas_editar.html",
            controller: PersonasModalController,
            scope: $scope,
            size: 'lg',
            windowClass: "animated fadeIn"
        });
    }

    function borrarSeleccionado() {
        if ($scope.selected = $scope.dtInstance.DataTable.row('.selected').data()) {
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
                    Personas.borrar($scope.selected);
                    $scope.dtInstance.changeData(Personas.listar());
                } else {
                    Notificar.cancelado();
                }
            });
        } else {
            Notificar.seleccionar();
        }
    }

    function editarSeleccionado() {
        if ($scope.selected = $scope.dtInstance.DataTable.row('.selected').data()) {
            $scope.selected.accion = 'editar';
            var modalInstance = $uibModal.open({
                templateUrl: "assets/views/refugio/personas/personas_editar.html",
                controller: PersonasModalController,
                scope: $scope,
                size: 'lg',
                windowClass: "animated fadeIn"
            });
        } else {
            Notificar.seleccionar();
        }
    }
}
function PersonasModalController($scope, $uibModalInstance, Personas, Notificar) {
    $scope.ok = function (ok) {
        if (ok) {
            if ($scope.selected.accion === 'nuevo') {
                Personas.nuevo($scope.selected);
                $uibModalInstance.close();
                $scope.dtInstance.changeData(Personas.listar());
                $scope.selected = {};
            } else if ($scope.selected.accion === 'editar') {
                Personas.editar($scope.selected);
                $uibModalInstance.close();
                $scope.dtInstance.changeData(Personas.listar());
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
        .controller('PersonasController', PersonasController);