import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import './layout.css';
import '@/globals.css';

export const metadata: Metadata = {
  title: 'HealthAware - Cancer Education Platform',
  description: 'Learn about cancer awareness, prevention, and health education.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
