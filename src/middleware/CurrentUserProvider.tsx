'use client';

import { useEffect } from 'react';
import { currentUserState } from '@/atoms/atoms';
import { useAtom } from 'jotai';
import { getUser } from '@/lib/function/user/getUser';
import { useSession } from 'next-auth/react';
import { UserAtomType } from '@/types/userType';
import { useRouter } from 'next/navigation';

export default function CurrentUserProvider({ children } : { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useAtom(currentUserState);
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session?.user) {
      if (currentUser.id === null) {
        const getUserData = async () => {
          const res = await getUser(session.user.id);
          const userData: UserAtomType = res.res;
          if (userData.uid) {
            setCurrentUser(userData);
          } else {
            router.push('/enter/callback/welcome');
          }
        };
        getUserData();
      }
    }
  }, []);

  return children;
}
