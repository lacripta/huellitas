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
function Colores(ColoresRest, Notificar) {
    var Raza = {};

    Raza.listar = function () {
        return ColoresRest.listar();
    };

    Raza.buscar = function (id) {
        return ColoresRest.buscar(id);
    };

    Raza.nuevo = function (selected) {
        if (selected) {
            ColoresRest.nuevo(selected).then(function (data) {
                Notificar.ajax(data);
            }, function () {
                Notificar.error();
            });
        }
    };

    Raza.editar = function (selected) {
        if (selected) {
            ColoresRest.editar(selected).then(function (data) {
                Notificar.ajax(data);
            }, function () {
                Notificar.error();
            });
        }
    };

    Raza.borrar = function (selected) {
        if (selected) {
            ColoresRest.borrar(selected).then(function (data) {
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
function EstadoAdopcion(EstadoAdopcionRest, Notificar) {
    var Estado = {};

    Estado.listar = function () {
        return EstadoAdopcionRest.listar();
    };

    Estado.buscar = function (id) {
        return EstadoAdopcionRest.buscar(id);
    };

    Estado.nuevo = function (selected) {
        if (selected) {
            EstadoAdopcionRest.nuevo(selected).then(function (data) {
                Notificar.ajax(data);
            }, function () {
                Notificar.error();
            });
        }
    };

    Estado.editar = function (selected) {
        if (selected) {
            EstadoAdopcionRest.editar(selected).then(function (data) {
                Notificar.ajax(data);
            }, function () {
                Notificar.error();
            });
        }
    };

    Estado.borrar = function (selected) {
        if (selected) {
            EstadoAdopcionRest.borrar(selected).then(function (data) {
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
function TipoUsuario(TipoUsuarioRest, Notificar) {
    var Tipo = {};

    Tipo.listar = function () {
        return TipoUsuarioRest.listar();
    };
    Tipo.padrinos = function () {
        return TipoUsuarioRest.padrinos();
    };
    Tipo.buscar = function (id) {
        return TipoUsuarioRest.buscar(id);
    };

    Tipo.nuevo = function (selected) {
        if (selected) {
            TipoUsuarioRest.nuevo(selected).then(function (data) {
                Notificar.ajax(data);
            }, function () {
                Notificar.error();
            });
        }
    };

    Tipo.editar = function (selected) {
        if (selected) {
            TipoUsuarioRest.editar(selected).then(function (data) {
                Notificar.ajax(data);
            }, function () {
                Notificar.error();
            });
        }
    };

    Tipo.borrar = function (selected) {
        if (selected) {
            TipoUsuarioRest.borrar(selected).then(function (data) {
                Notificar.ajax(data);
            }, function () {
                Notificar.error();
            });
        }
    };

    return Tipo;
}
function EstadoUsuario(EstadoUsuarioRest, Notificar) {
    var Estado = {};

    Estado.listar = function () {
        return EstadoUsuarioRest.listar();
    };
    Estado.padrinos = function () {
        return EstadoUsuarioRest.padrinos();
    };
    Estado.buscar = function (id) {
        return EstadoUsuarioRest.buscar(id);
    };

    Estado.nuevo = function (selected) {
        if (selected) {
            EstadoUsuarioRest.nuevo(selected).then(function (data) {
                Notificar.ajax(data);
            }, function () {
                Notificar.error();
            });
        }
    };

    Estado.editar = function (selected) {
        if (selected) {
            EstadoUsuarioRest.editar(selected).then(function (data) {
                Notificar.ajax(data);
            }, function () {
                Notificar.error();
            });
        }
    };

    Estado.borrar = function (selected) {
        if (selected) {
            EstadoUsuarioRest.borrar(selected).then(function (data) {
                Notificar.ajax(data);
            }, function () {
                Notificar.error();
            });
        }
    };

    return Estado;
}
function AreaPoblacion(AreaPoblacionRest, Notificar) {
    var Area = {};

    Area.listar = function () {
        return AreaPoblacionRest.listar();
    };
    Area.padrinos = function () {
        return AreaPoblacionRest.padrinos();
    };
    Area.buscar = function (id) {
        return AreaPoblacionRest.buscar(id);
    };

    Area.nuevo = function (selected) {
        if (selected) {
            AreaPoblacionRest.nuevo(selected).then(function (data) {
                Notificar.ajax(data);
            }, function () {
                Notificar.error();
            });
        }
    };

    Area.editar = function (selected) {
        if (selected) {
            AreaPoblacionRest.editar(selected).then(function (data) {
                Notificar.ajax(data);
            }, function () {
                Notificar.error();
            });
        }
    };

    Area.borrar = function (selected) {
        if (selected) {
            AreaPoblacionRest.borrar(selected).then(function (data) {
                Notificar.ajax(data);
            }, function () {
                Notificar.error();
            });
        }
    };

    return Area;
}
function Departamento(DepartamentoRest, Notificar) {
    var Departamento = {};

    Departamento.listar = function () {
        return DepartamentoRest.listar();
    };
    Departamento.padrinos = function () {
        return DepartamentoRest.padrinos();
    };
    Departamento.buscar = function (id) {
        return DepartamentoRest.buscar(id);
    };

    Departamento.nuevo = function (selected) {
        if (selected) {
            DepartamentoRest.nuevo(selected).then(function (data) {
                Notificar.ajax(data);
            }, function () {
                Notificar.error();
            });
        }
    };

    Departamento.editar = function (selected) {
        if (selected) {
            DepartamentoRest.editar(selected).then(function (data) {
                Notificar.ajax(data);
            }, function () {
                Notificar.error();
            });
        }
    };

    Departamento.borrar = function (selected) {
        if (selected) {
            DepartamentoRest.borrar(selected).then(function (data) {
                Notificar.ajax(data);
            }, function () {
                Notificar.error();
            });
        }
    };

    return Departamento;
}
function Municipio(MunicipioRest, Notificar) {
    var Municipio = {};

    Municipio.listar = function () {
        return MunicipioRest.listar();
    };
    Municipio.padrinos = function () {
        return MunicipioRest.padrinos();
    };
    Municipio.buscar = function (id) {
        return MunicipioRest.buscar(id);
    };

    Municipio.nuevo = function (selected) {
        if (selected) {
            MunicipioRest.nuevo(selected).then(function (data) {
                Notificar.ajax(data);
            }, function () {
                Notificar.error();
            });
        }
    };

    Municipio.editar = function (selected) {
        if (selected) {
            MunicipioRest.editar(selected).then(function (data) {
                Notificar.ajax(data);
            }, function () {
                Notificar.error();
            });
        }
    };

    Municipio.borrar = function (selected) {
        if (selected) {
            MunicipioRest.borrar(selected).then(function (data) {
                Notificar.ajax(data);
            }, function () {
                Notificar.error();
            });
        }
    };

    return Municipio;
}
function Poblacion(PoblacionRest, Notificar) {
    var Poblacion = {};

    Poblacion.listar = function () {
        return PoblacionRest.listar();
    };
    Poblacion.padrinos = function () {
        return PoblacionRest.padrinos();
    };
    Poblacion.buscar = function (id) {
        return PoblacionRest.buscar(id);
    };

    Poblacion.nuevo = function (selected) {
        if (selected) {
            PoblacionRest.nuevo(selected).then(function (data) {
                Notificar.ajax(data);
            }, function () {
                Notificar.error();
            });
        }
    };

    Poblacion.editar = function (selected) {
        if (selected) {
            PoblacionRest.editar(selected).then(function (data) {
                Notificar.ajax(data);
            }, function () {
                Notificar.error();
            });
        }
    };

    Poblacion.borrar = function (selected) {
        if (selected) {
            PoblacionRest.borrar(selected).then(function (data) {
                Notificar.ajax(data);
            }, function () {
                Notificar.error();
            });
        }
    };

    return Poblacion;
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
    alerta.mensaje = function (texto, estado) {
        SweetAlert.swal("Respuesta del Servidor", texto, estado == "1" ? "success" : "error");
    };
    return alerta;
}

angular
        .module('easyapp')
        .factory('Animales', Animales)
        .factory('Personas', Personas)
        .factory('Sexos', Sexos)
        .factory('Razas', Razas)
        .factory('Colores', Colores)
        .factory('Especies', Especies)
        .factory('EstadosAnimales', EstadosAnimales)
        .factory('EstadoAdopcion', EstadoAdopcion)
        .factory('Adopciones', Adopciones)
        .factory('TipoUsuario', TipoUsuario)
        .factory('EstadoUsuario', EstadoUsuario)
        .factory('AreaPoblacion', AreaPoblacion)
        .factory('Departamento', Departamento)
        .factory('Municipio', Municipio)
        .factory('Poblacion', Poblacion)
        .factory('Notificar', Notificar);