'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { IconType } from 'react-icons';
import styles from './diaryButton.module.scss';
import HoverMenu from '../../menu/HoverMenu';

export default function DiaryFormSideButton({
  Icon,
  func,
  url,
  menuText,
}: {
  Icon: IconType;
  func: () => void | undefined;
  url: string | null;
  menuText: string;
}) {
  const [isHover, setIsHover] = useState(false);

  if (url) {
    return (
      <motion.a
        className={styles['hover-button']}
        href={url}
        aria-label='menu'
        target='_blank'
        rel='noopener noreferrer'
        animate={
          isHover
            ? {
              y: -4,
              color: 'rgb(var(--primary-pink))',
              boxShadow: 'var(--drop-shadow-pink)',
            }
            : { y: 0 }
        }
        onMouseEnter={() => setIsHover(true)}
        onMouseDown={() => setIsHover(false)}
        onMouseLeave={() => setIsHover(false)}
      >
        <Icon />
        {isHover && (
          <HoverMenu
            text={menuText}
            description={null}
            where='left'
            end={null}
          />
        )}
      </motion.a>
    );
  } else {
    return (
      <motion.div
        className={styles['hover-button']}
        onClick={func}
        onMouseEnter={() => setIsHover(true)}
        onMouseDown={() => setIsHover(false)}
        onMouseLeave={() => setIsHover(false)}
      >
        <Icon />
        {isHover && (
          <HoverMenu
            text={menuText}
            description={null}
            where='left'
            end={null}
          />
        )}
      </motion.div>
    );
  }
}
