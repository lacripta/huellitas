
function AdopcionesController($scope, $uibModal, $http, DTOptionsBuilder, DTColumnBuilder, SweetAlert, Notificar, Adopciones) {
    var vm = this;
    $scope.animal = {};
    $scope.estadoAnimal = {};
    $scope.personas = {};
    $scope.estados = {};
    $scope.estadosAdopcion = {};
    $scope.animales = {};

    vm.dtOptions = DTOptionsBuilder.fromFnPromise(Adopciones.listar())
            .withDisplayLength(25)
            .withLanguageSource('assets/js/dtSpanish.json')
            .withOption('stateSave', true)
            .withOption('deferRender', true)
            .withPaginationType('full_numbers')
            .withSelect({
                style: 'os',
                selector: 'td'
            });

    vm.dtColumns = [
        DTColumnBuilder.newColumn('adopto').withTitle('Adopto'),
        DTColumnBuilder.newColumn('especie_animal').withTitle('Especie'),
        DTColumnBuilder.newColumn('raza_animal').withTitle('Raza'),
        DTColumnBuilder.newColumn('nombre_animal').withTitle('Nombre'),
        DTColumnBuilder.newColumn('estado_animal').withTitle('Estado'),
        DTColumnBuilder.newColumn('fecha').withTitle('Fecha'),
        DTColumnBuilder.newColumn('estado_adopcion').withTitle('Progreso')
    ];
    vm.editarSeleccionado = editarSeleccionado;
    vm.nuevoArticulo = nuevoArticulo;
    vm.borrarArticulo = borrarSeleccionado;
    $scope.dtInstance = {};


    function nuevoArticulo() {
        $scope.selected = {};
        $scope.selected.accion = 'nuevo';
        var modalInstance = $uibModal.open({
            templateUrl: "assets/views/refugio/adopciones/adopciones_editar.html",
            controller: AdopcionesModalController,
            scope: $scope,
            size: 'lg',
            windowClass: "animated fadeIn"
        });
    }

    function borrarSeleccionado() {
        if ($scope.selected = $scope.dtInstance.DataTable.row('.selected').data()) {
            SweetAlert.swal({
                title: "Borrar esta adopción?",
                text: "- " + $scope.selected.adopto + ", Adopto: " + $scope.selected.nombre_animal,
                type: "warning",
                showCancelButton: true,
                confirmButtonText: "Aceptar",
                cancelButtonText: "Cancelar",
                closeOnConfirm: false,
                closeOnCancel: false
            }, function (isConfirm) {
                if (isConfirm) {
                    Adopciones.borrar($scope.selected);
                    $scope.dtInstance.changeData(Adopciones.listar());
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
        if ($scope.selected = $scope.dtInstance.DataTable.row('.selected').data()) {
            $scope.selected.accion = 'editar';
            var modalInstance = $uibModal.open({
                templateUrl: "assets/views/refugio/adopciones/adopciones_editar.html",
                controller: AdopcionesModalController,
                scope: $scope,
                size: 'lg',
                windowClass: "animated fadeIn"
            });
        } else {
            Notificar.seleccionar();
        }
    }
}
function AdopcionesModalController($scope, $uibModalInstance, Adopciones, Notificar) {
    $scope.ok = function (ok) {
        if (ok) {
            if ($scope.selected.accion === 'nuevo') {
                Adopciones.nuevo($scope.selected);
                $scope.dtInstance.changeData(Adopciones.listar());
                $uibModalInstance.close();
                $scope.selected = {};
            } else if ($scope.selected.accion === 'editar') {
                Adopciones.editar($scope.selected);
                $scope.dtInstance.changeData(Adopciones.listar());
                $uibModalInstance.close();
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
        .controller('AdopcionesController', AdopcionesController);