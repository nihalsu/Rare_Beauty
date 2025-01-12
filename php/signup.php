<?php
require 'db.php'; 

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $ad = $_POST['first_name']; 
    $soyad = $_POST['last_name']; 
    $eposta = $_POST['email']; 
    $sifre = $_POST['password']; 

    
    $kontrol = $conn->prepare("SELECT * FROM users WHERE email = ?");
    $kontrol->bind_param("s", $eposta);
    $kontrol->execute();
    $sonuc = $kontrol->get_result();

    if ($sonuc->num_rows > 0) {
        echo "Bu e-posta adresi zaten kayıtlı";
    } else {
        
        $ekle = $conn->prepare("INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)");
        $ekle->bind_param("ssss", $ad, $soyad, $eposta, $sifre);

        if ($ekle->execute()) {
            echo "Kayıt başarılı!";
            header("Location: ../login.html"); 
            exit(); 
        } else {
            echo "Kayıt işlemi sırasında bir sorun oluştu: " . $ekle->error;
        }
    }
    $kontrol->close();
    $ekle->close();
    $conn->close();
} else {
    echo "Geçersiz istek!";
}
?>