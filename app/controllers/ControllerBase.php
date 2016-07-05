<?php

use Phalcon\Mvc\Controller;

class ControllerBase extends Controller {

    public function initialize() {
        if (is_null($this->session->get('key'))) {
            $this->response->redirect("login")->sendHeaders();
        }
    }

}
