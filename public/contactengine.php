<?php 
//header("Access-Control-Allow-Origin: *");  // Allows requests from any origin
//header("Access-Control-Allow-Methods: POST, GET, OPTIONS");  // Allowed HTTP methods
//header('Content-type: application/json; charset=utf-8'); // Set the content type to JSON */

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    echo json_encode(["message" => "Email sent successfully!"]);
    // Get the form data from the POST request
    $firstName = isset($_POST['firstName']) ? utf8_encode($_POST['firstName']) : '';
    $lastName = isset($_POST['lastName']) ? $_POST['lastName'] : '';
    $email = isset($_POST['email']) ? $_POST['email'] : '';
    $phone = isset($_POST['phone']) ? $_POST['phone'] : '';
    $service = isset($_POST['service']) ? $_POST['service'] : '';
    $message = isset($_POST['message']) ? $_POST['message'] : '';

    // Set the recipient email
    $to = "postmaster@zuzanajankovafoto.cz";
    
    // Set the email subject
    $subject = "Nová poptávka po focení od $firstName $lastName";
    
    // Create the email body
    $body = "Nová poptávka po focení:\n\n
    Jmeno: $firstName\n
    Příjmení: $lastName\n
    Email: $email\n
    Telefonní číslo: $_POST['phone']
    Služba: $service\n
    Vzkaz: $message"; 

    // Set the email headers
    $headers = "From: $email";  
    echo json_encode(["message" => $body]);

    // Use PHP's mail() function to send the email
    if (mail($to, $subject, $body, $headers)) {
        // Email sent successfully
        echo json_encode(["message" => "Email sent successfully!"]);
    } else {
        // Email failed to send
        echo json_encode(["error" => "Failed to send email."]);
    }
} else {
    // Invalid request method
    echo json_encode(["error" => "Only POST requests are allowed."]);
}

?>