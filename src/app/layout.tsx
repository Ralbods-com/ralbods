import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import Footer from '@/components/footer/Footer';
import NextAuthProvider from '@/providers/NextAuth';
import { getServerSession } from 'next-auth';
// import LoginBtn from '@/components/ui/button/login/LoginBtn';
import { authOptions } from './api/auth/[...nextauth]/route';

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
      <body className={inter.className}>
        <NextAuthProvider session={session}>{children}</NextAuthProvider>
        <Footer />
      </body>
    </html>
  );
}
