<?php
// Database connection details
$servername = "login";
$username = "your_db_username";
$password = "your_db_password";
$dbname = "wachtwoord";

// Create connection
$conn = new mysqli($login, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the form data
$email = $_POST['email'];
$password = $_POST['password'];

// Prepare and bind
$stmt = $conn->prepare("SELECT password FROM users WHERE email = ?");
$stmt->bind_param("s", $email);

// Execute the query
$stmt->execute();

// Bind the result
$stmt->bind_result($hashed_password);

// Fetch the result
if ($stmt->fetch()) {
    // Verify password
    if (password_verify($password, $hashed_password)) {
        echo "Login successful!";
        // Redirect to a protected page or set a session variable
        // header("Location: protected_page.php");
        // exit();
    } else {
        echo "Invalid password.";
    }
} else {
    echo "No user found with that email address.";
}

// Close the statement and connection
$stmt->close();
$conn->close();
?>
