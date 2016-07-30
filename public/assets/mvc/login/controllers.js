function MainController() {
    /**
     * daterange - Used as initial model for data range picker in Advanced form view
     */
    this.daterange = {startDate: null, endDate: null};
    /**
     * slideInterval - Interval for bootstrap Carousel, in milliseconds:
     */
    this.slideInterval = 5000;
}

function LoginController($http, $window, $scope, SweetAlert) {
    var login = this;
    login.ajax = {
        estado: 0,
        resultado: 'Debe indicar el usuario y la contraseña'
    };
    login.usuario = {
        usuario_sid: '',
        usuario_clave: ''
    };
    $scope.validar = function (usuario) {
        if (usuario.usuario_sid && usuario.usuario_clave) {
            $http.post('/easyapp/login/auth', {json: JSON.stringify(usuario)}).success(function (data) {
                login.ajax = data;
                switch (login.ajax.estado) {
                    case 0:
                        SweetAlert.swal({
                            title: login.ajax.resultado,
                            text: "Intente ingresar nuevamente o consulte con el administrador si tiene problemas.",
                            type: "error",
                            showCancelButton: false,
                            confirmButtonText: "Aceptar",
                            closeOnConfirm: true,
                            closeOnCancel: true
                        });
                        break;
                    case 1:
                        SweetAlert.swal({
                            title: "Bienvenido de Vuelta",
                            text: login.ajax.resultado,
                            type: "success",
                            showCancelButton: false,
                            confirmButtonText: "Ingresar",
                            cancelButtonText: "No, cancel plx!",
                            closeOnConfirm: true,
                            closeOnCancel: true
                        }, function (isConfirm) {
                            if (isConfirm) {
                                $window.location.href = '/easyapp';
                            }
                        });
                        break;
                    case 2:
                        SweetAlert.swal({
                            title: 'Debe indicar el usuario y la contraseña',
                            text: "Ha ocurrido un error al inicio de sesion",
                            type: "warning",
                            showCancelButton: false,
                            confirmButtonText: "ok",
                            cancelButtonText: "No, cancel plx!",
                            closeOnConfirm: true,
                            closeOnCancel: true
                        });
                        break;
                }
            });
        } else {
            login.ajax = {
                estado: 0,
                resultado: 'Debe indicar el usuario y la contraseña'
            };
            SweetAlert.swal({
                title: login.ajax.resultado,
                text: "",
                type: "warning",
                showCancelButton: false,
                confirmButtonText: "Aceptar",
                cancelButtonText: "No, cancel plx!",
                closeOnConfirm: true,
                closeOnCancel: true});
        }
    };
}
function LogoutController() {

}
angular
        .module('easyapp')
        .controller('MainController', MainController)
        .controller('LoginController', LoginController);