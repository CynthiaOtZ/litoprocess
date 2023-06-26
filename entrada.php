<?php

//header('Access-Control-Allow-Origin: *');
////header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
//header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
//header("Allow: GET, POST, OPTIONS, PUT, DELETE");

$body = @file_get_contents('php://input');
$data = json_decode($body);
http_response_code(200); // Return 200 OK 
$actual = file_get_contents($fichero);
if ($data) {
    $fichero = 'webhook/a.txt';
    $actual .= json_encode($data);
    file_put_contents($fichero, $actual);
    echo "Si se encontro";
} else {
    echo "No se encontro";
}

