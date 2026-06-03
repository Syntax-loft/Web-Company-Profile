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
            label="Contact"
            title="Let&apos;s start a conversation"
            description="Have a project in mind? We&apos;d love to hear about it. Get in touch and let&apos;s create something amazing together."
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
                Get in touch
              </h2>
              <p className="text-muted-dark mb-8">
                Whether you have a question about our services, pricing, or just want to say hello, 
                our team is ready to answer all your questions.
              </p>

              <div className="space-y-6 mb-8">
                <a
                  href="mailto:hello@syntaxloft.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-foreground group-hover:bg-white/10 transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-dark">Email</p>
                    <p className="text-foreground group-hover:text-muted transition-colors">
                      hello@syntaxloft.com
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
                    <p className="text-sm text-muted-dark">Phone</p>
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
                    <p className="text-sm text-muted-dark">Address</p>
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
                className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background font-medium rounded-full hover:bg-muted transition-colors"
              >
                Schedule a Call
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
              <form onSubmit={handleSubmit} className="p-8 border border-border rounded-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm text-muted-dark mb-2">Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-border rounded-xl text-foreground placeholder-muted-dark focus:outline-none focus:border-foreground/50 transition-colors"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-muted-dark mb-2">Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-border rounded-xl text-foreground placeholder-muted-dark focus:outline-none focus:border-foreground/50 transition-colors"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm text-muted-dark mb-2">Company</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-border rounded-xl text-foreground placeholder-muted-dark focus:outline-none focus:border-foreground/50 transition-colors"
                      placeholder="Your company"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-muted-dark mb-2">Service</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 bg-white/5 border border-border rounded-xl text-foreground focus:outline-none focus:border-foreground/50 transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="web">Web Development</option>
                      <option value="design">UI/UX Design</option>
                      <option value="mobile">Mobile Development</option>
                      <option value="consulting">Consulting</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm text-muted-dark mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-border rounded-xl text-foreground placeholder-muted-dark focus:outline-none focus:border-foreground/50 transition-colors resize-none"
                    placeholder="Tell us about your project..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-foreground text-background font-medium rounded-xl hover:bg-muted transition-colors"
                >
                  Send Message
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
