'use client';

import Image from 'next/image';
import { returnMindBoxData } from '@/lib/function/mind/returnMindBoxData';
import styles from './mind.module.scss';

export default function SelectMindBox({
  kind, isSelect, selectMind,
}: {
  kind: number, isSelect: number, selectMind: (mind: number) => void,
}) {
  const mindData = returnMindBoxData(kind);

  const handleSelectMind = () => {
    if (isSelect !== kind) {
      selectMind(kind);
    }
  };

  return (
    <div
      className={styles['select-container']}
      onClick={handleSelectMind}
    >
      <div
        className={styles['select-box']}
        style={{ backgroundColor: isSelect === kind ? `rgba(${mindData.color}, 0.2)` : '' }}
      >
        <Image src={mindData.image} alt='mind' width={200} className={styles['select-box-icon']} />
      </div>
      <p
        className={styles['select-box-description']}
        style={kind === isSelect ? { fontWeight: 600 } : { color: 'rgb(var(--pale-text-color))', fontWeight: 500 }}
      >
        {mindData.percentage}
      </p>
    </div>
  );
}
