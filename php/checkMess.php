<?php
    $yourName = filter_var(trim($_POST['yourName']),
    FILTER_SANITIZE_STRING);
    $yourEmail = filter_var(trim($_POST['yourEmail']),
    FILTER_SANITIZE_STRING);
    $text = filter_var(trim($_POST['text']),
    FILTER_SANITIZE_STRING);

    if(mb_strlen($yourName) < 1 || mb_strlen($yourName) > 90){
        echo "Недопустимая длина имени";
        exit();
    }else if(mb_strlen($yourEmail) < 2 || mb_strlen($yourEmail) > 100){
        echo "Недопустимая длина имени(от 2 до 10 символов)";
        exit();
    }else if(mb_strlen($text) > 250){
        echo "Много символов(макс.250)";
        exit();
    }


    $mysqlText = new mysqli('localhost','root2','root2','register-bd');

    $mysqlText->query("INSERT INTO `sendMess` (`yourName`,`yourEmail`,`text`) 
    VALUES('$yourName','$yourEmail', 'text') ");

    $mysqlText->close();

    header('Location: ../index.html');
?>