<?php

require_once("./db-cont.php");

session_start();

$unsafe_name = $_POST['name'];
$unsafe_pass = $_POST['password'];


$conn = new mysqli(host, username, password, database);


$name = $conn->real_escape_string($unsafe_name);
$pass = $conn->real_escape_string($unsafe_pass);

if ($conn->connect_error) {
	
	

		die('Unable to connect to mySQL database.
		<br>
		<a href="../test.php">Go Back</a>"');

	
}
 
      
  $sql = "SELECT name FROM lobby WHERE name = '{$name}' LIMIT 1;";
        
  $result = $conn->query($sql);
    
      if($result->num_rows == 1) {
        
        
            die('Lobby name already exists.
	<br>
	<a href="../test.php">Go Back</a>');
      }
						
      
      else {
							
	$hash = password_hash($pass, PASSWORD_DEFAULT);
							
          $sql = "INSERT INTO lobby (name, password) VALUES ('$name', '$hash')";
									
										

         if($conn->query($sql) == true) {
										

		header("Location: ../test.php");
									
	}

	else{

		echo($conn->error . "<br>");
		die('Failed to insert into mySQL database.
		<br>
		<a href="../test.php">Go Back</a>');

}
										
										
										
      }
      
      
  
   $conn->close();
   
?>