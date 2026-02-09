# Quick Start Guide - Albright Odhiambo Portfolio

## 1. Personalization (Most Important!)

### Step 1: Update Your Name & Contact Info
**File:** `/components/header.tsx` and `/components/hero.tsx`
- Replace "Albright Odhiambo" with your name
- Update phone number: `0785814973` → your number
- Update WhatsApp links throughout

### Step 2: Update Social Media Links
**File:** `/components/social-links.tsx`
```tsx
{
  id: 1,
  name: 'Twitter',
  url: 'https://x.com/YOUR_HANDLE',  // Update this
  ...
},
```

### Step 3: Update About Section
**File:** `/components/about.tsx`
- Modify the professional bio
- Update your skills and competencies
- Change accent colors if desired

### Step 4: Add Your Projects
**File:** `/components/projects.tsx`
```tsx
{
  title: 'Your Project Name',
  description: 'Project description',
  technologies: ['Tech1', 'Tech2'],
  link: 'https://your-project.com',
  status: 'completed',
},
```

### Step 5: Update CV/Resume
**File:** `/components/cv.tsx`
- Add your work experience
- Update education details
- Add a PDF file at `/public/resume.pdf`

### Step 6: Update Services
**File:** `/components/services.tsx`
- Modify service descriptions
- Add/remove services
- Update icon colors

## 2. Setup & Deployment

### Local Development
```bash
npm run dev
# Visit http://localhost:3000
```

### Deploy to Vercel (Recommended)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy with one click

### Custom Domain
Update in `/app/layout.tsx`:
```tsx
openGraph: {
  url: 'https://your-domain.com',  // Change this
}
```

## 3. Customization Options

### Change Theme Colors
**File:** `/app/globals.css`

Find the `:root` section and modify:
```css
--accent: 0 84% 60%;           /* Red - change this */
--accent-blue: 219 100% 60%;   /* Blue - or this */
```

### Add More Sections
Copy any existing component (e.g., `/components/services.tsx`) and create a new one.

### Modify Animations
**File:** `/app/globals.css`
- Adjust animation timing (currently 0.6s)
- Change delay values
- Modify transform amounts

## 4. Important Files Reference

```
Your Portfolio Structure:
├── /app
│   ├── layout.tsx          ← SEO metadata & fonts
│   ├── globals.css         ← Colors & animations
│   └── page.tsx            ← Main page assembly
├── /components
│   ├── header.tsx          ← Navigation
│   ├── hero.tsx            ← Hero section
│   ├── about.tsx           ← About section
│   ├── services.tsx        ← Services cards
│   ├── projects.tsx        ← Projects grid
│   ├── cv.tsx              ← CV section
│   ├── contact.tsx         ← Contact section
│   ├── footer.tsx          ← Footer
│   ├── social-links.tsx    ← Social icons
│   └── floating-cta.tsx    ← WhatsApp & Call buttons
└── /public
    ├── sitemap.xml         ← SEO
    ├── robots.txt          ← SEO
    └── resume.pdf          ← Add your CV here
```

## 5. Common Customizations

### Change Hero Section Tagline
**File:** `/components/hero.tsx` (line ~40)
```tsx
<p className="text-2xl sm:text-3xl font-light text-foreground/80 mb-8">
  Your New Tagline Here
</p>
```

### Update Hero Description
**File:** `/components/hero.tsx` (line ~50)
```tsx
<p className="text-lg text-foreground/60 max-w-2xl mx-auto mb-10">
  Your professional description here
</p>
```

### Add Contact Form
Create `/components/contact-form.tsx` and import in `/components/contact.tsx`

### Change Font
**File:** `/app/layout.tsx`
```tsx
const myFont = MyFont({ subsets: ['latin'] })
// Then use in HTML class
```

## 6. Mobile Responsiveness

The site is fully responsive! Test on:
- Mobile (375px)
- Tablet (768px)
- Desktop (1024px+)

Responsive breakpoints:
- `sm:` (640px)
- `md:` (768px)
- `lg:` (1024px)

## 7. SEO Tips

- Update meta description in `/app/layout.tsx`
- Add keywords for your industry
- Update sitemap.xml with your actual URLs
- Submit to Google Search Console
- Monitor with Google Analytics

## 8. Performance

Current optimizations:
- CSS animations (hardware-accelerated)
- Optimized images
- Code splitting
- Fast loading

Monitor with:
- Lighthouse (Chrome DevTools)
- PageSpeed Insights
- WebPageTest

## 9. Maintenance

### Weekly
- Check contact form submissions
- Review social media mentions

### Monthly
- Update projects section
- Review analytics
- Check broken links

### Quarterly
- Update skills/expertise
- Refresh project descriptions
- Review testimonials

## 10. Support & Resources

### Documentation
- Full guide in `README.md`
- Component descriptions in each file
- Tailwind CSS: https://tailwindcss.com
- Next.js: https://nextjs.org

### Getting Help
1. Check component comments
2. Review similar components
3. Check README.md
4. Vercel docs: https://vercel.com/docs

## Quick Checklist

- [ ] Updated name and contact info
- [ ] Changed phone number (all occurrences)
- [ ] Updated social media links
- [ ] Customized About section
- [ ] Added your projects
- [ ] Updated CV/Resume PDF
- [ ] Changed services if needed
- [ ] Tested on mobile
- [ ] Updated meta tags
- [ ] Deployed to custom domain

## Next Steps

1. **Test Locally**: `npm run dev`
2. **Customize Content**: Update all text/links
3. **Add Resume**: Place at `/public/resume.pdf`
4. **Deploy**: Push to GitHub → Deploy on Vercel
5. **Monitor**: Check analytics and user engagement

---

**Your portfolio is now ready! Make it your own and showcase your amazing work!** 🚀
