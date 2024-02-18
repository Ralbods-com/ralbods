'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export default function RootTemplate({
  children,
}: {
  children: React.ReactNode,
}) {
  const router = useRouter();
  const pathname = usePathname();
  const { data: session } = useSession();
  if (pathname === '/' && session?.user) {
    router.push('/');
  } else {
    return children;
  }
}
