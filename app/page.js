import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="border-b">
        <div className="container mx-auto py-4 px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Outreachify</h1>
          <div className="space-x-2">
            <Link href="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link href="/signup">
              <Button>Sign Up</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">AI-Powered Lead Generation & Outreach</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Automatically find and connect with qualified leads using our AI-powered platform. Save time and grow your business faster.
            </p>
            <Link href="/signup">
              <Button size="lg" className="px-8">Get Started</Button>
            </Link>
          </div>
        </section>
        
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold mb-10 text-center">Why Choose Outreachify?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-3">AI-Powered Lead Generation</h4>
                <p className="text-muted-foreground">Find qualified leads in your target industry without spending hours on research.</p>
              </div>
              <div className="bg-card p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-3">Personalized Outreach</h4>
                <p className="text-muted-foreground">Create personalized email campaigns that convert using our AI templates.</p>
              </div>
              <div className="bg-card p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-3">Track & Analyze</h4>
                <p className="text-muted-foreground">Track campaign performance and optimize your outreach strategy with analytics.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="border-t py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Outreachify. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
