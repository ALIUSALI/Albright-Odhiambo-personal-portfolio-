# Albright Odhiambo - Premium Portfolio Website

A luxury, professional, and futuristic personal portfolio for a tech professional specializing in web development, AI solutions, and digital growth.

## Features

### Design & Aesthetics
- **Premium Dark Theme**: Black and charcoal base with red/blue accent highlights
- **Glassmorphism Effects**: Frosted glass cards with backdrop blur
- **Smooth Animations**: Fade-in, slide-in, float, and glow animations throughout
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **Modern Typography**: Clean, professional font pairing with excellent readability

### Sections

1. **Header & Navigation**
   - Fixed header with glass effect
   - Smooth scroll navigation
   - WhatsApp CTA button

2. **Floating CTA Buttons**
   - Fixed WhatsApp and Call buttons
   - Always accessible for quick contact
   - Hover animations with tooltips

3. **Hero Section**
   - Bold personal branding with animated gradient text
   - Compelling tagline and professional intro
   - Animated background elements
   - Statistics display (projects, satisfaction, experience)
   - Dual CTA buttons for engagement

4. **About Me**
   - Professional bio with key highlights
   - Comprehensive skills breakdown by category
   - Check-marked achievements
   - Grid layout with glassmorphic cards

5. **Services** (Premium Cards)
   - Web Development
   - SEO Optimization
   - AI Chatbot Generation
   - Google Maps Business Placement
   - AI Content Creation
   - Professional Writing
   - Hover effects with glow animations
   - Direct WhatsApp links for inquiries

6. **Projects Portfolio**
   - Grid-based project showcase
   - Project cards with descriptions
   - Technology tags
   - Status indicators (Completed/Upcoming)
   - External links for completed projects

7. **CV / Resume**
   - Professional experience timeline
   - Education credentials
   - PDF viewer and download
   - Key statistics sidebar
   - Sticky resume preview

8. **Contact Section**
   - Multiple contact methods
   - WhatsApp integration
   - Phone call button
   - Email contact
   - Location information
   - Response time guarantee

9. **Social Media Links**
   - Twitter/X
   - Instagram
   - Facebook
   - LinkedIn
   - GitHub
   - Animated hover effects with tooltips

10. **Footer**
    - Quick navigation links
    - Service shortcuts
    - Contact information
    - Social media icons
    - Copyright notice

## Customization Guide

### Updating Personal Information

**Header and Hero Section:**
Edit `/components/header.tsx` and `/components/hero.tsx`:
- Change the name "Albright Odhiambo" to your name
- Update the tagline: "Building Smart Digital Solutions with Web, SEO & AI"
- Modify the intro description

**Contact Information:**
Update across multiple files:
- Phone number: `0785814973` → your number
- WhatsApp: `https://wa.me/0785814973` → your WhatsApp link
- Email: `hello@albright.dev` → your email

**Social Media Links:**
Edit `/components/social-links.tsx`:
- Replace the social URLs with your profiles
- Add/remove platforms as needed

### Modifying Content

**About Section:**
Edit `/components/about.tsx`:
- Update professional bio
- Modify skills and competencies
- Change highlight points

**Services:**
Edit `/components/services.tsx`:
- Add/remove or modify service offerings
- Update descriptions
- Change accent colors per service

**Projects:**
Edit `/components/projects.tsx`:
- Add your actual projects
- Include real project descriptions
- Add technology stack
- Update project links

**CV/Resume:**
Edit `/components/cv.tsx`:
- Update work experience
- Modify education details
- Add a PDF file at `/public/resume.pdf` for downloads

### Styling & Colors

The design uses CSS custom properties (variables) defined in `/app/globals.css`:

**Theme Variables:**
- `--background`: Main background color (almost black)
- `--foreground`: Main text color (almost white)
- `--accent`: Primary accent (red)
- `--accent-blue`: Secondary accent (blue)
- `--card`: Card background color
- `--border`: Border color
- `--radius`: Border radius for components

**To change the color scheme:**
1. Update the CSS variables in `/app/globals.css`
2. HSL format is used for easy color manipulation

**Example - Change accent from red to purple:**
```css
--accent: 280 85% 60%;  /* Purple instead of red */
```

### Animations

Animations are configured in both:
- `/app/globals.css` (keyframes)
- `/tailwind.config.ts` (animation configuration)

Custom animation classes:
- `.animate-fadeInUp` - Fade in from bottom
- `.animate-fadeInDown` - Fade in from top
- `.animate-slideInLeft` - Slide in from left
- `.animate-slideInRight` - Slide in from right
- `.animate-float` - Floating animation
- `.animate-glow` - Glowing effect
- `.animate-pulse-glow` - Pulsing glow

### Responsive Breakpoints

The site uses Tailwind CSS responsive prefixes:
- `sm:` - Small screens (640px)
- `md:` - Medium screens (768px)
- `lg:` - Large screens (1024px)

## SEO Features

- SEO-optimized metadata in `/app/layout.tsx`
- XML sitemap at `/public/sitemap.xml`
- Robots.txt at `/public/robots.txt`
- Open Graph tags for social sharing
- Semantic HTML structure
- Fast loading with optimized animations
- Mobile-first responsive design
- Accessible design with ARIA labels

## Performance Optimizations

- Next.js 16 with Turbopack
- CSS animations (hardware-accelerated)
- Optimized images and assets
- Lazy loading for components
- Smooth scroll behavior
- Debounced scroll events

## Browser Compatibility

- Chrome/Edge 90+
- Firefox 88+
- Safari 15+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy with one click

### Environment Variables

No environment variables are required for this portfolio.

### Custom Domain

1. Update the domain in the deployment settings
2. Update the domain references in:
   - `/app/layout.tsx` (Open Graph URL)
   - `/public/sitemap.xml`
   - Any hardcoded links

## Development

### Install Dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

### Run Development Server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production
```bash
npm run build
npm run start
# or
yarn build
yarn start
```

## File Structure

```
/app
  /layout.tsx          # Root layout with SEO metadata
  /globals.css         # Global styles and design tokens
  /page.tsx            # Main page component

/components
  /header.tsx          # Navigation header
  /hero.tsx            # Hero section
  /about.tsx           # About me section
  /services.tsx        # Services grid
  /projects.tsx        # Projects portfolio
  /cv.tsx              # CV/Resume section
  /contact.tsx         # Contact section
  /footer.tsx          # Footer
  /social-links.tsx    # Social media links
  /floating-cta.tsx    # Floating CTA buttons

/public
  /sitemap.xml         # XML sitemap
  /robots.txt          # Robots file
  /resume.pdf          # Your CV (add this)

/styles
  /globals.css         # Global styles

tailwind.config.ts     # Tailwind configuration
tsconfig.json          # TypeScript configuration
```

## Key Technologies

- **React 19** - UI framework
- **Next.js 16** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **CSS Animations** - Smooth animations and transitions

## Future Enhancements

Consider adding:
- Blog section with CMS integration
- Case studies with detailed project breakdowns
- Testimonials carousel
- Newsletter signup
- Contact form with email notifications
- Dark/Light theme toggle
- Multi-language support
- Analytics integration

## License

This portfolio template is free to use and customize for your needs.

## Support

For questions or issues, feel free to reach out via:
- WhatsApp: [Link in portfolio]
- Phone: [Your number]
- Email: [Your email]

---

Built with ❤️ for tech professionals ready to make an impact.
