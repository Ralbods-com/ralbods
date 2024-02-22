'use client';

import CreateDiaryButton from '../ui/button/header/CreateDiaryButton';
import styles from './header.module.scss';
import LoginButton from '../ui/button/login/LoginButton';

export default function MainHeader() {
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
