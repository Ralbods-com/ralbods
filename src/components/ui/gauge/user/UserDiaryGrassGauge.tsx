'use client';

import ReactCalendarHeatmap from 'react-calendar-heatmap';
import { UserShowType } from '@/types/userType';
import styles from './userGauge.module.scss';

export default function UserDiaryGrassGauge({ userData }: { userData: UserShowType }) {
  const kusaData = userData.Diaries.map((diary) => ({ date: diary.date, mind: diary.mind }));
  return (
    <div className={styles['grass-gauge-box']}>
      <ReactCalendarHeatmap
        startDate={new Date('2024-01-01')}
        endDate={new Date('2024-12-31')}
        values={kusaData}
        classForValue={(val) => {
          if (!val) {
            return 'color-empty';
          }
          return `color-scale-${val.mind}`;
        }}
      />
    </div>
  );
}
