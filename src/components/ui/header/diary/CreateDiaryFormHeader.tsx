'use client';

import { useRouter } from 'next/navigation';
import { IoMdArrowBack } from 'react-icons/io';
import buttonStyle from '@/components/ui/button/button.module.scss';
import styles from './diaryHeader.module.scss';

export default function CreateDiaryFormHeader({
  body,
  tags,
}: {
  body: string;
  tags: string[];
}) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  const onSubmit = () => {
    const sendData = { body, tags };
    console.log(sendData);
  };

  return (
    <div className={styles['container']}>
      <div className={buttonStyle['circle-bg-button']} onClick={handleBack}>
        <IoMdArrowBack />
      </div>
      <div className={styles['menu-button-container']}>
        <div className={buttonStyle['white-button']}>下書きを保存</div>
        {body.trim().length === 0 ? (
          <div className={buttonStyle['pink-disabled-button']}>公開</div>
        ) : (
          <div className={buttonStyle['pink-button']} onClick={onSubmit}>
            公開
          </div>
        )}
      </div>
    </div>
  );
}
