import { useState, useRef } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const catalogImages = import.meta.glob('../../assets/images/catalog-*.jpg', { eager: true })
const sortedImages = Object.entries(catalogImages)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, mod]) => mod.default)

export default function ImageCarousel({ images }) {
  const prefersReduced = useReducedMotion()
  const [currentPage, setCurrentPage] = useState(0)
  const [direction, setDirection] = useState(0)
  const touchStartX = useRef(0)

  const perPage = typeof window !== 'undefined' && window.innerWidth >= 768 ? 3 : 1
  const totalPages = Math.ceil(sortedImages.length / perPage)

  const goTo = (page, dir) => {
    setDirection(dir)
    setCurrentPage(page)
  }

  const next = () => goTo((currentPage + 1) % totalPages, 1)
  const prev = () => goTo((currentPage - 1 + totalPages) % totalPages, -1)

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }
  const handleTouchEnd = (e) => {
    const delta = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(delta) > 50) {
      delta > 0 ? next() : prev()
    }
  }

  const pageImages = sortedImages.slice(currentPage * perPage, currentPage * perPage + perPage)

  const variants = prefersReduced
    ? { enter: {}, center: {}, exit: {} }
    : {
        enter: (d) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (d) => ({ x: d > 0 ? -300 : 300, opacity: 0 }),
      }

  return (
    <div className="relative" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
      <div className="overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentPage}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="grid grid-cols-1 gap-4 md:grid-cols-3"
          >
            {pageImages.map((src, i) => (
              <div key={i} className="overflow-hidden">
                <img
                  src={src}
                  alt={images[currentPage * perPage + i]?.alt || 'Proyecto de CE Soluciones'}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-[0.98]"
                />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          onClick={prev}
          aria-label="Pagina anterior"
          className="flex h-10 w-10 items-center justify-center border border-gold/40 text-gold transition-colors hover:bg-gold hover:text-charcoal-deep"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="flex gap-2">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > currentPage ? 1 : -1)}
              aria-label={`Pagina ${i + 1}`}
              className={`h-2 w-2 transition-colors ${
                i === currentPage ? 'bg-gold' : 'bg-outline-light'
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Pagina siguiente"
          className="flex h-10 w-10 items-center justify-center border border-gold/40 text-gold transition-colors hover:bg-gold hover:text-charcoal-deep"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
