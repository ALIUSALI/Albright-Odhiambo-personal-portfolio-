'use client'

import { MessageCircle, Phone } from 'lucide-react'

export function FloatingCTA() {
  return (
    <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-30">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/254785814973"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative w-14 h-14 flex items-center justify-center rounded-full glass glow-accent hover:scale-110 transition-smooth cursor-pointer"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white group-hover:animate-pulse-glow" />
        <div className="absolute -top-12 right-0 bg-background border border-border rounded-lg px-3 py-2 whitespace-nowrap text-sm font-medium opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none">
          WhatsApp
        </div>
      </a>

      {/* Call Button */}
      <a
        href="tel:+254785814973"
        className="group relative w-14 h-14 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-blue-500 glow-accent-blue hover:scale-110 transition-smooth cursor-pointer"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6 text-white group-hover:animate-pulse-glow" />
        <div className="absolute -top-12 right-0 bg-background border border-border rounded-lg px-3 py-2 whitespace-nowrap text-sm font-medium opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none">
          Call
        </div>
      </a>
    </div>
  )
}
