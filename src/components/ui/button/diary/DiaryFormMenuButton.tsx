'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { returnDiaryMenuButtonIcon } from '@/lib/function/diary/returnDiaryButtonIcon';
import styles from './diaryButton.module.scss';
import HoverMenu from '../../menu/HoverMenu';

export default function DiaryFormMenuButton({
  text,
  description,
  left,
}: {
  text: string;
  description: string | null;
  left: boolean;
}) {
  const [isHover, setIsHover] = useState(false);
  const Icon = returnDiaryMenuButtonIcon(text);
  const end = left ? 'left' : null;

  return (
    <motion.div
      className={styles['menu-button']}
      onMouseEnter={() => setIsHover(true)}
      onMouseDown={() => setIsHover(false)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Icon />
      {isHover && (
        <HoverMenu
          text={text}
          description={description}
          where='top'
          end={end}
        />
      )}
    </motion.div>
  );
}
