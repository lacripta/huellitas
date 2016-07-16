<?php

class Novedades extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var string
     */
    public $id;

    /**
     *
     * @var string
     */
    public $titulo;

    /**
     *
     * @var string
     */
    public $resumen;

    /**
     *
     * @var string
     */
    public $contenido;

    /**
     *
     * @var string
     */
    public $imagen_url;

    /**
     *
     * @var string
     */
    public $fecha;

    /**
     *
     * @var string
     */
    public $autor;

    /**
     *
     * @var string
     */
    public $estado;

    /**
     *
     * @var integer
     */
    public $destacado;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->belongsTo('autor', 'Usuario', 'sid', array('alias' => 'Usuario'));
        $this->belongsTo('estado', 'EstadoPublicacion', 'codigo', array('alias' => 'EstadoPublicacion'));
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Novedades[]
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Novedades
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
        return 'novedades';
    }

}
