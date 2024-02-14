'use client';

import { motion } from 'framer-motion';
import styles from './menuToggle.module.scss';

export default function SelectMenuToggle({
  leftText,
  rightText,
  which,
  onChange,
}: {
  leftText: string;
  rightText: string;
  which: number;
  onChange: (num: number) => void;
}) {
  const isRight = which === 1;
  const handleToggle = (num: number) => {
    if (num !== which) {
      onChange(num);
    }
  };

  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  };

  return (
    <div className={styles['container']} data-isEnd={`${isRight}`}>
      <motion.div className={styles['menu-bg']} layout transition={spring} />
      <div
        className={styles[isRight ? 'menu-left' : 'menu-left-focus']}
        onClick={() => handleToggle(0)}
      >
        {leftText}
      </div>
      <div
        className={styles[isRight ? 'menu-right-focus' : 'menu-right']}
        onClick={() => handleToggle(1)}
      >
        {rightText}
      </div>
    </div>
  );
}
