<?php

/**
 * @RoutePrefix("/regiones/municipios")
 */
class AdopcionesController extends WebServiceController {

    /**
     * @Route("/", methods = {"POST", "GET"})
     */
    public function indexAction() {
        $this->response->redirect("login")->sendHeaders();
    }

    /**
     * @Route("/listar", methods = {"POST"}, name = "listar-municipios")
     */
    public function listarAction() {
        $municipios = Municipio::findAll();
        echo json_encode($municipios->toArray(), JSON_PRETTY_PRINT);
    }

    /**
     * @Route("/agregar", methods = {"POST"}, name = "agregar-muncipio")
     */
    public function agregarAction() {
        $json = $this->request->getJsonRawBody('json');
        $nuevo = json_decode($json->json, true);
        $tabla = Phalcon\Mvc\Model::cloneResult(new Municipio(), $nuevo);
        $this->db->begin();
        if ($tabla->update()) {
            $this->db->commit();
            echo json_encode(array(
                "mensaje" => "Cambios Realizados Correctamente",
                "estado" => "Se ha registrado el municipio: " . $tabla->nombre,
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
     * @Route("/borrar", methods = {"POST"}, name = "borrar-municipio")
     */
    public function borrarAction() {
        $json = $this->request->getJsonRawBody('json');
        $nuevo = json_decode($json->json, true);
        $tabla = Phalcon\Mvc\Model::cloneResult(new Municipio(), $nuevo);
        $this->db->begin();
        if ($tabla->delete()) {
            $this->db->commit();
            echo json_encode(array(
                "mensaje" => "Cambios Realizados Correctamente",
                "estado" => "Se ha borrado el municipio: " . $nuevo["nombre"],
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
