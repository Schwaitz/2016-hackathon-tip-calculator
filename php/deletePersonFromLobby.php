<?php

require_once("./db-cont.php");

session_start();

$lobby = $_POST['lobby'];
$name = $_POST['name'];


$query = $conn->prepare("SELECT data FROM lobby where name=:lobby LIMIT 1");
$query->bindParam(":lobby", $lobby);

if ($query->execute()) {

    $old = json_decode($query->fetchColumn(0), true);
    

} else {
    die(json_encode("Failed" . $conn->error));
}

$old["people"] = array_filter($old["people"], function($thing) use($name) {
    return $thing["name"] !== $name;
});

$json = json_encode($old);

$query = $conn->prepare("UPDATE lobby SET data = :data WHERE name = :lobby");
$query->bindParam(":lobby", $lobby);
$query->bindParam(":data", $json);

if ($query->execute()) {
    echo(json_encode("Deleted"));
} else {
    echo(json_encode("Failed " . $conn->error));
}
