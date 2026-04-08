import { useState } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrolled } from '../../hooks/useScrolled'
import { content } from '../../data/content'

export default function Navbar() {
  const scrolled = useScrolled(80)
  const [menuOpen, setMenuOpen] = useState(false)

  const handleNavClick = () => setMenuOpen(false)

  return (
    <>
      <nav
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-charcoal-deep/90 shadow-lg backdrop-blur-[16px]'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#inicio" className="flex items-center gap-3">
            <img src="/logo-square.jpg" alt="CE Soluciones" className="h-10 w-auto" />
            <span className="font-display text-lg font-semibold text-gold">CE Soluciones</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {content.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-body text-sm text-cream/80 transition-colors hover:text-gold"
              >
                {item.label}
              </a>
            ))}
            <a
              href={content.company.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gold px-5 py-2 text-sm font-medium text-charcoal-deep transition-colors hover:bg-gold-light"
            >
              <MessageCircle className="h-4 w-4" />
              Contactanos
            </a>
          </div>

          <button
            className="text-cream md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Cerrar menu' : 'Abrir menu'}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-charcoal-deep/95 backdrop-blur-[20px]"
          >
            {content.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="font-display text-2xl text-cream transition-colors hover:text-gold"
              >
                {item.label}
              </a>
            ))}
            <a
              href={content.company.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
              className="mt-4 inline-flex items-center gap-2 bg-gold px-8 py-3 text-base font-medium text-charcoal-deep"
            >
              <MessageCircle className="h-5 w-5" />
              Contactanos
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
