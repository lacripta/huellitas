<?php

use Phalcon\Mvc\Controller;

class ControllerBase extends Controller {

    public function initialize() {
        if (!stripos(baseUri, $this->request->getHeader("HOST"))) {
            $this->response->redirect("login")->sendHeaders();
        }
        if (is_null($this->session->get('key'))) {
            $this->response->redirect("login")->sendHeaders();
        }
    }

}
