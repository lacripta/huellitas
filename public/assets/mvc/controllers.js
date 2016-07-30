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

function UsuarioController($http, $window, $scope) {
    $scope.nombre = 'as';
    $scope.email = 'as';
    $http.post('/easyapp/usuarios/datos').success(function (data) {
        $scope.nombre = data.resultado.nombre;
        $scope.sid = data.resultado.sid;
        $scope.correo = data.resultado.correo;
    });
}

function TranslateController($translate, $scope) {
    $scope.changeLanguage = function (langKey) {
        $translate.use(langKey);
        $scope.language = langKey;
    };
}



angular
        .module('easyapp')
        .controller('MainController', MainController)
        .controller('UsuarioController', UsuarioController)
        .controller('TranslateController', TranslateController);