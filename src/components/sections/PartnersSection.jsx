import AnimatedSection from '../ui/AnimatedSection'
import { content } from '../../data/content'

export default function PartnersSection() {
  return (
    <section id="clientes" className="bg-surface-low py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedSection className="mb-12 text-center">
          <span className="text-xs font-medium tracking-[0.05em] uppercase text-gold-dark">
            Confianza
          </span>
          <h2 className="mt-4 font-display text-section font-bold text-charcoal">
            {content.partners.heading}
          </h2>
          <div className="mx-auto mt-3 h-px w-10 bg-gold" />
          <p className="mx-auto mt-4 max-w-xl text-base text-muted">
            {content.partners.subheading}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {content.partners.clients.map((client) => (
              <span
                key={client}
                className="border border-gold/40 bg-surface px-5 py-2 text-sm font-medium text-charcoal"
              >
                {client}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
