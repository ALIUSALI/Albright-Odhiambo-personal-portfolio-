'use client'

import { Download, FileText, Calendar, Briefcase } from 'lucide-react'
import { useState } from 'react'

export function CV() {
  const [showPdfViewer, setShowPdfViewer] = useState(false)

  const experiences = [
    {
      role: 'Web Developer & AI Specialist',
      company: 'Freelance',
      duration: '2025 - Present',
      description: 'Building smart digital solutions with web development, SEO optimization, and AI chatbot generation. Creating premium websites and helping businesses grow online.',
    },
  ]

  const education = [
    {
      degree: 'Diploma in Information Technology',
      institution: 'Germaine College',
      year: '2024 - Present',
      focus: 'IT Systems & Digital Solutions',
    },
    {
      degree: 'Web Development',
      institution: 'Moringa Academy',
      year: '2025',
      focus: 'Full-Stack Web Development',
    },
    {
      degree: 'AI Essentials',
      institution: 'ALX Program',
      year: '2025',
      focus: 'Artificial Intelligence & Machine Learning',
    },
  ]

  return (
    <section id="cv" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">My CV & Resume</h2>
          <p className="text-foreground/60 text-lg">Review my detailed professional experience and credentials</p>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-blue-600 mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Experience & Education */}
          <div className="lg:col-span-2 space-y-8">
            {/* Experience */}
            <div className="animate-slideInLeft">
              <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <Briefcase className="w-8 h-8 text-accent" />
                Professional Experience
              </h3>

              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="glass rounded-lg p-6 border-l-4 border-accent hover:border-accent-blue transition-smooth">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="text-xl font-bold text-foreground">{exp.role}</h4>
                        <p className="text-foreground/60 font-medium">{exp.company}</p>
                      </div>
                      <span className="text-sm text-accent font-semibold flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {exp.duration}
                      </span>
                    </div>
                    <p className="text-foreground/70 leading-relaxed">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="animate-slideInLeft" style={{ animationDelay: '0.1s' }}>
              <h3 className="text-3xl font-bold mb-8 flex items-center gap-3">
                <FileText className="w-8 h-8 text-accent-blue" />
                Education
              </h3>

              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="glass rounded-lg p-6 border-l-4 border-accent-blue hover:border-accent transition-smooth">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h4 className="text-xl font-bold text-foreground">{edu.degree}</h4>
                        <p className="text-foreground/60 font-medium">{edu.institution}</p>
                      </div>
                      <span className="text-sm text-accent-blue font-semibold">{edu.year}</span>
                    </div>
                    <p className="text-foreground/70 text-sm">{edu.focus}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - CV Download & Preview */}
          <div className="lg:col-span-1 animate-slideInRight">
            <div className="glass rounded-xl p-8 sticky top-24">
              <h4 className="text-2xl font-bold mb-6">Download CV</h4>

              {/* PDF Preview */}
              <div className="mb-6 bg-secondary rounded-lg p-4 aspect-[9/12] flex items-center justify-center">
                <div className="text-center">
                  <FileText className="w-16 h-16 text-accent/50 mx-auto mb-3" />
                  <p className="text-sm text-foreground/60">PDF Document</p>
                  <p className="text-xs text-foreground/40 mt-2">Albright Odhiambo - Resume 2024</p>
                </div>
              </div>

              {/* Download Button */}
              <a
                href="/resume.pdf"
                download
                className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg gradient-accent text-white font-semibold glow-accent hover:scale-105 transition-smooth mb-3"
              >
                <Download className="w-5 h-5" />
                Download PDF
              </a>

              {/* View Online Button */}
              <button
                onClick={() => setShowPdfViewer(!showPdfViewer)}
                className="w-full px-6 py-3 rounded-lg border border-foreground/20 text-foreground font-semibold hover:border-accent hover:text-accent transition-smooth"
              >
                View Online
              </button>

              {/* PDF Viewer */}
              {showPdfViewer && (
                <div className="mt-6 bg-secondary rounded-lg overflow-hidden">
                  <div className="aspect-video flex items-center justify-center bg-black/20">
                    <p className="text-foreground/60 text-sm text-center p-4">
                      PDF viewer loading... Download the PDF to view in your preferred reader
                    </p>
                  </div>
                </div>
              )}

              {/* Contact Info */}
              <div className="mt-8 pt-8 border-t border-foreground/10 space-y-4">
                <div>
                  <p className="text-sm text-foreground/60 mb-2">Email</p>
                  <a
                    href="mailto:albrightodhiambo001@gmail.com"
                    className="text-foreground font-semibold hover:text-accent transition-smooth break-all"
                  >
                    albrightodhiambo001@gmail.com
                  </a>
                </div>
                <div>
                  <p className="text-sm text-foreground/60 mb-2">Phone</p>
                  <a
                    href="tel:0785814973"
                    className="text-foreground font-semibold hover:text-accent transition-smooth"
                  >
                    +254 785 814 973
                  </a>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="mt-6 pt-6 border-t border-foreground/10">
                <p className="text-sm text-foreground/60 mb-3">Reach out now</p>
                <a
                  href="https://wa.me/254785814973"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-semibold glow-accent-blue hover:scale-105 transition-smooth"
                >
                  Let's Chat
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
