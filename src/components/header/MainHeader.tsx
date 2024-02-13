'use client';

import CreateDiaryButton from '../ui/button/header/CreateDiaryButton';
import styles from './header.module.scss';

export default function MainHeader() {
  return (
    <div className={styles['container']}>
      <p className={styles['title']}>Ralbods</p>
      <CreateDiaryButton />
    </div>
  );
}
