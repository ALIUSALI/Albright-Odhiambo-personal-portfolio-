/**
 * Portfolio Configuration File
 * 
 * Update all your personal information here in one place.
 * This file is used throughout the portfolio components.
 */

export const siteConfig = {
  // Basic Information
  name: 'Albright Odhiambo',
  title: 'Web Developer & AI Specialist',
  tagline: 'Building Smart Digital Solutions with Web, SEO & AI',
  description:
    'Helping businesses transform their online presence through innovative web development, advanced SEO optimization, and cutting-edge AI solutions.',
  
  // Contact Information
  contact: {
    phone: '+254785814973',
    phoneShort: '0785814973',
    whatsapp: 'https://wa.me/0785814973',
    email: 'hello@albright.dev',
    location: 'Kenya, East Africa',
  },

  // Social Media Links
  socials: [
    {
      name: 'Twitter',
      url: 'https://x.com/AlbrightAl60499',
      icon: 'twitter',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/al.bright_o',
      icon: 'instagram',
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/share/1Axj1t5Hdh',
      icon: 'facebook',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/albright-odhiambo-b5aa8836b',
      icon: 'linkedin',
    },
    {
      name: 'GitHub',
      url: 'https://github.com/aliusalbright',
      icon: 'github',
    },
  ],

  // SEO Information
  seo: {
    title: 'Albright Odhiambo - Web Developer, AI & Digital Growth Expert',
    description:
      'Building smart digital solutions with Web Development, SEO Optimization & AI. Helping businesses grow online.',
    keywords: [
      'Web Developer',
      'AI Chatbot',
      'SEO Optimization',
      'Digital Marketing',
      'Content Writing',
      'Google Maps Business',
    ],
    domain: 'https://albright.dev', // Update to your domain
    author: 'Albright Odhiambo',
  },

  // Navigation Items
  navigation: [
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Projects', id: 'projects' },
    { label: 'CV', id: 'cv' },
    { label: 'Contact', id: 'contact' },
  ],

  // Services
  services: [
    {
      id: 1,
      title: 'Web Development',
      description:
        'Custom-built, responsive websites and web applications using cutting-edge technologies.',
      icon: 'Code',
      accent: 'red',
    },
    {
      id: 2,
      title: 'SEO Optimization',
      description:
        'Strategic SEO implementation to boost your online visibility and drive organic traffic.',
      icon: 'Zap',
      accent: 'red',
    },
    {
      id: 3,
      title: 'AI Chatbot Generation',
      description: 'Deploy intelligent AI chatbots that provide 24/7 customer support.',
      icon: 'Brain',
      accent: 'blue',
    },
    {
      id: 4,
      title: 'Google Maps Business',
      description: 'Optimize your business presence on Google Maps for local discovery.',
      icon: 'MapPin',
      accent: 'red',
    },
    {
      id: 5,
      title: 'AI Content Creation',
      description: 'Generate high-quality, SEO-optimized content at scale.',
      icon: 'PenTool',
      accent: 'blue',
    },
    {
      id: 6,
      title: 'Professional Writing',
      description:
        'Expert copywriting and content creation for blogs, websites, and marketing.',
      icon: 'MessageSquare',
      accent: 'red',
    },
  ],

  // Statistics
  stats: [
    { label: 'Projects Delivered', value: '50+' },
    { label: 'Client Satisfaction', value: '100%' },
    { label: 'Years Experience', value: '5+' },
  ],

  // Skills by Category
  skills: {
    'Web Development': ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Node.js', 'PostgreSQL'],
    'AI & Automation': ['ChatGPT Integration', 'Chatbots', 'Automation', 'Machine Learning', 'LLMs'],
    'Digital Marketing': ['SEO', 'Content Strategy', 'Google Maps', 'Analytics', 'Social Media'],
    Creative: ['Content Writing', 'Copywriting', 'Branding', 'UI/UX', 'Strategy'],
  },

  // Color Configuration
  colors: {
    primary: '#dc2626', // Red
    secondary: '#3b82f6', // Blue
    background: '#050515',
    foreground: '#faf9f7',
    accent: 'hsl(0, 84%, 60%)', // Red HSL
    accentBlue: 'hsl(219, 100%, 60%)', // Blue HSL
  },

  // Company Info (for footer)
  company: {
    name: 'Albright Odhiambo',
    tagline: 'Digital Solutions for Modern Businesses',
    year: new Date().getFullYear(),
  },

  // Feature Flags
  features: {
    showBlog: false, // Enable blog section
    showTestimonials: false, // Enable testimonials
    showCaseStudies: false, // Enable case studies
    enableNewsletter: false, // Enable newsletter signup
    enableContactForm: false, // Enable contact form
  },
}

/**
 * CUSTOMIZATION INSTRUCTIONS:
 * 
 * 1. Update your name, title, and description
 * 2. Add your contact information
 * 3. Update social media links
 * 4. Change SEO information for your domain
 * 5. Customize services to match your offerings
 * 6. Update skills based on your expertise
 * 7. Change colors if desired
 * 
 * After updating this file, no other files need manual updates!
 */
