<?php
session_start();  // Start the session to store form data temporarily

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Collect form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $dob = $_POST['dob'];
    $gender = $_POST['gender'];
    $address = $_POST['address'];

    // Store the form data in session to pass it to the next page
    $_SESSION['formData'] = [
        'name' => $name,
        'email' => $email,
        'phone' => $phone,
        'dob' => $dob,
        'gender' => $gender,
        'address' => $address,
    ];

    // Return the new HTML formatted as a string
    echo json_encode([
        'html' => "
        <h1>Submitted Form</h1>
        <p><strong>Name:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Phone:</strong> $phone</p>
        <p><strong>Date of Birth:</strong> $dob</p>
        <p><strong>Gender:</strong> $gender</p>
        <p><strong>Address:</strong> $address</p>
        "
    ]);
}
?>
