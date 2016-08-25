<?php

const host = '52.90.244.226';
#const host = 'localhost';
const username = 'hack';
const password = 'hack';
const database = 'hack';

$conn = new PDO("mysql:dbname=" . database . ";host=" . host, username, password);

function shutdown() {
    //Disconnect
    global $conn;
    unset($conn);
}

register_shutdown_function("shutdown");
