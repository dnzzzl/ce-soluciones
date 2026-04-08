import AnimatedSection from '../ui/AnimatedSection'
import ProcessStep from '../ui/ProcessStep'
import { content } from '../../data/content'

export default function ProcessSection() {
  const { steps } = content.process

  return (
    <section id="proceso" className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedSection className="mb-16 text-center">
          <span className="text-xs font-medium tracking-[0.05em] uppercase text-gold-dark">
            Metodologia
          </span>
          <h2 className="mt-4 font-display text-section font-bold text-charcoal">
            {content.process.heading}
          </h2>
          <div className="mx-auto mt-3 h-px w-10 bg-gold" />
          <p className="mx-auto mt-4 max-w-xl text-base text-muted">
            {content.process.subheading}
          </p>
        </AnimatedSection>

        {/* Desktop: horizontal */}
        <div className="hidden md:block">
          <div className="relative flex items-start justify-between">
            <div className="absolute top-7 right-16 left-16 h-px bg-gold/30" />
            {steps.map((step, i) => (
              <div key={step.number} className="relative z-10 flex-1">
                <ProcessStep step={step} index={i} isLast={i === steps.length - 1} />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical */}
        <div className="space-y-8 border-l border-gold/30 pl-6 md:hidden">
          {steps.map((step, i) => (
            <ProcessStep key={step.number} step={step} index={i} isLast={i === steps.length - 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
