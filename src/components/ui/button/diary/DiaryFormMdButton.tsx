'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { returnDiaryButtonIcon } from '@/lib/function/diary/returnDiaryButtonIcon';
import styles from './diaryButton.module.scss';
import HoverMenu from '../../menu/HoverMenu';

export default function DiaryFormMdButton({
  kind,
  num,
  handleClick,
}: {
  kind: string;
  num: number;
  handleClick: () => void;
}) {
  const [isHover, setIsHover] = useState(false);
  const { Icon, text } = returnDiaryButtonIcon(kind);

  return (
    <motion.div
      className={styles['md-button']}
      onClick={handleClick}
      initial={{ x: 15, opacity: 0 }}
      animate={{
        x: 0,
        opacity: 1,
        transition: { duration: 0.3, delay: 0.08 * num },
      }}
      onMouseEnter={() => setIsHover(true)}
      onMouseDown={() => setIsHover(false)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Icon />
      {isHover && (
        <HoverMenu text={text} description={null} where='top' end={null} />
      )}
    </motion.div>
  );
}
