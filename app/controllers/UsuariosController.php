<?php

/**
 * @RoutePrefix("/usuarios")
 */
class UsuariosController extends WebServiceController {

    /**
     * @Route("/", methods = {"GET"})
     */
    public function indexAction() {
        $this->Denegado();
    }

    /**
     * @Route("/datos", methods = {"POST"}, name = "usuarios-datos")
     */
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

    /**
     * @Route("/listar", methods = {"POST"}, name = "usuarios-datos")
     */
    public function listarAction($id, $id2) {
        $usuario = Usuario::find(["conditions" => "grupo=?1 and sid=?2", "binds" => [1 => $id, 2 => $id2]]);
        $this->Ok($usuario);
    }

    /**
     * @Route("/buscar/{sid:[a-zA-Z\_]+}", methods = {"GET"}, name = "buscar-usuarios")
     */
    public function buscarAction($sid) {
        $tabla = Usuario::findFirst(["conditions" => "sid =?1", "bind" => [1 => $sid]]);
        $this->Ok($tabla);
    }

}
