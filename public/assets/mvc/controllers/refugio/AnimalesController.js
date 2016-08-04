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
                selector: 'td'
            });

    vm.dtColumns = [
        DTColumnBuilder.newColumn('nombre').withTitle('Nombre'),
        DTColumnBuilder.newColumn('edad').withTitle('Edad'),
        DTColumnBuilder.newColumn('edad_tipo').withTitle('Edad Tipo'),
        DTColumnBuilder.newColumn('fecha_ingreso').withTitle('Ingreso'),
        DTColumnBuilder.newColumn('desrescata').withTitle('Rescató'),
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
function AnimalModalController($scope, $uibModalInstance, Animales, AnimalImagen, SweetAlert, Notificar) {
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
    $scope.borrar = function (selected) {
        SweetAlert.swal({
            title: "Borra esta Imagen?",
            text: "Titulo: " + selected.nombre,
            type: "warning",
            showCancelButton: true,
            confirmButtonText: "Aceptar",
            cancelButtonText: "Cancelar",
            closeOnConfirm: false,
            closeOnCancel: false
        }, function (isConfirm) {
            if (isConfirm) {
                $scope.selected.imagenes.splice($scope.selected.imagenes.indexOf(selected), 1);
                AnimalImagen.borrar(selected);
            } else {
                Notificar.cancelado();
            }
        });
    };
    $scope.cancel = function () {
        $uibModalInstance.dismiss('cancel');
    };
}
angular
        .module('easyapp')
        .controller('AnimalesController', AnimalesController);