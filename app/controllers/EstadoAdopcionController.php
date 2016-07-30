<?php

/**
 * @RoutePrefix("/refugio/parametros/adopciones/estados")
 */
class EstadoAdopcionController extends WebServiceController {

    /**
     * @Route("/", methods = {"POST", "GET"})
     */
    public function indexAction() {
        $this->response->redirect("login")->sendHeaders();
    }

    /**
     * @Route("/listar", methods = {"POST"}, name = "listar-estadoAdopcion")
     */
    public function listarAction() {
        $estados = EstadoAdopcion::find(array("order" => "id"));
        $razas = array();
        foreach ($estados as $key) {
            $razas[] = array(
                "id" => $key->id,
                "descripcion" => $key->descripcion,
                "estado_final" => $key->estado_final,
                "estado_borrar" => $key->estado_borrar,
                "desfinal" => $key->EstadoFinal->descripcion,
                "desborrar" => $key->EstadoBorrar->descripcion
            );
        }
        echo json_encode($razas, JSON_PRETTY_PRINT);
    }

    /**
     * @Route("/agregar", methods = {"POST"}, name = "agregar-estadoAdopcion")
     */
    public function agregarAction() {
        $json = $this->request->getJsonRawBody('json');
        $nuevo = json_decode($json->json, true);
        $tabla = Phalcon\Mvc\Model::cloneResult(new EstadoAdopcion(), $nuevo);
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
     * @Route("/borrar", methods = {"POST"}, name = "borrar-estadoAdopcion")
     */
    public function borrarAction() {
        $json = $this->request->getJsonRawBody('json');
        $nuevo = json_decode($json->json, true);
        $tabla = Phalcon\Mvc\Model::cloneResult(new EstadoAdopcion(), $nuevo);
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
