# 🏛️ Syntax Loft - Profil Perusahaan Resmi (Dokumentasi Legacy)

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.0-FF0055?logo=framer)
![GSAP](https://img.shields.io/badge/GSAP-3.15-88CE02?logo=greensock)

Selamat datang di repositori **Profil Perusahaan Resmi Syntax Loft**. Dokumen ini berfungsi sebagai **Dokumentasi Legacy**, memberikan panduan komprehensif yang tidak hanya berisi cara menjalankan proyek ini, tetapi juga arsitektur yang mendasarinya, filosofi desain, dan keputusan teknis yang diambil. Dokumen ini dirancang untuk memberdayakan para *developer* dan *maintainer* di masa depan agar dapat menskalakan dan mengelola platform ini secara efisien.

---

## 📑 Daftar Isi

1. [Gambaran Umum & Visi Proyek](#1-gambaran-umum--visi-proyek)
2. [Tech Stack & Arsitektur](#2-tech-stack--arsitektur)
3. [Pembedahan Struktur Proyek](#3-pembedahan-struktur-proyek)
4. [Sistem Desain & Rekayasa UI/UX](#4-sistem-desain--rekayasa-uiux)
5. [Alur Kerja Pengembangan](#5-alur-kerja-pengembangan)
6. [Deployment & CI/CD](#6-deployment--cicd)
7. [Pemeliharaan & Skalabilitas](#7-pemeliharaan--skalabilitas)

---

## 1. Gambaran Umum & Visi Proyek

**Syntax Loft** adalah *software house* premium yang berspesialisasi dalam solusi digital berperforma tinggi dan memukau secara visual. *Website* profil perusahaan ini bertindak sebagai etalase digital untuk menarik klien B2B, pendiri *startup*, dan bisnis kelas atas (*high-end*).

### 🎯 Tujuan Utama
- **Menunjukkan Kapabilitas Teknis:** Situs ini sendiri adalah bukti konsep dari kemampuan Syntax Loft—cepat, aksesibel, dan memiliki animasi yang indah.
- **Berorientasi Konversi:** Mengarahkan pengunjung secara alami dari mempelajari layanan, melihat portofolio pekerjaan, hingga akhirnya menjadwalkan pertemuan (melalui Calendly/Kontak).

### 📈 Metrik Kesuksesan
- **Performa:** Mempertahankan skor 90+ di Google Lighthouse (*Performance, Accessibility, Best Practices, SEO*).
- **Responsif & Adaptif:** Eksekusi tanpa celah di semua perangkat, dengan animasi berat yang dinonaktifkan secara elegan pada perangkat dengan daya rendah atau layar kecil.
- **Kemudahan Pemeliharaan (*Maintainability*):** Komponen yang modular, pengetikan TypeScript yang ketat, dan penerapan prinsip *clean code*.

---

## 2. Tech Stack & Arsitektur

Proyek ini dibangun di atas ekosistem React modern, yang dipilih karena performa dan pengalaman pengembangnya (*developer experience*).

### Framework Utama
* **[Next.js 14 (App Router)](https://nextjs.org/):** Digunakan untuk *Server-Side Rendering* (SSR), *Static Site Generation* (SSG), dan *API routes*. *App Router* menyediakan *layout* bersarang (*nested layouts*) yang intuitif dan perutean yang dioptimalkan.
* **[TypeScript](https://www.typescriptlang.org/):** Menerapkan pengetikan statis (*static typing*) untuk menangkap *error* selama pengembangan dan berfungsi sebagai dokumentasi hidup untuk struktur data.

### Styling & UI
* **[Tailwind CSS](https://tailwindcss.com/):** *Framework* CSS berbasis utilitas. Dipilih untuk pengembangan UI yang cepat dan implementasi sistem desain monokromatik/gelap kami yang mulus tanpa perlu berpindah konteks ke file CSS secara terpisah.
* **[Lucide React](https://lucide.dev/):** Pustaka ikon SVG yang konsisten, bersih, dan ringan.

### Strategi Animasi Ganda
Kami menggunakan dua pustaka animasi yang berbeda, masing-masing melayani tujuan arsitektur spesifik untuk memaksimalkan performa:
1. **[Framer Motion](https://www.framer.com/motion/):** Menangani **animasi yang digerakkan oleh *state* React**. Digunakan untuk transisi halaman, pergeseran *layout*, interaksi mikro (*hover states*), dan animasi masuk/keluar yang sederhana.
2. **[GSAP (GreenSock)](https://gsap.com/):** Menangani **animasi *timeline* kompleks dan yang digerakkan oleh *scroll***. Digunakan khusus untuk efek *parallax* berperforma tinggi dan animasi urutan yang jika tidak menggunakan GSAP dapat menyebabkan *bottleneck* pada siklus *render* React.

### Integrasi Tambahan
* **[Puter.js](https://puter.com/):** Terintegrasi untuk kemampuan *cloud* dan potensi fitur asisten *chat* AI (`@heyputer/puter.js`).

---

## 3. Pembedahan Struktur Proyek

Repositori ini mengikuti konvensi Next.js App Router, dengan pemisahan yang ketat antara komponen UI dan logika halaman.

```text
syntax-loft/
├── app/                     # Next.js App Router (Halaman & Layout)
│   ├── layout.tsx           # Root layout (Providers, Fonts, Header, Footer)
│   ├── globals.css          # Direktif Tailwind & variabel CSS global
│   ├── page.tsx             # '/' - Beranda (Hero, Ringkasan Layanan, Karya Pilihan)
│   ├── about/page.tsx       # '/about' - Filosofi perusahaan & Tim
│   ├── clients/page.tsx     # '/clients' - Logo klien & Testimoni
│   ├── contact/page.tsx     # '/contact' - Formulir kontak & Calendly
│   ├── services/page.tsx    # '/services' - Penawaran layanan secara detail
│   ├── work/page.tsx        # '/work' - Grid portofolio
│   └── project-brief/       # '/project-brief' - Formulir/FAQ untuk onboarding klien baru
│
├── components/              # Komponen UI Modular (Dapat digunakan kembali)
│   ├── navigation.tsx       # Header lengket (sticky) utama
│   ├── footer.tsx           # Footer global
│   ├── hero.tsx             # Bagian hero beranda dengan efek parallax GSAP
│   ├── marquee.tsx          # Ticker klien yang menggulir tanpa batas
│   ├── portfolio-card.tsx   # Kartu tampilan proyek individu
│   ├── service-card.tsx     # Kartu penawaran layanan individu
│   ├── ai-chat.tsx          # UI Asisten AI yang ditenagai oleh Puter.js
│   ├── cta-section.tsx      # Blok Call-to-Action global
│   └── ...                  # Komponen utilitas (magnetic-button, scroll-reveal, dll.)
│
├── types/                   # Antarmuka (interfaces) dan deklarasi TypeScript global
├── public/                  # Aset statis (gambar, font, favicon)
├── tailwind.config.ts       # Timpaan tema Tailwind (Warna, Font)
└── package.json             # Dependensi dan skrip NPM
```

---

## 4. Sistem Desain & Rekayasa UI/UX

Situs web ini mengandalkan estetika premium yang ketat yang dirancang untuk memproyeksikan otoritas dan keanggunan.

### Palet Warna (Monokromatik Gelap)
* **Background Utama:** `#0A0A0A` (Abu-abu terdalam/hitam) - Mengurangi ketegangan mata sambil mempertahankan nuansa premium.
* **Teks Utama:** `#FFFFFF` (Putih) - Untuk *heading* dengan kontras tinggi.
* **Teks Sekunder:** `#E5E5E5` / `#A3A3A3` - Untuk teks isi (*body copy*) dan teks yang diredam (*muted*).
* **Aksen:** Disediakan untuk status interaktif atau tombol CTA penting (sering diterapkan sebagai pendaran cahaya halus (*glow*) atau warna terbalik (*inverted*)).

### Tipografi
* **Heading (Seni & Keanggunan):** `Syne` - Digunakan untuk teks hero berukuran masif dan *header* bagian.
* **Body & UI (Keterbacaan):** `Inter` (atau `Geist`) - Digunakan untuk paragraf, tombol, dan teks detail.

### Panduan Animasi (Utamakan Performa)
1. **Smooth Scrolling:** Diimplementasikan secara global untuk pengalaman menjelajah yang cair.
2. **Subtle Parallax:** Elemen di latar belakang menggulir dengan kecepatan berbeda dari latar depan. **Aturan:** Harus dinonaktifkan atau sangat disederhanakan melalui kueri media CSS (`@media (prefers-reduced-motion: reduce)`) atau pengecekan JS untuk perangkat seluler demi menghemat baterai dan memastikan *rendering* yang mulus.
3. **Magnetic Buttons:** Tombol CTA interaktif yang sedikit "menarik" ke arah kursor pengguna.
4. **Scroll Reveal:** Teks dan gambar memudar dengan lembut dan meluncur ke atas saat memasuki area pandang (*viewport*).

---

## 5. Alur Kerja Pengembangan

### Prasyarat
* Node.js (v18 atau lebih tinggi direkomendasikan)
* NPM atau Yarn

### Persiapan Lokal
1. Kloning repositori:
   ```bash
   git clone <repository-url>
   cd syntax-loft
   ```
2. Instal dependensi:
   ```bash
   npm install
   ```
3. Siapkan Environment Variables:
   Buat file `.env.local` di direktori root. Tambahkan kunci (keys) yang diperlukan (misal: kunci Puter.js, Analytics, dll.).
4. Jalankan *development server*:
   ```bash
   npm run dev
   ```
5. Buka [http://localhost:3000](http://localhost:3000)

### Konvensi Kode
* **Arsitektur Komponen:** Gunakan *React Functional Components*. Pisahkan manajemen *state* yang kompleks dari *rendering* UI sebisa mungkin.
* **Styling:** Selalu gunakan kelas utilitas Tailwind. Untuk animasi kompleks, gunakan utilitas `cn()` (biasanya dibangun dengan `clsx` dan `tailwind-merge`) untuk menangani penggabungan kelas secara kondisional.
* **"Use Client":** Next.js App Router secara *default* menggunakan *Server Components*. Hanya tambahkan `"use client"` di bagian atas komponen yang memerlukan *hooks* (`useState`, `useEffect`), Framer Motion, atau API peramban (*browser*). Jaga agar komponen klien yang interaktif berada serendah mungkin di dalam pohon komponen (*tree*) untuk memaksimalkan manfaat SSR.

---

## 6. Deployment & CI/CD

Aplikasi ini sangat dioptimalkan untuk diterapkan (*deployment*) di **Vercel**.

### Proses Build
1. Dorong (*push*) perubahan ke *branch* `main`.
2. Vercel secara otomatis mencegat *webhook*, menjalankan `npm run build`, dan melakukan pengecekan tipe (*type checking*).
3. Hasil *build* yang berhasil di-*deploy* ke fungsi Edge/Serverless.

**Pemeriksaan Build Manual:**
Selalu jalankan perintah ini secara lokal sebelum melakukan *push* untuk menangkap *error* TS atau ESLint:
```bash
npm run build
```

---

## 7. Pemeliharaan & Skalabilitas

Seiring berkembangnya Syntax Loft, basis kode ini dirancang untuk ikut berkembang bersamanya.

### Menambahkan Halaman Baru
1. Buat folder baru di dalam `app/` (misal: `app/careers`).
2. Buat file `page.tsx` di dalam folder tersebut.
3. Impor blok UI yang diperlukan dari `components/` (misal: `section-header.tsx`, `cta-section.tsx`).

### Integrasi CMS di Masa Depan (Headless)
Saat ini, item portofolio dan layanan mungkin di-*hardcode* atau dipetakan dari *array* JSON lokal. Di masa mendatang, ini harus dimigrasikan ke Headless CMS (seperti Sanity, Strapi, atau Contentful):
1. Buat file `lib/cms.ts` untuk menangani pengambilan data (*fetching*) API.
2. Ubah halaman seperti `app/work/page.tsx` untuk mengambil data dari sisi server menggunakan Next.js `fetch` dengan `next: { revalidate: 3600 }` untuk ISR (*Incremental Static Regeneration*).

### Mengelola Animasi
Jika animasi terasa lambat, periksa apakah animasi tersebut berjalan di CPU, bukan di GPU. Pastikan animasi GSAP/Framer Motion menargetkan properti `transform` (misal: `x`, `y`, `scale`) dan `opacity`, bukan `width`, `height`, atau `top`/`left`, untuk memicu akselerasi perangkat keras (*hardware acceleration*).

---
*Dikembangkan dengan penuh dedikasi oleh Tim Engineering Syntax Loft.* 🖤
