'use client';

import { useState } from 'react';
import styles from '../button.module.scss';
import LogoutModal from '../../modal/auth/LogoutModal';

export default function LogoutButton() {
  const [isModal, setIsModal] = useState(false);

  const handleModal = () => setIsModal(!isModal);

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
