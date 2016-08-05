<?php

/**
 * @RoutePrefix("/novedades")
 */
class NovedadesController extends WebServiceController {

    /**
     * @Route("/", methods = {"GET"})
     */
    public function indexAction() {
        $this->Denegado();
    }

    /**
     * @Route("/destacar", methods = {"PUT"}, name = "novedades-destacar")
     */
    public function destacarAction() {
        $json = $this->request->getJsonRawBody(true);
        $tabla = Phalcon\Mvc\Model::cloneResult(new Novedades(), $json);
        $this->db->begin();
        $tabla->destacado = $tabla->destacado == 1 ? 0 : 1;
        if ($tabla->update()) {
            $this->db->commit();
            $this->Editado();
        } else {
            $this->db->rollback();
            $this->SinCambios($tabla->getMessages());
        }
    }

    /**
     * @Route("/publicar", methods = {"PUT"}, name = "novedades-publicar")
     */
    public function publicarAction() {
        $json = $this->request->getJsonRawBody(true);
        $tabla = Phalcon\Mvc\Model::cloneResult(new Novedades(), $json);
        $this->db->begin();
        $tabla->estado = $tabla->estado == 1 ? 0 : 1;
        if ($tabla->update()) {
            $this->db->commit();
            $this->Editado();
        } else {
            $this->db->rollback();
            $this->SinCambios($tabla->getMessages());
        }
    }

    /**
     * @Route("/borrar", methods = {"DELETE"}, name = "novedades-borrar")
     */
    public function borrarAction() {
        $json = $this->request->getJsonRawBody(true);
        $tabla = Phalcon\Mvc\Model::cloneResult(new Novedades(), $json);
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
     * @Route("/agregar", methods = {"POST"}, name = "novedades-agregar")
     */
    public function agregarAction() {
        $json = $this->request->getJsonRawBody(true);
        $tabla = Phalcon\Mvc\Model::cloneResult(new Novedades(), $json);
        $tabla->autor = $this->session->get('sid');
        $this->db->begin();
        if ($tabla->create()) {
            $this->db->commit();
            $this->Creado();
        } else {
            $this->SinCambios($tabla->getMessages());
        }
    }

    /**
     * @Route("/editar", methods = {"PUT"}, name = "editar-agregar")
     */
    public function editarAction() {
        $json = $this->request->getJsonRawBody(true);
        $tabla = Phalcon\Mvc\Model::cloneResult(new Novedades(), $json);
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
     * @Route("/listar", methods = {"GET"}, name = "novedades-listar")
     */
    public function listarAction() {
        $articulo = Novedades::find(array(
                    "conditions" => "autor = ?1 or 'admin' = ?2",
                    "bind" => [
                        1 => $this->session->get('sid'),
                        2 => $this->session->get('grupo')
                    ]
        ));
        $salida = [];
        foreach ($articulo as $key) {
            $salida[] = [
                "autor" => $key->autor,
                "autor_n" => $key->Usuario->nombre . $key->Usuario->apellido,
                "id" => $key->id,
                "contenido" => $key->contenido,
                "titulo" => $key->titulo,
                "resumen" => $key->resumen,
                "destacado" => $key->destacado,
                "estado" => $key->estado,
                "estado_n" => $key->EstadoPublicacion->descripcion,
                "imagen_url" => $key->imagen_url,
                "fecha" => $key->fecha
            ];
        }
        $this->Ok($salida);
    }

    /**
     * @Route("/buscar/{id:[0-9]+}", methods = {"GET"}, name = "buscar-novedades")
     */
    public function buscarAction($id) {
        $tabla = Novedades::findFirst(["conditions" => "id = ?1", "bind" => [1 => $id]]);
        $this->Ok($tabla);
    }

    /**
     * @Route("/imagen/{id:[0-9]+}", methods = {"GET"}, name = "novedades-imagen")
     */
    public function imagenAction($id) {
        $usuario = Novedades::findFirst(array(
                    "conditions" => "id = ?1",
                    "columns" => "id,imagen_url",
                    "bind" => array(
                        1 => $id
                    )
        ));
        $this->Ok($usuario);
    }

}
