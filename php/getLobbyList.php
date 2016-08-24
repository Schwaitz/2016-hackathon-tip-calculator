<?php

session_start();

require_once("./db-cont.php");

$conn = new mysqli(host, username, password, database);
$lobby_names = [];

if ($conn->connect_error) {
 
  echo(json_encode("ConnectionError"));
}

    
$sql = "SELECT name FROM lobby;";
      
      
if(!$result = $conn->query($sql)){
    
    echo(json_encode("Failed"));
    
} else {


   while($row = $result->fetch_assoc()) {
       
       array_push($lobby_names, $row['name']);
       
   }
   
   
   echo(json_encode($lobby_names));
   
   
}

$conn->close();


?>
