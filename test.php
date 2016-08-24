<?php

session_start();

require_once("./php/db-cont.php");

$conn = new mysqli(host, username, password, database);
$lobby_names = [];

if ($conn->connect_error) {
 
  die('Unable to connect to mySQL database.
      <br>
      <a href="./test.php">Try Again (Refresh)</a>"');
}

    
$sql = "SELECT name FROM lobby;";
      
      
if(!$result = $conn->query($sql)){
    
    die("Query Failed");
    
}


   while($row = $result->fetch_assoc()) {
       
       array_push($lobby_names, $row['name']);
       
   }



?>

<html>
    
    <head>
        
            <script src="//code.jquery.com/jquery-3.1.0.min.js" type="text/javascript"></script>
    <script src="//code.jquery.com/ui/1.12.0/jquery-ui.min.js" type="text/javascript"></script>
        <title>Lobby</title>
        
        
    </head>
    
    
    <body>
        
        <h1>Lobbies</h1>
        
        <ul style="list-style: none;">
            
            <?php
            
              foreach($lobby_names as $key){
    
                echo("<li>
                    <label style='float: left; margin-right: 20px;'>$key</label>
                    <form action='./lobby.php' method='POST'>
                    <input type='hidden' name='name', value='$key'>
                    <input style='float: left; type='password' name='password' placeholder='password' value=''>
                    <input style='float: left; 'type='submit' value='Go'>
                    </form>
                    </li>");
                
                echo("<br>");
    
              }
            
            
            ?>
            
            
        </ul>
        
        
        
 <form action="./php/createLobby.php" method="post">
    
                <p class="form_label">Create Lobby</p>
                <input placeholder="name" type="text" name="name" value="">
                <input placeholder="password" type="password" name="password" value="">
                <input type="submit" value="Submit">
            </form>
        
        
        
    </body>
    
    
    
    
    
</html>