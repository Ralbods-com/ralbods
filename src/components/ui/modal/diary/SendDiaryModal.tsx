'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { RxCross2 } from 'react-icons/rx';
import { LuSend } from 'react-icons/lu';
import { dateFormat } from '@/lib/function/DateFormat/dateFormat';
import { postDiary } from '@/lib/function/diary/diary';
import SelectMindBox from '@/components/mind/SelectMindBox';
import modalStyles from '../modal.module.scss';
import styles from './diaryModal.module.scss';

const getUserId = async () => {
  try {
    const userData = await fetch(`${process.env.NEXT_PUBLIC_URL}/user`, {
      method: 'GET',
    });
    return await userData.json();
  } catch (error) {
    return error;
  }
};

export default function SendDiaryModal({
  title,
  body,
  tags,
  onClose,
}: {
  title: string;
  body: string;
  tags: string[];
  onClose: () => void;
}) {
  const [isSelectMind, setIsSelectMind] = useState(2);
  const router = useRouter();

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const userId = await getUserId();
    try {
      // 現在時刻
      const now = new Date();
      // 今日の日付
      const today = dateFormat(now);
      await postDiary(today, title, body, isSelectMind, '0b3f8290-985f-4cc2-ac6d-ce2d314fab00', tags);
      router.push('/xx-n59');
      return postDiary;
    } catch (error) {
      return error;
    }
  };

  const handleSelectMind = (mind: number) => {
    setIsSelectMind(mind);
  };

  return (
    <>
      <div className={modalStyles['modal-container']}>
        <div className={modalStyles['modal-form']}>
          <div className={modalStyles['close-button']} onClick={onClose}>
            <RxCross2 />
          </div>
          <div className={modalStyles['modal-top']}>
            <p className={modalStyles['modal-title']}>
              <LuSend />
              日記を送信
            </p>
            <p className={modalStyles['modal-description']}>
              書いている日記を公開します
            </p>
          </div>
          <div className={styles['mind-wrapper']}>
            <div className={styles['mind-container']}>
              <p>今日の気分は？</p>
              <div className={styles['mind-select-container']}>
                <SelectMindBox
                  kind={4}
                  isSelect={isSelectMind}
                  selectMind={handleSelectMind}
                />
                <SelectMindBox
                  kind={3}
                  isSelect={isSelectMind}
                  selectMind={handleSelectMind}
                />
                <SelectMindBox
                  kind={2}
                  isSelect={isSelectMind}
                  selectMind={handleSelectMind}
                />
                <SelectMindBox
                  kind={1}
                  isSelect={isSelectMind}
                  selectMind={handleSelectMind}
                />
                <SelectMindBox
                  kind={0}
                  isSelect={isSelectMind}
                  selectMind={handleSelectMind}
                />
              </div>
            </div>
            <div className={modalStyles['send-btn-main']} onClick={onSubmit}>
              送信する
            </div>
          </div>
        </div>
      </div>
      <div className={modalStyles['bg-main']} onClick={onClose} />
    </>
  );
}
