'use client';

import { motion } from 'framer-motion';
import styles from './gauge.module.scss';

export default function TextLengthGauge({
  textLength,
  maxLength,
}: {
  textLength: number;
  maxLength: number;
}) {
  const underCircleStyle = () => {
    if (textLength < maxLength - 10) {
      return { stroke: 'rgba(var(--primary-pink), 0.3)' };
    } else if (textLength < maxLength) {
      return { stroke: 'rgba(var(--yellow), 0.3)' };
    } else if (textLength >= maxLength) {
      return { stroke: 'rgba(var(--red), 0.3)' };
    }
    return {};
  };

  return (
    <div className={styles['container']}>
      <svg className={styles['svg']}>
        <circle className={styles['circle-under']} style={underCircleStyle()} />
        {textLength < maxLength ? (
          textLength !== 0 && (
            <motion.circle
              className={styles['circle-top']}
              animate={{
                pathLength: textLength / maxLength,
              }}
              initial={false}
            />
          )
        ) : (
          <circle className={styles['invalid-circle']} />
        )}
      </svg>
      {textLength >= maxLength - 10 && (
        <div className={styles['count-box']}>
          <div
            className={styles['count']}
            style={
              textLength >= maxLength
                ? { color: 'rgb(var(--red))' }
                : { color: 'rgb(var(--yellow))' }
            }
          >
            {maxLength - textLength}
          </div>
        </div>
      )}
    </div>
  );
}
