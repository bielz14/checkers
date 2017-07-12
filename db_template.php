<?php

class DbConnect
{
	private static $instance = null;

	final private function __construct(){}

	final private function __clone(){}

	public static function getInstance()
	{
		if (!self::$instance) {
			if (!function_exists('mysqli_connect')) {
				die('Адаптер MySQL mysqli не доступен');
			}

			self::$instance = mysqli_connect(
				'localhost',	
				'ruha',	
				'15052016',
				'temp-mail'
			) or die("Не удалось подключиться к MySQL: ("
				. self::$instance->connect_errno . ") "
				. self::$instance->connect_error);
			mysqli_set_charset(self::$instance, "utf8");
		}
		return self::$instance;
	}
}

class DbFunction
{
	private $db;

	public function __construct()
	{
		$this->db = DbConnect::getInstance();
	}

	public function load_table($table)
	{
		$resultArray = array();
		if ($result = $this->db->query("SELECT * FROM `$table`")) {
			while ($row = $result->fetch_array(MYSQL_ASSOC)) {
				$resultArray[] = $row;
			}
		}
		return $resultArray;
	}
}

class DbFunctionInsert
{
	private $db;

	public function __construct()
	{
		$this->db = DbConnect::getInstance();
	}

	public function insert_table($table, $id)
	{	
		$this->db->query("UPDATE `$table` set `was_registration`='1' WHERE id_mail='$id'"); 		
	}
}

class DbFunctionInsertLog
{
	private $db;

	public function __construct()
	{
		$this->db = DbConnect::getInstance();
	}

	public function insert_table($table, $id)
	{	
		$this->db->query("UPDATE `$table` set `log`='1' WHERE id_mail='$id'"); 		
	}
}

class DbFunctionInsertNoLog
{
	private $db;

	public function __construct()
	{
		$this->db = DbConnect::getInstance();
	}

	public function insert_table($table)
	{	
		$this->db->query("UPDATE `$table` set `log`='0' WHERE `log`='1'"); 		
	}
}

?>