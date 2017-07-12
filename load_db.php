<?php
require_once "db.php";
header("Access-Control-Allow-Origin: *");
$db = new DbFunction();
$temp_mail = $db->load_table("temp-mail");
echo json_encode($temp_mail);
die; //прекращаем работу
?>
