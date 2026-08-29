# Lilis Nurwijayanti — Professional Portfolio

Versi ini dibuat sebagai **website portfolio profesional** yang dapat dipakai di:

1. **GitHub Pages** → gunakan `index.html`
2. **Hosting PHP / XAMPP** → gunakan `index.php` atau `index.html`
3. **GitHub repository** → seluruh source code dapat dibaca, fork, dan dikembangkan.

## Fitur
- Responsive desktop/tablet/mobile
- Desain editorial modern: black + yellow
- Hero section profesional
- About, education, experience, projects, affiliate, documentation, contact
- Scroll reveal animation
- Active navigation saat scroll
- Reading progress bar
- Dark/light mode
- Mobile navigation
- Email, Instagram, dan WhatsApp link
- Tidak membutuhkan database
- Tidak membutuhkan framework
- Asset foto lokal

## GitHub Pages
GitHub Pages tidak menjalankan PHP server-side. Karena itu, untuk GitHub Pages gunakan:

`index.html + style.css + script.js + assets/`

Jangan mengganti `index.html` dengan `index.php` di GitHub Pages.

### Upload
```bash
git init
git add .
git commit -m "Create professional portfolio"
git branch -M main
git remote add origin https://github.com/USERNAME/portfolio-lilis.git
git push -u origin main
```

Lalu di GitHub:
Settings → Pages → Deploy from branch → `main` → `/ (root)`.

## Hosting PHP / XAMPP
Salin folder ke:

`C:\xampp\htdocs\portfolio_lilis_pro\`

Jalankan Apache, lalu buka:

`http://localhost/portfolio_lilis_pro/`

## Lisensi
Kode menggunakan MIT License. Foto dan konten pribadi tetap milik pemiliknya.
