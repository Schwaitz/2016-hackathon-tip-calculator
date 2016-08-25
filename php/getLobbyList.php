<?php

session_start();

require_once("./db-cont.php");

$lobby_names = [];

$query = $conn->prepare("SELECT name FROM lobby;");
if (!$query->execute()) {
    echo(json_encode("Failed " . $conn->error));
} else {
    while (($row = $query->fetch(PDO::FETCH_ASSOC)) !== false) {
        array_push($lobby_names, $row['name']);
    }

    echo(json_encode($lobby_names));
}
