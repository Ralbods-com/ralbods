'use client';

import styles from '../button.module.scss';

export default function ApplyFriendButton({
  id,
}: {
  id: string,
}) {
  return (
    <div className={styles['white-button']}>
      {id}
      友達になる
    </div>
  );
}
