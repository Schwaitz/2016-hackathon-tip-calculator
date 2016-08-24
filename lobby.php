<?php

session_start();
require_once("./php/db-cont.php");

$lobby = $_POST["name"];
$pass = $_POST["password"];



   $conn = new mysqli(host, username, password, database);
   
   
   if ($conn->connect_error) {
    
     die("error");
    
   }
   
   $hash_check = password_hash($pass, PASSWORD_DEFAULT);
   
   
  $sql = "SELECT password from lobby WHERE name='$lobby' LIMIT 1";
  
	$result = $conn->query($sql);
  
  $pa = $result->fetch_assoc();
	
  if(password_verify($pass, $pa['password'])){
    
     #We good. Continue.
    
    } else{
      
      header('Location: ../test.php');
      
}
  
   $conn->close();

?>

<html>
    
    <head>
        
        <script src="./javascript/jquery-3.0.0.min.js" type="text/javascript"></script>
        <script src="./javascript/getLobbyData.js" type="text/javascript"></script>
        
        <title>Lobby</title>
        
        
    </head>
    
    
    <body>
      
        
        <h1 id="lobbyName"><?php echo $lobby ?></h1>
        
        <ul style="list-style: none;" id="data">
            
            <li id="data">Populating Data</li>    
            
        </ul>
        
    </body>
    
    
</html>