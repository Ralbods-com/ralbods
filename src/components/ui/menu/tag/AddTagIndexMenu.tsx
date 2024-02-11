'use client';

import { useEffect, useState } from 'react';
import { tags } from '@/lib/data/tag/tags';
import styles from './tagMenu.module.scss';

export default function AddTagIndexMenu({
  val,
  selectTags,
  addTag,
  handlePrevent,
  handleSeen,
}: {
  val: string;
  selectTags: string[];
  addTag: (tag: string) => void;
  handlePrevent: (bool: boolean) => void;
  handleSeen: (menu: string | null) => void;
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const baseTagIndex = tags.filter((tag) =>
    tag.name.startsWith(val.toLocaleLowerCase()),
  );
  const tagIndex = baseTagIndex.filter((tag) => !selectTags.includes(tag.name));

  if (tagIndex.length === 0) {
    handleSeen(null);
  } else {
    const tag = tagIndex[activeIndex];
    if (tag) {
      handleSeen(tag.name);
    } else {
      handleSeen(null);
    }
  }

  const handleKeyDown = (e: { ctrlKey: boolean; key: string }) => {
    if (tagIndex.length !== 0) {
      if (
        (e.key === 'ArrowUp' || (e.ctrlKey && e.key === 'p')) &&
        activeIndex > 0
      ) {
        // Up Arrow
        setActiveIndex(activeIndex - 1);
        handleSeen(tagIndex[activeIndex].name);
      } else if (
        (e.key === 'ArrowDown' || (e.ctrlKey && e.key === 'n')) &&
        activeIndex < tagIndex.length - 1
      ) {
        // Down Arrow
        setActiveIndex(activeIndex + 1);
      }
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  if (!tagIndex[activeIndex]) {
    return <div />;
  }

  return (
    <ul
      className={styles['add-tag-index-container']}
      style={{
        display: tagIndex.length === 0 ? 'none' : 'block',
        top: `calc(3rem + ${selectTags.length * 1}rem)`,
      }}
      onMouseDown={() => handlePrevent(true)}
      onMouseUp={() => handlePrevent(false)}
    >
      {tagIndex.map((tag) => (
        <li
          className={styles['add-tag-index-item']}
          style={{
            backgroundColor:
              tagIndex[activeIndex].name === tag.name
                ? 'rgba(var(--primary-pink), 0.3)'
                : '',
          }}
          onClick={() => addTag(tag.name)}
          key={tag.name}
        >
          {tag.text}
        </li>
      ))}
    </ul>
  );
}
