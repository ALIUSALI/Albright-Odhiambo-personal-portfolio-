# Component Guide - Portfolio Architecture

## Component Tree

```
Page (/app/page.tsx)
│
├── Header (/components/header.tsx)
│   ├── Logo/Brand
│   ├── Navigation Menu
│   │   └── About, Services, Projects, CV, Contact
│   ├── WhatsApp Button
│   └── Mobile Menu (Hamburger)
│
├── FloatingCTA (/components/floating-cta.tsx)
│   ├── WhatsApp Button (Fixed)
│   └── Call Button (Fixed)
│
├── Hero (/components/hero.tsx)
│   ├── Background Animation
│   ├── Title & Tagline
│   ├── Description
│   ├── CTA Buttons
│   ├── Statistics (3 items)
│   └── Scroll Indicator
│
├── About (/components/about.tsx)
│   ├── Section Title
│   ├── Bio Content
│   ├── 6 Highlight Points
│   └── Skills Grid
│       ├── Web Development
│       ├── AI & Automation
│       ├── Digital Marketing
│       └── Creative Services
│
├── Services (/components/services.tsx)
│   ├── Section Title
│   └── Service Cards (6 items)
│       ├── Web Development
│       ├── SEO Optimization
│       ├── AI Chatbot Generation
│       ├── Google Maps Business
│       ├── AI Content Creation
│       └── Professional Writing
│
├── Projects (/components/projects.tsx)
│   ├── Section Title
│   └── Project Grid (3 columns)
│       ├── Project 1
│       ├── Project 2
│       ├── Project 3
│       ├── Project 4
│       ├── Project 5
│       └── Project 6
│
├── CV (/components/cv.tsx)
│   ├── Experience Section
│   │   ├── Role 1
│   │   ├── Role 2
│   │   └── Role 3
│   ├── Education Section
│   │   ├── Degree 1
│   │   └── Degree 2
│   └── Resume Sidebar
│       ├── PDF Viewer
│       ├── Download Button
│       ├── Statistics
│       └── Contact CTA
│
├── Contact (/components/contact.tsx)
│   ├── Section Title
│   ├── Contact Methods (4 items)
│   │   ├── WhatsApp
│   │   ├── Phone
│   │   ├── Email
│   │   └── Location
│   ├── CTA Card
│   ├── Response Time Info
│   └── Action Buttons
│
├── SocialLinks (/components/social-links.tsx)
│   ├── Twitter Icon
│   ├── Instagram Icon
│   ├── Facebook Icon
│   ├── LinkedIn Icon
│   └── GitHub Icon
│
└── Footer (/components/footer.tsx)
    ├── Brand Info
    ├── Quick Links
    ├── Services Links
    ├── Contact Info
    ├── Social Links
    └── Copyright & Terms
```

## Component Details

### Header Component
**File:** `/components/header.tsx`

**Props:** None (uses scroll listener)

**State:**
- `isScrolled` - Tracks scroll position for glass effect
- `isMobileMenuOpen` - Controls mobile menu visibility

**Features:**
- Fixed positioning with glass effect on scroll
- Smooth navigation to sections
- Mobile hamburger menu
- WhatsApp CTA button
- Responsive design

**Key Methods:**
- `scrollToSection(id)` - Smooth scroll to section

**Animations:**
- Fade in/down on mobile menu open

---

### FloatingCTA Component
**File:** `/components/floating-cta.tsx`

**Props:** None

**State:** None

**Features:**
- Fixed position (bottom-right)
- Two CTA buttons (WhatsApp, Call)
- Hover animations
- Glow effects
- Tooltips

**Links:**
- WhatsApp: `https://wa.me/[number]`
- Call: `tel:+[number]`

---

### Hero Component
**File:** `/components/hero.tsx`

**Props:** None

**State:** None

**Features:**
- Animated background shapes
- Gradient text for name
- Stats display
- Dual CTA buttons
- Scroll indicator

**Animations:**
- Fade in from bottom (main content)
- Float (background shapes)
- Slide down (scroll indicator)

---

### About Component
**File:** `/components/about.tsx`

**Props:** None

**State:** None

**Features:**
- Left: Bio + achievements
- Right: Skills grid
- Glassmorphic card design
- Check icons for highlights

**Skills Categories:**
1. Web Development (6 skills)
2. AI & Automation (5 skills)
3. Digital Marketing (5 skills)
4. Creative Services (5 skills)

---

### Services Component
**File:** `/components/services.tsx`

**Props:** None

**State:** None

**Features:**
- 6 service cards in grid
- Icon displays
- Hover animations
- Glow effects
- WhatsApp links

**Service Accents:**
- Red: Web Dev, SEO, Google Maps, Writing
- Blue: AI Chatbot, AI Content

**Customization:**
- Easy to add/remove services
- Just modify services array

---

### Projects Component
**File:** `/components/projects.tsx`

**Props:** None

**State:** None

**Features:**
- 3-column grid (responsive)
- Status indicators
- Technology tags
- Project links
- Animated entry

**Project Structure:**
```tsx
{
  id: number,
  title: string,
  description: string,
  technologies: string[],
  link: string,
  status: 'completed' | 'upcoming',
}
```

---

### CV Component
**File:** `/components/cv.tsx`

**Props:** None

**State:**
- `showPdfViewer` - Toggle PDF viewer display

**Features:**
- Experience timeline
- Education section
- PDF viewer/download
- Statistics sidebar
- Sticky positioning on desktop

**Experience Structure:**
```tsx
{
  role: string,
  company: string,
  duration: string,
  description: string,
}
```

---

### Contact Component
**File:** `/components/contact.tsx`

**Props:** None

**State:** None

**Features:**
- 4 contact methods
- Large CTA card
- Response time guarantee
- Background animations

**Contact Methods:**
1. WhatsApp (green)
2. Phone (blue)
3. Email (red)
4. Location (purple)

---

### SocialLinks Component
**File:** `/components/social-links.tsx`

**Props:** None

**State:** None

**Features:**
- 5 social platforms
- Glass background
- Hover tooltips
- Animated entry

**Platforms:**
1. Twitter
2. Instagram
3. Facebook
4. LinkedIn
5. GitHub

---

### Footer Component
**File:** `/components/footer.tsx`

**Props:** None

**State:** None

**Features:**
- Brand section
- Navigation links
- Service shortcuts
- Contact info
- Social media icons
- Copyright notice

**Sub-components:**
- Uses `<SocialLinks />`

---

## Styling System

### CSS Classes

#### Glassmorphism
```tsx
<div className="glass">  {/* Frosted glass effect */}
<div className="glass-dark">  {/* Dark variant */}
```

#### Gradients
```tsx
<div className="gradient-accent">  {/* Red gradient */}
<div className="gradient-accent-blue">  {/* Blue gradient */}
<div className="gradient-mix">  {/* Red-Purple-Blue */}
```

#### Animations
```tsx
<div className="animate-fadeInUp">  {/* Fade in from bottom */}
<div className="animate-slideInLeft">  {/* Slide from left */}
<div className="animate-float">  {/* Floating motion */}
<div className="animate-glow">  {/* Glowing effect */}
```

#### Effects
```tsx
<div className="glow-accent">  {/* Red glow shadow */}
<div className="glow-accent-blue">  {/* Blue glow shadow */}
<div className="text-gradient">  {/* Text color gradient */}
```

#### Transitions
```tsx
<div className="transition-smooth">  {/* 300ms ease-out */}
```

---

## Responsive Design

### Breakpoints

**Mobile (sm: 640px)**
- Single column layouts
- Hamburger menu
- Smaller font sizes
- Touch-friendly buttons

**Tablet (md: 768px)**
- Two column layouts
- Horizontal navigation
- Medium font sizes
- Optimized spacing

**Desktop (lg: 1024px)**
- Multi-column layouts
- Full navigation
- Larger font sizes
- Premium spacing

### Responsive Classes

```tsx
// Hide on mobile, show on desktop
<div className="hidden md:block">

// Show on mobile, hide on desktop
<div className="md:hidden">

// Responsive grid
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

// Responsive font size
<h1 className="text-3xl md:text-4xl lg:text-5xl">

// Responsive padding
<div className="p-4 md:p-6 lg:p-8">
```

---

## Data Flow

### No External APIs
All content is hardcoded in components for simplicity and speed.

### Props Flow
Components are mostly self-contained with no inter-component communication.

### State Management
- Only Header has local state (scroll position, menu open)
- CV has local state (PDF viewer toggle)
- All other components are stateless

---

## Customization Quick Reference

### Add a New Service
**File:** `/components/services.tsx`

```tsx
{
  id: 7,
  title: 'Your New Service',
  description: 'Service description',
  icon: YourIcon,
  accent: 'accent', // or 'accent-blue'
  color: 'text-red-500', // Match accent
}
```

### Add a New Project
**File:** `/components/projects.tsx`

```tsx
{
  id: 7,
  title: 'Your Project Name',
  description: 'Project details',
  technologies: ['Tech1', 'Tech2'],
  link: 'https://project-url.com',
  status: 'completed',
}
```

### Add a New Experience
**File:** `/components/cv.tsx`

```tsx
{
  role: 'Your Role',
  company: 'Company Name',
  duration: '2024 - Present',
  description: 'What you did',
}
```

### Change Colors
**File:** `/app/globals.css`

```css
:root {
  --accent: [HSL value];
  --accent-blue: [HSL value];
}
```

---

## Performance Considerations

### Optimizations Implemented
✅ CSS animations (hardware-accelerated)
✅ No external API calls
✅ Minimal JavaScript
✅ Responsive images (implicit with design)
✅ Code splitting (Next.js)
✅ Font optimization (next/font)
✅ Smooth scroll behavior

### Future Optimizations
- Image lazy loading for projects
- Dynamic imports for heavy components
- Analytics integration
- Caching strategies

---

## Accessibility Features

### Implemented
✅ Semantic HTML (header, main, footer, section)
✅ ARIA labels on buttons
✅ Keyboard navigation (smooth scroll)
✅ Color contrast ratios
✅ Alt text support (images)
✅ Mobile touch targets (44px minimum)

### Best Practices
- All buttons have proper labels
- Links are clearly styled
- Focus states are visible
- No color-only information

---

## File Dependencies

```
/app/layout.tsx
├── /globals.css
└── /page.tsx
    ├── /components/header.tsx
    ├── /components/floating-cta.tsx
    ├── /components/hero.tsx
    ├── /components/about.tsx
    ├── /components/services.tsx
    ├── /components/projects.tsx
    ├── /components/cv.tsx
    ├── /components/contact.tsx
    ├── /components/footer.tsx
    └── /components/social-links.tsx
        └── (used in footer)
```

---

## Common Component Patterns

### Section Template
```tsx
export function SectionName() {
  return (
    <section id="section-id" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Title</h2>
          <div className="w-20 h-1 bg-gradient..." />
        </div>

        {/* Content */}
        {/* ... */}
      </div>
    </section>
  )
}
```

### Card Component
```tsx
<div className="glass rounded-xl p-6 h-full flex flex-col">
  {/* Icon */}
  {/* Content */}
  {/* CTA */}
</div>
```

### Button Styles
```tsx
// Primary (Red)
<a className="px-8 py-4 rounded-lg gradient-accent text-white glow-accent hover:scale-105">

// Secondary (Blue)
<a className="px-8 py-4 rounded-lg gradient-accent-blue text-white glow-accent-blue">

// Tertiary (Border)
<a className="px-8 py-4 rounded-lg border border-foreground/20 text-foreground hover:border-accent">
```

---

## Testing Checklist by Component

- [ ] Header - Mobile menu works, scroll effect applied
- [ ] FloatingCTA - Both buttons visible, links work
- [ ] Hero - Animations smooth, text centered, buttons functional
- [ ] About - Two-column layout on desktop, single on mobile
- [ ] Services - Grid responsive, hover effects work
- [ ] Projects - Grid responsive, status badges show
- [ ] CV - Timeline shows, PDF viewer functional
- [ ] Contact - All icons visible, links work
- [ ] Footer - All links functional, layout responsive

---

**This portfolio is fully built and ready for customization!**

Refer back to this guide when modifying components or adding new features.
