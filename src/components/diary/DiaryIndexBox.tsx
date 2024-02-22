'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { returnFormatDate } from '@/lib/function/DateFormat/returnFormatDate';
import { returnDiaryBgColor } from '@/lib/function/color/returnDiaryBgColor';
import { DiaryType } from '@/types/diaryType';
import { IoIosArrowDropup } from 'react-icons/io';
import { IoCloseCircleOutline } from 'react-icons/io5';
import styles from './diary.module.scss';
import TagBox from '../tag/TagBox';
import SmallMarkDown from '../markdown/SmallMarkDown';

export default function DiaryIndexBox({
  diaryData, last,
}: {
  diaryData: DiaryType, last: boolean,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleText = isOpen ? '閉じる' : '本文を見る';
  const bgColor = returnDiaryBgColor(diaryData.mind);

  const handleOpen = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={styles[last ? 'index-box-last' : 'index-box']}
    >
      <div className={styles['index-box-dot']} />
      <div
        className={styles['index-box-container']}
        style={{ backgroundColor: bgColor }}
      >
        <p className={styles['index-box-date']}>
          {returnFormatDate(diaryData.date)}
        </p>
        <Link
          href={`/${diaryData.userId}/${diaryData.id}`}
          className={styles['index-box-title']}
        >
          {diaryData.title}
        </Link>
        {diaryData.tags && (
          <div className={styles['tags-index']}>
            {diaryData.tags.map((item) => (
              <TagBox kind={item.name} key={item.id} />
            ))}
          </div>
        )}
        {(isOpen && diaryData.body) && (
          <SmallMarkDown body={diaryData.body} />
        )}
        {diaryData.body && (
          <div className={styles['index-box-text-button']} onClick={handleOpen}>
            <motion.span
              className={styles[`index-box-text-button-${isOpen ? 'close' : 'open'}`]}
              animate={{ rotate: isOpen ? 180 : 0, transition: { duration: 0.3 } }}
            >
              {isOpen ? <IoCloseCircleOutline /> : <IoIosArrowDropup />}
            </motion.span>
            {toggleText}
          </div>
        )}
      </div>
    </div>
  );
}
