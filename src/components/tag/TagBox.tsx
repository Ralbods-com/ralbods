'use client';

import { returnTagData } from '@/lib/function/tag/returnTagData';
import { FaTag } from 'react-icons/fa6';
import styles from './tag.module.scss';

export default function TagBox({ kind } : { kind: string }) {
  const tagData = returnTagData(kind);

  return (
    <div className={styles['normal-tag-box']}>
      {tagData.img ? (
        <img src={tagData.img} alt={tagData.name} className={styles['tag-box-img']} />
      ) : (
        <div className={styles['tag-box-img-default']}>
          <FaTag />
        </div>
      )}
      {tagData.text}
    </div>
  );
}
