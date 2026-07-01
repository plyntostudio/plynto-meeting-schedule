import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Reveal from './Reveal.jsx'

const FAQS = [
  {
    q: 'Is the consultation free?',
    a: 'Yes, the first consultation is completely free.',
  },
  {
    q: 'How long is the meeting?',
    a: 'Typically 30–60 minutes.',
  },
  {
    q: 'Do you work with startups?',
    a: 'Yes. We work with startups, small businesses, and established companies.',
  },
]

function FAQItem({ item, isOpen, onToggle, index }) {
  const panelId = `faq-panel-${index}`
  const buttonId = `faq-button-${index}`

  return (
    <div className="border border-line bg-surface">
      <h3>
        <button
          id={buttonId}
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
        >
          <span className="font-medium text-white">{item.q}</span>
          <motion.span
            aria-hidden="true"
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.2 }}
            className="shrink-0 text-xl text-plynto-500"
          >
            +
          </motion.span>
        </button>
      </h3>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={buttonId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-5 text-sm leading-relaxed text-muted">{item.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="px-6 py-20" aria-labelledby="faq-heading">
      <div className="mx-auto max-w-3xl">
        <Reveal className="mb-10 text-center">
          <span className="eyebrow">FAQ</span>
          <h2 id="faq-heading" className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            Common questions
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="space-y-3">
          {FAQS.map((item, index) => (
            <FAQItem
              key={item.q}
              item={item}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </Reveal>
      </div>
    </section>
  )
}
