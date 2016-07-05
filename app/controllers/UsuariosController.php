<?php

class UsuariosController extends \Phalcon\Mvc\Controller {

    public function initialize() {
        $this->response->setContentType('application/json; charset=utf-8');
        $this->view->disable();
        if (is_null($this->session->get('key'))) {
            $this->response->redirect("login")->sendHeaders();
        }
    }

    public function indexAction() {
        echo "hola";
    }

    public function datosAction() {
        if (null != ($this->session->get('key'))) {
            $encontrado = array(
                'nombre' => $this->session->get('nombre'),
                'sid' => $this->session->get('sid'),
                'correo' => $this->session->get('correo')
            );

            echo json_encode(array(
                'resultado' => $encontrado,
                'estado' => 1,
                'key' => $this->session->get('key'),
                'sessid' => $this->session->getID()
            ));
        } else {
            $this->session->destroy();
            echo json_encode(array(
                'estado' => 0,
                'key' => null,
                'url' => '/easyapp'
            ));
        }
    }

    public function listarAction($id, $id2) {
        $usuario = Usuario::find("grupo='$id' and sid='$id2'");
        //$usuario = GdComponente::find("usuario_grupo='$id' and usuario_sid='$id2'");
        echo json_encode($usuario->toArray(), JSON_PRETTY_PRINT);
    }

}
