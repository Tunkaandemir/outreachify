import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';

export async function middleware(req) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  const {
    data: { session },
  } = await supabase.auth.getSession();

  // Protected routes
  const protectedPaths = ['/dashboard'];
  
  // Check if the current path is a protected route
  const isProtectedPath = protectedPaths.some(path => 
    req.nextUrl.pathname.startsWith(path)
  );

  // If no session and trying to access a protected route
  if (!session && isProtectedPath) {
    const redirectUrl = new URL('/login', req.url);
    return NextResponse.redirect(redirectUrl);
  }

  return res;
}

// Specify which routes the middleware applies to
export const config = {
  matcher: [
    /*
     * Match all routes except for:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images/ (static images)
     * - public/ (public assets)
     */
    '/((?!_next/static|_next/image|favicon.ico|images|public).*)',
  ],
}; 