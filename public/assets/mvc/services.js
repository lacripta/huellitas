function AnimalesRest($http, $q) {
    return {
        listar: listarTodas,
        adoptables: adoptables,
        buscar: buscar,
        nuevo: guardar,
        editar: editar,
        borrar: borrar
    };
    function listarTodas() {
        var defered = $q.defer();
        var promise = defered.promise;
        $http({
            method: 'GET',
            url: '/easyapp/refugio/animales/listar',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data) {
            defered.resolve(data);
        }).error(function (err) {
            defered.reject(err);
        });
        return promise;
    }
    function adoptables(animal) {
        var defered = $q.defer();
        var promise = defered.promise;
        $http({
            method: 'GET',
            url: '/easyapp/refugio/animales/ListarAdopcion?animal=' + animal,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data) {
            defered.resolve(data);
        }).error(function (err) {
            defered.reject(err);
        });
        return promise;
    }
    function buscar(id) {
        var defered = $q.defer();
        var promise = defered.promise;
        $http({
            method: 'GET',
            url: '/easyapp/refugio/animales/buscar/' + id,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data) {
            defered.resolve(data);
        }).error(function (err) {
            defered.reject(err);
        });
        return promise;
    }
    function guardar(datos) {
        var defered = $q.defer();
        var promise = defered.promise;
        $http({
            method: 'POST',
            url: '/easyapp/refugio/animales/agregar',
            data: datos,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data) {
            defered.resolve(data);
        }).error(function (err) {
            defered.reject(err);
        });
        return promise;
    }
    function editar(datos) {
        var defered = $q.defer();
        var promise = defered.promise;
        $http({
            method: 'PUT',
            url: '/easyapp/refugio/animales/editar',
            data: datos,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data) {
            defered.resolve(data);
        }).error(function (err) {
            defered.reject(err);
        });
        return promise;
    }
    function borrar(datos) {
        var defered = $q.defer();
        var promise = defered.promise;
        $http({
            method: 'DELETE',
            url: '/easyapp/refugio/animales/borrar',
            data: datos,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data) {
            defered.resolve(data);
        }).error(function (err) {
            defered.reject(err);
        });
        return promise;
    }
}

function PersonasRest($http, $q) {
    return {
        listar: listarTodas,
        padrinos: listarPadrinos,
        buscar: buscar,
        nuevo: guardar,
        editar: editar,
        borrar: borrar
    };
    function listarPadrinos() {
        var defered = $q.defer();
        var promise = defered.promise;
        $http({
            method: 'GET',
            url: '/easyapp/refugio/personas/ListarPadrino',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data) {
            defered.resolve(data);
        }).error(function (err) {
            defered.reject(err);
        });
        return promise;
    }
    function listarTodas() {
        var defered = $q.defer();
        var promise = defered.promise;
        $http({
            method: 'GET',
            url: '/easyapp/refugio/personas/listar',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data) {
            defered.resolve(data);
        }).error(function (err) {
            defered.reject(err);
        });
        return promise;
    }
    function buscar(id) {
        var defered = $q.defer();
        var promise = defered.promise;
        $http({
            method: 'GET',
            url: '/easyapp/refugio/personas/buscar/' + id,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data) {
            defered.resolve(data);
        }).error(function (err) {
            defered.reject(err);
        });
        return promise;
    }
    function guardar(datos) {
        var defered = $q.defer();
        var promise = defered.promise;
        $http({
            method: 'POST',
            url: '/easyapp/refugio/personas/agregar',
            data: datos,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data) {
            defered.resolve(data);
        }).error(function (err) {
            defered.reject(err);
        });
        return promise;
    }
    function editar(datos) {
        var defered = $q.defer();
        var promise = defered.promise;
        $http({
            method: 'PUT',
            url: '/easyapp/refugio/personas/editar',
            data: datos,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data) {
            defered.resolve(data);
        }).error(function (err) {
            defered.reject(err);
        });
        return promise;
    }
    function borrar(datos) {
        var defered = $q.defer();
        var promise = defered.promise;
        $http({
            method: 'DELETE',
            url: '/easyapp/refugio/personas/borrar',
            data: datos,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data) {
            defered.resolve(data);
        }).error(function (err) {
            defered.reject(err);
        });
        return promise;
    }
}

function AdopcionesRest($http, $q) {
    return {
        listar: listarTodas,
        buscar: buscar,
        nuevo: guardar,
        editar: editar,
        borrar: borrar
    };
    function listarTodas() {
        var defered = $q.defer();
        var promise = defered.promise;
        $http({
            method: 'GET',
            url: '/easyapp/refugio/adopciones/listar',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data) {
            defered.resolve(data);
        }).error(function (err) {
            defered.reject(err);
        });
        return promise;
    }
    function buscar(id) {
        var defered = $q.defer();
        var promise = defered.promise;
        $http({
            method: 'GET',
            url: '/easyapp/refugio/adopciones/buscar/' + id,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data) {
            defered.resolve(data);
        }).error(function (err) {
            defered.reject(err);
        });
        return promise;
    }
    function guardar(datos) {
        var defered = $q.defer();
        var promise = defered.promise;
        $http({
            method: 'POST',
            url: '/easyapp/refugio/adopciones/agregar',
            data: datos,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data) {
            defered.resolve(data);
        }).error(function (err) {
            defered.reject(err);
        });
        return promise;
    }
    function editar(datos) {
        var defered = $q.defer();
        var promise = defered.promise;
        $http({
            method: 'PUT',
            url: '/easyapp/refugio/adopciones/editar',
            data: datos,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data) {
            defered.resolve(data);
        }).error(function (err) {
            defered.reject(err);
        });
        return promise;
    }
    function borrar(datos) {
        var defered = $q.defer();
        var promise = defered.promise;
        $http({
            method: 'DELETE',
            url: '/easyapp/refugio/adopciones/borrar',
            data: datos,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data) {
            defered.resolve(data);
        }).error(function (err) {
            defered.reject(err);
        });
        return promise;
    }
}

function SexosRest($http, $q) {
    return {
        listar: listarTodas,
        buscar: buscar,
        nuevo: guardar,
        editar: editar,
        borrar: borrar
    };
    function listarTodas() {
        var defered = $q.defer();
        var promise = defered.promise;
        $http({
            method: 'GET',
            url: '/easyapp/refugio/parametros/sexos/listar',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data) {
            defered.resolve(data);
        }).error(function (err) {
            defered.reject(err);
        });
        return promise;
    }
    function buscar(id) {
        var defered = $q.defer();
        var promise = defered.promise;
        $http({
            method: 'GET',
            url: '/easyapp/refugio/parametros/sexos/buscar/' + id,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data) {
            defered.resolve(data);
        }).error(function (err) {
            defered.reject(err);
        });
        return promise;
    }
    function guardar(datos) {
        var defered = $q.defer();
        var promise = defered.promise;
        $http({
            method: 'POST',
            url: '/easyapp/refugio/parametros/sexos/agregar',
            data: datos,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data) {
            defered.resolve(data);
        }).error(function (err) {
            defered.reject(err);
        });
        return promise;
    }
    function editar(datos) {
        var defered = $q.defer();
        var promise = defered.promise;
        $http({
            method: 'PUT',
            url: '/easyapp/refugio/parametros/sexos/editar',
            data: datos,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data) {
            defered.resolve(data);
        }).error(function (err) {
            defered.reject(err);
        });
        return promise;
    }
    function borrar(datos) {
        var defered = $q.defer();
        var promise = defered.promise;
        $http({
            method: 'DELETE',
            url: '/easyapp/refugio/parametros/sexos/borrar',
            data: datos,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data) {
            defered.resolve(data);
        }).error(function (err) {
            defered.reject(err);
        });
        return promise;
    }
}

function ColoresRest($http, $q) {
    return {
        listar: listarTodas,
        buscar: buscar,
        nuevo: guardar,
        editar: editar,
        borrar: borrar
    };
    function listarTodas() {
        var defered = $q.defer();
        var promise = defered.promise;
        $http({
            method: 'GET',
            url: '/easyapp/refugio/parametros/colores/listar',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data) {
            defered.resolve(data);
        }).error(function (err) {
            defered.reject(err);
        });
        return promise;
    }
    function buscar(id) {
        var defered = $q.defer();
        var promise = defered.promise;
        $http({
            method: 'GET',
            url: '/easyapp/refugio/parametros/colores/buscar/' + id,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data) {
            defered.resolve(data);
        }).error(function (err) {
            defered.reject(err);
        });
        return promise;
    }
    function guardar(datos) {
        var defered = $q.defer();
        var promise = defered.promise;
        $http({
            method: 'POST',
            url: '/easyapp/refugio/parametros/colores/agregar',
            data: datos,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data) {
            defered.resolve(data);
        }).error(function (err) {
            defered.reject(err);
        });
        return promise;
    }
    function editar(datos) {
        var defered = $q.defer();
        var promise = defered.promise;
        $http({
            method: 'PUT',
            url: '/easyapp/refugio/parametros/colores/editar',
            data: datos,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data) {
            defered.resolve(data);
        }).error(function (err) {
            defered.reject(err);
        });
        return promise;
    }
    function borrar(datos) {
        var defered = $q.defer();
        var promise = defered.promise;
        $http({
            method: 'DELETE',
            url: '/easyapp/refugio/parametros/colores/borrar',
            data: datos,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data) {
            defered.resolve(data);
        }).error(function (err) {
            defered.reject(err);
        });
        return promise;
    }
}

function RazasRest($http, $q) {
    return {
        listar: listarTodas,
        buscar: buscar,
        nuevo: guardar,
        editar: editar,
        borrar: borrar
    };
    function listarTodas() {
        var defered = $q.defer();
        var promise = defered.promise;
        $http({
            method: 'GET',
            url: '/easyapp/refugio/parametros/razas/listar',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data) {
            defered.resolve(data);
        }).error(function (err) {
            defered.reject(err);
        });
        return promise;
    }
    function buscar(id) {
        var defered = $q.defer();
        var promise = defered.promise;
        $http({
            method: 'GET',
            url: '/easyapp/refugio/parametros/razas/buscar/' + id,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data) {
            defered.resolve(data);
        }).error(function (err) {
            defered.reject(err);
        });
        return promise;
    }
    function guardar(datos) {
        var defered = $q.defer();
        var promise = defered.promise;
        $http({
            method: 'POST',
            url: '/easyapp/refugio/parametros/razas/agregar',
            data: datos,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data) {
            defered.resolve(data);
        }).error(function (err) {
            defered.reject(err);
        });
        return promise;
    }
    function editar(datos) {
        var defered = $q.defer();
        var promise = defered.promise;
        $http({
            method: 'PUT',
            url: '/easyapp/refugio/parametros/razas/editar',
            data: datos,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data) {
            defered.resolve(data);
        }).error(function (err) {
            defered.reject(err);
        });
        return promise;
    }
    function borrar(datos) {
        var defered = $q.defer();
        var promise = defered.promise;
        $http({
            method: 'DELETE',
            url: '/easyapp/refugio/parametros/razas/borrar',
            data: datos,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data) {
            defered.resolve(data);
        }).error(function (err) {
            defered.reject(err);
        });
        return promise;
    }
}

function EspeciesRest($http, $q) {
    return {
        listar: listarTodas,
        buscar: buscar,
        nuevo: guardar,
        editar: editar,
        borrar: borrar
    };
    function listarTodas() {
        var defered = $q.defer();
        var promise = defered.promise;
        $http({
            method: 'GET',
            url: '/easyapp/refugio/parametros/especies/listar',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data) {
            defered.resolve(data);
        }).error(function (err) {
            defered.reject(err);
        });
        return promise;
    }
    function buscar(id) {
        var defered = $q.defer();
        var promise = defered.promise;
        $http({
            method: 'GET',
            url: '/easyapp/refugio/parametros/especies/buscar/' + id,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data) {
            defered.resolve(data);
        }).error(function (err) {
            defered.reject(err);
        });
        return promise;
    }
    function guardar(datos) {
        var defered = $q.defer();
        var promise = defered.promise;
        $http({
            method: 'POST',
            url: '/easyapp/refugio/parametros/especies/agregar',
            data: datos,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data) {
            defered.resolve(data);
        }).error(function (err) {
            defered.reject(err);
        });
        return promise;
    }
    function editar(datos) {
        var defered = $q.defer();
        var promise = defered.promise;
        $http({
            method: 'PUT',
            url: '/easyapp/refugio/parametros/especies/editar',
            data: datos,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data) {
            defered.resolve(data);
        }).error(function (err) {
            defered.reject(err);
        });
        return promise;
    }
    function borrar(datos) {
        var defered = $q.defer();
        var promise = defered.promise;
        $http({
            method: 'DELETE',
            url: '/easyapp/refugio/parametros/especies/borrar',
            data: datos,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data) {
            defered.resolve(data);
        }).error(function (err) {
            defered.reject(err);
        });
        return promise;
    }
}

function EstadosAnimalesRest($http, $q) {
    return {
        listar: listarTodas,
        buscar: buscar,
        nuevo: guardar,
        editar: editar,
        borrar: borrar
    };
    function listarTodas() {
        var defered = $q.defer();
        var promise = defered.promise;
        $http({
            method: 'GET',
            url: '/easyapp/refugio/parametros/estados/listar',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data) {
            defered.resolve(data);
        }).error(function (err) {
            defered.reject(err);
        });
        return promise;
    }
    function buscar(id) {
        var defered = $q.defer();
        var promise = defered.promise;
        $http({
            method: 'GET',
            url: '/easyapp/refugio/parametros/estados/listar/' + id,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data) {
            defered.resolve(data);
        }).error(function (err) {
            defered.reject(err);
        });
        return promise;
    }
    function guardar(datos) {
        var defered = $q.defer();
        var promise = defered.promise;
        $http({
            method: 'POST',
            url: '/easyapp/refugio/parametros/estados/agregar',
            data: datos,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data) {
            defered.resolve(data);
        }).error(function (err) {
            defered.reject(err);
        });
        return promise;
    }

    function editar(datos) {
        var defered = $q.defer();
        var promise = defered.promise;
        $http({
            method: 'PUT',
            url: '/easyapp/refugio/parametros/estados/editar',
            data: datos,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data) {
            defered.resolve(data);
        }).error(function (err) {
            defered.reject(err);
        });
        return promise;
    }

    function borrar(datos) {
        var defered = $q.defer();
        var promise = defered.promise;
        $http({
            method: 'DELETE',
            url: '/easyapp/refugio/parametros/estados/borrar',
            data: datos,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data) {
            defered.resolve(data);
        }).error(function (err) {
            defered.reject(err);
        });
        return promise;
    }
}

angular
        .module('easyapp')
        .service('AnimalesRest', AnimalesRest)
        .service('SexosRest', SexosRest)
        .service('RazasRest', RazasRest)
        .service('ColoresRest', ColoresRest)
        .service('EspeciesRest', EspeciesRest)
        .service('AdopcionesRest', AdopcionesRest)
        .service('EstadosAnimalesRest', EstadosAnimalesRest)
        .service('PersonasRest', PersonasRest);