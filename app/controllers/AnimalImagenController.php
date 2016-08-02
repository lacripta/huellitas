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

}
