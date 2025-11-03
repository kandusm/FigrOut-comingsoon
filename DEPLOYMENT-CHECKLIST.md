# FigrOut Deployment Checklist

Use this checklist to ensure a smooth deployment and launch of your FigrOut coming-soon website.

## Pre-Deployment

### Development Setup
- [x] Next.js 14 with App Router installed
- [x] Tailwind CSS configured with brand colors
- [x] All components created and styled
- [x] Environment variables configured locally
- [x] Local development server tested
- [x] Production build tested successfully

### Supabase Setup
- [ ] Supabase account created
- [ ] New project created in Supabase
- [ ] Database schema executed (`supabase-schema.sql`)
- [ ] `waitlist_submissions` table created
- [ ] Row Level Security (RLS) policies enabled
- [ ] Test submission verified in database

### Google Analytics Setup (Optional)
- [ ] Google Analytics 4 property created
- [ ] Measurement ID obtained (G-XXXXXXXXXX)
- [ ] GA4 tracking code tested

### Content Review
- [ ] Hero section copy reviewed and approved
- [ ] Feature cards content reviewed
- [ ] Privacy policy reviewed by legal (if required)
- [ ] Brand colors match FigrOut brand guidelines
- [ ] Typography matches brand guidelines (Inter, Montserrat)

## Deployment to Vercel

### Initial Deployment
- [ ] Code pushed to GitHub repository
- [ ] Vercel account connected to GitHub
- [ ] New project created in Vercel
- [ ] Repository imported to Vercel

### Environment Variables
Add these in Vercel Project Settings → Environment Variables:
- [ ] `NEXT_PUBLIC_SUPABASE_URL`
- [ ] `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- [ ] `NEXT_PUBLIC_GA_MEASUREMENT_ID` (if using GA)
- [ ] All variables set for Production, Preview, and Development

### Domain Configuration
- [ ] Custom domain `figr-out.com` added in Vercel
- [ ] DNS A record configured: `@` → Vercel IP
- [ ] DNS CNAME configured: `www` → `cname.vercel-dns.com`
- [ ] SSL certificate provisioned (automatic)
- [ ] HTTPS redirect enabled (automatic)
- [ ] Domain DNS propagation verified (can take up to 48 hours)

## Post-Deployment Testing

### Functional Testing
- [ ] Website loads on `https://figr-out.com`
- [ ] Website loads on `https://www.figr-out.com`
- [ ] HTTP redirects to HTTPS
- [ ] Privacy policy page accessible at `/privacy`
- [ ] Waitlist form visible and styled correctly
- [ ] Form validation works (test with invalid email)
- [ ] Form submission succeeds with valid data
- [ ] Success message displays after submission
- [ ] Error message displays if email already exists
- [ ] Submission appears in Supabase database

### Responsive Design Testing
Test on multiple screen sizes:
- [ ] Mobile: 360px (iPhone SE)
- [ ] Mobile: 375px (iPhone 12/13)
- [ ] Mobile: 414px (iPhone Pro Max)
- [ ] Tablet: 768px (iPad)
- [ ] Desktop: 1024px
- [ ] Desktop: 1440px
- [ ] Desktop: 1920px

### Browser Testing
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)
- [ ] Mobile Safari (iOS)
- [ ] Mobile Chrome (Android)

### SEO & Analytics

#### Metadata Verification
- [ ] Page title displays correctly in browser tab
- [ ] Meta description present in source code
- [ ] Open Graph tags present (`og:title`, `og:description`, `og:image`)
- [ ] Twitter Card tags present
- [ ] Canonical URL set to `https://figr-out.com`
- [ ] JSON-LD schema present in source code

#### Files & Sitemap
- [ ] `/robots.txt` accessible and correct
- [ ] `/sitemap.xml` accessible and correct
- [ ] `/manifest.webmanifest` accessible

#### Google Search Console
- [ ] Property added for `figr-out.com`
- [ ] Domain ownership verified
- [ ] Sitemap submitted (`https://figr-out.com/sitemap.xml`)
- [ ] URL inspection performed for homepage
- [ ] Request indexing submitted

#### Google Analytics (if configured)
- [ ] Real-time tracking working
- [ ] Page views being recorded
- [ ] Events being tracked (if any)

### Performance Testing

#### Lighthouse Audit
Run Lighthouse in Chrome DevTools (Incognito mode):
- [ ] Performance score ≥95
- [ ] Accessibility score ≥90
- [ ] Best Practices score ≥90
- [ ] SEO score ≥90

#### Core Web Vitals
- [ ] Largest Contentful Paint (LCP) <2.5s
- [ ] First Input Delay (FID) <100ms
- [ ] Cumulative Layout Shift (CLS) <0.1

#### PageSpeed Insights
- [ ] Test at [pagespeed.web.dev](https://pagespeed.web.dev)
- [ ] Mobile score ≥90
- [ ] Desktop score ≥95

### Security Headers
Verify in browser DevTools → Network → Response Headers:
- [ ] `X-Content-Type-Options: nosniff`
- [ ] `X-Frame-Options: DENY`
- [ ] `X-XSS-Protection: 1; mode=block`
- [ ] `Referrer-Policy: strict-origin-when-cross-origin`
- [ ] `Permissions-Policy` header present

## Marketing & Distribution

### Announcement Preparation
- [ ] Social media graphics created
- [ ] Launch announcement copy written
- [ ] BildOut website updated with FigrOut link
- [ ] Email announcement prepared (if applicable)

### Social Media
- [ ] LinkedIn post scheduled
- [ ] Twitter/X post scheduled
- [ ] Facebook post scheduled (if applicable)
- [ ] Instagram post scheduled (if applicable)

### Internal Communication
- [ ] Team notified of launch
- [ ] Support team briefed on FigrOut
- [ ] Monitoring plan in place

## Monitoring & Maintenance

### Daily (First Week)
- [ ] Check Supabase for new submissions
- [ ] Monitor Google Analytics traffic
- [ ] Check for error reports
- [ ] Review user feedback

### Weekly
- [ ] Review waitlist growth
- [ ] Analyze traffic sources
- [ ] Check for broken links
- [ ] Monitor page performance

### Monthly
- [ ] Backup Supabase data
- [ ] Review and update privacy policy (if needed)
- [ ] Update dependencies (`npm update`)
- [ ] Security audit

## Emergency Contacts

**Hosting Issues**: Vercel Support - support@vercel.com
**Database Issues**: Supabase Support - support@supabase.com
**Domain Issues**: Your domain registrar support
**Development Issues**: [Your development team contact]

## Rollback Plan

If critical issues are discovered:

1. **Immediate**: Set Vercel deployment to previous version
   ```bash
   vercel rollback
   ```

2. **Database**: Revert Supabase changes if needed (create backup first)

3. **DNS**: Keep previous DNS records documented for quick restoration

---

## Launch Date & Time

**Planned Launch**: _______________
**Launched By**: _______________
**Launch Time**: _______________
**Status**: _______________

---

## Notes

[Add any deployment-specific notes, issues encountered, or important decisions made during deployment]

---

**Congratulations on launching FigrOut! 🎉**
