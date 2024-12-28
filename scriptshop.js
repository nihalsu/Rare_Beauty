//lazım
// JSON verilerini çekme ve belirli kategoriye yönlendirme işlevi
function loadCategory(category) {
    // JSON dosyasından veriyi çek
    fetch('products.json')
        .then(response => response.json())
        .then(data => {
            // Kategoriye göre filtrele
            const filteredProducts = data.products.filter(product => product.category === category);
            // Veriyi localStorage'a kaydet
            localStorage.setItem('filteredProducts', JSON.stringify(filteredProducts));
            // Ürünlerin listeleneceği sayfaya yönlendir
            window.location.href = 'category.html';
        })
        .catch(error => console.error('Error fetching products:', error));
}
// Kategori menüsünü aç/kapat
function toggleCategoryMenu(event) {
    event.preventDefault(); // Sayfanın yeniden yüklenmesini engeller
    const categoryMenu = document.getElementById('categoryMenu');
    categoryMenu.style.display = (categoryMenu.style.display === 'flex') ? 'none' : 'flex';
}
// Kullanıcı giriş durumunu kontrol etme
function checkLoginStatus() {
    const user = localStorage.getItem("loggedInUser");
    if (user) {
        document.querySelector(".right-links .nav-link").textContent = JSON.parse(user).name;
        document.querySelector(".right-links .nav-link").href = "cart.html"; // Sepetim sayfasına yönlendirme
    }
}

// Giriş yapma işlemi
function login(event) {
    event.preventDefault(); // Formun varsayılan davranışını engelle
    const email = document.querySelector("input[type='email']").value;
    const password = document.querySelector("input[type='password']").value;
    const storedUser = JSON.parse(localStorage.getItem("registeredUser"));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
        localStorage.setItem("loggedInUser", JSON.stringify(storedUser)); // Giriş yapan kullanıcıyı kaydet
        alert("Giriş başarılı!");
        window.location.href = "index.html"; // Ana sayfaya yönlendirme
    } else {
        alert("E-posta veya şifre hatalı!");
    }
}

// Kayıt olma işlemi
function signup(event) {
    event.preventDefault(); // Formun varsayılan davranışını engelle
    const name = document.querySelector("input[name='name']").value;
    const email = document.querySelector("input[type='email']").value;
    const password = document.querySelector("input[type='password']").value;

    // Kullanıcıyı kaydet
    const newUser = { name, email, password };
    localStorage.setItem("registeredUser", JSON.stringify(newUser));
    alert("Kayıt başarılı! Şimdi giriş yapabilirsiniz.");
    window.location.href = "login.html"; // Giriş sayfasına yönlendirme
}

// Sayfa yüklendiğinde giriş durumunu kontrol et
document.addEventListener("DOMContentLoaded", checkLoginStatus);
