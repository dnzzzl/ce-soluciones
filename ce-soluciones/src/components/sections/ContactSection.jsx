import { MessageCircle, Mail } from 'lucide-react'
import AnimatedSection from '../ui/AnimatedSection'
import { content } from '../../data/content'

export default function ContactSection() {
  return (
    <section id="contacto" className="bg-charcoal-deep py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <AnimatedSection>
          <span className="text-xs font-medium tracking-[0.05em] uppercase text-gold">
            Comenzar
          </span>
          <h2 className="mt-4 font-display text-section font-bold text-cream">
            {content.contact.heading}
          </h2>
          <div className="mx-auto mt-3 h-px w-10 bg-gold" />
          <p className="mx-auto mt-6 max-w-lg text-base text-cream/70">
            {content.contact.subheading}
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={content.company.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gold px-8 py-4 text-sm font-medium text-charcoal-deep transition-colors hover:bg-gold-light"
          >
            <MessageCircle className="h-5 w-5" />
            {content.contact.cta1}
          </a>

          <a
            href={`mailto:${content.company.email}`}
            className="inline-flex items-center gap-2 border border-gold/40 px-8 py-4 text-sm font-medium text-gold transition-colors hover:bg-gold/10"
          >
            <Mail className="h-5 w-5" />
            {content.contact.cta2}
          </a>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <p className="mt-8 text-xs text-cream/40">
            {content.contact.note}
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
