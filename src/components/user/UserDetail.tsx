'use client';

import { useState } from 'react';
import { returnMonthDate } from '@/lib/function/DateFormat/returnMonthDate';
import { DiaryType } from '@/types/diaryType';
import { UserShowType } from '@/types/userType';
import { GiLaurelsTrophy } from 'react-icons/gi';
import styles from './user.module.scss';
import UserDiaryIndex from './UserDiaryIndex';
import UserDetailSelectYearMenu from '../ui/menu/user/UserDetailSelectYearMenu';

export default function UserDetail({
  userData,
}: {
  userData: UserShowType,
}) {
  const [selectYear, setSelectYear] = useState(2024);
  const thisYearDiariesData: DiaryType[] = [];
  const groupedByMonth: { [key: string]: DiaryType[] } = {};

  for (let i = 0; i < userData.Diaries.length; i += 1) {
    if (userData.Diaries[i].date.startsWith(`${selectYear}`)) {
      thisYearDiariesData.push(userData.Diaries[i]);
    }
  }

  thisYearDiariesData.forEach((item) => {
    const monthVal = item.date.findLastIndex.split('-')[1]; // 'yy'の値を取得
    if (!groupedByMonth[monthVal]) {
      groupedByMonth[monthVal] = [];
    }
    groupedByMonth[monthVal].push(item);
  });

  const groupedByMonthArray = Object.values(groupedByMonth);

  const handleSelectYear = (year: number) => {
    if (selectYear !== year) {
      setSelectYear(year);
    }
  };

  return (
    <>
      <div className={styles['diary-index-top']}>
        <div className={styles['diary-index-side-space']} />
        <div className={styles['diary-index-top-main']}>
          <div className={styles['diary-index-dot']}>
            <GiLaurelsTrophy />
          </div>
          <p className={styles['diary-index-achievement']}>
            達成日数：
            <span>{userData.Diaries.length}</span>
            日
          </p>
          <UserDetailSelectYearMenu year={selectYear} setYear={handleSelectYear} />
        </div>
      </div>
      {groupedByMonthArray.map((diaries, index) => (
        <UserDiaryIndex
          diariesData={diaries}
          month={returnMonthDate(diaries[0].date)}
          last={groupedByMonthArray.length === index + 1}
        />
      ))}
    </>
  );
}
