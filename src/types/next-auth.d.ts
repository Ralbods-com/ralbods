// import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
    }
  }
}

export * from 'next-auth/core/types';
export type { AuthOptions as NextAuthOptions } from 'next-auth/core/types';
export type { RequestInternal, ResponseInternal as OutgoingResponse } from 'next-auth/core';
export * from 'next-auth/next';
// export { default } from 'next-auth/next';
