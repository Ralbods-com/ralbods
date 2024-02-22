import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import { getServerSession } from 'next-auth';
import NextAuthProvider from '@/providers/NextAuth';
// import { authOptions } from './api/auth/[...nextauth]/route';
import { authOptions } from '@/lib/auth';
import 'react-calendar-heatmap/dist/styles.css';

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
  const session = await getServerSession(authOptions);
  return (
    <html lang='ja'>
      <NextAuthProvider session={session}>
        <body className={inter.className}>{children}</body>
      </NextAuthProvider>
    </html>
  );
}
