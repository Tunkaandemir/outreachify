"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/lib/hooks/useAuth';

export default function DashboardLayout({ children }) {
  const { user } = useAuth();
  const router = useRouter();
  const supabase = createClient();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b bg-background">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <Link href="/" className="text-xl font-bold">
              Outreachify
            </Link>
            <nav className="hidden md:flex items-center gap-4">
              <Link href="/dashboard" className="text-sm font-medium hover:text-primary">
                Dashboard
              </Link>
            </nav>
          </div>
          
          <div className="flex items-center gap-4">
            {user && (
              <div className="text-sm text-muted-foreground">
                {user.email}
              </div>
            )}
            <Button variant="outline" size="sm" onClick={handleSignOut}>
              Sign out
            </Button>
          </div>
        </div>
      </header>
      
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
} 