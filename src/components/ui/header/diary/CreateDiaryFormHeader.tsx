'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAtom } from 'jotai';
import { IoMdArrowBack } from 'react-icons/io';
import { invalidScrollState } from '@/atoms/atoms';
import buttonStyle from '@/components/ui/button/button.module.scss';
import styles from './diaryHeader.module.scss';
import SendDiaryModal from '../../modal/diary/SendDiaryModal';

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
  const [isScrollInvalid, setIsScrollInvalid] = useAtom(invalidScrollState);

  const handleModal = () => {
    setIsModal(!isModal);
    setIsScrollInvalid(!isScrollInvalid);
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <>
      <div className={styles['container']}>
        <div className={buttonStyle['circle-bg-button']} onClick={handleBack}>
          <IoMdArrowBack />
        </div>
        <div className={styles['menu-button-container']}>
          {/* <div className={buttonStyle['white-button']}>下書きを保存</div> */}
          {(title.length === 0) ? (
            <div className={buttonStyle['main-disabled-button']}>公開</div>
          ) : (
            <div className={buttonStyle['main-color-button']} onClick={handleModal}>
              公開
            </div>
          )}
        </div>
      </div>
      {isModal && (
        <SendDiaryModal title={title} body={body} tags={tags} onClose={handleModal} />
      )}
    </>
  );
}
