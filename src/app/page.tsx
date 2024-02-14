import Footer from '@/components/footer/Footer';
import MainHeader from '@/components/header/MainHeader';
import { getServerSession } from 'next-auth';
import NextAuthProvider from '@/providers/NextAuth';
import { authOptions } from './api/auth/[...nextauth]/route';

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <NextAuthProvider session={session}>
      <MainHeader session={session} />
      <div />
      <Footer />
    </NextAuthProvider>
  );
}
