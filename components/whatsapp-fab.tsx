import { MessageCircle } from 'lucide-react'
import { whatsappLink } from '@/lib/site'

export function WhatsappFab() {
  return (
    <a
      href={whatsappLink('¡Hola Candy House! Me gustaría enviar un regalo.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbele a Candy House por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-105 md:bottom-8 md:right-8"
    >
      <MessageCircle className="size-5" />
      <span className="hidden sm:inline">Escríbenos</span>
    </a>
  )
}
