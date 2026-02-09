'use client'

import { Mail, MessageCircle, Phone, MapPin } from 'lucide-react'

export function Contact() {
  const contactMethods = [
    {
      id: 1,
      icon: MessageCircle,
      title: 'WhatsApp',
      description: 'Chat with me directly for quick inquiries',
      link: 'https://wa.me/254785814973',
      color: 'text-green-500',
    },
    {
      id: 2,
      icon: Phone,
      title: 'Phone Call',
      description: 'Let\'s discuss your project in detail',
      link: 'tel:+254785814973',
      color: 'text-blue-500',
    },
    {
      id: 3,
      icon: Mail,
      title: 'Email',
      description: 'Send me your project requirements',
      link: 'mailto:hello@albright.dev',
      color: 'text-red-500',
    },
    {
      id: 4,
      icon: MapPin,
      title: 'Location',
      description: 'Available for remote & local projects',
      value: 'Kenya, East Africa',
      color: 'text-purple-500',
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Ready to transform your digital presence? I'm here to help you achieve your business goals with cutting-edge solutions.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-blue-600 mx-auto mt-6" />
        </div>

        {/* Contact Methods Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactMethods.map((method, index) => {
            const Icon = method.icon
            return (
              <div key={method.id} className="animate-fadeInUp" style={{ animationDelay: `${0.1 * index}s` }}>
                <a
                  href={method.link}
                  target={method.link?.startsWith('http') ? '_blank' : undefined}
                  rel={method.link?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="glass rounded-lg p-6 h-full flex flex-col items-center text-center transition-smooth hover:border-accent/50 group cursor-pointer"
                >
                  <div className={`w-12 h-12 rounded-lg ${method.color} bg-opacity-10 flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth`}>
                    <Icon className={`w-6 h-6 ${method.color}`} />
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">{method.title}</h3>
                  <p className="text-sm text-foreground/60">{method.description || method.value}</p>
                </a>
              </div>
            )
          })}
        </div>

        {/* CTA Card */}
        <div className="glass rounded-2xl p-12 text-center animate-fadeInUp max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
          <p className="text-foreground/70 text-lg mb-8">
            Whether you need a new website, AI integration, SEO optimization, or custom digital solutions, I'm ready to help you succeed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/254785814973?text=Hi%20Albright,%20I'd%20like%20to%20discuss%20a%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg font-semibold text-white gradient-accent glow-accent hover:scale-105 transition-smooth"
            >
              Start a Conversation
            </a>
            <a
              href="tel:+254785814973"
              className="px-8 py-4 rounded-lg font-semibold border border-foreground/20 text-foreground hover:border-accent-blue hover:text-accent-blue transition-smooth"
            >
              Schedule a Call
            </a>
          </div>

          {/* Response Time */}
          <div className="mt-8 pt-8 border-t border-foreground/10">
            <p className="text-sm text-foreground/60">
              ⏱️ I typically respond within 2 hours to all inquiries
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
