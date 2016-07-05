<?php

class EstadoPublicacion extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var double
     */
    public $codigo;

    /**
     *
     * @var string
     */
    public $descripcion;

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'estado_publicacion';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return EstadoPublicacion[]
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return EstadoPublicacion
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}
