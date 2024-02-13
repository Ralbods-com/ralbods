'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './button.module.scss';

export default function ToggleButton({
  menu,
  handleMenu,
  menuText,
}: {
  menu: boolean;
  handleMenu: () => void;
  menuText: string | null;
}) {
  const [isHover, setIsHover] = useState(false);
  const hoverMenuText = menu ? '閉じる' : menuText;

  return (
    <motion.div
      className={styles['toggle-button']}
      onClick={handleMenu}
      onMouseEnter={() => setIsHover(true)}
      onMouseDown={() => setIsHover(false)}
      onMouseLeave={() => setIsHover(false)}
    >
      <motion.span
        className={styles['border1']}
        initial={{ rotate: 0, y: 0 }}
        animate={{ y: menu ? '6.5px' : 0, rotate: menu ? 45 : 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.span
        className={styles['border2']}
        initial={{ opacity: 1, x: 0 }}
        animate={{
          opacity: menu ? 0 : 1,
          x: menu ? 10 : 0,
          width: isHover || menu ? '1.3rem' : '1rem',
        }}
        transition={{ duration: isHover ? 0.2 : 0.4 }}
      />
      <motion.span
        className={styles['border3']}
        initial={{ rotate: 0, y: 0 }}
        animate={{
          y: menu ? '-6.5px' : 0,
          rotate: menu ? -45 : 0,
          width: isHover || menu ? '1.3rem' : '0.7rem',
        }}
        transition={{ duration: 0.3 }}
      />
      {menuText && isHover && (
        <motion.div
          className={styles['hover-menu']}
          style={{ width: `${1.2 + hoverMenuText!.length * 0.8}rem` }}
          initial={{ y: 8, opacity: 0 }}
          animate={{ y: 0, opacity: 1, transition: { duration: 0.2 } }}
        >
          {hoverMenuText}
        </motion.div>
      )}
    </motion.div>
  );
}
