
function ArticulosCtrl($scope, $uibModal, $http, DTOptionsBuilder, DTColumnBuilder, SweetAlert) {
    var vm = this;

    vm.dtOptions = DTOptionsBuilder.newOptions()
            .withDOM('lfrti')
            .withDisplayLength(25)
            .withLanguageSource('assets/js/dtSpanish.json')
            .withOption('ajax', {
                // Either you specify the AjaxDataProp here
                //dataSrc: 'data',
                url: '/easyapp/novedades/listar',
                type: 'POST',
                data: {cosa: ''}
            })
            .withOption('stateSave', true)
            .withPaginationType('full_numbers')
            .withScroller()
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
                // Need to define the mRender function, otherwise we get a [Object Object]
                .renderWith(function () {
                    return '';
                }),
        DTColumnBuilder.newColumn('titulo').withTitle('Titulo'),
        DTColumnBuilder.newColumn('autor_n').withTitle('Autor'),
        DTColumnBuilder.newColumn('dias').withTitle('Dias'),
        DTColumnBuilder.newColumn('estado_t').withTitle('Estado'),
        DTColumnBuilder.newColumn('fecha').withTitle('Publicado'),
        DTColumnBuilder.newColumn('resumen').withTitle('Resumen'),
        DTColumnBuilder.newColumn('contenido').withTitle('Contenido').notVisible(),
        DTColumnBuilder.newColumn('autor').withTitle('SID').notVisible(),
        DTColumnBuilder.newColumn('id').withTitle('ID').notVisible()
    ];

    vm.reloadData = reloadData;
    vm.editarSeleccionado = editarSeleccionado;
    vm.nuevoArticulo = nuevoArticulo;
    vm.borrarArticulo = borrarSeleccionado;
    vm.destacarArticulo = destacarSeleccionado;
    vm.publicarArticulo = publicarSeleccionado;
    $scope.dtEditarArtiulo = {};

    function reloadData() {
        var resetPaging = false;
        vm.dtInstance.reloadData(callback, resetPaging);
    }

    function callback(json) {
        console.log(json);
    }

    function nuevoArticulo() {
        $scope.selected = {};
        $scope.selected.accion = 'nuevo';
        $scope.selected.estado = 0;
        $scope.selected.destacado = 0;
        $scope.selected.autor = '.';
        var modalInstance = $uibModal.open({
            templateUrl: "assets/views/articulos/editar.html",
            controller: ModalInstanceCtrl,
            scope: $scope,
            size: 'lg',
            windowClass: "animated fadeIn"
        });
    }

    function publicarSeleccionado() {
        $scope.selected = $scope.dtEditarArtiulo.DataTable.row('.selected').data();
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
                $http.post('/easyapp/novedades/publicar/' + $scope.selected.id).success(function (data) {
                    SweetAlert.swal(data.mensaje, data.estado, data.codigo === "1" ? "success" : "error");
                    $scope.dtEditarArtiulo.reloadData();
                });
            } else {
                SweetAlert.swal("Operación Cancelada", "La tarea ha sido cancelada por el usuario", "error");
            }
        });
    }

    function destacarSeleccionado() {
        $scope.selected = $scope.dtEditarArtiulo.DataTable.row('.selected').data();
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
                $http.post('/easyapp/novedades/destacar/' + $scope.selected.id).success(function (data) {
                    SweetAlert.swal(data.mensaje, data.estado, data.codigo === "1" ? "success" : "error");
                    $scope.dtEditarArtiulo.reloadData();
                });
            } else {
                SweetAlert.swal("Operación Cancelada", "La tarea ha sido cancelada por el usuario", "error");
            }
        });
    }

    function borrarSeleccionado() {
        $scope.selected = $scope.dtEditarArtiulo.DataTable.row('.selected').data();
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
                $http.post('/easyapp/novedades/borrar', {json: JSON.stringify($scope.selected)}).success(function (data) {
                    SweetAlert.swal(data.mensaje, data.estado, data.codigo === "1" ? "success" : "error");
                    $scope.dtEditarArtiulo.reloadData();
                });
            } else {
                SweetAlert.swal("Operación Cancelada", "La tarea ha sido cancelada por el usuario", "error");
            }
        });
    }

    function editarSeleccionado() {
        $scope.selected = $scope.dtEditarArtiulo.DataTable.row('.selected').data();
        $scope.selected.accion = 'editar';
        var modalInstance = $uibModal.open({
            templateUrl: "assets/views/articulos/editar.html",
            controller: ModalInstanceCtrl,
            scope: $scope,
            size: 'lg',
            windowClass: "animated fadeIn"
        });
    }
}
function ModalInstanceCtrl($scope, $uibModalInstance, $http, SweetAlert) {
    $scope.ok = function () {
        $http.post('/easyapp/novedades/agregar', {json: JSON.stringify($scope.selected)}).success(function (data) {
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
        .controller('ArticulosCtrl', ArticulosCtrl);