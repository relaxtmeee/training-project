<?php
    $name = filter_var(trim($_POST['name']),
    FILTER_SANITIZE_STRING);
    $email = filter_var(trim($_POST['email']),
    FILTER_SANITIZE_STRING);
    
    if(mb_strlen($name) < 1 || mb_strlen($name) > 90){
        echo "Недопустимая длина имени";
        exit();
    }else if(mb_strlen($email) < 2 || mb_strlen($email) > 100){
        echo "Недопустимая длина имени(от 2 до 10 символов)";
        exit();
    }


    $mysql = new mysqli('localhost','root2','root2','register-bd');

    $mysql->query("INSERT INTO `users` (`name`,`email`) 
    VALUES('$name','$email') ");

    $mysql->close();

    header('Location: ../index.html');

?>