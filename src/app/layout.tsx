//src/app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import Navbar from '@/components/Navbar';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Tutorial App',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
        <body className={`${inter.className} bg-[var(--background)] text-[var(--foreground)]`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
