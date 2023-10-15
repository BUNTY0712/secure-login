<?php
session_start();
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json");

// Check if the user is logged in
if (isset($_SESSION['userData'])) {
    // Return the session data as JSON
    echo json_encode($_SESSION);
} else {
    // User is not logged in
    echo json_encode(array("message" => "User not logged in"));
}
?>
