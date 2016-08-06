<?php

/**
 * @RoutePrefix("/huellitas")
 */
class HuellitasController extends \Phalcon\Mvc\Controller {

    var $estado = true;

    public function initialize() {
        if (!stripos(baseUri, $this->request->getHeader("HOST"))) {
            $this->response->setStatusCode(403, "Acceso no permitido")->sendHeaders();
            $this->estado = false;
        }
        $response = $this->response;
        $response->setHeader('Access-Control-Allow-Origin', '*');
        $response->setHeader('Access-Control-Allow-Headers', 'X-Requested-With');
        $response->sendHeaders();
    }

    /**
     * @Route("/", methods = {"POST", "GET"})
     */
    public function indexAction() {
        $this->response->redirect("login")->sendHeaders();
    }

    /**
     * @Route("/galeria", methods = {"POST"}, name = "galeria-listar")
     */
    public function galeriaAction() {
        if ($this->estado) {
            $galeria = Galeria::find(array("columns" => "titulo,descripcion,nombre,url", "conditions" => "estado = 1"));
            $this->Ok($galeria);
        }
    }

    /**
     * @Route("/novedades/ver/{id:[0-9]+}", methods = {"POST"}, name = "ver-articulo")
     */
    public function verAction($id) {
        if ($this->estado) {
            $articulo = Novedades::findFirst([
                        "conditions" => "id = ?1 and estado = 1",
                        "bind" => [1 => $id],
                        "columns" => "id,titulo,resumen,contenido,imagen_url,autor,date_format(fecha,'%d/%m/%Y %h:%i') fecha,date_format(fecha,'%d') dia,date_format(fecha,'%m') mes,date_format(fecha,'%Y') anio",
                        "order" => "cast(fecha as date) desc, destacado desc"
            ]);
            if ($articulo) {
                $this->Ok($articulo);
            } else {
                $this->SinCambios(["mensaje" => "No se ha encontrado el articulo seleccionado"]);
            }
        }
    }

    /**
     * @Route("/novedades/recientes", methods = {"POST"}, name = "recientes-listar")
     */
    public function recientesAction() {
        if ($this->estado) {
            $novedades = Novedades::find(array("conditions" => "estado = 1", "limit" => "6", "order" => "cast(fecha as date) desc, destacado desc"));
            $nov = array();
            foreach ($novedades as $key) {
                $fecha = new DateTime($key->fecha);
                $nov[] = array(
                    "estado" => $key->estado,
                    "destacado" => $key->destacado,
                    "id" => $key->id,
                    "titulo" => $key->titulo,
                    "resumen" => $key->resumen,
                    "contenido" => $key->contenido,
                    "imagen_url" => $key->imagen_url,
                    "fecha" => date_format($fecha, "d/m/Y"),
                    "dia" => date_format($fecha, "d"),
                    "mes" => date_format($fecha, "m"),
                    "anio" => date_format($fecha, "Y"),
                    "autor" => $key->Usuario->nombre . " " . $key->Usuario->apellido
                );
            }
            $this->Ok($nov);
        }
    }

    /**
     * @Route("/novedades/publicas", methods = {"POST"}, name = "publicaciones-listar")
     */
    public function publicacionesAction() {
        if ($this->estado) {
            $novedades = Novedades::find(["conditions" => "estado <> 0", "order" => "estado desc"]);
            $nov = array();
            foreach ($novedades as $key) {
                $nov[] = array(
                    "estado" => $key->estado,
                    "destacado" => $key->destacado,
                    "id" => $key->id,
                    "titulo" => $key->titulo,
                    "resumen" => $key->resumen,
                    "contenido" => $key->contenido,
                    "fecha" => date_format(new DateTime($key->fecha), "d/m/Y"),
                    "autor" => $key->Usuario->nombre . " " . $key->Usuario->apellido
                );
            }
            $this->Ok($nov);
        }
    }

    /**
     * @Route("/adopciones/disponibles", methods = {"POST"}, name = "adopciones-listar")
     */
    public function adopcionesAction() {
        if ($this->estado) {
            $animales = EstadoAnimal::find("adoptable = 'S'");
            $salida = array();
            foreach ($animales as $key) {
                $salida = array_merge($salida, $this->ListaAnimalesPorEstado($key->getAnimal()));
            }
            $this->Ok($salida);
        }
    }

    /**
     * @Route("/adopciones/buscar/{id:[0-9]+}", methods = {"POST"}, name = "adopciones-listar")
     */
    public function buscarAction($id) {
        if ($this->estado) {
            $key = Animal::findFirst(["conditions" => "id = ?1", "bind" => [1 => $id]]);
            if ($key) {
                $imagen = $key->getAnimalImagen(["columns" => "imagen,nombre"]);
                foreach ($imagen as $img) {
                    $imagenes[] = [
                        "src" => "http://$_SERVER[HTTP_HOST]" . $img->imagen,
                        "alt" => $img->nombre
                    ];
                }
                $razas[] = array(
                    "id" => $key->id,
                    "nombre" => $key->nombre,
                    "edad" => $key->edad,
                    "edad_tipo" => $key->edad_tipo,
                    "fecha_ingreso" => $key->fecha_ingreso,
                    "fecha_salida" => $key->fecha_salida,
                    "especie" => $key->Especies->nombre,
                    "color" => $key->Colores->nombre,
                    "raza" => $key->Razas->nombre,
                    "sexo" => $key->sexo,
                    "descripcion" => $key->descripcion,
                    "estado" => $key->EstadoAnimal->descripcion,
                    "imagenes" => $imagenes
                );
                $this->Ok($razas[0]);
            }
        } else {
            $this->SinCambios(["error" => "No se ha encontrado el animal solicitado"]);
        }
    }

    private function ListaAnimalesPorEstado($animal) {
        $razas = array();
        foreach ($animal as $key) {
            $imagen = $key->getAnimalImagen();
            $razas[] = array(
                "id" => $key->id,
                "nombre" => $key->nombre,
                "edad" => $key->edad,
                "edad_tipo" => $key->edad_tipo,
                "fecha_ingreso" => $key->fecha_ingreso,
                "desrescata" => $key->Personas->nombre . " " . $key->Personas->apellido,
                "rescata" => $key->rescata,
                "fecha_salida" => $key->fecha_salida,
                "desespecie" => $key->Especies->nombre,
                "especie" => $key->especie,
                "descolor" => $key->Colores->nombre,
                "color" => $key->color,
                "desraza" => $key->Razas->nombre,
                "raza" => $key->raza,
                "sexo" => $key->sexo,
                "descripcion" => $key->descripcion,
                "desestado" => $key->EstadoAnimal->descripcion,
                "estado" => $key->estado,
                "url" => $imagen[0]->imagen
            );
        }
        return $razas;
    }

    public function Ok($datos) {
        if (!is_array($datos)) {
            $datos = $datos->toArray();
        }
        $this->response->setStatusCode(200);
        $this->response->setEtag(md5(time()));
        $this->response->setJsonContent($datos, JSON_PRETTY_PRINT | JSON_NUMERIC_CHECK);
        $this->response->send();
    }

    public function Denegado() {
        $this->response->setStatusCode(403);
        $this->response->setEtag(md5(time()));
        $this->response->send();
    }

    public function Creado() {
        $this->security->hash(rand(), CRYPT_SHA512);
        $this->response->setStatusCode(201);
        $this->response->setEtag(md5(time()));
        $this->response->setJsonContent([
            "mensaje" => "Tarea Realizada Correctamente",
            "estado" => "Se ha creado un registro nuevo",
            "codigo" => "1"
                ], JSON_PRETTY_PRINT);
        $this->response->send();
    }

    public function Editado() {
        $this->security->hash(rand(), CRYPT_SHA512);
        $this->response->setStatusCode(202);
        $this->response->setEtag(md5(time()));
        $this->response->setJsonContent([
            "mensaje" => "Cambios Realizados Correctamente",
            "estado" => "Se ha cambiado la información del registro",
            "codigo" => "1"
                ], JSON_PRETTY_PRINT);
        $this->response->send();
    }

    public function Borrado() {
        $this->security->hash(rand(), CRYPT_SHA512);
        $this->response->setStatusCode(202);
        $this->response->setEtag(md5(time()));
        $this->response->setJsonContent([
            "mensaje" => "Registro Eliminado Correctamente",
            "estado" => "Se ha borrado el registro de la base de datos",
            "codigo" => "1"
                ], JSON_PRETTY_PRINT);
        $this->response->send();
    }

    public function SinCambios($errores) {
        foreach ($errores as $error) {
            $salida[] = $error;
        }
        $this->response->setStatusCode(206);
        $this->response->setEtag(md5(time()));
        $this->response->setJsonContent([
            "mensaje" => "No se Han realizado Cambios",
            "estado" => $salida,
            "codigo" => "0"
                ], JSON_PRETTY_PRINT);
        $this->response->send();
    }

}
