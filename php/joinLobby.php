<?php

session_start();
require_once("./db-cont.php");

$lobby = $_POST["name"];
$pass = $_POST["password"];

$query = $conn->prepare("SELECT password FROM lobby WHERE name=:lobby LIMIT 1");
$query->bindParam(":lobby", $lobby);
$query->execute();
$pa = $query->fetchColumn(0);

if (password_verify($pass, $pa)) {
    echo(json_encode(true));
} else {
    echo(json_encode(false));
}
