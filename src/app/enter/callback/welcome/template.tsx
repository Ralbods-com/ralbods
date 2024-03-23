'use client';

import { currentUserState } from '@/atoms/atoms';
import { useAtom } from 'jotai';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function EnterWelcomeTemplate({ children } : { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useAtom(currentUserState);
  const router = useRouter();

  useEffect(() => {
    if (currentUser.uid) {
      router.push(`/${currentUser.uid}`);
    }
  }, [currentUser.uid]);

  if (!currentUser.uid) {
    return children;
  }
}
