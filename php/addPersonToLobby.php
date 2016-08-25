<?php

require_once("./db-cont.php");

session_start();

$lobby = $_POST['lobby'];
$name = $_POST['name'];

$arr = ["lobby" => $lobby, "name" => $name];


$json = json_encode($arr);
$query = $conn->prepare("SELECT data FROM lobby where name=:lobby LIMIT 1");
$query->bindParam(":lobby", $lobby);

if ($query->execute()) {

    $old = json_decode($query->fetchColumn(0), true);


} else {
    echo(json_encode("Failed" . $conn->error));
}

$old["people"][] = $arr;

$json = json_encode($old);

$query = $conn->prepare("UPDATE lobby SET data = :data WHERE name = :lobby");
$query->bindParam(":data", $json);
$query->bindParam(":lobby", $lobby);

if ($query->execute()) {
    echo(json_encode("Inserted"));
} else {
    echo(json_encode("Failed " . $conn->error));
}