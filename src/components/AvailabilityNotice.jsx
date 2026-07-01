import Reveal from './Reveal.jsx'

export default function AvailabilityNotice() {
  return (
    <section className="px-6 py-20" aria-labelledby="availability-heading">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="notch-corner border border-line bg-surface p-8 sm:p-10">
            <span className="eyebrow">Availability</span>
            <h2 id="availability-heading" className="mt-3 font-display text-2xl font-semibold sm:text-3xl">
              Meeting hours
            </h2>

            <dl className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="flex items-center justify-between border border-line bg-surface-alt px-5 py-4">
                <dt className="text-sm text-muted">Days</dt>
                <dd className="font-mono text-sm text-white">Monday – Saturday</dd>
              </div>
              <div className="flex items-center justify-between border border-line bg-surface-alt px-5 py-4">
                <dt className="text-sm text-muted">Hours</dt>
                <dd className="font-mono text-sm text-white">9:00 AM – 7:00 PM</dd>
              </div>
            </dl>

            <div
              role="alert"
              className="mt-6 flex items-start gap-3 border border-amber-500/30 bg-amber-500/10 px-5 py-4"
            >
              <span aria-hidden="true" className="text-lg leading-none text-amber-400">
                ⚠
              </span>
              <p className="text-sm leading-relaxed text-amber-200">
                We are unavailable from <strong>7th July</strong> until further notice. Requests
                can still be submitted and we will contact you once meetings resume.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
