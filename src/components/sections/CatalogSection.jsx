import AnimatedSection from '../ui/AnimatedSection'
import ImageCarousel from '../ui/ImageCarousel'
import { content } from '../../data/content'

export default function CatalogSection() {
  return (
    <section id="trabajos" className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedSection className="mb-16 text-center">
          <span className="text-xs font-medium tracking-[0.05em] uppercase text-gold-dark">
            Portafolio
          </span>
          <h2 className="mt-4 font-display text-section font-bold text-charcoal">
            {content.catalog.heading}
          </h2>
          <div className="mx-auto mt-3 h-px w-10 bg-gold" />
          <p className="mx-auto mt-4 max-w-xl text-base text-muted">
            {content.catalog.subheading}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <ImageCarousel images={content.catalog.images} />
        </AnimatedSection>
      </div>
    </section>
  )
}
