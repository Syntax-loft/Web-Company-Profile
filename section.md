# Section di Setiap Halaman — Syntax Loft

Daftar lengkap section per halaman untuk memudahkan prompt yang spesifik.

---

## Global (Layout — `app/layout.tsx`)

Section yang muncul di **semua halaman**:

| Section | Komponen | Keterangan |
|---|---|---|
| Loading Screen | `LoadingScreen` | Animasi entry overlay saat pertama load |
| Reading Progress | `ReadingProgress` | Progress bar horizontal di atas halaman |
| Navigation | `Navigation` | Sticky navbar dengan logo, nav link (Home, Services, Work, AI Chat, Clients, About, Brief, Contact), mobile hamburger menu, tombol "Start Project" |
| Footer | `Footer` | Logo + deskripsi, nav link Company/Resources, kontak (email, phone, address), copyright |

---

## Halaman Utama `/` — `app/page.tsx`

| No | Section | Komponen / Konten |
|---|---|---|
| 1 | **Hero** | `Hero` — Parallax background (gradient + grid + animated circles), headline "SYNTAX LOFT", subheadline, 2 CTA button (Start Your Project, View Our Work), stats baris (Modern Tech Stack, 100% Client Focus, Scalable Architecture, Agile Development), scroll indicator |
| 2 | **Services** | `SectionHeader` (label: "Our Services"), **editorial index list** — 3 `ServiceRow` bernomor (/01 /02 /03) full-width, wrapped `ScrollReveal` |
| 3 | **Featured Work** | `SectionHeader` (label: "Featured Work"), 3 `PortfolioCard` dalam grid 3-col, link "View all work", background `bg-[#0f0f0f]` |
| 4 | **Our Approach** | Shape divider (wave SVG top/bottom), layout 2-col (gambar kode editor + teks "Built with precision. Powered by passion."), tech stack tags (Next.js, TypeScript, Tailwind CSS, Node.js) |
| 5 | **CTA** | `CTASection` — statement tipografis raksasa left-aligned ("Ready to build something that lasts?"), label mono "Next Step", 2 tombol |

---

## Tentang `/about` — `app/about/page.tsx`

| No | Section | Komponen / Konten |
|---|---|---|
| 1 | **Hero** | `SectionHeader` (label: "About Us", title: "We craft digital excellence"), deskripsi perusahaan |
| 2 | **Philosophy** | Layout 2-col (teks filosofi "Our Philosophy" 3 paragraf + placeholder foto founder), background `bg-[#0f0f0f]`, animasi slide kiri/kanan |
| 3 | **Values** | `SectionHeader` (label: "Our Values"), 4 card nilai (Precision, Innovation, Collaboration, Performance) dalam grid 4-col, masing-masing dengan icon |
| 4 | **Founder** | `SectionHeader` (label: "Meet the Founder"), avatar lingkaran (inisial), nama "Muhamad Dava Rayhan", role, bio singkat, background `bg-[#0f0f0f]` |
| 5 | **CTA** | `CTASection` |

---

## Layanan `/services` — `app/services/page.tsx`

| No | Section | Komponen / Konten |
|---|---|---|
| 1 | **Hero** | `SectionHeader` (label: "Our Services", centered), deskripsi |
| 2 | **Services Grid** | 6 `ServiceCard` dalam grid 2-col (Web Development, UI/UX Design, System Integration, Mobile Development, SEO & Performance, Consulting & Strategy), masing-masing dengan icon + fitur checklist |
| 3 | **CTA** | `CTASection` |

---

## Portofolio `/work` — `app/work/page.tsx`

| No | Section | Komponen / Konten |
|---|---|---|
| 1 | **Hero** | `SectionHeader` (label: "Portfolio", centered) |
| 2 | **Filter** | 5 tombol kategori filter (All, Web Development, UI/UX Design, Mobile App, E-Commerce) — state `activeCategory` |
| 3 | **Projects Grid** | `PortfolioCard` grid 3-col, animasi `AnimatePresence` saat filter berubah, 6 project dummy |
| 4 | **CTA** | `CTASection` |

---

## Klien `/clients` — `app/clients/page.tsx`

| No | Section | Komponen / Konten |
|---|---|---|
| 1 | **Hero** | `SectionHeader` (label: "Expertise", centered) |
| 2 | **Industries Grid** | 8 card industri dalam grid 4-col (Technology, Finance, Healthcare, Education, E-Commerce, Real Estate, Energy, Professional Services), masing-masing dengan icon + deskripsi, efek stagger |
| 3 | **Why Work With Us** | `SectionHeader` (label: "Our Approach"), 3 card (Technical Excellence, Design-First Approach, Clear Communication) dalam grid 3-col, background `bg-[#0f0f0f]` |
| 4 | **CTA** | `CTASection` |

---

## Kontak `/contact` — `app/contact/page.tsx`

| No | Section | Komponen / Konten |
|---|---|---|
| 1 | **Hero** | `SectionHeader` (label: "Contact", centered) |
| 2 | **Contact Content** | Layout 2-col: **Kiri** — Info kontak (Email: hello@syntaxloft.com, Phone: +62 812 3456 7890, Address: Jakarta, Indonesia), tombol "Schedule a Call" (Calendly). **Kanan** — Form kontak (Name, Email, Company, Service dropdown, Message), submit button "Send Message" |
| *Catatan:* Halaman ini **tidak** menggunakan `CTASection` |

---

## Project Brief `/project-brief` — `app/project-brief/page.tsx`

| No | Section | Komponen / Konten |
|---|---|---|
| 1 | **Hero** | `SectionHeader` (label: "Start Your Project", centered), deskripsi waktu respon 24-48 jam |
| 2 | **Process Steps** | 3 step card (Fill the Brief → We Review → Discovery Call) dalam grid 3-col, masing-masing dengan icon + nomor step |
| 3 | **Tally Form Embed** | `GoogleFormEmbed` dengan URL Tally.so (`https://tally.so/r/ODjpok`), height 900px, wrapper card `bg-[#0f0f0f]` |
| 4 | **Alternative Contact** | 2 card (Email: hello@syntaxloft.com, Schedule a call → /contact), background `bg-[#0f0f0f]` |
| 5 | **FAQ** | `SectionHeader` (label: "FAQ"), `ProjectBriefFAQ` component (accordion) |
| 6 | **CTA** | `CTASection` |

---

## AI Chat `/ai-chat` — `app/(chat)/ai-chat/page.tsx`

| No | Section | Komponen / Konten |
|---|---|---|
| 1 | **AI Chat** | `AIChat` component full-page, script Puter.js (`https://js.puter.com/v2/`) |

---

## Komponen Umum (Shared Components)

| Komponen | Lokasi | Dipakai di |
|---|---|---|
| `SectionHeader` | `components/section-header.tsx` | Semua halaman (label, title, description, optional centered) |
| `CTASection` | `components/cta-section.tsx` | Home, About, Services, Work, Clients, Project Brief |
| `Hero` | `components/hero.tsx` | Home saja |
| `ScrollReveal` / `StaggerContainer` / `StaggerItem` | `components/scroll-reveal.tsx` | Home, Services, Clients |
| `PortfolioCard` | `components/portfolio-card.tsx` | Home (featured), Work (grid) |
| `ServiceCard` | `components/service-card.tsx` | Services (6 card detail) |
| `ServiceRow` | `components/service-row.tsx` | Home saja (editorial index list) |
| `MagneticButton` | `components/magnetic-button.tsx` | Hero, CTA |
| `GoogleFormEmbed` | `components/google-form-embed.tsx` | Project Brief |
| `ProjectBriefFAQ` | `components/project-brief-faq.tsx` | Project Brief |
| `AIChat` | `components/ai-chat.tsx` | AI Chat page |
| `Marquee` | `components/marquee.tsx` | Home (ticker klien, di bawah Hero) |
| `TextReveal` / `SplitText` | `components/text-reveal.tsx` | `SplitText` dipakai `SectionHeader` (judul semua halaman) |
| `PageTransition` | `components/page-transition.tsx` | *(belum dipakai di page yang sudah ada)* |

---

*Dibuat dari source code aktual. Update jika ada perubahan struktur halaman.*
