'use client';

import { DiaryType } from '@/types/diaryType';
import styles from './user.module.scss';
import DiaryIndexBox from '../diary/DiaryIndexBox';

export default function UserDiaryIndex({
  diariesData, month, last,
}: {
  diariesData: DiaryType[], month: string, last: boolean,
}) {
  return (
    <div className={styles['user-diary-index']}>
      <div className={styles['side-month-area']}>
        <p className={styles['month-text']}>{month}</p>
      </div>
      <div className={styles['diary-index-container']}>
        {diariesData.map((diary, index) => (
          <DiaryIndexBox
            diaryData={diary}
            last={diariesData.length === index + 1 && last}
          />
        ))}
      </div>
    </div>
  );
}
