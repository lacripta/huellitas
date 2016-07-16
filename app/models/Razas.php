<?php

class Razas extends \Phalcon\Mvc\Model {

    /**
     *
     * @var string
     */
    public $id;

    /**
     *
     * @var string
     */
    public $id_especie;

    /**
     *
     * @var string
     */
    public $nombre;

    /**
     * Initialize method for model.
     */
    public function initialize() {
        $this->hasMany('id', 'Animal', 'raza', array('alias' => 'Animal'));
        $this->belongsTo('id_especie', 'Especies', 'id', array('alias' => 'Especies'));
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Razas[]
     */
    public static function find($parameters = null) {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Razas
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
        return 'razas';
    }

}
