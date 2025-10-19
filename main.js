// Bu kod, tüm sayfa DOM'u hazır olduğunda çalışır
document.addEventListener('DOMContentLoaded', function() {

  // Gerekli elementleri seçiyoruz
  const darkModeToggle = document.getElementById('darkModeToggle');
  const body = document.body;

  // Sayfa yüklendiğinde hafızadaki tercihi kontrol et ve uygula
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'dark') {
    body.classList.add('dark-mode');
    darkModeToggle.textContent = '☀️'; // Buton ikonunu güneşe çevir
  }

  // Butona tıklandığında ne olacağını dinliyoruz
  darkModeToggle.addEventListener('click', function() {
    // body elementine 'dark-mode' sınıfını ekle/kaldır
    body.classList.toggle('dark-mode');

    // Kullanıcının tercihini tarayıcının hafızasına kaydet
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark');
      darkModeToggle.textContent = '☀️'; // Buton ikonunu güneşe çevir
    } else {
      localStorage.setItem('theme', 'light');
      darkModeToggle.textContent = '🌙'; // Buton ikonunu aya çevir
    }
  });

});