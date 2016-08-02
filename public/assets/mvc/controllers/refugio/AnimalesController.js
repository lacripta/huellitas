function AnimalesController($scope, $uibModal, DTOptionsBuilder, DTColumnBuilder, Notificar, SweetAlert, Animales) {
    var vm = this;
    $scope.animal = {};
    vm.dtOptions = DTOptionsBuilder.fromFnPromise(Animales.listar())
            .withDisplayLength(25)
            .withLanguageSource('assets/js/dtSpanish.json')
            .withOption('stateSave', true)
            .withPaginationType('full_numbers')
            .withOption('deferRender', true)
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
        DTColumnBuilder.newColumn('especie').withTitle('especie').notVisible(),
        DTColumnBuilder.newColumn('raza').withTitle('raza').notVisible(),
        DTColumnBuilder.newColumn('color').withTitle('color').notVisible(),
        DTColumnBuilder.newColumn('estado').withTitle('estado').notVisible(),
        DTColumnBuilder.newColumn('rescata').withTitle('rescata').notVisible(),
        DTColumnBuilder.newColumn('nombre').withTitle('Nombre'),
        DTColumnBuilder.newColumn('edad').withTitle('Edad'),
        DTColumnBuilder.newColumn('edad_tipo').withTitle('Edad Tipo'),
        DTColumnBuilder.newColumn('fecha_ingreso').withTitle('Ingreso'),
        DTColumnBuilder.newColumn('desrescata').withTitle('Rescató'),
        DTColumnBuilder.newColumn('fecha_salida').withTitle('Salida').notVisible(),
        DTColumnBuilder.newColumn('desespecie').withTitle('Especie'),
        DTColumnBuilder.newColumn('desraza').withTitle('Raza'),
        DTColumnBuilder.newColumn('descolor').withTitle('Color'),
        DTColumnBuilder.newColumn('sexo').withTitle('Sexo'),
        DTColumnBuilder.newColumn('desestado').withTitle('Estado')
    ];
    vm.editarSeleccionado = editarSeleccionado;
    vm.nuevoArticulo = nuevoArticulo;
    vm.borrarArticulo = borrarSeleccionado;
    $scope.dtEditarArtiulo = {};

    function nuevoArticulo() {
        $scope.selected = {};
        $scope.selected.accion = 'nuevo';
        var modalInstance = $uibModal.open({
            templateUrl: "assets/views/refugio/animales/animales_editar.html",
            controller: AnimalModalController,
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
                    Animales.borrar($scope.selected);
                    $scope.dtEditarArtiulo.changeData(Animales.listar());
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
                templateUrl: "assets/views/refugio/animales/animales_editar.html",
                controller: AnimalModalController,
                scope: $scope,
                size: 'lg',
                windowClass: "animated fadeIn"
            });
        } else {
            Notificar.seleccionar();
        }
    }
}
function AnimalModalController($scope, $uibModalInstance, Animales, Notificar) {
    $scope.ok = function (ok) {
        if (ok) {
            if ($scope.selected.accion === 'nuevo') {
                Animales.nuevo($scope.selected);
                $uibModalInstance.close();
                $scope.dtEditarArtiulo.changeData(Animales.listar());
                $scope.selected = {};
            } else if ($scope.selected.accion === 'editar') {
                Animales.editar($scope.selected);
                $uibModalInstance.close();
                $scope.dtEditarArtiulo.changeData(Animales.listar());
                $scope.selected = {};
            }
        } else {
            Notificar.form();
        }
    };
    $scope.agregar = function () {

    };
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
}
angular
        .module('easyapp')
        .controller('AnimalesController', AnimalesController);