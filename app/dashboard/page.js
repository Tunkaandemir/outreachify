"use client";

import { useAuth } from '@/lib/hooks/useAuth';

export default function DashboardPage() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-64px)] bg-background">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="bg-card p-6 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-2">Hello, {user?.email}</h2>
        <p className="text-muted-foreground">
          Welcome to your Outreachify dashboard. Your personalized content will appear here.
        </p>
      </div>
    </div>
  );
} 