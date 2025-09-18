<?php 
require 'vendor/autoload.php'; 

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $phone = htmlspecialchars(trim($_POST['tel']));
    $message = htmlspecialchars(trim($_POST['message']));

    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP();                                            
        $mail->Host       = 'ibis.aserv.co.za';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'info@panoramasecurity.co.za';
        $mail->Password   = 'PSecurity2025*';
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;   
        $mail->Port       = 587; 

        // Recipients
        $mail->setFrom('info@panoramasecurity.co.za', 'Panorama Security Website');
        $mail->addAddress('info@panoramasecurity.co.za');
        $mail->addReplyTo($email, $name);

        // Content
        $mail->isHTML(false);
        $mail->Subject = 'New Contact Form Message from PanoramaSecurity.co.za';
        $mail->Body    = "You have received a new message from your website contact form.\n\n";
        $mail->Body   .= "Name: $name\n";
        $mail->Body   .= "Email: $email\n";
        $mail->Body   .= "Phone: $phone\n";
        $mail->Body   .= "Message:\n$message\n";

        $mail->send();
        header('Location: index.html?success=true');
        exit();
        
    } catch (Exception $e) {
        header('Location: index.html?success=false');
        exit();
    }
} else {
    echo '<p>No POST data received</p>';
}
?>