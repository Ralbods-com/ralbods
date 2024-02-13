'use client';

import { signIn, signOut } from 'next-auth/react';
import { Session } from 'next-auth';

export default function LoginBtn({ session }: { session: Session | null }) {
  if (!session) {
    return (
      <button type='button' onClick={() => signIn()}>
        Sign In
      </button>
    );
  }
  return (
    <>
      <button type='button' onClick={() => signOut()}>
        Sign Out
      </button>
      <div>{session.user?.name}</div>
    </>
  );
}
