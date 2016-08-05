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
function AnimalImagenRest($http, $q) {
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
            url: '/easyapp/refugio/animales/imagen/listar',
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
            url: '/easyapp/refugio/animales/imagen/buscar/' + id,
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
            url: '/easyapp/refugio/animales/imagen/agregar',
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
            url: '/easyapp/refugio/animales/imagen/editar',
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
            url: '/easyapp/refugio/animales/imagen/borrar',
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
function NovedadesRest($http, $q) {
    return {
        listar: listarTodas,
        buscar: buscar,
        publicar: publicar,
        destacar: destacar,
        imagen: imagen,
        nuevo: crear,
        editar: editar,
        borrar: borrar
    };
    function listarTodas() {
        var defered = $q.defer();
        var promise = defered.promise;
        $http({
            method: 'GET',
            url: '/easyapp/novedades/listar',
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
            url: '/easyapp/novedades/buscar/' + id,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data) {
            defered.resolve(data);
        }).error(function (err) {
            defered.reject(err);
        });
        return promise;
    }
    function imagen(id) {
        var defered = $q.defer();
        var promise = defered.promise;
        $http({
            method: 'GET',
            url: '/easyapp/novedades/imagen/' + id,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data) {
            defered.resolve(data);
        }).error(function (err) {
            defered.reject(err);
        });
        return promise;
    }
    function crear(datos) {
        var defered = $q.defer();
        var promise = defered.promise;
        $http({
            method: 'POST',
            url: '/easyapp/novedades/agregar',
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
            url: '/easyapp/novedades/editar',
            data: datos,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data) {
            defered.resolve(data);
        }).error(function (err) {
            defered.reject(err);
        });
        return promise;
    }
    function destacar(datos) {
        var defered = $q.defer();
        var promise = defered.promise;
        $http({
            method: 'PUT',
            url: '/easyapp/novedades/destacar',
            data: datos,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).success(function (data) {
            defered.resolve(data);
        }).error(function (err) {
            defered.reject(err);
        });
        return promise;
    }
    function publicar(datos) {
        var defered = $q.defer();
        var promise = defered.promise;
        $http({
            method: 'PUT',
            url: '/easyapp/novedades/publicar',
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
            url: '/easyapp/novedades/borrar',
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
            url: '/easyapp/refugio/parametros/estados/buscar/' + id,
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
function EstadoAdopcionRest($http, $q) {
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
            url: '/easyapp/refugio/parametros/adopciones/estados/listar',
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
            url: '/easyapp/refugio/parametros/adopciones/estados/buscar/' + id,
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
            url: '/easyapp/refugio/parametros/adopciones/estados/agregar',
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
            url: '/easyapp/refugio/parametros/adopciones/estados/editar',
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
            url: '/easyapp/refugio/parametros/adopciones/estados/borrar',
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
function EstadoUsuarioRest($http, $q) {
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
            url: '/easyapp/configuracion/usuarios/estados/listar',
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
            url: '/easyapp/configuracion/usuarios/estados/buscar/' + id,
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
            url: '/easyapp/configuracion/usuarios/estados/agregar',
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
            url: '/easyapp/configuracion/usuarios/estados/editar',
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
            url: '/easyapp/configuracion/usuarios/estados/borrar',
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
function EstadoPublicacionRest($http, $q) {
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
            url: '/easyapp/configuracion/novedades/estados/listar',
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
            url: '/easyapp/configuracion/novedades/estados/buscar/' + id,
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
            url: '/easyapp/configuracion/novedades/estados/agregar',
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
            url: '/easyapp/configuracion/novedades/estados/editar',
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
            url: '/easyapp/configuracion/novedades/estados/borrar',
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
function TipoUsuarioRest($http, $q) {
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
            url: '/easyapp/configuracion/usuarios/tipos/listar',
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
            url: '/easyapp/configuracion/usuarios/tipos/buscar/' + id,
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
            url: '/easyapp/configuracion/usuarios/tipos/agregar',
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
            url: '/easyapp/configuracion/usuarios/tipos/editar',
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
            url: '/easyapp/configuracion/usuarios/tipos/borrar',
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
function DepartamentoRest($http, $q) {
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
            url: '/easyapp/configuracion/regiones/departamentos/listar',
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
            url: '/easyapp/configuracion/regiones/departamentos/buscar/' + id,
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
            url: '/easyapp/configuracion/regiones/departamentos/agregar',
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
            url: '/easyapp/configuracion/regiones/departamentos/editar',
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
            url: '/easyapp/configuracion/regiones/departamentos/borrar',
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
function MunicipioRest($http, $q) {
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
            url: '/easyapp/configuracion/regiones/municipios/listar',
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
            url: '/easyapp/configuracion/regiones/municipios/buscar/' + id,
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
            url: '/easyapp/configuracion/regiones/municipios/agregar',
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
            url: '/easyapp/configuracion/regiones/municipios/editar',
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
            url: '/easyapp/configuracion/regiones/municipios/borrar',
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
function PoblacionRest($http, $q) {
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
            url: '/easyapp/configuracion/regiones/poblaciones/listar',
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
            url: '/easyapp/configuracion/regiones/poblaciones/buscar/' + id,
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
            url: '/easyapp/configuracion/regiones/poblaciones/agregar',
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
            url: '/easyapp/configuracion/regiones/poblaciones/editar',
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
            url: '/easyapp/configuracion/regiones/poblaciones/borrar',
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
function AreaPoblacionRest($http, $q) {
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
            url: '/easyapp/configuracion/regiones/areas/listar',
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
            url: '/easyapp/configuracion/regiones/areas/buscar/' + id,
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
            url: '/easyapp/configuracion/regiones/areas/agregar',
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
            url: '/easyapp/configuracion/regiones/areas/editar',
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
            url: '/easyapp/configuracion/regiones/areas/borrar',
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
        .service('AnimalImagenRest', AnimalImagenRest)
        .service('NovedadesRest', NovedadesRest)
        .service('SexosRest', SexosRest)
        .service('RazasRest', RazasRest)
        .service('ColoresRest', ColoresRest)
        .service('EspeciesRest', EspeciesRest)
        .service('EstadoAdopcionRest', EstadoAdopcionRest)
        .service('EstadoPublicacionRest', EstadoPublicacionRest)
        .service('AdopcionesRest', AdopcionesRest)
        .service('EstadosAnimalesRest', EstadosAnimalesRest)
        .service('EstadoUsuarioRest', EstadoUsuarioRest)
        .service('TipoUsuarioRest', TipoUsuarioRest)
        .service('DepartamentoRest', DepartamentoRest)
        .service('MunicipioRest', MunicipioRest)
        .service('PoblacionRest', PoblacionRest)
        .service('AreaPoblacionRest', AreaPoblacionRest)
        .service('PersonasRest', PersonasRest);