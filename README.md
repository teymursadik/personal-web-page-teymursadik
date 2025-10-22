[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/7C3xAGjq)
 Kişisel Web Sayfası – Sadık Teymur

Amaç

Bu ödev, öğrencilerin kendi kişisel web sayfalarını tasarlayıp yayınlayarak HTML, CSS ve OpenLayers'a aşinalık kazanmalarına yardımcı olmayı amaçlamaktadır. Bu proje, Hacettepe Üniversitesi'nde GMT458 - Web CBS Uygulamaları dersinin bir parçası olarak tamamlanmıştır.

Temel amaç, yalnızca web teknolojilerini uygulamak değil, aynı zamanda GitHub Pages'da bir web sitesini barındırma ve yönetme konusunda uygulamalı deneyim kazanmaktır.

Proje Bölümleri (HTML Yapısı)

Web sitesi, 4 ana bölümden (HTML dosyasından) oluşmaktadır:

Ana Sayfa (index.html): Ziyaretçiyi karşılayan giriş sayfası.

Hakkımda (hakkımda.html): Akademik geçmişim, ilgi alanlarım ve CSS ile oluşturulmuş yetenek grafiğim.

Sosyal (Sosyal.html): Sosyal medya linklerimi içeren, telefon tasarımı kullanılmış interaktif bir sayfa.

Harita (harita.html): OpenLayers kullanılarak entegre edilmiş etkileşimli bir harita.

Temel Özellikler (CSS & Tasarım)

Projenin arayüzü, modern CSS teknikleri kullanılarak tasarlanmıştır:

Duyarlı Tasarım (Responsive Design): Sayfa düzeni, @media sorguları kullanılarak hem masaüstü hem de mobil cihazlar için optimize edilmiştir.

CSS Animasyonları: Kullanıcı deneyimini zenginleştirmek için çeşitli animasyonlar eklenmiştir:

@keyframes bounce: Sosyal medya ikonları için zıplama efekti.

@keyframes slideInFromLeft: Hakkımda sayfasındaki logo için soldan kayma efekti.

@keyframes growBar: Yetenek grafiğindeki çubuklar için büyüme animasyonu.

Modern Kullanıcı Arayüzü: Site genelinde sabit bir arka plan resmi (background-attachment: fixed) ve bu resimle uyumlu beyaz metin renkleri kullanılmıştır.

CSS Yetenek Grafiği: Harici bir kütüphane olmadan, sadece HTML ve CSS (Flexbox) kullanılarak hakkımda.html sayfasında bir çubuk grafik oluşturulmuştur.

OpenLayers Entegrasyonu

harita.html sayfası, OpenLayers kütüphanesi kullanılarak interaktif bir harita içerir:

Kaydırılabilir ve yakınlaştırılabilir temel harita.

Belirli bir konumu gösteren konum işaretleyici (Marker).

Temel harita kontrolleri (Zoom in/out).

Kullanılan Teknolojiler

Kategori

Araçlar / Kütüphaneler

Web Tasarımı

HTML5, CSS3

Haritalama

OpenLayers

Konseptler

CSS Flexbox, CSS Animasyonları, Responsive Tasarım

Coğrafi Bilgi Sistemleri

QGIS, Netcad (Geçmiş tecrübe)

Programlama

Python (Geçmiş tecrübe)

Sürüm Kontrolü

Git, GitHub

Yapay Zeka Kullanımı

Proje geliştirme sürecinde Gemini (Google) desteğinden çok az düzeyde yararlanılmıştır. Toplam proje geliştirme süresinin tahmini olarak yalnızca %5'lik bir kısmında yapay zeka desteği alınmıştır.

AI kullanımı, bir öğrenme aracı olmaktan çok, bir hata ayıklama (debugging) ve sözdizimi (syntax) doğrulama aracı olarak gerçekleşmiştir.

Kullanım, büyük ölçüde aşağıdaki gibi küçük, anlık sorunlarla sınırlı kalmıştır:

Yazılmış bir CSS kuralının neden beklendiği gibi çalışmadığını hızlıca tespit etmek (Örneğin, navigasyon linklerinin renginin !important olmadan neden değişmediği).

Belirli bir CSS özelliği için doğru sözdizimini (syntax) hızlıca hatırlamak.

Yetenek grafiğinin şeffaf (transparent) arka plana sahip olması için hangi özelliğin (background-color) kullanılması gerektiğini teyit etmek.

Projenin genel tasarımı, HTML yapısı, sayfa düzeni (layout) ve kodun büyük çoğunluğu (%95'i) yapay zeka müdahalesi olmadan, ders materyalleri ve kişisel çaba ile tamamlanmıştır.

Barındırma

Proje, doğrudan GitHub deposundan ücretsiz barındırma sağlayan GitHub Pages kullanılarak yayınlandı.

Öğe

Bağlantı

📁 Depo

[GitHub Deposu] (https://github.com/GMT-458-Web-GIS/personal-web-page-teymursadik.git)

🌍 Canlı Web Sitesi

[Web Sayfamı Görüntüle] (https://KULLANICI-ADIN.github.io/REPO-ADIN/)


Yazar

Sadık Teymur
Geomatik Mühendisliği Öğrencisi
Hacettepe Üniversitesi
Ankara, Türkiye

Notlar

Bu proje, web tasarımı (HTML/CSS), GitHub sürüm kontrolü ve bir web sitesinin çevrimiçi yayınlanması konusundaki anlayışımı geliştirmeme yardımcı oldu. Ayrıca, web teknolojilerini OpenLayers gibi coğrafi görselleştirme araçlarıyla birleştirmek için harika bir fırsattı.