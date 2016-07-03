<?php

class GdComponente extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $componente_id;

    /**
     *
     * @var string
     */
    public $componente_nombre;

    /**
     *
     * @var string
     */
    public $componente_slug;

    /**
     *
     * @var string
     */
    public $componente_enlace;

    /**
     *
     * @var string
     */
    public $componente_archivo;

    /**
     *
     * @var integer
     */
    public $componente_estado;

    /**
     *
     * @var string
     */
    public $componente_url;

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'gd_componente';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return GdComponente[]
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return GdComponente
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}
