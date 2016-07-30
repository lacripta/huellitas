<?php

class Animal extends \Phalcon\Mvc\Model
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
    public $nombre;

    /**
     *
     * @var integer
     */
    public $edad;

    /**
     *
     * @var string
     */
    public $edad_tipo;

    /**
     *
     * @var string
     */
    public $fecha_ingreso;

    /**
     *
     * @var string
     */
    public $rescata;

    /**
     *
     * @var string
     */
    public $fecha_salida;

    /**
     *
     * @var string
     */
    public $especie;

    /**
     *
     * @var string
     */
    public $color;

    /**
     *
     * @var string
     */
    public $raza;

    /**
     *
     * @var string
     */
    public $sexo;

    /**
     *
     * @var string
     */
    public $estado;

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
        $this->hasMany('id', 'Adopciones', 'adoptado', array('alias' => 'Adopciones'));
        $this->hasMany('id', 'AnimalImagen', 'id_animal', array('alias' => 'AnimalImagen'));
        $this->belongsTo('color', 'Colores', 'id', array('alias' => 'Colores'));
        $this->belongsTo('especie', 'Especies', 'id', array('alias' => 'Especies'));
        $this->belongsTo('estado', 'EstadoAnimal', 'id', array('alias' => 'EstadoAnimal'));
        $this->belongsTo('raza', 'Razas', 'id', array('alias' => 'Razas'));
        $this->belongsTo('rescata', 'Personas', 'id', array('alias' => 'Personas'));
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Animal[]
     */
    public static function find($parameters = null) {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Animal
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
        return 'animal';
    }

}
