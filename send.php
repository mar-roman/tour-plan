<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$email = $_POST['email'];

// Формирование самого письма
if(!empty($email)){
    if(empty($name) && empty($phone) && empty($message)){
        $title = "Новая заявка Best Tour Plan Newsletter";
        $body = "
        <h2>Новое письмо</h2>
        <b>email:</b> $email<br>";
    } else {
        $title = "Новое обращение Best Tour Plan Booking";
        $body = "
        <h2>Новое письмо</h2>
        <b>Имя:</b> $name<br>
        <b>Телефон:</b> $phone<br>
        <b>email:</b> $email<br><br>
        <b>Сообщение:</b><br>$message";
    }
} else {
    $title = "Новое обращение Best Tour Plan";
    $body = "
    <h2>Новое письмо</h2>
    <b>Имя:</b> $name<br>
    <b>Телефон:</b> $phone<br><br>
    <b>Сообщение:</b><br>$message
    ";
}

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'roman.besttourplan@gmail.com'; // Логин на почте
    $mail->Password   = 'K9hiSwS2WB'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('roman.besttourplan@gmail.com', 'Роман Маркарянц'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('roman.markaryants@yandex.ru');  

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";}
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header('Location: thankyou.html');