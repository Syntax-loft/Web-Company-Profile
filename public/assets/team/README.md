# Team Member Custom Images Folder

Folder ini digunakan untuk menyimpan foto kustom anggota tim untuk halaman `/about`.

## Cara Ganti Foto (paling mudah)

1. Siapkan foto dengan **nama file** sesuai tabel di bawah
2. Taruh di folder ini (`public/assets/team/`)
3. Selesai — refresh browser, foto langsung tampil. Tidak perlu ubah kode.

**Format bebas:** `.webp`, `.jpg`, atau `.png` — semuanya dikenali otomatis.

## Biar Makin Ringan (opsional tapi disarankan)

Setelah foto terpasang, jalankan dari root project:

```
npm run convert:webp
```

Semua jpg/png di folder assets otomatis dikonversi ke `.webp` yang jauh lebih ringan saat hosting, lalu file aslinya dihapus.

### Daftar Nama File

| Nama Dasar | Anggota Tim | Jabatan / Role |
|------------|-------------|----------------|
| `dava` | Muhamad Dava Rayhan | Founder & Lead Consultant |
| `cofounder` | Alexandra Chen | Co-Founder & CTO |
| `frontend-lead` | Rizky Pratama | Lead Frontend Developer |
| `frontend-senior` | Sarah Wijaya | Senior Frontend Engineer |
| `backend-lead` | Budi Santoso | Senior Backend Architect |
| `uiux-lead` | Diana Putri | Lead UI/UX Product Designer |
| `devops-lead` | Kevin Hendra | Cloud & DevOps Specialist |

> **Catatan**: Tambahkan ekstensi format pilihan Anda pada nama dasar di atas (mis. `dava.jpg`). Jika sebuah foto belum ada, website menampilkan foto placeholder bawaan secara otomatis tanpa error.
