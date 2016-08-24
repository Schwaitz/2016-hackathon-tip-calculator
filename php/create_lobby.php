<?php

require_once("./db-cont.php");

session_start();

$stuff = "stuff";


   $conn = new mysqli(host, username, password, database);
   
   
   if ($conn->connect_error) {
    
    
    echo('Unable to connect to mySQL database.
         <br>
         <a href="../">Go Back</a>"');
     die();
     exit();
    
   }
   
   
  
 
 
      
  $sql = "SELECT * FROM servers WHERE ip_x = '{$ip}' LIMIT 1;";
        
  $result = $conn->query($sql);
    
      if($result->num_rows == 1) {
        
        
            die();
      }
						
      
      
      if(isset($_SERVER['HTTP_X_FORWARDED_FOR'])){
          $sql = "INSERT INTO servers (stuff) VALUES ($stuff)";
      }
      
      else{
          $sql = "INSERT INTO servers (create_command, kill_command, ip, ip_x) VALUES ($create, $kill, $ip, $none)"; 
      }
      

         if($conn->query($sql) == true) {
										

																					
         }
      
  
   $conn->close();
   
?>