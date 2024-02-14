'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import buttonStyle from '@/components/ui/button/button.module.scss';
import { mdGuideTexts } from '@/lib/data/guide/mdGuideTexts';
import DiaryFormGuideBox from './DiaryFormGuideBox';
import styles from './diaryGuide.module.scss';

export default function DiaryFormGuide({ onClose }: { onClose: () => void }) {
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const handleDetail = () => setIsDetailOpen(!isDetailOpen);

  return (
    <>
      <motion.div
        className={styles['md-guide']}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.3 } }}
      >
        <div className={styles['md-guide-wrapper']}>
          <div className={styles['md-guide-box-top']}>
            <p>ヘルプ</p>
            <div
              className={buttonStyle['white-pale-button']}
              onClick={handleDetail}
            >
              {isDetailOpen ? '詳細を閉じる' : '詳細を開く'}
            </div>
          </div>
          {mdGuideTexts.map((item) => (
            <React.Fragment key={item.kind}>
              <DiaryFormGuideBox
                sign={item.sign}
                text={item.text}
                description={item.description}
                isOpen={isDetailOpen}
              />
              <div className={styles['md-guide-separate']} />
            </React.Fragment>
          ))}
        </div>
      </motion.div>
      <div className={styles['bg']} onClick={onClose} />
    </>
  );
}
