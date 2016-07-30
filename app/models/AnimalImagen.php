<?php

class AnimalImagen extends \Phalcon\Mvc\Model {

    /**
     *
     * @var string
     */
    public $id;

    /**
     *
     * @var string
     */
    public $id_animal;

    /**
     *
     * @var string
     */
    public $imagen;

    /**
     *
     * @var string
     */
    public $nombre;

    /**
     * Initialize method for model.
     */
    public function initialize() {
        $this->belongsTo('id_animal', 'Animal', 'id', array('alias' => 'Animal'));
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource() {
        return 'animal_imagen';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return AnimalImagen[]
     */
    public static function find($parameters = null) {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return AnimalImagen
     */
    public static function findFirst($parameters = null) {
        return parent::findFirst($parameters);
    }

}
