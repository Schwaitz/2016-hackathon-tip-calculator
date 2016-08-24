<?php

session_start();

require_once("./php/db-cont.php");

$conn = new mysqli(host, username, password, database);

if ($conn->connect_error) {
 
  die('Unable to connect to mySQL database.
      <br>
      <a href="./test.php">Try Again (Refresh)</a>"');
}

    
$sql = "SELECT name FROM lobby;";
      
      
if(!$result = $conn->query($sql)){
    
    die("Query Failed");
    
}

$arr = $result->fetch_array(); 

   foreach($arr as $key){
    
    echo($arr["name"] . "<br>");
    
   }
   
   
   var_dump($arr);

?>

<html>
    
    <head>
        
        <script src="./javascript/jquery-3.0.0.min.js" type="text/javascript"></script>
        <title>Lobby</title>
        
        
    </head>
    
    
    <body>
        
        <h1>Test</h1>
        
        <ul>
            
            <li>Lobby One</li>
            <li>Lobby Two</li>
            <li>Lobby Three</li>
            
            
        </ul>
        
        
        
    </body>
    
    
    
    
    
</html>