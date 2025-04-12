// For client components
'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export const createClient = () => {
  return createClientComponentClient();
};

export const getSession = async () => {
  const { data, error } = await supabase.auth.getSession();
  if (error) {
    console.warn('Could not retrieve Supabase session:', error.message);
    return null;
  }
  return data.session;
}; 