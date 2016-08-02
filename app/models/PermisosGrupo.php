<?php

class PermisosGrupo extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var string
     */
    public $tipo_usuario;

    /**
     *
     * @var string
     */
    public $componente;

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
        $this->belongsTo('componente', 'Componente', 'id', array('alias' => 'Componente'));
        $this->belongsTo('estado', 'EstadoAplicacion', 'id', array('alias' => 'EstadoAplicacion'));
        $this->belongsTo('tipo_usuario', 'TipoUsuario', 'nombre', array('alias' => 'TipoUsuario'));
    }

    /**
     * Returns table name mapped in the model.
     *
     * @return string
     */
    public function getSource()
    {
        return 'permisos_grupo';
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return PermisosGrupo[]
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return PermisosGrupo
     */
    public static function findFirst($parameters = null)
    {
        return parent::findFirst($parameters);
    }

}
