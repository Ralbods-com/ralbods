'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { signIn, signOut } from 'next-auth/react';
import { Session } from 'next-auth';
import styles from './loginButton.module.scss';
import LoginModal from '../../modal/auth/LoginModal';

export default function LoginButton({ session }: { session: Session | null }) {
  // await postUserData(session.user?.email || '', session.user?.name || '');
  const [isModal, setIsModal] = useState(false);

  const handleModal = () => setIsModal(!isModal);

  return (
    <>
      <motion.div
        className={styles['login-btn']}
        whileHover={{ scale: 1.1 }}
        onClick={handleModal}
      >
        はじめる
      </motion.div>
      {isModal && <LoginModal onClose={handleModal} />}
      {/* {
        // セッションがある場合、ログアウトを表示
        session && (
          <div>
            <h1>
              ようこそ,
              {session.user && session.user.email}
            </h1>
            <button
              type='button'
              onClick={() => signOut}
            >
              ログアウト
            </button>
          </div>
        )
      }
      {/* {
        // セッションがない場合、ログインを表示
        // ログインボタンを押すと、ログインページに遷移する
        !session && (
          <div>
            <p>ログインしていません</p>
            <button type='button' onClick={() => signIn()}>ログイン</button>
          </div>
        )
      } */}
    </>
  );
}
