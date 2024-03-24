// import { exampleDiaryData } from '@/lib/data/example/exampleData';
// import { returnDiaryBgColor } from '@/lib/function/color/returnDiaryBgColor';
import UserHeader from '@/components/ui/button/header/user/UserHeader';
import DiaryDetail from '@/components/diary/DiaryDetail';
import { exampleDiaryData } from '@/lib/data/example/exampleData';
// import { getDiaryDetail } from '@/lib/function/diary/getDiary';
import { returnDiaryBgColor } from '@/lib/function/color/returnDiaryBgColor';
import styles from './diaryPage.module.scss';

const getDiaryDetail = async (diaryId: number) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/diary/${diaryId}`, {
      method: 'GET',
    });
    return await res.json();
  } catch (error) {
    return error;
  }
};

export default async function DiaryShowPage({
  params,
}: {
  params: { uid: string, diaryId: number }
}) {
  // const diaryData = exampleDiaryData;
  const res = await getDiaryDetail(params.diaryId);
  const diaryData = res.diaryDetail;
  const bgColor = returnDiaryBgColor(diaryData.mind);
  // const userId = String(params.uid);
  // const diaryId = Number(params.diaryId);
  // const res = await getDiaryDetail(userId, diaryId);
  // const diaryData = res.diary;

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
