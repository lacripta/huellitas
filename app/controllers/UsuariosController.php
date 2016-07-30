<?php

/**
 * @RoutePrefix("/usuarios")
 */
class UsuariosController extends WebServiceController {

    /**
     * @Route("/", methods = {"GET"})
     */
    public function indexAction() {
        $this->response->redirect("login")->sendHeaders();
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
        $usuario = Usuario::find("grupo='$id' and sid='$id2'");
        $this->Ok($usuario);
    }

}
