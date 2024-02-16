'use client';

import styles from '../button.module.scss';

export default function ApplyFriendButton({
  name,
}: {
  name: string,
}) {
  return (
    <div className={styles['white-button']}>
      {name}
      友達になる
    </div>
  );
}
