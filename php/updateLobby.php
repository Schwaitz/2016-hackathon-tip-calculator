<?php

require_once("../php/db-cont.php");

$lobby = $_POST['lobby'];


$query = $conn->prepare("SELECT data FROM lobby WHERE name=:lobby LIMIT 1;");
$query->bindParam(":lobby", $lobby);

if (!$query->execute()) {
    echo(json_encode("Failed " . $conn->error));
} else {
    $data = $query->fetchColumn(0);
    echo(json_encode($data));
}
