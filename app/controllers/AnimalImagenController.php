<?php

/**
 * @RoutePrefix("/refugio/animales/imagen")
 */
class AnimalImagenController extends WebServiceController {

    /**
     * @Route("/", methods = {"POST", "GET"})
     */
    public function indexAction() {
        $this->response->redirect("login")->sendHeaders();
    }

    /**
     * @Route("/listar/{id:[0-9]+}", methods = {"POST"}, name = "listar-imagenes-animal")
     */
    public function listarAction($id) {
        $animal = AnimalImagen::find("id_animal = $id");
        echo json_encode($animal->toArray(), JSON_PRETTY_PRINT);
    }

}
