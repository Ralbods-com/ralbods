'use client';

import Link from 'next/link';
import styles from '../button.module.scss';

export default function UserCreateDiaryButton() {
  return (
    <Link href='/diary/create' className={styles['main-gradation-button']}>
      <div>日記を書く</div>
    </Link>
  );
}
