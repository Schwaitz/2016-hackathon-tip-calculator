<?php

require_once("../php/db-cont.php");

$lobby = $_POST['lobby'];

$conn = new mysqli(host, username, password, database);

if ($conn->connect_error) {
 
  echo(json_encode("ConnectionError"));
}

$sql = "SELECT data FROM lobby WHERE name='$lobby' LIMIT 1;";
      
      
if(!$result = $conn->query($sql)){
    
    echo(json_encode("Failed"));
    
} else {
    
    
    $data = $result->fetch_assoc()["data"];
    echo(json_encode($data));
    
    
    
    
}



?>