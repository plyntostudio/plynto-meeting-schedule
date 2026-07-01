import Logo from './Logo.jsx'

export default function Navbar() {
  return (
    <nav className="fixed inset-x-0 top-0 z-40 border-b border-line/60 bg-ink/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <Logo className="h-6 w-6" />
          <span className="font-display text-sm font-semibold tracking-tight">Plynto Studio</span>
        </a>
        <a
          href="#book"
          className="notch-corner-sm bg-plynto-gradient px-4 py-2 text-xs font-semibold uppercase tracking-wide text-ink transition-transform hover:scale-105"
        >
          Book a slot
        </a>
      </div>
    </nav>
  )
}
