<?php
require'connect.php';

error_reporting(E_ALL);
ini_set('display_error', 1);




$value = $_POST['naam'];
$value1 = $_POST['score'];
$sql = "INSERT INTO scorelijst(naam, score) VALUES('$value',$value1)";
$conn->exec($sql);


?>