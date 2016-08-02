<?php

class Componente extends \Phalcon\Mvc\Model
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
     * @var string
     */
    public $slug;

    /**
     *
     * @var string
     */
    public $enlace;

    /**
     *
     * @var string
     */
    public $archivo;

    /**
     *
     * @var string
     */
    public $estado;

    /**
     *
     * @var string
     */
    public $url;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->hasMany('id', 'PermisosGrupo', 'componente', array('alias' => 'PermisosGrupo'));
        $this->belongsTo('estado', 'EstadoAplicacion', 'id', array('alias' => 'EstadoAplicacion'));
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'componente';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Componente[]
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Componente
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}
