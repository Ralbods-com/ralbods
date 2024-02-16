'use client';

import Link from 'next/link';
import styles from '../button.module.scss';

export default function CreateDiaryButton() {
  return (
    <Link href='/diary/create' className={styles['main-color-button']}>
      日記を書く
    </Link>
  );
}
