<?php

class EstadoAdopcion extends \Phalcon\Mvc\Model {

    /**
     *
     * @var string
     */
    public $id;

    /**
     *
     * @var string
     */
    public $descripcion;

    /**
     *
     * @var string
     */
    public $estado_final;

    /**
     *
     * @var string
     */
    public $estado_borrar;

    /**
     * Initialize method for model.
     */
    public function initialize() {
        $this->hasMany('id', 'Adopciones', 'estado', array('alias' => 'Adopciones'));
        $this->belongsTo('estado_final', 'EstadoAnimal', 'id', array('alias' => 'EstadoFinal'));
        $this->belongsTo('estado_borrar', 'EstadoAnimal', 'id', array('alias' => 'EstadoBorrar'));
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return EstadoAdopcion[]
     */
    public static function find($parameters = null) {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return EstadoAdopcion
     */
    public static function findFirst($parameters = null) {
        return parent::findFirst($parameters);
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource() {
        return 'estado_adopcion';
    }

}
