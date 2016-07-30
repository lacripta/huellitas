<?php

use Phalcon\Mvc\Model\Transaction\Manager as TxManager;
use Phalcon\Mvc\Model\Transaction\Failed as TxFailed;

/**
 * @RoutePrefix("/novedades")
 */
class NovedadesController extends WebServiceController {

    /**
     * @Route("/", methods = {"GET"})
     */
    public function indexAction() {
        $this->response->redirect("login")->sendHeaders();
    }

    /**
     * @Route("/destacar/{id:[0-9]+}", methods = {"POST"}, name = "novedades-destacar")
     */
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
                    $error = $error . " " . $mensaje . " ";
                }
                $this->db->rollback($mensaje);
            }
        } catch (TxFailed $e) {
            echo json_encode(array(
                "mensaje" => "No se Han realizado Cambios",
                "estado" => $e->getMessage(),
                "codigo" => "0"
            ));
        }
    }

    /**
     * @Route("/publicar/{id:[0-9]+}", methods = {"POST"}, name = "novedades-publicar")
     */
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
                    $error = $error . " " . $mensaje . " ";
                }
                $this->db->rollback($mensaje);
            }
        } catch (TxFailed $e) {
            echo json_encode(array(
                "mensaje" => "No se Han realizado Cambios",
                "estado" => $e->getMessage(),
                "codigo" => "0"
            ));
        }
    }

    /**
     * @Route("/publicar", methods = {"POST"}, name = "novedades-borrar")
     */
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
                    $error = $error . " " . $mensaje . " ";
                }
                $transaction->rollback($error);
            }
        } catch (TxFailed $e) {
            echo json_encode(array(
                "mensaje" => "No se Han realizado Cambios",
                "estado" => $e->getMessage(),
                "codigo" => "0"
            ));
        }
    }

    /**
     * @Route("/agregar", methods = {"POST"}, name = "novedades-agregar")
     */
    public function agregarAction() {
        $json = $this->request->getJsonRawBody('json');
        $nuevo = json_decode($json->json, true);
        try {
            switch ($nuevo["accion"]) {
                case "nuevo":
                    $txManager = new TxManager();
                    $transaction = $txManager->get();
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
                            $error = $error . " " . $mensaje . " ";
                        }
                        $transaction->rollback($error);
                    }
                    break;
                case "editar":
                    $this->db->begin();
                    $tabla = Novedades::find(array(
                                "conditions" => "id = ?1",
                                "bind" => array(
                                    1 => $nuevo["id"]
                    )));
                    $tabla[0]->titulo = $nuevo["titulo"];
                    $tabla[0]->resumen = $nuevo["resumen"];
                    $tabla[0]->contenido = $nuevo["contenido"];
                    $tabla[0]->imagen_url = $nuevo["imagen_url"];
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
                        $this->db->rollback($error);
                    }
                    break;
            }
        } catch (TxFailed $e) {
            echo json_encode(array(
                "mensaje" => "No se Han realizado Cambios",
                "estado" => $e->getMessage(),
                "codigo" => "0"
            ));
        }
    }

    /**
     * @Route("/listar", methods = {"POST"}, name = "novedades-listar")
     */
    public function listarAction() {
        $usuario = Articulos::find(array(
                    "conditions" => "autor = ?1 or 'admin' = ?2",
                    "bind" => array(
                        1 => $this->session->get('sid'),
                        2 => $this->session->get('grupo')
                    )
        ));
        echo json_encode($usuario->toArray(), JSON_PRETTY_PRINT);
    }

    /**
     * @Route("/imagen/{id:[0-9]+}", methods = {"POST"}, name = "novedades-imagen")
     */
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
