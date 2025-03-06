import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './style/globals.css';
import { FinalScoreProvider } from '@/app/context/FinalScoreContext';

const inter = Inter({
  variable: '--font-inter-sans',
  weight: ['400', '600'],
  style: ['normal'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Millionaire Game',
  description: 'Game who wants to be a millionaire',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <FinalScoreProvider>{children}</FinalScoreProvider>
      </body>
    </html>
  );
}
