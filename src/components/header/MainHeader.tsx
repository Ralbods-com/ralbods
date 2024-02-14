'use client';

import { Session } from 'next-auth';
import CreateDiaryButton from '../ui/button/header/CreateDiaryButton';
import styles from './header.module.scss';
import LoginBtn from '../ui/button/login/LoginBtn';

export default function MainHeader({ session }: { session: Session | null }) {
  return (
    <>
      <LoginBtn session={session} />
      <div className={styles['container']}>
        <p className={styles['title']}>Ralbods</p>
        <CreateDiaryButton />
      </div>
    </>
  );
}
