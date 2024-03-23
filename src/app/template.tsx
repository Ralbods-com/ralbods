'use client';

import { Inter } from 'next/font/google';
import { usePathname, useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useAtom } from 'jotai';
import { currentUserState, invalidScrollState } from '@/atoms/atoms';
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function RootTemplate({
  children,
}: {
  children: React.ReactNode,
}) {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useAtom(currentUserState);
  const pathname = usePathname();
  const [isScrollInvalid, setIsScrollInvalid] = useAtom(invalidScrollState);
  const { data: session } = useSession();

  useEffect(() => {
    if (pathname === '/' && currentUser.uid) {
      router.push(`/${currentUser.uid}`);
    }
  }, [currentUser.uid]);

  return (
    <body
      className={inter.className}
      style={{ overflowY: isScrollInvalid ? 'hidden' : 'auto' }}
    >
      {children}
    </body>
  );
}
