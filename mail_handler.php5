<?php

    $name    = $_POST['name'];
    $email   = $_POST['email'];
    $message = $_POST['message'];
    $phone = $_POST['phone'];
    $url.= $_SERVER['HTTP_HOST']; 

    $to      = "sekratariat@kancelariaadwokackabdf.pl";
    $subject = "Nowa wiadomość z " . $url;
    $mailmessage = "Nowa wiadomość ze strony " . $url . "\n\n"
                . "<b>Od:</b> " . $name . "<br>"
                . "<b>Numer telefonu:</b> " . $phone . "<br>"
                . "<b>Email:</b> " . $email . "<br>"
                . "<b>Treść:</b> " . "<br><br>" .$message;
    $headers = "From: $email" . "\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    if( mail($to,$subject,$mailmessage,$headers) )
    {
        echo "Dziękujemy za przesłanie wiadomości. Skontaktujemy się z Państwem jak najszybciej.";
    }
    else
    {
        echo "Niestety podczas wysyłąnia maila wystąpił błąd. Spróbuj ponownie.";
    }
?>