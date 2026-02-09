'use client'

import { Code, Zap, Brain, MapPin, PenTool, MessageSquare } from 'lucide-react'

export function Services() {
  const services = [
    {
      id: 1,
      title: 'Web Development',
      description:
        'Custom-built, responsive websites and web applications using cutting-edge technologies. From concept to deployment, I create digital experiences that captivate and convert.',
      icon: Code,
      accent: 'accent',
      color: 'text-red-500',
    },
    {
      id: 2,
      title: 'SEO Optimization',
      description:
        'Strategic SEO implementation to boost your online visibility. I analyze, optimize, and implement proven strategies to rank higher and drive organic traffic.',
      icon: Zap,
      accent: 'accent',
      color: 'text-red-500',
    },
    {
      id: 3,
      title: 'AI Chatbot Generation',
      description:
        'Deploy intelligent AI chatbots that provide 24/7 customer support. Custom-trained bots that understand your business and enhance customer engagement.',
      icon: Brain,
      accent: 'accent-blue',
      color: 'text-blue-500',
    },
    {
      id: 4,
      title: 'Google Maps Business',
      description:
        'Optimize your business presence on Google Maps for local discovery. Increase visibility and attract customers in your area through strategic local SEO.',
      icon: MapPin,
      accent: 'accent',
      color: 'text-red-500',
    },
    {
      id: 5,
      title: 'AI Content Creation',
      description:
        'Generate high-quality, SEO-optimized content at scale. Leveraging AI to create engaging copy that drives conversions and builds authority.',
      icon: PenTool,
      accent: 'accent-blue',
      color: 'text-blue-500',
    },
    {
      id: 6,
      title: 'Professional Writing',
      description:
        'Expert copywriting and content creation for blogs, websites, and marketing materials. Compelling narratives that engage your audience and drive results.',
      icon: MessageSquare,
      accent: 'accent',
      color: 'text-red-500',
    },
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Premium Services</h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Comprehensive digital solutions designed to elevate your business and drive measurable results
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-blue-600 mx-auto mt-6" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                className="group relative animate-fadeInUp"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                {/* Card Background - Glassmorphism */}
                <div className="glass rounded-xl p-8 h-full flex flex-col transition-smooth group-hover:border-accent/50">
                  {/* Icon Container */}
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-br from-${service.accent === 'accent' ? 'red-600' : 'blue-600'} to-${service.accent === 'accent' ? 'red-500' : 'blue-500'} flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 text-foreground">{service.title}</h3>
                  <p className="text-foreground/70 flex-grow leading-relaxed text-sm">
                    {service.description}
                  </p>

                  {/* Bottom CTA */}
                  <a
                    href="https://wa.me/254785814973"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-6 inline-flex items-center gap-2 text-sm font-semibold ${service.accent === 'accent' ? 'text-red-500 hover:text-red-400' : 'text-blue-500 hover:text-blue-400'} transition-smooth`}
                  >
                    Learn More →
                  </a>

                  {/* Glow Effect on Hover */}
                  <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none ${service.accent === 'accent' ? 'glow-accent' : 'glow-accent-blue'}`} />
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center animate-fadeInUp">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Digital Presence?</h3>
          <p className="text-foreground/60 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss how these services can help your business achieve its goals
          </p>
          <a
            href="https://wa.me/254785814973"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-lg font-semibold text-white gradient-accent glow-accent hover:scale-105 transition-smooth"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  )
}
