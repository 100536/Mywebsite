<?php

$servername = "165.22.69.132";
$username = "root";
$password = "";
$dbname = "login_db";

// Maak verbinding
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Verbinding mislukt: " . $conn->connect_error);
}

