<?php
$servidor = "localhost";
$usuario = "root";
$contrasena = "";
$basedatos = "inmobiliaria";
$enlace = mysqli_connect($servidor, $usuario, $contrasena);

mysqli_select_db($enlace, $basedatos);
?>