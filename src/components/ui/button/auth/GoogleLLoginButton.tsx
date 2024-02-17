'use client';

import { FcGoogle } from 'react-icons/fc';
import { signIn } from 'next-auth/react';
import styles from './authButton.module.scss';

export default function GoogleLoginButton() {
  return (
    <div
      className={styles['google-btn']}
      onClick={() => signIn('google', { callbackUrl: '/' })}
    >
      <div>
        <FcGoogle />
      </div>
      <span>Google</span>
      でログイン
    </div>
  );
}
