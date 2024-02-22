'use client';

import { Session } from 'next-auth';
import CreateDiaryButton from '../ui/button/header/CreateDiaryButton';
import styles from './header.module.scss';
import LoginButton from '../ui/button/login/LoginButton';

export default function MainHeader({ session }: { session: Session | null }) {
  return (
    <>
      {/* <LoginButton /> */}
      <div className={styles['container']}>
        <p className={styles['title']}>Ralbods</p>
        {/* <CreateDiaryButton session={session} /> */}
      </div>
    </>
  );
}
