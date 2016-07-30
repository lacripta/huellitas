<?php

use Phalcon\Mvc\Model\Validator\Email as Email;

class Usuario extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
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
    public $apellido;

    /**
     *
     * @var string
     */
    public $email;

    /**
     *
     * @var string
     */
    public $sid;

    /**
     *
     * @var string
     */
    public $clave;

    /**
     *
     * @var string
     */
    public $creado;

    /**
     *
     * @var string
     */
    public $estado;

    /**
     *
     * @var string
     */
    public $grupo;

    /**
     *
     * @var string
     */
    public $sesion;

    /**
     *
     * @var string
     */
    public $ingreso;

    /**
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->hasMany('sid', 'Novedades', 'autor', array('alias' => 'Novedades'));
        $this->hasMany('sid', 'Personas', 'sid', array('alias' => 'Personas'));
        $this->belongsTo('estado', 'EstadoUsuario', 'id', array('alias' => 'EstadoUsuario'));
        $this->belongsTo('grupo', 'TipoUsuario', 'nombre', array('alias' => 'TipoUsuario'));
    }

    /**
     * Validations and business logic
     *
     * @return boolean
     */
    public function validation() {
        $this->validate(
                new Email(
                array(
            'field' => 'email',
            'required' => true,
                )
                )
        );

        if ($this->validationHasFailed() == true) {
            return false;
        }

        return true;
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Usuario[]
     */
    public static function find($parameters = null) {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Usuario
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
        return 'usuario';
    }

}
