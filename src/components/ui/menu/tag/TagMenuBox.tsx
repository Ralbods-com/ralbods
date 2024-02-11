'use client';

import { RxCross2 } from 'react-icons/rx';
import { returnTagData } from '@/lib/function/tag/returnTagData';
import styles from './tagMenu.module.scss';

export default function TagMenuBox({
  name,
  onDelete,
}: {
  name: string;
  onDelete: (name: string) => void;
}) {
  const tagData = returnTagData(name);

  return (
    <div className={styles['tag-box']}>
      {tagData.img !== '' && (
        <img
          src={tagData.img}
          alt={tagData.name}
          className={styles['tag-box-img']}
        />
      )}
      {tagData.text}
      <div className={styles['tag-box-delete']} onClick={() => onDelete(name)}>
        <RxCross2 />
      </div>
    </div>
  );
}
