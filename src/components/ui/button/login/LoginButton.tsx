'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './loginButton.module.scss';
import LoginModal from '../../modal/auth/LoginModal';

export default function LoginButton() {
  // postUserData(session.user?.email || '', session.user?.name || '');
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
      {isModal && (
        <LoginModal onClose={handleModal} />
      )}
    </>
  );
}
