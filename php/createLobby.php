<?php

require_once("./db-cont.php");

session_start();

$unsafe_name = $_POST['name'];
$unsafe_pass = $_POST['password'];


$conn = new mysqli(host, username, password, database);


$name = $conn->real_escape_string($unsafe_name);
$pass = $conn->real_escape_string($unsafe_pass);

if ($conn->connect_error) {
	
	

echo(json_encode("ConnectionError"));

	
}
 
      
  $sql = "SELECT name FROM lobby WHERE name = '{$name}' LIMIT 1;";
        
  $result = $conn->query($sql);
    
      if($result->num_rows == 1) {
        
        
            echo(json_encode("Exists"));
      }
						
      
      else {
							
	$hash = password_hash($pass, PASSWORD_DEFAULT);
							
          $sql = "INSERT INTO lobby (name, password) VALUES ('$name', '$hash')";
									
										
         if($conn->query($sql) == true) {
										

		echo(json_encode("Created"));
									
	}

	else{

		echo(json_encode("Failed"));
		
}
	}
										
$conn->close();
   
?>