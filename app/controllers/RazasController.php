<?php

/**
 * @RoutePrefix("/refugio/parametros/razas")
 */
class RazasController extends WebServiceController {

    /**
     * @Route("/", methods = {"POST", "GET"})
     */
    public function indexAction() {
        $this->response->redirect("login")->sendHeaders();
    }

    /**
     * @Route("/listar", methods = {"GET"}, name = "listar-razas")
     */
    public function listarAction() {
        $raza = Razas::find();
        $razas = array();
        foreach ($raza as $key) {
            $razas[] = array(
                "id" => $key->id,
                "id_especie" => $key->id_especie,
                "nombre" => $key->nombre,
                "especie" => $key->Especies->nombre
            );
        }
        $this->Ok($razas);
    }

    /**
     * @Route("/buscar/{id:[0-9]+}", methods = {"POST"}, name = "listar-razas")
     */
    public function buscarAction($id) {
        $raza = Razas::findFirst("id_especie = $id");
        $this->Ok($raza);
    }

    /**
     * @Route("/agregar", methods = {"POST"}, name = "agregar-razas")
     */
    public function agregarAction() {
        $json = $this->request->getJsonRawBody(true);
        $tabla = Phalcon\Mvc\Model::cloneResult(new Razas(), $json);
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
     * @Route("/editar", methods = {"PUT"}, name = "editar-razas")
     */
    public function editarAction() {
        $json = $this->request->getJsonRawBody(true);
        $tabla = Phalcon\Mvc\Model::cloneResult(new Razas(), $json);
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
     * @Route("/borrar", methods = {"DELETE"}, name = "borrar-razas")
     */
    public function borrarAction() {
        $json = $this->request->getJsonRawBody(true);
        $tabla = Phalcon\Mvc\Model::cloneResult(new Razas(), $json);
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
