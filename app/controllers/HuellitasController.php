<?php

/**
 * @RoutePrefix("/huellitas")
 */
class HuellitasController extends \Phalcon\Mvc\Controller {

    public function initialize() {
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
        $galeria = Galeria::find(array("columns" => "titulo,descripcion,nombre,url", "conditions" => "estado = 1"));
        echo json_encode($galeria->toArray(), JSON_PRETTY_PRINT);
    }

    /**
     * @Route("/ver", methods = {"POST"}, name = "ver-articulo")
     */
    public function verAction($id) {
        $articulo = Novedades::findFirst(array(
                    "conditions" => "id = ?1 and estado = 1",
                    "bind" => array(1 => $id),
                    "columns" => "id,titulo,resumen,contenido,imagen_url,autor,date_format(fecha,'%d/%m/%Y %h:%i') fecha,date_format(fecha,'%d') dia,date_format(fecha,'%m') mes,date_format(fecha,'%Y') anio",
                    "order" => "cast(fecha as date) desc, destacado desc"
        ));
        echo json_encode($articulo->toArray(), JSON_PRETTY_PRINT);
    }

    /**
     * @Route("/recientes", methods = {"POST"}, name = "recientes-listar")
     */
    public function recientesAction() {
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
        echo json_encode($nov, JSON_PRETTY_PRINT | JSON_NUMERIC_CHECK);
    }

    /**
     * @Route("/publicaciones", methods = {"POST"}, name = "publicaciones-listar")
     */
    public function publicacionesAction() {
        $novedades = Novedades::find();
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
        echo json_encode($nov, JSON_PRETTY_PRINT);
    }

}
