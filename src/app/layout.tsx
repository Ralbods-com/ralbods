import type { Metadata } from 'next';
import './globals.scss';
import { getServerSession } from 'next-auth';
import NextAuthProvider from '@/providers/NextAuth';
// import { authOptions } from './api/auth/[...nextauth]/route';
import { authOptions } from '@/lib/auth';
import 'react-calendar-heatmap/dist/styles.css';
import { Provider } from 'jotai';

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
        <Provider>
          {children}
        </Provider>
      </NextAuthProvider>
    </html>
  );
}
