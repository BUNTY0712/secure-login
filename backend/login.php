<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header("Content-Type: application/json");
session_start();

$username = $_POST['username'];
$password = $_POST['password'];

$conn = mysqli_connect('localhost', 'root', '', 'transaction');
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "SELECT * FROM user WHERE name = '{$username}' AND pin = '{$password}' ";
$result = mysqli_query($conn, $sql);

$userData = array();

if ($result) {
    $row = mysqli_fetch_assoc($result);

    if ($row) {
        // Authentication succeeded
        $_SESSION['data'] = $row; // Store user data in the session
    
        // Return the user data as a JSON response
        echo json_encode($_SESSION['data']);
    } else {
        // Authentication failed
        $response = array("message" => "Login unsuccessfully");
        // echo json_encode($response);
    }
} else {
    // Query execution failed
    echo "Query failed: " . mysqli_error($conn);
}

mysqli_close($conn);
?>
