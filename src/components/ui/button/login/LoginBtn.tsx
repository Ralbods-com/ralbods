'use client';

import { signIn, signOut } from 'next-auth/react';
import { Session } from 'next-auth';
import { postUserData } from '@/lib/function/user/postUserData';

export default function LoginBtn({ session }: { session: Session | null }) {
  if (!session) {
    return (
      <button type='button' onClick={() => signIn()}>
        Sign In
      </button>
    );
  }
  postUserData(session.user?.email || '', session.user?.name || '');
  return (
    <>
      <button type='button' onClick={() => signOut()}>
        Sign Out
      </button>
      <div>{session.user?.email}</div>
      <div>{session.user?.name}</div>
    </>
  );
}
