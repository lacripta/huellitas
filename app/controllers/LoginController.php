<?php

class LoginController extends \Phalcon\Mvc\Controller {

    public function indexAction() {

    }

    public function authAction() {
        if (is_null($this->session->get('key'))) {
            $this->response->redirect("")->sendHeaders();
        }
        $post = $this->request->getJsonRawBody();
        $usuario = json_decode($post->json);
        $encontrado = GdUsuario::find(array(
                    'conditions' => 'usuario_sid = ?1 and usuario_clave = ?2',
                    'bind' => array(
                        1 => $usuario->usuario_sid,
                        2 => $usuario->usuario_clave
                    )
        ));
        if ($encontrado) {
            if ($this->security->checkHash($usuario->usuario_clave, $this->security->hash($usuario->usuario_clave))) {
                $this->session->set('key', $this->security->hash($usuario->usuario_clave));
                echo (json_encode(array(
                    'resultado' => $encontrado[0],
                    'estado' => 1,
                    'key' => $this->session->get('key'),
                    'url' => '/easyapp'
                )));
            }
        } else {
            $this->security->hash(rand());
            echo (json_encode(array(
                'resultado' => 'No se encontro el usuario',
                'estado' => 0,
                'url' => '/login'
            )));
        }
    }

    public function salirAction() {
        $this->session->destroy();
        $this->response->redirect("")->sendHeaders();
    }

}
