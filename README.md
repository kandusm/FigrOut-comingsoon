# FigrOut — Coming Soon Website

A minimal landing page for FigrOut, the ERP companion to BildOut. Built with Next.js 14, Tailwind CSS, and Supabase.

## Features

- Modern, responsive design with brand-consistent styling
- Waitlist form with Supabase integration
- SEO optimized with metadata, Open Graph tags, and JSON-LD schema
- Google Analytics 4 integration
- Privacy policy page
- Performance optimized (target: Lighthouse score ≥95)
- Fully responsive down to 360px

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Database**: Supabase
- **Hosting**: Vercel
- **Analytics**: Google Analytics 4

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Supabase account
- Google Analytics account (optional)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd figrout-comingsoon
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_GA_MEASUREMENT_ID=your_ga_measurement_id
```

4. Set up Supabase database:

- Go to your Supabase project dashboard
- Navigate to the SQL Editor
- Run the SQL commands from `supabase-schema.sql`

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Supabase Setup

### Creating the Database Table

1. Log in to your [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project
3. Go to the SQL Editor
4. Copy and paste the contents of `supabase-schema.sql`
5. Click "Run" to execute the SQL

This will create:
- `waitlist_submissions` table
- Necessary indexes for performance
- Row Level Security (RLS) policies

### Getting Your Supabase Credentials

1. In your Supabase project dashboard, go to **Settings** → **API**
2. Copy the **Project URL** → This is your `NEXT_PUBLIC_SUPABASE_URL`
3. Copy the **anon/public key** → This is your `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## Google Analytics Setup

1. Create a Google Analytics 4 property at [analytics.google.com](https://analytics.google.com)
2. Get your Measurement ID (format: G-XXXXXXXXXX)
3. Add it to your `.env.local` as `NEXT_PUBLIC_GA_MEASUREMENT_ID`

## Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Configure environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `NEXT_PUBLIC_GA_MEASUREMENT_ID`
6. Click "Deploy"

### Option 2: Deploy via Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

Follow the prompts and add your environment variables when asked.

### Post-Deployment Steps

1. **Configure Custom Domain**:
   - Go to your Vercel project settings
   - Add `figr-out.com` as a custom domain
   - Update DNS records as instructed

2. **Google Search Console**:
   - Go to [search.google.com/search-console](https://search.google.com/search-console)
   - Add your domain and verify ownership
   - Submit sitemap: `https://figr-out.com/sitemap.xml`

3. **SSL Certificate**:
   - Vercel automatically provisions SSL certificates
   - Ensure HTTPS redirect is enabled (automatic)

## Project Structure

```
figrout-comingsoon/
├── app/
│   ├── api/
│   │   └── waitlist/
│   │       └── route.ts         # API endpoint for waitlist submissions
│   ├── privacy/
│   │   └── page.tsx             # Privacy policy page
│   ├── globals.css              # Global styles with Tailwind
│   ├── layout.tsx               # Root layout with metadata & analytics
│   ├── loading.tsx              # Loading state component
│   ├── page.tsx                 # Home page
│   ├── robots.ts                # robots.txt generation
│   └── sitemap.ts               # sitemap.xml generation
├── components/
│   ├── Features.tsx             # Feature cards section
│   ├── Footer.tsx               # Footer component
│   ├── Hero.tsx                 # Hero section
│   └── WaitlistForm.tsx         # Waitlist form with validation
├── lib/
│   └── supabase.ts              # Supabase client configuration
├── public/                      # Static assets (add logo/images here)
├── .env.example                 # Example environment variables
├── supabase-schema.sql          # Database schema
├── tailwind.config.ts           # Tailwind configuration with brand colors
├── vercel.json                  # Vercel deployment configuration
└── package.json
```

## Brand Colors

The following brand colors are configured in `tailwind.config.ts`:

- **Primary**: `#007C8A` (Deep Teal) - Main brand color
- **Accent**: `#222222` (Charcoal) - Text and professional elements
- **Highlight**: `#FFFFFF` (White) - Backgrounds and contrast
- **Secondary**: `#D7E5E8` (Soft Gray-Blue) - Subtle backgrounds
- **BildOut**: `#8B0E0E` (Crimson Red) - Ecosystem accent

## Typography

- **Headings**: Montserrat Bold / Poppins SemiBold
- **Body**: Inter Regular
- **Buttons**: Inter SemiBold Uppercase

## Performance Optimization

The site is optimized for:
- Fast loading times
- Lighthouse score ≥95 for performance
- Lighthouse score ≥90 for SEO
- Mobile-first responsive design
- Optimized fonts and assets

## Monitoring Waitlist Submissions

### Via Supabase Dashboard

1. Log in to your Supabase project
2. Go to **Table Editor**
3. Select the `waitlist_submissions` table
4. View all submissions with timestamps

### Via SQL Query

```sql
SELECT * FROM waitlist_submissions
ORDER BY created_at DESC;
```

## Optional: Email Integration

To send email notifications when someone joins the waitlist:

1. Sign up for [MailerLite](https://www.mailerlite.com/) or [ConvertKit](https://convertkit.com/)
2. Create an automation workflow
3. Connect via their API in `app/api/waitlist/route.ts`

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## License

This project is proprietary software for FigrOut.

## Support

For issues or questions, please open an issue in the GitHub repository.

---

Built with ❤️ by the BildOut team
