# Deployment Guide - Launch Your Portfolio

Complete step-by-step guide to deploy your portfolio to the internet.

## Table of Contents
1. [Local Setup](#local-setup)
2. [GitHub Preparation](#github-preparation)
3. [Vercel Deployment](#vercel-deployment)
4. [Custom Domain](#custom-domain)
5. [Post-Launch](#post-launch)

---

## Local Setup

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Code editor (VS Code recommended)

### 1. Install Dependencies
```bash
npm install
# or
yarn install
```

### 2. Run Development Server
```bash
npm run dev
# or
yarn dev
```

Visit **http://localhost:3000** in your browser.

### 3. Verify Everything Works
- [ ] All sections load
- [ ] No console errors
- [ ] Animations run smoothly
- [ ] Links are functional
- [ ] Mobile responsive

### 4. Build for Production
```bash
npm run build
npm start
```

---

## GitHub Preparation

### Option A: Create New Repository

**1. Initialize Git**
```bash
git init
git add .
git commit -m "Initial portfolio commit"
```

**2. Create GitHub Repository**
- Go to [github.com/new](https://github.com/new)
- Name: `portfolio` (or your preference)
- Description: "Personal portfolio website"
- Click "Create repository"

**3. Connect Local to GitHub**
```bash
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

### Option B: Clone & Use

If you prefer not to use Git, you can:
1. Download the project as ZIP
2. Upload files directly to Vercel

---

## Vercel Deployment

### Recommended Method: Via GitHub

**1. Create Vercel Account**
- Go to [vercel.com](https://vercel.com)
- Click "Sign up"
- Choose "GitHub"
- Authorize GitHub

**2. Import Project**
- Click "Add New..." → "Project"
- Select your GitHub repository
- Click "Import"

**3. Configure Settings**
- Framework: **Next.js** (auto-detected)
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`

**4. Deploy**
- Click "Deploy"
- Wait for build to complete
- You'll get a preview URL!

### Alternative: Direct Upload

**1. Create Vercel Account** (as above)

**2. Upload Files**
- Click "Add New..." → "Project"
- Upload your project folder
- Configure settings
- Deploy

---

## Custom Domain

### Get a Domain

**Popular Domain Registrars:**
- [Namecheap](https://www.namecheap.com)
- [GoDaddy](https://www.godaddy.com)
- [Bluehost](https://www.bluehost.com)
- [Google Domains](https://domains.google.com)
- [Domain.com](https://www.domain.com)

**Cost:** Usually $10-15/year

### Connect Domain to Vercel

**1. Add Domain in Vercel**
- Go to your Vercel project
- Settings → Domains
- Enter your domain
- Click "Add"

**2. Update Domain Registrar**

Vercel will show you nameservers:
```
Nameserver 1: ns1.vercel-dns.com
Nameserver 2: ns2.vercel-dns.com
Nameserver 3: ns3.vercel-dns.com
Nameserver 4: ns4.vercel-dns.com
```

Go to your domain registrar:
1. Find DNS/Nameserver settings
2. Replace existing nameservers
3. Add Vercel nameservers
4. Save changes

**3. Wait for DNS Propagation**
- Takes 24-48 hours to fully propagate
- Vercel will notify when ready
- Visit your domain to confirm

### Verify SSL Certificate
- Vercel automatically provides HTTPS
- Check domain shows padlock icon
- SSL certificate auto-renews

---

## Post-Launch Checklist

### Immediate (First Hour)
- [ ] Visit your domain
- [ ] Test all links
- [ ] Check mobile responsiveness
- [ ] Verify WhatsApp button works
- [ ] Test phone button
- [ ] Check all social media links
- [ ] Download resume PDF
- [ ] Check console for errors

### First Day
- [ ] Share portfolio on social media
- [ ] Update LinkedIn profile with link
- [ ] Send to contacts and friends
- [ ] Test from different devices
- [ ] Monitor for issues

### First Week
- [ ] Submit sitemap to Google Search Console
  - Go to [search.google.com/search-console](https://search.google.com/search-console)
  - Add your domain
  - Submit `/public/sitemap.xml`

- [ ] Submit to Bing Webmaster Tools
  - Go to [bing.com/webmasters](https://bing.com/webmasters)
  - Add domain
  - Submit sitemap

- [ ] Set up Google Analytics (optional)
  - Go to [analytics.google.com](https://analytics.google.com)
  - Create property
  - Add tracking code to `layout.tsx`

### First Month
- [ ] Monitor search rankings
- [ ] Track visitor analytics
- [ ] Review contact submissions
- [ ] Update content as needed
- [ ] Check all features work

---

## Troubleshooting

### Domain Not Connecting
**Solution:**
1. Check nameservers are correctly set
2. Wait 48 hours for full propagation
3. Clear browser cache
4. Try in incognito window
5. Check Vercel domain settings

### Build Fails on Vercel
**Solution:**
1. Check build logs in Vercel dashboard
2. Run `npm run build` locally
3. Fix any errors shown
4. Commit and push to GitHub
5. Vercel will auto-redeploy

### Site is Slow
**Solution:**
1. Check Vercel analytics
2. Optimize images if any
3. Reduce animation duration
4. Clear Vercel cache and redeploy

### Links Don't Work
**Solution:**
1. Verify links in components
2. Check for typos
3. Test locally first
4. Ensure WhatsApp/phone format correct

---

## Updating Your Site

### Make Changes Locally
```bash
npm run dev
# Make changes
# Test locally
```

### Commit and Push
```bash
git add .
git commit -m "Update content"
git push origin main
```

### Automatic Deploy
- Vercel automatically redeploys on push
- Check deployment progress
- Live within 1-2 minutes

---

## Environment Variables (If Needed)

For future features (like analytics):

**1. Create `.env.local` (Local Only)**
```
NEXT_PUBLIC_ANALYTICS_ID=your-id
```

**2. Add to Vercel**
- Settings → Environment Variables
- Add same variables
- Redeploy

---

## Performance Monitoring

### Lighthouse Score
- Go to your site
- Press F12 (DevTools)
- Go to "Lighthouse" tab
- Click "Analyze page load"
- Target: 90+ scores

### Vercel Analytics
- Go to Vercel Dashboard
- Project → Analytics
- Monitor:
  - Page load times
  - First Input Delay
  - Cumulative Layout Shift

### Google Search Console
- Monitor search rankings
- Check indexing status
- View search queries
- Fix any crawl errors

---

## SEO Optimization Post-Launch

### Submit to Search Engines
✅ Google Search Console
✅ Bing Webmaster Tools
✅ Google My Business (local)

### Monitor Rankings
- Target keywords: "Web Developer", "AI Solutions", etc.
- Check monthly rankings
- Adjust content if needed

### Build Backlinks
- Share on social media
- Connect with other professionals
- Guest posts on relevant blogs
- Directory submissions

---

## Security Best Practices

### Already Implemented
✅ HTTPS/SSL (Vercel)
✅ Secure headers
✅ No sensitive data exposed
✅ Regular updates via Vercel

### Additional Steps
- Keep npm packages updated
- Monitor for security alerts
- Review access logs
- Regular backups

---

## Maintenance Schedule

### Daily
- Monitor contact submissions
- Check for errors in logs

### Weekly
- Review analytics
- Check for broken links
- Monitor performance

### Monthly
- Update content
- Update projects/portfolio
- Review search rankings
- Check security updates

### Quarterly
- Update skills/experience
- Refresh project descriptions
- Performance optimization
- Feature improvements

### Annually
- Update bio and tagline
- Refresh styling if desired
- Review and upgrade packages
- Audit SEO strategy

---

## Common Vercel Issues & Solutions

### GitHub Not Connecting
```
Solution: Check GitHub OAuth permissions
1. Go to Vercel Settings
2. Connected Integrations
3. Reconnect GitHub
4. Authorize all permissions
```

### Build Keeps Failing
```
Solution: Check Node version
1. Local: node --version (use 18+)
2. Vercel: Settings → Node.js Version
3. Set to 18 or 20
4. Redeploy
```

### Slow Deployment
```
Solution: Check build size
1. Remove unused dependencies
2. Optimize images
3. Check for large files
4. Run: npm run build (locally)
```

---

## Success Metrics

Track your success with:

| Metric | Target | Check |
|--------|--------|-------|
| Page Load | < 3s | Lighthouse |
| Mobile Score | 90+ | Lighthouse |
| Desktop Score | 90+ | Lighthouse |
| Indexed Pages | 5+ | Google Console |
| Monthly Visitors | 100+ | Analytics |
| Contact Rate | 5% | Form submissions |

---

## Support & Resources

### Vercel Docs
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Community](https://vercel.com/support)

### Domain Issues
- Contact your registrar's support
- Check DNS propagation: [dnschecker.org](https://dnschecker.org)

### Technical Help
- Check component documentation
- Review code comments
- Check browser console for errors

---

## Congratulations! 🎉

Your portfolio is live! You're now ready to:

✅ Share with potential clients
✅ Include in your resume
✅ Share on social media
✅ Build your personal brand
✅ Start getting inquiries

**Next Steps:**
1. Promote on social media
2. Update LinkedIn
3. Share with network
4. Monitor analytics
5. Keep content fresh

---

**Your premium portfolio is now live and ready to showcase your expertise!**

For more help, refer to the other documentation files:
- `README.md` - Full feature guide
- `QUICK_START.md` - Quick reference
- `CUSTOMIZATION_CHECKLIST.md` - Personalization guide
- `COMPONENT_GUIDE.md` - Technical reference
