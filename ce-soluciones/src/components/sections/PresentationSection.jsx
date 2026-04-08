import AnimatedSection from '../ui/AnimatedSection'
import { content } from '../../data/content'

export default function PresentationSection() {
  return (
    <section id="nosotros" className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2">
          <AnimatedSection>
            <span className="text-xs font-medium tracking-[0.05em] uppercase text-gold-dark">
              Quienes somos
            </span>
            <h2 className="mt-4 font-display text-section font-bold text-charcoal">
              {content.about.heading}
            </h2>
            <div className="mt-3 h-px w-10 bg-gold" />
            <p className="mt-6 text-base leading-relaxed text-muted">
              {content.about.body}
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-surface-low p-10 md:p-12">
              <span className="font-display text-4xl font-bold text-gold md:text-5xl">
                {content.about.highlight}
              </span>
              <p className="mt-3 text-base text-muted">
                {content.about.highlightSub}
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
