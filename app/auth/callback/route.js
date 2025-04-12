import { NextResponse } from 'next/server';
import { createServerClient } from '@/lib/supabase-server';

// This route handles Supabase auth redirects
export async function GET(request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get('code');
  
  if (code) {
    try {
      const supabase = createServerClient();
      // Exchange the auth code for a session
      await supabase.auth.exchangeCodeForSession(code);
      
      // Redirect to dashboard on successful auth
      return NextResponse.redirect(new URL('/dashboard', request.url));
    } catch (error) {
      console.error('Auth callback error:', error);
      // Redirect to login on error
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // If no code, redirect to homepage
  return NextResponse.redirect(new URL('/', request.url));
} 