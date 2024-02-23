'use client';

import { Inter } from 'next/font/google';
import { usePathname, useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useAtom } from 'jotai';
import { invalidScrollState } from '@/atoms/atoms';

const inter = Inter({ subsets: ['latin'] });

export default function RootTemplate({
  children,
}: {
  children: React.ReactNode,
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [isScrollInvalid, setIsScrollInvalid] = useAtom(invalidScrollState);
  const { data: session } = useSession();

  if (pathname === '/' && session?.user) {
    router.push('/');
  } else {
    return (
      <body
        className={inter.className}
        style={{ overflowY: isScrollInvalid ? 'hidden' : 'auto' }}
      >
        {children}
      </body>
    );
  }
}
