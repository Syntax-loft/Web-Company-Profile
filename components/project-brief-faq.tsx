'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'How long until I receive a response?',
    answer: 'We typically review and respond to all project briefs within 24-48 business hours. For urgent projects, please mention it in your brief or contact us directly.',
  },
  {
    question: 'What happens after I submit my brief?',
    answer: 'After submission, our team will review your requirements and schedule a discovery call to discuss the project in detail. We\'ll then provide a detailed proposal and timeline.',
  },
  {
    question: 'Can I edit my brief after submitting?',
    answer: 'Yes, you can submit an updated brief if needed. However, we recommend including all relevant details initially to help us provide the most accurate proposal.',
  },
  {
    question: 'Is there a minimum project size?',
    answer: 'We typically work on projects starting from $5,000. However, we\'re open to discussing smaller projects that have potential for long-term collaboration.',
  },
  {
    question: 'Do you work with international clients?',
    answer: 'Absolutely! We work with clients globally and have experience managing projects across different time zones. We use modern collaboration tools to ensure smooth communication.',
  },
  {
    question: 'What information should I include in my brief?',
    answer: 'The more details the better! Include your company background, project goals, target audience, design preferences, timeline, and budget range. Reference websites are also helpful.',
  },
]

export function ProjectBriefFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          viewport={{ once: true }}
          className="border border-border rounded-xl overflow-hidden"
        >
          <button
            onClick={() => toggleFaq(index)}
            className="w-full flex items-center justify-between p-5 text-left hover:bg-white/[0.02] transition-colors"
          >
            <span className="font-medium text-foreground pr-4">
              {faq.question}
            </span>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown size={20} className="text-muted shrink-0" />
            </motion.div>
          </button>
          
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="px-5 pb-5 pt-0">
                  <p className="text-muted-dark leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  )
}
