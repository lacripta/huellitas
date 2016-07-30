<?php

/**
 * @RoutePrefix("/login")
 */
class LoginController extends Phalcon\Mvc\Controller {

    /**
     * @Route("/", methods = {"GET"})
     */
    public function indexAction() {

    }

    /**
     * @Route("/auth", methods = {"POST"})
     */
    public function authAction() {

        $post = $this->request->getJsonRawBody();
        $usuario = json_decode($post->json);
        $encontrado = Usuario::find(array(
                    'conditions' => 'sid = ?1 and clave = ?2',
                    'bind' => array(
                        1 => $usuario->usuario_sid,
                        2 => $usuario->usuario_clave
                    )
        ));
        if (count($encontrado->toArray()) == 1) {
            if ($this->security->checkHash($usuario->usuario_clave, $this->security->hash($encontrado[0]->clave))) {
                $this->session->set('key', $this->security->hash($this->session->getID()));
                $this->session->set('nombre', $encontrado[0]->nombre . " " . $encontrado[0]->apellido);
                $this->session->set('correo', $encontrado[0]->email);
                $this->session->set('sid', $encontrado[0]->sid);
                $this->session->set('grupo', $encontrado[0]->grupo);
                $encontrado[0]->sesion = $this->security->hash($this->session->getID());
                $now = new DateTime("now", new DateTimeZone('America/Bogota'));
                $encontrado[0]->ingreso = $now->format('Y-m-d H:i:s');
                $encontrado[0]->save();
                echo (json_encode(array(
                    'resultado' => $encontrado[0]->nombre . ' ' . $encontrado[0]->apellido,
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

    /**
     * @Route("/salir", methods = {"GET","POST"})
     */
    public function salirAction() {
        $this->session->destroy();
        $this->response->redirect("")->sendHeaders();
    }

}
