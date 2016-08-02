<?php

/**
 * @RoutePrefix("/refugio/adopciones")
 */
class AdopcionesController extends WebServiceController {

    /**
     * @Route("/", methods = {"POST", "GET"})
     */
    public function indexAction() {
        $this->Denegado();
    }

    /**
     * @Route("/listar", methods = {"GET"}, name = "listar-adopciones")
     */
    public function listarAction() {
        $animal = Adopciones::find();
        $razas = array();
        foreach ($animal as $key) {
            $razas[] = array(
                "id" => $key->id,
                "fecha" => $key->fecha,
                "adoptado" => $key->adoptado,
                "adopta" => $key->adopta,
                "estado" => $key->estado,
                "estado_adopcion" => $key->EstadoAdopcion->descripcion,
                "nombre_animal" => $key->Animal->nombre,
                "especie_animal" => $key->Animal->Especies->nombre,
                "raza_animal" => $key->Animal->Razas->nombre,
                "estado_animal_id" => $key->Animal->EstadoAnimal->id,
                "estado_animal" => $key->Animal->EstadoAnimal->descripcion,
                "adopto" => $key->Personas->nombre . " " . $key->Personas->apellido
            );
        }
        $this->Ok($razas);
    }

    /**
     * @Route("/agregar", methods = {"POST"}, name = "agregar-adopciones")
     */
    public function agregarAction() {
        $json = $this->request->getJsonRawBody(true);
        $adopcion = Phalcon\Mvc\Model::cloneResult(new Adopciones(), $json);
        $adopcion->fecha = $this->Fecha($adopcion->fecha);
        $adopcion->Animal->estado = $adopcion->EstadoAdopcion->estado_final;
        $this->db->begin();
        if ($adopcion->create()) {
            $this->db->commit();
            $this->Creado();
        } else {
            $this->db->rollback();
            $this->SinCambios($adopcion->getMessages());
        }
    }

    /**
     * @Route("/editar", methods = {"PUT"}, name = "editar-adopciones")
     */
    public function editarAction() {
        $json = $this->request->getJsonRawBody(true);
        $adopcion = Phalcon\Mvc\Model::cloneResult(new Adopciones(), $json);
        $viejo = Adopciones::findFirst("id = " . $adopcion->id);
        if ($viejo->adoptado != $adopcion->adoptado) {
            $viejo->Animal->estado = $adopcion->EstadoAdopcion->estado_borrar;
            $viejo->update();
        }
        $adopcion->fecha = $this->Fecha($adopcion->fecha);
        $adopcion->Animal->estado = $adopcion->EstadoAdopcion->estado_final;
        $this->db->begin();
        if ($adopcion->update()) {
            $this->db->commit();
            $this->Editado();
        } else {
            $this->db->rollback();
            $this->SinCambios($adopcion->getMessages());
        }
    }

    /**
     * @Route("/borrar", methods = {"DELETE"}, name = "borrar-adopciones")
     */
    public function borrarAction() {
        $json = $this->request->getJsonRawBody(true);
        $adopcion = Phalcon\Mvc\Model::cloneResult(new Adopciones(), $json);
        $animal = Animal::findFirst("id = " . $adopcion->adoptado);
        $animal->estado = $adopcion->EstadoAdopcion->estado_borrar;
        $animal->update();
        $this->db->begin();
        if ($adopcion->delete()) {
            $this->db->commit();
            $this->Borrado();
        } else {
            $this->db->rollback();
            $this->SinCambios($adopcion->getMessages());
        }
    }

}
