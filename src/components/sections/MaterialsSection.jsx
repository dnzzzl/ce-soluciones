import AnimatedSection from '../ui/AnimatedSection'
import { content } from '../../data/content'
import * as Icons from 'lucide-react'

export default function MaterialsSection() {
  return (
    <section className="bg-surface-low py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedSection className="mb-16 text-center">
          <span className="text-xs font-medium tracking-[0.05em] uppercase text-gold-dark">
            Calidad
          </span>
          <h2 className="mt-4 font-display text-section font-bold text-charcoal">
            {content.materials.heading}
          </h2>
          <div className="mx-auto mt-3 h-px w-10 bg-gold" />
          <p className="mx-auto mt-4 max-w-xl text-base text-muted">
            {content.materials.subheading}
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
          {content.materials.items.map((item, i) => {
            const Icon = Icons[item.icon] || Icons.Box
            return (
              <AnimatedSection key={item.name} delay={i * 0.1}>
                <div className="bg-surface p-6 transition-all duration-300 hover:-translate-y-1">
                  <Icon className="mb-4 h-6 w-6 text-gold" strokeWidth={1.2} />
                  <h4 className="font-display text-sm font-semibold text-charcoal">
                    {item.name}
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}
