import { motion } from 'framer-motion'
import Reveal from './Reveal.jsx'

export default function Hero() {
  return (
    <header className="relative overflow-hidden border-b border-line bg-plynto-radial px-6 pb-24 pt-28 sm:pt-36">
      {/* ambient backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            'linear-gradient(#191919 1px, transparent 1px), linear-gradient(90deg, #191919 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(circle at 50% 20%, black, transparent 70%)',
        }}
      />

      <div className="mx-auto flex max-w-5xl flex-col items-center text-center">
        <Reveal>
          <span className="eyebrow mb-6 inline-flex items-center gap-2 rounded-full border border-line px-4 py-1.5">
            Plynto Studio · Booking
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="max-w-3xl text-balance font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-6xl">
            Book a Meeting with{' '}
            <span className="bg-plynto-gradient bg-clip-text text-transparent">Plynto Studio</span>
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-6 max-w-xl text-balance text-base leading-relaxed text-muted sm:text-lg">
            Let&rsquo;s discuss your project, business goals, and how custom software can help you
            grow.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <a
            href="#book"
            className="notch-corner-sm group mt-9 inline-flex items-center gap-2 bg-plynto-gradient px-7 py-3.5 font-medium text-ink shadow-[0_0_0_1px_rgba(34,197,94,0.4)] transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]"
          >
            Book your slot
            <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </Reveal>

        <Reveal delay={0.32} className="mt-16 w-full max-w-2xl">
          <HeroMark />
        </Reveal>
      </div>
    </header>
  )
}

/* 3D orbital network — rotating rings with orbiting nodes */
function HeroMark() {
  return (
    <motion.svg
      viewBox="0 0 400 300"
      className="mx-auto h-44 w-full sm:h-60"
      role="img"
      aria-label="Plynto Studio orbital mark"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <defs>
        <radialGradient id="core-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#22c55e" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="node-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#22c55e" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#22c55e" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Subtle grid backdrop */}
      <g opacity="0.08">
        {[-3, -2, -1, 0, 1, 2, 3].map((i) => (
          <line key={`h${i}`} x1="40" y1={150 + i * 35} x2="360" y2={150 + i * 35} stroke="#fff" strokeWidth="0.5" />
        ))}
        {[-4, -3, -2, -1, 0, 1, 2, 3, 4].map((i) => (
          <line key={`v${i}`} x1={200 + i * 35} y1="40" x2={200 + i * 35} y2="260" stroke="#fff" strokeWidth="0.5" />
        ))}
      </g>

      {/* Orbital ring 1 — horizontal tilt, primary */}
      <motion.g
        style={{ originX: 200, originY: 150 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      >
        <ellipse cx="200" cy="150" rx="130" ry="42" fill="none" stroke="#262626" strokeWidth="1.5" />
        <ellipse cx="200" cy="150" rx="130" ry="42" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="6 8" />
        <circle cx="330" cy="150" r="3.5" fill="#22c55e" />
        <circle cx="70" cy="150" r="2" fill="rgba(255,255,255,0.4)" />
      </motion.g>

      {/* Orbital ring 2 — counter-rotating */}
      <motion.g
        style={{ originX: 200, originY: 150 }}
        animate={{ rotate: -360 }}
        transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
      >
        <ellipse cx="200" cy="150" rx="110" ry="36" fill="none" stroke="#1F1F1F" strokeWidth="1.5" />
        <circle cx="310" cy="150" r="2.5" fill="rgba(255,255,255,0.5)" />
        <circle cx="90" cy="150" r="3" fill="#22c55e" />
      </motion.g>

      {/* Orbital ring 3 — vertical, accent */}
      <motion.g
        style={{ originX: 200, originY: 150 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        <ellipse cx="200" cy="150" rx="35" ry="120" fill="none" stroke="#16C75A" strokeWidth="1" opacity="0.2" />
        <circle cx="200" cy="30" r="2.5" fill="#22c55e" />
        <circle cx="200" cy="270" r="2" fill="rgba(255,255,255,0.3)" />
      </motion.g>

      {/* Connection lines between nodes */}
      <motion.g
        style={{ originX: 200, originY: 150 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
      >
        <line x1="200" y1="150" x2="330" y2="150" stroke="#22c55e" strokeWidth="0.5" opacity="0.15" />
        <line x1="200" y1="150" x2="70" y2="150" stroke="#22c55e" strokeWidth="0.5" opacity="0.08" />
      </motion.g>

      {/* Center core glow */}
      <circle cx="200" cy="150" r="60" fill="url(#core-glow)" />
      <circle cx="200" cy="150" r="40" fill="url(#core-glow)" />

      {/* Center node */}
      <circle cx="200" cy="150" r="5" fill="#22c55e" />
      <motion.circle
        cx="200" cy="150" r="12"
        fill="url(#node-glow)"
        animate={{ r: [12, 18, 12], opacity: [0.6, 0.3, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.circle
        cx="200" cy="150" r="3"
        fill="#fff"
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.svg>
  )
}
