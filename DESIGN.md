# Design System: WIRASA TECH — Boutique Engineering Studio

## 1. Visual Theme & Atmosphere
A restrained, gallery-airy interface fused with architectural software engineering precision. The atmosphere is clinical, confident, and warm — reminiscent of a high-end industrial design atelier working in dark-mode obsidian space. Layouts leverage high variance (Variance: 8, Motion: 6, Density: 5) with offset asymmetry, wide typographic scales, inline visual punctuation, and disciplined whitespace.

## 2. Color Palette & Roles
- **Obsidian Canvas** (`#0A0A0A`) — Primary dark background foundation. Pure `#000000` is strictly banned.
- **Charcoal Surface** (`#121212`) — Primary card, container, and elevated module background.
- **Elevated Ink Surface** (`#18181B`) — Interactive hover states and tertiary card elements.
- **Pure Platinum Text** (`#FFFFFF`) — Primary headlines, high-emphasis metrics, and active states.
- **Muted Steel** (`#E5E5E5`) — Secondary body copy, descriptions, and high-readability paragraphs.
- **Subtle Mineral** (`#737373`) — Monospace labels, coordinate stamps, metadata, and timestamps.
- **Whisper Border** (`#262626` / `rgba(255, 255, 255, 0.08)`) — Structural 1px architectural dividers and card borders.
- **Singular Emerald Pulse** (`#10B981`) — Functional micro-indicator strictly for active live server status / availability badge (saturation < 80%, zero neon halos).
- **Banned Palette:** Strictly NO AI neon blue/purple glows, NO gradient text overload, NO rainbow badges.

## 3. Typography Rules
- **Display & Section Headers:** `Syne` & `Outfit` — Track-tight, controlled scale, weight-driven hierarchy (`font-bold`, `leading-[1.05]`).
- **Body & Editorial Copy:** `Outfit` — Relaxed leading (`leading-relaxed`), maximum 65 characters per line for optimal readability.
- **Technical & Monospace Accents:** `JetBrains Mono` — High-density coordinate stamps, index numbers (`/01`, `/02`), benchmarks, and architectural metadata.
- **Inline Image Typography:** Small contextual images embedded directly within headlines acting as visual punctuation (`inline-block align-middle w-[1.5em] h-[0.66em] rounded-full`).
- **Banned Typography:** Generic `Inter` for creative display, generic serif fonts (`Times New Roman`, `Georgia`, `Garamond`), and uncalibrated 6-line title wraps.

## 4. Component Stylings
- **Buttons:** Tactile feedback on press (`translate-y-[1px] scale-[0.98]`). Primary buttons in crisp Platinum (`#FFFFFF` on `#0A0A0A`), secondary buttons in whisper-bordered dark slate (`border-border hover:bg-white/5`). No neon glow rings.
- **Cards & Bento Modules:** Asymmetric geometry, generous corner radii (`rounded-2xl` to `rounded-3xl`), 1px whisper borders (`border-[#262626]`), subtle inner top light (`inset 0 1px 0 rgba(255,255,255,0.06)`).
- **Founder & Team Showcase:** High-resolution authentic imagery, architectural framing, monospace credential tags, interactive category filtering, and direct social links.
- **Live Badges:** Micro-pulsing indicators (`w-2 h-2 rounded-full bg-emerald-500 animate-ping`), uppercase monospace metadata tags.

## 5. Layout Principles
- **Asymmetric Split Hero:** Centered hero headers are BANNED for high-variance editorial pages. Hero employs a dynamic 2-column or offset asymmetric split.
- **Asymmetric Bento Grid for Values/Pillars:** Generic 3-column or 4-column equal cards are BANNED. Replaced with asymmetric grid spans (2-col span hero card + offset companion cards) and distinct visual weighting.
- **Spatial Separation:** No overlapping text or messy absolute floating elements. Clean, predictable spatial zones.
- **Responsive Collapse:** Mobile-first single-column collapse under 768px (`< 768px`). Zero horizontal scroll. Minimum 44px touch targets.
- **Container Sizing:** Contained within `max-w-7xl` with responsive padding (`px-6 lg:px-8`).

## 6. Motion & Interaction
- **Physics Engine:** Framer Motion spring physics with `stiffness: 100, damping: 20` and fluid bezier curves (`ease: [0.16, 1, 0.3, 1]`).
- **Waterfall Reveals:** Staggered cascade entrance (`delay: index * 0.1`) for cards and list elements.
- **Micro-Interactions:** Subtle scale on hover (`scale-[1.02]`), tactile button depress, live pulsing dots.
- **Hardware Acceleration:** Animations restricted to `transform` and `opacity` with `transform-gpu` optimizations.

## 7. Anti-Patterns (Banned)
- ❌ No emojis anywhere (use Lucide icons or pure monospace symbols).
- ❌ No generic centered hero layouts on editorial pages.
- ❌ No 4-column or 3-column equal card rows.
- ❌ No placeholder boxes with "Founder Photo" text — use real high-resolution imagery.
- ❌ No pure black (`#000000`) backgrounds.
- ❌ No AI copywriting buzzwords ("Seamless", "Elevate", "Unleash", "Next-Gen").
- ❌ No fake round numbers (`99.99%`, `50%`) — use verifiable studio engineering metrics.
- ❌ No scroll indicator bouncing arrows or "Scroll to explore" filler text.
