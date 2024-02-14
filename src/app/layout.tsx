import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import NextAuthProvider from '@/providers/NextAuth';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ralbods',
  description: '開発日記アプリ【Ralbods】です。',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ja'>
      <body className={inter.className}>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
