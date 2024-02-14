'use client';

import styles from './diaryGuide.module.scss';

export default function DiaryFormGuideBox({
  sign,
  text,
  description,
  isOpen,
}: {
  sign: string;
  text: string;
  description: string;
  isOpen: boolean;
}) {
  return (
    <div className={styles['md-guide-box']}>
      <p className={styles['md-guide-title']}>
        <span>{sign}</span>
        {text}
      </p>
      {isOpen && (
        <p className={styles['md-guide-description']}>{description}</p>
      )}
    </div>
  );
}
