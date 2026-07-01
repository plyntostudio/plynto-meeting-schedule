import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer className="border-t border-line px-6 py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 text-center">
        <div className="flex items-center gap-2">
          <Logo className="h-7 w-7" />
          <span className="font-display text-lg font-semibold">Plynto Studio</span>
        </div>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
          Custom Software <span className="text-plynto-500">•</span> Websites{' '}
          <span className="text-plynto-500">•</span> Mobile Apps{' '}
          <span className="text-plynto-500">•</span> AI Solutions
        </p>
        <p className="text-xs text-gray-600">© 2026 Plynto Studio. All rights reserved.</p>
      </div>
    </footer>
  )
}
