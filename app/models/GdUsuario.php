<?php

class GdUsuario extends \Phalcon\Mvc\Model
{

    /**
     *
     * @var integer
     */
    public $usuario_id;

    /**
     *
     * @var string
     */
    public $usuario_nombre;

    /**
     *
     * @var string
     */
    public $usuario_apellido;

    /**
     *
     * @var string
     */
    public $usuario_email;

    /**
     *
     * @var string
     */
    public $usuario_sid;

    /**
     *
     * @var string
     */
    public $usuario_clave;

    /**
     *
     * @var string
     */
    public $usuario_fecha;

    /**
     *
     * @var integer
     */
    public $usuario_estado;

    /**
     *
     * @var string
     */
    public $usuario_grupo;

    /**
     * Method to set the value of field usuario_id
     *
     * @param integer $usuario_id
     * @return $this
     */
    public function setUsuarioId($usuario_id)
    {
        $this->usuario_id = $usuario_id;

        return $this;
    }

    /**
     * Method to set the value of field usuario_nombre
     *
     * @param string $usuario_nombre
     * @return $this
     */
    public function setUsuarioNombre($usuario_nombre)
    {
        $this->usuario_nombre = $usuario_nombre;

        return $this;
    }

    /**
     * Method to set the value of field usuario_apellido
     *
     * @param string $usuario_apellido
     * @return $this
     */
    public function setUsuarioApellido($usuario_apellido)
    {
        $this->usuario_apellido = $usuario_apellido;

        return $this;
    }

    /**
     * Method to set the value of field usuario_email
     *
     * @param string $usuario_email
     * @return $this
     */
    public function setUsuarioEmail($usuario_email)
    {
        $this->usuario_email = $usuario_email;

        return $this;
    }

    /**
     * Method to set the value of field usuario_sid
     *
     * @param string $usuario_sid
     * @return $this
     */
    public function setUsuarioSid($usuario_sid)
    {
        $this->usuario_sid = $usuario_sid;

        return $this;
    }

    /**
     * Method to set the value of field usuario_clave
     *
     * @param string $usuario_clave
     * @return $this
     */
    public function setUsuarioClave($usuario_clave)
    {
        $this->usuario_clave = $usuario_clave;

        return $this;
    }

    /**
     * Method to set the value of field usuario_fecha
     *
     * @param string $usuario_fecha
     * @return $this
     */
    public function setUsuarioFecha($usuario_fecha)
    {
        $this->usuario_fecha = $usuario_fecha;

        return $this;
    }

    /**
     * Method to set the value of field usuario_estado
     *
     * @param integer $usuario_estado
     * @return $this
     */
    public function setUsuarioEstado($usuario_estado)
    {
        $this->usuario_estado = $usuario_estado;

        return $this;
    }

    /**
     * Method to set the value of field usuario_grupo
     *
     * @param string $usuario_grupo
     * @return $this
     */
    public function setUsuarioGrupo($usuario_grupo)
    {
        $this->usuario_grupo = $usuario_grupo;

        return $this;
    }

    /**
     * Returns the value of field usuario_id
     *
     * @return integer
     */
    public function getUsuarioId()
    {
        return $this->usuario_id;
    }

    /**
     * Returns the value of field usuario_nombre
     *
     * @return string
     */
    public function getUsuarioNombre()
    {
        return $this->usuario_nombre;
    }

    /**
     * Returns the value of field usuario_apellido
     *
     * @return string
     */
    public function getUsuarioApellido()
    {
        return $this->usuario_apellido;
    }

    /**
     * Returns the value of field usuario_email
     *
     * @return string
     */
    public function getUsuarioEmail()
    {
        return $this->usuario_email;
    }

    /**
     * Returns the value of field usuario_sid
     *
     * @return string
     */
    public function getUsuarioSid()
    {
        return $this->usuario_sid;
    }

    /**
     * Returns the value of field usuario_clave
     *
     * @return string
     */
    public function getUsuarioClave()
    {
        return $this->usuario_clave;
    }

    /**
     * Returns the value of field usuario_fecha
     *
     * @return string
     */
    public function getUsuarioFecha()
    {
        return $this->usuario_fecha;
    }

    /**
     * Returns the value of field usuario_estado
     *
     * @return integer
     */
    public function getUsuarioEstado()
    {
        return $this->usuario_estado;
    }

    /**
     * Returns the value of field usuario_grupo
     *
     * @return string
     */
    public function getUsuarioGrupo()
    {
        return $this->usuario_grupo;
    }

    /**
     * Allows to query a set of records that match the specified conditions
     *
     * @param mixed $parameters
     * @return GdUsuario[]
     */
    public static function find($parameters = null)
    {
        return parent::find($parameters);
    }

    /**
     * Allows to query the first record that match the specified conditions
     *
     * @param mixed $parameters
     * @return GdUsuario
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
        return 'gd_usuario';
    }

}
