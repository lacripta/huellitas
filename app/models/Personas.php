<?php

use Phalcon\Mvc\Model\Validator\Email as Email;

class Personas extends \Phalcon\Mvc\Model
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
    public $apellido;

    /**
     *
     * @var string
     */
    public $cedula;

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
    public $tipo;

    /**
     *
     * @var integer
     */
    public $estado;

    /**
     *
     * @var string
     */
    public $telefono;

    /**
     *
     * @var string
     */
    public $celular;

    /**
     *
     * @var string
     */
    public $direccion;

    /**
     *
     * @var string
     */
    public $departamento;

    /**
     *
     * @var string
     */
    public $municipio;

    /**
     *
     * @var string
     */
    public $area;

    /**
     *
     * @var string
     */
    public $poblacion;

    /**
     * Validations and business logic
     *
     * @return boolean
     */
    public function validation()
    {
        $this->validate(
            new Email(
                array(
                    'field'    => 'email',
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
     * Initialize method for model.
     */
    public function initialize()
    {
        $this->hasMany('id', 'Animal', 'rescata', array('alias' => 'Animal'));
        $this->belongsTo('departamento', 'Departamento', 'id', array('alias' => 'Departamento'));
        $this->belongsTo('municipio', 'Municipio', 'id', array('alias' => 'Municipio'));
        $this->belongsTo('poblacion', 'Poblacion', 'id', array('alias' => 'Poblacion'));
        $this->belongsTo('tipo', 'TipoUsuario', 'nombre', array('alias' => 'TipoUsuario'));
        $this->belongsTo('sid', 'Usuario', 'sid', array('alias' => 'Usuario'));
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return Personas[]
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return Personas
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
        return 'personas';
    }

}
