<?php

class Adopciones extends \Phalcon\Mvc\Model
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
    public $fecha;

    /**
     *
     * @var string
     */
    public $adopta;

    /**
     *
     * @var string
     */
    public $adoptado;

    /**
     *
     * @var string
     */
    public $estado;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->belongsTo('adoptado', 'Animal', 'id', array('alias' => 'Animal'));
        $this->belongsTo('estado', 'EstadoAdopcion', 'id', array('alias' => 'EstadoAdopcion'));
        $this->belongsTo('adopta', 'Personas', 'id', array('alias' => 'Personas'));
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Adopciones[]
     */
    public static function find($parameters = null) {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Adopciones
     */
    public static function findFirst($parameters = null) {
        return parent::findFirst($parameters);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'adopciones';
    }

}
