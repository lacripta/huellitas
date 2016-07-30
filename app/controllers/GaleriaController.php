<?php

/**
 * @RoutePrefix("/galeria")
 */
class GaleriaController extends WebServiceController {

    /**
     * @Route("/", methods = {"GET"})
     */
    public function indexAction() {
        $this->response->redirect("login")->sendHeaders();
    }

    /**
     * @Route("/publicar/{id:[0-9]+}", methods = {"POST"}, name = "galeria-publicar")
     */
    public function publicarAction($id) {
        $this->db->begin();
        $tabla = Galeria::findFirst(array(
                    "conditions" => "id = ?1",
                    "bind" => array(1 => $id)
        ));
        $tabla->estado = $tabla->estado == 1 ? 0 : 1;
        if ($tabla->save()) {
            $this->db->commit();
            echo json_encode(array(
                "mensaje" => "Cambios Realizados Correctamente",
                "estado" => "Se cambio el estado de la imagen",
                "codigo" => "1"
            ));
        } else {
            $error = "";
            foreach ($tabla->getMessages() as $mensaje) {
                $error .= $mensaje;
            }
            echo json_encode(array(
                "mensaje" => "No se Han realizado Cambios",
                "estado" => $error,
                "codigo" => "0"
            ));
            $this->db->rollback($mensaje);
        }
    }

    /**
     * @Route("/borrar", methods = {"POST"}, name = "galeria-borrar")
     */
    public function borrarAction() {
        $json = $this->request->getJsonRawBody('json');
        $nuevo = json_decode($json->json);
        $this->db->begin();
        $tabla = Galeria::findFirst($nuevo->id);
        if ($tabla->delete()) {
            $this->db->commit();
            echo json_encode(array(
                "mensaje" => "Cambios Realizados Correctamente",
                "estado" => "Se ha borrado la imagen: " . $nuevo->titulo,
                "codigo" => "1"
            ));
        } else {
            $error = "";
            foreach ($tabla->getMessages() as $mensaje) {
                $error .= $mensaje;
            }
            echo json_encode(array(
                "mensaje" => "No se Han realizado Cambios",
                "estado" => $error,
                "codigo" => "0"
            ));
            $this->db->rollback();
        }
    }

    /**
     * @Route("/agregar", methods = {"POST"}, name = "galeria-agregar")
     */
    public function agregarAction() {
        $json = $this->request->getJsonRawBody('json');
        $nuevo = json_decode($json->json, true);
        switch ($nuevo["accion"]) {
            case "nuevo":
                $this->GaleriaImagenCrear($nuevo);
                break;
            case "editar":
                $this->GaleriaImagenEditar($nuevo);
                break;
        }
    }

    public function GaleriaImagenCrear($nuevo) {
        $this->db->begin();
        $tabla = Phalcon\Mvc\Model::cloneResult(new Galeria(), $nuevo);
        $tabla->resumen = $nuevo["titulo"];
        $tabla->contenido = $nuevo["titulo"];
        if ($tabla->update()) {
            $this->db->commit();
            echo json_encode(array(
                "mensaje" => "Cambios Realizados Correctamente",
                "estado" => "Se ha creado el Articulo de Titulo: " . $tabla->titulo,
                "codigo" => "1"
            ));
        } else {
            $error = "";
            foreach ($tabla->getMessages() as $mensaje) {
                $error .= $mensaje;
            }
            echo json_encode(array(
                "mensaje" => "No se Han realizado Cambios",
                "estado" => $error,
                "codigo" => "0"
            ));
            $this->db->rollback($error);
        }
    }

    public function GaleriaImagenEditar($nuevo) {
        $this->db->begin();
        $tabla = Galeria::find(array(
                    "conditions" => "id = ?1",
                    "bind" => array(
                        1 => $nuevo["id"]
        )));
        $tabla[0]->titulo = $nuevo["titulo"];
        $tabla[0]->descripcion = $nuevo["titulo"];
        $tabla[0]->nombre = $nuevo["titulo"];
        $tabla[0]->url = $nuevo["url"];
        if ($tabla[0]->save()) {
            $this->db->commit();
            echo json_encode(array(
                "mensaje" => "Cambios Realizados Correctamente",
                "estado" => "Se actualizo la información del articulo: " . $nuevo["titulo"],
                "codigo" => "1"
            ));
        } else {
            $error = "";
            foreach ($tabla->getMessages() as $mensaje) {
                $error = $error . " " . $mensaje . " ";
            }
            echo json_encode(array(
                "mensaje" => "No se Han realizado Cambios",
                "estado" => $error,
                "codigo" => "0"
            ));
            $this->db->rollback($error);
        }
    }

    /**
     * @Route("/listar", methods = {"POST"}, name = "galeria-listar")
     */
    public function listarAction() {
        $galeria = Galeria::find(array("columns" => "id,titulo,descripcion,nombre,date_format(fecha,'%d/%m/%Y') fecha,estado"));
        echo json_encode($galeria->toArray(), JSON_PRETTY_PRINT);
    }

    /**
     * @Route("/imagen/{id:[0-9]+}", methods = {"POST"}, name = "galeria-imagen")
     */
    public function imagenAction($id) {
        $usuario = Galeria::find(array(
                    "conditions" => "id = ?1",
                    "columns" => "id,url",
                    "bind" => array(
                        1 => $id
                    )
        ));
        echo json_encode($usuario->toArray(), JSON_PRETTY_PRINT);
    }

}
