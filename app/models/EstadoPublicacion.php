<?php

class EstadoPublicacion extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var string
     */
    public $codigo;

    /**
     *
     * @var string
     */
    public $descripcion;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->hasMany('codigo', 'Galeria', 'estado', array('alias' => 'Galeria'));
        $this->hasMany('codigo', 'Novedades', 'estado', array('alias' => 'Novedades'));
        $this->hasMany('codigo', 'Producto', 'producto_estado', array('alias' => 'Producto'));
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

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'estado_publicacion';
    }

}
