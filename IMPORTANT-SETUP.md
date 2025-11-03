# IMPORTANT: Required Setup Before Testing

## The waitlist form will NOT work until you complete these steps:

### 1. Set Up Supabase (Required - 5 minutes)

The site is currently deployed but the waitlist form will show an error until Supabase is configured.

**Steps:**

1. **Create Supabase Account**
   - Go to https://supabase.com
   - Sign up for a free account
   - Create a new project

2. **Run the Database Schema**
   - In your Supabase dashboard, go to **SQL Editor**
   - Copy the contents of `supabase-schema.sql` from this repository
   - Paste and click **Run**
   - This creates the `waitlist_submissions` table

3. **Get Your Credentials**
   - Go to **Settings** → **API** in Supabase dashboard
   - Copy the **Project URL** (looks like: `https://xxxxx.supabase.co`)
   - Copy the **anon/public key** (long string starting with `eyJ...`)

4. **Add to Vercel Environment Variables**
   - Go to your Vercel project dashboard
   - Navigate to **Settings** → **Environment Variables**
   - Add these two variables:
     ```
     NEXT_PUBLIC_SUPABASE_URL = your_project_url
     NEXT_PUBLIC_SUPABASE_ANON_KEY = your_anon_key
     ```
   - Click **Save**

5. **Redeploy**
   - Go to **Deployments** tab in Vercel
   - Click the three dots on the latest deployment
   - Click **Redeploy**

### 2. Current Site Status

✅ **Working:**
- Website loads correctly
- All pages are accessible
- Design and layout are correct
- SEO metadata is configured
- Icons and favicons display properly

❌ **Not Working (Until Supabase is configured):**
- Waitlist form submissions
- Form will show error: "Waitlist service is not yet configured"

### 3. Quick Test After Setup

Once you've completed the Supabase setup:

1. Visit your deployed site
2. Scroll to the waitlist form
3. Enter test data:
   - Name: Test User
   - Email: test@example.com
   - Company: Test Company
4. Click "Join Waitlist"
5. You should see: "Thank you for joining our waitlist!"
6. Verify in Supabase:
   - Go to **Table Editor**
   - Open `waitlist_submissions`
   - Your test entry should appear

### 4. Error Messages Explained

**"Service temporarily unavailable"**
- Environment variables are not set in Vercel
- Solution: Add the environment variables and redeploy

**"Waitlist service is not yet configured"**
- Using placeholder Supabase values
- Solution: Replace with real Supabase credentials

**"Failed to save your information"**
- Supabase table doesn't exist or RLS policies are wrong
- Solution: Run the SQL schema from `supabase-schema.sql`

### 5. Viewing Submissions

After form submissions start working:

**Via Supabase Dashboard:**
1. Log into Supabase
2. Go to **Table Editor**
3. Click on `waitlist_submissions` table
4. View all entries with timestamps

**Via SQL Query:**
```sql
SELECT name, email, company, created_at
FROM waitlist_submissions
ORDER BY created_at DESC;
```

### 6. Optional: Google Analytics

To enable analytics tracking:

1. Create GA4 property at https://analytics.google.com
2. Get your Measurement ID (format: G-XXXXXXXXXX)
3. Add to Vercel environment variables:
   ```
   NEXT_PUBLIC_GA_MEASUREMENT_ID = G-XXXXXXXXXX
   ```
4. Redeploy

---

## Summary Checklist

Before announcing the site to users:

- [ ] Supabase project created
- [ ] Database schema executed
- [ ] Supabase credentials added to Vercel
- [ ] Site redeployed after adding credentials
- [ ] Test form submission successful
- [ ] Verified submission appears in Supabase table
- [ ] Google Analytics configured (optional)

---

**Need Help?**

See the full documentation in:
- `README.md` - Complete setup guide
- `QUICKSTART.md` - Fast setup guide
- `DEPLOYMENT-CHECKLIST.md` - Pre-launch checklist

**Current Status:** Site is deployed and functional, waitlist form needs Supabase configuration.
