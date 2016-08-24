<?php

require_once("./db-cont.php");

session_start();

$unsafe_lobby = $_POST['lobby'];
$unsafe_name = $_POST['name'];
$unsafe_price = $_POST['price'];
$unsafe_person = $_POST['person'];


$conn = new mysqli(host, username, password, database);


$lobby = $conn->real_escape_string($unsafe_lobby);
$name = $conn->real_escape_string($unsafe_name);
$price = $conn->real_escape_string($unsafe_price);
$person = $conn->real_escape_string($unsafe_person);

$arr = ["lobby" => $lobby, "name" => $name, "price" => $price, "person" => $person];

if ($conn->connect_error) {
	

		echo(json_encode("ConnectionError"))
	
}
 
    $json = json_encode($arr);
            
  $sql = "INSERT INTO lobby (data) VALUES ('$json')";
                            
                                

 if($conn->query($sql) == true) {
                                

    echo(json_encode("Inserted"));
									
	}
    
	else{
        

	echo(json_encode("Failed"));
}
										
										
  
   $conn->close();
   
?>