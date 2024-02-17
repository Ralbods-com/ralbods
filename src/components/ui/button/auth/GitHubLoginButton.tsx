'use client';

import { VscGithubInverted } from 'react-icons/vsc';
import { signIn } from 'next-auth/react';
import styles from './authButton.module.scss';

export default function GitHubLoginButton() {
  return (
    <div
      className={styles['github-btn']}
      onClick={() => signIn('github', { callbackUrl: '/' })}
    >
      <div>
        <VscGithubInverted />
      </div>
      <span>GitHub</span>
      でログイン
    </div>
  );
}
