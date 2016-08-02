<?php

/**
 * @RoutePrefix("/refugio/personas")
 */
class PersonasController extends WebServiceController {

    /**
     * @Route("/", methods = {"POST", "GET"})
     */
    public function indexAction() {
        $this->Denegado();
    }

    /**
     * @Route("/ListarPadrino", methods = {"GET"}, name = "listar-personas")
     */
    public function listarPadrinoAction() {
        $usuario = Personas::find(array(
                    "columns" => "id,concat(nombre,' ',apellido) nombre"
        ));
        $this->Ok($usuario);
    }

    /**
     * @Route("/listar", methods = {"GET"}, name = "listar-personas")
     */
    public function listarAction() {
        $usuario = Personas::find();
        $this->Ok($usuario);
    }

    /**
     * @Route("/buscar/{id:[0-9]+}", methods = {"GET"}, name = "buscar-personas")
     */
    public function buscarAction($id) {
        $tabla = Personas::findFirst(["conditions" => "id = ?1", "bind" => [1 => $id]]);
        $this->Ok($tabla);
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
            $this->Creado();
        } else {
            $this->db->rollback();
            $this->SinCambios($tabla->getMessages());
        }
    }

    /**
     * @Route("/editar", methods = {"PUT"}, name = "agregar-personas")
     */
    public function editarAction() {
        $json = $this->request->getJsonRawBody(true);
        $tabla = Phalcon\Mvc\Model::cloneResult(new Personas(), $json);
        $this->db->begin();
        if ($tabla->update()) {
            $this->db->commit();
            $this->Editado();
        } else {
            $this->db->rollback();
            $this->SinCambios($tabla->getMessages());
        }
    }

    /**
     * @Route("/borrar", methods = {"DELETE"}, name = "borrar-personas")
     */
    public function borrarAction() {
        $json = $this->request->getJsonRawBody(true);
        $tabla = Phalcon\Mvc\Model::cloneResult(new Personas(), $json);
        $this->db->begin();
        if ($tabla->delete()) {
            $this->db->commit();
            $this->Borrado();
        } else {
            $this->db->rollback();
            $this->SinCambios($tabla->getMessages());
        }
    }

}
