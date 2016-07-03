<?php

class GdGrupo extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $grupo_id;

    /**
     *
     * @var string
     */
    public $grupo_nombre;

    /**
     *
     * @var integer
     */
    public $grupo_estado;

    /**
     *
     * @var string
     */
    public $grupo_fecha;

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'gd_grupo';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return GdGrupo[]
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return GdGrupo
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}
