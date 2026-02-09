'use client'

import { CheckCircle } from 'lucide-react'

export function About() {
  const highlights = [
    'Full-stack web development with modern technologies',
    'AI-powered solutions and chatbot implementation',
    'SEO optimization and digital marketing expertise',
    'Business automation and process improvement',
    'Creative problem-solving and innovation',
    'Dedicated to client success and growth',
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-blue-600 mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="animate-slideInLeft">
            <h3 className="text-3xl font-bold mb-6">
              Passionate About Technology & <span className="text-gradient">Digital Growth</span>
            </h3>

            <p className="text-foreground/70 mb-4 leading-relaxed text-lg">
              I'm a dedicated tech professional with a passion for transforming businesses through innovative digital solutions. My journey in technology has been driven by the desire to solve complex problems and help businesses thrive in the digital age.
            </p>

            <p className="text-foreground/70 mb-8 leading-relaxed text-lg">
              With expertise spanning web development, AI integration, SEO optimization, and digital marketing, I bring a comprehensive approach to every project. I believe in creating solutions that aren't just technically excellent but also deliver measurable business results.
            </p>

            <p className="text-foreground/70 mb-8 leading-relaxed text-lg">
              What sets me apart is my commitment to understanding each client's unique challenges and delivering tailored solutions that exceed expectations. I combine creativity with technical excellence to build digital products that inspire and engage.
            </p>

            {/* Highlights */}
            <div className="space-y-3">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3 animate-fadeInUp" style={{ animationDelay: `${0.1 * index}s` }}>
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <span className="text-foreground/80 font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Skills Grid */}
          <div className="animate-slideInRight">
            <div className="glass rounded-xl p-8">
              <h4 className="text-2xl font-bold mb-6">Core Competencies</h4>

              {/* Skill Categories */}
              <div className="space-y-6">
                {/* Web Development */}
                <div>
                  <h5 className="font-semibold text-accent mb-3">Web Development</h5>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'PostgreSQL'].map((skill) => (
                      <span key={skill} className="px-3 py-1 rounded-full bg-secondary text-sm text-foreground/80">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* AI & Automation */}
                <div>
                  <h5 className="font-semibold text-accent-blue mb-3">AI & Automation</h5>
                  <div className="flex flex-wrap gap-2">
                    {['ChatGPT Integration', 'Chatbots', 'Automation', 'Machine Learning', 'LLMs'].map((skill) => (
                      <span key={skill} className="px-3 py-1 rounded-full bg-secondary text-sm text-foreground/80">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Digital Marketing */}
                <div>
                  <h5 className="font-semibold text-accent mb-3">Digital Marketing</h5>
                  <div className="flex flex-wrap gap-2">
                    {['SEO', 'Content Strategy', 'Google Maps', 'Analytics', 'Social Media'].map((skill) => (
                      <span key={skill} className="px-3 py-1 rounded-full bg-secondary text-sm text-foreground/80">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Creative Services */}
                <div>
                  <h5 className="font-semibold text-accent-blue mb-3">Creative Services</h5>
                  <div className="flex flex-wrap gap-2">
                    {['Content Writing', 'Copywriting', 'Branding', 'UI/UX', 'Strategy'].map((skill) => (
                      <span key={skill} className="px-3 py-1 rounded-full bg-secondary text-sm text-foreground/80">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
