import Footer from '@/components/footer/Footer';

export default function UserRootPage({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
