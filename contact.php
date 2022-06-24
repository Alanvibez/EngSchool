<?php
$to  = 'alihan9009@gmail.com';
$subject = 'Письмо от клиента';
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
mail(
    $to,
    $subject,
    'Имя потенциального клиента: '.$name.
    '. Его номер телефона: '.$phone.
    '. Его сообщение: '.$message
);
?>