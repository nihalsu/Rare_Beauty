//lazım
// Sayfa yüklendiğinde giriş durumunu kontrol et
function checkLoginStatus() {
    const loggedInUser = sessionStorage.getItem('loggedInUser'); // Oturumdaki kullanıcıyı kontrol et

    const navLink = document.querySelector("#username"); // Navbar'daki bağlantıyı al

    if (loggedInUser) {
        const user = JSON.parse(loggedInUser); // Kullanıcıyı JSON'dan çöz
        navLink.textContent = user.username; // Kullanıcı adını göster
        navLink.href = "sepetim.html"; // Sepet sayfasına yönlendirme
    } else {
        navLink.textContent = "Account"; // Giriş yapılmadıysa "Account" yaz
        navLink.href = "login.html"; // Login sayfasına yönlendir
    }
}

// Sayfa yüklendiğinde bu fonksiyonu çağır
document.addEventListener("DOMContentLoaded", checkLoginStatus);

// Kullanıcı çıkışı yaparsa, sessionStorage verisini temizle
function logout() {
    sessionStorage.removeItem('loggedInUser');
    window.location.href = 'login.html'; // Giriş sayfasına yönlendir
}
