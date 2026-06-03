import { Metadata } from 'next'
import { GoogleFormEmbed } from '@/components/google-form-embed'
import { ProjectBriefFAQ } from '@/components/project-brief-faq'
import { SectionHeader } from '@/components/section-header'
import { CTASection } from '@/components/cta-section'
import { Mail, Phone, ArrowRight, Clock, MessageSquare, FileText } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Project Brief | Syntax Loft',
  description: 'Submit your project brief to Syntax Loft. Tell us about your website or application project and we\'ll get back to you within 24-48 hours.',
}

// Tally form integration
const TALLY_FORM_URL = 'https://tally.so/r/ODjpok'

const steps = [
  {
    icon: <FileText size={24} />,
    title: 'Fill the Brief',
    description: 'Complete the form with your project details, requirements, and goals.',
  },
  {
    icon: <Clock size={24} />,
    title: 'We Review',
    description: 'Our team reviews your submission and researches your industry.',
  },
  {
    icon: <MessageSquare size={24} />,
    title: 'Discovery Call',
    description: 'We schedule a call to discuss your project in detail.',
  },
]

export default function ProjectBriefPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <SectionHeader
            label="Start Your Project"
            title="Tell us about your project"
            description="Complete this brief form to help us understand your vision. We review all submissions within 24-48 hours and will reach out to schedule a discovery call."
            centered
          />
        </div>
      </section>

      {/* Process Steps */}
      <section className="pb-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="flex flex-col items-center text-center p-6"
              >
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-foreground mb-4">
                  {step.icon}
                </div>
                <div className="text-sm text-muted-dark mb-2">Step {index + 1}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-dark text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tally Form Embed */}
      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-[#0f0f0f] rounded-3xl border border-border p-8 md:p-12">
            <GoogleFormEmbed 
              formUrl={TALLY_FORM_URL}
              height={900}
            />
          </div>
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="py-16 bg-[#0f0f0f]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              Prefer to talk directly?
            </h2>
            <p className="text-muted-dark">
              We understand some projects are better discussed in person. Reach out to us directly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="mailto:hello@syntaxloft.com"
              className="group flex items-center gap-4 p-6 border border-border rounded-2xl hover:bg-white/[0.02] transition-colors"
            >
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-foreground group-hover:bg-white/10 transition-colors">
                <Mail size={20} />
              </div>
              <div className="flex-1">
                <div className="text-sm text-muted-dark">Email us</div>
                <div className="text-foreground font-medium">hello@syntaxloft.com</div>
              </div>
              <ArrowRight size={18} className="text-muted group-hover:text-foreground group-hover:translate-x-1 transition-all" />
            </Link>

            <Link
              href="/contact"
              className="group flex items-center gap-4 p-6 border border-border rounded-2xl hover:bg-white/[0.02] transition-colors"
            >
              <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-foreground group-hover:bg-white/10 transition-colors">
                <Phone size={20} />
              </div>
              <div className="flex-1">
                <div className="text-sm text-muted-dark">Schedule a call</div>
                <div className="text-foreground font-medium">Book a consultation</div>
              </div>
              <ArrowRight size={18} className="text-muted group-hover:text-foreground group-hover:translate-x-1 transition-all" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-muted-dark text-sm tracking-[0.2em] uppercase mb-4">
              FAQ
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Common questions
            </h2>
          </div>
          <ProjectBriefFAQ />
        </div>
      </section>

      <CTASection />
    </>
  )
}
