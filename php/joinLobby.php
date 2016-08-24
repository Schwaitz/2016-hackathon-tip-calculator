<?php

session_start();
require_once("./db-cont.php");

$lobby = $_POST["name"];
$pass = $_POST["password"];



   $conn = new mysqli(host, username, password, database);
   
   
   if ($conn->connect_error) {
    
     echo(json_encode("ConnectionError"));

    
   }
   
   $hash_check = password_hash($pass, PASSWORD_DEFAULT);
   
   
  $sql = "SELECT password FROM lobby WHERE name='$lobby' LIMIT 1";
  
  $result = $conn->query($sql);
  
  $pa = $result->fetch_assoc();
	
  if(password_verify($pass, $pa['password'])){
    
     echo(json_encode("true"));

    
    } else{
      
      echo(json_encode("false"));

      
}
  
   $conn->close();

?>