'use client';

import ReactCalendarHeatmap from 'react-calendar-heatmap';
import styles from './userGauge.module.scss';

// const getKusaData = async (userId: string) => {
//   try {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/${userId}/kusa`, {
//       method: 'GET',
//     });
//     return await res.json();
//   } catch (error) {
//     return error;
//   }
// };

export default function UserDiaryGrassGauge() {
  return (
    <div className={styles['grass-gauge-box']}>
      <ReactCalendarHeatmap
        startDate={new Date('2024-01-01')}
        endDate={new Date('2024-12-31')}
        values={[
          { date: '2024-01-01', mind: 3 },
          { date: '2024-01-11', mind: 2 },
          { date: '2024-01-16', mind: 4 },
          { date: '2024-02-11', mind: 0 },
          { date: '2024-03-11', mind: 1 },
        ]}
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
