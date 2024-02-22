'use client';

import { RxCross2 } from 'react-icons/rx';
import { signOut } from 'next-auth/react';
import buttonStyle from '@/components/ui/button/button.module.scss';
import modalStyle from '../modal.module.scss';

export default function LogoutModal({
  onClose,
}: {
  onClose: () => void,
}) {
  const handleLogout = () => {
    signOut();
    onClose();
  };

  return (
    <>
      <div className={modalStyle['check-modal-container']}>
        <div className={modalStyle['check-modal-form']}>
          <div className={modalStyle['close-button']} onClick={onClose}>
            <RxCross2 />
          </div>
          <div className={modalStyle['check-modal-top']}>
            <p className={modalStyle['modal-title']}>
              ログアウト
            </p>
            <p className={modalStyle['modal-description']}>
              本当にログアウトしますか？
            </p>
          </div>
          <div className={modalStyle['check-btn-container']}>
            <div
              className={buttonStyle['big-red-button']}
              onClick={handleLogout}
            >
              ログアウト
            </div>
            <div
              className={buttonStyle['big-white-button']}
              onClick={onClose}
            >
              キャンセル
            </div>
          </div>
        </div>
      </div>
      <div className={modalStyle['black-bg']} onClick={onClose} />
    </>
  );
}
