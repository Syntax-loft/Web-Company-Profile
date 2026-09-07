'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from "next/image";
// Ganti logo brand di sini: timpa file public/assets/logo2.webp
import logo from '../public/assets/logo2.webp'
import { Menu, X, ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react'


const navItems = [
  { label: 'Beranda', href: '/' },
  { label: 'Layanan', href: '/services' },
  { label: 'Portofolio', href: '/work' },
  { label: 'Klien', href: '/clients' },
  { label: 'Tentang Kami', href: '/about' },
  { label: 'Brief Proyek', href: '/project-brief' },
  { label: 'Kontak', href: '/contact' },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
          ? 'liquid-glass border-b border-white/10'
          : 'bg-transparent'
          }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link href="/" aria-label="WIRASA TECH — Home" className="flex shrink-0 items-center">
              <Image
                src={logo}
                alt="WIRASA TECH"
                width={132}
                height={44}
                priority
                className="h-9 sm:h-11 w-auto object-contain"
              />
            </Link>
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-muted hover:text-foreground transition-colors duration-300 line-reveal py-1"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden md:block">
              <Link
                href="/project-brief"
                className="px-5 py-2.5 bg-foreground text-background text-sm font-semibold rounded-full hover:bg-muted transition-all duration-300 tactile-btn shadow-lg shadow-white/5"
              >
                Mulai Proyek
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative z-50 p-2 text-foreground rounded-lg hover:bg-white/5 transition-colors"
              aria-label={isMobileMenuOpen ? 'Tutup menu' : 'Buka menu'}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu - Slide from right */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 bottom-0 z-40 w-full max-w-sm bg-background border-l border-border md:hidden"
            >
              <div className="flex flex-col h-full pt-20 pb-8 px-6">
                {/* Navigation Links */}
                <nav className="flex-1">
                  <ul className="space-y-1">
                    {navItems.map((item, index) => (
                      <motion.li
                        key={item.label}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="group flex items-center justify-between py-4 text-lg font-medium text-foreground hover:text-muted transition-colors border-b border-border/50"
                        >
                          <span>{item.label}</span>
                          <ArrowUpRight
                            size={20}
                            className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
                          />
                        </Link>
                      </motion.li>
                    ))}
                  </ul>
                </nav>

                {/* CTA Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.3 }}
                  className="mt-6 mb-8"
                >
                  <Link
                    href="/project-brief"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-2 w-full py-4 bg-foreground text-background font-medium rounded-xl hover:bg-muted transition-colors"
                  >
                    Mulai Proyek Anda
                    <ArrowUpRight size={18} />
                  </Link>
                </motion.div>

                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                  className="space-y-3 pt-6 border-t border-border"
                >
                  <a
                    href="mailto:hello@wirasa.tech"
                    className="flex items-center gap-3 text-sm text-muted hover:text-foreground transition-colors"
                  >
                    <Mail size={16} />
                    hello@wirasa.tech
                  </a>
                  <a
                    href="tel:+6281234567890"
                    className="flex items-center gap-3 text-sm text-muted hover:text-foreground transition-colors"
                  >
                    <Phone size={16} />
                    +62 812 3456 7890
                  </a>
                  <div className="flex items-center gap-3 text-sm text-muted">
                    <MapPin size={16} />
                    Jakarta, Indonesia
                  </div>
                </motion.div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
