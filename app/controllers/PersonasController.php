<?php

/**
 * @RoutePrefix("/refugio/personas")
 */
class PersonasController extends WebServiceController {

    /**
     * @Route("/", methods = {"POST", "GET"})
     */
    public function indexAction() {
        $this->response->redirect("login")->sendHeaders();
    }

    /**
     * @Route("/ListarPadrino", methods = {"GET"}, name = "listar-personas")
     */
    public function listarPadrinoAction() {
        $usuario = Personas::find(array(
                    "columns" => "id,concat(nombre,' ',apellido) nombre"
        ));
        echo json_encode($usuario->toArray(), JSON_PRETTY_PRINT);
    }

    /**
     * @Route("/listar", methods = {"GET"}, name = "listar-personas")
     */
    public function listarAction() {
        $usuario = Personas::find(array(
                    "columns" => "id,concat(nombre,' ',apellido) nombre",
                    "conditions" => "tipo = 'voluntario'"
        ));
        echo json_encode($usuario->toArray(), JSON_PRETTY_PRINT);
    }

    /**
     * @Route("/agregar", methods = {"POST"}, name = "agregar-personas")
     */
    public function agregarAction() {
        $json = $this->request->getJsonRawBody(true);
        $tabla = Phalcon\Mvc\Model::cloneResult(new Personas(), $json);
        $this->db->begin();
        if ($tabla->create()) {
            $this->db->commit();
            echo json_encode(array(
                "mensaje" => "Registro Creado Correctamente",
                "estado" => "Se ha registrado a: " . $tabla->nombre,
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
     * @Route("/editar", methods = {"PUT"}, name = "agregar-personas")
     */
    public function editarAction() {
        $json = $this->request->getJsonRawBody('json');
        $nuevo = json_decode($json->json, true);
        $tabla = Phalcon\Mvc\Model::cloneResult(new Personas(), $nuevo);
        $this->db->begin();
        if ($tabla->update()) {
            $this->db->commit();
            echo json_encode(array(
                "mensaje" => "Datos Actualizados Correctamente",
                "estado" => "Se han cambiado los datos de: " . $tabla->nombre,
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
     * @Route("/borrar", methods = {"DELETE"}, name = "borrar-personas")
     */
    public function borrarAction() {
        $json = $this->request->getJsonRawBody('json');
        $nuevo = json_decode($json->json, true);
        $tabla = Phalcon\Mvc\Model::cloneResult(new Personas(), $nuevo);
        $this->db->begin();
        if ($tabla->delete()) {
            $this->db->commit();
            echo json_encode(array(
                "mensaje" => "Registro Eliminado Correctamente",
                "estado" => "Se ha borrado a: " . $nuevo["nombre"],
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
