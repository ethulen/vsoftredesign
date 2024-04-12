<?php
session_start(); // Start the session

// Unset all of the session variables
$_SESSION = array();

// Destroy the session
session_destroy();

// Redirect to the login page or any other page after logout
header("location: login.php"); // Replace "login.php" with the URL of your login page
exit;
?>
