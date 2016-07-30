<?php

/**
 * @RoutePrefix("/refugio/parametros/estados")
 */
class EstadosController extends WebServiceController {

    /**
     * @Route("/", methods = {"POST", "GET"})
     */
    public function indexAction() {
        $this->response->redirect("login")->sendHeaders();
    }

    /**
     * @Route("/listar", methods = {"GET"}, name = "listar-estado")
     */
    public function listarAction() {
        $color = EstadoAnimal::find();
        echo json_encode($color->toArray(), JSON_PRETTY_PRINT);
    }

    /**
     * @Route("/agregar", methods = {"POST"}, name = "agregar-estado")
     */
    public function agregarAction() {
        $json = $this->request->getJsonRawBody(TRUE);
        $tabla = Phalcon\Mvc\Model::cloneResult(new EstadoAnimal(), $json);
        $this->db->begin();
        if ($tabla->create()) {
            $this->db->commit();
            echo json_encode(array(
                "mensaje" => "Registro Creado Correctamente",
                "estado" => "Se ha creado el estado: " . $tabla->descripcion,
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

    /**
     * @Route("/agregar", methods = {"PUT"}, name = "editar-estado")
     */
    public function editarAction() {
        $json = $this->request->getJsonRawBody(TRUE);
        $tabla = Phalcon\Mvc\Model::cloneResult(new EstadoAnimal(), $json);
        $this->db->begin();
        if ($tabla->update()) {
            $this->db->commit();
            echo json_encode(array(
                "mensaje" => "Datos Actualizados Correctamente",
                "estado" => "Se ha modificado el estado: " . $tabla->descripcion,
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

    /**
     * @Route("/borrar", methods = {"DELETE"}, name = "borrar-estado")
     */
    public function borrarAction() {
        $json = $this->request->getJsonRawBody(true);
        $tabla = Phalcon\Mvc\Model::cloneResult(new EstadoAnimal(), $json);
        $this->db->begin();
        if ($tabla->delete()) {
            $this->db->commit();
            echo json_encode(array(
                "mensaje" => "Cambios Realizados Correctamente",
                "estado" => "Se ha borrado el estado: " . $json["descripcion"],
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
