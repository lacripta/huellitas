<?php

defined('APP_PATH') || define('APP_PATH', realpath('.'));
defined('baseUri') || define('baseUri', 'http://localhost/easyapp/');
return new \Phalcon\Config(array(
    'database' => array(
        'adapter' => 'Mysql',
        'host' => 'localhost',
        'username' => 'root',
        'password' => '910320',
        'dbname' => 'easyapp',
        'persistent' => TRUE,
        'charset' => 'utf8',
    ),
    'application' => array(
        'controllersDir' => APP_PATH . '/app/controllers/',
        'modelsDir' => APP_PATH . '/app/models/',
        'migrationsDir' => APP_PATH . '/app/migrations/',
        'viewsDir' => APP_PATH . '/app/views/',
        'pluginsDir' => APP_PATH . '/app/plugins/',
        'libraryDir' => APP_PATH . '/app/library/',
        'cacheDir' => APP_PATH . '/app/cache/',
        'baseUri' => 'http://localhost/easyapp/',
    )
        ));
