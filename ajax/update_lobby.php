<?php

require_once("../php/db-cont.php");

$lobby = $_POST['lobby'];

$conn = new mysqli(host, username, password, database);

if ($conn->connect_error) {
 
  die('Unable to connect to mySQL database.
      <br>
      <a href="./test.php">Try Again (Refresh)</a>"');
}

$sql = "SELECT data FROM lobby WHERE name='$lobby' LIMIT 1;";
      
      
if(!$result = $conn->query($sql)){
    
    die("Query Failed");
    
} else {
    
    
    $data = $result->fetch_assoc()["data"];
    echo($data);
    
    
    
    
}



?>