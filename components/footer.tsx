'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react'

const footerLinks = {
  company: [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Work', href: '/work' },
    { label: 'Clients', href: '/clients' },
  ],
  resources: [
    { label: 'Project Brief', href: '/project-brief' },
    { label: 'Contact', href: '/contact' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand & Contact */}
          <div className="lg:col-span-5 space-y-8">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-display font-bold tracking-tight">
                <span className="text-foreground">SYNTAX</span>
                <span className="text-muted-dark">/</span>
                <span className="text-foreground">LOFT</span>
              </span>
            </Link>
            <p className="text-muted-dark text-sm max-w-sm leading-relaxed">
              Transforming ideas into high-performance digital experiences. 
              We craft premium websites and applications for ambitious businesses.
            </p>
            <div className="space-y-2">
              <a
                href="mailto:hello@syntaxloft.com"
                className="flex items-center gap-3 py-2 text-sm text-muted hover:text-foreground transition-colors group min-h-[44px]"
              >
                <Mail size={16} />
                <span>hello@syntaxloft.com</span>
                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="tel:+6281234567890"
                className="flex items-center gap-3 py-2 text-sm text-muted hover:text-foreground transition-colors group min-h-[44px]"
              >
                <Phone size={16} />
                <span>+62 812 3456 7890</span>
                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <div className="flex items-center gap-3 py-2 text-sm text-muted min-h-[44px]">
                <MapPin size={16} />
                <span>Sukabumi, Indonesia</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-4">Company</h4>
                <ul className="space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted hover:text-foreground transition-colors line-reveal inline-block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-4">Resources</h4>
                <ul className="space-y-3">
                  {footerLinks.resources.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted hover:text-foreground transition-colors line-reveal inline-block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-dark">
            © {new Date().getFullYear()} Syntax Loft. All rights reserved.
          </p>
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ y: -2 }}
            className="text-sm text-muted hover:text-foreground transition-colors flex items-center gap-2"
          >
            Back to top
            <ArrowUpRight size={14} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
