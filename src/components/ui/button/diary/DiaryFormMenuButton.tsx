'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { returnDiaryMenuButtonIcon } from '@/lib/function/diary/returnDiaryButtonIcon';
import styles from './diaryButton.module.scss';
import HoverGuide from '../../guide/HoverGuide';
import DiaryFormGuide from '../../guide/diary/DiaryFormGuide';

export default function DiaryFormMenuButton({
  text,
  description,
  left,
}: {
  text: string;
  description: string | null;
  left: boolean;
}) {
  const [isGuide, setIsGuide] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const Icon = returnDiaryMenuButtonIcon(text);
  const end = left ? 'left' : null;

  const handleGuide = () => setIsGuide(!isGuide);

  return (
    <>
      <motion.div
        className={styles['menu-button']}
        onClick={handleGuide}
        onMouseEnter={() => setIsHover(true)}
        onMouseDown={() => setIsHover(false)}
        onMouseLeave={() => setIsHover(false)}
      >
        <Icon />
        {isHover && !isGuide && (
          <HoverGuide
            text={text}
            description={description}
            where='top'
            end={end}
          />
        )}
      </motion.div>
      {isGuide && <DiaryFormGuide onClose={handleGuide} />}
    </>
  );
}
