/**
 * Rantai kandidat format untuk satu nama file dasar.
 * Contoh: '/assets/projects/project1' → coba .webp → .jpg → .png.
 *
 * Tujuan: pemilik situs cukup menaruh foto dengan NAMA yang benar,
 * format apa pun (jpg/png/webp) — foto langsung tampil tanpa ubah kode.
 * Jika tidak ada satupun yang ada, komponen lanjut ke fallback eksternal.
 */
export function buildImageCandidates(base: string): string[] {
  if (/\.(webp|jpe?g|png)$/i.test(base)) return [base]
  return [`${base}.webp`, `${base}.jpg`, `${base}.png`]
}
