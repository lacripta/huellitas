<?php

/**
 * @RoutePrefix("/refugio/parametros/sexos")
 */
class SexosController extends WebServiceController {

    /**
     * @Route("/", methods = {"POST", "GET"})
     */
    public function indexAction() {
        $this->response->redirect("login")->sendHeaders();
    }

    /**
     * @Route("/listar", methods = {"GET"}, name = "listar-sexos")
     */
    public function listarAction() {
        $sexos = Sexos::find();
        $this->Ok($sexos);
    }

}
