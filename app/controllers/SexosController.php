<?php

/**
 * @RoutePrefix("/refugio/parametros/sexos")
 */
class SexosController extends WebServiceController {

    /**
     * @Route("/", methods = {"POST", "GET"})
     */
    public function indexAction() {
        $this->Denegado();
    }

    /**
     * @Route("/listar", methods = {"GET"}, name = "listar-sexos")
     */
    public function listarAction() {
        $sexos = Sexos::find();
        $this->Ok($sexos);
    }

    /**
     * @Route("/buscar/{id:[0-9]+}", methods = {"GET"}, name = "buscar-sexos")
     */
    public function buscarAction($id) {
        $tabla = Sexos::findFirst(["conditions" => "id = ?1", "bind" => [1 => $id]]);
        $this->Ok($tabla);
    }

}
