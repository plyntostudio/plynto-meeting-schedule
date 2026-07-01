import { AnimatePresence, motion } from 'framer-motion'

export default function Toast({ toast, onClose }) {
  return (
    <div
      className="fixed bottom-6 left-1/2 z-50 w-[92%] max-w-md -translate-x-1/2"
      aria-live="assertive"
      role="status"
    >
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className={`notch-corner-sm flex items-start gap-3 border px-5 py-4 shadow-2xl backdrop-blur-md ${
              toast.type === 'success'
                ? 'border-plynto-500/40 bg-surface/95 text-white'
                : 'border-red-500/40 bg-surface/95 text-white'
            }`}
          >
            <span
              className={`mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full ${
                toast.type === 'success' ? 'bg-plynto-500' : 'bg-red-500'
              }`}
              aria-hidden="true"
            />
            <p className="text-sm leading-snug text-gray-200">{toast.message}</p>
            <button
              onClick={onClose}
              aria-label="Dismiss notification"
              className="ml-auto text-gray-500 transition hover:text-white"
            >
              ✕
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
