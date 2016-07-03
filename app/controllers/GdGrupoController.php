<?php
 
use Phalcon\Mvc\Model\Criteria;
use Phalcon\Paginator\Adapter\Model as Paginator;


class GdGrupoController extends ControllerBase
{
    /**
     * Index action
     */
    public function indexAction()
    {
        $this->persistent->parameters = null;
    }

    /**
     * Searches for gd_grupo
     */
    public function searchAction()
    {
        $numberPage = 1;
        if ($this->request->isPost()) {
            $query = Criteria::fromInput($this->di, 'GdGrupo', $_POST);
            $this->persistent->parameters = $query->getParams();
        } else {
            $numberPage = $this->request->getQuery("page", "int");
        }

        $parameters = $this->persistent->parameters;
        if (!is_array($parameters)) {
            $parameters = array();
        }
        $parameters["order"] = "grupo_id";

        $gd_grupo = GdGrupo::find($parameters);
        if (count($gd_grupo) == 0) {
            $this->flash->notice("The search did not find any gd_grupo");

            $this->dispatcher->forward(array(
                "controller" => "gd_grupo",
                "action" => "index"
            ));

            return;
        }

        $paginator = new Paginator(array(
            'data' => $gd_grupo,
            'limit'=> 10,
            'page' => $numberPage
        ));

        $this->view->page = $paginator->getPaginate();
    }

    /**
     * Displays the creation form
     */
    public function newAction()
    {

    }

    /**
     * Edits a gd_grupo
     *
     * @param string $grupo_id
     */
    public function editAction($grupo_id)
    {
        if (!$this->request->isPost()) {

            $gd_grupo = GdGrupo::findFirstBygrupo_id($grupo_id);
            if (!$gd_grupo) {
                $this->flash->error("gd_grupo was not found");

                $this->dispatcher->forward(array(
                    'controller' => "gd_grupo",
                    'action' => 'index'
                ));

                return;
            }

            $this->view->grupo_id = $gd_grupo->grupo_id;

            $this->tag->setDefault("grupo_id", $gd_grupo->grupo_id);
            $this->tag->setDefault("grupo_nombre", $gd_grupo->grupo_nombre);
            $this->tag->setDefault("grupo_estado", $gd_grupo->grupo_estado);
            $this->tag->setDefault("grupo_fecha", $gd_grupo->grupo_fecha);
            
        }
    }

    /**
     * Creates a new gd_grupo
     */
    public function createAction()
    {
        if (!$this->request->isPost()) {
            $this->dispatcher->forward(array(
                'controller' => "gd_grupo",
                'action' => 'index'
            ));

            return;
        }

        $gd_grupo = new GdGrupo();
        $gd_grupo->grupo_nombre = $this->request->getPost("grupo_nombre");
        $gd_grupo->grupo_estado = $this->request->getPost("grupo_estado");
        $gd_grupo->grupo_fecha = $this->request->getPost("grupo_fecha");
        

        if (!$gd_grupo->save()) {
            foreach ($gd_grupo->getMessages() as $message) {
                $this->flash->error($message);
            }

            $this->dispatcher->forward(array(
                'controller' => "gd_grupo",
                'action' => 'new'
            ));

            return;
        }

        $this->flash->success("gd_grupo was created successfully");

        $this->dispatcher->forward(array(
            'controller' => "gd_grupo",
            'action' => 'index'
        ));
    }

    /**
     * Saves a gd_grupo edited
     *
     */
    public function saveAction()
    {

        if (!$this->request->isPost()) {
            $this->dispatcher->forward(array(
                'controller' => "gd_grupo",
                'action' => 'index'
            ));

            return;
        }

        $grupo_id = $this->request->getPost("grupo_id");
        $gd_grupo = GdGrupo::findFirstBygrupo_id($grupo_id);

        if (!$gd_grupo) {
            $this->flash->error("gd_grupo does not exist " . $grupo_id);

            $this->dispatcher->forward(array(
                'controller' => "gd_grupo",
                'action' => 'index'
            ));

            return;
        }

        $gd_grupo->grupo_nombre = $this->request->getPost("grupo_nombre");
        $gd_grupo->grupo_estado = $this->request->getPost("grupo_estado");
        $gd_grupo->grupo_fecha = $this->request->getPost("grupo_fecha");
        

        if (!$gd_grupo->save()) {

            foreach ($gd_grupo->getMessages() as $message) {
                $this->flash->error($message);
            }

            $this->dispatcher->forward(array(
                'controller' => "gd_grupo",
                'action' => 'edit',
                'params' => array($gd_grupo->grupo_id)
            ));

            return;
        }

        $this->flash->success("gd_grupo was updated successfully");

        $this->dispatcher->forward(array(
            'controller' => "gd_grupo",
            'action' => 'index'
        ));
    }

    /**
     * Deletes a gd_grupo
     *
     * @param string $grupo_id
     */
    public function deleteAction($grupo_id)
    {
        $gd_grupo = GdGrupo::findFirstBygrupo_id($grupo_id);
        if (!$gd_grupo) {
            $this->flash->error("gd_grupo was not found");

            $this->dispatcher->forward(array(
                'controller' => "gd_grupo",
                'action' => 'index'
            ));

            return;
        }

        if (!$gd_grupo->delete()) {

            foreach ($gd_grupo->getMessages() as $message) {
                $this->flash->error($message);
            }

            $this->dispatcher->forward(array(
                'controller' => "gd_grupo",
                'action' => 'search'
            ));

            return;
        }

        $this->flash->success("gd_grupo was deleted successfully");

        $this->dispatcher->forward(array(
            'controller' => "gd_grupo",
            'action' => "index"
        ));
    }

}
