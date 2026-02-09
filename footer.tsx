'use client'

import Link from 'next/link'
import { SocialLinks } from './social-links'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 border-t border-foreground/10 relative">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="animate-fadeInUp">
            <Link href="/" className="text-2xl font-bold text-gradient block mb-4">
              AO
            </Link>
            <p className="text-foreground/60 text-sm leading-relaxed">
              Building smart digital solutions with web development, AI, and digital growth expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div className="animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            <h4 className="font-bold text-lg mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-foreground/60 hover:text-accent transition-smooth text-sm"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-foreground/60 hover:text-accent transition-smooth text-sm"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="text-foreground/60 hover:text-accent transition-smooth text-sm"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('cv')}
                  className="text-foreground/60 hover:text-accent transition-smooth text-sm"
                >
                  CV
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <h4 className="font-bold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-foreground/60 hover:text-accent transition-smooth text-sm">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#services" className="text-foreground/60 hover:text-accent transition-smooth text-sm">
                  SEO Optimization
                </a>
              </li>
              <li>
                <a href="#services" className="text-foreground/60 hover:text-accent transition-smooth text-sm">
                  AI Solutions
                </a>
              </li>
              <li>
                <a href="#services" className="text-foreground/60 hover:text-accent transition-smooth text-sm">
                  Content Creation
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            <h4 className="font-bold text-lg mb-4">Get In Touch</h4>
            <ul className="space-y-2">
              <li>
                <a href="tel:+254785814973" className="text-foreground/60 hover:text-accent transition-smooth text-sm">
                  +254 785 814 973
                </a>
              </li>
              <li>
                <a href="mailto:hello@albright.dev" className="text-foreground/60 hover:text-accent transition-smooth text-sm">
                  hello@albright.dev
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/254785814973"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/60 hover:text-accent transition-smooth text-sm"
                >
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-foreground/10 py-8">
          {/* Social Links */}
          <div className="mb-8">
            <SocialLinks />
          </div>

          {/* Bottom Info */}
          <div className="flex flex-col sm:flex-row items-center justify-between text-sm text-foreground/60">
            <p>
              &copy; {currentYear} Albright Odhiambo. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 sm:mt-0">
              <a href="#" className="hover:text-accent transition-smooth">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-accent transition-smooth">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
