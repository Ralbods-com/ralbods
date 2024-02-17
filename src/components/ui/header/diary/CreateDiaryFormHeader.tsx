'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { IoMdArrowBack } from 'react-icons/io';
import buttonStyle from '@/components/ui/button/button.module.scss';
import { postDiary } from '@/lib/function/diary/postDiary';
import { dateFormat } from '@/lib/function/DateFormat/dateFormat';
import styles from './diaryHeader.module.scss';
import SendDiaryModal from '../../modal/diary/SendDiaryModal';

const getUserId = async () => {
  try {
    const userData = await fetch(`${process.env.NEXT_PUBLIC_URL}/user`, {
      method: 'GET',
    });
    return await userData.json();
  } catch (error) {
    return console.log(error);
  }
};

export default function CreateDiaryFormHeader({
  title,
  body,
  tags,
}: {
  title: string;
  body: string;
  tags: string[];
}) {
  const router = useRouter();
  const [isModal, setIsModal] = useState(false);

  const handleModal = () => setIsModal(!isModal);

  const handleBack = () => {
    router.back();
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const userId = await getUserId();
    console.log(userId.userData.id);
    console.log(tags);
    try {
      // 現在時刻
      const now = new Date();
      // 今日の日付
      const today = dateFormat(now);
      await postDiary(userId.userData.id, today, title, body, now, now, now);
      return postDiary;
    } catch (error) {
      return console.log(error);
    }
  };

  return (
    <>
      <div className={styles['container']}>
        <div className={buttonStyle['circle-bg-button']} onClick={handleBack}>
          <IoMdArrowBack />
        </div>
        <div className={styles['menu-button-container']}>
          <div className={buttonStyle['white-button']}>下書きを保存</div>
          {body.trim().length === 0 ? (
            <div className={buttonStyle['main-disabled-button']}>公開</div>
          ) : (
            <div className={buttonStyle['main-color-button']} onClick={handleModal}>
              公開
            </div>
          )}
        </div>
      </div>
      {isModal && (
        <SendDiaryModal title={title} body={body} onClose={handleModal} />
      )}
    </>
  );
}
