'use client'

import { Github, Linkedin, Twitter, Instagram, Facebook } from 'lucide-react'

export function SocialLinks() {
  const socials = [
    {
      id: 1,
      name: 'Twitter',
      icon: Twitter,
      url: 'https://x.com/AlbrightAl60499',
      color: 'hover:text-blue-400',
    },
    {
      id: 2,
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/al.bright_o',
      color: 'hover:text-pink-500',
    },
    {
      id: 3,
      name: 'Facebook',
      icon: Facebook,
      url: 'https://www.facebook.com/share/1Axj1t5Hdh',
      color: 'hover:text-blue-600',
    },
    {
      id: 4,
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/albright-odhiambo-b5aa8836b',
      color: 'hover:text-blue-500',
    },
    {
      id: 5,
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/aliusalbright',
      color: 'hover:text-gray-400',
    },
  ]

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {socials.map((social, index) => {
        const Icon = social.icon
        return (
          <a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className={`group relative w-12 h-12 rounded-full glass flex items-center justify-center transition-smooth ${social.color} animate-fadeInUp`}
            style={{ animationDelay: `${0.1 * index}s` }}
          >
            <Icon className="w-5 h-5 text-foreground/70 group-hover:scale-125 transition-smooth" />
            {/* Tooltip */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-background border border-border rounded-lg px-3 py-1 whitespace-nowrap text-xs font-medium opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none">
              {social.name}
            </div>
          </a>
        )
      })}
    </div>
  )
}
