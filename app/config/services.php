<?php

/**
 * Services are globally registered in this file
 *
 * @var \Phalcon\Config $config
 */
use Phalcon\Di\FactoryDefault;
use Phalcon\Mvc\View;
use Phalcon\Mvc\Url as UrlResolver;
use Phalcon\Mvc\View\Engine\Volt as VoltEngine;
use Phalcon\Mvc\Model\Metadata\Memory as MetaDataAdapter;
use Phalcon\Session\Adapter\Files as SessionAdapter;
use Phalcon\Flash\Direct as Flash;
use Phalcon\Mvc\Router\Annotations as RouterAnnotations;

/**
 * The FactoryDefault Dependency Injector automatically register the right services providing a full stack framework
 */
$di = new FactoryDefault();

/**
 * The URL component is used to generate all kind of urls in the application
 */
$di->setShared('url', function () use ($config) {
    $url = new UrlResolver();
    $url->setBaseUri($config->application->baseUri);

    return $url;
});

/**
 * Setting up the view component
 */
$di->setShared('view', function () use ($config) {

    $view = new View();

    $view->setViewsDir($config->application->viewsDir);

    $view->registerEngines(array(
        '.volt' => function ($view, $di) use ($config) {

            $volt = new VoltEngine($view, $di);

            $volt->setOptions(array(
                'compiledPath' => $config->application->cacheDir,
                'compiledSeparator' => '_'
            ));

            return $volt;
        },
                '.phtml' => 'Phalcon\Mvc\View\Engine\Php'
            ));

            return $view;
        });

        /**
         * Database connection is created based in the parameters defined in the configuration file
         */
        $di->setShared('db', function () use ($config) {
            $dbConfig = $config->database->toArray();
            $adapter = $dbConfig['adapter'];
            unset($dbConfig['adapter']);

            $class = 'Phalcon\Db\Adapter\Pdo\\' . $adapter;

            return new $class($dbConfig);
        });

        /**
         * If the configuration specify the use of metadata adapter use it or use memory otherwise
         */
        $di->setShared('modelsMetadata', function () {
            return new MetaDataAdapter();
        });

        /**
         * Register the session flash service with the Twitter Bootstrap classes
         */
        $di->set('flash', function () {
            return new Flash(array(
                'error' => 'alert alert-danger',
                'success' => 'alert alert-success',
                'notice' => 'alert alert-info',
                'warning' => 'alert alert-warning'
            ));
        });

        /**
         * Start the session the first time some component request the session service
         */
        $di->setShared('session', function () {
            $session = new SessionAdapter();
            $session->start();

            return $session;
        });

        $di->setShared('router', function () {
            $router = new RouterAnnotations(false);
            //INICIO A LA APLICACION
            $router->addResource('Index', '/');
            $router->addResource('Login', '/login');
            //SERVICIOS WEB PARA LA PAGINA
            $router->addResource('Huellitas', '/huellitas');
            //COMPONENETES DEL SISTEMA
            $router->addResource('Usuarios', '/usuarios');
            $router->addResource('Galeria', '/galeria');
            $router->addResource('Novedades', '/novedades');
            //GESTION DEL REFUGIO DE ANIMALES
            $router->addResource('Animal', '/refugio/animales');
            $router->addResource('Adopciones', '/refugio/adopciones');
            $router->addResource('WebService', '/refugio/parametros');
            $router->addResource('EstadoAdopcion', '/refugio/parametros/adopciones/estados');
            $router->addResource('Colores', '/refugio/parametros/colores');
            $router->addResource('Estados', '/refugio/parametros/estados');
            $router->addResource('Sexos', '/refugio/parametros/sexos');
            $router->addResource('Especies', '/refugio/parametros/especies');
            $router->addResource('Razas', '/refugio/parametros/razas');
            $router->addResource('Personas', '/refugio/personas');
            //PARAMETROS DEL SISTEMA
            $router->addResource('TipoUsuario', '/configuracion/usuarios/tipos');
            $router->addResource('EstadoUsuario', '/configuracion/usuarios/estados');
            $router->addResource('AreaPoblacion', '/configuracion/regiones/areas');
            $router->addResource('Departamento', '/configuracion/regiones/departamentos');
            $router->addResource('Municipio', '/configuracion/regiones/municipios');
            $router->addResource('Poblacion', '/configuracion/regiones/poblaciones');
            return $router;
        });
