<?php

/**
 * @RoutePrefix("/refugio/parametros")
 */
class WebServiceController extends Phalcon\Mvc\Controller {

    public function initialize() {
        if (!stripos(baseUri, $this->request->getHeader("HOST"))) {
            $this->Denegado();
        }
        if (is_null($this->session->get('key'))) {
            $this->Denegado();
        }
        $this->response->setContentType('application/json; charset=utf-8');
        $this->view->disable();
    }

    /**
     * @Get("/")
     */
    public function indexAction() {

    }

    public function ListaAnimalesPorEstado($animal) {
        $razas = array();
        foreach ($animal as $key) {
            $razas[] = array(
                "id" => $key->id,
                "nombre" => $key->nombre . " - " . $key->Razas->nombre . " - " . $key->sexo,
                "especie" => $key->Especies->nombre
            );
        }
        return $razas;
    }

    public function Fecha($fecha) {
        $nuevo = new DateTime($fecha, new DateTimeZone("America/Bogota"));
        return $nuevo->format("Y-m-d");
    }

    /**
     * 200 OK
     * 201 CREATED
     * 202 ACCEPTED
     * 203 Non-Authoritative Information
     * 204 No Content
     * 205 Reset Content
     * 206 Partial Content
     * 207 Multi-status
     * 208 Already Reported
     * @param type $datos
     */
    public function Ok($datos) {
        if (!is_array($datos)) {
            $datos = $datos->toArray();
        }
        $this->response->setStatusCode(200);
        $this->response->setEtag(md5(time()));
        $this->response->setJsonContent($datos, JSON_PRETTY_PRINT);
        $this->response->send();
    }

    public function Denegado() {
        $this->response->setStatusCode(403);
        $this->response->setEtag(md5(time()));
        $this->response->send();
    }

    public function Creado() {
        $this->security->hash(rand(), CRYPT_SHA512);
        $this->response->setStatusCode(201);
        $this->response->setEtag(md5(time()));
        $this->response->setJsonContent([
            "mensaje" => "Tarea Realizada Correctamente",
            "estado" => "Se ha creado un registro nuevo",
            "codigo" => "1"
                ], JSON_PRETTY_PRINT);
        $this->response->send();
    }

    public function Editado() {
        $this->security->hash(rand(), CRYPT_SHA512);
        $this->response->setStatusCode(202);
        $this->response->setEtag(md5(time()));
        $this->response->setJsonContent([
            "mensaje" => "Cambios Realizados Correctamente",
            "estado" => "Se ha cambiado la información del registro",
            "codigo" => "1"
                ], JSON_PRETTY_PRINT);
        $this->response->send();
    }

    public function Borrado() {
        $this->security->hash(rand(), CRYPT_SHA512);
        $this->response->setStatusCode(202);
        $this->response->setEtag(md5(time()));
        $this->response->setJsonContent([
            "mensaje" => "Registro Eliminado Correctamente",
            "estado" => "Se ha borrado el registro de la base de datos",
            "codigo" => "1"
                ], JSON_PRETTY_PRINT);
        $this->response->send();
    }

    public function SinCambios($errores) {
        $this->response->setStatusCode(206);
        $this->response->setEtag(md5(time()));
        $this->response->setJsonContent([
            "mensaje" => "No se Han realizado Cambios",
            "estado" => $errores,
            "codigo" => "0"
                ], JSON_PRETTY_PRINT);
        $this->response->send();
    }

}
