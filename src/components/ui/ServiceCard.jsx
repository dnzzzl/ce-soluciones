import AnimatedSection from './AnimatedSection'
import * as Icons from 'lucide-react'

export default function ServiceCard({ service, index }) {
  const Icon = Icons[service.icon] || Icons.Hammer

  return (
    <AnimatedSection delay={index * 0.15}>
      <div className="group relative bg-surface-low p-8 transition-all duration-300 hover:-translate-y-1">
        <div className="absolute top-0 left-0 h-[2px] w-full bg-gold" />

        {service.badge && (
          <span className="mb-4 inline-block text-[0.7rem] font-medium tracking-[0.05em] uppercase text-gold">
            {service.badge}
          </span>
        )}

        <div className="mb-6 flex h-12 w-12 items-center justify-center text-gold">
          <Icon className="h-7 w-7" strokeWidth={1.2} />
        </div>

        <h3 className="mb-3 font-display text-xl font-semibold text-charcoal">
          {service.title}
        </h3>

        <p className="mb-6 text-sm leading-relaxed text-muted">
          {service.body}
        </p>

        <ul className="space-y-2">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-sm text-charcoal/70">
              <span className="mt-0.5 text-gold">&#8226;</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </AnimatedSection>
  )
}
