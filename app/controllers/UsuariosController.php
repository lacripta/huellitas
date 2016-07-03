<?php

class UsuariosController extends \Phalcon\Mvc\Controller {

    public function initialize() {
        $this->response->setContentType('application/json; charset=utf-8');
        $this->view->disable();
    }

    public function indexAction() {
        echo "hola";
    }

    public function listarAction($id, $id2) {
        $usuario = GdUsuario::find("usuario_grupo='$id' and usuario_sid='$id2'");
        //$usuario = GdComponente::find("usuario_grupo='$id' and usuario_sid='$id2'");
        echo json_encode($usuario->toArray(), JSON_PRETTY_PRINT);
    }

}
