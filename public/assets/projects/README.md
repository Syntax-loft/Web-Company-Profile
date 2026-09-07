# Project Preview Custom Images Folder

Folder ini digunakan untuk menyimpan foto/screenshot kustom dari proyek, aplikasi, atau website buatan Anda untuk ditampilkan di halaman Portfolio (`/work`) dan Beranda (`/`).

## Cara Ganti Foto (paling mudah)

1. Siapkan foto dengan **nama file** sesuai tabel di bawah
2. Taruh di folder ini (`public/assets/projects/`)
3. Selesai — refresh browser, foto langsung tampil. Tidak perlu ubah kode.

**Format bebas:** `.webp`, `.jpg`, atau `.png` — semuanya dikenali otomatis.

> Contoh: taruh `project1.jpg` → otomatis dipakai untuk kartu "FinTech Analytics Dashboard".

## Biar Makin Ringan (opsional tapi disarankan)

Setelah foto terpasang, jalankan dari root project:

```
npm run convert:webp
```

Semua jpg/png di folder assets otomatis dikonversi ke `.webp` yang jauh lebih ringan saat hosting, lalu file aslinya dihapus.

### Daftar Nama File

| Nama Dasar | Nama Proyek | Kategori |
|------------|-------------|----------|
| **`project1`** | FinTech Analytics Dashboard | Web Development / SaaS |
| **`project2`** | E-Learning Platform | Web Development |
| **`project3`** | Restaurant Reservation System | Web Development |
| **`project4`** | Creative Agency Portfolio | UI/UX Design |
| **`project5`** | SaaS Landing Page | UI/UX Design |
| **`project6`** | Property Listing Platform | Web Development |

> **Catatan**: Tambahkan ekstensi format pilihan Anda pada nama dasar di atas (mis. `project1.jpg`). Jika sebuah foto belum ada, website akan menampilkan gambar placeholder bawaan secara otomatis tanpa error.
