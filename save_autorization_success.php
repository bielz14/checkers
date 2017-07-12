<?php
require_once "db.php";
header("Access-Control-Allow-Origin: *");
$db = new DbFunctionInsertLog();
$id = $_POST["id"];
$db->insert_table("temp-mail", $id);
?>	