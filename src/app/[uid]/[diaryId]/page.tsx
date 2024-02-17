// import { exampleDiaryData } from '@/lib/data/example/exampleData';
// import { returnDiaryBgColor } from '@/lib/function/color/returnDiaryBgColor';
import UserHeader from '@/components/ui/button/header/user/UserHeader';
import DiaryDetail from '@/components/diary/DiaryDetail';
import { getDiaryDetail } from '@/lib/function/diary/getDiary';
import styles from './diaryPage.module.scss';

export default async function DiaryShowPage({ params }: { params: { uid: string,
  diaryId: number } }) {
  // const diaryData = exampleDiaryData;
  const userId = String(params.uid);
  const diaryId = Number(params.diaryId);
  const res = await getDiaryDetail(userId, diaryId);
  const diaryData = res.diary;
  return (
  // <div
  //   className={styles['screen']}
  //   style={{ backgroundColor: bgColor }}
  // >
    <div className={styles['all-container']}>
      <UserHeader userData={diaryData} />
      <DiaryDetail diaryData={diaryData.Diaries} />
    </div>
  );
  // </div>
}
