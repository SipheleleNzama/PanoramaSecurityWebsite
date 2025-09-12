<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect and sanitize form data
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $phone = htmlspecialchars(trim($_POST['tel']));
    $message = htmlspecialchars(trim($_POST['message']));

    // Your email address
    $to = 'Anelenzama07@gmail.com';

    // Email subject
    $subject = 'New Contact Form Message from PanoramaSecurity.co.za';

    // Email body
    $body = "You have received a new message from your website contact form.\n\n";
    $body .= "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Phone: $phone\n";
    $body .= "Message:\n$message\n";

    // Email headers
    $headers = "From: webmaster@panoramasecurity.co.za\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Send the email
    if (mail($to, $subject, $body, $headers)) {
        // Redirect back to the homepage with a success message
        header('Location: index.html?success=true');
    } else {
        // Redirect back to the homepage with an error message
        header('Location: index.html?success=false');
    }
} else {
    // Not a POST request, redirect to homepage
    header('Location: index.html');
}
?>