<?php

    $name = $_POST['name'];
    $email = $_POST['email'];
    $msg = $_POST['msg'];

    $name = trim(urldecode(htmlspecialchars($name)));
    $email = trim(urldecode(htmlspecialchars($email)));
    $msg = trim(urldecode(htmlspecialchars($msg)));

    if (mail("dmitrievvlad61@gmail.com", "Новый запрос", "
    <h1>На вашем сайте была оставлена заявка</h1>
    <br>
    от <strong>".$name."</strong>
    <br>
    e-mail <strong>".$email."</strong>
    <br>
    с сообщением: <em>".$msg."</em>
    <br>
    Поздравляем с новой заявкой!", "From: http://trisss.000webhostapp.com". "Cotent-type: text/html\r\n"))
    {
        echo '{"status" : "ok"}';
    } else {
        echo '{"status": "error"}';
    }

?>