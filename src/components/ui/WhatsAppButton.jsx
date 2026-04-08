import { content } from '../../data/content'
import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  return (
    <a
      href={content.company.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center bg-gold text-charcoal-deep shadow-lg shadow-gold/30 transition-transform duration-300 hover:scale-110 hover:bg-gold-light"
    >
      <MessageCircle className="h-6 w-6" strokeWidth={2} />
    </a>
  )
}
