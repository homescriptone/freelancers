<?php 
$dbname= '';
$user = '';
$pass = '';

$con =  new PDO ('mysql:host=localhost; dbname='. $dbname . ', ' . $user .  ', '. $pass .'');