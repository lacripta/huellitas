<?php

class Articulos extends \Phalcon\Mvc\Model
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
    public $fecha;

    /**
     *
     * @var integer
     */
    public $estado;

    /**
     *
     * @var string
     */
    public $autor;

    /**
     *
     * @var string
     */
    public $autor_n;

    /**
     *
     * @var string
     */
    public $estado_t;

    /**
     *
     * @var string
     */
    public $dias;

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Articulos[]
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Articulos
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
        return 'articulos';
    }

}
