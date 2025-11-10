# 🚀 Panduan Deploy ke GitHub Pages

Panduan lengkap untuk deploy portfolio website Anda ke GitHub Pages.

**Repository:** `rahmatdial-prjct/portofolio`  
**URL Setelah Deploy:** `https://rahmatdial-prjct.github.io/portofolio/`

---

## 📋 Persiapan Sebelum Deploy

### 1. Pastikan Anda Sudah Punya:
- ✅ Akun GitHub (username: `rahmatdial-prjct`)
- ✅ Git terinstall di komputer
- ✅ Repository GitHub bernama `portofolio` (buat dulu jika belum ada)

### 2. Cek Apakah Project Sudah Siap:
```bash
# Test build dulu untuk memastikan tidak ada error
npm run build
```

Jika build berhasil, akan muncul folder `build/` dengan file-file hasil build.

---

## 🔧 Langkah 1: Update Konfigurasi Vite

Buka file `vite.config.ts` dan ubah menjadi seperti ini:

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/portofolio/', // ← TAMBAHKAN INI (nama repository Anda)
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
    outDir: 'build',
  },
  server: {
    port: 3000,
    open: true,
  },
});
```

**⚠️ PENTING:** Tambahkan baris `base: '/portofolio/',` setelah `plugins: [react()],`

---

## 🔧 Langkah 2: Tambahkan Script Deploy

Buka file `package.json` dan tambahkan script `deploy`:

```json
{
  "name": "personal-portfolio-website",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "clsx": "*",
    "lucide-react": "^0.487.0",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "tailwind-merge": "*"
  },
  "devDependencies": {
    "@types/node": "^20.10.0",
    "@types/react": "^19.2.2",
    "@types/react-dom": "^19.2.2",
    "@vitejs/plugin-react-swc": "^3.10.2",
    "vite": "6.3.5"
  },
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "deploy": "npm run build && cd build && git init && git add -A && git commit -m 'Deploy' && git push -f https://github.com/rahmatdial-prjct/portofolio.git main:gh-pages && cd .."
  }
}
```

**Yang ditambahkan:** Script `"deploy"` di bagian `scripts`

---

## 📦 Langkah 3: Push Project ke GitHub (Jika Belum)

### A. Inisialisasi Git (jika belum):
```bash
git init
git add .
git commit -m "Initial commit"
```

### B. Hubungkan dengan Repository GitHub:
```bash
git remote add origin https://github.com/rahmatdial-prjct/portofolio.git
git branch -M main
git push -u origin main
```

**Catatan:** Jika repository `portofolio` belum ada di GitHub, buat dulu di https://github.com/new

---

## 🚀 Langkah 4: Deploy ke GitHub Pages

### Opsi A: Deploy Manual (Sederhana)

Jalankan perintah ini di terminal:

```bash
npm run deploy
```

Script ini akan:
1. Build project (`npm run build`)
2. Masuk ke folder `build/`
3. Inisialisasi git di folder build
4. Push ke branch `gh-pages` di GitHub

### Opsi B: Deploy Otomatis dengan GitHub Actions (Recommended)

Buat file `.github/workflows/deploy.yml` dengan isi:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main  # Deploy otomatis setiap push ke branch main

permissions:
  contents: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Build project
        run: npm run build

      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build
          publish_branch: gh-pages
```

Dengan GitHub Actions, setiap kali Anda push ke branch `main`, website akan otomatis di-deploy.

---

## ⚙️ Langkah 5: Aktifkan GitHub Pages

1. Buka repository di GitHub: `https://github.com/rahmatdial-prjct/portofolio`
2. Klik **Settings** (tab di atas)
3. Scroll ke bawah, klik **Pages** di sidebar kiri
4. Di bagian **Source**, pilih:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. Klik **Save**

**Tunggu 1-2 menit**, lalu website Anda akan live di:
### 🌐 **https://rahmatdial-prjct.github.io/portofolio/**

---

## ✅ Checklist Deploy

Gunakan checklist ini untuk memastikan semua langkah sudah dilakukan:

- [ ] Update `vite.config.ts` - tambahkan `base: '/portofolio/'`
- [ ] Tambahkan script `deploy` di `package.json`
- [ ] Test build: `npm run build` (pastikan tidak ada error)
- [ ] Push project ke GitHub repository `portofolio`
- [ ] Jalankan `npm run deploy` ATAU setup GitHub Actions
- [ ] Aktifkan GitHub Pages di Settings repository
- [ ] Tunggu 1-2 menit
- [ ] Buka `https://rahmatdial-prjct.github.io/portofolio/`
- [ ] Test semua fitur (navigasi, bahasa EN/ID, responsive, dll)

---

## 🔄 Update Website Setelah Deploy

Setiap kali Anda ingin update website:

### Jika Pakai Deploy Manual:
```bash
git add .
git commit -m "Update content"
git push origin main
npm run deploy
```

### Jika Pakai GitHub Actions:
```bash
git add .
git commit -m "Update content"
git push origin main
```
*(Otomatis deploy sendiri)*

---

## 🐛 Troubleshooting

### Problem 1: Website Tidak Muncul / 404 Error
**Solusi:**
- Pastikan `base: '/portofolio/'` sudah ditambahkan di `vite.config.ts`
- Pastikan branch `gh-pages` sudah ada di GitHub
- Cek Settings > Pages, pastikan Source sudah diset ke `gh-pages`

### Problem 2: CSS/JS Tidak Load (Blank Page)
**Solusi:**
- Pastikan `base: '/portofolio/'` di `vite.config.ts` sesuai dengan nama repository
- Build ulang: `npm run build`
- Deploy ulang: `npm run deploy`

### Problem 3: Images Tidak Muncul
**Solusi:**
- Jika pakai gambar lokal, taruh di folder `public/images/`
- Jika pakai URL eksternal, pastikan URL-nya benar
- Cek browser console (F12) untuk error

### Problem 4: Deploy Gagal - Permission Denied
**Solusi:**
- Pastikan Anda sudah login ke GitHub di terminal
- Atau gunakan Personal Access Token:
  ```bash
  git push -f https://USERNAME:TOKEN@github.com/rahmatdial-prjct/portofolio.git main:gh-pages
  ```

---

## 🎯 Tips Sebelum Deploy

1. **Test Lokal Dulu:**
   ```bash
   npm run build
   npx serve build
   ```
   Buka `http://localhost:3000` untuk preview hasil build

2. **Cek Semua Link:**
   - Email, WhatsApp, GitHub di Contact section
   - Link project di Projects section
   - Link certificate di Certificates section

3. **Update Informasi Personal:**
   - Nama di Hero section
   - Foto profil
   - Kontak (email, WhatsApp, GitHub)

4. **Test Kedua Bahasa:**
   - Klik tombol EN/ID
   - Pastikan semua terjemahan sudah benar

5. **Test Responsive:**
   - Buka di browser, tekan F12
   - Toggle device toolbar
   - Test di mobile, tablet, desktop view

---

## 📱 Alternatif Platform Deploy (Lebih Mudah)

Jika GitHub Pages terasa ribet, Anda bisa pakai platform lain yang lebih mudah:

### 1. **Vercel** (Paling Recommended)
- Gratis unlimited
- Auto deploy dari GitHub
- Custom domain gratis
- Setup 2 menit

**Cara:**
1. Buka https://vercel.com
2. Login dengan GitHub
3. Import repository `portofolio`
4. Klik Deploy
5. Selesai! ✅

### 2. **Netlify**
- Gratis unlimited
- Drag & drop folder `build/`
- Custom domain gratis

**Cara:**
1. Buka https://netlify.com
2. Drag & drop folder `build/` ke Netlify
3. Selesai! ✅

### 3. **Cloudflare Pages**
- Gratis unlimited
- Super cepat (CDN global)
- Auto deploy dari GitHub

---

## 📞 Butuh Bantuan?

Jika ada masalah saat deploy:
1. Cek error message di terminal
2. Cek browser console (F12) untuk error
3. Pastikan semua langkah di checklist sudah dilakukan
4. Coba build ulang: `npm run build`

---

## 📝 Catatan Penting

- **Jangan lupa** update `base: '/portofolio/'` di `vite.config.ts`
- **Jangan lupa** test build dulu sebelum deploy
- **Jangan lupa** aktifkan GitHub Pages di Settings
- **Tunggu 1-2 menit** setelah deploy pertama kali

---

**Good luck dengan deployment! 🚀**

Jika sudah berhasil deploy, jangan lupa share link-nya! 😊

