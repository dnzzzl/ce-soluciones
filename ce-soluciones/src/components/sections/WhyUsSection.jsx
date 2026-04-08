import AnimatedSection from '../ui/AnimatedSection'
import { content } from '../../data/content'
import * as Icons from 'lucide-react'

export default function WhyUsSection() {
  return (
    <section className="bg-charcoal py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedSection className="mb-16 text-center">
          <span className="text-xs font-medium tracking-[0.05em] uppercase text-gold">
            Diferenciadores
          </span>
          <h2 className="mt-4 font-display text-section font-bold text-cream">
            {content.whyUs.heading}
          </h2>
          <div className="mx-auto mt-3 h-px w-10 bg-gold" />
        </AnimatedSection>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {content.whyUs.items.map((item, i) => {
            const Icon = Icons[item.icon] || Icons.Star
            return (
              <AnimatedSection key={item.title} delay={i * 0.12}>
                <div className="text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center border border-gold/30">
                    <Icon className="h-6 w-6 text-gold" strokeWidth={1.2} />
                  </div>
                  <h4 className="font-display text-base font-semibold text-cream">
                    {item.title}
                  </h4>
                  <p className="mt-2 text-sm leading-relaxed text-cream/60">
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
