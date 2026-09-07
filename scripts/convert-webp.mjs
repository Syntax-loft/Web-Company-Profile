/**
 * convert-webp.mjs — konversi opsional semua foto di public/assets ke WebP.
 *
 * Cara pakai:
 *   1. Taruh foto Anda (jpg/png/webp) ke folder public/assets/projects/ atau team/
 *   2. Jalankan: npm run convert:webp
 *   3. Semua jpg/png otomatis jadi .webp (lebih ringan), file asli dihapus.
 *
 * Catatan: website TETAP JALAN tanpa menjalankan script ini — kode mencoba
 * .webp → .jpg → .png secara berurutan untuk setiap nama file.
 */
import { readdirSync, statSync, unlinkSync } from 'node:fs'
import { join, relative } from 'node:path'
import sharp from 'sharp'

const ROOT = join(process.cwd(), 'public', 'assets')
const RASTER = /\.(png|jpe?g)$/i

async function walk(dir) {
  let converted = 0
  for (const name of readdirSync(dir)) {
    const full = join(dir, name)

    if (statSync(full).isDirectory()) {
      converted += await walk(full)
      continue
    }
    if (!RASTER.test(name)) continue

    const out = full.replace(RASTER, '.webp')
    const beforeKb = Math.round(statSync(full).size / 102.4) / 10

    await sharp(full).webp({ quality: 82 }).toFile(out)
    unlinkSync(full)

    const afterKb = Math.round(statSync(out).size / 102.4) / 10
    console.log(`✓ ${relative(process.cwd(), full)} (${beforeKb} KB) → ${relative(process.cwd(), out)} (${afterKb} KB)`)
    converted++
  }
  return converted
}

try {
  const total = await walk(ROOT)
  console.log(total > 0 ? `\nSelesai: ${total} file dikonversi ke WebP.` : '\nTidak ada jpg/png yang perlu dikonversi.')
} catch (err) {
  console.error('Konversi gagal:', err.message)
  process.exit(1)
}
