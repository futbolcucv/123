# Portfolyo Web Sitesi 🚀

Modern, responsive ve tamamen özelleştirilebilir bir portfolyo web sitesi şablonu.

## 🎨 Özellikler

- ✅ **Responsive Tasarım** - Tüm cihazlarda mükemmel görünüm
- ✅ **Modern UI/UX** - Gradient renkler ve smooth animasyonlar
- ✅ **Hızlı Yükleme** - Minimal CSS ve JavaScript
- ✅ **SEO Uyumlu** - Semantic HTML yapısı
- ✅ **Kolay Özelleştirme** - Basit HTML/CSS/JS
- ✅ **İletişim Formu** - Ziyaretçiler mesaj gönderebilir
- ✅ **Proje Galerisi** - Çalışmalarınızı sergilemek için
- ✅ **Yetenekler Bölümü** - Progres barları ile becerileri göster

## 📁 Dosya Yapısı

```
.
├── index.html          # Ana HTML dosyası
├── styles.css          # CSS stilleri
├── script.js           # JavaScript işlevselliği
└── README.md          # Bu dosya
```

## 🚀 Hızlı Başlangıç

1. **Dosyaları İndirin**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Tarayıcıda Açın**
   - `index.html` dosyasına çift tıklayın
   - Veya yerel bir sunucu kullanın:
   ```bash
   python -m http.server 8000
   ```

3. **Özelleştirin**
   - `index.html` dosyasını açın
   - Kendi bilgilerinizi ekleyin
   - Renkleri ve içeriği değiştirin

## 📝 Özelleştirme Rehberi

### Kişisel Bilgiler
`index.html` dosyasında aşağıdaki yerler değiştirin:

```html
<!-- Başlık -->
<h1>Merhaba, Ben [ADI SOYADINIZ]</h1>
<p>[UNVANINIZı]</p>

<!-- İletişim Bilgileri -->
<p><strong>Email:</strong> [EMAIL]</p>
<p><strong>Telefon:</strong> [TELEFON]</p>
<p><strong>Konum:</strong> [KONUM]</p>
```

### Renkler
`styles.css` dosyasında CSS değişkenlerini değiştirin:

```css
:root {
    --primary-color: #667eea;      /* Ana renk */
    --secondary-color: #764ba2;    /* İkincil renk */
    --text-color: #333;            /* Yazı rengi */
    --light-bg: #f7f9fc;           /* Açık arka plan */
}
```

### Projeler
`index.html` içinde `.project-card` bölümünü düzenleyin:

```html
<div class="project-card">
    <div class="project-image" style="background: [RENK];"></div>
    <h3>[PROJE ADI]</h3>
    <p>[PROJE AÇIKLAMASI]</p>
    <a href="[BAĞLANTI]" class="project-link">Detaylar →</a>
</div>
```

### Yetenekler
Becerilerinizi eklemek için `.skill-item` bölümünü kopyalayın:

```html
<div class="skill-item">
    <span>[BECERI ADI]</span>
    <div class="skill-bar">
        <div class="skill-progress" style="width: 90%"></div>
    </div>
</div>
```

## 🌐 Deployment

### GitHub Pages
1. Repository ayarlarına gidin
2. GitHub Pages bölümünü açın
3. Main branch'i seçin
4. `https://yourusername.github.io/portfolio` adresinde yayınlanacak

### Netlify
1. [netlify.com](https://www.netlify.com) ziyaret edin
2. Repository'i bağlayın
3. Otomatik olarak deploy edilecek

### Vercel
1. [vercel.com](https://www.vercel.com) ziyaret edin
2. GitHub repository'nizi import edin
3. Otomatik deploy başlayacak

## 🛠️ Teknolojiler

- **HTML5** - Semantic yapı
- **CSS3** - Modern stilleme
- **JavaScript** - İnteraktivite
- **Gradient** - Modern tasarım
- **Smooth Scroll** - Düzgün navigasyon

## 📱 Responsive Breakpoints

- **Desktop**: 1200px ve üstü
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: 480px altı

## ✨ Bonus Özellikler

- ✅ Smooth scroll animasyon
- ✅ Scroll-to-top butonu
- ✅ Hover efektleri
- ✅ Contact formu validasyonu
- ✅ Skill bars animasyon
- ✅ Navigation aktif state

## 📧 İletişim Formu

Formu gerçekten çalışan hale getirmek için bir backend servisi gerekir. Alternatif olarak:

1. **Formspree**: https://formspree.io
2. **EmailJS**: https://www.emailjs.com
3. **Netlify Forms**: Netlify'da host ederseniz otomatik

## 🎓 Öğrenme Kaynakları

- [MDN Web Docs](https://developer.mozilla.org)
- [CSS-Tricks](https://css-tricks.com)
- [JavaScript Info](https://javascript.info)

## 📄 Lisans

Bu proje MIT lisansı altında açıktır.

## 🤝 Katkı

Katkı yapmak istiyorsanız:
1. Fork yapın
2. Branch oluşturun (`git checkout -b feature/amazing`)
3. Commit yapın (`git commit -m 'Add amazing feature'`)
4. Push yapın (`git push origin feature/amazing`)
5. Pull Request açın

## 📌 Not

Bu şablon tamamen özelleştirilebilir. Kendi stilinizi ve içeriğinizi eklemekten çekinmeyin!

---

**Hazırlanma Tarihi**: 2026  
**Yeni Şey Ögrendiniz mi? Yıldız verin! ⭐**