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





