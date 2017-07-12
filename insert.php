<?php
require_once "db.php";
header("Access-Control-Allow-Origin: *");
$db = new DbFunction();
$table = $_POST["table_number"];
$db->load_table($table);
?>	