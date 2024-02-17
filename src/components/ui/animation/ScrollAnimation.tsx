'use client';

import Lottie from 'lottie-react';
import scroll from '@/public/animation/scroll.json';
import styles from './animation.module.scss';

export default function ScrollAnimation() {
  return (
    <div className={styles['container']}>
      <Lottie
        animationData={scroll}
        loop={true}
        autoplay={true}
      />
    </div>
  );
}
