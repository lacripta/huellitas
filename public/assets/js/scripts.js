var esperando;
esperando = esperando || (function () {
    var pleaseWaitDiv = $('<div class="modal fade" tabindex="-1" role="dialog" data-backdrop="static" data-keyboard="false">'
            + ' <div class="modal-dialog">'
            + '<div class="modal-content">'
            + '<div class="modal-header">'
            + '<h2 class="modal-title">Generando ...</h2>'
            + '</div>'
            + '<div class="modal-body">'
            + '<div class="progress">'
            + '<div class="progress-bar progress-bar-striped active" role="progressbar"'
            + 'aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width:100%">'
            + '</div>'
            + '</div>'
            + '</div> '
            + '</div>'
            + '</div>'
            + '</div>');
    return {
        showPleaseWait: function () {
            pleaseWaitDiv.modal();
        },
        hidePleaseWait: function () {
            pleaseWaitDiv.modal('hide');
        }
    };
})();

function interval(func, wait, times) {
    var interv = function (w, t) {
        return function () {
            if (typeof t === "undefined" || t-- > 0) {
                setTimeout(interv, w);
                try {
                    func.call(null);
                } catch (e) {
                    t = 0;
                    throw e.toString();
                }
            }
        };
    }(wait, times);

    setTimeout(interv, wait);
}

function getFormData($form) {
    var unindexed_array = $form.serializeArray();
    var indexed_array = {};
    $.map(unindexed_array, function (n, i) {
        indexed_array[n['name']] = n['value'];
    });
    return indexed_array;
}

function formatoMoneda(precio) {
    return accounting.formatMoney(precio, "$ ", 2, ".", ",");
}

function getJson(url, data) {
    return JSON.parse($.ajax({
        type: 'POST',
        url: url,
        dataType: 'json',
        global: false,
        async: false,
        data: data,
        success: function (json) {
            return json;
        },
        error: function (error) {
            return error;
        }
    }).responseText);
}

function getText(url, data) {
    return $.ajax({
        type: 'POST',
        url: url,
        dataType: 'text',
        global: false,
        async: false,
        data: data,
        success: function (json) {
            return json;
        },
        error: function (error) {
            return error;
        }
    }).responseText;
}

function asyncRequest(url, options, funcion, method, type) {
    type = typeof type !== 'undefined' ? type : 'json';
    method = typeof method !== 'undefined' ? method : 'POST';
    $.ajax({
        type: method,
        url: url,
        dataType: type,
        global: false,
        async: true,
        data: options,
        success: function (json) {
            window[funcion](json);
        },
        error: function (error) {
            return error;
        }
    });
}
function parseIsoDatetime(dtstr) {
    var dt = dtstr.split(/[: T-]/).map(parseFloat);
    return new Date(dt[0], dt[1] - 1, dt[2], dt[3] || 0, dt[4] || 0, dt[5] || 0, 0).toLocaleDateString();
}

function notificar(estado) {
    //console.log(estado);
    if (estado == 403) {
        $('#respuestaMsg').removeClass('text-info text-danger text-warning');
        $('#respuestaMsg').addClass('text-danger');
        $('#respuestaMsg').text("NO ESTA AUTORIZADO PARA REALIZAR ESTA ACCION");
    } else {
        $('#respuestaMsg').removeClass('text-info text-danger text-warning');
        $('#respuestaMsg').addClass('text-warning');
        $('#respuestaMsg').text(estado);
    }
    $('#respuestaServidor').modal('show');
}

function notificarMensaje(estado) {
    $('#respuestaMsg').removeClass('text-info text-danger text-warning');
    $('#respuestaMsg').addClass('text-danger');
    $('#respuestaMsg').text(estado);
    $('#respuestaServidor').modal('show');
}
var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split('&'),
            sParameterName,
            i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};
function readURL(input) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#preview').attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}
var ventanas = {};
function abrir_ventana(enlace) {
    ventanas[enlace] = window.open(enlace);
}
function cerrar_sesion() {
    if (confirm('Seguro de cerrar Sesion?')) {
        $.each(ventanas, function (k, v) {
            v.close();
        });
        window.location.href = '/portal/logout';
    }
}
function cerrar_ventana() {
    if (confirm("Seguro de Salir de Este modulo?")) {
        opener.location.reload();
        close();
    }
}
var aplicaciones = {};
function cerrarAplicacion() {
    $.each(aplicaciones, function (k, v) {
        if ($(v).is(':visible')) {
            if ($("#ventanaSelector").find("option[value*='" + v.id + "']").length) {
                $("#ventanaSelector option[value*='" + v.id + "']").remove();
                if (!$("#ventanaSelector").val()) {
                    $("#ventanaSelector").select2({language: 'es'});
                }
                $("#ventanaSelector").select2("val", "");
            }
            delete aplicaciones[v.id];
            $(v).remove();
        }
    });
}
function cargaAplicacion(enlace, ventana) {
    esperando.showPleaseWait();
    $.each(aplicaciones, function (k, v) {
        $(v).hide();
    });
    var titulo = getJson('/portal/permisos/menu/titulo', {padre: enlace});
    if (titulo.length > 0 && titulo[0].NOMBRE) {
        titulo = titulo[0].NOMBRE;
    } else {
        titulo = 'NOMBRE NO ENCONTRADO';
    }
    // Set the value, creating a new option if necessary
    if ($("#ventanaSelector").find("option[value*='" + enlace + "']").length) {
        $("#ventanaSelector").val(enlace).trigger("change");
    } else {
        var nuevaVentana = new Option(titulo, enlace, true, true);
        $("#ventanaSelector").append(nuevaVentana).trigger('change');
    }

    if (aplicaciones[enlace]) {
        aplicaciones[enlace].style.height = aplicaciones[enlace].contentWindow.document.body.scrollHeight + 'px';
        $(aplicaciones[enlace]).show();
    } else {
        var iframe = document.createElement('iframe');
        iframe.src = enlace;
        iframe.style.borderWidth = 0;
        iframe.width = '100%';
        iframe.id = enlace;
        aplicaciones[enlace] = iframe;
        $("#id_enlace").append(iframe);
        $(iframe).on('load', function () {
            iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
            if (iframe.contentWindow.document.body.scrollHeight < 250) {
                iframe.style.height = "350px";
            } else {
                iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
            }
            setTimeout(function () {
                if (iframe.contentWindow.document.body.scrollHeight < 250) {
                    iframe.style.height = "350px";
                } else {
                    iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
                }
                iframe.style.height = iframe.contentWindow.document.body.scrollHeight + 'px';
            }, 1000);
        });
    }
    esperando.hidePleaseWait();
}
