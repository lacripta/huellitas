<?php

class IndexController extends ControllerBase {
    /* public function initialize() {
      $this->response->setContentType('application/json; charset=utf-8');
      $this->view->disable();
      } */

    public function indexAction() {
        if (is_null($this->session->get('key'))) {
            $this->response->redirect("login")->sendHeaders();
        }
        echo $this->session->get('key');
    }

}
