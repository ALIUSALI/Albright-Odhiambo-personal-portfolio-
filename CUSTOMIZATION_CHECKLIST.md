# Customization Checklist - Complete Your Portfolio

Follow this checklist to personalize your portfolio website. Estimated time: **1-2 hours**

## Phase 1: Critical Updates (30 minutes)

These MUST be updated for the portfolio to be yours:

### Personal Information
- [ ] Replace "Albright Odhiambo" with your name
  - `/components/header.tsx`
  - `/components/hero.tsx`
  - `/components/footer.tsx`
  - `/app/layout.tsx`

- [ ] Update phone number `0785814973`
  - `/components/header.tsx` (find all instances)
  - `/components/floating-cta.tsx`
  - `/components/contact.tsx`
  - Update WhatsApp link: `https://wa.me/0785814973`

- [ ] Update email address
  - `/components/contact.tsx` → Change `hello@albright.dev`
  - `/app/layout.tsx` → Metadata
  - `/components/footer.tsx`

### Social Media Links (IMPORTANT!)
**File:** `/components/social-links.tsx`

Update each URL:
- [ ] Twitter: `https://x.com/AlbrightAl60499` → Your handle
- [ ] Instagram: `https://www.instagram.com/al.bright_o` → Your handle
- [ ] Facebook: `https://www.facebook.com/share/1Axj1t5Hdh` → Your profile
- [ ] LinkedIn: `https://www.linkedin.com/in/albright-odhiambo-b5aa8836b` → Your profile
- [ ] GitHub: `https://github.com/aliusalbright` → Your profile

## Phase 2: Content Updates (45 minutes)

### Hero Section Customization
**File:** `/components/hero.tsx`

- [ ] Update tagline (currently: "Building Smart Digital Solutions with Web, SEO & AI")
  ```tsx
  // Line ~40
  <p className="text-2xl sm:text-3xl...">
    Your New Tagline Here
  </p>
  ```

- [ ] Update intro description (currently: "Helping businesses transform...")
  ```tsx
  // Line ~50
  <p className="text-lg text-foreground/60...">
    Your description here
  </p>
  ```

- [ ] Update statistics if different
  ```tsx
  // Lines ~62-73
  // Change: 50+ projects, 100% satisfaction, 5+ years
  // To: Your numbers
  ```

### About Section
**File:** `/components/about.tsx`

- [ ] Update main heading and description
  - Line ~27: Change "Albright"
  - Line ~32-42: Update bio paragraphs

- [ ] Update 6 highlight points
  - Line ~91-111: Replace with your achievements

- [ ] Update skills by category
  - Line ~125-170: Web Development, AI, Marketing, Creative skills

### Services
**File:** `/components/services.tsx`

**Option A: Keep all 6 services**
- [ ] Update service descriptions to match your offerings

**Option B: Change services**
- [ ] Remove services you don't offer
- [ ] Update titles and descriptions
- [ ] Keep or change accent colors (red/blue)

Example modification:
```tsx
{
  title: 'Your Service Name',
  description: 'Your service description',
  icon: CodeIcon, // Change icon if needed
  accent: 'accent', // or 'accent-blue'
},
```

### Projects Portfolio
**File:** `/components/projects.tsx`

- [ ] Replace or modify the 6 sample projects
  - [ ] Project 1: Update or remove
  - [ ] Project 2: Update or remove
  - [ ] Project 3: Update or remove
  - [ ] Project 4: Update or remove
  - [ ] Project 5: Update or remove
  - [ ] Project 6: Update or remove

Add your projects:
```tsx
{
  id: 1,
  title: 'Your Project Name',
  description: 'What you built and key features',
  technologies: ['Tech1', 'Tech2', 'Tech3'],
  link: 'https://your-project.com',
  status: 'completed', // or 'upcoming'
},
```

### CV/Resume Section
**File:** `/components/cv.tsx`

- [ ] Update work experience
  - [ ] Role 1: Update company, role, dates, description
  - [ ] Role 2: Update or remove
  - [ ] Role 3: Update or remove
  - Add more roles if needed

- [ ] Update education
  - [ ] Degree 1: Update
  - [ ] Degree 2: Update or remove

- [ ] Add your resume PDF
  - [ ] Download your resume as PDF
  - [ ] Upload to `/public/resume.pdf`
  - [ ] Verify download link works

## Phase 3: SEO & Metadata (20 minutes)

### Update SEO Tags
**File:** `/app/layout.tsx`

- [ ] Update `metadata.title`
  ```tsx
  title: 'Your Name - Your Title',
  ```

- [ ] Update `metadata.description`
  ```tsx
  description: 'Your professional summary',
  ```

- [ ] Update `metadata.keywords`
  ```tsx
  keywords: ['Your', 'Keywords', 'Here'],
  ```

- [ ] Update Open Graph URL
  ```tsx
  url: 'https://your-domain.com',
  ```

### Update Sitemap
**File:** `/public/sitemap.xml`

- [ ] Replace domain: `https://albright.dev` → `https://your-domain.com`
- [ ] Update lastmod date if needed

### Update Footer
**File:** `/components/footer.tsx`

- [ ] Update company tagline
- [ ] Verify all links work

## Phase 4: Visual Customization (20 minutes) - OPTIONAL

### Change Color Scheme
**File:** `/app/globals.css`

Find the `:root` section and change:

- [ ] Primary Accent (Red):
  ```css
  --accent: 0 84% 60%;  /* Change HSL values */
  ```

- [ ] Secondary Accent (Blue):
  ```css
  --accent-blue: 219 100% 60%;  /* Change HSL values */
  ```

HSL Reference:
- Red: `0 84% 60%`
- Blue: `219 100% 60%`
- Purple: `280 85% 60%`
- Green: `120 100% 45%`
- Orange: `30 100% 50%`

### Change Fonts
**File:** `/app/layout.tsx`

Replace the imports:
```tsx
import { Your_Font, Your_Mono_Font } from 'next/font/google'

const yourFont = Your_Font({ subsets: ['latin'] })
const yourMono = Your_Mono_Font({ subsets: ['latin'] })
```

## Phase 5: Testing (15 minutes)

### Local Testing
```bash
npm run dev
```

- [ ] Visit http://localhost:3000
- [ ] Scroll through entire page
- [ ] Click all links and buttons
- [ ] Test WhatsApp button
- [ ] Test phone button
- [ ] Test all social links

### Mobile Testing
- [ ] Open on mobile (test on real phone if possible)
- [ ] Hamburger menu works
- [ ] Content is readable
- [ ] Buttons are clickable
- [ ] Images look good

### Link Verification
- [ ] All social links open correctly
- [ ] WhatsApp link opens chat
- [ ] Phone link opens dialer
- [ ] Email link opens mail client
- [ ] External project links work
- [ ] Resume PDF downloads

## Phase 6: Deployment (15 minutes)

### Prepare for Deployment
- [ ] All content is updated
- [ ] All links are correct
- [ ] No placeholder text remains
- [ ] No console errors
- [ ] Mobile responsiveness confirmed

### Deploy to Vercel
- [ ] Push code to GitHub
- [ ] Create account on Vercel.com if needed
- [ ] Import your GitHub repository
- [ ] Deploy with one click
- [ ] Verify live site works

### Custom Domain
- [ ] Get a domain (GoDaddy, Namecheap, etc.)
- [ ] Point domain to Vercel
- [ ] Update domain in:
  - [ ] `/app/layout.tsx`
  - [ ] `/public/sitemap.xml`
- [ ] Verify HTTPS works
- [ ] Test all links on live domain

## Phase 7: Post-Launch (Ongoing)

### Initial Setup
- [ ] Monitor analytics
- [ ] Check contact submissions
- [ ] Verify all emails are working
- [ ] Test WhatsApp integration

### Regular Maintenance
- [ ] Update projects monthly
- [ ] Refresh skills quarterly
- [ ] Update bio annually
- [ ] Check for broken links

### SEO Optimization
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Monitor search rankings
- [ ] Update keywords as needed

## Verification Checklist - Before Launch

✅ Final Check:
- [ ] No instances of "Albright Odhiambo" left (unless that's you!)
- [ ] No placeholder text visible
- [ ] All contact links work (WhatsApp, Phone, Email)
- [ ] All social media links are correct
- [ ] Resume PDF exists and downloads
- [ ] Mobile menu works
- [ ] No console errors
- [ ] Page loads under 3 seconds
- [ ] All images load properly
- [ ] Animations run smoothly

## Common Customization Patterns

### To completely replace a section:
1. Open the component file
2. Copy the entire component code
3. Modify content
4. Save and test with `npm run dev`

### To add a new service:
1. Open `/components/services.tsx`
2. Add new item to services array
3. Update title, description, icon
4. Choose accent color (red or blue)

### To hide a section temporarily:
1. Open `/app/page.tsx`
2. Comment out the component
3. Save and test

## Quick Find & Replace

Use your code editor's Find & Replace (Ctrl+Shift+H or Cmd+Shift+H):

| Find | Replace | Files |
|------|---------|-------|
| `Albright Odhiambo` | Your Name | All |
| `0785814973` | Your Phone | All |
| `hello@albright.dev` | Your Email | All |
| `AlbrightAl60499` | Your Twitter | All |
| `al.bright_o` | Your Instagram | All |
| `albright-odhiambo-b5aa8836b` | Your LinkedIn | All |
| `aliusalbright` | Your GitHub | All |

## Need Help?

### Documentation Files
1. **README.md** - Comprehensive full guide
2. **QUICK_START.md** - Quick reference
3. **PROJECT_SUMMARY.md** - What was built
4. **lib/config.ts** - All configuration in one place

### If Something Breaks
1. Check the component file for syntax errors
2. Verify all quotes and brackets match
3. Check browser console for error messages
4. Restart `npm run dev`
5. Clear cache if needed

## Estimated Timeline

| Phase | Time | Priority |
|-------|------|----------|
| Personal Info | 15 min | CRITICAL |
| Social Links | 15 min | CRITICAL |
| Content Updates | 45 min | HIGH |
| SEO & Metadata | 20 min | HIGH |
| Visual Customization | 20 min | OPTIONAL |
| Testing | 15 min | HIGH |
| Deployment | 15 min | HIGH |
| **TOTAL** | **2-3 hours** | |

---

**You've got this! Your premium portfolio is ready to be personalized.** 🚀

Once completed, you'll have a professional, modern portfolio that showcases your expertise and converts visitors into clients.
