"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { LoginForm } from "@/components/login-form";
import { useAuth } from "@/lib/hooks/useAuth";

export default function LoginPage() {
  const { user, loading } = useAuth();
  const router = useRouter();
  
  useEffect(() => {
    if (!loading && user) {
      router.push("/dashboard");
    }
  }, [user, loading, router]);
  
  if (loading) {
    return <div className="flex justify-center items-center">Loading...</div>;
  }
  
  if (!loading && !user) {
    return <LoginForm />;
  }
  
  return null;
} 