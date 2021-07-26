<?php
// Подключение файлов
require_once('phpmailer/PHPMailerAutoload.php');

// Присвоение данных из формы переменным
$user_currency = $_POST['user_currency'];
$conversion_currency = $_POST['conversion_currency'];
$user_mail = $_POST['user_mail'];

// Формирование самого письма
$title = "Письмо с сайта calculator.ru";
$body = "
<h2>Заявка на конвертацию валюты</h2>
<b>Сумма в рублях:</b> $user_currency<br>
<b>Почта:</b> $user_mail<br>
<b>Сумма в валюте: </b>$conversion_currency";


$mail = new PHPMailer();

  $mail->isSMTP();
  $mail->CharSet = "UTF-8";
  $mail->SMTPAuth   = true;
  //$mail->SMTPDebug = 2;

  // Настройка SMTP yandex
  $mail->Host = 'smtp.yandex.ru';
  $mail->Username = 'fiivanovafekla';
  $mail->Password = 'nksvgdmqbounlhdc';
  $mail->SMTPSecure = 'ssl';
  $mail->Port = 465;
  $mail->setFrom('fiivanovafekla@yandex.ru');

  // Получатель письма
  $mail->addAddress('merkisk@yandex.ru');
  $mail->addAddress(''.$user_mail.'');

  // Отправка сообщения
  $mail->isHTML(true);
  $mail->Subject = $title;
  $mail->Body = $body;

  // Проверяем отравленность сообщения
 // Проверяем отравленность сообщения
  if ($mail->send()) {$message = "success";}
  else {$message = "error";}

  // Отображение результата
header('Content-type: application/json');
echo json_encode(['message' => $message]);


