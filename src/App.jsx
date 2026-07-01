import { useState, useCallback, useRef } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import AvailabilityNotice from './components/AvailabilityNotice.jsx'
import BookingForm from './components/BookingForm.jsx'
import FAQ from './components/FAQ.jsx'
import Footer from './components/Footer.jsx'
import Toast from './components/Toast.jsx'

export default function App() {
  const [toast, setToast] = useState(null)
  const timeoutRef = useRef(null)

  const showToast = useCallback((next) => {
    setToast(next)
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => setToast(null), 5000)
  }, [])

  return (
    <div id="top" className="min-h-screen bg-ink">
      <Navbar />
      <main>
        <Hero />
        <AvailabilityNotice />
        <BookingForm onResult={showToast} />
        <FAQ />
      </main>
      <Footer />
      <Toast toast={toast} onClose={() => setToast(null)} />
    </div>
  )
}
