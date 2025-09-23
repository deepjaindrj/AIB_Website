import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { PageTransition } from '@/components/page-transition';
import { Navbar } from '@/components/navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Modern Portfolio - Samsung Style Transitions',
  description: 'A modern portfolio with Samsung Recent Apps style page transitions',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-950 text-white antialiased`}>
        {/* Background gradient */}
        <div className="fixed inset-0 bg-gradient-to-br from-gray-950 via-purple-950/20 to-blue-950/20 -z-10" />
        
        {/* Fixed Navbar - doesn't take space from content flow */}
        <Navbar />
        
        {/* Page content with transitions */}
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
