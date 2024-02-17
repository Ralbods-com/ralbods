'use client';

import Link from 'next/link';
import { Session } from 'next-auth';
import styles from '../button.module.scss';

export default function CreateDiaryButton({ session } :
{ session: Session | null }) {
  return (
    <Link
      href={session ? '/' : '/diary/create'}
      className={styles['main-color-button']}
    >
      日記を書く
    </Link>
  );
}
