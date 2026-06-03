# Product Requirements Document (PRD)
**Project Name:** Syntax Loft - Official Company Profile
**Document Version:** 1.0
**Date:** 23 April 2026

## 1. Project Overview
**Syntax Loft** adalah *software house* yang berfokus pada pembuatan *website* premium dan performa tinggi. *Website company profile* ini berfungsi sebagai wajah digital perusahaan, dirancang untuk menarik calon klien B2B dengan menampilkan portofolio, layanan, dan kredibilitas teknis melalui UI/UX yang elegan dan interaktif.

## 2. Target Audience
* Pemilik bisnis (UMKM hingga Korporat) yang membutuhkan transformasi digital.
* *Startup founders* yang mencari mitra *development* yang handal.
* Pengunjung yang menghargai kualitas visual dan performa *website* (*high-end clients*).

## 3. Design & UI/UX Guidelines
* **Tema Warna:** Monokromatik (*Dark & White*).
    * *Primary Background:* Hitam pekat (`#0A0A0A` atau `#000000`) untuk kesan misterius dan eksklusif.
    * *Text & Accents:* Putih (`#FFFFFF`) dan abu-abu terang (`#E5E5E5`) untuk kontras dan keterbacaan tingkat tinggi.
* **Tipografi:** *Font sans-serif* modern (misal: *Inter*, *Geist*, atau *Syne* untuk *heading* agar terkesan *artsy* namun rapi).
* **Animasi & Interaksi:**
    * **Smooth Scrolling:** Navigasi halaman yang mulus.
    * **Subtle Parallax:** Diterapkan pada elemen *background* atau gambar aset di *Hero Section* untuk memberikan efek kedalaman (3D *depth*). **Wajib dioptimasi untuk mobile.**
    * **Page Transitions:** Transisi masuk/keluar halaman yang halus menggunakan *fade* atau *slide-up*.
    * **Hover Effects:** Interaksi tombol dan kartu (*cards*) yang memberikan *feedback* visual instan (misal: invert warna saat di-*hover*).

## 4. Kebutuhan Teknis (Tech Stack)
* **Framework:** Next.js (App Router) + TypeScript.
* **Styling:** Tailwind CSS (mudah untuk *setup* tema *dark mode/monochrome*).
* **Animasi:** GSAP (untuk *parallax* kompleks & *scroll-triggered animations*) dan Framer Motion (untuk transisi halaman & UI *micro-interactions*).
* **Deployment:** Vercel (untuk CI/CD yang terintegrasi langsung dengan *repository*).
* **Version Control:** Git / GitHub.

## 5. Struktur Halaman (Sitemap)
1.  **Home:**
    * *Hero Section* dengan *copywriting* tajam dan *subtle parallax*.
    * *Ticker/Marquee* logo klien/teknologi.
    * Ringkasan *Services*.
    * *Featured Portfolio* (2-3 project terbaik).
    * *Call to Action* (CTA) untuk *meeting/contact*.
2.  **Services:** Detail layanan (Web Dev, UI/UX Design, System Integration).
3.  **Work / Portfolio:** Galeri proyek dengan filter kategori dan studi kasus (*case studies*).
4.  **About Us:** Visi, filosofi "Syntax Loft", dan profil *founder*.
5.  **Contact:** Formulir kontak, email, dan integrasi link kalender (misal: Calendly).
6.  **Our Client** Isi logo client nya apa saja 
## 6. Kriteria Kesuksesan (Success Metrics)
* **Performa:** Mendapatkan skor Lighthouse 90+ untuk *Performance, Accessibility, Best Practices,* dan *SEO*.
* **Responsivitas:** Tampilan sempurna di semua ukuran layar (*Mobile, Tablet, Desktop*). Animasi berat dimatikan pada *device* dengan layar kecil atau *low-power mode*.
* **Kualitas Kode:** Tidak ada *error* TypeScript, struktur komponen modular, dan *clean code*.
