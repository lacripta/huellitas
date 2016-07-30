<?php

/**
 * @RoutePrefix("/refugio/animales")
 */
class AnimalController extends WebServiceController {

    /**
     * @Route("/", methods = {"POST", "GET"})
     */
    public function indexAction() {
        $this->response->redirect("login")->sendHeaders();
    }

    /**
     * @Route("/ListarAdopcion", methods = {"GET"}, name = "listar-adopciones")
     */
    public function listarAdopcionAction() {
        $salida = [];
        $json = $this->request->getQuery("animal", "int", -1);
        if (($json) > 0) {
            $animal = Animal::findFirst("id = " . $json);
            $razas[] = [
                "id" => $animal->id,
                "nombre" => $animal->nombre . " - " . $animal->Razas->nombre . " - " . $animal->sexo,
                "especie" => $animal->Especies->nombre
            ];
            $salida = array_merge($salida, $razas);
        }
        $animales = EstadoAnimal::find("adoptable = 'S'");
        foreach ($animales as $key) {
            $salida = array_merge($salida, $this->ListaAnimalesPorEstado($key->getAnimal()));
        }
        $this->Ok($salida);
    }

    /**
     * @Route("/listar", methods = {"GET"}, name = "listar-animales")
     */
    public function listarAction() {
        $animal = Animal::find();
        $razas = array();
        foreach ($animal as $key) {
            $razas[] = array(
                "id" => $key->id,
                "nombre" => $key->nombre,
                "edad" => $key->edad,
                "edad_tipo" => $key->edad_tipo,
                "fecha_ingreso" => $key->fecha_ingreso,
                "desrescata" => $key->Personas->nombre . " " . $key->Personas->apellido,
                "rescata" => $key->rescata,
                "fecha_salida" => $key->fecha_salida,
                "desespecie" => $key->Especies->nombre,
                "especie" => $key->especie,
                "descolor" => $key->Colores->nombre,
                "color" => $key->color,
                "desraza" => $key->Razas->nombre,
                "raza" => $key->raza,
                "sexo" => $key->sexo,
                "desestado" => $key->EstadoAnimal->descripcion,
                "estado" => $key->estado
            );
        }
        $this->Ok($razas);
    }

    /**
     * @Route("/agregar", methods = {"POST"}, name = "agregar-animal")
     */
    public function agregarAction() {
        $json = $this->request->getJsonRawBody(true);
        $tabla = Phalcon\Mvc\Model::cloneResult(new Animal(), $json);
        $tabla->fecha_ingreso = $this->Fecha($tabla->fecha_ingreso);
        $tabla->fecha_salida = $this->Fecha($tabla->fecha_salida);
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
     * @Route("/editar", methods = {"PUT"}, name = "editar-animal")
     */
    public function editarAction() {
        $json = $this->request->getJsonRawBody(true);
        $tabla = Phalcon\Mvc\Model::cloneResult(new Animal(), $json);
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
     * @Route("/borrar", methods = {"DELETE"}, name = "borrar-animal")
     */
    public function borrarAction() {
        $json = $this->request->getJsonRawBody(true);
        $tabla = Phalcon\Mvc\Model::cloneResult(new Animal(), $json);
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
