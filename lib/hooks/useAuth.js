'use client';

import { useState, useEffect } from 'react';
import { createClient } from '@/lib/supabase';

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    // Check current session
    const checkSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setUser(session?.user || null);
      setLoading(false);
    };
    
    checkSession();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user || null);
        setLoading(false);
      }
    );

    return () => {
      subscription.unsubscribe();
    };
  }, [supabase]);

  return { user, loading };
} 