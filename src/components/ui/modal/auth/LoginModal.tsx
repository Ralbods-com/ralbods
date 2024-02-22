'use client';

import { RxCross2 } from 'react-icons/rx';
import modalStyle from '../modal.module.scss';
import styles from './authModal.module.scss';
import GoogleLoginButton from '../../button/auth/GoogleLLoginButton';
import GitHubLoginButton from '../../button/auth/GitHubLoginButton';

export default function LoginModal({
  onClose,
}: {
  onClose: () => void,
}) {
  return (
    <>
      <div className={modalStyle['check-modal-container']}>
        <div className={modalStyle['close-button']} onClick={onClose}>
          <RxCross2 />
        </div>
        <div className={styles['login-container']}>
          <p className={styles['title']}>
            <span>Ralbods</span>
            にログイン
          </p>
          <p className={styles['description']}>
            Ralbodsで日々の開発を記録しましょう。
          </p>
          <div className={styles['login-btn-container']}>
            <GoogleLoginButton />
            <GitHubLoginButton />
          </div>
        </div>
      </div>
      <div className={modalStyle['bg-main']} onClick={onClose} />
    </>
  );
}
