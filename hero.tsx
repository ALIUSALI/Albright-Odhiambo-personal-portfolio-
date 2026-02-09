'use client'

import { ChevronDown } from 'lucide-react'

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen pt-32 pb-16 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Greeting */}
        <div className="mb-6 animate-fadeInDown">
          <span className="inline-block px-4 py-2 rounded-full glass text-sm font-semibold text-accent">
            Welcome to My Digital Space
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fadeInUp">
          <span className="block text-foreground">Albright</span>
          <span className="block text-gradient">Odhiambo</span>
        </h1>

        {/* Tagline */}
        <p className="text-2xl sm:text-3xl font-light text-foreground/80 mb-8 animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
          Building Smart Digital Solutions with Web, SEO & AI
        </p>

        {/* Intro Description */}
        <p className="text-lg text-foreground/60 max-w-2xl mx-auto mb-10 animate-fadeInUp leading-relaxed" style={{ animationDelay: '0.2s' }}>
          Helping businesses transform their online presence through innovative web development, advanced SEO optimization, and cutting-edge AI solutions. I specialize in creating digital experiences that drive growth and engagement.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
          <a
            href="https://wa.me/254785814973"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-lg font-semibold text-white gradient-accent glow-accent hover:scale-105 transition-smooth text-center"
          >
            Start a Conversation
          </a>
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 rounded-lg font-semibold border border-foreground/20 text-foreground hover:border-accent hover:text-accent transition-smooth"
          >
            View My Work
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-16 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          <div className="glass p-4 rounded-lg">
            <div className="text-3xl font-bold text-accent">50+</div>
            <div className="text-sm text-foreground/60">Projects Delivered</div>
          </div>
          <div className="glass p-4 rounded-lg">
            <div className="text-3xl font-bold text-accent-blue">100%</div>
            <div className="text-sm text-foreground/60">Client Satisfaction</div>
          </div>
          <div className="glass p-4 rounded-lg">
            <div className="text-3xl font-bold text-accent">5+</div>
            <div className="text-sm text-foreground/60">Years Experience</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
          <button
            onClick={() => scrollToSection('about')}
            className="flex flex-col items-center gap-2 text-foreground/60 hover:text-accent transition-smooth mx-auto group"
          >
            <span className="text-sm font-medium">Discover More</span>
            <ChevronDown className="w-5 h-5 group-hover:translate-y-2 transition-smooth" />
          </button>
        </div>
      </div>
    </section>
  )
}
