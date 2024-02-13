'use client';

import { useState } from 'react';
import { FiPlus } from 'react-icons/fi';
import styles from './tagForm.module.scss';
import AddDiaryTagModal from '../../modal/tag/AddDiaryTagModal';
import TagMenuBox from '../../menu/tag/TagMenuBox';

export default function AddDiaryTagForm({
  tags,
  setTags,
}: {
  tags: string[];
  setTags: (tags: string[]) => void;
}) {
  const [isModal, setIsModal] = useState(false);

  const handleModal = () => {
    setIsModal(!isModal);
  };

  const handleDeleteTag = (name: string) => {
    if (tags.includes(name)) {
      setTags(tags.filter((t) => t !== name));
    }
  };

  return (
    <>
      <div className={styles['tags-container']}>
        {tags.length === 0 ? (
          <div className={styles['add-tag-text-button']} onClick={handleModal}>
            タグを追加
            <FiPlus />
          </div>
        ) : (
          tags.map((tag) => (
            <TagMenuBox name={tag} onDelete={handleDeleteTag} />
          ))
        )}
        {tags.length > 0 && tags.length < 5 && (
          <div className={styles['add-tag-button']} onClick={handleModal}>
            <FiPlus />
          </div>
        )}
      </div>
      {isModal && (
        <AddDiaryTagModal tags={tags} setTags={setTags} onClose={handleModal} />
      )}
    </>
  );
}
