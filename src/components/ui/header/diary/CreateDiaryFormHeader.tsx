'use client';

import { useRouter } from 'next/navigation';
import { IoMdArrowBack } from 'react-icons/io';
import buttonStyle from '@/components/ui/button/button.module.scss';
import { Session } from 'next-auth';
import { postDiary } from '@/lib/function/diary/postDiary';
import { dateFormat } from '@/lib/function/DateFormat/dateFormat';
import { getUser } from '@/lib/function/user/getUser';
import styles from './diaryHeader.module.scss';

export default function CreateDiaryFormHeader({
  title,
  body,
  session,
  tags,
}: {
  title: string;
  body: string;
  session: Session | null;
  tags: string[];
}) {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const user = await getUser(session?.user?.email || '');
    const userId = user.res.id;
    try {
      // 今日の日付
      const today = dateFormat(new Date());
      console.log(userId, today, title, body, tags);
      await postDiary(userId, today, title, body, new Date(), tags);
      router.push(`/${userId}`);
      return postDiary;
    } catch (error) {
      return error;
    }
  };

  return (
    <>
      <div>{session?.user?.email}</div>
      <div className={styles['container']}>
        <div className={buttonStyle['circle-bg-button']} onClick={handleBack}>
          <IoMdArrowBack />
        </div>
        <div className={styles['menu-button-container']}>
          <div className={buttonStyle['white-button']}>下書きを保存</div>
          {body.trim().length === 0 ? (
            <div className={buttonStyle['main-disabled-button']}>公開</div>
          ) : (
            <div
              className={buttonStyle['main-color-button']}
              onClick={onSubmit}
            >
              公開
            </div>
          )}
        </div>
      </div>
    </>
  );
}
