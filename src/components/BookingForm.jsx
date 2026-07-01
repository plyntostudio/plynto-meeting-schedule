import { useState } from 'react'
import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'

// ---------------------------------------------------------------------
// Replace YOUR_FORMSPREE_ENDPOINT below with your real Formspree form ID.
// Example: https://formspree.io/f/abcdwxyz
// ---------------------------------------------------------------------
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xgojnnap'

const MIN_TIME = '09:00'
const MAX_TIME = '19:00'

const initialForm = {
  name: '',
  company: '',
  email: '',
  phone: '',
  meetingType: 'Online',
  date: '',
  time: '',
  description: '',
}

function todayISO() {
  const d = new Date()
  const offset = d.getTimezoneOffset()
  const local = new Date(d.getTime() - offset * 60 * 1000)
  return local.toISOString().split('T')[0]
}

function validate(form) {
  const errors = {}

  if (!form.name.trim()) errors.name = 'Full name is required.'

  if (!form.email.trim()) {
    errors.email = 'Email address is required.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = 'Enter a valid email address.'
  }

  if (!form.phone.trim()) {
    errors.phone = 'Phone number is required.'
  } else if (!/^[+]?[\d\s()-]{8,16}$/.test(form.phone.trim())) {
    errors.phone = 'Enter a valid phone number.'
  }

  if (!form.date) {
    errors.date = 'Preferred date is required.'
  } else if (form.date < todayISO()) {
    errors.date = 'Please choose a date from today onward.'
  }

  if (!form.time) {
    errors.time = 'Preferred time is required.'
  } else if (form.time < MIN_TIME || form.time > MAX_TIME) {
    errors.time = 'Please pick a time between 9:00 AM and 7:00 PM.'
  }

  if (!form.description.trim()) {
    errors.description = 'A brief project description helps us prepare.'
  }

  return errors
}

function Field({ label, htmlFor, error, children, required = true }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="text-sm font-medium text-gray-200">
        {label} {required && <span className="text-plynto-500">*</span>}
      </label>
      {children}
      {error && (
        <p id={`${htmlFor}-error`} className="text-xs text-red-400" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

const inputClasses =
  'w-full rounded-md border border-line bg-surface-alt px-4 py-3 text-sm text-white placeholder:text-gray-600 transition focus:border-plynto-500 focus:outline-none focus:ring-1 focus:ring-plynto-500'

export default function BookingForm({ onResult }) {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const validationErrors = validate(form)
    setErrors(validationErrors)

    if (Object.keys(validationErrors).length > 0) {
      onResult({
        type: 'error',
        message: 'Please fix the highlighted fields and try again.',
      })
      return
    }

    setSubmitting(true)
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          'Full Name': form.name,
          'Company / Business Name': form.company || 'Not provided',
          Email: form.email,
          Phone: form.phone,
          'Meeting Type': form.meetingType,
          'Preferred Date': form.date,
          'Preferred Time': form.time,
          'Project Description': form.description,
        }),
      })

      if (response.ok) {
        onResult({
          type: 'success',
          message: "Your meeting request has been submitted successfully. We'll contact you shortly.",
        })
        setForm(initialForm)
        setErrors({})
      } else {
        throw new Error('Formspree request failed')
      }
    } catch (err) {
      onResult({
        type: 'error',
        message: 'Something went wrong while submitting your request. Please try again.',
      })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="book" className="scroll-mt-24 px-6 py-20" aria-labelledby="book-heading">
      <div className="mx-auto max-w-3xl">
        <Reveal className="mb-10 text-center">
          <span className="eyebrow">Get started</span>
          <h2 id="book-heading" className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
            Tell us about your project
          </h2>
          <p className="mt-3 text-muted">
            Fill in the details below and we&rsquo;ll confirm your meeting slot.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="notch-corner space-y-6 border border-line bg-surface p-6 sm:p-10"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <Field label="Full Name" htmlFor="name" error={errors.name}>
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  className={inputClasses}
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  placeholder="Jane Doe"
                />
              </Field>

              <Field label="Company / Business Name" htmlFor="company" required={false}>
                <input
                  id="company"
                  type="text"
                  autoComplete="organization"
                  className={inputClasses}
                  value={form.company}
                  onChange={(e) => update('company', e.target.value)}
                  placeholder="Optional"
                />
              </Field>

              <Field label="Email Address" htmlFor="email" error={errors.email}>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  className={inputClasses}
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  placeholder="jane@company.com"
                />
              </Field>

              <Field label="Phone Number" htmlFor="phone" error={errors.phone}>
                <input
                  id="phone"
                  type="tel"
                  autoComplete="tel"
                  className={inputClasses}
                  value={form.phone}
                  onChange={(e) => update('phone', e.target.value)}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? 'phone-error' : undefined}
                  placeholder="+91 98765 43210"
                />
              </Field>

              <Field label="Meeting Type" htmlFor="meetingType" error={errors.meetingType}>
                <div className="flex gap-3" role="radiogroup" aria-label="Meeting type">
                  {['Online', 'Offline'].map((option) => (
                    <button
                      type="button"
                      key={option}
                      role="radio"
                      aria-checked={form.meetingType === option}
                      onClick={() => update('meetingType', option)}
                      className={`flex-1 rounded-md border px-4 py-3 text-sm font-medium transition ${
                        form.meetingType === option
                          ? 'border-plynto-500 bg-plynto-500/10 text-plynto-400'
                          : 'border-line bg-surface-alt text-gray-300 hover:border-gray-600'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </Field>

              <Field label="Preferred Date" htmlFor="date" error={errors.date}>
                <input
                  id="date"
                  type="date"
                  min={todayISO()}
                  className={`${inputClasses} [color-scheme:dark]`}
                  value={form.date}
                  onChange={(e) => update('date', e.target.value)}
                  aria-invalid={Boolean(errors.date)}
                  aria-describedby={errors.date ? 'date-error' : undefined}
                />
              </Field>

              <Field label="Preferred Time" htmlFor="time" error={errors.time}>
                <input
                  id="time"
                  type="time"
                  min={MIN_TIME}
                  max={MAX_TIME}
                  step="900"
                  className={`${inputClasses} [color-scheme:dark]`}
                  value={form.time}
                  onChange={(e) => update('time', e.target.value)}
                  aria-invalid={Boolean(errors.time)}
                  aria-describedby={errors.time ? 'time-error' : undefined}
                />
                <p className="text-xs text-gray-500">Slots available 9:00 AM – 7:00 PM.</p>
              </Field>
            </div>

            <Field label="Brief Project Description" htmlFor="description" error={errors.description}>
              <textarea
                id="description"
                rows={4}
                className={inputClasses}
                value={form.description}
                onChange={(e) => update('description', e.target.value)}
                aria-invalid={Boolean(errors.description)}
                aria-describedby={errors.description ? 'description-error' : undefined}
                placeholder="Tell us what you're building and what you'd like to achieve."
              />
            </Field>

            <motion.button
              type="submit"
              disabled={submitting}
              whileTap={{ scale: 0.98 }}
              className="notch-corner-sm flex w-full items-center justify-center gap-2 bg-plynto-gradient px-6 py-3.5 font-medium text-ink transition-transform duration-200 hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {submitting ? 'Submitting…' : 'Submit meeting request'}
            </motion.button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
