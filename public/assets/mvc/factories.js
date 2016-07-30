function Animales(AnimalesRest, Notificar) {
    var Animal = {};
    Animal.listar = function () {
        return AnimalesRest.listar();
    };
    Animal.adoptables = function (animal) {
        return AnimalesRest.adoptables(animal);
    };
    Animal.buscar = function (id) {
        return AnimalesRest.buscar(id);
    };
    Animal.nuevo = function (selected) {
        if (selected) {
            AnimalesRest.nuevo(selected).then(function (data) {
                Notificar.ajax(data);
            }, function () {
                Notificar.error();
            });
        }
    };
    Animal.editar = function (selected) {
        if (selected) {
            AnimalesRest.editar(selected).then(function (data) {
                Notificar.ajax(data);
            }, function () {
                Notificar.error();
            });
        }
    };
    Animal.borrar = function (selected) {
        if (selected) {
            AnimalesRest.borrar(selected).then(function (data) {
                Notificar.ajax(data);
            }, function () {
                Notificar.error();
            });
        }
    };
    return Animal;
}

function Sexos(SexosRest, Notificar) {
    var Sexo = {};

    Sexo.listar = function () {
        return SexosRest.listar();
    };

    Sexo.buscar = function (id) {
        return SexosRest.buscar(id);
    };

    Sexo.nuevo = function (selected) {
        if (selected) {
            SexosRest.nuevo(selected).then(function (data) {
                Notificar.ajax(data);
            }, function () {
                Notificar.error();
            });
        }
    };

    Sexo.editar = function (selected) {
        if (selected) {
            SexosRest.editar(selected).then(function (data) {
                Notificar.ajax(data);
            }, function () {
                Notificar.error();
            });
        }
    };

    Sexo.borrar = function (selected) {
        if (selected) {
            SexosRest.borrar(selected).then(function (data) {
                Notificar.ajax(data);
            }, function () {
                Notificar.error();
            });
        }
    };

    return Sexo;
}

function Razas(RazasRest, Notificar) {
    var Raza = {};

    Raza.listar = function () {
        return RazasRest.listar();
    };

    Raza.buscar = function (id) {
        return RazasRest.buscar(id);
    };

    Raza.nuevo = function (selected) {
        if (selected) {
            RazasRest.nuevo(selected).then(function (data) {
                Notificar.ajax(data);
            }, function () {
                Notificar.error();
            });
        }
    };

    Raza.editar = function (selected) {
        if (selected) {
            RazasRest.editar(selected).then(function (data) {
                Notificar.ajax(data);
            }, function () {
                Notificar.error();
            });
        }
    };

    Raza.borrar = function (selected) {
        if (selected) {
            RazasRest.borrar(selected).then(function (data) {
                Notificar.ajax(data);
            }, function () {
                Notificar.error();
            });
        }
    };

    return Raza;
}

function Especies(EspeciesRest, Notificar) {
    var Especie = {};

    Especie.listar = function () {
        return EspeciesRest.listar();
    };

    Especie.buscar = function (id) {
        return EspeciesRest.buscar(id);
    };

    Especie.nuevo = function (selected) {
        if (selected) {
            EspeciesRest.nuevo(selected).then(function (data) {
                Notificar.ajax(data);
            }, function () {
                Notificar.error();
            });
        }
    };

    Especie.editar = function (selected) {
        if (selected) {
            EspeciesRest.editar(selected).then(function (data) {
                Notificar.ajax(data);
            }, function () {
                Notificar.error();
            });
        }
    };

    Especie.borrar = function (selected) {
        if (selected) {
            EspeciesRest.borrar(selected).then(function (data) {
                Notificar.ajax(data);
            }, function () {
                Notificar.error();
            });
        }
    };

    return Especie;
}

function EstadosAnimales(EstadosAnimalesRest, Notificar) {
    var Estado = {};

    Estado.listar = function () {
        return EstadosAnimalesRest.listar();
    };

    Estado.buscar = function (id) {
        return EstadosAnimalesRest.buscar(id);
    };

    Estado.nuevo = function (selected) {
        if (selected) {
            EstadosAnimalesRest.nuevo(selected).then(function (data) {
                Notificar.ajax(data);
            }, function () {
                Notificar.error();
            });
        }
    };

    Estado.editar = function (selected) {
        if (selected) {
            EstadosAnimalesRest.editar(selected).then(function (data) {
                Notificar.ajax(data);
            }, function () {
                Notificar.error();
            });
        }
    };

    Estado.borrar = function (selected) {
        if (selected) {
            EstadosAnimalesRest.borrar(selected).then(function (data) {
                Notificar.ajax(data);
            }, function () {
                Notificar.error();
            });
        }
    };

    return Estado;
}

function Personas(PersonasRest, Notificar) {
    var Persona = {};

    Persona.listar = function () {
        return PersonasRest.listar();
    };
    Persona.padrinos = function () {
        return PersonasRest.padrinos();
    };
    Persona.buscar = function (id) {
        return PersonasRest.buscar(id);
    };

    Persona.nuevo = function (selected) {
        if (selected) {
            PersonasRest.nuevo(selected).then(function (data) {
                Notificar.ajax(data);
            }, function () {
                Notificar.error();
            });
        }
    };

    Persona.editar = function (selected) {
        if (selected) {
            PersonasRest.editar(selected).then(function (data) {
                Notificar.ajax(data);
            }, function () {
                Notificar.error();
            });
        }
    };

    Persona.borrar = function (selected) {
        if (selected) {
            PersonasRest.borrar(selected).then(function (data) {
                Notificar.ajax(data);
            }, function () {
                Notificar.error();
            });
        }
    };

    return Persona;
}

function Adopciones(AdopcionesRest, Notificar) {
    var Adopcion = {};

    Adopcion.listar = function () {
        return AdopcionesRest.listar();
    };

    Adopcion.buscar = function (id) {
        return AdopcionesRest.buscar(id);
    };

    Adopcion.nuevo = function (selected) {
        if (selected) {
            AdopcionesRest.nuevo(selected).then(function (data) {
                Notificar.ajax(data);
            }, function () {
                Notificar.error();
            });
        }
    };

    Adopcion.editar = function (selected) {
        if (selected) {
            AdopcionesRest.editar(selected).then(function (data) {
                Notificar.ajax(data);
            }, function () {
                Notificar.error();
            });
        }
    };

    Adopcion.borrar = function (selected) {
        if (selected) {
            AdopcionesRest.borrar(selected).then(function (data) {
                Notificar.ajax(data);
            }, function () {
                Notificar.error();
            });
        }
    };

    return Adopcion;
}

function Notificar(SweetAlert) {
    var alerta = {};

    alerta.ok = function () {
        SweetAlert.swal("TAREA REALIZADA CORRECTAMENTE", "Se completo satisfactoriamente la tarea solicitada", "success");
    };
    alerta.ajax = function (data) {
        SweetAlert.swal(data.mensaje, data.estado, data.codigo === "1" ? "success" : "error");
    };

    alerta.form = function () {
        SweetAlert.swal("EL FORMULARIO NO ESTA COMPLETO", "Debe llenar todos los campos del formulario", "error");
    };

    alerta.error = function () {
        SweetAlert.swal("NO SE PUEDE REALIZAR LA TAREA", "El componenete solicitado ha arrojado un error", "error");
    };

    alerta.seleccionar = function () {
        SweetAlert.swal({
            title: "No puede Realizar la accion Solicitada",
            text: "Debe marcar uno de los elementos de la tabla como seleccionado",
            type: "warning",
            showCancelButton: false,
            confirmButtonText: "Aceptar",
            closeOnConfirm: true,
            closeOnCancel: true
        });
    };

    alerta.cancelado = function () {
        SweetAlert.swal("Operación Cancelada", "La tarea ha sido cancelada por el usuario", "error");
    };

    return alerta;
}

angular
        .module('easyapp')
        .factory('Animales', Animales)
        .factory('Personas', Personas)
        .factory('Sexos', Sexos)
        .factory('Razas', Razas)
        .factory('Especies', Especies)
        .factory('EstadosAnimales', EstadosAnimales)
        .factory('Adopciones', Adopciones)
        .factory('Notificar', Notificar);