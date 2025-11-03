-- Create waitlist_submissions table
CREATE TABLE IF NOT EXISTS public.waitlist_submissions (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    company TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()) NOT NULL
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON public.waitlist_submissions(email);

-- Create index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON public.waitlist_submissions(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE public.waitlist_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anonymous inserts (for the form)
CREATE POLICY "Allow anonymous inserts" ON public.waitlist_submissions
    FOR INSERT
    TO anon
    WITH CHECK (true);

-- Create policy to allow authenticated users to read (for admin access)
CREATE POLICY "Allow authenticated users to read" ON public.waitlist_submissions
    FOR SELECT
    TO authenticated
    USING (true);

-- Optional: Add a comment to the table
COMMENT ON TABLE public.waitlist_submissions IS 'Stores waitlist submissions for FigrOut coming soon page';
