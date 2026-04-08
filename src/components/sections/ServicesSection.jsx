import AnimatedSection from '../ui/AnimatedSection'
import ServiceCard from '../ui/ServiceCard'
import { content } from '../../data/content'

export default function ServicesSection() {
  return (
    <section id="servicios" className="bg-surface-low py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedSection className="mb-16 text-center">
          <span className="text-xs font-medium tracking-[0.05em] uppercase text-gold-dark">
            Servicios
          </span>
          <h2 className="mt-4 font-display text-section font-bold text-charcoal">
            Soluciones a su medida
          </h2>
          <div className="mx-auto mt-3 h-px w-10 bg-gold" />
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {content.services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
