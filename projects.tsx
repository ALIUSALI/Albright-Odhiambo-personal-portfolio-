'use client'

import { ExternalLink } from 'lucide-react'

export function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Axiom Business Website',
      description:
        'Premium business website showcasing professional services with modern design, smooth animations, and optimized user experience. Built with Next.js and Tailwind CSS.',
      technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Responsive Design'],
      link: 'https://v0-axiom-business-website-8gmnbk9tu.vercel.app',
      status: 'completed',
    },
    {
      id: 2,
      title: 'AI Customer Support Chatbot',
      description:
        'Intelligent chatbot using GPT-4 for real-time customer support. Features context awareness, ticket creation, and analytics dashboard.',
      technologies: ['React', 'OpenAI API', 'Node.js', 'MongoDB'],
      link: '#',
      status: 'completed',
    },
    {
      id: 3,
      title: 'Digital Marketing Dashboard',
      description:
        'Comprehensive analytics dashboard for tracking SEO metrics, campaign performance, and ROI. Real-time data visualization and reporting.',
      technologies: ['Next.js', 'Recharts', 'Google Analytics', 'Supabase'],
      link: '#',
      status: 'completed',
    },
    {
      id: 4,
      title: 'Content Management System',
      description:
        'Custom CMS with AI-powered content suggestions, multi-language support, and SEO optimization tools built-in.',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis'],
      link: '#',
      status: 'completed',
    },
    {
      id: 5,
      title: 'Mobile App for Local Businesses',
      description:
        'Native mobile app helping small businesses manage customer relationships, bookings, and local presence.',
      technologies: ['React Native', 'Firebase', 'Google Maps API'],
      link: '#',
      status: 'completed',
    },
    {
      id: 6,
      title: 'AI Content Writer Platform',
      description:
        'SaaS platform leveraging AI to generate blog posts, product descriptions, and social media content at scale.',
      technologies: ['Next.js', 'OpenAI', 'Stripe', 'Supabase'],
      link: '#',
      status: 'upcoming',
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            A selection of projects showcasing my expertise in web development, AI integration, and digital innovation
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-blue-600 mx-auto mt-6" />
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group animate-fadeInUp"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              {/* Card */}
              <div className="glass rounded-xl overflow-hidden h-full flex flex-col transition-smooth group-hover:border-accent/50">
                {/* Header with Status */}
                <div className="relative overflow-hidden bg-gradient-to-br from-background to-secondary p-8 min-h-40 flex flex-col justify-between">
                  {/* Status Badge */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1" />
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.status === 'completed'
                          ? 'bg-accent/20 text-accent'
                          : 'bg-blue-600/20 text-blue-400'
                      }`}
                    >
                      {project.status === 'completed' ? 'Completed' : 'Upcoming'}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-smooth">
                    {project.title}
                  </h3>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <p className="text-foreground/70 text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 rounded-full bg-secondary text-xs text-foreground/60 font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Link */}
                  {project.status === 'completed' && (
                    <a
                      href={project.link}
                      className="inline-flex items-center gap-2 text-accent hover:text-red-400 font-semibold text-sm transition-smooth group"
                    >
                      View Project
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-smooth" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-16 text-center animate-fadeInUp">
          <p className="text-foreground/60 text-lg mb-6">Want to see more projects or discuss a collaboration?</p>
          <a
            href="https://wa.me/254785814973"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-lg font-semibold text-white gradient-mix glow-accent hover:scale-105 transition-smooth"
          >
            Start a Project
          </a>
        </div>
      </div>
    </section>
  )
}
