'use client';

import { useState } from 'react';
import { useAtom } from 'jotai';
import { invalidScrollState } from '@/atoms/atoms';
import LogoutModal from '../../modal/auth/LogoutModal';
import styles from '../button.module.scss';

export default function LogoutButton() {
  const [isModal, setIsModal] = useState(false);
  const [isScrollInvalid, setIsScrollInvalid] = useAtom(invalidScrollState);

  const handleModal = () => {
    setIsModal(!isModal);
    setIsScrollInvalid(!isScrollInvalid);
  };

  return (
    <>
      <div
        className={styles['pale-bg-button']}
        onClick={handleModal}
      >
        ログアウト
      </div>
      {isModal && <LogoutModal onClose={handleModal} />}
    </>
  );
}
