import AnimatedSection from './AnimatedSection'

export default function ProcessStep({ step, index, isLast }) {
  return (
    <AnimatedSection delay={index * 0.12} className="flex items-start gap-4 md:flex-col md:items-center md:text-center">
      <div className="relative flex flex-col items-center">
        <div className="flex h-14 w-14 items-center justify-center border border-gold text-gold">
          <span className="font-display text-lg font-semibold">{step.number}</span>
        </div>
      </div>
      <div className="md:mt-4">
        <h4 className="font-display text-base font-semibold text-charcoal">{step.title}</h4>
        <p className="mt-1 text-sm text-muted">{step.description}</p>
      </div>
    </AnimatedSection>
  )
}
