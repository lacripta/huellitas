<?php

/**
 * @RoutePrefix("/galeria")
 */
class GaleriaController extends WebServiceController {

    /**
     * @Route("/", methods = {"GET"})
     */
    public function indexAction() {
        $this->Denegado();
    }

    /**
     * @Route("/borrar", methods = {"DELETE"}, name = "galeria-borrar")
     */
    public function borrarAction() {
        $json = $this->request->getJsonRawBody(true);
        $tabla = Phalcon\Mvc\Model::cloneResult(new Galeria(), $json);
        $this->db->begin();
        if ($tabla->delete()) {
            $this->db->commit();
            $this->Borrado();
        } else {
            $this->db->rollback();
            $this->SinCambios($tabla->getMessages());
        }
    }

    /**
     * @Route("/agregar", methods = {"POST"}, name = "galeria-agregar")
     */
    public function agregarAction() {
        $json = $this->request->getJsonRawBody(true);
        $tabla = Phalcon\Mvc\Model::cloneResult(new Galeria(), $json);
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
     * @Route("/editar", methods = {"PUT"}, name = "galeria-editar")
     */
    public function editarAction() {
        $json = $this->request->getJsonRawBody(true);
        $tabla = Phalcon\Mvc\Model::cloneResult(new Galeria(), $json);
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
     * @Route("/listar", methods = {"GET"}, name = "galeria-listar")
     */
    public function listarAction() {
        $galeria = Galeria::find();
        $salida = [];
        foreach ($galeria as $key) {
            $salida[] = [
                "id" => $key->id,
                "titulo" => $key->titulo,
                "descripcion" => $key->descripcion,
                "nombre" => $key->nombre,
                "fecha" => $key->fecha,
                "estado" => $key->estado,
                "estado_n" => $key->EstadoPublicacion->descripcion
            ];
        }
        $this->Ok($salida);
    }

    /**
     * @Route("/imagen/{id:[0-9]+}", methods = {"GET"}, name = "galeria-imagen")
     */
    public function imagenAction($id) {
        $imagen = Galeria::findFirst(array(
                    "conditions" => "id = ?1",
                    "columns" => "id,url",
                    "bind" => array(
                        1 => $id
                    )
        ));
        $this->Ok($imagen);
    }

}
