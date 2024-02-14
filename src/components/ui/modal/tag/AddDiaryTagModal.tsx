'use client';

import { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { FaTags } from 'react-icons/fa6';
import { tags as tagList } from '@/lib/data/tag/tags';
import RecommendTagBox from '@/components/tag/RecommendTagBox';
import modalStyles from '../modal.module.scss';
import styles from './tagModal.module.scss';
import AddTagIndexMenu from '../../menu/tag/AddTagIndexMenu';
import TagMenuBox from '../../menu/tag/TagMenuBox';
import SelectMenuToggle from '../../toggle/menu/SelectMenuDoubleToggle';

export default function AddDiaryTagModal({
  tags,
  setTags,
  onClose,
}: {
  tags: string[];
  setTags: (tags: string[]) => void;
  onClose: () => void;
}) {
  const [inputVal, setInputVal] = useState('');
  const [isTagMenu, setIsTagMenu] = useState(false);
  const [isPrevent, setIsPrevent] = useState(false);
  const [seenMenu, setSeenMenu] = useState<string | null>(null);
  const [isToggle, setIsToggle] = useState(0);
  let recommendTagIndex = [];

  if (isToggle === 0) {
    recommendTagIndex = tagList.slice(0, 10);
  } else {
    recommendTagIndex = tagList.slice(0, 7);
  }

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (inputVal.length > 0 && tags.length < 5 && !tags.includes(inputVal)) {
      if (seenMenu) {
        setTags([...tags, seenMenu]);
        setInputVal('');
      } else {
        setTags([...tags, inputVal]);
        setInputVal('');
      }
    }
  };

  const handleCloseMenu = () => {
    if (!isPrevent) {
      setIsTagMenu(false);
    }
  };

  const handlePrevent = (bool: boolean) => {
    setIsPrevent(bool);
  };

  const handleToggle = (num: number) => {
    setIsToggle(num);
  };

  const handleKeyDown = (e: {
    keyCode: number;
    ctrlKey: boolean;
    key: string;
  }) => {
    if (
      (e.key === 'Backspace' || (e.ctrlKey && e.key === 'h'))
      && inputVal.trim() === ''
      && tags.length > 0
    ) {
      setTags(tags.slice(0, -1));
    }
  };

  const addTag = (tag: string) => {
    if (tags.length < 5 && !tags.includes(tag)) {
      setTags([...tags, tag]);
      setInputVal('');
    }
  };

  const deleteTag = (tag: string) => {
    if (tags.includes(tag)) {
      setTags(tags.filter((t) => t !== tag));
    }
  };

  const handleSeenMenu = (menu: string | null) => {
    setSeenMenu(menu);
  };

  return (
    <>
      <div className={modalStyles['modal-container']}>
        <div className={modalStyles['modal-form']}>
          <div className={modalStyles['close-button']} onClick={onClose}>
            <RxCross2 />
          </div>
          <div className={modalStyles['modal-top']}>
            <div className={modalStyles['modal-title']}>
              <FaTags />
              タグを追加
            </div>
            <p className={modalStyles['modal-description']}>
              使用した技術などを、タグとして追加しましょう。
            </p>
          </div>
          <div className={styles['add-tag-container']}>
            <form
              className={styles['input-container']}
              onFocus={() => setIsTagMenu(true)}
              onBlur={handleCloseMenu}
              onSubmit={handleSubmit}
            >
              {tags.map((tag) => (
                <TagMenuBox name={tag} onDelete={deleteTag} />
              ))}
              {tags.length < 5 && (
                <input
                  className={styles['search-input']}
                  placeholder={
                    tags.length === 0 ? 'タグを5つまで追加' : '追加する'
                  }
                  maxLength={15}
                  value={inputVal}
                  style={{ width: tags.length === 0 ? '100%' : 'auto' }}
                  onChange={(e) => setInputVal(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
              )}
              {isTagMenu && inputVal.length > 0 && (
                <AddTagIndexMenu
                  val={inputVal}
                  selectTags={tags}
                  addTag={addTag}
                  handlePrevent={handlePrevent}
                  handleSeen={handleSeenMenu}
                />
              )}
            </form>
          </div>
          <SelectMenuToggle leftText='おすすめ' rightText='人気' which={isToggle} onChange={handleToggle} />
          <div className={styles['tags-container']}>
            {recommendTagIndex.map((item) => (
              <RecommendTagBox
                name={item.name}
                text={item.text}
                img={item.img}
                handleClick={addTag}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={modalStyles['bg-pink']} onClick={onClose} />
    </>
  );
}
