<?php

require_once("./db-cont.php");

session_start();

$name = $_POST['name'];
$pass = $_POST['password'];

$query = $conn->prepare("SELECT name FROM lobby WHERE name = :name LIMIT 1;");
$query->bindParam(":name", $name);
$query->execute();

if ($query->rowCount() == 1) {
    echo(json_encode("Exists"));
} else {
    $hash = password_hash($pass, PASSWORD_DEFAULT);

    $query = $conn->prepare("INSERT INTO lobby (name, password, data) VALUES (:name, :hash, :data)");
    $query->bindParam(":name", $name, PDO::PARAM_STR);
    $query->bindParam(":hash", $hash, PDO::PARAM_STR);
    $query->bindParam(":data", json_encode(["people" => [], "items" => []]), PDO::PARAM_STR);

    if ($query->execute()) {
        echo(json_encode(true));
    } else {
        echo(json_encode(false));
    }
}
