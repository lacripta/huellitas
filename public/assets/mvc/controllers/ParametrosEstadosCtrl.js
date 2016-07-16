
function ParametrosEstadosCtrl($scope, $uibModal, $http, DTOptionsBuilder, DTColumnBuilder, SweetAlert) {
    var vm = this;

    vm.dtOptions = DTOptionsBuilder.newOptions()
            .withDOM('lfrti')
            .withDisplayLength(25)
            .withLanguageSource('assets/js/dtSpanish.json')
            .withOption('ajax', {
                // Either you specify the AjaxDataProp here
                //dataSrc: 'data',
                url: '/easyapp/refugio/parametros/estados/listar',
                type: 'POST',
                data: {cosa: ''}
            })
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
        DTColumnBuilder.newColumn('id').withTitle('ID').notVisible()
    ];
    vm.editarSeleccionado = editarSeleccionado;
    vm.nuevoArticulo = nuevoArticulo;
    vm.borrarArticulo = borrarSeleccionado;
    $scope.dtEditarArtiulo = {};

    function nuevoArticulo() {
        $scope.selected = {};
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
                    $http.post('/easyapp/refugio/parametros/estados/borrar', {json: JSON.stringify($scope.selected)}).success(function (data) {
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
                templateUrl: "assets/views/refugio/parametros/estados_editar.html",
                controller: EstadosAnimalModalController,
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
function EstadosAnimalModalController($scope, $uibModalInstance, $http, SweetAlert) {
    $scope.ok = function () {
        $http.post('/easyapp/refugio/parametros/estados/agregar', {json: JSON.stringify($scope.selected)}).success(function (data) {
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
angular
        .module('easyapp')
        .controller('ParametrosEstadosCtrl', ParametrosEstadosCtrl);