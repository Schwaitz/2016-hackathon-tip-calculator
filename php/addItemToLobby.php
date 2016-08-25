<?php

require_once("./db-cont.php");

session_start();

$lobby = $_POST['lobby'];
$name = $_POST['name'];
$price = $_POST['price'];
$person = $_POST['person'];

$arr = ["lobby" => $lobby, "name" => $name, "price" => $price, "person" => $person];


$json = json_encode($arr);
$query = $conn->prepare("SELECT data FROM lobby where name=:lobby LIMIT 1");
$query->bindParam(":lobby", $lobby);

if ($query->execute()) {

    $old = json_decode($query->fetchColumn(0), true);
    

} else {
    echo(json_encode("Failed" . $conn->error));
}

array_push($old, $arr);

$json = json_encode($old);

$query = $conn->prepare("INSERT INTO lobby (data) VALUES (:data)");
$query->bindParam(":data", $json);

if ($query->execute()) {
    echo(json_encode("Inserted"));
} else {
    echo(json_encode("Failed " . $conn->error));
}
