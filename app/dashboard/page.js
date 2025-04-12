"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase, getSession } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export default function DashboardPage() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function loadSession() {
      const session = await getSession();
      if (!session) {
        router.push('/login');
        return;
      }
      setUser(session.user);
      setIsLoading(false);
    }

    loadSession();
  }, [router]);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Outreachify Dashboard</h1>
        <Button onClick={handleSignOut}>Log out</Button>
      </header>
      
      <Card>
        <CardHeader>
          <CardTitle>Welcome Back</CardTitle>
          <CardDescription>You are logged in as {user?.email}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            You've successfully authenticated to your Outreachify account.
            Start exploring your dashboard to manage leads and outreach campaigns.
          </p>
        </CardContent>
      </Card>
    </div>
  );
} 