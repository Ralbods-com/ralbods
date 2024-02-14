'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEye, FaPenNib } from 'react-icons/fa6';
import styles from './diaryToggle.module.scss';
import HoverGuide from '../../guide/HoverGuide';

export default function DiaryPrevToggle({
  isPrev,
  handlePrev,
}: {
  isPrev: boolean;
  handlePrev: (select: boolean) => void;
}) {
  const [isWriteHover, setIsWriteHover] = useState(false);
  const [isPrevHover, setIsPrevHover] = useState(false);
  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 20,
  };

  const selectWriteMode = () => {
    if (isPrev) {
      handlePrev(false);
    }
  };

  const selectPrevMode = () => {
    if (!isPrev) {
      handlePrev(true);
    }
  };

  return (
    <div className={styles['prev-container']} data-isPrev={`${isPrev}`}>
      <motion.div
        className={styles['prev-circle']}
        layout
        transition={spring}
        style={
          isPrev
            ? { backgroundColor: 'rgb(var(--main-color))' }
            : { backgroundColor: 'rgb(var(--pale-gray-2))' }
        }
      />
      <div
        className={styles['prev-write-icon']}
        style={
          isPrev
            ? { color: 'rgb(var(--pale-text-color))' }
            : { color: 'rgb(var(--text-color))' }
        }
        onClick={selectWriteMode}
      >
        <motion.div
          className={styles['prev-icon-cushion']}
          onMouseEnter={() => setIsWriteHover(true)}
          onMouseDown={() => setIsWriteHover(false)}
          onMouseLeave={() => setIsWriteHover(false)}
        >
          <FaPenNib />
          {isPrev && isWriteHover && (
            <HoverGuide
              text='書く'
              description={null}
              where='left'
              end={null}
            />
          )}
        </motion.div>
      </div>
      <div
        className={styles['prev-icon']}
        style={
          isPrev
            ? { color: 'rgb(var(--white))' }
            : { color: 'rgb(var(--pale-text-color))' }
        }
        onClick={selectPrevMode}
      >
        <motion.div
          className={styles['prev-icon-cushion']}
          onMouseEnter={() => setIsPrevHover(true)}
          onMouseDown={() => setIsPrevHover(false)}
          onMouseLeave={() => setIsPrevHover(false)}
        >
          <FaEye />
          {!isPrev && isPrevHover && (
            <HoverGuide
              text='プレビュー'
              description={null}
              where='left'
              end={null}
            />
          )}
        </motion.div>
      </div>
    </div>
  );
}
