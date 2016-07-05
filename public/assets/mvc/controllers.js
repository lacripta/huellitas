function MainCtrl() {
    /**
     * daterange - Used as initial model for data range picker in Advanced form view
     */
    this.daterange = {startDate: null, endDate: null};
    /**
     * slideInterval - Interval for bootstrap Carousel, in milliseconds:
     */
    this.slideInterval = 5000;
}

function UsuarioCtrl($http, $window, $scope) {
    $scope.nombre = 'as';
    $scope.email = 'as';
    $http.post('/easyapp/usuarios/datos').success(function (data) {
        $scope.nombre = data.resultado.nombre;
        $scope.sid = data.resultado.sid;
        $scope.correo = data.resultado.correo;
    });
}

function imageCrop($scope, $http, $log, resizeService) {
    $scope.dupa = "dasdasdas";
    $scope.myImage = '';
    $scope.myCroppedImage = '';
    $http.post('/easyapp/novedades/imagen/' + $scope.selected.id).success(function (data) {
        $.each(data, function (k, v) {
            $scope.selected.imagen_url = v.imagen_url;
        });
    });
    var handleFileSelect = function (evt) {
        var file = evt.currentTarget.files[0];
        var reader = new FileReader();
        reader.onload = function (evt) {
            $scope.$apply(function ($scope) {
                resizeService
                        .resizeImage(evt.target.result, {
                            size: 100,
                            sizeScale: 'ko'
                                    // Other options ...
                        })
                        .then(function (image) {
                            $scope.myImage = image;
                            $scope.selected.imagen_url = image;
                        })
                        .catch($log.error);
            });
        };
        reader.readAsDataURL(file);
    };
    angular.element(document.querySelector('#fileInput')).on('change', handleFileSelect);
}

function translateCtrl($translate, $scope) {
    $scope.changeLanguage = function (langKey) {
        $translate.use(langKey);
        $scope.language = langKey;
    };
}


angular
        .module('easyapp')
        .controller('MainCtrl', MainCtrl)
        .controller('UsuarioCtrl', UsuarioCtrl)
        .controller('imageCrop', imageCrop)
        .controller('translateCtrl', translateCtrl);