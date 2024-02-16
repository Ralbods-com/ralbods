import Footer from '@/components/footer/Footer';
import MainHeader from '@/components/header/MainHeader';
import { getServerSession } from 'next-auth';
// import { authOptions } from './api/auth/[...nextauth]/route';
import { authOptions } from '@/lib/auth';

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <>
      <MainHeader session={session} />
      <div />
      <Footer />
    </>
  );
}
