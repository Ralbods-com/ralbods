import { exampleDiaryData } from '@/lib/data/example/exampleData';
import { returnDiaryBgColor } from '@/lib/function/color/returnDiaryBgColor';
import UserHeader from '@/components/ui/button/header/user/UserHeader';
import DiaryDetail from '@/components/diary/DiaryDetail';
import styles from './diaryPage.module.scss';

export default function DiaryShowPage() {
  const diaryData = exampleDiaryData;
  const bgColor = returnDiaryBgColor(diaryData.mind);

  return (
    <div
      className={styles['screen']}
      style={{ backgroundColor: bgColor }}
    >
      <div className={styles['all-container']}>
        <UserHeader userData={diaryData.user} />
        <DiaryDetail diaryData={diaryData} />
      </div>
    </div>
  );
}
