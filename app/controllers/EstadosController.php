<?php

/**
 * @RoutePrefix("/refugio/parametros/estados")
 */
class EstadosController extends ParametrosController {

    /**
     * @Route("/", methods = {"POST", "GET"})
     */
    public function indexAction() {
        $this->response->redirect("login")->sendHeaders();
    }

    /**
     * @Route("/listar", methods = {"POST"}, name = "listar-estado")
     */
    public function listarAction() {
        $color = EstadoAnimal::find();
        echo json_encode($color->toArray(), JSON_PRETTY_PRINT);
    }

    /**
     * @Route("/agregar", methods = {"POST"}, name = "agregar-estado")
     */
    public function agregarAction() {
        $json = $this->request->getJsonRawBody('json');
        $nuevo = json_decode($json->json, true);
        $tabla = Phalcon\Mvc\Model::cloneResult(new EstadoAnimal(), $nuevo);
        $this->db->begin();
        if ($tabla->update()) {
            $this->db->commit();
            echo json_encode(array(
                "mensaje" => "Cambios Realizados Correctamente",
                "estado" => "Se ha creado el estado: " . $tabla->descripcion,
                "codigo" => "1"
            ));
        } else {
            $error = "";
            echo json_encode(array(
                "mensaje" => "No se Han realizado Cambios",
                "estado" => $tabla->getMessages(),
                "codigo" => "0"
            ));
            $this->db->rollback($error);
        }
    }

    /**
     * @Route("/borrar", methods = {"POST"}, name = "borrar-estado")
     */
    public function borrarAction() {
        $json = $this->request->getJsonRawBody('json');
        $nuevo = json_decode($json->json, true);
        $tabla = Phalcon\Mvc\Model::cloneResult(new EstadoAnimal(), $nuevo);
        $this->db->begin();
        if ($tabla->delete()) {
            $this->db->commit();
            echo json_encode(array(
                "mensaje" => "Cambios Realizados Correctamente",
                "estado" => "Se ha borrado el estado: " . $nuevo["descripcion"],
                "codigo" => "1"
            ));
        } else {
            echo json_encode(array(
                "mensaje" => "No se Han realizado Cambios",
                "estado" => $tabla->getMessages(),
                "codigo" => "0"
            ));
            $this->db->rollback();
        }
    }

}
