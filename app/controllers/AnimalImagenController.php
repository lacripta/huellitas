<?php

/**
 * @RoutePrefix("/refugio/animales/imagen")
 */
class AnimalImagenController extends WebServiceController {

    /**
     * @Route("/", methods = {"POST", "GET"})
     */
    public function indexAction() {
        $this->Denegado();
    }

    /**
     * @Route("/listar/{id:[0-9]+}", methods = {"POST"}, name = "listar-imagenes-animal")
     */
    public function listarAction($id) {
        $animal = AnimalImagen::find(["conditions" => "id_animal = ?1", "bind" => [1 => $id]]);
        $this->Ok($animal);
    }

    /**
     * @Route("/buscar/{id:[0-9]+}", methods = {"GET"}, name = "listar-imagenes-animal")
     */
    public function buscarAction($id) {
        $animal = AnimalImagen::find(["conditions" => "id_animal = ?1", "bind" => [1 => $id]]);
        $this->Ok($animal);
    }

    /**
     * @Route("/agregar/{id:[0-9]+}", methods = {"POST"}, name = "agregar-imagenes-animal")
     */
    public function agregarAction($id) {
        if ($this->request->hasFiles()) {
            foreach ($this->request->getUploadedFiles() as $file) {
                $tabla = new AnimalImagen();
                $ruta = "/public/img/animales/anim_" . $id . "_" . $this->nombreArchivo($file->getName());
                $file->moveTo(APP_PATH . $ruta);
                $tabla->id_animal = $id;
                $tabla->imagen = "/easyapp" . $ruta;
                $tabla->ruta = APP_PATH . $ruta;
                $tabla->nombre = $file->getName();
                $this->db->begin();
                if ($tabla->create()) {
                    $this->db->commit();
                    $this->Creado();
                } else {
                    $this->db->rollback();
                    $this->SinCambios($tabla->getMessages());
                }
            }
        } else {
            $this->SinCambios("NO SE HAN ENVIADO IMAGENES");
        }
    }

    public function nombreArchivo($file) {
        $salida = mb_ereg_replace("([^\w\s\d\-_~,;\[\]\(\).])", '', $file);
        $salida = mb_ereg_replace("([\.]{2,})", '', $salida);
        return $salida;
    }

    /**
     * @Route("/editar", methods = {"PUT"}, name = "editar-imagenes-animal")
     */
    public function editarAction() {
        $json = $this->request->getJsonRawBody(true);
        $tabla = Phalcon\Mvc\Model::cloneResult(new AnimalImagen(), $json);
        $tabla->fecha_ingreso = $this->Fecha($tabla->fecha_ingreso);
        $tabla->fecha_salida = $this->Fecha($tabla->fecha_salida);
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
     * @Route("/borrar", methods = {"DELETE"}, name = "borrar-imagenes-animal")
     */
    public function borrarAction() {
        $json = $this->request->getJsonRawBody(true);
        $tabla = Phalcon\Mvc\Model::cloneResult(new AnimalImagen(), $json);
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
