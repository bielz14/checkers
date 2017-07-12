<?php
require_once "db.php";
header("Access-Control-Allow-Origin: *");
$db = new DbFunctionInsertNoLog();
$db->insert_table("temp-mail");
?>	