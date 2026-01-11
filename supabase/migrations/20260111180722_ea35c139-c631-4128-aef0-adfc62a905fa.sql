-- Create table for early access signups
CREATE TABLE public.early_access_signups (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  role TEXT NOT NULL,
  company_size TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS but allow public inserts (no auth required for signups)
ALTER TABLE public.early_access_signups ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can insert (signup)
CREATE POLICY "Anyone can sign up for early access"
ON public.early_access_signups
FOR INSERT
WITH CHECK (true);

-- Policy: No public reads (protect email addresses)
-- Only accessible via backend/admin