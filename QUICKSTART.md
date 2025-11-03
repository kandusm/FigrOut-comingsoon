# FigrOut Coming Soon — Quick Start Guide

Get your FigrOut landing page up and running in 5 minutes.

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Set Up Supabase

1. Create a free account at [supabase.com](https://supabase.com)
2. Create a new project
3. Go to SQL Editor and run the contents of `supabase-schema.sql`
4. Go to Settings → API and copy:
   - Project URL
   - Anon/public key

## Step 3: Configure Environment Variables

Create `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your_project_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key_here
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

## Step 4: Test Locally

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## Step 5: Deploy to Vercel

### Option A: GitHub + Vercel Dashboard (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" and import your repository
4. Add environment variables from Step 3
5. Click "Deploy"

### Option B: Vercel CLI

```bash
npm install -g vercel
vercel login
vercel --prod
```

## Step 6: Configure Domain

1. In Vercel dashboard, go to Settings → Domains
2. Add `figr-out.com`
3. Update your DNS records as instructed
4. Wait for SSL certificate (automatic)

## Step 7: Set Up Google Analytics (Optional)

1. Create GA4 property at [analytics.google.com](https://analytics.google.com)
2. Get Measurement ID (G-XXXXXXXXXX)
3. Add to Vercel environment variables
4. Redeploy

## Step 8: Submit to Google Search Console

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property for `figr-out.com`
3. Verify ownership (Vercel DNS verification recommended)
4. Submit sitemap: `https://figr-out.com/sitemap.xml`

## Viewing Waitlist Submissions

### Via Supabase Dashboard

1. Log in to Supabase
2. Go to Table Editor
3. Open `waitlist_submissions` table

### Via SQL Query

```sql
SELECT name, email, company, created_at
FROM waitlist_submissions
ORDER BY created_at DESC;
```

## Performance Checklist

After deployment, verify:

- [ ] Site loads on HTTPS (automatic with Vercel)
- [ ] Lighthouse score ≥95 performance
- [ ] Lighthouse score ≥90 SEO
- [ ] Responsive design works (test at 360px, 768px, 1024px, 1920px)
- [ ] Waitlist form submits successfully
- [ ] Google Analytics tracking works (check Real-time reports)
- [ ] robots.txt accessible at `/robots.txt`
- [ ] Sitemap accessible at `/sitemap.xml`

## Troubleshooting

### Waitlist form not working
- Check Supabase credentials in environment variables
- Verify table was created correctly
- Check browser console for errors

### Analytics not tracking
- Verify GA Measurement ID format (should start with G-)
- Check that environment variable is set in Vercel
- Wait 24-48 hours for data to appear in reports

### Build failing
- Ensure all dependencies are installed
- Check that placeholder values are set in `lib/supabase.ts` for build time
- Review build logs in Vercel dashboard

## Next Steps

1. **Add Logo**: Place logo files in `/public/` directory
2. **Create OG Image**: Add `/public/og-image.png` (1200x630px)
3. **Add Favicon**: Add `/public/favicon.ico`
4. **Email Integration**: Set up MailerLite or ConvertKit (optional)
5. **Custom 404 Page**: Create `app/not-found.tsx` (optional)

## Support

For detailed documentation, see [README.md](./README.md)

---

**Ready to launch?** Make sure to test the form submission before going live!
