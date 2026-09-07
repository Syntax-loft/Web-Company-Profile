'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { motion } from 'framer-motion'

const faqs = [
  {
    id: 'faq-1',
    question: 'How long until I receive a response on our brief?',
    answer:
      'We typically review and respond to all project briefs within 24-48 business hours with an initial technical assessment and discovery roadmap.',
  },
  {
    id: 'faq-2',
    question: 'What happens after I submit the project brief?',
    answer:
      'Our lead architects review your technical requirements and schedule a focused discovery call to align on architecture, delivery milestones, and commercial scope.',
  },
  {
    id: 'faq-3',
    question: 'Can I update or amend my brief after submission?',
    answer:
      'Yes. You can reply directly to our confirmation email with any supplementary specs, Figma links, or architecture diagrams.',
  },
  {
    id: 'faq-4',
    question: 'What is your typical engagement model?',
    answer:
      'We work as a dedicated boutique engineering partner — offering end-to-end web builds, fractional CTO advisory, and dedicated development sprints with 100% direct code handover.',
  },
  {
    id: 'faq-5',
    question: 'Do you collaborate with international and remote teams?',
    answer:
      'Yes. We operate globally across Southeast Asia, APAC, US, and Europe using structured asynchronous communication and daily progress syncing.',
  },
]

export function ProjectBriefFAQ() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="rounded-3xl border border-border/80 bg-[#121212] p-6 sm:p-8"
    >
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq) => (
          <AccordionItem key={faq.id} value={faq.id} className="border-border/60">
            <AccordionTrigger className="text-base sm:text-lg font-medium text-foreground hover:text-white">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-dark text-sm sm:text-base font-light leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.div>
  )
}
