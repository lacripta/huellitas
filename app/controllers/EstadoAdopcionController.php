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
     * @Route("/listar", methods = {"GET"}, name = "listar-estadoAdopcion")
     */
    public function listarAction() {
        $estados = EstadoAdopcion::find(array("order" => "id"));
        $salida = array();
        foreach ($estados as $key) {
            $salida[] = array(
                "id" => $key->id,
                "descripcion" => $key->descripcion,
                "estado_final" => $key->estado_final,
                "estado_borrar" => $key->estado_borrar,
                "desfinal" => $key->EstadoFinal->descripcion,
                "desborrar" => $key->EstadoBorrar->descripcion
            );
        }
        $this->Ok($salida);
    }

    /**
     * @Route("/agregar", methods = {"POST"}, name = "agregar-estadoAdopcion")
     */
    public function agregarAction() {
        $json = $this->request->getJsonRawBody(true);
        $tabla = Phalcon\Mvc\Model::cloneResult(new EstadoAdopcion(), $json);
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
     * @Route("/editar", methods = {"PUT"}, name = "editar-estadoAdopcion")
     */
    public function editarAction() {
        $json = $this->request->getJsonRawBody(true);
        $tabla = Phalcon\Mvc\Model::cloneResult(new EstadoAdopcion(), $json);
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
     * @Route("/borrar", methods = {"DELETE"}, name = "borrar-estadoAdopcion")
     */
    public function borrarAction() {
        $json = $this->request->getJsonRawBody(TRUE);
        $tabla = Phalcon\Mvc\Model::cloneResult(new EstadoAdopcion(), $json);
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
