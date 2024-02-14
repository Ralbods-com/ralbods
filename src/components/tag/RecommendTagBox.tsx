'use client';

import styles from './tag.module.scss';

export default function RecommendTagBox({
  name,
  text,
  img,
  handleClick,
}: {
  name: string;
  text: string;
  img: string | null;
  handleClick: (text: string) => void;
}) {
  return (
    <div
      className={styles['tag-box']}
      key={name}
      onClick={() => handleClick(name)}
    >
      {img && <img src={img} alt={name} className={styles['tag-box-img']} />}
      {text}
    </div>
  );
}
