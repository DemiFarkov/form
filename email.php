<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = 'Имя: ' . $_POST['name'] . ' ';
    $phone = 'Телефон: ' . $_POST['phone'] . ' ';
    $connection = 'Способ Связи: ' . $_POST['radio'] . ' ';
    
    $mailTo = "support@lemurteam.ru";
    $subject = "Тестовое";
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=utf-8\r\n";
    $headers .= "From: demi.farkov@mail.ru\r\n";
    if (mail($mailTo, $subject, $name . $phone . $connection, $headers)) {
        echo "Спасибо, " . $_POST['name'] . ", мы свяжемся с вами в самое ближайшее время!";
    } else {
        echo "Сообщение не отправлено!";
    }
}
?>