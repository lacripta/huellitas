<?php

class GaleriaController extends \Phalcon\Mvc\Controller {

    public function initialize() {
        if (is_null($this->session->get('key'))) {
            $this->response->redirect("login")->sendHeaders();
        }
    }

    public function indexAction() {

    }

    public function destacarAction($id) {
        try {
            $this->db->begin();
            $tabla = Novedades::find(array(
                        "conditions" => "id = ?1",
                        "bind" => array(1 => $id)
            ));
            $tabla[0]->destacado = $tabla[0]->destacado == 1 ? 0 : 1;
            if ($tabla[0]->save()) {
                $this->db->commit();
                echo json_encode(array(
                    "mensaje" => "Cambios Realizados Correctamente",
                    "estado" => "Se cambio el estado del articulo",
                    "codigo" => "1"
                ));
            } else {
                $error = "";
                foreach ($tabla->getMessages() as $mensaje) {
                    $error .= $mensaje;
                }
                $this->db->rollback($mensaje);
            }
        } catch (TxFailed $e) {
            echo json_encode(array(
                "mensaje" => "No se Han realizado Cambios",
                "estado" => $e->getRecord(),
                "codigo" => "0"
            ));
        }
    }

    public function publicarAction($id) {
        try {
            $this->db->begin();
            $tabla = Novedades::find(array(
                        "conditions" => "id = ?1",
                        "bind" => array(1 => $id)
            ));
            $tabla[0]->estado = $tabla[0]->estado == 1 ? 0 : 1;
            if ($tabla[0]->save()) {
                $this->db->commit();
                echo json_encode(array(
                    "mensaje" => "Cambios Realizados Correctamente",
                    "estado" => "Se cambio el estado del articulo",
                    "codigo" => "1"
                ));
            } else {
                $error = "";
                foreach ($tabla->getMessages() as $mensaje) {
                    $error .= $mensaje;
                }
                $this->db->rollback($mensaje);
            }
        } catch (TxFailed $e) {
            echo json_encode(array(
                "mensaje" => "No se Han realizado Cambios",
                "estado" => $e->getRecord(),
                "codigo" => "0"
            ));
        }
    }

    public function borrarAction() {
        $json = $this->request->getJsonRawBody('json');
        $nuevo = json_decode($json->json, true);
        try {
            $txManager = new TxManager();
            $transaction = $txManager->get();
            $tabla = Phalcon\Mvc\Model::cloneResult(new Novedades(), $nuevo);
            $tabla->setTransaction($transaction);
            $titulo = $tabla->titulo;
            if ($tabla->delete()) {
                $transaction->commit();
                echo json_encode(array(
                    "mensaje" => "Cambios Realizados Correctamente",
                    "estado" => "Se ha borrado del articulo: " . $titulo,
                    "codigo" => "1"
                ));
            } else {
                $error = "";
                foreach ($tabla->getMessages() as $mensaje) {
                    $error .= $mensaje;
                }
                $transaction->rollback($error);
            }
        } catch (TxFailed $e) {
            echo json_encode(array(
                "mensaje" => "No se Han realizado Cambios",
                "estado" => $e->getRecord(),
                "codigo" => "0"
            ));
        }
    }

    public function agregarAction() {
        $json = $this->request->getJsonRawBody('json');
        $nuevo = json_decode($json->json, true);
        try {
            $txManager = new TxManager();
            $transaction = $txManager->get();
            switch ($nuevo["accion"]) {
                case "nuevo":
                    $tabla = Phalcon\Mvc\Model::cloneResult(new Novedades(), $nuevo);
                    $tabla->autor = $this->session->get('sid');
                    $tabla->setTransaction($transaction);
                    //echo print_r($tabla->toArray());
                    if ($tabla->update()) {
                        $transaction->commit();
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
                        $transaction->rollback($error);
                    }
                    break;
                case "editar":
                    $tabla = Phalcon\Mvc\Model::cloneResult(new Novedades(), $nuevo);
                    $tabla->setTransaction($transaction);
                    if ($tabla->update($nuevo, array("resumen", "titulo", "contenido", "imagen_url"))) {
                        $transaction->commit();
                        echo json_encode(array(
                            "mensaje" => "Cambios Realizados Correctamente",
                            "estado" => "Se actualizo la información del articulo: " . $tabla->titulo,
                            "codigo" => "1"
                        ));
                    } else {
                        $error = "";
                        foreach ($tabla->getMessages() as $mensaje) {
                            $error .= $mensaje;
                        }
                        $transaction->rollback($error);
                    }
                    break;
            }
        } catch (TxFailed $e) {
            echo json_encode(array(
                "mensaje" => "No se Han realizado Cambios",
                "estado" => $e->getRecord(),
                "codigo" => "0"
            ));
        }
    }

    public function listarAction() {
        $galeria = Galeria::find(array("columns" => "id,titulo,descripcion,nombre,date_format(fecha,'%d/%m/%Y') fecha,estado"));
        echo json_encode($galeria->toArray(), JSON_PRETTY_PRINT);
    }

    public function imagenAction($id) {
        $usuario = Novedades::find(array(
                    "conditions" => "id = ?1",
                    "columns" => "id,imagen_url",
                    "bind" => array(
                        1 => $id
                    )
        ));
        echo json_encode($usuario->toArray(), JSON_PRETTY_PRINT);
    }

}
