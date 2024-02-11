'use client';

import { useState } from 'react';
import { RiLightbulbFlashLine } from 'react-icons/ri';
import styles from './createDiaryFormArea.module.scss';
import CreateDiaryForm from './CreateDiaryForm';
import CreateDiaryFormFooter from '../../footer/diary/CreateDiaryFormFooter';
import DiaryPrevToggle from '../../toggle/diary/DiaryPrevToggle';
import CreateDiaryFormPreview from './CreateDiaryFormPreview';
import CreateDiaryFormHeader from '../../header/diary/CreateDiaryFormHeader';
import AddDiaryTagForm from '../tag/AddDiaryTagForm';
import DiaryFormSideButton from '../../button/diary/DiaryFormSideButton';

export default function CreateDiaryFormArea() {
  const [isPrev, setIsPrev] = useState(false);
  const [title, estTitle] = useState('');
  const [bodyText, setBodyText] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [cursorPos, setCursorPos] = useState(0);
  const [focusTextArea, setFocusTextArea] = useState(10);

  const handlePreview = (select: boolean) => {
    setIsPrev(select);
  };

  const changeBodyText = (val: string) => {
    setBodyText(val);
  };

  const changeCursorPos = (pos: number) => {
    setCursorPos(pos);
  };

  const selectDiaryTag = (newTags: string[]) => {
    setTags(newTags);
  };

  const handleFocusArea = () => {
    setFocusTextArea(focusTextArea + 1);
  };

  return (
    <>
      <CreateDiaryFormHeader body={bodyText} tags={tags} />
      <div className={styles['all-container']}>
        <div className={styles['all-wrapper']}>
          <div className={styles['top-container']}>
            <input
              className={styles['title-input']}
              type='text'
              placeholder='タイトルを入力'
              maxLength={30}
              value={title}
              onChange={(e) => estTitle(e.target.value)}
            />
          </div>
          <div className={styles['main-container']}>
            <div className={styles['form-container']}>
              <AddDiaryTagForm tags={tags} setTags={selectDiaryTag} />
              {isPrev ? (
                <CreateDiaryFormPreview mdText={bodyText} />
              ) : (
                <CreateDiaryForm
                  val={bodyText}
                  setVal={changeBodyText}
                  cursorPos={cursorPos}
                  setCursorPos={changeCursorPos}
                  focusTrigger={focusTextArea}
                />
              )}
            </div>
            <div className={styles['side-menu-container']}>
              <DiaryPrevToggle isPrev={isPrev} handlePrev={handlePreview} />
              <DiaryFormSideButton
                Icon={RiLightbulbFlashLine}
                func={() => {}}
                url='https://ralbods.com/guidline'
                menuText='ガイドライン'
              />
            </div>
          </div>
        </div>
        <CreateDiaryFormFooter
          val={bodyText}
          setVal={changeBodyText}
          cursorPos={cursorPos}
          setCursorPos={changeCursorPos}
          handleFocus={handleFocusArea}
        />
      </div>
    </>
  );
}
