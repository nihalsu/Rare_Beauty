<?php
require 'db.php'; 

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email']; 
    $password = $_POST['password']; 

    // Kullanıcının var olup olmadıdğını sorgularız
    $query = $conn->prepare("SELECT * FROM users WHERE email = ?");
    $query->bind_param("s", $email);
    $query->execute();
    $result = $query->get_result();

    if ($result->num_rows > 0) {
        $user_data = $result->fetch_assoc();
        
        
        if ($password === $user_data['password']) {
            session_start();
            $_SESSION['logged_in_user'] = $user_data; 
            echo "Başarılı giriş!";
            header("Location: ../sepetim.html"); 
            exit();
        } else {
            echo "Hatalı şifre girdiniz!";
        }
    } else {
        echo "Kullanıcı mevcut de";
    }
    
    $query->close();
    $conn->close();
} else {
;
}
?>
