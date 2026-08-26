'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/section-header'
import { Mail, MapPin, Phone, Send, ArrowUpRight } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
  }

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <SectionHeader
            label="Kontak Kami"
            title="Mari Mulai Diskusi Proyek Anda"
            description="Punya kebutuhan pengembangan website, aplikasi web, atau konsultansi sistem? Ceritakan ide Anda dan mari kita wujudkan produk digital yang luar biasa bersama."
            centered
          />
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-display font-semibold text-foreground mb-6">
                Hubungi Tim Kami
              </h2>
              <p className="text-muted-dark mb-8 leading-relaxed">
                Apakah Anda memiliki pertanyaan seputar layanan, penawaran harga, estimasi jadwal pengerjaan,
                atau sekadar ingin berkonsultasi, tim engineer kami siap membantu menjawab semua kebutuhan Anda.
              </p>

              <div className="space-y-6 mb-8">
                <a
                  href="mailto:hello@wirasa.tech"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-foreground group-hover:bg-white/10 transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-dark">Email Resmi</p>
                    <p className="text-foreground group-hover:text-muted transition-colors">
                      hello@wirasa.tech
                    </p>
                  </div>
                  <ArrowUpRight size={18} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                <a
                  href="tel:+6281234567890"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-foreground group-hover:bg-white/10 transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-dark">Telepon / WhatsApp</p>
                    <p className="text-foreground group-hover:text-muted transition-colors">
                      +62 812 3456 7890
                    </p>
                  </div>
                  <ArrowUpRight size={18} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-foreground">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-dark">Lokasi Kantor</p>
                    <p className="text-foreground">
                      Jakarta, Indonesia
                    </p>
                  </div>
                </div>
              </div>

              {/* Calendly Link */}
              <a
                href="https://calendly.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-medium rounded-full hover:bg-muted transition-colors tactile-btn"
              >
                Jadwalkan Konsultasi
                <ArrowUpRight size={18} />
              </a>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="p-8 border border-border rounded-2xl bg-[#121212]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm text-muted-dark mb-2">Nama Lengkap</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-border rounded-xl text-foreground placeholder-muted-dark focus:outline-none focus:border-foreground/50 transition-colors"
                      placeholder="Nama Anda"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-muted-dark mb-2">Alamat Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-border rounded-xl text-foreground placeholder-muted-dark focus:outline-none focus:border-foreground/50 transition-colors"
                      placeholder="email@perusahaan.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm text-muted-dark mb-2">Nama Perusahaan / Bisnis</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-border rounded-xl text-foreground placeholder-muted-dark focus:outline-none focus:border-foreground/50 transition-colors"
                      placeholder="Perusahaan Anda"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-muted-dark mb-2">Kategori Layanan</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 bg-[#18181b] border border-border rounded-xl text-foreground focus:outline-none focus:border-foreground/50 transition-colors"
                    >
                      <option value="">Pilih layanan yang dibutuhkan</option>
                      <option value="web">Pengembangan Web (Next.js/React)</option>
                      <option value="design">Desain UI/UX &amp; Design System</option>
                      <option value="mobile">Aplikasi Mobile (iOS/Android)</option>
                      <option value="consulting">Konsultansi &amp; Arsitektur Cloud</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm text-muted-dark mb-2">Ceritakan Kebutuhan Proyek Anda</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-border rounded-xl text-foreground placeholder-muted-dark focus:outline-none focus:border-foreground/50 transition-colors resize-none"
                    placeholder="Ceritakan gambaran fitur, target rilis, dan kebutuhan spesifik proyek Anda..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background font-medium rounded-xl hover:bg-muted transition-colors tactile-btn"
                >
                  Kirim Pesan
                  <Send size={18} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
