<?php

/**
 * @RoutePrefix("/configuracion/usuarios/tipos")
 */
class TipoUsuarioController extends WebServiceController {

    /**
     * @Route("/", methods = {"POST", "GET"})
     */
    public function indexAction() {
        $this->Denegado();
    }

    /**
     * @Route("/listar", methods = {"GET"}, name = "listar-tiposUsuarios")
     */
    public function listarAction() {
        $color = TipoUsuario::find();
        $this->Ok($color);
    }

    /**
     * @Route("/buscar/{id:[0-9]+}", methods = {"GET"}, name = "buscar-tiposUsuarios")
     */
    public function buscarAction($id) {
        $tabla = TipoUsuario::findFirst(["conditions" => "id = ?1", "bind" => [1 => $id]]);
        $this->Ok($tabla);
    }

    /**
     * @Route("/agregar", methods = {"POST"}, name = "agregar-tiposUsuarios")
     */
    public function agregarAction() {
        $json = $this->request->getJsonRawBody(true);
        $tabla = Phalcon\Mvc\Model::cloneResult(new TipoUsuario(), $json);
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
     * @Route("/editar", methods = {"PUT"}, name = "editar-tiposUsuarios")
     */
    public function editarAction() {
        $json = $this->request->getJsonRawBody(true);
        $tabla = Phalcon\Mvc\Model::cloneResult(new TipoUsuario(), $json);
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
     * @Route("/borrar", methods = {"DELETE"}, name = "borrar-tiposUsuarios")
     */
    public function borrarAction() {
        $json = $this->request->getJsonRawBody(true);
        $tabla = Phalcon\Mvc\Model::cloneResult(new TipoUsuario(), $json);
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
